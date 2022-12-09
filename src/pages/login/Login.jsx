import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login, registration } from "../../http/userApi";
import { useContext, useState } from "react";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import useTheme from "../../hooks/useTheme";
import { useEffect } from "react";

const Login = observer(() => {
    const { user } = useContext(Context);
    const { setIsHeader } = useTheme();
    useEffect(() => {
        setIsHeader(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === "/login";

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password, username);
            }
            user.setUser(data);
            user.setIsAuth(true);
            navigate("/user/profile");
        } catch (e) {
            //переделать вывод ошибок
            alert(e.response.data.message);
            reset({
                username: "",
                email: "",
                password: "",
            });
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onChange",
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    });

    return (
        <form
            // onSubmit={(e) => handleSubmit(onSubmit(e))}
            className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:w-fit dark:bg-dark-light bg-light rounded-[34px] self-center justify-center p-10 sm:w-96"
        >
            <div className="flex items-center justify-center font-stalinist">
                {isLogin ? "Вход" : "Регистрация"}
            </div>
            {!isLogin && (
                <>
                    <span className="mt-10 mb-2 font-semibold">
                        Имя пользователя
                    </span>
                    <input
                        {...register("username", {
                            required: "Username is required",
                        })}
                        tabIndex="1"
                        type="text"
                        className="border-b-2 border-b-white focus:border-b-orange-500 outline-none caret-orange-500 duration-300 px-2 py-2 bg-transparent"
                        placeholder={`Введите имя пользователя`}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </>
            )}
            <span className="mt-10 mb-2">{isLogin ? "Логин" : "Email"}</span>
            <input
                {...register("email", {
                    required: "Login is required",
                })}
                tabIndex="1"
                type="text"
                className="border-b-2 border-b-white px-2 py-2 bg-transparent focus:border-b-orange-500 outline-none caret-orange-500 duration-300"
                placeholder="Введите логин"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {errors?.login && (
                <div className="text-red-500">{errors.login.message}</div>
            )}

            {/* Поле пароль */}
            <span className="mt-10 mb-2">Пароль</span>
            <input
                {...register("password", {
                    required: "Password is required",
                    minLength: 6,
                })}
                tabIndex="1"
                type="password"
                className="border-b-2 border-b-white px-2 py-2 bg-transparent focus:border-b-orange-500 outline-none caret-orange-500 duration-300"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {errors?.password && (
                <div className="text-red-500">{errors.password.message}</div>
            )}
            <button
                tabIndex="1"
                type="button"
                onClick={click}
                className="btn mt-6 bg-orange-500 focus:bg-orange-600 hover:bg-orange-600 2xl:px-28 py-3 font-semibold"
            >
                {isLogin ? "Войти" : "Регистрация"}
            </button>
            <Link
                tabIndex="1"
                to={isLogin ? "/registration" : "/login"}
                className="text-center mt-3 hover:underline"
            >
                {`${isLogin ? "Регистрация" : "Уже есть аккаунт"}`}
            </Link>
        </form>
    );
});

export default Login;

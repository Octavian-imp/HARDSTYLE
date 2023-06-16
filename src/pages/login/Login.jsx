import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import useTheme from "../../hooks/useTheme"
import useUser from "../../hooks/useUser"
import {
    useCreateUserMutation,
    useSetUserMutation,
} from "../../http/userAuthApi.RTK"

const Login = () => {
    const user = useUser()
    const dispatch = useDispatch()

    const { setIsHeader } = useTheme()
    useEffect(() => {
        setIsHeader(false)
    }, [])

    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === "/login"
    const [setUser] = useSetUserMutation()
    const [createUser] = useCreateUserMutation()

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    // if (isErrorLogin) {
    //     alert(errorLogin.status)
    //     return
    // }
    // if (isErrorRegister) {
    //     alert(errorLogin.status)
    // }

    const click = async (event) => {
        event.preventDefault()
        try {
            if (isLogin) {
                await setUser({ email, password }).unwrap()
            } else {
                await createUser({
                    email,
                    password,
                    username,
                    role: "ADMIN",
                }).unwrap()
            }
            navigate("/user/profile")
        } catch (err) {
            alert(
                `Ошибка: ${err.data.message}. \nСтраница будет перезагружена после нажатия на кнопку 'ОК'`
            )
            reset({
                username: "",
                email: "",
                password: "",
            })
        }
    }

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
    })

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
                    required: "Email is required",
                })}
                tabIndex="1"
                type="email"
                className="border-b-2 border-b-white px-2 py-2 bg-transparent focus:border-b-orange-500 outline-none caret-orange-500 duration-300"
                placeholder="Введите email"
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
                onClick={(event) => {
                    click(event)
                }}
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
    )
}

export default Login

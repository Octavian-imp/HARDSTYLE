import { Link } from "react-router-dom"
import { SubmitHandler, useForm } from "react-hook-form"
import Input from "../../components/input/Input"
import MainContainer from "../../components/MainContainer"

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  })
  const onSubmit = (data) => {
    alert(data.login)
  }

  return (
    <MainContainer isHeader={false}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:w-fit dark:bg-dark-light bg-light rounded-[34px] self-center justify-center p-10 sm:w-96"
      >
        <div className="flex items-center justify-center font-stalinist">
          Вход
        </div>

        {/* Поле логин */}
        <span className="mt-10 mb-2">Логин</span>
        <input
          {...register("login", {
            required: "Login is required",
          })}
          type="text"
          className="border-b-2 border-b-white px-2 py-2 bg-transparent focus:border-b-orange-500 outline-none caret-orange-500 duration-300"
          placeholder="Введите логин"
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
          type="password"
          className="border-b-2 border-b-white px-2 py-2 bg-transparent focus:border-b-orange-500 outline-none caret-orange-500 duration-300"
          placeholder="Введите пароль"
        />
        {errors?.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}
        <button className="btn mt-6 bg-orange-500 hover:bg-orange-600 2xl:px-28 py-3 font-semibold">
          Войти
        </button>
        <Link to={"/registration"} className="text-center mt-3 hover:underline">
          Регистрация
        </Link>
      </form>
    </MainContainer>
  )
}

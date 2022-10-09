import Input from "../../components/input/Input"
import MainContainer from "../../components/MainContainer"

export default function Registration() {
  return (
    <MainContainer isHeader={false}>
      <form
        action=""
        className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:w-fit dark:bg-dark-light bg-light rounded-[34px] self-center justify-center p-10 sm:w-96"
      >
        <div className="flex items-center justify-center font-stalinist">
          Регистрация
        </div>
        <Input label="Имя" />
        <Input label="Фамилия" />
        <Input label="Логин" />
        <Input label="Пароль" type="password" />
        <button className="btn mt-6 bg-orange-500 hover:bg-orange-600 2xl:px-28 py-3 font-semibold">
          Регистрация
        </button>
      </form>
    </MainContainer>
  )
}

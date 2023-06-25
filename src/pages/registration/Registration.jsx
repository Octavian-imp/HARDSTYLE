import { useState } from "react"
import MainContainer from "../../components/MainContainer.jsx"
import { registration } from "../../http/userApi"

export default function Registration() {
    let [username, setUsername] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    const register = async () => {
        const data = await registration(email, password, username)
        console.log(data)
    }
    return (
        <MainContainer isHeader={false}>
            <form className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:w-fit dark:bg-dark-light bg-light rounded-[34px] self-center justify-center p-10 sm:w-96">
                <div className="flex items-center justify-center font-stalinist">
                    Регистрация
                </div>

                <span className="mt-10 mb-2 font-semibold">
                    Имя пользователя
                </span>
                <input
                    type="text"
                    className="border-b-2 border-b-white focus:border-b-orange-500 outline-none caret-orange-500 duration-300 px-2 py-2 bg-transparent"
                    placeholder={`Введите имя пользователя`}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <span className="mt-10 mb-2 font-semibold">Email</span>
                <input
                    type="email"
                    className="border-b-2 border-b-white focus:border-b-orange-500 outline-none caret-orange-500 duration-300 px-2 py-2 bg-transparent"
                    placeholder={`Введите email`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <span className="mt-10 mb-2 font-semibold">Пароль</span>
                <input
                    type="password"
                    className="border-b-2 border-b-white focus:border-b-orange-500 outline-none caret-orange-500 duration-300 px-2 py-2 bg-transparent"
                    placeholder={`Введите пароль`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={register}
                    type="button"
                    className="btn mt-6 bg-orange-500 hover:bg-orange-600 2xl:px-28 py-3 font-semibold"
                >
                    Регистрация
                </button>
            </form>
        </MainContainer>
    )
}

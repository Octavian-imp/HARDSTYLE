import { IoMdSave } from "react-icons/io"
import { RiEditBoxFill } from "react-icons/ri"
// import imgUser from "../../../assets/item.jpg";
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import useTheme from "../../../hooks/useTheme"
import useUser from "../../../hooks/useUser"
import { useUpdateUserMutation } from "../../../http/userAuthApi.RTK"

export default function Profile() {
    const user = useUser()
    const [updateInfo] = useUpdateUserMutation()

    const { setIsHeader } = useTheme()
    useEffect(() => {
        setIsHeader(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const [urlAvatar, setUrlAvatar] = useState(
        process.env.REACT_APP_API_URL + user.avatarURL
    )
    const [isEdit, setIsEdit] = useState(false)
    const date = new Date()
    const currDate = `${date.getFullYear()}-${
        date.getMonth() + 1
    }-${date.getDate()}`
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        mode: "onChange",
        defaultValues: {
            username: user.username,
            birthDay: user.birthDay,
            avatar: process.env.ROOT_URL_AVATAR + user.avatarURL,
        },
    })
    const onSubmit = async (data) => {
        try {
            await updateInfo({
                id: user.id,
                newUsername: data.username,
                newAvatar: data.avatar,
                birthDay: data.birthDay,
            })
                .unwrap()
                .then(() => {
                    alert("Информация обновлена")
                })
                .catch((err) => {
                    console.error(err)
                })
            setIsEdit(false)
        } catch (error) {
            if (error.status === 404) {
                alert("Имя пользователя уже занято")
            }
            console.error(error)
        }
    }
    const uploadImg = (el) => {
        if (el.target.files[0]) {
            setUrlAvatar(el.target.files[0])
            const reader = new FileReader()
            reader.addEventListener("load", () => {
                setUrlAvatar(reader.result)
                setValue("avatar", el.target.files[0])
            })
            reader.readAsDataURL(el.target.files[0])
        }
    }

    return (
        <>
            <div className="lg:text-xl xl:text-2xl font-semibold flex items-center w-fit">
                Профиль
                <button
                    className="dark:text-white text-black bg-transparent ml-2 cursor-pointer"
                    onClick={() => setIsEdit(!isEdit)}
                >
                    <RiEditBoxFill />
                </button>
            </div>
            <form
                className="flex lg:flex-row flex-col-reverse"
                onSubmit={handleSubmit(onSubmit)}
                encType="multipart/form-data"
            >
                <div className="flex flex-col space-y-3">
                    <div className="mt-6">
                        <span className="mt-10 mb-2 font-semibold">
                            Username
                        </span>
                        <input
                            {...register("username", {
                                required:
                                    "Имя пользователя не должно быть пустым",
                            })}
                            className={`border-b-2 ${
                                isEdit
                                    ? "dark:border-b-white border-b-black focus:border-b-orange-500 duration-300"
                                    : "border-b-transparent"
                            } outline-none caret-orange-500 px-2 py-2 bg-transparent`}
                            disabled={!isEdit}
                            required
                        />
                        {errors?.username && (
                            <div className="text-red-500">
                                {errors.username.message}
                            </div>
                        )}
                    </div>
                    {/* <div>
                        <span className="font-semibold mr-2">Пол</span>
                        <select
                            {...register("gender")}
                            className={`border-b-2 ${
                                isEdit
                                    ? " dark:border-b-white border-b-black"
                                    : "border-b-transparent"
                            } bg-transparent outline-none cursor-pointer`}
                            disabled={!isEdit && true}
                        >
                            <option
                                value="male"
                                className=" dark:bg-dark-light hover:bg-orange-500"
                            >
                                Мужской
                            </option>
                            <option
                                value="female"
                                className=" dark:bg-dark-light hover:bg-orange-500"
                            >
                                Женский
                            </option>
                        </select>
                    </div> */}
                    <div>
                        <span className="font-semibold mr-2">
                            День рождения
                        </span>
                        <input
                            {...register("birthDay", {
                                required: "Укажите дату рождения",
                            })}
                            type="date"
                            className={`border-b-2 ${
                                isEdit
                                    ? "dark:border-b-white border-b-black focus:border-b-orange-500 duration-300"
                                    : "border-b-transparent"
                            } outline-none caret-orange-500  px-2 py-2 bg-transparent`}
                            disabled={!isEdit}
                            max={currDate}
                            required
                        />
                        {errors?.birthDay && (
                            <div className="text-red-500">
                                {errors.birthDay.message}
                            </div>
                        )}
                    </div>
                    {isEdit && (
                        <button
                            type="submit"
                            className="flex items-center font-semibold justify-center px-5 py-2 bg-orange-400 hover:bg-orange-500"
                        >
                            <IoMdSave className="mr-2 text-xl" />
                            Сохранить изменения
                        </button>
                    )}
                </div>
                <div
                    className="relative h-44 w-44 ml-11 lg:ml-32 self-center"
                    style={{ clipPath: "circle(50% at 50% 50% )" }}
                >
                    <img
                        src={urlAvatar}
                        alt=""
                        className="h-[inherit] w-full object-cover"
                    />
                    {isEdit && (
                        <label className="absolute top-0 left:0 bg-zinc-500 z-10 h-full w-full opacity-0 duration-200 hover:opacity-50 flex items-center justify-center cursor-pointer">
                            <input
                                {...register("avatar")}
                                type="file"
                                accept="image/jpg,image/png,image/jpeg | .png,.jpg,.jpeg | image/*"
                                className="hidden"
                                id="inputImg"
                                onChange={uploadImg}
                            />
                            <div className="flex items-center justify-center">
                                <RiEditBoxFill className="mr-2" />
                                Изменить
                            </div>
                        </label>
                    )}
                </div>
            </form>
        </>
    )
}

import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import "../../../components/inputRadio/InputRadio.scss"
import { useGetCategoriesQuery } from "../../../http/categoryAPI.RTK"
import { createProduct } from "../../../http/productAPI"

const AddProduct = () => {
    const { data: categories, isError } = useGetCategoriesQuery()

    const [categoryId, setCategoryId] = useState("")
    const [gender, setGender] = useState("male")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const info = []
    const [price, setPrice] = useState(0)

    //работа с картинками и превью к ним
    const [images, setImages] = useState([])
    const [imageURLs, setImageURLs] = useState([])
    useEffect(() => {
        if (images.length < 1) return
        const newImageURLs = []
        images.forEach((image) => newImageURLs.push(URL.createObjectURL(image)))
        setImageURLs(newImageURLs)
    }, [images])
    const uploadImg = (e) => {
        setImages([...e.target.files])
    }

    //работа с формой
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm({
    //     mode: "onChange",
    //     defaultValues: {
    //         photo: "",
    //         category: "",
    //         gender: "male",
    //         count: "",
    //         price: "",
    //     },
    // });

    //работа с размерами
    const [sizes, setSizes] = useState([
        { size: "", count: 0, number: uuidv4() },
    ])
    const addSize = () => {
        setSizes([...sizes, { size: "", count: 0, number: uuidv4() }])
    }
    const deleteSize = (number) => {
        setSizes(sizes.filter((item) => item.number !== number))
    }
    const changeSize = (key, value, number) => {
        setSizes(
            sizes.map((i) => (i.number === number ? { ...i, [key]: value } : i))
        )
    }

    // отправка данных
    const addProduct = async () => {
        // поле описания вставляем в массив info
        const formData = new FormData()
        formData.append("name", name)
        formData.append("gender", gender)
        formData.append("price", `${price}`)
        formData.append("categoryId", `${categoryId}`)
        formData.append("sizes", JSON.stringify(sizes))
        formData.append(
            "info",
            JSON.stringify([
                ...info,
                { title: "description", description: description },
            ])
        )
        // TODO:исправить на массив картинок
        formData.append("img", images.at(0))
        createProduct(formData)
            .then((data) => alert("Товар успешно добавлен: ", data.name))
            .catch((er) => alert(er.response.data.message))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        addProduct()
    }
    return (
        <>
            <div className="text-xl lg:text-3xl font-semibold mb-6">
                Добавить товар
            </div>
            <form
                onSubmit={(e) => onSubmit(e)}
                className="dark:bg-dark-light bg-light rounded-2xl px-4 py-3 flex flex-col"
            >
                <div className="flex flex-col lg:flex-row mb-3">
                    <div className="space-y-4 2xl:w-4/5 lg:w-3/5">
                        <span className="text-2xl font-semibold">О товаре</span>
                        <div className="flex-col ml-2 space-y-3">
                            <div className="flex flex-col justify-center items-start">
                                <label
                                    htmlFor="productCategory"
                                    className="mr-2 mb-1 font-semibold"
                                >
                                    Категория товара
                                </label>
                                <select
                                    id="productCategory"
                                    // {...register("category", {
                                    //     required: "Выберите категорию товара",
                                    // })}
                                    value={categoryId}
                                    required
                                    onChange={(e) =>
                                        setCategoryId(e.target.value)
                                    }
                                    className="bg-transparent border-2 px-2 py-1 rounded-lg border-zinc-700 focus:border-orange-500 hover:border-zinc-500 duration-200 outline-none pr-3 cursor-pointer"
                                >
                                    <option value="" disabled selected>
                                        Выберите категорию
                                    </option>
                                    {!isError &&
                                        categories.map((el) => (
                                            <option key={el.id} value={el.id}>
                                                {el.name}
                                            </option>
                                        ))}
                                </select>
                            </div>
                            {/* {errors?.category && (
                                <span className="text-red-500">
                                    {errors.category.message}
                                </span>
                            )} */}
                            <div className="flex flex-col">
                                <span className="mb-1 font-semibold">Пол</span>
                                <label
                                    className="relative w-fit"
                                    style={{ cursor: "pointer" }}
                                >
                                    <input
                                        type="radio"
                                        name="gender"
                                        id="male"
                                        className="relative inputRadio mr-4"
                                        defaultChecked
                                        onChange={(e) => setGender(e.target.id)}
                                    />
                                    Мужской
                                </label>
                                <label
                                    className="relative w-fit"
                                    style={{ cursor: "pointer" }}
                                >
                                    <input
                                        type="radio"
                                        name="gender"
                                        id="female"
                                        className="relative inputRadio mr-4"
                                        onChange={(e) => setGender(e.target.id)}
                                    />
                                    Женский
                                </label>
                            </div>
                            <div className="flex flex-col justify-start">
                                <div className="flex flex-col justify-center items-start">
                                    <label
                                        htmlFor="productName"
                                        className="mr-2 mb-1 font-semibold"
                                    >
                                        Название товара
                                    </label>
                                    <input
                                        type="text"
                                        id="productName"
                                        value={name}
                                        required
                                        onChange={(e) => {
                                            setName(e.target.value)
                                        }}
                                        // {...register("productName", {
                                        //     required:
                                        //         "Необходимо указать название товара",
                                        // })}
                                        className="bg-transparent border-2 rounded-lg sm:w-64 px-2 py-1 border-zinc-700 focus:border-orange-500 hover:border-zinc-500 duration-200"
                                    />
                                </div>
                                {/* {errors?.productName && (
                                    <span className="text-red-500">
                                        {errors.productName.message}
                                    </span>
                                )} */}
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="description"
                                    className="font-semibold mb-1"
                                >
                                    Описание товара
                                </label>
                                <textarea
                                    id="description"
                                    required
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                    // {...register("description", {
                                    //     required: "Поле не может быть пустым",
                                    // })}
                                    rows="5"
                                    className="lg:w-4/5 bg-transparent border-2 rounded-lg px-2 py-1 border-zinc-700 focus:border-orange-500 hover:border-zinc-500 duration-200 outline-none"
                                    placeholder="Укажите описание товара"
                                    maxLength={255}
                                ></textarea>
                                {/* {errors?.description && (
                                    <span className="text-red-500">
                                        {errors.description.message}
                                    </span>
                                )} */}
                            </div>
                        </div>
                        <div className="text-xl font-semibold">
                            Размеры и количество
                        </div>
                        <div className="flex flex-col items-start ml-2">
                            {sizes.map((i, index) => (
                                <div
                                    className="mt-3 flex space-x-3"
                                    key={i.number}
                                >
                                    <div className="flex flex-col justify-center">
                                        <label
                                            htmlFor={`size_${index}`}
                                            className="mr-2 mb-1 font-semibold"
                                        >
                                            Размер
                                        </label>
                                        <select
                                            id={`size_${index}`}
                                            // {...register(`size_${index}`, {
                                            //     required: "Выберите размер",
                                            // })}
                                            required
                                            onChange={(e) =>
                                                changeSize(
                                                    "size",
                                                    e.target.value,
                                                    i.number
                                                )
                                            }
                                            className="bg-transparent border-2 px-2 py-1 rounded-lg border-zinc-700 focus:border-orange-500 hover:border-zinc-500 duration-200 cursor-pointer"
                                        >
                                            <option value="" disabled selected>
                                                Выберите размер
                                            </option>
                                            {Number(categoryId) === 1 && (
                                                <option value="no size">
                                                    Без размера
                                                </option>
                                            )}
                                            <option value="s">S</option>
                                            <option value="m">M</option>
                                            <option value="l">L</option>
                                            <option value="xl">XL</option>
                                            <option value="2xl">2XL</option>
                                            <option value="3xl">3XL</option>
                                            <option value="4xl">4XL</option>
                                        </select>
                                    </div>

                                    {/* {errors?.size && (
                                        <span className="text-red-500">
                                            {errors.size.message}
                                        </span>
                                    )} */}
                                    <div className="flex flex-col justify-center items-start">
                                        <label
                                            htmlFor={`sizeCount_${index}`}
                                            className="mr-2 mb-1 font-semibold"
                                        >
                                            Количество (шт.)
                                        </label>
                                        <input
                                            id={`sizeCount_${index}`}
                                            type="number"
                                            required
                                            value={i.count}
                                            onChange={(e) =>
                                                changeSize(
                                                    "count",
                                                    e.target.value,
                                                    i.number
                                                )
                                            }
                                            // {...register("count", {
                                            //     required:
                                            //         "Поле не должно быть пустым",
                                            //     pattern: {
                                            //         value: /[0-9]+/gi,
                                            //     },
                                            // })}
                                            className="bg-transparent border-2 px-2 py-1 rounded-lg border-zinc-700 focus:border-orange-500 hover:border-zinc-500 duration-200"
                                        />
                                    </div>
                                    {/* {errors?.count && (
                                        <span className="text-red-500">
                                            {errors.count.message}
                                        </span>
                                    )} */}
                                    {sizes.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => deleteSize(i.number)}
                                            className="bg-red-500 hover:bg-red-600 px-4 py-1 font-semibold text-center rounded-2xl self-end"
                                        >
                                            Удалить размер
                                        </button>
                                    )}
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={addSize}
                                className="mt-4 bg-yellow-500 hover:bg-yellow-600 px-4 py-1 font-semibold text-center rounded-2xl"
                            >
                                Добавить размер
                            </button>
                        </div>
                        <div className="text-2xl font-semibold">Цена</div>
                        <div className="flex flex-col justify-center items-start">
                            <label
                                htmlFor="price"
                                className="mr-2 mb-1 font-semibold"
                            >
                                Стоимость за шт. (руб.)
                            </label>
                            <input
                                id="price"
                                type="number"
                                value={price}
                                required
                                onChange={(e) => setPrice(e.target.value)}
                                // {...register("price", {
                                //     required: "Необходимо указать стоимость",
                                //     pattern: {
                                //         value: /[0-9]+/gi,
                                //     },
                                // })}
                                className="bg-transparent border-2 px-2 py-1 rounded-lg border-zinc-700 focus:border-orange-500 hover:border-zinc-500 duration-200"
                            />
                        </div>
                        {/* {errors?.price && (
                            <span className="text-red-500">
                                {errors.price.message}
                            </span>
                        )} */}
                    </div>
                    <div className="2xl:w-1/5 lg:w-2/5 px-4 mt-3 lg:mt-0">
                        <div
                            className={`dark:bg-muted bg-dark-muted rounded-xl ${
                                images.length === 0 ? "h-64" : "h-auto"
                            } w-full overflow-hidden font-semibold text-lg`}
                        >
                            <input
                                // {...register("photo", {
                                //     required: "Выберите изображение товара",
                                // })}
                                id="photo"
                                required
                                type="file"
                                accept="image/jpg,image/png,image/jpeg | .png,.jpg,.jpeg | image/*"
                                className="hidden"
                                onChange={(e) => uploadImg(e)}
                            />
                            {images.length === 0 ? (
                                <label
                                    htmlFor="photo"
                                    className="w-full h-full cursor-pointer flex items-center justify-center"
                                >
                                    + Добавить изображения
                                </label>
                            ) : (
                                <div className="w-full h-full flex flex-col justify-center space-y-2 py-2">
                                    {imageURLs.map((image) => (
                                        <img
                                            key={uuidv4()}
                                            src={image}
                                            alt=""
                                            className="select-none object-cover lg:object-contain max-h-52 lg:h-auto w-full lg:w-auto"
                                        />
                                    ))}
                                    <label
                                        htmlFor="photo"
                                        className="text-center w-full cursor-pointer py-3 duration-200 hover:bg-orange-500"
                                    >
                                        Заменить
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:justify-end space-x-2 font-semibold">
                    <button type="submit" className="bg-green-500 px-3 py-2">
                        Добавить
                    </button>
                </div>
            </form>
        </>
    )
}

export default AddProduct

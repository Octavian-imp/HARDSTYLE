import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "../../../components/inputRadio/InputRadio.scss";
import { v4 as uuidv4 } from "uuid";

export default function AddProduct() {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        defaultValues: {
            photo: "",
            category: "",
            gender: "male",
            size: "",
            count: "",
            price: "",
        },
    });
    const onSubmit = (data) => {
        data.photo = images;
        console.log(data);
    };
    useEffect(() => {
        if (images.length < 1) return;
        const newImageURLs = [];
        images.forEach((image) =>
            newImageURLs.push(URL.createObjectURL(image))
        );
        setImageURLs(newImageURLs);
    }, [images]);

    const uploadImg = (e) => {
        setImages([...e.target.files]);
    };

    return (
        <>
            <div className="text-xl lg:text-3xl font-semibold mb-6">
                Добавить товар
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="dark:bg-dark-light bg-light rounded-2xl px-4 py-3 flex flex-col"
                encType="multipart/form-data"
                noValidate
            >
                <div className="flex flex-col lg:flex-row mb-3">
                    <div className="space-y-4 2xl:w-4/5 lg:w-3/5">
                        <span className="text-2xl font-semibold">О товаре</span>
                        <div className="flex-col ml-2 space-y-2">
                            <div className="flex flex-col sm:flex-row">
                                <span className="mr-2">Категория товара</span>
                                <select
                                    {...register("category", {
                                        required: "Выберите категорию товара",
                                    })}
                                    className="bg-transparent border-b-2 dark:border-b-white border-b-black dark:focus:border-b-orange-500 focus:border-b-orange-500 duration-300 outline-none pr-3 cursor-pointer"
                                >
                                    <option value="" disabled>
                                        Выберите категорию
                                    </option>
                                    <option>Футболка</option>
                                    <option>Куртка</option>
                                </select>
                            </div>
                            {errors?.category && (
                                <span className="text-red-500">
                                    {errors.category.message}
                                </span>
                            )}
                            <div className="flex flex-col">
                                <span>Пол</span>
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
                                    />
                                    Женский
                                </label>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-col sm:flex-row">
                                    <span className="mr-2">
                                        Название товара
                                    </span>
                                    <input
                                        type="text"
                                        {...register("productName", {
                                            required:
                                                "Необходимо указать название товара",
                                        })}
                                        className="bg-transparent border-b-2 dark:border-b-white border-b-black dark:focus:border-b-orange-500 focus:border-b-orange-500 duration-300"
                                    />
                                </div>
                                {errors?.productName && (
                                    <span className="text-red-500">
                                        {errors.productName.message}
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <span>Описание товара</span>
                                <textarea
                                    {...register("description", {
                                        required: "Поле не может быть пустым",
                                    })}
                                    rows="5"
                                    className="lg:w-4/5 mt-2 bg-transparent border-2 dark:border-white border-black rounded-xl px-3 py-2 dark:focus:border-orange-500 focus:border-orange-500 outline-none"
                                    placeholder="Укажите описание товара"
                                ></textarea>
                                {errors?.description && (
                                    <span className="text-red-500">
                                        {errors.description.message}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="text-xl font-semibold">
                            Размеры и количество
                        </div>
                        <div className="flex flex-col items-start ml-2">
                            <div className="flex">
                                <span className="mr-2">Размер</span>
                                <select
                                    {...register("size", {
                                        required: "Выберите размер",
                                    })}
                                    className="bg-transparent border-b-2 text-center dark:border-b-white border-b-black pr-2 dark:focus:border-b-orange-500 focus:border-b-orange-500"
                                >
                                    <option value="">&mdash;</option>
                                    <option value="s">S</option>
                                    <option value="m">M</option>
                                    <option value="l">L</option>
                                    <option value="xl">XL</option>
                                    <option value="2xl">2XL</option>
                                    <option value="3xl">3XL</option>
                                    <option value="4xl">4XL</option>
                                </select>
                            </div>
                            {errors?.size && (
                                <span className="text-red-500">
                                    {errors.size.message}
                                </span>
                            )}
                            <div className="flex flex-col sm:flex-row mt-2">
                                <span className="mr-2">Количество</span>
                                <input
                                    type="number"
                                    {...register("count", {
                                        required: "Поле не должно быть пустым",
                                        pattern: {
                                            value: /[0-9]+/gi,
                                        },
                                    })}
                                    className="bg-transparent border-b-2 dark:border-b-white border-b-black pr-2 w-fit dark:focus:border-b-orange-500 focus:border-b-orange-500"
                                />
                            </div>
                            {errors?.count && (
                                <span className="text-red-500">
                                    {errors.count.message}
                                </span>
                            )}
                            <button className="mt-3 bg-yellow-500 hover:bg-yellow-600 px-4 py-1 font-semibold text-center rounded-2xl ">
                                Добавить размер
                            </button>
                        </div>
                        <div className="text-2xl font-semibold">Цена</div>
                        <div className="flex flex-col sm:flex-row">
                            <span className="mr-2">
                                Стоимость за шт. (руб.)
                            </span>
                            <input
                                type="number"
                                {...register("price", {
                                    required: "Необходимо указать стоимость",
                                    pattern: {
                                        value: /[0-9]+/gi,
                                    },
                                })}
                                className="bg-transparent border-b-2 dark:border-b-white border-b-black pr-2 w-fit dark:focus:border-b-orange-500 focus:border-b-orange-500"
                            />
                        </div>
                        {errors?.price && (
                            <span className="text-red-500">
                                {errors.price.message}
                            </span>
                        )}
                    </div>
                    <div className="2xl:w-1/5 lg:w-2/5 px-4 mt-3 lg:mt-0">
                        <div
                            className={`dark:bg-muted bg-dark-muted rounded-xl ${
                                images.length === 0 ? "h-64" : "h-auto"
                            } w-full overflow-hidden font-semibold text-lg`}
                        >
                            <input
                                {...register("photo", {
                                    required: "Выберите изображение товара",
                                })}
                                multiple
                                id="photo"
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
                                <div className="w-full h-full flex flex-wrap justify-center space-y-2">
                                    {imageURLs.map((image) => (
                                        <img
                                            key={uuidv4()}
                                            src={image}
                                            alt=""
                                            className="select-none object-cover lg:object-contain h-52 lg:h-auto w-full lg:w-auto"
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
    );
}

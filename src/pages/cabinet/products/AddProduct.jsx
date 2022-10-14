import { useForm } from "react-hook-form";
import "../../../components/inputRadio/InputRadio.scss";

export default function AddProduct() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
    } = useForm({
        mode: "onChange",
        defaultValues: {
            category: "",
            gender: "male",
            size: "",
            count: "",
            price: "",
        },
    });
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <>
            <div className="text-xl lg:text-3xl font-semibold mb-6">
                Добавить товар
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="dark:bg-dark-light bg-light rounded-2xl px-4 py-3 flex flex-col"
                noValidate
            >
                <div className="flex mb-3">
                    <div className="space-y-4 w-4/5">
                        <span className="text-2xl font-semibold">О товаре</span>
                        <div className="flex-col ml-2 space-y-2">
                            <div className="flex">
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
                                <div className="text-red-500">
                                    {errors.category.message}
                                </div>
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
                                <div className="flex">
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
                                    <div className="text-red-500">
                                        {errors.productName.message}
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <span>Описание товара</span>
                                <textarea
                                    {...register("descripton", {
                                        required: "Поле не может быть пустым",
                                    })}
                                    cols="30"
                                    rows="5"
                                    className="mt-2 bg-transparent border-2 dark:border-white border-black rounded-xl px-3 py-2 dark:focus:border-orange-500 focus:border-orange-500 outline-none"
                                    placeholder="Укажите описание товара"
                                ></textarea>
                                {errors?.description && (
                                    <div className="text-red-500">
                                        {errors.description.message}
                                    </div>
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
                                    {...register("size")}
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
                            <div className="flex mt-2">
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
                            <button className="mt-3 bg-yellow-500 hover:bg-yellow-600 px-4 py-1 font-semibold text-center rounded-2xl ">
                                Добавить размер
                            </button>
                        </div>
                        <div className="text-2xl font-semibold">Цена</div>
                        <div className="flex">
                            <span className="mr-2">
                                Стоимость за шт. (руб.)
                            </span>
                            <input
                                type="number"
                                {...register("price", {
                                    required: "Поле не должно быть пустым",
                                    pattern: {
                                        value: /[0-9]+/gi,
                                    },
                                })}
                                className="bg-transparent border-b-2 dark:border-b-white border-b-black pr-2 w-fit dark:focus:border-b-orange-500 focus:border-b-orange-500"
                            />
                        </div>
                    </div>
                    <div className="w-1/5"></div>
                </div>
                <div className="flex justify-center md:justify-end space-x-2 font-semibold">
                    <button
                        type="button"
                        className="bg-red-500 px-3 py-2"
                        onClick={reset}
                    >
                        Очистить
                    </button>
                    <button type="submit" className="bg-green-500 px-3 py-2">
                        Добавить
                    </button>
                </div>
            </form>
        </>
    );
}

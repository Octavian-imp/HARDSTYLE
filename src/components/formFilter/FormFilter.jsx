import React, { useEffect } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { v4 as uuidv4 } from "uuid"
import { useFilterProductsMutation } from "../../http/productAPI.RTK"
import InputCheckbox from "../inputCheckbox/InputCheckbox"
import InputRangeCost from "../inputRangeCost/InputRangeCost"

export default function FormFilter() {
    const [filterProducts, { data, isSuccess }] = useFilterProductsMutation()

    const sizesCheckbox = [
        {
            name: "s",
            label: "S",
            isChecked: false,
            ref: "sizes",
        },
        {
            name: "m",
            label: "M",
            isChecked: false,
            ref: "sizes",
        },
    ]
    const genderCheckbox = [
        {
            name: "male",
            label: "Мужской",
            isChecked: false,
            ref: "gender",
        },
        {
            name: "female",
            label: "Женский",
            isChecked: false,
            ref: "gender",
        },
    ]
    const methods = useForm({
        mode: "onChange",
        defaultValues: {
            gender: genderCheckbox,
            sizes: sizesCheckbox,
        },
    })

    const onSubmit = (data) => {
        let reqSizes = data.sizes
        let reqGender = data.gender
        data.sizes = []
        data.gender = []
        reqSizes.forEach((item) => {
            if (item.isChecked) {
                data.sizes.push(item.name)
            }
        })
        reqGender.forEach((item) => {
            if (item.isChecked) {
                data.gender.push(item.name)
            }
        })
        filterProducts(data).unwrap()
    }

    return (
        <>
            <div className="text-center my-5 font-semibold text-xl">
                Фильтры
            </div>
            <FormProvider {...methods}>
                <form
                    noValidate
                    onSubmit={methods.handleSubmit(onSubmit)}
                    className="flex flex-col mb-4 mx-5"
                >
                    <span className="mb-3">Цена</span>
                    <InputRangeCost min={0} max={10000} step={500} />

                    {/* <span className="mb-3 font-semibold">Цвет</span>
                    {colorsCheckbox &&
                        colorsCheckbox.map((item) => (
                            <InputCheckbox
                                key={uuidv4()}
                                id={item.id}
                                label={item.label}
                                isChecked={item.isChecked}
                            />
                        ))} */}
                    <span className="mb-3 font-semibold">Размеры</span>
                    {sizesCheckbox &&
                        sizesCheckbox.map((item, index) => (
                            <InputCheckbox
                                key={uuidv4()}
                                label={item.label}
                                isChecked={item.isChecked}
                                name={item.name}
                                arr={item.ref}
                                index={index}
                            />
                        ))}
                    <span className="mb-3 mt-5 font-semibold">Пол</span>
                    {genderCheckbox &&
                        genderCheckbox.map((item, index) => (
                            <InputCheckbox
                                key={uuidv4()}
                                label={item.label}
                                isChecked={item.isChecked}
                                name={item.name}
                                arr={item.ref}
                                index={index}
                            />
                        ))}
                    <button
                        type="submit"
                        className="bg-orange-500 mt-5 py-1 font-semibold"
                    >
                        Фильтр
                    </button>
                </form>
            </FormProvider>
        </>
    )
}

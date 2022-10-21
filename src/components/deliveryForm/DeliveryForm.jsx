import { useState } from "react";
import { FaTruck } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

function CustomField({ name, label, type = "text", isRequired = false }) {
    return (
        <>
            <label htmlFor={name} className="text-lg mb-2">
                {label}
                {isRequired && <span className="text-red-500 ml-2">*</span>}
            </label>
            <input
                type={type}
                id={name}
                required={isRequired}
                className="text-lg bg-transparent py-1 px-3 rounded-lg border-2 border-zinc-700 focus:border-orange-500 hover:border-zinc-500 duration-200"
                aria-placeholder={`Введите ${label}`}
            />
        </>
    );
}

export default function DeliveryForm() {
    const [fields] = useState([
        {
            name: "city",
            label: "Город",
            isRequired: true,
        },
        {
            name: "street",
            label: "Улица",
            isRequired: true,
        },
        {
            name: "houseNumber",
            label: "Дом",
            isRequired: true,
        },
        {
            name: "frame",
            label: "Корпус",
        },
        {
            name: "flat",
            label: "Квартира",
            isRequired: true,
        },
    ]);

    return (
        <>
            <div className="text-2xl flex items-center">
                Адрес доставки <FaTruck className="ml-2" />
            </div>
            <div className="mt-5 px-3 flex flex-col space-y-2">
                {fields &&
                    fields.map((field) => (
                        <CustomField
                            key={uuidv4()}
                            name={field.name}
                            label={field.label}
                            isRequired={field.isRequired}
                        />
                    ))}
            </div>
        </>
    );
}

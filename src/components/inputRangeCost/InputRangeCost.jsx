import { useCallback, useEffect, useRef, useState } from "react"

import { useFormContext } from "react-hook-form"
import "./inputRangeCost.scss"

const InputRangeCost = ({ min, max, step }) => {
    const { register, setValue } = useFormContext()
    const progressGap = useRef(null)
    let [minVal, setMinVal] = useState(min)
    let [maxVal, setMaxVal] = useState(max)
    let minValRef = useRef(null)
    let maxValRef = useRef(null)
    const costGap = 500

    const inputCost = useCallback(
        (item) => {
            if (item.id === "cost-min") {
                if (
                    +item.value <=
                    +document.getElementById("cost-max").value - costGap
                ) {
                    setMinVal(+item.value)
                    setValue("minCost", +item.value)
                    let left = (+minVal / +item.max) * 100
                    progressGap.current.style.left = `${String(left)}%`
                }
            } else if (item.id === "cost-max") {
                if (
                    +item.value - costGap >=
                    +document.getElementById("cost-min").value
                ) {
                    setMaxVal(+item.value)
                    setValue("maxCost", +item.value)
                    let right = 100 - (+maxVal / +item.max) * 100
                    progressGap.current.style.right = `${String(right)}%`
                }
            }
        },
        [minVal, maxVal, progressGap]
    )

    useEffect(() => {
        let left = (+minVal / +minValRef.current.max) * 100
        let progressGap = document.querySelector(".progressGap")
        progressGap.style.left = `${left}%`
    }, [minVal])

    useEffect(() => {
        let right = 100 - (+maxVal / +maxValRef.current.max) * 100
        let progressGap = document.querySelector(".progressGap")
        progressGap.style.right = `${right}%`
    }, [maxVal])

    return (
        <>
            <div
                className="flex items-center bg-gray-300 relative"
                style={{
                    height: ".5rem",
                    width: "100%",
                    borderRadius: "0.25rem",
                }}
            >
                <div
                    className="bg-orange-500 absolute progressGap h-full"
                    ref={progressGap}
                    style={{ borderRadius: "0.25rem" }}
                ></div>
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    className="inputRangeCost z-1 w-full"
                    id="cost-min"
                    onInput={(e) => inputCost(e.target)}
                    value={minVal}
                    ref={minValRef}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    className="inputRangeCost z-1 w-full"
                    id="cost-max"
                    onInput={(e) => inputCost(e.target)}
                    value={maxVal}
                    ref={maxValRef}
                />
            </div>
            <div className="flex my-4">
                <input
                    {...register("minCost")}
                    className="w-1/3 text-center text-black bg-light rounded-2xl p-1"
                    type="number"
                    value={minVal}
                    onChange={(e) => setMinVal(e.target.value)}
                />
                <span className="w-1/3 text-center font-bold">&mdash;</span>
                <input
                    {...register("maxCost")}
                    type="number"
                    className="w-1/3 text-center text-black bg-light rounded-2xl p-1"
                    value={maxVal}
                    onChange={(e) => setMaxVal(e.target.value)}
                />
            </div>
        </>
    )
}

export default InputRangeCost

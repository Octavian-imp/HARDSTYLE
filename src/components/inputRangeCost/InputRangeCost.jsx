import React, { useState } from "react";
import "./inputRangeCost.scss";

export default function InputRangeCost() {
  let [minValue, setMinValue] = useState(10000);
  let [maxValue, setMaxValue] = useState(20000);
  let [step, setStep] = useState(1000);
  let inputRangeCost = document.querySelectorAll(".inputRangeCost");
  let progressGap = document.querySelector(".progressGap");

  inputRangeCost.forEach((item) => {
    item.addEventListener("input", () => {
      let minVal = parseInt(inputRangeCost[0].value);
      let maxVal = parseInt(inputRangeCost[1].value);
      let left = (minVal / inputRangeCost[0].max) * 100;
      let right = 100 - (maxVal / inputRangeCost[1].max) * 100;
      progressGap.style.left = left + "%";
      progressGap.style.right = right + "%";
      console.log(
        (minVal / inputRangeCost[0].max) * 100,
        (maxVal / inputRangeCost[1].max) * 100,
        minVal,
        maxVal
      );
    });
  });
  return (
    <div
      className="flex items-center relative justify-center bg-gray-300"
      style={{ height: "1rem", width: "20rem", borderRadius: "0.25rem" }}
    >
      <div
        className="bg-orange-500 absolute progressGap h-full"
        style={{ borderRadius: "0.25rem" }}
      ></div>
      <input
        type="range"
        min="0"
        max="100000"
        step={step}
        className="inputRangeCost"
        id="cost-min"
        onChange={(e) => setMinValue(e.target.value)}
        value={minValue}
      />
      <input
        type="range"
        min="0"
        max="100000"
        step={step}
        className="inputRangeCost"
        id="cost-max"
        onChange={(e) => setMaxValue(e.target.value)}
        value={maxValue}
      />
    </div>
  );
}

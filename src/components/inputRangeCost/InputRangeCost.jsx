import React, { useCallback, useEffect, useState } from "react";
import { useRef } from "react";

import "./inputRangeCost.scss";

export default function InputRangeCost({ min, max, onChange }) {
//   console.log(Hello)
  let [minValue, setMinValue] = useState(min);
  let [maxValue, setMaxValue] = useState(max);
  let minValRef = useRef(null);
  let maxValRef = useRef(null);
  let range = useRef(null);
  let inputRangeCost = document.querySelectorAll(".inputRangeCost");
  let progressGap = document.querySelector(".progressGap");

  const getPercent = useCallback(
    (value) => ((value - min) / (max - min)) * 100,
    [min, max]
  );

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minValue);
      const maxPercent = getPercent(+maxValRef.current.value);
      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.right = `${maxPercent - minPercent}%`;
      }
    }
  }, [minValue, getPercent]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxValue);
      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxValue, getPercent]);

  useEffect(() => {
    onChange({ min: minValue, max: maxValue });
  }, [minValue, maxValue, onChange]);

  return (
    <div
      className="flex items-center relative justify-center bg-gray-300"
      style={{ height: "1rem", width: "20rem", borderRadius: "0.25rem" }}
    >
      <div
        ref={range}
        className="bg-orange-500 absolute progressGap h-full"
        style={{ borderRadius: "0.25rem" }}
      ></div>
      <input
        type="range"
        min={min}
        max={max}
        className="inputRangeCost"
        id="cost-min"
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxValue - 100);
          setMinValue(value);
          event.target.value = value.toString();
        }}
        value={minValue}
        ref={minValRef}
      />
      <input
        type="range"
        min={min}
        max={max}
        className="inputRangeCost"
        id="cost-max"
        onChange={(event) => {
          const value = Math.max(+event.target.value, minValue + 100);
          setMaxValue(value);
          event.target.value = value.toString();
        }}
        value={maxValue}
        ref={maxValRef}
      />
    </div>
  );
}

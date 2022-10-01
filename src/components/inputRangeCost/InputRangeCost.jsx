import { useCallback, useEffect, useRef, useState } from "react";

import "./inputRangeCost.scss";

export default function InputRangeCost({ min, max, step }) {
  let progressGap = document.querySelector(".progressGap");
  let [minVal, setMinVal] = useState(min);
  let [maxVal, setMaxVal] = useState(max);
  let minValRef = useRef(null);
  let maxValRef = useRef(null);

  const inputCost = useCallback(
    (item) => {
      if (item.id === "cost-min") {
        setMinVal(+item.value);
        let left = (+minVal / +item.max) * 100;
        progressGap.style.left = `${String(left)}%`;
      } else if (item.id === "cost-max") {
        setMaxVal(+item.value);
        let right = 100 - (+maxVal / +item.max) * 100;
        progressGap.style.right = `${String(right)}%`;
      }
    },
    [minVal, maxVal, progressGap]
  );

  useEffect(() => {
    let left = (+minVal / +minValRef.current.max) * 100;
    let progressGap = document.querySelector(".progressGap");
    progressGap.style.left = `${left}%`;
  }, [minVal]);

  useEffect(() => {
    let right = 100 - (+maxVal / +maxValRef.current.max) * 100;
    let progressGap = document.querySelector(".progressGap");
    progressGap.style.right = `${right}%`;
  }, [maxVal]);
  return (
    <>
      <div
        className="flex items-center bg-gray-300 relative"
        style={{ height: ".5rem", width: "20rem", borderRadius: "0.25rem" }}
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
          className="inputRangeCost z-1 w-full"
          id="cost-min"
          onInput={(e) => inputCost(e.target)}
          value={minVal}
          ref={minValRef}
        />
        <input
          type="range"
          min="0"
          max="100000"
          step={step}
          className="inputRangeCost z-1 w-full"
          id="cost-max"
          onInput={(e) => inputCost(e.target)}
          value={maxVal}
          ref={maxValRef}
        />
      </div>
      <div className="flex items-center justify-between"></div>
    </>
  );
}

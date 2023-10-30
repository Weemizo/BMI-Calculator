import "./BMI-Calculator.css";
import { useState } from "react";
import DarkModeIcon from "../DarkMode/DarkModeIcon";

export default function BMI() {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  const assign = (size: number) => (Number.isNaN(size) || size <= 0 ? 0 : size);

  const bmiCalc = (w: number, h: number) => {
    const bmi = (assign(w) / Math.pow(assign(h), 2)).toFixed(2);
    return Number.isNaN(parseInt(bmi))
      ? "Please type in correct numbers"
      : `Your BMI is ${bmi}`;
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setMessage(bmiCalc(weight, height));
  };

  return (
    <div>
      <div className="flex justify-center ">
      <DarkModeIcon />
      </div>
      <div className="text-xl font-bold mb-10">
  
        This app currently supports only the metric system. [kilograms / meters]
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center space-y-4 w-auto max-w-sm mx-auto">
        <input
          step="any"
          type="number"
          name="weight"
          min="0.01"
          max="600"
          placeholder="kg"
          onChange={(e) => setWeight(parseFloat(e.target.value))}
          className="dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:border-zinc-800 dark:hover:border-zinc-700 text-black dark:text-white bg-cyan-200 hover:bg-cyan-300 font-bold py-2 px-4 border-b-4 border-cyan-400 hover:border-cyan-600 placeholder-black dark:placeholder-white placeholder:text-right rounded-lg"
        />
        <input
          step="any"
          type="number"
          name="height"
          min="0.01"
          max="3"
          placeholder="m"
          onChange={(e) => setHeight(parseFloat(e.target.value))}
          className="dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:border-zinc-800 dark:hover:border-zinc-700 text-black dark:text-white bg-cyan-200 hover:bg-cyan-300 font-bold py-2 px-4 border-b-4 border-cyan-400 hover:border-cyan-600 placeholder-black dark:placeholder-white placeholder:text-right rounded-lg"
        />
        <button
          type="submit"
          className="flex justify-center max-w-xs mx-auto shadow-md dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:border-zinc-800 dark:hover:border-zinc-700 text-black dark:text-white bg-cyan-200 hover:bg-cyan-300 font-bold py-2 px-4 border-b-4 border-cyan-400 hover:border-cyan-600 rounded"
        >
          Submit
        </button>
      </form>
      <div>
        {Number.isNaN(height) ||
        Number.isNaN(weight) ||
        weight <= 0 ||
        height <= 0
          ? "Type in your measurement"
          : `You are ${height}m tall & weigh ${weight}kgs`}
      </div>
      <div className="text-3xl font-bold m-10">{message}</div>
    </div>
  );
}

import "./BMI-Calculator.css";
import { useState } from "react";
import DarkModeIcon from "../DarkMode/DarkModeIcon";

export default function BMI() {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  const assign = (size: number) => (Number.isNaN(size) || size <= 0 ? 0 : size);

  const bmiCalc = (w: number, h: number) => {
    const bmi = (assign(w) / Math.pow(assign(h/100), 2)).toFixed(2);
    return Number.isNaN(parseInt(bmi))
      ? "Please type in correct numbers"
      : `Your BMI is ${bmi}`;
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setMessage(bmiCalc(weight, height));
  };

  // const system = () => {
  //   const imperial = (assign(weight) * 703) / Math.pow(assign(height), 2);
  //   const metric = assign(weight) / Math.pow(assign(height/100), 2);
  //   return Number.isNaN(metric) ? imperial.toFixed(2) : metric.toFixed(2);    
  // }

  return (
    <div>
      <div className="flex justify-center">
        <DarkModeIcon />
      </div>
      <div className="text-xl font-bold mb-10">
        This app currently supports only the metric system. [kilograms / centimeters]
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center space-y-4 w-auto max-w-sm mx-auto"
      >
        <input
          step="any"
          type="number"
          name="weight"
          min="0.01"
          max="600"
          placeholder="kg"
          onChange={(e) => setWeight(parseFloat(e.target.value))}
          className="dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:border-zinc-800 dark:hover:border-zinc-70 dark:text-white text-black bg-cyan-200 hover:bg-cyan-300 font-bold py-2 px-4 border-b-4 border-cyan-400 hover:border-cyan-600 placeholder-black dark:placeholder-white placeholder:text-right rounded-lg"
        />
        <input
          step="any"
          type="number"
          name="height"
          min="0.01"
          max="300"
          placeholder="cm"
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
      <div className="flex justify-center font-bold m-5">
        {Number.isNaN(height) ||
        Number.isNaN(weight) ||
        weight <= 0 ||
        height <= 0
          ? "Type in your measurement"
          : `You are ${height}cm tall & weigh ${weight}kgs`}
      </div>
      <div className="flex justify-center text-3xl font-bold m-10 mx-auto">
        {message}
      </div>
    </div>
  );
}

import "./BMI-Calculator.css";
import { useState } from "react";
import DarkModeIcon from "../DarkMode/DarkModeIcon";

export default function BMI() {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [system, setSystem] = useState<string>("metric");

  const bmiCalc = () => {

    const assign = (size: number) => (Number.isNaN(size) || size <= 0 ? 0 : size);

    const imperial = (assign(weight) * 703) / Math.pow(assign(height), 2);

    const metric = (assign(weight) / Math.pow(assign(height/100), 2)).toFixed(2)

    const bmi = system === "metric" ? metric : imperial;

    return Number.isNaN(bmi)
      ? "Please type in correct numbers"
      : `Your BMI is ${bmi}`;
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setMessage(bmiCalc);
  };

  const wPlaceholder = system === "metric" ? "kg" : "lbs";

  const hPlaceholder = system === "metric" ? "cm" : "inches";
  
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center">
        <DarkModeIcon />
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
          placeholder={wPlaceholder}
          onChange={(e) => setWeight(parseFloat(e.target.value))}
          className="dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:border-zinc-800 dark:hover:border-zinc-70 dark:text-white text-black bg-cyan-200 hover:bg-cyan-300 font-bold py-2 px-4 border-b-4 border-cyan-400 hover:border-cyan-600 placeholder-black dark:placeholder-white placeholder:text-right rounded-lg"
        />
        <input
          step="any"
          type="number"
          name="height"
          min="0.01"
          max="300"
          placeholder={hPlaceholder}
          onChange={(e) => setHeight(parseFloat(e.target.value))}
          className="dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:border-zinc-800 dark:hover:border-zinc-700 text-black dark:text-white bg-cyan-200 hover:bg-cyan-300 font-bold py-2 px-4 border-b-4 border-cyan-400 hover:border-cyan-600 placeholder-black dark:placeholder-white placeholder:text-right rounded-lg"
        />
        <button
          type="submit"
          className="max-w-xs mx-auto shadow-md dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:border-zinc-800 dark:hover:border-zinc-700 text-black dark:text-white bg-cyan-200 hover:bg-cyan-300 font-bold py-2 px-4 border-b-4 border-cyan-400 hover:border-cyan-600 rounded"
        >
          Submit
        </button>
      </form>
      <div className="font-bold m-5">
        {Number.isNaN(height) ||
        Number.isNaN(weight) ||
        weight <= 0 ||
        height <= 0
          ? "Type in your measurement"
          : `You are ${height}cm tall & weigh ${weight}kgs`}
      </div>
      <div className="text-l font-bold m-10 ">
        {message}
        <input
          type="checkbox"
          onChange={() => setSystem(system === "metric" ? "imperial" : "metric")}
      />
      Check, if Imperial
      </div>
    </div>
  );
}

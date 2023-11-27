import "./BMI-Calculator.css";
import { useState } from "react";
import DarkModeIcon from "../DarkMode/DarkModeIcon";

export default function BMI() {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [system, setSystem] = useState<string>("metric");

  const bmiCalc = () => {
    const assign = (size: number) =>
      Number.isNaN(size) || size <= 0 ? 0 : size;

    const imperial = (
      (assign(weight) / Math.pow(assign(height), 2)) *
      703
    ).toFixed(2);

    const metric = (assign(weight) / Math.pow(assign(height / 100), 2)).toFixed(
      2,
    );

    const bmi = system === "metric" ? metric : imperial;

    const bmiMessage = `Your BMI is ${bmi}`;
    
    const bmiResult = () => {
      if (parseInt(bmi)>=30) {
        return `You're morbidly obese, contact your doctor immediately. ${bmiMessage}`
      } else if (parseInt(bmi)>=25 && parseInt(bmi)<30) {
        return `You're obese. ${bmiMessage}`
      } else if (parseInt(bmi)>=18.5 && parseInt(bmi)<25) {
        return `Normal. ${bmiMessage}`
      } else if (parseInt(bmi)>=17.5 && parseInt(bmi)<18.5) {
        return `You're underweight, a little bit. ${bmiMessage}`
      } else `You're severly underweight. ${bmiMessage}`
    }

    return Number.isNaN(bmi)
      ? "Please type in correct numbers"
      : bmiResult();
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setMessage(bmiCalc() || "Please type in correct numbers");
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
          placeholder={wPlaceholder}
          onChange={(e) => setWeight(parseFloat(e.target.value))}
          className="dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:border-zinc-800 dark:hover:border-zinc-70 dark:text-white text-black bg-cyan-200 hover:bg-cyan-300 font-bold py-2 px-4 border-b-4 border-cyan-400 hover:border-cyan-600 placeholder-black dark:placeholder-white placeholder:text-right rounded-lg"
        />
        <input
          step="any"
          type="number"
          name="height"
          min="0.01"
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
      <div className="font-bold m-5 text-center">
        {Number.isNaN(height) ||
        Number.isNaN(weight) ||
        weight <= 0 ||
        height <= 0
          ? "Type in your measurement"
          : `You are ${height} ${hPlaceholder} tall & weigh ${weight} ${wPlaceholder}`}
      </div>
      <div className="flex flex-col justify-center text-3xl font-bold m-10 items-center mx-auto">
        {message}
        <label className="mt-10 relative inline-flex items-center mb-5 cursor-pointer">
          <input
            type="checkbox"
            onChange={() =>
              setSystem(system === "metric" ? "imperial" : "metric")
            }
            className="sr-only peer"
          />
          <div className=" w-9 h-5 bg-cyan-300 rounded-full peer dark:bg-zinc-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-zinc-400 peer-checked:bg-black dark:peer-checked:bg-zinc-700"></div>
          <span className="ms-3 text-sm font-bold text-gray-900 dark:text-gray-300">
            Imperial
          </span>
        </label>
      </div>
    </div>
  );
}

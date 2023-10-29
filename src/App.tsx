import "./App.css";
import BMI from "./components/BMI-Calculator/BMI-Calculator";

function App() {
  return (
    <div className="text-black dark:text-white bg-cyan-100 dark:bg-zinc-900 flex flex-col justify-center items-center m-auto">
      <h1 className="text-5xl font-bold m-10">BMI Calculator</h1>
      <BMI />
    </div>
  );
}

export default App;

import './App.css';
import BMI from './components/BMI-Calculator';
import DarkMode from './components/DarkMode'

function App() {

  return (
    <div className='flex flex-col justify-center items-center m-auto'> 
      <h1 className='text-5xl font-bold m-10'>
        BMI Calculator
      </h1>
      <BMI/>
      <DarkMode/>
    </div>
  )
}

export default App

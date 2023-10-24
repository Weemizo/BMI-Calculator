import './App.css';
import BMI from './components/BMI-Calculator';

function App() {

  return (
    <div className='flex flex-col justify-center items-center m-auto'> 
      <h1 className='text-5xl font-bold m-10'>
        BMI Calculator
      </h1>
      <BMI/>
    </div>
  )
}

export default App

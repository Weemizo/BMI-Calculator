import './BMI-Calculator.css'
import { useState } from 'react'

export default function BMI() {
    const [weight, setWeight] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [message, setMessage] = useState<string>("");
    
    const assign = (size: number) => Number.isNaN(size) || size<=0 ? 0 : size;

    // add dark mode

    const bmiCalc = (w: number, h: number) => {
        const bmi = (assign(w)/Math.pow(assign(h), 2)).toFixed(2);
        return Number.isNaN(parseInt(bmi)) ? "Please type in correct numbers" : `Your BMI is ${bmi}`
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setMessage(bmiCalc(weight, height));
    };

    return (
        <div>
            <div className='text-xl font-bold mb-10'> This app currently supports only the metric system. [kilograms / meters] </div>
            <div>{Number.isNaN(weight) ? "Type in your weight" : `Your weight is ${weight}kgs`}</div>
            <form onSubmit={handleSubmit}>
                <input
                    step="any"
                    type="number"
                    name="weight"
                    min="0.01"
                    max="600"
                    value={weight}
                    onChange={e => setWeight(parseFloat(e.target.value))}
                />
                <input
                    step="any"                
                    type="number"
                    name="height"
                    min="0.01"
                    max="3"
                    value={height}
                    onChange={(e) => setHeight(parseFloat(e.target.value))}
                />
                <button type="submit" className='bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-2 px-4 border-b-4 border-zinc-900 hover:border-zinc-700 rounded'> Submit </button>
            </form>
            <div>{Number.isNaN(height) ? "Type in your height" : `Your height is ${height}m`}</div>
            <div className='text-3xl font-bold m-10'>{message}</div>
        </div>
    );
}
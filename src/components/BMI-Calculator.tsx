import './BMI-Calculator.css'
import { useState } from 'react'

export default function BMI() {
    const [weight, setWeight] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    
    const assign = (size: number) => Number.isNaN(size) || size<=0 ? 0 : size;

    // add dark mode
    // add submit button [instead of onChange]

    const bmiCalc = () => {
        const bmi = (assign(weight)/Math.pow(assign(height), 2)).toFixed(2);
        return Number.isNaN(parseInt(bmi)) ? "Please type in correct numbers" : `Your BMI is ${bmi}`
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setWeight(parseFloat(e.target.value));
        console.log('value is:', e.target.value);
    };
    
    return (
        <div>
            <div className='text-xl font-bold mb-10'> This app currently supports only the metric system. [kilograms / meters] </div>
            <div>{Number.isNaN(weight) ? "Type in your weight" : `Your weight is ${weight}kgs`}</div>
            <form onSubmit={handleChange}>
                <input
                    type="number"
                    name="weight"
                    min="0.01"
                    max="600"
                    value={weight}
                    onChange={(e) => e.target.value}
                />
            </form>
            <div>{Number.isNaN(height) ? "Type in your height" : `Your height is ${height}m`}</div>
            <form>
                <input
                    type="number"
                    name="height"
                    min="0.01"
                    max="3"
                    value={height}
                    onChange={(e) => setHeight(parseFloat(e.target.value))}
                />
            </form>
            <div className='text-3xl font-bold m-10'>{bmiCalc()}</div>
        </div>
    );
}
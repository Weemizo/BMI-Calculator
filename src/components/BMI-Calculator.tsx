import { useState } from 'react'

export default function BMI() {
    const [weight, setWeight] = useState<number>(0);

    const [height, setHeight] = useState<number>(0);
    
    const weightAssign = (weight: number) => {
        return Number.isNaN(weight) ? "Type in your weight" : `Your weight is ${weight}kgs`
    }

    const heightAssign = (height: number) => {
        return Number.isNaN(height) ? "Type in your height" : `Your height is ${height}m`
    }

    const bmiCalc = (height: number, weight: number) => {
        const bmi = (weight/Math.pow(height, 2)).toFixed(2);
        return Number.isNaN(bmi) ? "Please type in correct numbers" : `Your BMI is ${bmi}`
    }

    return (
        <div>
            <div className='text-xl font-bold mb-10'> This app currently supports only the metric system. [kilograms / meters] </div>
            <div>{weightAssign(weight)}</div>

            <form>
                <input
                    type="number"
                    name="weight"
                    value={weight}
                    onChange={(e) => setWeight(parseInt(e.target.value))}
                />
            </form>

            <div>{heightAssign(height)}</div>
            <form>
                <input
                    type="number"
                    name="height"
                    value={height}
                    onChange={(e) => setHeight(parseFloat(e.target.value))}
                />
            </form>

            <div className='text-3xl font-bold m-10'>{bmiCalc(height, weight)}</div>
        </div>
    );
}
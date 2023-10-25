import { useState } from 'react'

export default function BMI() {
    const [weight, setWeight] = useState<number>(0);

    const [height, setHeight] = useState<number>(0);
    
    const weightAssign = (weight: number) => Number.isNaN(weight) || weight==0 ? 0 : weight;

    const heightAssign = (height: number) => Number.isNaN(height) || height==0 ? 0 : height;

    const bmiCalc = () => {

        const bmi = (weightAssign(weight)/Math.pow(heightAssign(height), 2)).toFixed(2);
        return Number.isNaN(parseInt(bmi)) ? "Please type in correct numbers" : `Your BMI is ${bmi}`
    }

    return (
        <div>
            <div className='text-xl font-bold mb-10'> This app currently supports only the metric system. [kilograms / meters] </div>
            <div>{Number.isNaN(weight) ? "Type in your weight" : `Your weight is ${weight}kgs`}</div>
            <form>
                <input
                    type="number"
                    name="weight"
                    value={weight}
                    onChange={(e) => setWeight(parseInt(e.target.value))}
                />
            </form>
            <div>{Number.isNaN(height) ? "Type in your height" : `Your height is ${height}m`}</div>
            <form>
                <input
                    type="number"
                    name="height"
                    value={height}
                    onChange={(e) => setHeight(parseFloat(e.target.value))}
                />
            </form>
            <div className='text-3xl font-bold m-10'>{bmiCalc()}</div>
        </div>
    );
}
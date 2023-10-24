import { useState } from 'react'

export default function BMI() {
    const [weight, setWeight] = useState<number>(0)
    
    const weightAssign = (weight: number) => {
        return Number.isNaN(weight) ? "Type in your weight" : `Your weight is ${weight}kg`
    }

    return (
        <div>
            <form>
                <input
                    type="number"
                    name="weight"
                    value={weight}
                    onChange={(e) => setWeight(parseInt(e.target.value))}
                />
            </form>
            <div>{weightAssign(weight)}</div>
        </div>
    );
}
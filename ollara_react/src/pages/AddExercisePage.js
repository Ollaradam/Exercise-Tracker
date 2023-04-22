import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const AddExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const navigate = useNavigate();

    const addExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise), 
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201){
            alert("Successfully added the exercise");
        } else{
            alert(`Failed to add the exercise`);
        }
        navigate('/');
    };

    return (
        <body>
            <header>
                <Link className="App-link" to="/">Return to the home page</Link>
                <Link className="App-link" to="/add-exercise">Add an exercise</Link>
            </header>
            <div>
                <h1>Add Exercise</h1>
                <input
                    type="text"
                    placeholder="Name of exercise"
                    value={name}
                    onChange={e => setName(e.target.value)} />
                <input
                    type="number"
                    placeholder="Number of reps"
                    value={reps}
                    onChange={e => setReps(e.target.value)} />
                <input
                    type="number"
                    placeholder="Weight used"
                    value={weight}
                    onChange={e => setWeight(e.target.value)} />
                    <select id="dropdown" onChange={e => setUnit(e.target.value)}>
                        <option value="lb">Pounds</option>
                        <option value="kg">Kilograms</option>
                    </select>
                <input
                    type="text"
                    placeholder="Date performed"
                    value={date}
                    onChange={e => setDate(e.target.value)} />
                <button
                    onClick={addExercise}
                >Save</button>
            </div>
        </body>
    );
}

export default AddExercisePage;
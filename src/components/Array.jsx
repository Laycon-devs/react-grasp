import { useState } from "react";

const Array = () => {
    const [fruits, setfruits] = useState([
        "Apple", "Banana", "Pineapple"
    ]);
    const addFruits = () => {
        const newfruit = document.getElementById('newfruit').value;
        document.getElementById('newfruit').value = ""
        setfruits(prevFruits => [...prevFruits, newfruit]);
    }
    const removeFruits = (index) => {
        setfruits(fruits.filter((fruit, i) => i !== index))
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1 className="display-1 fw-bold">JSx Array Updater</h1>

            <h2 className="fw-semibold mt-5 ">Fruits Adder</h2>
            <ul className="m-5">
                {fruits.map((fruit, index) => <li key={index} className="fs-4 text-warning d-flex justify-content-evenly mb-2 align-items-center">
                    {fruit}
                    <button onClick={() => removeFruits(index)} className="btn btn-danger text-white ">Delete</button>
                </li>)}
            </ul>
            <p className="fw-semibold ">Fruits: <input type="text" id="newfruit" /></p>
            <button className="btn btn-primary btn-outline-dark fw-bold text-warning " onClick={addFruits}>Add Fruits</button>
        </div>
    )
}

export default Array

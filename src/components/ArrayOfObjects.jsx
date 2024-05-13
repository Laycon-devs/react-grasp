import { useState } from "react";

const ArrayOfObjects = () => {
    const [birth, setbirth] = useState([]);
    const [birthLastName, setbirthLastName] = useState("");
    const [birthFirstName, setbirthFirstName] = useState("");
    const [birthDate, setbirthDate] = useState("");

    const changeLastName = (e) => {
        setbirthLastName(e.target.value)
    }
    const changeFirstName = (e) => {
        setbirthFirstName(e.target.value)
    }
    const changeDate = (e) => {
        setbirthDate(e.target.value)
    }
    const addData = () => {
        const newData = {
            lastname: birthLastName,
            firstname: birthFirstName,
            dob: birthDate,
            age: new Date().getFullYear() - birthDate.substring(0, 4),
            yearCreated: new Date().getFullYear(),
        }
        setbirth(preBirth => [...preBirth, newData]);
        console.log(newData);

        setbirthFirstName("");
        setbirthLastName("");
        setbirthDate("");
    }
    const removeData = (index) => {
        setbirth(birth.filter((b, i) => i !== index))
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1 className="display-1 fw-bold">Array Of Object</h1>

            <h2 className="fw-semibold mt-5 ">Patient Birth Details</h2>
            <table border={2} className="m-5 w-75 ">
                <tr>
                    <th>
                        Lastname
                    </th>
                    <th>
                        Firstname
                    </th>
                    <th>
                        Date of Birth
                    </th>
                    <th>
                        Age
                    </th>
                    <th>
                        Created
                    </th>
                    <th>
                        Action
                    </th>
                </tr>
                {birth.map((data, index) => (<tr key={index}>
                    <td>{data.lastname}</td>
                    <td>{data.firstname}</td>
                    <td>{data.dob}</td>
                    <td>{data.age}</td>
                    <td>{data.yearCreated}</td>
                    <button onClick={() => removeData(index)} className="btn btn-danger text-white ">Delete</button>
                </tr>))}
            </table>
            <p className="fw-semibold ">Lastname: <input type="text" onChange={changeLastName} value={birthLastName} /></p>
            <p className="fw-semibold ">Firstname: <input type="text" onChange={changeFirstName} value={birthFirstName} /></p>
            <p className="fw-semibold ">DOB: <input type="date" value={birthDate} onChange={changeDate} /></p>
            <button className="btn btn-primary btn-outline-dark fw-bold text-warning" onClick={addData}>Add</button>
        </div>
    )
}

export default ArrayOfObjects
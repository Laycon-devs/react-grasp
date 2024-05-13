import { useState } from "react";

const Onchanging = () => {
    const [name, setname] = useState("");
    const [gender, setgender] = useState("");
    const [course, setcourse] = useState("");

    const handleName = (e) => {
        setname(e.target.value);
    }
    const handleGender = (e) => {
        setgender(e.target.value);
    }
    const handleCourse = (e) => {
        setcourse(e.target.value);
    }

  return (
    <section className="indigo py-5 mb-4 ">
      <div className="mx-auto px-4 flex-column align-items-center ">
        <div className="">
            {/* <h5>Name: <input type="text" value={name} onChange={handleName} /></h5>
            <br />
            <label htmlFor="gender">Gender</label>
            <h5><input type="radio" value="Male" onChange={handleGender} name="gender" checked={gender === "Male"} /> Male</h5>
            <h5><input type="radio" value="Female" onChange={handleGender} name="gender" checked={gender === "Female"} /> Female</h5> */}
            <label htmlFor="course">Courses in your department</label>
            <br />
            <select value={course} onChange={handleCourse}>
                <option disabled selected>Select Your courses</option>
                <option value="Csc111">Csc111</option>
                <option value="Csc112">Csc112</option>
                <option value="Csc113">Csc113</option>
                <option value="Csc114">Csc114</option>
                <option value="Csc115">Csc115</option>
            </select>
        </div>
        <h1>{course}</h1>
      </div>
    </section>
  )
}

export default Onchanging

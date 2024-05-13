import { useState } from "react";

const colorPicker = () => {
    const [color, setcolor] = useState("#ff0000");
    const handleColor = (e) => {
        setcolor(e.target.value);
    }

  return (
    <div style={{textAlign: "center"}}>
        <h1 className="display-1 fw-bold ">Color Picker App</h1>
      <h1 className="fs-1 fw-bold ">Color Picker : {color}</h1>
    <div className="colorbox mx-auto " style={{background: color}}>
    </div>
    <br />
    <h1 className="fs-2 fw-semibold  ">Pick a color : {color}</h1>
    <input type="color" value={color} onChange={handleColor}/>
    </div>
  )
}

export default colorPicker

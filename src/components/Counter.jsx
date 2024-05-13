import { useEffect, useState } from "react";

const Hero = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    document.title = `Counter: ${count}`
  });
  const addCounter = () =>{
    setcount(prevcount => prevcount + 1)
    setcount(prevcount => prevcount + 1)
  }
  const reset = () =>{
    setcount(0)
  }
  const removeCounter = () =>{
    setcount(prevcount => prevcount - 1)
    setcount(prevcount => prevcount - 1)
  }
  return (
    <section className="indigo py-5 mb-4 ">
      <div className="mx-auto px-4 flex-column align-items-center ">
        <div className="text-center ">
            <h1 className="text-white fs-1 fw-bolder ">
                Counter
            </h1>
            <p className="my-4 fs-1">
                <h1 className="display-1">{count}</h1>
                <button onClick={addCounter} className="btn btn-success ">+</button>
                <button onClick={reset} className="btn btn-warning ">Reset</button>
                <button onClick={removeCounter} className="btn btn-danger ">-</button>
            </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

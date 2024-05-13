import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [datas, setdatas] = useState([]);
    const [content, setcontent] = useState("users");
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${content}`)
            .then((response) => response.json())
            .then(data => setdatas(data))
    }, [content]);
    return (
        <div>
            <h1 className='text-center fw-bold display-1 mb-5'>Blog Spot</h1>
            <div className='text-center d-flex justify-content-evenly mt-3 '>
                <button className='btn btn-primary ' onClick={() => setcontent("users")}>User</button>
                <button className='btn btn-primary ' onClick={() => setcontent("comments")}>Comment</button>
                <button className='btn btn-primary ' onClick={() => setcontent("posts")}>Posts</button>
            </div>
            <h3 className='text-center display-1 mt-5 '>{content}</h3>

            <ul>
                {
                    datas.map((con, index) => (<li key={index}>
                        {con.username}
                    </li>))
                }
            </ul>
        </div>
    )
}

export default Effect

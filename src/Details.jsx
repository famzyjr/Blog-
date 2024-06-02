import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from './useFetch'

function Details() {
    const {id} = useParams()
    const {data:blog, ispending, error} = useFetch("http://localhost:8000/blogs/" + id)
    const navigate = useNavigate();

    const handleClick=()=>{
    fetch('http://localhost:8000/blogs/' + blog.id,{
    method: 'DELETE'
    }).then(()=>{
      navigate('/');
    }) 

    }

  return (
    <div className='blog-preview'>
      {/* <h2> me {id}</h2> */}
     {ispending && <p>Loading...</p>}
     {error && <div>{error}</div>}
      {blog &&(
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
        
      )}
    </div>
  )
}

export default Details
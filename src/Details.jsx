import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch'

function Details() {
    const {id} = useParams()
    const {data:blog, ispending, error} = useFetch("http://localhost:8000/blogs/" + id)
    console.log(blog);
  return (
    <div className='blog-details'>
      {/* <h2> me {id}</h2> */}
     {ispending && <p>Loading...</p>}
     {error && <div>{error}</div>}
      {blog &&(
        <article>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  )
}

export default Details
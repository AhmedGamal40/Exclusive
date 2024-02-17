import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
      <div className='my-40 text-center'>
        {/* <h1 className='text-4xl md:text-8xl font-semibold  my-auto'> 404 Not Found </h1> */}
        {/* <p className='font-semibold text-lg my-8'>Your visited page not found. You may go home page.</p> */}
        {/* <button className="rounded-lg bg-red-600 w-100 "> <span className='my-20 '>Save Changes</span></button> */}
      </div>
      <div className="my-40 text-center">
        <h1 className="text-4xl md:text-8xl font-semibold my-auto">404 Not Found</h1>
        <p className="font-semibold text-lg my-8">The page you visited was not found. You can return to the home page.</p>
        <Link to="/">
          <button className="rounded-lg bg-red-600 md:w-1/4 w-2/4 py-4">
            <span className="text-xl text-white">Back to home page</span>
          </button>
        </Link>
      </div>

    </>
  )
}

export default NotFound
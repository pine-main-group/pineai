import React from 'react'

const P404 = () => {
  return (
    <div className='flex justify-center items-center border-red-600 border h-screen w-screen'>
        <div className="max-w-2xl text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-2xl text-gray-700 mt-4">
          Oops! The page you're looking for does not exist. <br />
          It might have been moved, deleted, or perhaps you mistyped the URL.
        </p>
        <a href="/" className="mt-6 inline-block text-blue-500 text-lg hover:underline">
          Go back to homepage
        </a>
      </div>
    </div>
  )
}

export default P404
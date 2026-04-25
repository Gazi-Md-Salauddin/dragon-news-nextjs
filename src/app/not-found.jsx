import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="text-center flex justify-center items-center h-[80vh] flex-col space-y-2">
      <h2 className="text-red-500 font-bold text-2xl">This page is not found</h2>
      <Link href={"/"}>
        <button className="btn bg-red-500 text-white">Back to Home</button>
      </Link>
    </div>
  )
}

export default NotFound
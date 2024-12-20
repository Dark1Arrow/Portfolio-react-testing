import React from 'react'

const LeftArrow = ({ onClick }) => {
  return (
    <div>
      <div className="custom-arrow left-arrow" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    </div>
  )
}

export default LeftArrow

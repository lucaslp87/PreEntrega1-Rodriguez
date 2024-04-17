import React from 'react'

function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="spinner-grow text-dark text-secondary mx-5" style={{width:"3rem", height:"3rem"}}role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-dark text-secondary mx-5" style={{width:"3rem", height:"3rem"}}role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-dark text-secondary mx-5" style={{width:"3rem", height:"3rem"}}role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}

export default Loader

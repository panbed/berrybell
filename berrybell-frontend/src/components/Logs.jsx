import { useEffect, useState } from 'react'

function Logs({ setTitle }) {

  return (
    <>
      <div className='card shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title'>Log Test!</h2>
          <p>The quick brown fox jumps over the lazy dog.</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary btn-sm'>Dismiss</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Logs

import { useEffect, useState } from 'react'

function Camera() {

  return (
    <>
      <div className='card'>
        <img className='rounded-lg' src='http://192.168.1.189:7123/stream.mjpg' />
      </div>
    </>
  )
}

export default Camera

import React from 'react'
import cv from '../../assets/cv.pdf'
import './CV.css';
function CV() {
  return (
    <>
      <div className='container__cv'>
        <a className='btn btn-primary' href={cv} target="_blank"> Preview my CV </a>
        <a dowload href={cv} className='btn'> Download my CV </a>
      </div>
    </>
  )
}

export default CV
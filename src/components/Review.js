import React from 'react'
import Viewbutton from './Viewbutton';
import '../styles/Button.scss';
import style from 'styled-components';

function Review1() {
  return (
        <div>
            <div className='cont'>
                <p className='t1'>9.8</p>
                <p className='t2'>Exceptional</p>
            </div>
            <Viewbutton className="buttonText2">View</Viewbutton>
        </div>
  )
}

export default Review1

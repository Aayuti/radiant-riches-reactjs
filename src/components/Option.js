import React from 'react'
import style from 'styled-components';
import Button from './Button';
import '../styles/Button.scss';
import Viewbutton from './Viewbutton';
import Review from './Review';

function Option() {
  return (
    <Div>
        <Image />
        <Description>
                <D1>WixPro 72-Inch Responsive WEbsite Builder</D1>
                <D2>Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</D2>
                <D1>Main highlights</D1>
                <D2>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</D2>
                <Show href="#">Show more</Show>
        </Description>
    </Div>
  )
}

export default Option


const Div = style.div`
    display: flex;
    // padding: 15px;
    margin: 20px;
    // border: 1px solid blue;
    width: 1006px;
    height: 330px;
`

const Image = style.div`
    margin-top: 15px;
    margin-left: 10px;
    height: 300px;
    width: 280px;
    border: 1px solid black;
`

const Description = style.div`
    display: flex;
    flex-direction: column;
    // border: 1px solid black;
    width: 390px;
    height: 300px;
    margin-top: 15px;
    margin-left: 10px;
    padding-left: 5px;
`

// const Review = style.div`
//     display: flex;
//     flex-direction: column;
//     // border: 1px solid black;
//     width: 280px;
//     height: 300px;
//     margin-top: 15px;
//     margin-left: 10px;
// `

const D1 = style.div`
    padding-top: 15px;
    font-weight: 900;
`
const D2 = style.div`
    padding-top: 15px;
    font-weight: 400;
`

const Show = style.a`
    padding-top: 10px;
    text-decoration: none; /* Remove underline */
    // color: inherit; /* Inherit color from parent */
    cursor: pointer;
`



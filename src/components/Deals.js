import React from 'react'
import '../styles/Deals.scss';
import style from 'styled-components';
import Viewbutton from './Viewbutton';

function Deals() {
  return (
    
        <Deal1>
            <Picture />
            <Offers>
                <Offer1>20% off</Offer1>
                <Offer1>Limited Time</Offer1>
            </Offers>
            <Information>
                <Desc>
                    Computer modern classic with Wix support
                </Desc>
                <Price>
                    $39.93
                </Price>
                <Viewbutton />
            </Information>
                
        </Deal1>
        
  )
}

export default Deals

const Deal1 = style.div`
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    // border: 2px solid blue;
    padding-left: 20px;
`

const Picture = style.div`
    // margin-top: 15px;
    width: 270px;
    height: 130px;
    border: 1px solid brown;
`

const Offers = style.div`
    width: 270px;
    height: 20px;
    // border: 2px solid black;
    display:flex;
`

const Offer1 = style.p`
    margin-right: 12px;
    color: blue;
    font-size: 16;
`

const Desc = style.p`
    color: grey;
    font-size: 18;
    font-weight: 500;
`

const Price = style.p`
    color: blue;
    font-size: 20;
`

const Information = style.div`
    width: 267px;
    height: 70px;
    // border: 2px solid blue;
    padding-left: 3px;
    margin-top: 2px;
`
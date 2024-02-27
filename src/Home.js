import React from 'react'
import style from 'styled-components';
import Option from './components/Option';
import Button from './components/Button';
import Review1 from './components/Review';
import Review2 from './components/Review2';
import Review3 from './components/Review3';
import Deals from './components/Deals';
import './styles/Deals.scss';

function Home() {
  return (
    <Container>
        <HeadContainer>
            <Content>
                Best Website builders in the US
            </Content>
        </HeadContainer>
        <Details>
                <Features>
                    Last Updated
                </Features>
                <Features>
                    19th February
                </Features>
                <Features>
                    Advertisements
                </Features>
        </Details>
        <ButtonContainer>
            <Button />
        </ButtonContainer>

        <Display>
            <Option />
            <Review1 />
        </Display>

        <ButtonContainer>
            <Button />
        </ButtonContainer>

        <Display>
            <Option />
            <Review2 />
        </Display>

        <Display>
            <Option />
            <Review3 />
        </Display>

        <div className='deal'>
            <Deals />
            <Deals />
            <Deals />
        </div>
            
    </Container>
  )
}

export default Home

const Container = style.div`
    display: flex;
    height: 2000px;
    flex-direction: column;
    align-items: center;
`

const HeadContainer = style.div`
    width: 1006px;
    height: 60px;
    padding-top: 102px;
    padding-left: 2px; 
    // border: 2px solid black;
`

const Content = style.div`
    font-size: 48px;
    font-weight: 400;
    color: #2C384A;
    line-height: 60px;
`

const Details = style.div`
    display: flex;
    // border: 2px solid red;
    width: 1006px;
    justify-content: flex-start;
`

const Features = style.div`
    font-size: 14px;
    font-weight: 400;
    color: #4B5665;
    line-height: 20px;
    width: 93px;
    height: 20px;
    padding-top: 28px;
    padding-left: 12px;
`

const ButtonContainer = style.div`
    margin: 20px; 
    width: 1006px;
    height: 50px;
    // border: 2px solid black;
    padding-left: 2px;
`
const Display = style.div`
    width: 1006px;
    height: 330px;
    display: flex;
`

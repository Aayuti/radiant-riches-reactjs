import React from 'react'
import style from 'styled-components';
import '../styles/Header.scss';
import SearchIcon from '@mui/icons-material/Search';


function Header() {
  return (
    <div>
        <div className='container'>
            <div className="headerSearch">
            <HeaderSearchIconContainer>
                    <SearchIcon />
            </HeaderSearchIconContainer>
                <input type="text" className="headerSearchInput" />
            </div>

            <div className='headerNavItems'>
                <HeaderOption>
                    <OptionLineOne>
                        <CategoriesLink href="#">Categories</CategoriesLink>
                    </OptionLineOne>
                </HeaderOption>
                <HeaderOption>
                    <OptionLineOne>
                        <Builders href="#">Website Builders</Builders>
                    </OptionLineOne>
                </HeaderOption>
                <HeaderOption>
                    <OptionLineOne>
                        <Tools href="#">Tools</Tools>
                    </OptionLineOne>
                </HeaderOption>
            </div>
        </div>
    </div>
  )
}

export default Header



const HeaderSearchIconContainer = style.div`
    background-color: white;
    width: 45px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`

const HeaderOption = style.div`
    padding: 10px 9px;
`
    
const OptionLineOne = style.div`
    font-weight: 500;
    font-size: 20px;
`

const CategoriesLink = style.a`
    text-decoration: none; /* Remove underline */
    color: inherit; /* Inherit color from parent */
    cursor: pointer; /* Change cursor to pointer on hover */
`;
const Tools = style.a`
    text-decoration: none; /* Remove underline */
    color: inherit; /* Inherit color from parent */
    cursor: pointer; /* Change cursor to pointer on hover */
`;
const Builders = style.a`
    text-decoration: none; /* Remove underline */
    color: inherit; /* Inherit color from parent */
    cursor: pointer; /* Change cursor to pointer on hover */
`;


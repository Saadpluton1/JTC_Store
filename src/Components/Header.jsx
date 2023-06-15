import React from 'react'
import logo from '../Assets/Images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
function Header() {
    return (
        <div className='NavMainHolder'>
            <div className='NavMain'>
                <div className='HeaderItemsHolder'>
                    <p>Home</p>
                    <p>Beans</p>
                    <p>Machine</p>
                </div>
                <div className='HeaderLogoDiv'>
                    <img src={logo} alt="" />
                </div>
                <div className='NavtoolsDiv'>
                    <SearchIcon />
                    <button className='ButtonLogin'>
                        LOGIN
                    </button>
                    <ShoppingCartOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Header
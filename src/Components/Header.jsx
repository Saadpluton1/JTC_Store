import { useState } from 'react'
import logo from '../Assets/Images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';


function Header() {
    const [showMobileNav, setshowMobileNav] = useState(false)
    return (
        <>
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
            <div className='MobileNavbarHolder'>
                <div className='Mobile-Navbar'>
                    <div className='Mobile-nav-logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div onClick={() => setshowMobileNav(!showMobileNav)}>
                        <MenuIcon />
                    </div>

                </div>
                <div className={`DropDown-nav ${showMobileNav && 'show'}`}>
                    <div>
                        <p>Home</p>
                        <p>Beans</p>
                        <p>Machine</p>

                    </div>
                    <div className='NavtoolsDiv margin-top-10 width-100'>
                        <SearchIcon />
                        <button className='ButtonLogin'>
                            LOGIN
                        </button>
                        <ShoppingCartOutlinedIcon />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
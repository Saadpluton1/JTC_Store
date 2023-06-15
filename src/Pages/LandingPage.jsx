// import '../assets/Style/style.css'
import '../App.css'
import ItemCard from '../Components/ItemCard';
import coffee from '../assets/Images/coffee.png'
import redDot from '../assets/Images/icons/redDot.png'
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import Machine from '../assets/Images/Machine.png'
import CoffeePouch from '../assets/Images/CoffeePouch.png'

function LandingPage() {
    return (
        <div>
            <div className='section1'>
                <div className='section1-inner1'>
                    <p>
                        A <span className='redColor'> Good</span> Coffee
                        Makes A <span className='redColor'> Great </span>
                        Day
                    </p>
                    <div className='SignupBtnArea'>
                        <div className='Signuptxt'>

                            Sign Up
                        </div >
                        <div className='SignUpBtn'>
                            <CallMadeOutlinedIcon />
                        </div>
                    </div>
                </div>
                <div className='section1-inner2'>
                    <img src={coffee} alt="" />
                </div>
            </div>
            <div className='section2'>
                <div>
                    <div className='section2-r1'>
                        <div className='section2-r1-c1'>Coffee BEANS</div>
                        <div className='section2-r1-c2'>
                            <div className='section2-r1-c2-active'><div className='redDot'>
                                <img src={redDot} alt="" /></div>New Edition</div>
                            <div>Most Popular</div>
                        </div>
                    </div>


                    <div className='CardsArea' >
                        <div className='CardsHolder'>
                            <ItemCard data={{ IsSold: false, ItemImg: Machine }} />
                            <ItemCard data={{ IsSold: true, ItemImg: Machine }} />
                            <ItemCard data={{ IsSold: false, ItemImg: Machine }}/>
                            <ItemCard data={{ IsSold: false, ItemImg: Machine }}/>
                            <ItemCard data={{ IsSold: false, ItemImg: Machine }}/>
                            <ItemCard data={{ IsSold: false, ItemImg: Machine }}/>
                            <ItemCard data={{ IsSold: false, ItemImg: Machine }}/>
                            <ItemCard data={{ IsSold: false, ItemImg: Machine }}/>
                            <ItemCard data={{ IsSold: false, ItemImg: Machine }}/>
                            <ItemCard data={{ IsSold: false, ItemImg: Machine }}/>
                        </div>
                    </div>


                </div>
            </div>
            <div className='section2'>
                <div>
                    <div className='section2-r1'>
                        <div className='section2-r1-c1'>Coffee Machines</div>
                        <div className='section2-r1-c2'>
                            <div className='section2-r1-c2-active'><div className='redDot'>
                                <img src={redDot} alt="" /></div>New Edition</div>
                            <div>Most Popular</div>
                        </div>
                    </div>


                    <div className='CardsArea' >
                        <div className='CardsHolder'>
                            <ItemCard data={{ IsSold: false, ItemImg: CoffeePouch }} />
                            <ItemCard data={{ IsSold: true, ItemImg: CoffeePouch }} />
                            <ItemCard data={{ IsSold: false, ItemImg: CoffeePouch }} />
                            <ItemCard data={{ IsSold: false, ItemImg: CoffeePouch }} />
                            <ItemCard data={{ IsSold: false, ItemImg: CoffeePouch }} />
                            <ItemCard data={{ IsSold: false, ItemImg: CoffeePouch }} />
                            <ItemCard data={{ IsSold: false, ItemImg: CoffeePouch }} />
                            <ItemCard data={{ IsSold: false, ItemImg: CoffeePouch }} />
                            <ItemCard data={{ IsSold: false, ItemImg: CoffeePouch }} />
                            <ItemCard data={{ IsSold: false, ItemImg: CoffeePouch }} />
                           
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default LandingPage
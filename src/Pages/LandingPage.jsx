// import '../assets/Style/style.css'
import '../App.css'
import ItemCard from '../Components/ItemCard';
import coffee from '../assets/Images/coffee.png'
import redDot from '../assets/Images/icons/redDot.png'
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import Machine from '../assets/Images/Machine.png'
import CoffeePouch from '../assets/Images/CoffeePouch.png'
import MachineCoffee from '../assets/Images/MachineCoffee.png'
import Fahad from '../assets/Images/Fahad.png'
import Comma from '../assets/Images/Comma.png'
import greyTab from '../assets/Images/icons/greyTab.png'
import redTab from '../assets/Images/icons/redTab.png'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
function LandingPage() {
    return (
        <div>
            <div className='section1'>
                <div className='section1-inner1'>
                    <p className='font-bebas'>
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
                    <img className='width-100' src={coffee} alt="" />
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
                            <ItemCard data={{ title: 'Machine', Desc: 'Flavour so strong, it’ll awaken all five of your senses!', IsSold: false, ItemImg: Machine, ShowDes: true }} />
                            <ItemCard data={{ title: 'Machine', Desc: 'Flavour so strong, it’ll awaken all five of your senses!', IsSold: true, ItemImg: Machine, ShowDes: true }} />
                            <ItemCard data={{ title: 'Machine', Desc: 'Flavour so strong, it’ll awaken all five of your senses!', IsSold: false, ItemImg: Machine, ShowDes: true }} />
                            <ItemCard data={{ title: 'Machine', Desc: 'Flavour so strong, it’ll awaken all five of your senses!', IsSold: false, ItemImg: Machine, ShowDes: true }} />
                            <ItemCard data={{ title: 'Machine', Desc: 'Flavour so strong, it’ll awaken all five of your senses!', IsSold: false, ItemImg: Machine, ShowDes: true }} />
                            <ItemCard data={{ title: 'Machine', Desc: 'Flavour so strong, it’ll awaken all five of your senses!', IsSold: false, ItemImg: Machine, ShowDes: true }} />
                            <ItemCard data={{ title: 'Machine', Desc: 'Flavour so strong, it’ll awaken all five of your senses!', IsSold: false, ItemImg: Machine, ShowDes: true }} />
                            <ItemCard data={{ title: 'Machine', Desc: 'Flavour so strong, it’ll awaken all five of your senses!', IsSold: false, ItemImg: Machine, ShowDes: true }} />
                            <ItemCard data={{ title: 'Machine', Desc: 'Flavour so strong, it’ll awaken all five of your senses!', IsSold: false, ItemImg: Machine, ShowDes: true }} />
                            <ItemCard data={{ title: 'Machine', Desc: 'Flavour so strong, it’ll awaken all five of your senses!', IsSold: false, ItemImg: Machine, ShowDes: true }} />

                        </div>
                        <div className='See-more-btn'>
                            See More
                        </div>
                    </div>


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
                            <ItemCard data={{ title: 'Roasted Beans', Desc: 'Flavour so strong, it’ll awaken all five of your senses!', IsSold: false, ItemImg: CoffeePouch, ShowDes: true }} />
                            <ItemCard data={{ title: 'Roasted Beans', Desc: 'Flavour so strong, it’ll awaken all five of your senses!', IsSold: true, ItemImg: CoffeePouch, ShowDes: true }} />
                            <ItemCard data={{ title: 'Roasted Beans', Desc: 'Flavour so strong, it’ll awaken all five of your senses!', IsSold: false, ItemImg: CoffeePouch, ShowDes: true }} />
                            <ItemCard data={{ title: 'Roasted Beans', Desc: 'Flavour so strong, it’ll awaken all five of your senses!', IsSold: false, ItemImg: CoffeePouch, ShowDes: true }} />
                            <ItemCard data={{ title: 'Roasted Beans', Desc: 'Flavour so strong, it’ll awaken all five of your senses!', IsSold: false, ItemImg: CoffeePouch, ShowDes: true }} />
                            <ItemCard data={{ title: 'Roasted Beans', Desc: 'Flavour so strong, it’ll awaken all five of your senses!', IsSold: false, ItemImg: CoffeePouch, ShowDes: true }} />
                            <ItemCard data={{ title: 'Roasted Beans', Desc: 'Flavour so strong, it’ll awaken all five of your senses!', IsSold: false, ItemImg: CoffeePouch, ShowDes: true }} />
                            <ItemCard data={{ title: 'Roasted Beans', Desc: 'Flavour so strong, it’ll awaken all five of your senses!', IsSold: false, ItemImg: CoffeePouch, ShowDes: true }} />
                            <ItemCard data={{ title: 'Roasted Beans', Desc: 'Flavour so strong, it’ll awaken all five of your senses!', IsSold: false, ItemImg: CoffeePouch, ShowDes: true }} />
                            <ItemCard data={{ title: 'Roasted Beans', Desc: 'Flavour so strong, it’ll awaken all five of your senses!', IsSold: false, ItemImg: CoffeePouch, ShowDes: true }} />

                        </div>
                        <div className='See-more-btn'>
                            See More
                        </div>
                    </div>


                </div>
            </div>
            <div className='section2 bg-black'>
                <div>
                    <div className='section2-r1'>
                        <div className='section2-r1-c1 white'>SAVE BIG ON BUNDLES <span className='red'> SALE NOW </span></div>
                        <div className='section2-r1-c2'>

                        </div>
                    </div>


                    <div className='CardsArea' >
                        <div className='CardsHolder'>
                            <ItemCard data={{ title: 'Roasted Beans & Machine', Desc: '', IsSold: false, ItemImg: Machine, ShowDes: false }} />
                            <ItemCard data={{ title: 'Roasted Beans & Machine', Desc: '', IsSold: true, ItemImg: Machine, ShowDes: false }} />
                            <ItemCard data={{ title: 'Roasted Beans & Machine', Desc: '', IsSold: false, ItemImg: Machine, ShowDes: false }} />
                            <ItemCard data={{ title: 'Roasted Beans & Machine', Desc: '', IsSold: false, ItemImg: Machine, ShowDes: false }} />
                            <ItemCard data={{ title: 'Roasted Beans & Machine', Desc: '', IsSold: false, ItemImg: Machine, ShowDes: false }} />
                            <ItemCard data={{ title: 'Roasted Beans & Machine', Desc: '', IsSold: false, ItemImg: Machine, ShowDes: false }} />
                            <ItemCard data={{ title: 'Roasted Beans & Machine', Desc: '', IsSold: false, ItemImg: Machine, ShowDes: false }} />
                            <ItemCard data={{ title: 'Roasted Beans & Machine', Desc: '', IsSold: false, ItemImg: Machine, ShowDes: false }} />
                            <ItemCard data={{ title: 'Roasted Beans & Machine', Desc: '', IsSold: false, ItemImg: Machine, ShowDes: false }} />
                            <ItemCard data={{ title: 'Roasted Beans & Machine', Desc: '', IsSold: false, ItemImg: Machine, ShowDes: false }} />

                        </div>
                        <div className='See-more-btn'>
                            See More
                        </div>
                    </div>


                </div>
            </div>
            <div className='Testimonial-section'>
                <div className='Testimonial-heading'>
                    <div className='Testimonial-txt1'>
                        Testimonial
                    </div>
                    <div className='Testimonial-txt2'>
                        What they say about us
                    </div>

                </div>
                <div className='Testimonial-inner'>
                    <div className='Testimonial-left-section'>
                        <div className='testimonial-image'>
                            <img src={Fahad} alt="" />
                        </div>

                    </div>
                    <div className='Testimonial-right-section'>
                        <div className='Testimonial-content'>

                            <div className='CommaIcon'>
                                <img src={Comma} alt="" />
                            </div>
                            <div className='Testimonial-text'>
                                “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat”.
                            </div>
                            <div className='Testimonial-wroteBy'>
                                Fahad Khan - CEO
                            </div>
                        </div>
                        <div className='Testimonial-controls'>
                            <div className='testimonial-tab'>
                                <img src={redTab} alt="" />
                            </div>
                            <div className='testimonial-tab'>
                                <img src={greyTab} alt="" />
                            </div>
                            <div className='testimonial-tab'>
                                <img src={greyTab} alt="" />
                            </div>
                            <div className='testimonial-tab'>
                                <img src={greyTab} alt="" />
                            </div>
                            <div className='testimonial-tab'>
                                <img src={greyTab} alt="" />
                            </div>
                        </div>
                        <div className='Testimonial-arrows'>
                            <div className='left-control'>
                                <ChevronLeftIcon />
                            </div>
                            <div className='right-control'>
                                <ChevronRightIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
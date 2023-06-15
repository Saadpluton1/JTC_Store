import React from 'react'
import FooterLogo from '../assets/Images/FooterLogo.png'
import twitter from '../assets/Images/icons/twitter.png'
import youtube from '../assets/Images/icons/youtube.png'
import snapchat from '../assets/Images/icons/snapchat.png'
import tiktok2 from '../assets/Images/icons/tiktok2.png'
function Footer() {
    return (
        <div className='Footer'>
            <div className='FooterInner'>

                <div className='Footer-section'>
                    <div className='FooterLogo'>
                        <img src={FooterLogo} alt="" />
                    </div>
                    <div className='Footer-desc'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </div>
                </div>
                <div className='Footer-section'>
                    <div className='Footer-heading'>
                        Customer Service
                    </div>
                    <div className='Footer-desc'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
                    </div>
                    <br />
                    <div className='Footer-heading'>
                        General Information
                    </div>
                    <div className='Footer-desc'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
                    </div>
                </div>
                <div className='Footer-section'>
                    <div className='Footer-heading'>
                        Newsletter
                    </div>
                    <div className='Footer-desc'>
                        No worries, we don't spam
                    </div>
                    <div className='EmailInput'>
                        <input type="text" placeholder='Your Email' className='inputForEmail' />
                        <button className='emailSubmit-btn'>SUBMIT</button>
                    </div>
                    <div className='Social-section'>
                        <div className='Footer-heading'>
                            Follow Us
                        </div>
                        <div className='SocialIconsDiv'>
                            <div className='Social-icon-img'>
                                <img src={twitter} alt="" />
                            </div>
                            <div className='Social-icon-img'>
                                <img src={youtube} alt="" />
                            </div>
                            <div className='Social-icon-img'>
                                <img src={tiktok2} alt="" />
                            </div>
                            <div className='Social-icon-img'>
                                <img src={snapchat} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
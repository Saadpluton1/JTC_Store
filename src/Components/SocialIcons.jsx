import React from 'react'
import facebook from '../assets/Images/icons/facebook.png'
import instagram from '../assets/Images/icons/instagram.png'
import tiktok from '../assets/Images/icons/tiktok.png'
function SocialIcons() {
  return (
    <div className='SocialIconsTab'>
        <div className='SocialIconsInner'>
            <div className='SocialIconDiv'>
                <img src={facebook} alt="" />
            </div>
            <div className='SocialIconDiv'>
                <img src={instagram} alt="" />
            </div>
            <div className='SocialIconDiv'>
                <img src={tiktok} alt="" />
            </div>
        </div>
    </div>
  )
}

export default SocialIcons
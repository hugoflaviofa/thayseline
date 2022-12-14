import React from 'react';
import './SocialMidiaIcons.css';
import iconInstagram from '../images/icons/instagram_icon.svg';
import iconFacebook from '../images/icons/facebook_icon.svg';
// import iconTwitter from '../images/icons/twitter_icon.svg';
import iconLinkedin from '../images/icons/linkedin_icon.svg';
import iconTiktok from '../images/icons/tiktok_icon.svg';

export default function SocialMidiaIcons() {
  return (
    <div className='flex animate-fade-in-down'>
      <a
        href="https://www.instagram.com/thays_eline/"
        target="blank"
      >
        <img
          className='Svg-icon'
          src={iconInstagram}
          alt='Instagram'
        />
      </a>
      <a
        href="https://pt-br.facebook.com/personalthayseline/"
        target="blank"
      >
        <img
          className='Svg-icon'
          src={iconFacebook}
          alt='Facebook'
        />
      </a>
      {/* <a
        href="https://twitter.com/thays_eline"
        target="blank"
      >
        <img
          className='Svg-icon'
          src={iconTwitter}
          alt='Twitter'
        />
      </a> */}
      <a
        href="https://www.linkedin.com/in/thayseline/"
        target="blank"
      >
        <img
          className='Svg-icon'
          src={iconLinkedin}
          alt='Linkedin'
        />
      </a>
      <a
        href="https://www.tiktok.com/@thays_eline"
        target="blank"
      >
        <img
          className='Svg-icon'
          src={iconTiktok}
          alt='Tiktok'
        />
      </a>
    </div>
  )
}

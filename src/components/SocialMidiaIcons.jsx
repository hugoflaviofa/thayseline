import React from 'react';
import iconInstagram from '../images/icons/instagram_icon.svg';
import iconFacebook from '../images/icons/facebook_icon.svg';
import iconTwitter from '../images/icons/twitter_icon.svg';
import iconLinkedin from '../images/icons/linkedin_icon.svg';
import iconTiktok from '../images/icons/tiktok_icon.svg';

export default function SocialMidiaIcons() {
  return (
    <div>
    <a
      className="App-link"
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
      className="App-link"
      href="https://pt-br.facebook.com/personalthayseline/"
      target="blank"
    >
      <img
      className='Svg-icon'
        src={iconFacebook}
        alt='Facebook'
      />
    </a>
    <a
      className="App-link"
      href="https://twitter.com/thays_eline"
      target="blank"
    >
      <img
      className='Svg-icon'
        src={iconTwitter}
        alt='Twitter'
      />
    </a>
    <a
      className="App-link"
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
      className="App-link"
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

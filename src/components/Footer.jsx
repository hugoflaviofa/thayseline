import React from 'react';
import linkedinIcon from '../images/icons/linkedin_icon_footer.svg';
import GitHubIcon from '../images/icons/github_icon.svg';

export default function Footer() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center text-base text-slate-500 w-full h-40 bg-slate-800 self-end'>
        <div className='flex gap-4'>
            <a
                href="https://www.linkedin.com/in/hugoflavio/"
                target="blank"
            >
                <img src={linkedinIcon} alt="Linkedin icon" className='bg-slate-500 rounded-full p-1.5' />
            </a>
            <a
                href="https://github.com/hugoflaviofa"
                target="blank"
            >
                <img src={GitHubIcon} alt="Linkedin icon" className='' />
            </a>
        </div>
        <p>&copy; 2022 Hugo Flávio</p>
    </div>
  )
}

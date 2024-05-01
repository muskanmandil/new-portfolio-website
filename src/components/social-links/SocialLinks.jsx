import React from 'react'
import "./SocialLinks.css"
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import twitter from "../../assets/twitter.svg";

const SocialLinks = () => {
  return (
    <div className='social-links-container'>
        <img src={linkedin} alt="" />
        <img src={github} alt="" />
        <img src={twitter} alt="" />
        <hr />
    </div>
  )
}

export default SocialLinks
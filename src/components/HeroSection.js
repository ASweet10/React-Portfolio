import React, { useState } from 'react'
import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'
import heroVideo from '../videos/pexels-pressmaster-abstract-lines.mp4'


const HeroContainer = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`
const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
const VideoBackground = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: black;
`
const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`


const HeroH1 = styled.h1`
    color: white;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

const HeroP = styled.p`
    margin-top: 24px;
    color: white;
    font-size: 20px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 16px;
    }
    @media screen and (max-width: 480px){
        font-size: 12px;
    }
`

const HeroButtonWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`



export default function HeroSection() {
    const [isHovering, setIsHovering] = useState(false)

    const onHover = () => {
        setIsHovering(!isHovering)
    }

  return (
    <HeroContainer>
        <HeroBackground>
            <VideoBackground autoPlay loop muted src={heroVideo} type='video/mp4' />
        </HeroBackground>
        <HeroContent>
            <HeroH1>
                Hi, I'm Aaron Sweet
            </HeroH1>
        </HeroContent>
    </HeroContainer>
  )
}

import React, { useState } from 'react'

import {
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './Homepage'

import { Button } from '../ButtonElement'

const Homepage = () => {

    const [ hover, setHover ] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroContent>
                <HeroH1> Sawubona </HeroH1>
                <HeroP> 
                    This website was made by Esona Ncobela, a 4th-year student
                    at the University of the Witwatersrand studying digital arts.
                    This website was made for Interactive Media 4 and displays
                    internet art along with blog posts for the semester.
                    Without further ado,
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to="design" 
                        onMouseEnter={ onHover } 
                        onMouseLeave={ onHover }
                        primary="true"
                        dark="true"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass='active'
                        exact='true'
                        > 
                        Get started 
                        {hover ? <ArrowForward/> : <ArrowRight/>} 
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Homepage
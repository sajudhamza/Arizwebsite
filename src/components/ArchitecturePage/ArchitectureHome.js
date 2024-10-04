import React, { useState } from 'react';
import { Button } from '../ButtonElements';

import Video from '../../videos/solution.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './ArchitectureHomeElements';


function ArchitectureHome() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='gen-ai-home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>The Ariz Solution <br/> Migrate your Infrastructure to Cloud with Ease</HeroH1>
        <HeroP>
        Ariz can Architect and migrate your business into the cloud seamlessly with its expert solutions architects.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to= 'about'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Learn More {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default ArchitectureHome;

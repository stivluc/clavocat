import React, { useState, useEffect } from "react";
import Video from "../../images/vuePlafond.mp4";
import Image from "../../images/vuePlafond.png";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  ArrowDownward,
  ArrowDown,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroP,
  ImageBg,
  HeroTitle,
  HeroH3,
} from "./FirstElements";
import { Button } from "../ButtonElement";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const FirstSection = () => {
  const [hover, setHover] = useState(false);
  const { width } = useWindowDimensions();

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        {width > 800 ? <VideoBg autoPlay={true} loop={true} controls={false} muted src={Video} type='video/mp4' /> : <ImageBg src={Image} alt='Cabinet' />}
      </HeroBg>
      <HeroContent>
        <HeroTitle>Christine Lucas</HeroTitle>
        <HeroH3>
          <em>Avocate au Barreau de Senlis</em>
        </HeroH3>
        <HeroH1>"Un problème sans solution est un problème mal posé."</HeroH1>
        <HeroP>Ensemble, adoptons la stratégie juridique ou judiciaire qui vous correspond.</HeroP>
        <HeroP>Chaque cas et dossiers sont différents, il me faudra alors vous apporter le conseil juste et adapté à votre situation.</HeroP>
        <HeroBtnWrapper>
          <Button
            to='presentation'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}>
            Qui suis-je ? {hover ? <ArrowDownward /> : <ArrowDown />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default FirstSection;

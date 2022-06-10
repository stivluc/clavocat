import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {ReactComponent as Logo} from '../../images/Logo.svg'
import {Nav,NavBtn,NavBtnLink, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, EmptyPhone, FilledPhone, NavName} from './NavbarElements'
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                            <Logo style={{objectFit: 'contain', height:'90px', fill:'white'}}/>
                    </NavLogo>

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavName>Christine Lucas</NavName>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to='presentation'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Présentation</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='pres2'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Expérience</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="competences"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Compétences</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink href="tel:+33344650950" onMouseEnter={onHover} onMouseLeave={onHover}>
                            {hover ? <FilledPhone /> : <EmptyPhone />}
                            {hover ? ' 03.44.65.09.50' : ' Appeler'}
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar

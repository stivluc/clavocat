import React, {useState} from 'react'
import { SidebarContainer, SidebarMenu, Icon, CloseIcon, SidebarLink, SidebarRoute, SideBtnWrap} from './SidebarElements'
import { EmptyPhone, FilledPhone } from '../Navbar/NavbarElements'

const Sidebar = ({isOpen, toggle}) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <div>
                <SidebarMenu>
                    <SidebarLink to="presentation" onClick={toggle}>
                        Présentation
                    </SidebarLink>
                    <SidebarLink to="pres2" onClick={toggle}>
                        Expérience
                    </SidebarLink>
                    <SidebarLink to="competences" onClick={toggle}>
                        Expertise
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute href="tel:+33344650950" onMouseEnter={onHover} onMouseLeave={onHover}>
                        {hover ? <FilledPhone /> : <EmptyPhone />}
                        {hover ? ' 03.44.65.09.50' : ' Appeler'}
                    </SidebarRoute>
                </SideBtnWrap>
            </div>
        </SidebarContainer>
    )
}

export default Sidebar

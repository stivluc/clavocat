import React from 'react'
import {FooterContainer, FooterH1, FooterH2, FooterCredits} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
                <FooterH1>
                    CHRISTINE LUCAS
                </FooterH1>
                <FooterH2>
                    Avocate au Barreau de Senlis
                </FooterH2>
                    <FooterCredits>
                    Christine Lucas © {new Date().getFullYear()} | Tous droits réservés
                    </FooterCredits>
                    <FooterCredits>
                    Design & Développement par Steven Lucas
                    </FooterCredits>

        </FooterContainer>
    )
}

export default Footer

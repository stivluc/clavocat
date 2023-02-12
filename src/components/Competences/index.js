import React, { createRef, useEffect } from "react";
import {
  CompetencesContainer,
  CompetencesH3,
  CompetencesH1,
  CompetencesCard,
  CompetencesIcon,
  CompetencesP,
  CompetencesH2,
  CompetencesWrapper,
  Additionnal,
} from "./CompetencesElements";
import "./dots.css";

// import logo
import Corporel from "../../images/Corporel.svg";
import AutresDomaines from "../../images/AutresDomaines.svg";
import Commercial from "../../images/Commercial.svg";
import Affaires from "../../images/Affaires.svg";
import Travail from "../../images/Travail.svg";
import Famille from "../../images/Famille.svg";

// import carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Competences = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    arrows: true,
    dots: true,
    slidesToShow: 3,
    pauseOnDotsHover: true,
    pauseOnHover: true,
    pauseOnSelect: true,
    responsive: [
      {
        breakpoint: 1218,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          centerMode: true,
          arrows: false,
          slidesToShow: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          arrows: false,
          autoplay: false,
        },
      },
      {
        breakpoint: 390,
        settings: {
          autoplay: false,
          slidesToShow: 1,
          centerMode: true,
          arrows: false,
          centerPadding: "1rem",
        },
      },
    ],
  };

  let firstClientX, clientX;

  const preventTouch = (e) => {
    const minValue = 5; // threshold

    clientX = e.touches[0].clientX - firstClientX;

    // Vertical scrolling does not work when you start swiping horizontally.
    if (Math.abs(clientX) > minValue) {
      e.preventDefault();
      e.returnValue = false;

      return false;
    }
  };

  const touchStart = (e) => {
    firstClientX = e.touches[0].clientX;
  };

  let containerRef = createRef();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("touchstart", touchStart);
      containerRef.current.addEventListener("touchmove", preventTouch, {
        passive: false,
      });
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("touchstart", touchStart);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        containerRef.current.removeEventListener("touchmove", preventTouch, {
          passive: false,
        });
      }
    };
  });

  return (
    <CompetencesContainer id='competences'>
      <CompetencesH1>Mes domaines d'expertise</CompetencesH1>
      <CompetencesWrapper>
        <div ref={containerRef}>
          <Slider {...settings}>
            <CompetencesCard>
              <CompetencesIcon src={Commercial} />
              <CompetencesH2>Domaines d'Intervention</CompetencesH2>
              <CompetencesH3>Assistance Juridique</CompetencesH3>
              <CompetencesP>Conseil - Rédaction d'actes - Démarches et formalités juridiques</CompetencesP>
              <CompetencesH3>Défense Judiciaire</CompetencesH3>
              <CompetencesP>Assistance et représentation en justice sur tout le territoire national</CompetencesP>
              <CompetencesH3>Négociation</CompetencesH3>
              <CompetencesP>Tentative de règlement amiable - Rédaction de transaction et de protocole d'accord - Recours à la médiation</CompetencesP>
            </CompetencesCard>

            <CompetencesCard>
              <CompetencesIcon src={Affaires} />
              <CompetencesH2>Droit des Affaires</CompetencesH2>
              <CompetencesH3>Constitution de sociétés civiles et commerciales</CompetencesH3>
              <CompetencesP>Modifications statutaires - Cession de parts sociales - Dissolution - Liquidation</CompetencesP>
              <CompetencesH3>Cession de fonds de commerce</CompetencesH3>
              <CompetencesP>
                - dont professions réglementées (e.g officine de pharmacie) et activités réglementées (e.g débitants de tabac, boissons)
              </CompetencesP>
              <CompetencesH3>Cession de Contrats Commerciaux</CompetencesH3>
              <CompetencesP>- droit au bail</CompetencesP>
            </CompetencesCard>

            <CompetencesCard>
              <CompetencesIcon src={Famille} />
              <CompetencesH2>Droit de la Famille</CompetencesH2>
              <CompetencesP>
                - <strong>Divorce</strong> à l'amiable ou contentieux
                <br />
                - Prestation compensatoire
                <br />- <strong>Séparation</strong>
                <br />
                - Liquidation du régime matrimonial ou de l'indivision
                <br />
                - Autorité parentale
                <br />
                - Pension alimentaire (fixation ou revalorisation)
                <br />
                - Résidence de l'enfant
                <br />
                - Convention parentale
                <br />- Juge aux Affaires Familiales
              </CompetencesP>
            </CompetencesCard>

            <CompetencesCard>
              <CompetencesIcon src={Travail} />
              <CompetencesH2>Droit du Travail</CompetencesH2>
              <CompetencesP>
                - Contrat de travail
                <br />- <strong>Licenciement</strong> pour cause réelle et sérieuse
                <br />- <strong>Licenciement</strong> pour faute grave
                <br />- <strong>Licenciement</strong> pour inaptitude
                <br />- <strong>Licenciement</strong> pour motif économique
                <br />
                - Clause de non-concurrence
                <br />
                - Rupture conventionnelle
                <br />- Conseil de Prud'hommes
              </CompetencesP>
            </CompetencesCard>

            <CompetencesCard>
              <CompetencesIcon src={Corporel} />
              <CompetencesH2>Réparation du Préjudice Corporel</CompetencesH2>
              <CompetencesP>
                Je développe un nouveau domaine, tenant de ma maturité et d’un <strong>long chemin</strong>: la réparation du préjudice corporel.
              </CompetencesP>
              <CompetencesP>
                Moi-même victime d’un <strong>accident grave</strong> de la circulation en 1993, je suis aujourd’hui prête à vous accompagner sur ce lourd
                parcours, avec toute ma <strong>compréhension, ma motivation et mon empathie.</strong>
              </CompetencesP>
            </CompetencesCard>

            <CompetencesCard>
              <CompetencesIcon src={AutresDomaines} />
              <CompetencesH2>Autres Domaines d'Intervention</CompetencesH2>
              <CompetencesP>
                -<strong> Droit Commercial</strong>
                <br />
                - Clauses abusives
                <br />-<strong> Ruptures abusives</strong> des relations commerciales
                <br />
                - Bail Commercial
                <br />
                -Recouvrement de créances
                <br />-<strong> Procédures </strong>collectives
                <br />-<strong> Tribunal de Commerce</strong>
                <br />
                -Saisie - Exécution
                <br />-<strong> Droit de la Responsabilité</strong> (civile, contractuelle)
                <br />-<strong> Litige locatif</strong> (bail d'habitation - impayés - trouble de jouissance - insalubrité)
                <br />-<strong>Tribunal Judiciaire</strong>
              </CompetencesP>
            </CompetencesCard>
          </Slider>
        </div>
      </CompetencesWrapper>

      <Additionnal style={{ textAlign: "center", maxWidth: "1200px" }}>
        <CompetencesH2 style={{ color: "white", margin: "4rem 0 1rem", textAlign: "center" }}>
          COMPÉTENCE ET PLAIDOIRIE SUR TOUT LE TERRITOIRE NATIONAL
        </CompetencesH2>
        <CompetencesH3 style={{ color: "white" }}>Postulation devant le Tribunal Judiciaire de Senlis</CompetencesH3>
        <CompetencesH3 style={{ color: "white", marginBottom: "1rem" }}>Aide Juridictionnelle</CompetencesH3>
        <CompetencesP style={{ color: "white", textAlign: "justify" }}>
          Inscrite au Barreau de Senlis, j'interviens également au titre de l'<strong>aide juridictionnelle</strong>. L'avocat que vous pouvez choisir, doit
          nécessairement être inscrit au Barreau dont dépend la Juridiction qui examinera l'affaire. Les honoraires d'avocat seront pris en charge selon le
          barème de l'aide juridictionnelle.
        </CompetencesP>
      </Additionnal>
    </CompetencesContainer>
  );
};

export default Competences;

import React from "react";
import {
  ContactContainer,
  ContactInfoItem,
  Location,
  Mail,
  Phone,
  Clock,
  ContactHeading,
  ContactIframe,
  ContactColumn1,
  ContactColumn2,
  ContactWrapper,
  ContactInfoDetail,
} from "./ContactElements";

const Contact = () => {
  return (
    <ContactContainer id='contact'>
      <ContactHeading>Informations de contact</ContactHeading>
      <ContactWrapper>
        <ContactColumn1>
          <ContactInfoItem
            target='_blank'
            href="https://www.google.com/maps/dir//1+Rte+d'Apremont,+60300+Aumont-en-Halatte/@49.2295578,2.5490044,727m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x47e636ee679f0b07:0x735994b6a8e1aa74!2m2!1d2.5490044!2d49.2295578">
            <Location />1 Route d'Apremont, <br />
            60300 Aumont-en-Halatte <br />
          </ContactInfoItem>
          <ContactInfoDetail>(~10 min de Senlis, Creil et Chantilly) </ContactInfoDetail>
          <br />
          <ContactInfoItem href='tel:+33344650950'>
            <Phone />
            03 44 65 09 50
          </ContactInfoItem>
          <ContactInfoItem href='mailto:avocat@christinelucas.fr'>
            <Mail />
            avocat@christinelucas.fr
          </ContactInfoItem>
          <ContactInfoItem
            target='_blank'
            href='https://www.google.com/search?sxsrf=APq-WBuhMa4W5L1fNP7xEO-w7EtEjoPa1w:1646942674472&q=avocat+christine+lucas+chantilly+horaires&ludocid=11616269896422153665&sa=X&ved=2ahUKEwil183Iq7z2AhUNuRoKHRtNDBgQ6BN6BAgoEAI&biw=1920&bih=933'>
            <Clock />
            Lun-Ven : 9-19h <br />
            Sam : 9-12h
          </ContactInfoItem>
        </ContactColumn1>
        <ContactColumn2>
          <ContactIframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Route%20d'Apremont,%2060300%20Aumont-en-Halatte+(Avocate%20Christine%20Lucas)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width='500'
            height='600'
            allowfullscreen></ContactIframe>
        </ContactColumn2>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;

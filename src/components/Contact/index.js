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
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.329509940355!2d2.465968551485923!3d49.194308384847396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e64815cb272ee7%3A0x983660913d3eb625!2s130%20Rue%20du%20Conn%C3%A9table%2C%2060500%20Chantilly!5e0!3m2!1sfr!2sfr!4v1642673577317!5m2!1sfr!2sfr'
            width='500'
            height='600'
            allowfullscreen></ContactIframe>
        </ContactColumn2>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;

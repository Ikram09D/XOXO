import React, { Fragment, useEffect, useState, useRef } from "react";
import "./landingpage.css";
import Person from '../../assets/person.svg';
import Search from "../../assets/searchicon.svg";
import Calender from "../../assets/calendar.svg";
import Near from "../../assets/Near Me.svg";
import Loca from "../../assets/location.svg";
import Side from "../../assets/sideimg.svg";

function LandingPage() {
  const pa =useRef();
  window.addEventListener("scroll",patallax);
  function patallax (){
    let valeur=window.scrollY;
    pa.current.style.marginTop=valeur*-1.9+'px';
  


  }
  const currentDate = new Date();
  const date = currentDate.getDate().toString();
  const month = currentDate.getMonth();
  const day = currentDate.getDay();
  var days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samdi",
  ];
  var dayName = days[day];
  var Months = [
    "Jan",
    "Fév",
    "Mar",
    "Avr",
    "Mai",
    "Juin",
    "Juil",
    "Aout",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var MonthName = Months[month];
  const hour = currentDate.getHours();
  const min = currentDate.getMinutes();
  return (
    <Fragment>
      <section id="landing">
        <div className='gauche' ref={pa}>
          <h3>Le covoiturage pour des Trajets conviviaux et économiques .</h3>
          <p>
            Si vous êtes fatigué des trajets solitaires en voiture et que vous
            souhaitez réduire vos frais de déplacement tout en préservant
            l'environnement, nous avons la solution pour vous !
          </p>
        </div>
        <div id="imgee"  >
          <img src={Side} alt="image"></img>
        </div>

        <div id="bar">
          <div>
            <img src={Loca} alt="location" />
            <a href="">Origine</a>
            <p>trouver votre position</p>
          </div>
          <div>
            <img src={Near} alt="Devant moi" />
            <a href="">Destination</a>
            <p>Trouver votre destination</p>
          </div>
          <div>
            <img src={Calender} alt="Date" />
            <a href="">Date</a>
            <p>
              {dayName + " " + date + " " + MonthName + ", " + hour + ":" + min}
            </p>
          </div>
          <div id="derniere">
            <img src={Person} alt="" />
            <a href="">Nombre</a>
            <p>1</p>
          </div>
          <div id="search">
            <a href="">
              <img src={Search} alt="" />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default LandingPage;

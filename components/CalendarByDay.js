'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './styles/calendarByDay.module.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarContent, setCalendarContent] = useState([]);

  const currentDay = currentDate.getDay(); // Récupère le jour de la semaine (0 - dimanche, 1 - lundi, ..., 6 - samedi)

  useEffect(() => {
    const generateCalendar = () => {
      const hoursInDay = 19 - 9 + 1;

      const calendarContent = [];
      for (let hour = 9; hour <= 19; hour++) {
        if (currentDay !== 0) {
          calendarContent.push(
            <Link href='/reserve/confirm' 
              key={hour} 
              className={styles.calendarHour}
            >
              {hour}h00
            </Link>);
        }
      }
      console.table(calendarContent.length)
      return calendarContent;
    };

    const calendar = generateCalendar();
    setCalendarContent(calendar);

  document.getElementById('currentDate').textContent = currentDate.toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }, [currentDate]);

  const goToPrevDay = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() - 1));
  };

  const goToNextDay = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() + 1));
  };

  const reserved = (e) => {
    const date =  currentDate.toLocaleDateString('fr-FR', {weekday: 'long',day: 'numeric',month: 'long',year: 'numeric'})
    const hour = e.target.outerText
    const confirmedDate = { 
      date: date,
      hour: hour,
      isPayed: false,
    }
   
    localStorage.setItem('date', confirmedDate.date)
    localStorage.setItem('hour', confirmedDate.hour) 
  }

  return (
    <div>
      <div className={styles.date_box}>
        <button className={styles.prev} onClick={goToPrevDay}> - </button>
        <h1 id="currentDate" className={styles.h2}></h1>
        <button className={styles.next} onClick={goToNextDay}> + </button>  
      </div>   
      {calendarContent.length === 0 ?  
        <section className={styles.close_message}>
          <h2 className={styles.message_title}> Fermé </h2>
          <article className={styles.article}>
            <p className={styles.p}> Désolé, notre salon est fermé à la date demandée. </p>
            <p className={styles.p}> Veuillez saisir une autre date s'il vous plaît.</p>
            <p className={styles.p}> Merci de votre compréhension.</p>
          </article>
        </section>
      :   
        <div id="calendar" 
          onClick={reserved} 
          className={styles.calendarContainer}
        >
          {calendarContent}
        </div> 
      }
    </div>
  );
};

export default Calendar;
'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './styles/calendarByDay.module.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarContent, setCalendarContent] = useState([]);

  useEffect(() => {
    const generateCalendar = () => {
      const hoursInDay = 19 - 9 + 1;

      const calendarContent = [];
      for (let hour = 9; hour <= 19; hour++) {
        calendarContent.push(<Link href='/reserve/confirm' key={hour} className={styles.calendarHour}>{hour}:00</Link>);
      }

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
    console.table(confirmedDate) 
  }

 
  return (
    <div>
      <button onClick={goToPrevDay}>Jour précédent</button>
      <button onClick={goToNextDay}>Jour suivant</button>
      <h1 id="currentDate"></h1>
      <div id="calendar" onClick={reserved} className={styles.calendarContainer}>{calendarContent}</div>
    </div>
  );
};

export default Calendar;

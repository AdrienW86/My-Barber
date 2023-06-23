'use client'

import { useEffect, useState } from 'react';
import styles from './calendar.module.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarContent, setCalendarContent] = useState([]);

  useEffect(() => {
    const getDaysInMonth = (month, year) => {
      return new Date(year, month, 0).getDate();
    };

    const generateCalendar = () => {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const daysInMonth = getDaysInMonth(month, year);

      const calendarContent = [];
      for (let day = 1; day <= daysInMonth; day++) {
        calendarContent.push(<div key={day} className={styles.calendarDay}>{day}</div>);
      }

      return calendarContent;
    };

    const calendar = generateCalendar();
    setCalendarContent(calendar);

    document.getElementById('currentMonth').textContent = currentDate.toLocaleString('fr-FR', {
      month: 'long',
      year: 'numeric',
    });
  }, [currentDate]);

  const goToPrevMonth = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  return (
    <div className={styles.calendar}>
      <button onClick={goToPrevMonth}>Mois précédent</button>
      <button onClick={goToNextMonth}>Mois suivant</button>
      <h1 id="currentMonth"></h1>
      <div id="calendar" className={styles.calendarContainer}>{calendarContent}</div>
    </div>
  );
};

export default Calendar;





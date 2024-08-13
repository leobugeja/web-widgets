function getDateWeek(date) {
  const januaryFirst = new Date(date.getFullYear(), 0, 1);
  const daysToNextMonday = (januaryFirst.getDay() === 1) ? 0 : (7 - januaryFirst.getDay()) % 7;
  const nextMonday = new Date(date.getFullYear(), 0, januaryFirst.getDate() + daysToNextMonday);

  return (date < nextMonday) ? 52 : (date > nextMonday ? Math.ceil((date - nextMonday) / (24 * 3600 * 1000) / 7) : 1);
}

const today = new Date();
const nextWeek = new Date();
nextWeek.setDate(nextWeek.getDate() + 7);

const weekNumElement = document.getElementById('week-number');
weekNumElement.innerText = getDateWeek(today);
const nextWeekNumElement = document.getElementById('next-week-number');
nextWeekNumElement.innerText = getDateWeek(nextWeek);

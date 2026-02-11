function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) {
    day = 7;
  }
  return day;
}

function getDateAgo(date, days) {
  date.setDate(date.getDate() - days);
  return date.getDate();
}

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

alert( getLastDayOfMonth(2012, 0) ); 
alert( getLastDayOfMonth(2012, 1) ); 
alert( getLastDayOfMonth(2013, 1) );
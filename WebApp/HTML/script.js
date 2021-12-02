const date = new Date();

const monthDays = document.querySelector(".days");

const renderCalendar = () => {
  
console.log(date.getDay());

//Debug to test days display correctly in relation to month
//date.setMonth(1);

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const prevLastDay = new Date(date.getFullYear(), date.getMonth(),0).getDate();

const firstDayIndex = date.getDate();
console.log(prevLastDay);

const months = ["January", "February","March","April","May","June","July","August","September","October","November","December",];

document.querySelector('.date h1').innerHTML = months[date.getMonth()];

document.querySelector('.date p').innerHTML = date.toDateString();

let days = "";

for(let i = 1; i <= lastDay; i++){
  days += `<div>${i}</div>`;
  monthDays.innerHTML = days;
}
}


document.querySelector('.leftbanner').addEventListener('click', () =>{
  date.setMonth(date.getMonth()-1);
  renderCalendar();
});


document.querySelector('.rightbanner').addEventListener('click', () =>{
    date.setMonth(date.getMonth()+1);
    renderCalendar();
})

renderCalendar();
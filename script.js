// * Navbar Javscript
const navButton = document.querySelector("#nav__menu");
const overlay = document.querySelector("#overlay");

let nav = () => {
  navButton.classList.toggle("change");
  overlay.classList.toggle("toggle");
};

/* // * Carousel Javscript

const carousel = document.querySelector(".carousel");

let isDragStart = false,
  prevPageX,
  prevScrollLeft;

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop); */

// * countdown

const days = document.getElementById("days"),
hours = document.getElementById("hours"),
minutes = document.getElementById("minutes"),
seconds = document.getElementById("seconds");

const currentDate = new Date().getFullYear();

const newDateTime = new Date(`September 21 ${currentDate} 00:00:00`);

function updateCountdown() {
  const currentTime = new Date();
  const diff = newDateTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  // seconds.innerHTML = s < 10 ? "0" + s : s;
}

setInterval(updateCountdown, 1000);

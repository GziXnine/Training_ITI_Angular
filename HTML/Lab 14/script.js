/** @format */

const playPauseBtn = document.querySelector(".play-pause-btn");
const playPauseIcon = playPauseBtn.querySelector("i");
const musicProgressBar = document.getElementById("musicProgressBar");
const volumeBar = document.getElementById("volumeBar");
const currentTimeSpan = document.querySelector(".current-time");
const totalTimeSpan = document.querySelector(".total-time");
const songNameDisplay = document.querySelector(".song-name");
const artistNameDisplay = document.querySelector(".artist-name");
const phoneTimeDisplay = document.querySelector(".header .time");

const audio = new Audio();
audio.src = "./songs/Quran.mp3";
audio.volume = volumeBar.value / 100;

let isPlaying = false;

songNameDisplay.textContent = "At-Tur";
artistNameDisplay.textContent = "Muhammad Luhaidan";

function playAudio() {
  audio.play();
  isPlaying = true;
  playPauseIcon.classList.remove("fa-play");
  playPauseIcon.classList.add("fa-pause");
  console.log("Playing audio");
}

function pauseAudio() {
  audio.pause();
  isPlaying = false;
  playPauseIcon.classList.remove("fa-pause");
  playPauseIcon.classList.add("fa-play");
  console.log("Paused audio");
}

function stopAudio() {
  audio.pause();
  audio.currentTime = 0;
  isPlaying = false;
  playPauseIcon.classList.remove("fa-pause");
  playPauseIcon.classList.add("fa-play");
  currentTimeSpan.textContent = "00:00";
  musicProgressBar.value = 0;
  console.log("Stopped audio");
}

function changeVolume(value) {
  audio.volume = value / 100;
  console.log(`Volume changed to: ${audio.volume}`);
}

playPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    pauseAudio();
  } else {
    playAudio();
  }
});

musicProgressBar.addEventListener("input", (e) => {
  const seekTime = (e.target.value / 100) * audio.duration;
  audio.currentTime = seekTime;
  console.log(`Music seeked to: ${audio.currentTime}s`);
});

volumeBar.addEventListener("input", (e) => {
  changeVolume(e.target.value);
});

audio.addEventListener("timeupdate", () => {
  const currentMinutes = Math.floor(audio.currentTime / 60);
  const currentSeconds = Math.floor(audio.currentTime % 60);
  currentTimeSpan.textContent = `${String(currentMinutes).padStart(
    2,
    "0"
  )}:${String(currentSeconds).padStart(2, "0")}`;

  const progressPercent = (audio.currentTime / audio.duration) * 100;
  musicProgressBar.value = progressPercent || 0;
});

audio.addEventListener("loadedmetadata", () => {
  const totalMinutes = Math.floor(audio.duration / 60);
  const totalSeconds = Math.floor(audio.duration % 60);
  totalTimeSpan.textContent = `${String(totalMinutes).padStart(
    2,
    "0"
  )}:${String(totalSeconds).padStart(2, "0")}`;
  console.log(`Audio metadata loaded. Duration: ${audio.duration}s`);
});

audio.addEventListener("ended", () => {
  pauseAudio();
  audio.currentTime = 0;
  musicProgressBar.value = 0;
  currentTimeSpan.textContent = "00:00";
  console.log("Audio ended.");
});

function updatePhoneTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  phoneTimeDisplay.textContent = `${hours}:${formattedMinutes} ${ampm}`;
}
updatePhoneTime();
setInterval(updatePhoneTime, 60000);

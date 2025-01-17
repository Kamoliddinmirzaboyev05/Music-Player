const title = document.querySelector(".title");
const cover = document.querySelector(".cover");
const controlBtn = document.querySelector(".pause-play");
const body = document.querySelector("body");
const audio = document.querySelector(".audio");
const backBtn = document.querySelector(".backBtn");
const nextBtn = document.querySelector(".nextBtn");
const line = document.querySelector(".play-lenght");
const playTimeVal = document.querySelector(".play-time");
const basicTimeVal = document.querySelector(".basic-time");
const playMin = document.querySelector(".play-min");
const playSec = document.querySelector(".play-sec");
const basicPlayMin = document.querySelector(".basic-play-min");
const basicPlaySec = document.querySelector(".basic-play-sec");
const bar = document.querySelector(".bar");
const list = document.querySelector(".list");
const closeList = document.querySelector(".close-list");

const musics = ["Amr_Diab_Nour_El_Ein", "Nekoglai", "TypeLuv", "WERTUS_MIYAGI"];

//Music list

bar.addEventListener("click", () => {
  list.style.left = "0px";

  closeList.addEventListener("click", () => {
    list.style.left = "-250px";
  });
});

//////

var order = 0;
const change = () => {
  audio.setAttribute("src", `music/${musics[order]}.mp3`);
  cover.setAttribute("src", `img/${musics[order]}.jpg`);
  title.textContent = musics[order];
};

change();
controlBtn.addEventListener("click", () => {
  if (!body.classList.contains("play")) {
    body.classList.add("play");
    audio.play();
  } else {
    body.classList.remove("play");
    audio.pause();
  }
});
backBtn.addEventListener("click", () => {
  controlBtn.click();
  order = order > 0 ? order - 1 : (order = 3);
  change();
  if (body.classList.contains("play")) {
    audio.play();
  } else {
    audio.pause();
  }
});
nextBtn.addEventListener("click", () => {
  order = order < 3 ? order + 1 : (order = 0);
  change();
  if (body.classList.contains("play")) {
    audio.play();
  } else {
    audio.pause();
  }
});

const playTime = (e) => {
  var currentTime = e.srcElement.currentTime;
  var duration = e.srcElement.duration;
  playMin.textContent =
    `${Math.floor(currentTime / 60)}` < 10
      ? `0${Math.floor(currentTime / 60)}`
      : `${Math.floor(currentTime / 60)}`;
  playSec.textContent =
    `${Math.floor(currentTime % 60)}` < 10
      ? `0${Math.floor(currentTime % 60)}`
      : `${Math.floor(currentTime % 60)}`;
  basicPlayMin.textContent = isNaN(
    `${Math.floor(duration / 60)}` < 10
      ? `0${Math.floor(duration / 60)}`
      : `${Math.floor(duration / 60)}`
  )
    ? "00"
    : `${Math.floor(duration / 60)}` < 10
    ? `0${Math.floor(duration / 60)}`
    : `${Math.floor(duration / 60)}`;
  basicPlaySec.textContent = isNaN(
    `${Math.floor(duration % 60)}` < 10
      ? `0${Math.floor(duration % 60)}`
      : `${Math.floor(duration % 60)}`
  )
    ? "00"
    : `${Math.floor(duration % 60)}` < 10
    ? `0${Math.floor(duration % 60)}`
    : `${Math.floor(duration % 60)}`;
  var progress = (currentTime * 100) / duration;
  line.style.width = `${progress}%`;
};

audio.addEventListener("timeupdate", playTime);

musicInfo.addEventListener("click", (e) => {
  var width = e.offsetX;
  var allWidth = e.currentTarget.offsetWidth;

  audio.currentTime = (width * audio.duration) / allWidth;
});

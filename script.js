const cards = [
  {
    image: "assets/images/photograph.jpeg",
    title: "Photograph",
    author: "Ed Sheeran",
  },
  {
    image: "assets/images/the-local-train.jpeg",
    title: "Aaoge Tum Kabhi",
    author: "The Local Train",
  },
  {
    image: "assets/images/the-night-we-met.jpeg",
    title: "The Night We Met",
    author: "Lorn Huron",
  },
  {
    image: "assets/images/the-weeknd.jpeg",
    title: "Save Your Tears",
    author: "The Weeknd",
  },
  {
    image: "assets/images/end-of-the-beginning.jpeg",
    title: "End Of Beginning",
    author: "Djo",
  },
  {
    image: "assets/images/c-a-s.jpeg",
    title: "Sweet",
    author: "Cigarettes After Sex",
  },
  {
    image: "assets/images/yellow.jpeg",
    title: "Yellow",
    author: "Coldplay",
  },
  {
    image: "assets/images/outro.jpeg",
    title: "Outro",
    author: "M83",
  },
  {
    image: "assets/images/let-her-go.jpeg",
    title: "Let Her Go",
    author: "Passenger ft Ed Sheeran",
  },
  {
    image: "assets/images/bad-habits.jpeg",
    title: "Bad Habit",
    author: "Steve Lacy",
  },
  {
    image: "assets/images/the-local-train.jpeg",
    title: "Choo Lo",
    author: "The Local Train",
  },
  {
    image: "assets/images/co2.jpeg",
    title: "Co2",
    author: "Prateek Kuhad",
  },
  {
    image: "assets/images/forever-young.jpeg",
    title: "Forever Young",
    author: "Alphaville",
  },
  {
    image: "assets/images/viva-la-vida.jpeg",
    title: "Viva La Vida",
    author: "Coldplay",
  },
  {
    image: "assets/images/faded.jpeg",
    title: "Faded",
    author: "Alan Walker",
  },
  {
    image: "assets/images/lost-soul-down.jpeg",
    title: "The Lost Soul Down - Slowed & Reverb",
    author: "NBSPLV",
  },
  {
    image: "assets/images/metamorphosis.jpeg",
    title: "METAMORPHOSIS",
    author: "INTERWORLD",
  },
  {
    image: "assets/images/close-eyes.jpeg",
    title: "Close Eyes",
    author: "DVRST",
  },
  {
    image: "assets/images/one-chance.jpeg",
    title: "One Chance",
    author: "Wrld2Luis",
  },
  {
    image: "assets/images/aarmabh-polozehnie.jpeg",
    title: "Aarmabh Hai Prachand X Polozehnie",
    author: "Shrylox",
  },
];
const cardContainer = document.querySelector(".card-container");
const audioPlayer = document.getElementById("audio-player");
const currentSongTitle = document.getElementById("current-song-title");
const playButton = document.querySelector(".fa-play");
const pauseButton = document.querySelector(".fa-pause");
const playPauseButton = document.querySelector(".fa-play");
const progressBar = document.querySelector(".progress-bar");
const progressContainer = document.querySelector(".progress-container");
const currentTimeElement = document.getElementById("current-time");
const totalDurationElement = document.getElementById("total-duration");
const buttons = document.querySelectorAll(
  ".create-playlist-btn, .podcast-btn, .login, .signup, .search"
);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Functionality coming soon! Stay tuned.");
  });
});

let currentSongIndex = null;

cards.forEach((cardData, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img class="card-img" src="${cardData.image}" alt="${cardData.title}">
    <img class="play-btn" src="./assets/play-button.png" alt="Play Button">
    <h2 class="song-name">${cardData.title}</h2>
    <p class="author">${cardData.author}</p>
  `;
  card.addEventListener("click", () => {
    if (currentSongIndex === index) {
      if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.classList.remove("fa-play");
        playButton.classList.add("fa-pause");
      } else {
        audioPlayer.pause();
        playButton.classList.remove("fa-pause");
        playButton.classList.add("fa-play");
      }
    } else {
      currentSongIndex = index;
      audioPlayer.src = `./songs/${cardData.title}.mp3`;
      audioPlayer.play();
      playButton.classList.remove("fa-play");
      playButton.classList.add("fa-pause");
      currentSongTitle.textContent = `${cardData.title} - ${cardData.author}`;
      playbar.style.display = "flex";
    }
  });

  cardContainer.appendChild(card);
});


//  pause/play button

playPauseButton.addEventListener("click", () => {
  if (audioPlayer.paused && currentSongIndex !== null) {
    audioPlayer.play();
    playPauseButton.classList.remove("fa-play");
    playPauseButton.classList.add("fa-pause");
  } else {
    audioPlayer.pause();
    playPauseButton.classList.remove("fa-pause");
    playPauseButton.classList.add("fa-play");
  }
});

audioPlayer.addEventListener("ended", () => {
  playPauseButton.classList.remove("fa-pause");
  playPauseButton.classList.add("fa-play");
});

// progress bar and time

audioPlayer.addEventListener("timeupdate", () => {
  const duration = audioPlayer.duration;
  const currentTime = audioPlayer.currentTime;

  if (duration > 0) {
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    currentTimeElement.textContent = songTime(currentTime);
  }
});

audioPlayer.addEventListener("loadedmetadata", () => {
  totalDurationElement.textContent = songTime(audioPlayer.duration);
  progressBar.style.width = "0%";
});

function songTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = Math.floor(seconds % 60);
  return `${minutes}:${secondsLeft < 10 ? "0" : ""}${secondsLeft}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const playbar = document.querySelector(".playbar");
  const cards = document.querySelectorAll(".card");

  playbar.style.display = "none";

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      playbar.style.display = "block";
    });
  });
});

// previous / next

document.querySelector(".next-btn").addEventListener("click", function () {
  if (currentSongIndex < cards.length - 1) {
    currentSongIndex++;
    updateSong();
  }
});

document.querySelector(".pre-btn").addEventListener("click", function () {
  if (currentSongIndex > 0) {
    currentSongIndex--;
    updateSong();
  }
});

function updateSong() {
  const cardData = cards[currentSongIndex];
  audioPlayer.src = `./songs/${cardData.title}.mp3`;
  audioPlayer.play();
  playButton.classList.remove("fa-play");
  playButton.classList.add("fa-pause");
  currentSongTitle.textContent = `${cardData.title} - ${cardData.author}`;
  playbar.style.display = "flex";
}

// positioning bar forward and backward

function updateProgress(e) {
  const containerWidth = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const newTime = (clickX / containerWidth) * audioPlayer.duration;
  audioPlayer.currentTime = newTime;
  updateProgressBar();
}

progressContainer.addEventListener("click", (e) => {
  updateProgress(e);
});

progressContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  updateProgress(e);
});

progressContainer.addEventListener("mousemove", (e) => {
  if (isDragging) {
    updateProgress(e);
  }
});

progressContainer.addEventListener("mouseup", () => {
  isDragging = false;
});

progressContainer.addEventListener("mouseleave", () => {
  isDragging = false;
});

audioPlayer.addEventListener("timeupdate", () => {
  updateProgressBar();
});

function updateProgressBar() {
  const duration = audioPlayer.duration;
  const currentTime = audioPlayer.currentTime;

  if (duration > 0) {
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    progressThumb.style.left = `${progressPercent}%`;
  }
}

const progressThumb = document.createElement("div");
progressThumb.className = "progress-thumb";
progressContainer.appendChild(progressThumb);

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    if (audioPlayer.paused && currentSongIndex !== null) {
      audioPlayer.play();
      playPauseButton.classList.remove("fa-play");
      playPauseButton.classList.add("fa-pause");
    } else {
      audioPlayer.pause();
      playPauseButton.classList.remove("fa-pause");
      playPauseButton.classList.add("fa-play");
    }
  }
});


// hamburger

document.querySelector('.hamburger').addEventListener('click', ()=>{
  document.querySelector('.left').style.left = "0"
})

document.querySelector('.close').addEventListener('click', ()=>{
    document.querySelector('.left').style.left = "-100%"
})
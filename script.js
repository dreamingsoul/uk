document.addEventListener("DOMContentLoaded", function() {
  var audio = document.getElementById("backgroundAudio");
  var playButton = document.getElementById("playButton");

  playButton.addEventListener("click", function() {
    if (audio.paused) {
      audio.play();
      playButton.textContent = "Pause";
    } else {
      audio.pause();
      playButton.textContent = "Play";
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const music = document.querySelector('.music');
  const hoverMusic = document.querySelector('.hover-music');

  hoverMusic.addEventListener('mouseover', function() {
    music.currentTime = 0; // Reset to the beginning of the audio
    music.play();
  });

  hoverMusic.addEventListener('mouseout', function() {
    music.pause();
  });
});


var audio;

function playAudio(id) {
    if (audio && !audio.paused) {
        audio.pause();
        audio.currentTime = 0;
    }
    audio = document.getElementById(id);
    audio.play();
}

function pauseAudio() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}


let slideIndex = 0;

function moveCarousel(n) {
  const slides = document.querySelector('.carousel');
  const albums = document.querySelectorAll('.album');
  const albumWidth = albums[0].offsetWidth;
  const maxIndex = albums.length - 1;
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = maxIndex;
  } else if (slideIndex > maxIndex) {
    slideIndex = 0;
  }
  slides.style.transform = `translateX(-${slideIndex * albumWidth}px)`;
}













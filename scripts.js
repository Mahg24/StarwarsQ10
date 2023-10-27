// Sets the number of stars we wish to display
const numStars = 1500;

// For every star we want to display
for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");
  star.className = "star";
  var xy = getRandomPosition();
  star.style.top = xy[0] + "px";
  star.style.left = xy[1] + "px";
  document.body.append(star);
}

// Gets random x, y values based on the size of the container
function getRandomPosition() {
  var y = window.innerWidth;
  var x = window.innerHeight;
  var randomX = Math.floor(Math.random() * x);
  var randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

function pauseAnimation(item) {
  item.style.animationPlayState = "paused";
}
function resumeAnimation(item) {
  item.style.animationPlayState = "running";
}
let startTime;
function reload() {
  const intro = document.querySelector(".intro");
  const logo = document.querySelector(".logo");
  const content = document.querySelector("#content");
  intro.addEventListener("animationiteration", () => {
    pauseAnimation(intro);
    reproducirAudio();
    logo.style.display = "";
  });
  setTimeout(recargarPagina, 100000)
}

  function recargarPagina() {
            location.reload();
        }

const audio = document.getElementById("audioPlayer");

function reproducirAudio() {
  audio.currentTime = 0;
  audio.play();
}
function detenerAudio() {
  console.log("La animación ha terminado.");
  const tiempoTranscurrido = Math.floor((Date.now() - startTime) / 1000);
  console.log(tiempoTranscurrido);
  audio.pause();
}
reload();

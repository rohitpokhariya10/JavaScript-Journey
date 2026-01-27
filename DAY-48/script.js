let pk = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("tunes/a.wav");

const playTune = function(key){
    audio.src = `tunes/${key}.wav`;
    audio.play();
}

pk.forEach(function(key){
    console.log(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});

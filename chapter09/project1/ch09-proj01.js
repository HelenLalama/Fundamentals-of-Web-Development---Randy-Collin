const symbolPlay = '⯈';
const symbolPause = '❚ ❚';
const files = ['Nature-8399', 'River-655', 'Waterfall-941', 'Wave-2737'];
const progress = document.getElementById('progressFilled');


const addAside = document.querySelector('aside');
for (let i = 0; i < files.length; i++) {
    
    const image = document.createElement('img');
    image.src = `images/` + files[i] + `.jpg`;
    
    
    image.addEventListener(`click`, function () {
        video.src = `videos/` + files[i] + `.mp4`;
        video.play();
        buttonForPlay.innerHTML = symbolPause;
    });
    addAside.appendChild(image);
}


const buttonForPlay = document.getElementById('play');
buttonForPlay.addEventListener(`click`, function () {
    if (video.paused) {
        video.play();
        buttonForPlay.innerHTML = symbolPause;
    } else {
        video.pause();
        buttonForPlay.innerHTML = symbolPlay;
    }
});


const stopButton = document.getElementById('stop');
stopButton.addEventListener(`click`, function () {
    video.pause();
    video.currentTime = 0;
    buttonForPlay.innerHTML = symbolPlay;
    progress.style.width = 0;
}); 


const video = document.getElementById('vidPlayer');
video.addEventListener(`timeupdate`, function () {
    const progress = (video.currentTime / video.duration) * 100;
    progress.style.width = progress + '%';
});


const volume = document.getElementById('volume');
volume.addEventListener(`input`, function () {
    video.volume = volume.value;
});


document.querySelectorAll(`[data-skip]`).forEach(function (button) {
    button.addEventListener(`click`, function () {
        video.currentTime += parseFloat(button.dataset.skip);
    });
});
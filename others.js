//animation scroll
ScrollOut({
    targets: 'h2,h3,p,a,table,div'
})

//video
function toggle(){
    var trailer= document.querySelector(".trailer")
    var video = document.querySelector("video")
    trailer.classList.toggle("active");
    video.pause();
    video.currentTime = 0;
}

//background music
var audio = document.getElementById("audio");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if(audio.paused){
            audio.play();
            icon.src = "pause.png";
    }
    else{
        audio.pause();
        icon.src = "play.png";
        }
}

const downloadBtn = document.querySelector(".download-btn");
const countdown = document.querySelector(".countdown");
const pleaseWaitText = document.querySelector(".pleaseWait-text");
const manualDownloadText = document.querySelector(".manualDownload-text");
const manualDownloadLink = document.querySelector(".manualDownload-link");

var timeLeft = 10;

downloadBtn.addEventListener("click", () => {
   downloadBtn.style.display = "none";
   countdown.innerHTML = "Download will begin automatically in <span>" + timeLeft + "</span> seconds.";
   

   var downloadTimer = setInterval(function timeCount(){
    timeLeft -= 1;
    countdown.innerHTML = "Download will begin automatically in <span>" + timeLeft + "</span> seconds.";
   
    if(timeLeft <= 0){
        clearInterval(downloadTimer);
        pleaseWaitText.style.display ="block";
        let download_href = "BEGINNER FLEXIBILITY ROUTINE PDF.pdf";
        window.location.href = download_href;
        manualDownloadLink.href = download_href;

        setTimeout(() => {
            pleaseWaitText.style.display ="none";
             manualDownloadText.style.display ="block"; 
            }, 4000);
        }
    }, 1000);
});
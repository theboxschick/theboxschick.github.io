function toggle(){
    var trailer = document.querySelector(".introduction")
    trailer.classList.toggle("active")

    var video = document.querySelector("video")
    trailer.classList.toggle("active");
    video.pause();
    video.currentTime = 0;
}
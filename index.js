let newAudio= new Audio('song1.mp3');
const playbtn=document.getElementById('playit');
const songs=[
    {songNane:"noice",filepath:"",coverPath:""},
]

let cnt=0;
playbtn.addEventListener('click',function(){
    if(newAudio.paused || newAudio.currentTime<=0){
        newAudio.play();
        playbtn.classList.remove('fa-play-circle')
        playbtn.classList.add('fa-pause-circle');
    }
    else{
        newAudio.pause();
        playbtn.classList.remove('fa-pause-circle')
        playbtn.classList.add('fa-play-circle');
    }
})
newAudio.addEventListener('timeupdate',function(){
    console.log('timeupdate');
})
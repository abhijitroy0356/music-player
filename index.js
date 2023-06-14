let newAudio= new Audio('songs/song1.mp3');
let index=0;
let forwardBtn=document.getElementById('forward');
let backwardBtn=document.getElementById('backward');
const progressBar=document.querySelector('.song-progress')
let songitem=Array.from(document.getElementsByClassName('song-item'));
let fromListSong=Array.from(document.querySelectorAll('.songPlay'));
const playbtn=document.getElementById('playit');
const songs=[
    {songName:"song1",filepath:"songs/song1.mp3",coverPath:"https://cdns-images.dzcdn.net/images/cover/28c61a35ad7602ac7045f39c330853eb/264x264.jpg"},
    {songName:"song2", flilepath:"songs/song2.mp3",coverPath:"https://cdns-images.dzcdn.net/images/cover/28c61a35ad7602ac7045f39c330853eb/264x264.jpg"},
    {songName:"song3", flilepath:"songs/song3.mp3",coverPath:"https://cdns-images.dzcdn.net/images/cover/28c61a35ad7602ac7045f39c330853eb/264x264.jpg"},
    {songName:"song4", flilepath:"songs/song4.mp3",coverPath:"https://cdns-images.dzcdn.net/images/cover/28c61a35ad7602ac7045f39c330853eb/264x264.jpg"}
]

songitem.forEach((el,i)=>{
    el.getElementsByTagName("img")[0].src=songs[i].coverPath;
    el.getElementsByClassName("single-song")[0].innerText=songs[i].songName;
    el.getElementsByClassName("timestamp")[0].innerText=songs[i].songName.duration;
})
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
    let ref= parseInt((newAudio.currentTime/newAudio.duration)*100);
    progressBar.value=ref;
})
progressBar.addEventListener('change',()=>{
    // progressBar.prevetdeafult();
    newAudio.currentTime=progressBar.value*newAudio.duration/100;
})
const makePlays=()=>{
    Array.from(document.getElementsByClassName('songPlay')).forEach((el)=>{
        el.classList.add('fa-play-circle');
        el.classList.remove('fa-pause-circle')
    })
}
Array.from(document.getElementsByClassName('songPlay')).forEach((el)=>{
    el.addEventListener('click',(e)=>{
        makePlays();
        newAudio.currentTime=0;
        index=parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        newAudio.src=`songs/song${index+1}.mp3`
        newAudio.play();
        playbtn.classList.remove("fa-play-circle")
        playbtn.classList.add("fa-pause-circle")
    })
})
forwardBtn.addEventListener('click',function(){
    if(index>2){
        index=0;
    }else{
        index+=1;
    }
    newAudio.src=`songs/song${index+1}.mp3`
    newAudio.currentTime=0;
    newAudio.play();
    playbtn.classList.remove("fa-play-circle")
    playbtn.classList.add("fa-pause-circle")
    
})
backwardBtn.addEventListener('click',function(){
    if(index==0){
        index=3;
    }else{
        index--;
    }
    songs[index].classList.remove('fa-play-circle')
    songs[index].classList.add('fa-pause-circle');
    newAudio.src=`songs/song${index+1}.mp3`
    newAudio.currentTime=0;
    newAudio.play();
    playbtn.classList.remove("fa-play-circle")
    playbtn.classList.add("fa-pause-circle")
})
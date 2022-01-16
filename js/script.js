
const inputSearch = document.querySelector('#search');
const playlist = document.querySelector('.playlist');
let playpause_btn = document.querySelector(".playpause-track");
let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let isPlaying = false;
let updateTimer;



const apiURL = 'https://api.lyrics.ovh/';
const apiDeezer = 'https://deezerdevs-deezer.p.rapidapi.com/track'
const linkFreeMusic = "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/"
const audioTrack = document.createElement('audio');





inputSearch.addEventListener('keypress', (event) => {
   if(event.keyCode === 13 ){
      const searchValue = inputSearch.value.trim();
      if (!searchValue) {
         alert('Por favor insira os dados, para pesquisar');
         return;
       }
       
       searchResult(searchValue)
       
      }});


  const searchResult = async(artist)=>{
   try {
      const response = await fetch(`${apiURL}/suggest/${artist}`);
      const data = await response.json();
      console.log('data', data.data);
      showPlaylist(data.data)
      searchSong(data.data);
    } catch (error){
      console.log(error);
    }
  }

    const searchSong = async (idSong) =>{
      try{
         const response = await fetch(`${apiDeezer}/${idSong.id}`,{
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "0bd4b5da77msh27fe477abac7ceep19c3b8jsn91d822e0a82d"}
  });
}catch(err){console.error(err);
} };


  

 const showPlaylist = (data) => {
   playlist.innerHTML = data.map(
     (music) => 
     `<li class="song">
     <div class="song-content">
         <span class="song-artist"><img src="${music.artist.picture}" class="artist-img"></span>

         <div class="all-controls">
         <div class="artist-info">
         <div class="buttons">
    <div class="playpause-track" onclick="playpauseTrack('${music.link}')"><i class="fa fa-play-circle fa-5x"></i></div>
  </div>
   <div class="info"><span class="artist-name">${music.artist.name}</span><span class="music-tittle"><strong>${music.title}</strong></span></div>
   </div>

     <div class="slider_container">
    <div class="current-time">00:00</div>
    <input type="range" min="1" max="100" value="0" class="seek_slider" onchange="seekTo()">
    <div class="total-duration">00:00</div>
 </div>

</div>
<div>
</li>`)};

     function playpauseTrack(dataTrack){
     
      clearInterval(updateTimer);
      resetValues();
      playpauseTrack();
      // Load a new track
      audioTrack.src = dataTrack;
      audioTrack.load();
     };


      // Set an interval of 1000 milliseconds for updating the seek slider
       updateTimer = setInterval(seekUpdate, 1000);

           // Reset Values
    function resetValues() {
      curr_time.innerTextContent = "00:00";
      total_duration.innerTextContent = "00:00";
      seek_slider.value = 0;
    }

      function playpauseAudioTrack() {
       if (!isPlaying) playTrack();
       else pauseTrack();
     }
 
     function playTrack() {
       audioTrack.play();
       isPlaying = true;
 
       // Replace icon with the pause icon
       playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
     }
 
     function pauseTrack() {
       audioTrack.pause();
       isPlaying = false;
 
       // Replace icon with the play icon
       playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
      }

      function seekTo() {
       const  seekto = audioTrack.duration * (seek_slider.value / 100);
        audioTrack.currentTime = seekto;
      }
  
      function setVolume() {
        audioTrack.volume = volume_slider.value / 100;
      }
  
      function seekUpdate() {
        let seekPosition = 0;
  
        // Check if the current track duration is a legible number
        if (!isNaN(audioTrack.duration)) {
          seekPosition = audioTrack.currentTime * (100 / audioTrack.duration);
          seek_slider.value = seekPosition;
  
          // Calculate the time left and the total duration
          let currentMinutes = Math.floor(audioTrack.currentTime / 60);
          let currentSeconds = Math.floor(audioTrack.currentTime - currentMinutes * 60);
          let durationMinutes = Math.floor(audioTrack.duration / 60);
          let durationSeconds = Math.floor(audioTrack.duration - durationMinutes * 60);
  
          // Adding a zero to the single digit time values
          if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
          if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
          if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
          if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
  
          curr_time.textContent = currentMinutes + ":" + currentSeconds;
          total_duration.textContent = durationMinutes + ":" + durationSeconds;
        }
      }






 
   















  

 function loader() {
     document.querySelector('.loader').classList.add('fade-out');
   }

  function fadeout(){
     setInterval(loader, 5000);
     
   }

  window.onload = fadeout();
  
  


//api deezer to take track
  //https://api.deezer.com/track/3135556

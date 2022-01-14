
const inputSearch = document.querySelector('#search');
const playlist = document.querySelector('.playlist');



const apiURL = 'https://api.lyrics.ovh/';





inputSearch.addEventListener('keypress', (event) => {
   if(event.keyCode === 13 ){
      const searchValue = inputSearch.value.trim();
      if (!searchValue) {
         alert('Por favor insira os dados, para pesquisar');
         return;
       }
       
       searchResult(searchValue);
       
      }});


  const searchResult = async(artist)=>{
   try {
      const response = await fetch(`${apiURL}/suggest/${artist}`);
      const data = await response.json();
      console.log('data', data.data);
      showPlaylist(data.data);
    } catch (error){
      console.log(error);
    }
  }

 const showPlaylist = (data) => {
   playlist.innerHTML = data.map(
     (music) => `
     <li class="song">
         <span class="song-artist"><img src="${music.artist.picture}" class="artist-img">
           <strong>${music.artist.name}</strong> - ${music.title}
         </span>
         <div id="waveform"></div>

         <button class="btn" artist="${music.artist.name}" onClick="seeLetter('${music.artist.name}', '${music.title}')">Ver letra</button>
          <a href='${music.link}'>Ouvir Música</a>
     </li>`)};



 
   















  

 function loader() {
     document.querySelector('.loader').classList.add('fade-out');
   }

  function fadeout(){
     setInterval(loader, 5000);
     
   }

  window.onload = fadeout();
  
  


//api deezer to take track
  //https://api.deezer.com/track/3135556

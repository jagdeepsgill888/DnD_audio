(() => {
   console.log('fired');

   let audioControls = document.querySelectorAll('.controls'),
    audio = document.querySelector('audio');
    audioThumbs = document.querySelectorAll('.trackRef');

    function loadAndPlay() {
    // the "this" keywordd refers the image you have selected?
      let currentTrack = `audio/${this.dataset.trackref}`;

      audio.src = currentTrack;
      // load method loads whatever resource you indicate
      audio.load();

      playAudio();

    }

    function playAudio() {
      // play the audio tracks
      audio.play();
    }

    function rewindAudio() {
      // rewind the audio track
      audio.pause();
      audio.currentTime = 0;
      //debugger;
    }

    audioControls[0].addEventListener("click", playAudio);
    audioControls[1].addEventListener("click", rewindAudio);

    // process the images tags and make them load the right audio tracks
    for (thumb of audioThumbs) {
      thumb.addEventListener('click', loadAndPlay);
    }

    // listen for the end of the audio track
     audio.addEventListener('ended', () => console.log('track ended'));
}) ();

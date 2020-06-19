(() => {
   console.log('fired');

   let audioControls = document.querySelectorAll(".controls"),
    audio = document.querySelector('audio');

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
}) ();

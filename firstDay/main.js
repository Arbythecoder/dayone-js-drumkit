// Apply event listeners to all buttons to play audio on click
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", event => {
    event.preventDefault();

    const audioElement = document.getElementById(btn.nextElementSibling.id); // Get audio element using ID

    btn.classList.add("active");
    setTimeout(() => {
      btn.classList.remove("active");
    }, 100);

    // **Pause any currently playing audio before playing the new one:**
    const promise = audioElement.play();
    if (promise !== undefined) {
      promise
        .then(_ => {
          // Audio playback started successfully
        })
        .catch(error => {
          // Handle any errors that may occur during playback
        });
    } else {
      audioElement.currentTime = 0; // Rewind to the beginning in case it was already paused
    }
  });
});

// Function to play audio based on key press
function playAudioByKey(key) {
  const keyMap = {
    KeyC: document.getElementById("drum-kick-audio"), // Map keys to audio elements by ID
    KeyD: document.getElementById("drum-snare-audio"),
    KeyE: documentgetElementById("drum-hihat-audio"),
    KeyF: document.getElementById("drum-crash-audio"),
    KeyG: document.getElementById("drum-ride-audio"),
    KeyA: document.getElementById("drum-tom-audio"),
  };

  if (keyMap[key]) {
    const audioElement = keyMap[key]; // Get the audio element

    // **Pause any currently playing audio before playing the new one:**
    const promise = audioElement.play();
    if (promise !== undefined) {
      promise
        .then(_ => {
          // Audio playback started successfully (optional success handling)
        })
        .catch(error => {
          // Handle any errors that may occur during playback (optional)
        });
    } else {
      audioElement.currentTime = 0; // Rewind to the beginning in case it was already paused
    }
  }
}

// Event listener for keydown events
document.addEventListener("keydown", event => {
  playAudioByKey(event.code);
});

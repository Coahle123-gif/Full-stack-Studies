// Drum Kit JavaScript Notes
//
// This file contains a summary of the main JavaScript behavior used by the
// Drum Kit project.
//
// 1. Selecting drum buttons
//    - document.querySelectorAll(".drum") finds every element with the
//      "drum" class.
//    - .length returns the total number of these buttons.
//
// 2. Looping through each button
//    - A for loop iterates over the NodeList returned by querySelectorAll.
//    - Each button gets a click event listener attached.
//
// 3. Event listener and 'this'
//    - The callback function runs when a button is clicked.
//    - Inside the callback, this refers to the button that was clicked.
//    - this.innerHTML reads the button text such as "w" or "a".
//    - The button text is passed to a makesound function for sound playback.
//
// 4. switch statement for sound selection
//    - The code uses switch(key) inside the makesound function to pick the correct sound.
//    - Each case creates a new Audio object and plays the matching file.
//    - This is a straightforward way to map button text or key to sound files.
//
// 5. Audio playback
//    - new Audio("sounds/tom-1.mp3") creates an audio object.
//    - calling .play() starts playback immediately.
//    - This works for simple sound effects, but if the same sound is played
//      quickly many times, creating a fresh Audio object each click is okay
//      for this project size.
//
// 6. Default case
//    - The default branch logs unexpected button text to the console.
//    - That helps if a new button is added or if the button content is
//      changed accidentally.
//
// 7. Possible improvements
//    - Store document.querySelectorAll(".drum") in a variable once instead of
//      querying it inside the loop each iteration.
//    - Add keyboard event handling so pressing the keys also plays sounds.
//      (Implemented.)
//    - Move the sound selection logic into a helper function for cleaner code.
//      (Implemented with makesound.)
//    - Add a visual button animation by applying and removing a CSS class.
//      (Implemented with buttonAnimation using setTimeout.)
//
// 8. Current implementation details
//    - Click events are handled for each drum button, calling makesound and buttonAnimation.
//    - Keyboard keydown events are handled, calling makesound and buttonAnimation.
//    - The sound mapping covers buttons/keys: w, a, s, d, j, k, l.
//    - The makesound function contains the switch statement and creates/plays Audio objects.
//    - The buttonAnimation function adds "pressed" class and removes it after 100ms with setTimeout.
//    - The default branch logs any unexpected key or button text to the console.
//
// Summary
//    The Drum Kit script connects HTML buttons to audio files using event
//    listeners, button labels, and a switch statement. It is a good example of
//    DOM selection, event handling, and using the browser Audio API.

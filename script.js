/**
 * Done: Create a keydown listener to track what keys are hit
 * Done: Create a Beat class to represent the beat object in utils.js
 * Done: Complete triggerBeat() to play upon the press of a,s,d,f,g,h,j,k,l
 * Done: Button pt1: Initialize color and element values
 * Done: Button pt2: Set button color upon initialization | Initialize button in beats["65"]
 * Done: Button pt3: Complete select function to set the color and shadow of button upon pressing
 * Done: Button pt4: Call the select() function upon key press ;)
 * Done: Button pt5: Add transition for button selection
 * Done: Button pt6: Remove the button style upon transition end | Use deselect function
 * Done: Complete all button instances with the following colors
 * Done: Add background image
 * First 3: #00fffe
 * 4,5,6,7: #FF00FF
 * 8, 9: #FFFFFF
 */

let beats = {
    "103": {
        beat: new Beat("./assets/Piano Chord 331.mp3"),
        button: new Button('#00fffe', 65)
    },
    "104": {
        beat: new Beat("./assets/Piano Chord 209.mp3"),
        button: new Button('#00fffe', 83)
    },
    "105": {
        beat: new Beat("./assets/Piano Chord 208.mp3"),
        button: new Button('#00fffe', 68)
    },
    "100": {
        beat: new Beat("./assets/Drum Sticks Hit 3.mp3"),
        button: new Button('#FF00FF', 70)
    },
    "101": {
        beat: new Beat("./assets/Drum Snare Roll.mp3"),
        button: new Button('#FF00FF', 71)
    },
    "102": {
        beat: new Beat("./assets/PREL Musical 57.mp3"),
        button: new Button('#FF00FF', 72)
    },
    "97": {
        beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
        button: new Button('#FF00FF', 74)
    },
    "98": {
        beat: new Beat("./assets/Musical Compos 33.mp3"),
        button: new Button('#FFFFFF', 75)
    },
    "99": {
        beat: new Beat("./assets/Musical Orches 4.mp3"),
        button: new Button('#FFFFFF', 76)
    }
}

/**
 * Function to play the beat upon a press of key
 * HINT: use the keyCode
 */
triggerBeat = (event) => {
    const keyCode = event.keyCode;
    if(keyCode in beats){
        let keyPress = beats[keyCode];
        keyPress.beat.play();
        //console.log('it\'s working');
    if(keyCode in beats){
        let keyPress = beats[keyCode];
        keyPress.button.select();
        //console.log('it\'s working')
    }
    }
    document.getElementById('65').addEventListener('keydown', 103);
    console.log(event);
}

/**
 * Keydown listener to fire triggerBeat function
 * HINT: Log the keyCode of the key
 */

document.addEventListener('keydown', triggerBeat) /*=> {
    console.log(event);
    console.log(event.keyCode);
    triggerBeat
}*/


// window.onload = function() {
//     document.getElementById('65').addEventListener('103', beat);
//     domEvents();
// }
// input.addEventListener("keydown", function(event) {
//     if (event.keyCode === 103) {
//       // Cancel the default action, if needed
//       event.preventDefault();
//       // Trigger the button element with a click
//       document.getElementById("65").click();
//     }
//   });
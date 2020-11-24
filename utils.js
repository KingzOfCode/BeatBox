/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called 
 */

//  let test = new Audio('');
//  test.play();
class Beat {
        constructor(audioSrc){
            this.audio = new Audio(audioSrc);
            //console.log(this.audio);
            //this.audio.play();
        }
        play = () => {
            this.audio.currentTime = 0; //reset the audio file
            this.audio.play()
        }
}



/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode){
        this.color = color;
        this.keyCode = keyCode;
        this.element = document.getElementById(keyCode);
        this.setButtonColorInHTML();
        this.setATransitionEndListener();
        //this.select();
        //console.log(this.element);
    }

    /*
    Solution 1: remove style on keyup
    Solution 2: wait a 0.2s to remove style 
    Solution 3: react on transition end event
    */
   setATransitionEndListener = () => {
       this.element.addEventListener('transitionend', () => {
           this.deselect();
           //console.log('transition ended');
       })
   }

    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
        this.element.style.borderColor = this.color;
    }

    /**
     * Select function to set the background color and boxShadow
     * 0px 0px 17px 0px #FFFFFF
     */
    select = () => {
        this.element.style.backgroundColor = this.color;
        this.element.style.boxShadow = `0px, 0px, 17px, 0px, #this.color`;
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        this.element.style.backgroundColor = 'transparent';
        this.element.style.boxShadow = 'none';
    }
}
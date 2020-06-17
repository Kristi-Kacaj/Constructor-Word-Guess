//Construct for letters
function letter(value) {
    this.letter = value;
    this.guessed = false;

    //Displays the letter or underscore
    this.toString = function() {
        //If the letter has been guessed, then return the character 
        if (this.letter === " ") {
            this.guessed = true;
            return " ";
        }
    }
}
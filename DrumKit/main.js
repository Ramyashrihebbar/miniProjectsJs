const drumLength = document.querySelectorAll('.drum').length;

for( let i=0; i<drumLength; i++){
    document.querySelectorAll('.drum')
    [i].addEventListener('click', function(e){
        makeNoise(this.innerHTML);
        animatingButtons(this.innerHTML);
    });
}
function makeNoise(key){
    switch (key) {
        
        case "w":
            const tom1 = new Audio("sounds/tom1.mp3");
            tom1.play();
            break;
            case "a":
                const tom2 = new Audio("sounds/tom2.mp3");
                tom2.play();
                break;
                case "s":
                    const tom3 = new Audio("sounds/tom3.mp3");
                    tom3.play();
                    break;
                    case "d":
                        const tom4 = new Audio("sounds/tom4.mp3");
                        tom4.play();
                        break;
                        case "j":
                            const snare = new Audio("sounds/snare.mp3");
                            snare.play();
                            break;
                            case "k":
                                const crash = new Audio("sounds/crash.mp3");
                                crash.play();
                                break;
                                case "l":
                                    const kick = new Audio("sounds/kick-bass.mp3");
                                    kick.play();
                                    break;
    
        default:
            break;
    }

}
function animatingButtons(key){
    const activeButton = document.querySelector('.$(key)')
    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 5000);
}

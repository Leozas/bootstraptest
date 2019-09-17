// index initialization
var i = 0

// making every button a js object
var startButton = document.querySelector('startButton');
var nextButton = document.querySelector('nextButton');
var resetButton = document.querySelector('resetButton');

// making texts into js objects
var mainText = document.querySelector('mainText');
var subText = document.querySelector('subText');

// intialize state to 0
var state = 0;

// symbols 0-9 (1-10)
var symbols = ['!','@','#','$','%','^','&','*','~','?']

//button click integrations
startButton.addEventListener('click', changeState(1));
nextButton.addEventListener('click', changeState);
resetButton.addEventListener('click', resetState);

// initialize button visibilities
startButton.style.display = 'block'
nextButton.style.display = 'none'
resetButton.style.visibility = 'hidden'

// back/forward browser button integration
if (location.hash.length > 0) {
    state = parseInt(location.hash.replace('#',''),10);

} else {
    state = 0;

}
renderState();

//State Functions
function renderState() {
    switch (state) {
        case '0': 
            mainText.textContent = "I can read your mind";
            subText.textContent = "Click Start to see it happen!";
            startButton.style.visibility = 'Visible'
            nextButton.style.visibility = 'hidden';
            resetButton.style.visibility = 'hidden';
            break;

        case '1': 
            mainText.textContent = "Pick a number between 0-99";
            subText.textContent = "When you have picked your number, click Next";
            startButton.style.visibility = 'hidden'
            nextButton.style.visibility = 'visible'
            resetButton.style.visibility = 'visible'
            break;

        case '2':
            mainText.textContent = "Add both digits together to get a new number";
            subText.textContent = "Example: 72 is 7 + 2 = 9";
           
        case '3':
            mainText.textContent = "Subtract your new number from the original number";
            subText.textContent = "Example: 72 - 9 = 63";
            break;
            
        case '4':
            mainText.innerHTML = "";
            // reset symbols array
            var symbols = ['!','@','#','$','%','^','&','*','~','?']

            // randomize the users symbol
            var rng = Math.floor(Math.random() * 10)
            var yourSym = sym[rng]

            // create new array with no yourSym
            var newSym = []
            for (var i = 0; i < rng; i++){
                newSym.Push(symbols[i]) 

            } else if (rng < i < 10){
                newSym.Push(symbols[i])
            }
            
            // add 1 more new sym to make array 10 elements long
            newSym.Push('♪')

            // make the list of symbols for each number
            for (var i = 0; i < 100; i++) {
                if (i % 9 == 0) {
                    mainText.innerHTML += i + " = " + yourSym + "<br>";
                } else {
                    var ranSym = newSym[Math.floor(Math.random() * 10 )]
                    mainText.innerHTML += i + " = " + ranSym + "<br>";
                }
            }
                nextButton.style.visibility = "visible";
                subText.innerHTML = "Find your new number's corresponding symbol";
                break;

        case '5':
                mainText.innerHTML = "Your symbol is: ... " + yourSym
                subText.innerHTML = "Thanks for playing! Click the reset button to play again!" ;
                nextButton.style.visibility = "hidden";
            break;
            
function resetState() {
    state = 0;
    location.hash = state;
    renderState();

}
function changeState(i) {
    state = i;
    state++;
    location.hash = state; 
    renderState();

}
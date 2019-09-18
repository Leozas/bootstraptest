// index initialization
var i = 0

// making every button a js object
var startButton = document.querySelector('.startButton');
var nextButton = document.querySelector('.nextButton');
var resetButton = document.querySelector('.resetButton');

// making texts into js objects
var mainText = document.querySelector('.mainText');
var subText = document.querySelector('.subText');

// initialize state to 0
var state = 0;

// symbols 0-9 (1-10)
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '~', '?']
var endSym = ''

//button click integrations
startButton.addEventListener('click', changeState);
nextButton.addEventListener('click', changeState);
resetButton.addEventListener('click', resetState);

function test() {
    console.log('hello')
}


// initialize button visibilities
startButton.style.display = 'block';
nextButton.style.display = 'none';
resetButton.style.display = 'none';

/* // back/forward browser button integration
if (location.hash.length > 0) {
    state = parseInt(location.hash.replace('#',''),10);

} else {
    state = 0;

} */

// set page rendering
renderState();

//State Functions
function renderState() {

    console.log(state)

    switch (state) {
        case 0:
            mainText.textContent = "I can read your mind";
            subText.textContent = "Click Start to see it happen!";
            startButton.style.display = 'block';
            nextButton.style.display = 'none';
            resetButton.style.display = 'none';
            console.log(state)
            break;

        case 1:
            mainText.textContent = "Pick a number between 0-99";
            subText.textContent = "When you have picked your number, click Next";
            startButton.style.display = 'none';
            nextButton.style.display = 'block';
            resetButton.style.display = 'block';
            console.log(state)
            break;

        case 2:
            mainText.textContent = "Add both digits together to get a new number";
            subText.textContent = "Example: 72 is 7 + 2 = 9";
            break;


        case 3:
            mainText.textContent = "Subtract your new number from the original number";
            subText.textContent = "Example: 72 - 9 = 63";
            break;

        case 4:
            mainText.innerHTML = "";
            // reset symbols array
            var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '~', '?'];

            // randomize the users symbol
            var rng = Math.floor(Math.random() * 10);
            var yourSym = symbols[rng];
            endSym = yourSym

            // create new array with no yourSym
            var newSym = [];
            for (var i = 0; i < 8; i++) {
                if (i < rng) {
                    newSym.push(symbols[i])

                } else if (rng < i) {
                    newSym.push(symbols[i])
                }
            }

            // add 1 more new sym to make array 10 elements long
            newSym.push('♪')

            // make the list of symbols for each number
            for (var i = 0; i < 100; i++) {
                if (i % 9 == 0) {
                    mainText.innerHTML += i + " = " + yourSym + "<br>";
                } else {
                    var ranSym = newSym[Math.floor(Math.random() * 10)]
                    mainText.innerHTML += i + " = " + ranSym + "<br>";
                }
            }
            nextButton.style.display = "block";
            subText.innerHTML = "Find your new number's corresponding symbol";
            break;

        case 5:
            mainText.innerHTML = "Your symbol is: ... " + endSym
            subText.innerHTML = "Thanks for playing! Click the reset button to play again!";
            nextButton.style.display = "none";
            break;
    }

}
function resetState() {
    state = 0;
    location.hash = state;
    renderState();

}
function changeState() {
    state++;
    location.hash = state;
    renderState();

}
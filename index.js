//object STORE that contains an array of questions (each of which is an object), and the current question number and score
const STORE = {
    questions: [
        {
            //1
            question: "Which Harry Potter word is now in the Oxford English Dictionary?",
            options: [
                "Muggle", 
                "Hogwarts", 
                "Quidditch", 
                "Voldemort"
            ],
            answer: "Muggle",
            explanation: 'In 2003, the OED added "muggle," which the dictionary defines as, "a person who possesses no magical powers ... a person who lacks a particular skill or skills, or who is regarded as inferior in some way."',
            image: "./images/muggle.png",
            imageAlt: "Muggle Comic Strip"
        },
        {
            //2
            question: "In order of birth, who are the seven Weasley siblings?",
            options: [
                "Percy, Bill, George, Charlie, Fred, Ron, Ginny", 
                "George, Fred, Percy, Bill, Charlie, Ron, Ginny", 
                "Bill, Charlie, Percy, Fred, George, Ron, Ginny", 
                "Ron, Charlie, Percy, George, Fred, Bill, Ginny"
            ],
            answer: "Bill, Charlie, Percy, Fred, George, Ron, Ginny",
            explanation: "Bill, Charlie, Percy, Fred, George, Ron and Ginny are the children of Arthur and Molly Weasley. While it's never explicitly written or said, Fred is assumed to be the older of the Weasley twins.",
            image: "./images/weasleys.jpg",
            imageAlt: "Artist Rendition of the Weasley Family"
        },
        {
            //3
            question: "What are the three Unforgivable Curses?",
            options: [
                "Impedimenta, Incarcerous and Incendio", 
                "Avada Kedavra, Crucio and Imperio", 
                "Expelliarmus, Expecto Patronum and Diffindo", 
                "Anteoculatia, Epoximise, Crucio, Relashio"
            ],
            answer: "Avada Kedavra, Crucio and Imperio",
            explanation: 'The use of Avada Kedavra (the killing curse), Crucio (excruciating pain) and Imperio (which causes the victim to obey the spell-caster) are punishable by life in Azkaban.',
            image: "./images/curses.png",
            imageAlt: "Art depicting the three unforgivable curses"
        },
        {
            //4
            question: "What's the only book in the Harry Potter series that doesn't feature Lord Voldemort?",
            options: [
                "The Sorcerer's Stone", 
                "The Prisoner of Azkaban", 
                "The Deathly Hallows", 
                "The Chamber of Secrets"
            ],
            answer: "The Prisoner of Azkaban",
            explanation: "Harry Potter and the Prisoner of Azkaban is the only book without He-Who-Must-Not-Be-Named. He's mentioned, of course, but he never actually shows up.",
            image: "./images/voldemort.jpg",
            imageAlt: "Art depicting Lord Voldemort"
        },
        {
            //5
            question: 'How many copies did "Harry Potter and the Deathly Hallows" sell the first day of its release in the U.S. and the U.K.?',
            options: [
                "700", 
                "10,000", 
                "5 million", 
                "11 million"
            ],
            answer: "11 million",
            explanation: 'The final Harry Potter book sold an astonishing 11 million copies within 24 hours of its release on July 21, 2007.',
            image: "./images/bookrelease.jpg",
            imageAlt: "An image showing fans on the first day of book 7 release"
        },
        {
            //6
            question: 'What\'s the name of the fairy-tale book that Dumbledore bequeaths to Hermione in "The Deathly Hallows?"',
            options: [
                "The Tales of Beedle the Bard", 
                "The Tales of Crookshanks the Cat", 
                "The Tales of Gilderoy the Great", 
                "The Tales of Arnold the Pygmy Puff"
            ],
            answer: "The Tales of Beedle the Bard",
            explanation: 'In 2003, the OED added "muggle," which the dictionary defines as, "a person who possesses no magical powers ... a person who lacks a particular skill or skills, or who is regarded as inferior in some way."',
            image: "./images/muggle.png",
            imageAlt: "Artist rendition of the symbol for The Deathly Hallows"
        },
        {
            //7
            question: "In the first line of the first book of the Harry Potter series, we learn that Harry's aunt and uncle, the Dursleys, were proud to say that they were____________:",
            options: [
                "...perfectly normal, thank you very much.", 
                "...the last people you'd expect to be involved in anything strange or mysterious.", 
                "...proud winners of the best-kept suburban lawn competition.", 
                "...the greatest parents to ever live on Privet Drive."
            ],
            answer: "...perfectly normal, thank you very much.",
            explanation: 'Mr. and Mrs. Dursley of number four, Privet Drive, were proud to say that they were "perfectly normal, thank you very much." He was the head of a company that made drills, and she was a busy-body.',
            image: "./images/dursleys.jpg",
            imageAlt: "Artist rendition of the Dursley family"
        },
        {
            //8
            question: 'In "Harry Potter and the Sorcerer\'s Stone," the first book, a magical creature named Fluffy guards a trapdoor. What kind of creature is Fluffy?',
            options: [
                "A Niffler, a cuddly creature that is a useful treasure detector", 
                "Acromantula, a gigantic black spider raised by Hagrid from infancy", 
                'A Hellhound, also known as a "three-headed dog"', 
                "A Basilisk, a giant snake associated with Slytherin House"
            ],
            answer: 'A Hellhound, also known as a "three-headed dog"',
            explanation: "Fluffy is a huge, vicious three-headed dog who guards the sorcerer's stone. In exchange for a dragon egg, Hagrid tells a mysterious stranger he can get past Fluffy by playing a bit of music.",
            image: "./images/fluffy.png",
            imageAlt: "Comic art showing Fluffy, the Hellhound"
        },
        {
            //9
            question: 'Hogwarts students are excited when Professor Lockhart starts a dueling club. At the first meeting, Harry unwittingly reveals a mysterious and rare ability. What is this ability?',
            options: [
                "Harry is a Horcrux", 
                "Harry can cast a Patronus charm", 
                "Harry can speak Parseltongue", 
                "Harry can do magic without a wand"
            ],
            answer: "Harry can speak Parseltongue",
            explanation: 'While dueling with Harry, Draco Malfoy conjures a snake. Harry immediately commands the snake not to attack. The whole school hears him speaking Parseltongue (snake language), an ability generally associated with dark wizards.',
            image: "./images/parseltongue.jpg",
            imageAlt: "Photoshopped image of Harry with a snake"
        },
        {
            //10
            question: 'In the third book, "Harry Potter and the Prisoner of Azkaban," Harry runs away from his aunt and uncle\'s home after accidentally ______________.',
            options: [
                "Casting a Patronus charm", 
                "Blowing his Aunt Marge up like a balloon", 
                "Dropping a ton-tongue toffee that gets eaten by Dudley", 
                "Telling a snake to escape and attack Dudley"
            ],
            answer: "Blowing his Aunt Marge up like a balloon",
            explanation: "Loathsome Aunt Marge speaks disparagingly about Harry's dead parents, and Harry gets so angry that he does uncontrolled magic, blowing Aunt Marge up like a balloon.",
            image: "./images/petunia.jpg",
            imageAlt: "Artist rendition of Petunia bloated, floating outside"
        }        
    ],
    userRank: [
        {
            rank: "Muggle",
            rankText: "Merlin's beard. You've heard of Harry Potter, right?",
            image: "./images/muggle.jpg",
            imageAlt: "A meme about muggles."
        },
        {
            rank: "Squib",
            rankText: "Without reading any of the books, you probably watched the last two movies because the other ones didn't get a very good Tomatos Score, huh?",
            image: "./images/squib.jpg",
            imageAlt: "Argus Filch, the Hogwarts caretaker, and his cat Mrs. Norris."
        },
        {
            rank: "First-Year",
            rankText: "Hey you're getting there. I'd avoid getting into in-depth discussions about H.P. with strangers on the bus until you've read the books a few more times, though.",
            image: "./images/firstyear.jpg",
            imageAlt: "An image of Harry Potter with the sorting hat on."
        },
        {
            rank: "D.A Member",
            rankText: "Killing it. If you want to go a little deeper, you should try adding the audiobooks to your arsenal. Both Jim Dale and Stephen Fry as narrators offer something to the series. Try both for 10 points to Gryffindor",
            image: "./images/da.jpg",
            imageAlt: "A drawing depicting Dumbledore's Army."
        },
        {
            rank: "Auror",
            rankText: "Perfect Score! Let's just say I wouldn't get into a duel with you.",
            image: "./images/auror.jpg",
            imageAlt: "An image of Harry Potter grown."
        }
    ],
    rankIndex: 0,
    currentView: "start",
    currentQuestion: 0,
    score: 0,
};
//////RANDOM FUNCTION

//check score against possible 10 and assign a rank based on if/then statements
function assignRank() {
    if (STORE.score <= 2) {
        STORE.rankIndex = 0;
        return STORE.rankIndex;
    }
    else if (STORE.score <= 4) {
        STORE.rankIndex = 1;
        return STORE.rankIndex;
    }
    else if (STORE.score <= 6) {
        STORE.rankIndex = 2;
        return STORE.rankIndex;
    }
    else if (STORE.score <= 8) {
        STORE.rankIndex = 3;
        return STORE.rankIndex;
    }
    else if (STORE.score == 10) {
        STORE.rankIndex = 4;
        return STORE.rankIndex;
    }
}


//////TEMPLATE GENERATORS - generates html based on data

function generateStart() {
    return `<section class=welcomeView>
            <h1 class="welcomeText">Are you a real Harry Potter fan?</h1>
            <div class="startDiv">
                <button type="button" id="startButton">
                    Let's find out!
                </button>
            </div>
            <img src="./images/hogwarts.jpg" alt="Hogwarts School of Witchcraft and Wizardry" class="hogwartsImage" width=500px/>
        </section>`;
}

//generates html for a question
function generateQuestion() {
    return `
    <section class="questionView">
        <form>
        <fieldset>
            <legend class="questionText">${STORE.questions[STORE.currentQuestion].question}</legend>
            <label class="questionOption" for="firstQuestion">${STORE.questions[STORE.currentQuestion].options[0]}</label>
            <input type="radio" name="options" id="firstQuestion" value="${STORE.questions[STORE.currentQuestion].options[0]}" required>
            <label class="questionOption" for="secondQuestion">${STORE.questions[STORE.currentQuestion].options[1]}</label>
            <input type="radio" name="options" id="firstQuestion" value="${STORE.questions[STORE.currentQuestion].options[1]}" required>
            <label class="questionOption" for="thirdQuestion">${STORE.questions[STORE.currentQuestion].options[2]}</label>
            <input type="radio" name="options" id="firstQuestion" value="${STORE.questions[STORE.currentQuestion].options[2]}" required>
            <label class="questionOption" for="fourthQuestion">${STORE.questions[STORE.currentQuestion].options[3]}</label>
            <input type="radio" name="options" id="firstQuestion" value="${STORE.questions[STORE.currentQuestion].options[3]}" required>
            <button type="submit" id="submitButton">Submit Answer</button>
        </fieldset>
        </form>
    </section>`;
}

//generates html for page when the user gets an answer right - iterates score using the updateScore function
function generateRight() {
    return `<section class="answerView">
        <h2 class="rightWrong">RIGHT!</h2>
        <p class="rightAnswer">${STORE.questions[STORE.currentQuestion].answer} was the correct answer.</p> 
        <p class="answerExplanation">${STORE.questions[STORE.currentQuestion].explanation}</p>
        <button type="submit" id="nextButton">Next Question</button>
        <img src="${STORE.questions[STORE.currentQuestion].image}" alt="${STORE.questions[STORE.currentQuestion].imageAlt}" class="answerImage${STORE.currentQuestion}">
    </section>`;
}

//generates html for page when the user gets an answer wrong 
function generateWrong() {
    return `<section class="answerView">
        <h2 class="rightWrong">WRONG.</h2>
        <p class="rightAnswer">${STORE.questions[STORE.currentQuestion].answer} was the correct answer.</p> 
        <p class="answerExplanation">${STORE.questions[STORE.currentQuestion].explanation}</p>
        <button type="submit" id="nextButton">Next Question</button>
        <img src="${STORE.questions[STORE.currentQuestion].image}" alt="${STORE.questions[STORE.currentQuestion].imageAlt}" class="answerImage${STORE.currentQuestion}">
    </section>`;
}

//generates html for the results page (last page)
function generateResults() {
    return `<section class="finalView">
        <h2 class="results">RESULTS:</h2>
        <p class="resultsText">
            You got <span class="scoreNumber">${STORE.score}</span> out of 10 right.
            <span class="userRank">Rank: ${STORE.userRank[assignRank()].rank}</span>
            <span class="rankText">Rank: ${STORE.userRank[assignRank()].rankText}</span>
        </p>
        <button type="submit" id="tryAgain">Try Again</button>
        <img src="${STORE.userRank[assignRank()].image}" alt="${STORE.userRank[assignRank()].imageAlt}" class="userRatingImage">
    </section>`
}


//////RENDERING FUNCTIONS - Reads the STORE, calls generators, then adds HTML to DOM is --- store.currentView === start --- RENDER ALL OF THE PAGES DEPENDING ON THE currentView status

//reads store data, calls generateQuestion function and adds question html to dom - only do one thing, read data from store and take over the main div of the app
function renderView() {
    if (STORE.currentView === "start") {
        $("main").html(generateStart());
    }
    else if (STORE.currentView === "question") {
        $("main").html(generateQuestion());
    }
    else if (STORE.currentView === "answerRight") {
        $("main").html(generateRight());
    }
    else if (STORE.currentView === "answerWrong") {
        $("main").html(generatWrong());
    }
    else {
        $("main").html(generateResults());
    }
}

//////EVENT HANDLERS - get user input, update the STORE and then call renderer - Every time you have input you update the store

//goes to the first question view when you click on the start button
function handleStart() {
    $('#startButton').on('click', function(event){
        STORE.currentView = "question";
        renderView();
    })
    
}

//handles click on submit answer - checks answer against the correct answer - sends you either to right answer view or wrong answer view
function handleSubmitAnswer() {
    $('#submitButton').on('click', function(event){
        event.preventDefault();
        if (STORE.questions[STORE.currentQuestion].answer === $(this).find('input[name="options"]').val()) {
            STORE.score++;
            STORE.currentView = "answerRight";
            console.log("right answer!");
            renderView();
        }
        else {
            STORE.currentQuestion++;
            STORE.currentView = "answerWrong";
            console.log("wrong answer!");
            renderView();
        }

    })
}

//handles click on next question - iterates questionNumber in the STORE -- also checks if the STORE.current
function handleNextQuestion() {
    $('#nextButton').on('click', function(event){
        if (STORE.currentQuestion <= STORE.questions.length) {
            STORE.currentQuestion++;
            renderView();
        }
        else {
            STORE.currentView = "results";
            renderView();
        }
    })
}

//handles click on try again button at end of quiz - can this also handle resetting the score and question number in the STORE? What else should this reset? CurrentView?
function handleTryAgain() {
    $('#tryAgain').on('click', function(event){
        STORE.currentQuestion = 0;
        STORE.score = 0;
        STORE.currentView = "start";
        renderView();
    })
}


//////READY FUNCTION
$(function(){
    renderView();
    handleStart();
    handleSubmitAnswer();
    handleNextQuestion();
    handleTryAgain();
})


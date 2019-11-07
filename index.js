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
            question: 'What does S.P.E.W. stand for?',
            options: [
                "Society For the Promotion of Elfish Welfare", 
                "Society For the Protection of Elves and Wizards", 
                "Support For People, Elves, and Wizards", 
                "Sorority For the Protection of Elves and Wands"
            ],
            answer: "Society For the Promotion of Elfish Welfare",
            explanation: 'The Society for the Promotion of Elfish Welfare (S.P.E.W.) was an organisation founded in 1994 by Hermione Granger in response to what she saw as gross injustice in the treatment of house-elves at the 1994 Quidditch World Cup.',
            image: "./images/dobby.jpg",
            imageAlt: "An artist rendition of Dobby the house elf"
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
            explanation: 'In "The Deathly Hallows," the trio of protagonists first learn of the triangle symbol that represents the three Deathly Hallows in the book The "Tales of Beedle the Bard"',
            image: "./images/deathlyhallows.jpg",
            imageAlt: "Artist rendition of the symbol for The Deathly Hallows"
        },
        {
            //7
            question: "In the first line of the first book of the Harry Potter series, we learn that Harry's aunt and uncle, the Dursleys, were proud to say that they were:",
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
                'A Hellhound, also known as a three-headed dog', 
                "A Basilisk, a giant snake associated with Slytherin House"
            ],
            answer: 'A Hellhound, also known as a three-headed dog',
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
            question: 'In the third book, "Harry Potter and the Prisoner of Azkaban," Harry runs away from his aunt and uncle\'s home after accidentally:',
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
        },        
        {
            //11
            question: 'Who gave us the Marauder’s Map?',
            options: [
                "Moody, Wormtongue, Sappen, and Frongs", 
                "Moony, Wormtail, Padfoot, and Prongs", 
                "Molly, Wilfred, Peter, and Phongs", 
                "Matchstick, Winston, Footfed, and Trongs"
            ],
            answer: "Moony, Wormtail, Padfoot, and Prongs",
            explanation: "The Marauder's Map, a magical document that revealed all of Hogwarts, was created by Remus Lupin (Moony), Peter Pettigrew (Wormtail), Sirius Black (Padfoot), and James Potter (Prongs) while they were attending the school.",
            image: "./images/maraudersmap.jpg",
            imageAlt: "An image taken from the Marauder's Map"
        },        
        {
            //12
            question: 'What is Dumbledore’s full name?',
            options: [
                "Albus Wulfric Percival Brian Dumbledore", 
                "Albus Percival Wulfric Brian Dumbledore", 
                "Albus Percival Brian Wulfric Dumbledore", 
                "Albus Brian Percival Wulfric Dumbledore"
            ],
            answer: "Albus Percival Wulfric Brian Dumbledore",
            explanation: "Professor Albus Percival Wulfric Brian Dumbledore was an English half-blood wizard, who was the Defence Against the Dark Arts Professor, later the Transfiguration Professor, and later still Headmaster of Hogwarts School of Witchcraft and Wizardry.",
            image: "./images/dumbledore.jpg",
            imageAlt: "Artist rendition of Ablus Dumbledore and Fawkes the Phoenix"
        },        
        {
            //13
            question: 'What are the three cores Garrick Ollivander uses in his wand-making?',
            options: [
                "Phoenix feathers, dragon heartstring, and unicorn hair", 
                "Phoenix feathers, dragon tooth, and centaur mane", 
                "Dragon heartstring, unicorn horn, and centaur mane", 
                "Phoenix beak, dragon heartstring, unicorn hair"
            ],
            answer: "Phoenix feathers, dragon heartstring, and unicorn hair",
            explanation: "Although wand cores vary widely, certain wandmakers prefer to use certain materials; for example, Garrick Ollivander discovered and pioneered the use of phoenix feathers, dragon heartstrings, and unicorn tail hairs, whereas his father used lesser substances such as Kelpie hair and Kneazle whiskers",
            image: "./images/ollivander.jpg",
            imageAlt: "A drawing of Garrick Ollivander"
        },        
        {
            //14
            question: 'According to the Dursleys, how did Harry’s parents die?',
            options: [
                "In a plane crash", 
                "In a train crash", 
                "In a bus crash", 
                "In a car crash"
            ],
            answer: "In a car crash",
            explanation: "James and Lily Potter were murdered by Lord Voldemort when Harry was one years old. To avoid associating themselves with the wizarding world, the Dursleys claimed that Harry's parents died in a car crash.",
            image: "./images/harryparents.jpg",
            imageAlt: "Artist rendition of Harry Potter and his parents, Lily and James."
        },        
        {
            //15
            question: 'What is the LAST line of Harry Potter and the Deathly Hallows?',
            options: [
                'Harry nodded.', 
                'The scar had not pained Harry for 19 years. All was well.', 
                'Off to school with you, Albus.', 
                'Life was good.'
            ],
            answer: 'The scar had not pained Harry for 19 years. All was well.',
            explanation: "At the end of book 7, Harry Potter and the Deahtly Hallows, J.K. Rowling paints a picture of the wizarding world 19 years later as Harry Potter and friends watch their kids board the Hogwarts Express.",
            image: "./images/pottergrown.jpg",
            imageAlt: "Artist rendition of Harry, Ron, Hermoine and Ginny all grown with their children"
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
            rankText: "Without reading any of the books, you probably watched the last two movies because the other ones didn't get very good ratings, right?",
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
            rankText: "Killing it. If you want to go a little deeper, you should try adding the audiobooks to your collection. I prefer Stephen Fry as a narrator, but Jim Dale also offers something to the series. Try both for 10 points to Gryffindor",
            image: "./images/da.jpg",
            imageAlt: "A drawing depicting Dumbledore's Army."
        },
        {
            rank: "Auror",
            rankText: "Riddikulus! Albus would be so proud. Also, remind me never to challenge you to a duel.",
            image: "./images/auror.jpg",
            imageAlt: "An image of Harry Potter grown."
        }
    ]
};

let APP = {
    rankIndex: 0,
    currentView: "start",
    currentQuestion: 0,
    score: 0
};


//////RANDOM FUNCTIONS

//check score against possible 10 and assign a rank based on if/then statements
function assignRank() {
    if (APP.score/STORE.questions.length <= .2) {
        APP.rankIndex = 0;
        return APP.rankIndex;
    }
    else if (APP.score/STORE.questions.length <= .4) {
        APP.rankIndex = 1;
        return APP.rankIndex;
    }
    else if (APP.score/STORE.questions.length <= .6) {
        APP.rankIndex = 2;
        return APP.rankIndex;
    }
    else if (APP.score/STORE.questions.length <= .8) {
        APP.rankIndex = 3;
        return APP.rankIndex;
    }
    else if (APP.score/STORE.questions.length <= 1) {
        APP.rankIndex = 4;
        return APP.rankIndex;
    }
}

function generateButton() {
    if (APP.currentQuestion < STORE.questions.length) {
        return "next question"
    }
    else {
        return "results"
    }
}

//////TEMPLATE GENERATORS - generates html based on data

function generateStart() {
    return `<section id="welcomeView" aria-live="polite">
            <h1 class="welcomeText">Are you a Real Harry Potter fan?</h1>
            <h2 class="startInstructions">click the start button to find out</h2>
            <div class="startDiv">
                <button type="button" id="startButton" role="button" aria-controls="welcomeView">
                    start
                </button>
            </div>
        </section>`;
}

//generates html for a question
function generateQuestion() {
    let storeOption = STORE.questions[APP.currentQuestion-1].options
    return `
    <section class="questionView" id="submitQuestion" aria-live="polite">
        <form class="questionForm">
            <fieldset>
                    <legend class="questionText">${STORE.questions[APP.currentQuestion-1].question}</legend>
                    <p>
                        <input type="radio" name="options" id="firstQuestion" value="${storeOption[0]}" required>
                        <label class="questionOption" for="firstQuestion">${storeOption[0]}</label>
                    </p>
                    <p>
                        <input type="radio" name="options" id="secondQuestion" value="${storeOption[1]}" required>
                        <label class="questionOption" for="secondQuestion">${storeOption[1]}</label>
                    </p>
                    <p>
                        <input type="radio" name="options" id="thirdQuestion" value="${storeOption[2]}" required>   
                        <label class="questionOption" for="thirdQuestion">${storeOption[2]}</label>
                    </p>
                    <p>
                        <input type="radio" name="options" id="fourthQuestion" value="${storeOption[3]}" required>   
                        <label class="questionOption" for="fourthQuestion">${storeOption[3]}</label>
                    </p>
                <button type="submit" id="submitButton" role="submit" aria-controls="submitQuestion">submit</button>
            </fieldset>
        </form>
    </section>`;
}

//generates html for page when the user gets an answer right - iterates score using the updateScore function
function generateRight() {
    let questionArray = STORE.questions[APP.currentQuestion-1];
    return `<section class="answerView" id="checkAnswer" aria-live="polite">
        <h2 class="rightWrong">Right!</h2>
        <p class="theAnswer">"${questionArray.answer}"</p> 
        <p class="theAnswerText">was the correct answer.</p> 
        <p class="answerExplanation">${questionArray.explanation}</p>
        <button type="submit" id="nextButton" role="button" aria-controls="checkAnswer">${generateButton()}</button>
        <img src="${questionArray.image}" alt="${questionArray.imageAlt}" class="answerImage">
    </section>`;
}

//generates html for page when the user gets an answer wrong 
function generateWrong() {
    let questionArray = STORE.questions[APP.currentQuestion-1];
    return `<section class="answerView" id="checkAnswer" aria-live="polite">
        <h2 class="rightWrong">Wrong.</h2>
        <p class="theAnswer">"${questionArray.answer}"</p> 
        <p class="theAnswerText">was the correct answer.</p> 
        <p class="answerExplanation">${questionArray.explanation}</p>
        <button type="submit" id="nextButton" role="button" aria-controls="checkAnswer">${generateButton()}</button>
        <img src="${questionArray.image}" alt="${questionArray.imageAlt}" class="answerImage">
    </section>`;
}

//generates html for the results page (last page)
function generateResults() {
    return `<section class="finalView" id="startOver" aria-live="polite">
        <h2 class="results">RESULTS</h2>
        <p class="resultsText">
            You got  <span class="scoreResults">${APP.score}</span>  out of  <span class="scoreResults">${STORE.questions.length}</span>  right.
        </p>
        <p class="rankText">
            Current Rank: <span class="userRank">"${STORE.userRank[assignRank()].rank}"</span>
        </p>
        <p class="rankExplanation">
            ${STORE.userRank[assignRank()].rankText}
        </p>
        <button type="submit" id="tryAgain" role= "button" aria-controls="startOver">Try Again</button>
        <img src="${STORE.userRank[assignRank()].image}" alt="${STORE.userRank[assignRank()].imageAlt}" class="userRatingImage">
    </section>`
}

function generateStats() {
    $(".questionNumber").html(APP.currentQuestion + "/" + STORE.questions.length);
    $(".scoreNumber").html(APP.score + "/" + STORE.questions.length);
}

//////RENDERING FUNCTIONS - Reads the STORE, calls generators, then adds HTML to DOM is --- APP.currentView === start --- RENDER ALL OF THE PAGES DEPENDING ON THE currentView status

//reads store data, calls generateQuestion function and adds question html to dom - only do one thing, read data from store and take over the main div of the app
function renderView() {
    generateStats();
    if (APP.currentView === "start") {
        $("main").html(generateStart());
    }
    else if (APP.currentView === "question") {
        $("main").html(generateQuestion());
    }
    else if (APP.currentView === "answerRight") {
        $("main").html(generateRight());
    }
    else if (APP.currentView === "answerWrong") {
        $("main").html(generateWrong());
    }
    else {
        $("main").html(generateResults());
    }
}

//////EVENT HANDLERS - get user input, update the STORE and then call renderer - Every time you have input you update the store

//goes to the first question view when you click on the start button
function handleStart() {
    $('#startButton').on('click', function(event){
        APP.currentView = "question";
        APP.currentQuestion++;
        renderView();
        handleSubmitAnswer();
    })
    
}

//handles click on submit answer - checks answer against the correct answer - sends you either to right answer view or wrong answer view
function handleSubmitAnswer() {
    $('.questionForm').on('submit', function(event){
        event.preventDefault();
        if (STORE.questions[APP.currentQuestion-1].answer == $(this).find('input[name="options"]:checked').val()) {
            APP.score++;
            APP.currentView = "answerRight";
            renderView();
            handleNextQuestion();
        }
        else {
            APP.currentView = "answerWrong";
            renderView();
            handleNextQuestion();
        }

    })
}

//handles click on next question - checks if you're on the last question, if not iterates questionNumber in the STORE and rerenders. Otherwise, shows "results" view
function handleNextQuestion() {
    $('#nextButton').on('click', function(event){
        if (APP.currentQuestion < STORE.questions.length) {
            APP.currentView = "question";
            APP.currentQuestion++;
            renderView();
            handleSubmitAnswer();
        }
        else {
            APP.currentView = "results";
            renderView();
            handleTryAgain();
        }
    })
}

//handles click on try again button at end of quiz - can this also handle resetting the score and question number in the STORE? What else should this reset? CurrentView?
function handleTryAgain() {
    $('#tryAgain').on('click', function(event){
        APP.currentQuestion = 0;
        APP.score = 0;
        APP.currentView = "start";
        renderView();
        handleStart();
    })
}


//////READY FUNCTION
$(function(){
    renderView();
    handleStart();
})


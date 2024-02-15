const quizData = [
    {
        question: "Who is the primeminister of INDIA?",
        options: [
            "Narendra Modi",
            "Rahul Gandhi",
            "Yogi Adityanath",
            "Nitish Kumar",
        ],
        correct:0,
    },
    {
        question: "Who is the chief-minister of BIHAR",
        options: [
            "Tejasvi Yadav",
            "Nitish Kumar",
            "Lalu Yadav",
            "Chirag Paswan",
        ],
        correct:1,
    },
    {
        question: "Who is the chief-minister of UP",
        options: [
            "Yogi Adityanath",
            "Akhilesh Yadav",
            "Mayavati",
            "Nitish Kumar",
        ],
        correct:0,
    },
    {
        question: "What is national game of INDIA",
        options: [
            "Cricket",
            "Football",
            "Hockey",
            "Khokho",
        ],
        correct:2,
    },
    {
        question: "Who is the fether of indian constitution in india",
        options: [
            "Mahatma Gandhi",
            "DR.Ambedker",
            "Subhash Chandra Bos",
            "Pt. Nehru ji",
        ],
        correct:1,
    },

];

const answerElm = document.querySelectorAll(".answer")
const Score = document.getElementById("score")
const [questionElm, Option_1,Option_2,Option_3,Option_4] = document.querySelectorAll("#question,#option-1, #option-2, #option-3, #option-4")
const submitBtn = document.getElementById("btn")
const quiz = document.getElementById("quiz")
 let currentQuiz  = 0;
 let score = 0;



 const loadQuiz = () => {
    const  { question, options} = quizData[currentQuiz]
    options.forEach( (curOption, index) => (window[`option-${index+1}`].innerText =curOption)

  )
  
//   console.log(question,options)
    questionElm.innerText = `${currentQuiz +1}: ${question}
    `
    // Score.innerText = `Score: ${score}/${quizData.length} `
    // Option_1.innerText = options[0]
    // Option_2.innerText = options[1]
    // Option_3.innerText = options[2]
    // Option_4.innerText = options[3]
    
 }
 loadQuiz();

 const getSelectedOption = () => {

    let ans_index;
    answerElm.forEach((curOption,index) => {
        if(curOption.checked) {
            ans_index = index;
        }
    })
    return ans_index;
 }

 const deselectedAnswers = () => {
    answerElm.forEach((curOptionn) => {
        curOptionn.checked = false;
    })
 }
 submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
console.log(selectedOptionIndex)

     if(selectedOptionIndex === quizData[currentQuiz].correct){
        score = score +1;
     }
    currentQuiz++;
    if(currentQuiz < quizData.length){
        deselectedAnswers();
        loadQuiz();
    }
    else{
        location.reload();
        alert(`You have completed the quiz and got score :${score}/${quizData.length} and press OK to see your  performence  `)
    
        if(score == 5){
        alert(`Congratulations! Your Performence is excelent and you got score :${score}/${quizData.length}`)
    }
    
    if(score == 4){
        alert(`Congratulations! Your Performence is good and you got score :${score}/${quizData.length}`)
    }
    if(score == 3){
        alert(`Congratulations! Your Performence is average  and you got score :${score}/${quizData.length} 
        and improve your self!`)
    }
    if(score <= 2){
        alert(`Congratulations! Your Performence is bad  and you got score :${score}/${quizData.length} 
        and improve your self! and do hardwork`)
    }
}
    
})

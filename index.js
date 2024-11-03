let ans, realAns, wrongAns;
let score = 0;
let questions = 0;

const var1 = document.getElementById("n1")
const var2 = document.getElementById("n2")
const btn1 = document.getElementById("ans1")
const btn2 = document.getElementById("ans2")

function generateQuestions(){
    let num1 = Math.floor(Math.random() * 100)
    let num2 = Math.floor(Math.random() * 100)
    realAns = num1 * num2;
    wrongAns = Math.floor(Math.random() * 50 + realAns + 5)
    var1.innerText = num1;
    var2.innerText = num2;
    
    if(Math.random() < 0.5){

        btn1.innerText = realAns;
        btn2.innerText = wrongAns;
    }
        else{
        btn1.innerText = wrongAns;
        btn2.innerText = realAns;
    }

}

generateQuestions();

btn1.addEventListener("click", () => {
    ans = parseInt(btn1.innerText);
    isCorrect();
})
btn2.addEventListener("click", () => {
    ans = parseInt(btn2.innerText);
    isCorrect();
})

function isCorrect()
{
    let k = document.getElementById("res-dis");
    k.innerHTML="";
    let j = document.createElement("h1");
    k.appendChild(j);
        questions+=1;

    if(realAns==ans){
        if(ans==parseInt(btn1.innerText)){
            btn1.classList.add("correct")
        }
        else{
            btn2.classList.add("correct")
        }
        j.classList.add('correct')
        j.innerText="Correct"
        score+=1
    }
    else
    {
        if(ans==parseInt(btn1.innerText)){
            btn1.classList.add("wrong")
        }
        else
        {
            btn2.classList.add("wrong")
        }
        j.classList.add("wrong")
        j.innerText = "Wrong";
    }
    if(questions<10){
        generateQuestions();
        setTimeout(() => {
            btn1.classList.remove("correct","wrong")
            btn2.classList.remove("correct","wrong")
            
        }, 1000);

    }
            
    else{
        
        let display = document.getElementById("main-cont")
        k = document.createElement("h1")
        k1 = document.createElement("h2")
        display.innerHTML=""
        display.appendChild(k);
        display.appendChild(k1)
        k.classList.add("score");
        k.innerText = `${score}/10`;
        clearInterval(timmerInterval)

    }
   
    
}


// Timer //
let start = Date.now();
let timmerInterval = setInterval(() => {
    let estime = Date.now() - start;
    let tm0 = Math.floor(estime/100) 
    let tm1 = Math.floor(estime/1000) 
    let tm2 = Math.floor(tm1/60)
    tm1 = tm1 % 60;
    tm0 = tm0%99;
    mins= tm2.toString().padStart(2,'0')
    secs = tm1.toString().padStart(2,'0')
    mili = tm0.toString().padStart(2,'0')
    document.getElementById("time").innerText = `${mins} : ${secs} : ${mili}`;
}, 100);

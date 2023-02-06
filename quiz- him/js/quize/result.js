let textResult = document.getElementById('text-result-id');
let resultContainer = document.getElementById('result-container');
let btnTryAgain = document.getElementById('btn-again-quiz');

btnTryAgain.addEventListener('click', async () => {
    location.reload();
});

let myresult = 0;
function calculeResult(){
    return myresult++;
}

function showResult(){
    textResult.innerText =  "النتيجة هي  : " + questions.length + '/' + calculeResult() ;

}

let arrayWrongResponsIndexs =  new Array();

function wrongRespons(index){
    arrayWrongResponsIndexs.push(index);
}

function showCorection(){
    resultContainer.innerHTML = '';
    for(index in questions){

        if(arrayWrongResponsIndexs.includes(Number(index))){
            resultContainer.innerHTML += 
                `
                <div class="question-container" style="background:#9b1111; border-radius:5px"> 
                    <div class="index" style="background:#9b1111">${index}</div> 
                    <div class="question" style="background:#9b1111">${questions[index].question}</div>
                </div>

                <div class="responce-container" style="background:#9b1111; border-radius:5px">
                    <iconify-icon icon="material-symbols:note-alt-rounded" style="color:green" ></iconify-icon>
                    <div class="respons" style="background:#9b1111; color:green;">${questions[index].correctRepons}</div>
                </div>
                <div class="line"background-color: rgb(0, 33, 77);></div>
            `;
        }
        else {
                        resultContainer.innerHTML += 
                `
                <div class="question-container " style="background:#015201;  border-radius:5px"> 
                    <div class="index" style="background:#015201">${index}</div> 
                    <div class="question " style="background:#015201;  border-radius:5px">${questions[index].question}</div>
                </div>
                <div class="line"></div>
            `;
        }
        
    }
}

let questions = new Array();

// 1
questions.push(
    new Question(
        
        " hhhhhhh",
            [   
                "المستلم/الاجمالي",
                "المرفوض/الاجمالي",
                "السعر/الاجمالي",
            ] ,
        0   ,
            "المستلم/الاجمالي",
        5
        )
);

// 2
questions.push(
    new Question(
        
        "jjjjjjj ",
            [   
                "السعر/الاجمالي",
                "المستلم في الموعد/الاجمالي",
                "لا شئ مماسبق"
            ] ,
        1   ,
        "المستلم في الموعد/الاجمالي",
        5
        )
);

 let randomQuestions =[]; 

for (let i = 0; i <1; i++) {
let randomNumber = Math.floor(Math.random() * questions.length);
randomQuestions.push(questions[randomNumber]);
   questions.splice(randomNumber,1);
}
console.log(randomQuestions);






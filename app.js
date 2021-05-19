/*
(function(){
    function Question(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
    
        for(var i = 0; i<this.answers.length; i++){
            console.log(i + ' : '+this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans){
            if(ans === this.correct){
                console.log('Correct answer!');
            }else{
                console.log('Incorrect try again!');
            }
    }
    var q1 = new Question('Is javascript is the coolest programming language in the world? ',
                                ['yes', 'no'],
                                    0);
    
    var q2 = new Question('What is the name of the coder who is learning javascript right now ?',
                                ['Anil', 'kshitij', 'yogesh'],
                                    0);
            
    var q3 = new Question('What describes coding most ?',
                                ['boring', 'hard', 'tedious', 'fun'],
                                    3);
    
    var questions = [q1, q2, q3];
    
    var n = Math.floor(Math.random() * questions.length);// for producing number betn 0 and 2;
    questions[n].displayQuestion();
    
    var answer = parseInt(prompt('Please select an anawer '));
    
    questions[n].checkAnswer(answer);
})();
*/


//changes 
(function(){
    function Question(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
    
        for(var i = 0; i<this.answers.length; i++){
            console.log(i + ' : '+this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans, callback){
        var sc;
            if(ans === this.correct){
                console.log('Correct answer!');
                sc = callback(true);
            }else{
                console.log('Incorrect try again!');
                sc = callback(false);
            }
            this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score){
        console.log('Your current score : '+score);
        console.log('************************************');
    }

    var q1 = new Question('Is javascript is the coolest programming language in the world? ',
                                ['yes', 'no'],
                                    0);
    
    var q2 = new Question('What is the name of the coder who is learning javascript right now ?',
                                ['Anil', 'kshitij', 'yogesh'],
                                    0);
            
    var q3 = new Question('What describes coding most ?',
                                ['boring', 'hard', 'tedious', 'fun'],
                                    3);

    var questions = [q1, q2, q3];

    function score(){
        var sc = 0;
        return function(correct){
            if(correct){
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion(){
        
        var n = Math.floor(Math.random() * questions.length);// for producing number betn 0 and 2;
        questions[n].displayQuestion();
    
        var answer = prompt('Please select an anawer ');
        if(answer !== 'exit'){
            questions[n].checkAnswer(parseInt(answer), keepScore);

            nextQuestion();
        }
    
    }
    nextQuestion();
    
})();




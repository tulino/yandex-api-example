
EvenListeners();

function EvenListeners(){
    document.getElementById("translate-form").addEventListener("submit", translateWord);
    // change
    document.getElementById("language").onchange = function(){
        // arayüz değişiklikleri
    }
}

function translateWord(e){
    const translate = new Translate(document.getElementById("word").value, document.getElementById("language").value);
    translate.translateWord(function(err,response){
        if(err){
            console.log(err);
        }
        else{
            console.log(response);
            
        }
    });

    e.preventDefault();
}
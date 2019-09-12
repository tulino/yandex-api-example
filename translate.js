function Translate(word,language){
    this.apikey = "trnsl.1.1.20190911T204814Z.081d71a8d5d3cb26.596dcd498102e4b47156248a408d25544a7fa71a";
    this.word = word;
    this.language = language;

    // XHR object
    this.xhr = new XMLHttpRequest();

}
Translate.prototype.changeParameters = function(newWord, newLanguage){
	this.word = newWord;
	this.languaga = newLanguage;
}

Translate.prototype.translateWord = function(callback){
    // api action
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;
    
    this.xhr.open("GET",endpoint);

    this.xhr.onload = () =>{
        if(this.xhr.status === 200){
						const json = JSON.parse(this.xhr.responseText);
						const text = json.text[0];
						callback(null,text);
        }
        else{
            callback("bir hata oluştu",null);
        }
    }
    this.xhr.send();
}
// Translate.prototype.changeParameters = function(newWord, newLanguage){
// 	this.word = newWord;
// 	this.languaga = newLanguage;
// }


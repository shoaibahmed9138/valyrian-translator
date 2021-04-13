var btnTranslate = document.querySelector("#submitBut");
var txtInput = document.querySelector("#translate-input");
var outputDiv = document.querySelector("#translate-output");

var serverURL = "https://api.funtranslations.com/translate/valyrian.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! try again after some time");
}

function clickHandler() {
  var inputText = txtInput.value; // taking input

  // calling server for processing
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText; // output
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);

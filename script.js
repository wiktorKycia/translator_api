const input = document.querySelector("#tekst");
const butt = document.querySelector("button");
const p = document.querySelector("p");

const URL = 'https://api.mymemory.translated.net/get?q=';

function pobierz()
{
    fetch(`${URL}${input.value}&langpair=en|pl`)
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        p.innerText = data.responseData.translatedText;
    });
}

butt.addEventListener("click", function(){
    pobierz();
});
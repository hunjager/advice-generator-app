let adviceId = document.getElementById("adviceId");
let adviceTxt = document.getElementById("advice");
let adviceBtn = document.getElementById("refresh");
const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
    let res =  await fetch(url);
    const { slip: { id, advice } } = await res.json();
    adviceId.innerText = "ADVICE "+"#"+id;
    adviceTxt.innerText = '"'+ advice +'"';
}

getAdvice()

adviceBtn.addEventListener("click", getAdvice)

async function getAdvice () { 
    const number = document.getElementById('number');
    const advice= document.getElementById('advice')

    try {
        await fetch('https://api.adviceslip.com/advice', {method : "GET"})
            .then(response => response.json())
            .then(data => {  
                number.textContent = data.slip.id;
                advice.textContent = data.slip.advice;
                console.log(data.slip.id, data.slip.advice)
            });    
    } catch (error) {
        console.log("Error", error)
    }
}

window.onload = () => {
    const submit = document.getElementById('submit');
    submit.onclick = getAdvice;
    getAdvice()
}
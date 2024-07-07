function chooseColour(){
    const hex="0123456789ABCDEF";
    let colour = "#";
    for (let i =0; i<6; i++){
        colour += hex[Math.floor(Math.random() * 16)];
    }
    return colour; 
}



const button = document.getElementById('button');
const text = document.getElementById('text');

button.addEventListener('click', function(){
    let newColour = chooseColour();
    document.body.style.backgroundColor = newColour;
    text.textContent = `The current colour is" ${newColour}`;
})
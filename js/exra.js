function getAnsA( w , l ){
    const inputBstring = document.getElementById(w).value;
    const inputB = parseFloat(inputBstring);
    inputB.value = "";
    const inputHstring = document.getElementById(l).value;
    const inputH = parseFloat(inputHstring);
    inputH.value = "";
    const inputA =0.5*inputB * inputH ;
    if (isNaN(inputB) || isNaN(inputH)) {
        alert("Please enter a number");
        return;
    }

    return inputA;
  
   
}
function getAnsB( w , l ){
    const inputBstring = document.getElementById(w).value;
    const inputB = parseFloat(inputBstring);
    const inputHstring = document.getElementById(l).value;
    const inputH = parseFloat(inputHstring);
    const inputA =inputB * inputH ;
    if (isNaN(inputB) || isNaN(inputH)) {
        alert("Please enter a number");
        return;
    }

    return inputA;
  
   
}

function getAnsC( name , value ){
    const addArea = document.getElementById('addValue')
    const count = addArea.childElementCount;
    const P = document.createElement("p");
    P.classList.add("my-4");
    P.innerHTML = `
    ${count}. ${name} = ${value}cm<sup>2</sup> <button class="btn btn-neutral">Neutral</button>`;
    addArea.appendChild(P);
}
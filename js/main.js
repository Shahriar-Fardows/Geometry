function getAnsT(){
    const inputA = getAnsA("B","H")
    const output = document.getElementById("ansT");
    output.innerHTML = inputA;
    getAnsC("Triangle",inputA);
   
}

function getAnsR(){
    const inputA = getAnsB("w","l");
    const output = document.getElementById("ansRE");
    output.innerHTML = inputA;
    getAnsC("Rectangle",inputA);
   
}
function getAnsP(){
    const inputA = getAnsB("b","h");
    const output = document.getElementById("ansP");
    output.innerHTML = inputA;
    getAnsC("Parallelogram",inputA);
   
}
function getAnsRH(){
    const inputA = getAnsA("d1","d2");
    const output = document.getElementById("ansR");
    output.innerHTML = inputA;
    getAnsC("Rhombus",inputA);
   
}
function getAnsPE(){
    const inputA = getAnsA("P","bb");
    const output = document.getElementById("ansPE");
    output.innerHTML = inputA;
    getAnsC("Pentagon",inputA);
   
}
function getAnsE(){
    const inputA = getAnsB("A" , "BB");
    const newInput = 3.14 * inputA;
    const output = document.getElementById("ansE");
    output.innerHTML = newInput;
    getAnsC("Ellipse",newInput);
   
}


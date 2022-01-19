"use strict";
// Vars
var pridetiButton = document.getElementById("pridetiButton");
var istrintiButton1 = document.getElementById("istrintiButton1");
var istrintiButton2 = document.getElementById("istrintiButton2");
var vardas = document.getElementById("vardasInput");
var pavarde = document.getElementById("pavardeInput");
var amzius = document.getElementById("amziusInput");
var table = document.getElementsByTagName("tbody")[0];

// Pridėti
function add(){
    var newTr = document.createElement("tr");
    var tdVardas = document.createElement("td");
    var tdPavarde = document.createElement("td");
    var tdAmzius = document.createElement("td");
    tdVardas.textContent = vardas.value;
    tdPavarde.textContent = pavarde.value;
    tdAmzius.textContent = amzius.value;
    if (tdVardas.innerText.length <= 0 || isNaN(tdVardas.innerText) == false || tdPavarde.innerText.length <= 0 || isNaN(tdPavarde.innerText) == false || tdAmzius.innerText.length <= 0 || parseInt(tdAmzius.innerText) <= 0) {
        alert('Įveskite tinkamus duomenis!');
    } else {
        newTr.append(tdVardas)
        newTr.append(tdPavarde);
        newTr.append(tdAmzius);
        table.append(newTr);
        vardas.value = "";
        pavarde.value = "";
        amzius.value = "";
    } 
};

pridetiButton.addEventListener("click", function () {
    add();
});

document.addEventListener("keyup", function(e) {
    if (e.keyCode == "13"){
        add();
    };
});


// Ištrinti pirmą
istrintiButton1.addEventListener("click", function(){
    var tr = document.getElementsByTagName("tr");
    if(tr.length <2){
        alert("Visi elementai ištrinti.")
    } else {
        tr[1].remove();
    }
});

// Ištrinti paskutinį
istrintiButton2.addEventListener("click", function () {
    var tr = document.getElementsByTagName("tr");
    if (tr.length < 2) {
        alert("Visi elementai ištrinti.")
    } else {
        tr[tr.length - 1].remove();
    }
});
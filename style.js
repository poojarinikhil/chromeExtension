// function buttonclick(){
//     console.log('button click')
// }
let inputbtn = document.getElementById("input-btn")
let myLeads = []
const inputEl = document.getElementById("input-el") 
const ulEl = document.getElementById("unorderLi")
inputbtn.addEventListener("click", myfunction);
function myfunction(){
    //document.getElementById("input-btn").style.backgroundColor = 'cyan';
    myLeads.push(inputEl.value);
    for(let i = 0; i <myLeads.length; i++){
        ulEl.innerHTML+= "<li>"+myLeads[i]+"</li>";
    }
}

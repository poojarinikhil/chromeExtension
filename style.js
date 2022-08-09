// function buttonclick(){
//     console.log('button click')
// }
let inputbtn = document.getElementById("input-btn")
let myLeads = []
const inputEl = document.getElementById("input-el") 
inputbtn.addEventListener("click", myfunction);
function myfunction(){
    alert("button has been clicked using event listener")
    document.getElementById("input-btn").style.backgroundColor = 'cyan';
    myLeads.push("www.awesomlead.com")
    console.log(myLeads);
}

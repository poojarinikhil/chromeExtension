// function buttonclick(){
//     console.log('button click')
// }
let myLeads = []
let inputbtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el") 
const ulEl = document.getElementById("unorderLi")
inputbtn.addEventListener("click", myfunction)
function myfunction(){
    //document.getElementById("input-btn").style.backgroundColor = 'cyan';
    myLeads.push(inputEl.value);
    document.getElementById("input-el").value="";
    render()
    
}
function render(){
    let listItem = ""
    // ulEl.innerHTML+= "<li>"+inputEl.value+"</li>";
    for(let i = 0; i <myLeads.length; i++){
        listItem += "<li>"+myLeads[i]+"</li>";
    }
    ulEl.innerHTML = listItem
}

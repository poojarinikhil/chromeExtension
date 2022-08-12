// function buttonclick(){
//     console.log('button click')
// }
let myLeads = []
// let myExample =`["www.example.com"]`
// myExample = JSON.parse(myExample)
// myExample.push("www.example2.com")
// myExample = JSON.stringify(myExample)
// console.log(myExample)
console.log(localStorage.getItem("myLeads"))
let inputbtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el") 
const ulEl = document.getElementById("unorderLi")
// localStorage.clear()
let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
inputbtn.addEventListener("click", myfunction)
function myfunction(){
    //document.getElementById("input-btn").style.backgroundColor = 'cyan';
    myLeads.push(inputEl.value);
    document.getElementById("input-el").value="";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    // console.log(localStorage.getItem("myLeads"))
    render()
    
}
function render(){
    let listItem = ""
    // ulEl.innerHTML+= "<li>"+inputEl.value+"</li>";
    for(let i = 0; i <myLeads.length; i++){
        //listItem += "<li><a target='_blank' href='#'>"+myLeads[i]+"</a></li>"
        listItem += `
        <li>
            <a target='_blank' href='#'>
                ${myLeads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML = listItem
}

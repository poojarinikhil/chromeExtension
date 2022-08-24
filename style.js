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
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
// localStorage.clear()
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render()
}
inputbtn.addEventListener("click", myfunction)
function myfunction(){
    //document.getElementById("input-btn").style.backgroundColor = 'cyan';
    myLeads.push(inputEl.value);
    document.getElementById("input-el").value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    // console.log(localStorage.getItem("myLeads"))
    render()
}

tabBtn.addEventListener("click",saveTab)

function saveTab(){
    chrome.tabs.query({active: true, currentWindow: true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render()
    })
}
deleteBtn.addEventListener("dblclick", deleto)
function deleto(){
    myLeads = []
    console.log("Double clicked")
    localStorage.clear()
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

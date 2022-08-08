// function buttonclick(){
//     console.log('button click')
// }
let inputbtn = document.getElementById("input-btn")

inputbtn.addEventListener("click", function(){
    alert("button has been clicked using event listener")
    document.getElementById("input-btn").style.backgroundColor = 'red';
});


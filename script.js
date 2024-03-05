const todoButton = document.querySelector(".todoButton");
const todoInput = document.querySelector(".todoInput");

const mainTodoAdd = document.getElementById("mainTodoAdd")
let count ;

todoButton.addEventListener("click", (val, index) => {
    let gets = localStorage.getItem("todo")
    // console.log(gets)
    let getParse = JSON.parse(gets)
    var size = Object.keys(getParse).length;
        count = size ;
    
    let input = todoInput.value;
    if (input.length < 10) {
        return alert("Min 10 letters")
    }
    count++;
    getLocalStoresFun(count, input)
    saveProductLocalStores(count, input)
    displayshowfun(count, input)
});



function getLocalStoresFun(count, input) {
    let objTodo = {};
    let get = localStorage.getItem("todo");
    if (get) {
        objTodo = JSON.parse(get)
    }
    return objTodo;
}

function saveProductLocalStores(count, input) {
    let getLocal = getLocalStoresFun();
    getLocal[count] = input;
    // console.log(getLocal)
    let setItem = JSON.stringify(getLocal)
    localStorage.setItem("todo", setItem)
}


function displayshowfun(count, input) {
    let div = document.createElement("div");
    div.className = `todoList`
    div.innerHTML = `
        <li><i class="fa-solid fa-rectangle-list"></i></li>
        <li>${count}</li>
        <li>${input}</li>
        <li><i class="fa-solid fa-pen-to-square"></i></li>
        <li class="" ><i class="fa-solid fa-trash delete"></i></li>
    `
    mainTodoAdd.appendChild(div)
}




function displayshowfunGetFun(count, input) {
    let gets = localStorage.getItem("todo")
    // console.log(gets)
    let getParse = JSON.parse(gets)
    for (let get in getParse) {
        let value = getParse[get];
        let count = get;
        displayshowfun(count, value)
    }
}
displayshowfunGetFun()








// function deleteFun (e){
//     console.log(e)
//     let gets = localStorage.getItem("todo")
//     let getParse = JSON.parse(gets)

// }



const deleteTodo = document.querySelectorAll(".delete");
for (let d of deleteTodo) {
    d.addEventListener("click", (d) => {
        let clicks = d.target.parentNode.parentNode;
        let clickValue = d.target.parentNode.parentNode.children
        deleteLocalStores(clickValue[1].innerText)
        // console.log(clicks)
        clicks.remove()
    })
}

function deleteLocalStores(clickVal) {
    let gets = localStorage.getItem("todo")
    let getParse = JSON.parse(gets)
    delete getParse[clickVal]

    localStorage.removeItem("todo")
    localStorage.setItem("todo", JSON.stringify(getParse))
    
}
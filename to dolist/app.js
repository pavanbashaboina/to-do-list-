const listcontainer = document.getElementById("list-container")
const input = document.getElementById("input")



const todofunc = () => {
    if (input.value === '') {
        alert("add something")
    }
    else {
        let li = document.createElement("li")
        let span = document.createElement("span")



        listcontainer.appendChild(li)
        li.innerText = input.value

        li.appendChild(span)
        span.innerHTML = "\u00d7"
       
    }
    input.value = ''
    
    localstorage()

}

listcontainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
    }
    
}, false)


function localstorage(){
    localstorage.setItems("data", listcontainer.innerText)
}

let myleads = [];
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("Ul")
let inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click", function () {
    myleads.push(inputEl.value)
    inputEl.value = ""
    renderleads()
})
function renderleads() {
    let listitems = ""
    for (let i = 0; i < myleads.length; i++) {

        listitems += `
    <li> 
    <a target ='_blank' href='${myleads[i]}'> 
    ${myleads[i]} 
    </a>
    </li>`
        //     const li=document.createElement("li")
        //     li.textContent=myleads[i]
        //     ulEl.append(li)
    }
    ulEl.innerHTML = listitems;
}

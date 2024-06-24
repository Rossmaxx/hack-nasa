const mainBody = document.querySelector(".main-body")
const terminal = document.createElement("div")
terminal.style.backgroundColor = "#000000"
terminal.style.color = "#9ACD32"
terminal.style.border = "1px solid #ffffff"
terminal.style.borderRadius = "4px"
terminal.style.width = "500px"
terminal.style.fontFamily = '"Courier New", Courier, monospace'

async function hack(){
    document.getElementById("initial-text").style.display = "none"
    mainBody.appendChild(terminal)

    terminal.append("Initiating Hacking, get ready")
    terminal.appendChild(document.createElement("br"))
    for (let i=0; i <= 100; i++){
        terminal.append(`Hacking in progress [${i}% completed]`)
        terminal.appendChild(document.createElement("br"))
        await sleep(100) // async function is used to make this await function work
    }

    let finishedStatus = document.createElement("div")
    finishedStatus.innerHTML = "Congrats, you hacked NASA.<br>"
    finishedStatus.innerHTML +=  "<a href=\"https://www.youtube.com/watch?v=FD8SgayyCv8\">Click this link for your files</a>"
    mainBody.append(finishedStatus)
}

// sleep function copypasted from geeksforgeeks
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}  

const hackButton = document.querySelector(".initiate-hacking")
hackButton.addEventListener('click', () => hack())

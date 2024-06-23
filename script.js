const mainBody = document.querySelector(".main-body")
let alreadyHacked = false
// const newLine = document.createElement("<br>")

async function hack(){
    if (alreadyHacked == true){
        let newDiv = document.createElement("div")
        newDiv.innerText = "You already hacked NASA, You are now in FBI watchlist"
        mainBody.append(newDiv)
        return
    }

    mainBody.append("Initiating Hacking, get ready")
    mainBody.appendChild(document.createElement("br"))
    for (let i=0; i <= 100; i++){
        mainBody.append(`Hacking in progress [${i}% completed]`)
        mainBody.appendChild(document.createElement("br"))
        await sleep(100) // async function is used to make this await function work
    }

    alreadyHacked = true
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

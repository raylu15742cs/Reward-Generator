let generate = () => {
    let current = Math.floor(Math.random() * 100)

    let target = document.getElementById("main")
    if(current > 90) {
        target.innerHTML += `You are Rewarded ${current}`
    }else {
        target.innerHTML += `Try Again Tomorrow ${current}`
    }
}

generate();
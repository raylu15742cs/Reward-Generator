let generate = () => {
    let current = Math.floor(Math.random() * 10 + 90)

    let target = document.getElementById("main")
    if(current > 90) {
        target.innerHTML += `<h1>You are Rewarded ${current}</h1>`
    }else {
        target.innerHTML += `<h1>Try Again Tomorrow ${current}</h1>`
    }
}

generate();
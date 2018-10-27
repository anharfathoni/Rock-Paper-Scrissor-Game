/*
RULES GAME

Kamu akan melawan Thanos dengan cara bermain batu gunting kertas.
Siapa yang dapat mengalahkan musuh sebanyak 3x terlebih dahulu yang akan menang.

Nasib Bumi dan manusia ada di tanganmu !!!

*/

//*****************************INITIALIZE VARIABLE****************************************** */
var activePlayer, hp, round, weaponPlayer, weaponComputer, stillPlaying;

//*****************************FUNCTION****************************************** */
function init() {
    hp = [3, 3] //init HP both (you)player and thanos(computer)
    round = 1 //init round
    weaponPlayer = 0 // 0=none, 1=paper, 2=rock, 3=scrissor

    stillPlaying = true

    document.querySelector(".versus").src = "gambar/vs_icon.png"
    document.querySelector(".weaponPlayerFix").src = "./gambar/sign-question-icon.png"
    document.querySelector(".weaponComputerFix").src = "./gambar/sign-question-icon.png"
    document.getElementById("name-0").textContent = "You"
    document.getElementById("name-1").textContent = "Thanos"
    document.getElementById("hp-0").textContent = hp[0]
    document.getElementById("hp-1").textContent = hp[1]
    document.getElementById("round-number").textContent = round
}


function nextRound() {
    if (stillPlaying) {
        document.getElementById("hp-0").textContent = hp[0]
        document.getElementById("hp-1").textContent = hp[1]
        document.getElementById("round-number").textContent = round
        document.querySelector(".weaponPlayerFix").src = "./gambar/sign-question-icon.png"
        document.querySelector(".weaponComputerFix").src = "./gambar/sign-question-icon.png"
    }
}


function randomComputerWeapon() {
    if (stillPlaying) {
        document.querySelector(".versus").src = "gambar/vs_icon.png"
        if (weaponPlayer === 1) {
            if (weaponComputer === 1) {
                next()
            } else if (weaponComputer === 3) {
                hp[1] -= 1
                if (hp[1] === 0) {
                    stillPlaying = false
                    endWIn()
                } else {
                    next()
                }
            } else {
                hp[0] -= 1
                if (hp[0] === 0) {
                    stillPlaying = false
                    endLose()
                } else {
                    next()
                }
            }
        } else if (weaponPlayer === 2) {
            if (weaponComputer === 2) {
                next()
            } else if (weaponComputer === 1) {
                hp[1] -= 1
                if (hp[1] === 0) {
                    stillPlaying = false
                    endWIn()
                } else {
                    next()
                }
            } else {
                hp[0] -= 1
                if (hp[0] === 0) {
                    stillPlaying = false
                    endLose()
                } else {
                    next()
                }
            }
        } else if (weaponPlayer === 3) {
            if (weaponComputer === 3) {
                next()
            } else if (weaponComputer === 2) {
                hp[1] -= 1
                if (hp[1] === 0) {
                    stillPlaying = false
                    endWIn()
                } else {
                    next()
                }
            } else {
                hp[0] -= 1
                if (hp[0] === 0) {
                    stillPlaying = false
                    endLose()
                } else {
                    next()
                }
            }
        }
    }
}

function endWIn() {
    document.getElementById("hp-1").textContent = hp[1]
    document.getElementById("name-0").textContent = "YOU WIN"
    document.getElementById("name-1").textContent = "THANOS HAS BEEN SLAIN"
    document.querySelector(".versus").src = "gambar/congrats.gif"
}

function endLose() {
    document.getElementById("hp-0").textContent = hp[0]
    document.getElementById("name-0").textContent = "You were slain by Thanos, for the good of the Universe"
    document.getElementById("name-1").textContent = "NICE TRY :)"
    document.querySelector(".versus").src = "gambar/thanos-punch.gif"
}

function next() {
    round += 1
    nextRound()
}

// function win() {
//     document.getElementById("round-number").textContent = "YOU WIN"
// }

// function draw() {
//     document.getElementById("round-number").textContent = "DRAW"
// }

// function lose() {
//     document.getElementById("round-number").textContent = "YOU LOSE"
// }



//*****************************DOM****************************************** */

init()

document.querySelector(".weaponPlayer-1").addEventListener("click", function() {
    document.querySelector(".weaponPlayerFix").src = "gambar/warna-1.png"
    weaponPlayer = 1
})
document.querySelector(".weaponPlayer-2").addEventListener("click", function() {
    document.querySelector(".weaponPlayerFix").src = "gambar/warna-2.png"
    weaponPlayer = 2
})
document.querySelector(".weaponPlayer-3").addEventListener("click", function() {
    document.querySelector(".weaponPlayerFix").src = "gambar/warna-3.png"
    weaponPlayer = 3
})

document.querySelector(".btn-start").addEventListener("click", function() {
    if (stillPlaying) {
        document.querySelector(".versus").src = "gambar/fight.gif"
        setTimeout(randomComputerWeapon, 3000)
        weaponComputer = Math.floor(Math.random() * 3) + 1
        document.querySelector(".weaponComputerFix").src = "gambar/warna-" + weaponComputer + ".png"
    }
})

document.querySelector(".btn-new").addEventListener("click", function() {
    init()
})
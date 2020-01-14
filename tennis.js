let scoreA = 0
let scoreB = 0

function GetScore() {
    return MapScore(scoreA) + " - " + MapScore(scoreB)
}
module.exports = GetScore //จะประกาศ module ข้างล่าง function นั้น

function MapScore(score){
    switch (score){
        case 0 :
            return "LOVE"
        case 15 :
            return "FIFTEEN"
        case 30 :
            return "THIRTY"
        case 40 :
            return "FOURTY"
    }
}
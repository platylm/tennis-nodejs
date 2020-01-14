const GetScore = require('./tennis')

describe('Tennis',() => {
    it ('Score A 0 and Score B 0 Say LOVE-LOVE',()=>{
        //arrange
        const expected = "LOVE - LOVE"
        //action
        const actual = GetScore()
        //assert
        expect(actual).toBe(expected)
    })

    
    it ('Score A 15 and Score B 0 Say FIFTEEN-LOVE',()=>{
        //arrange
        const expected = "FIFTEEN - LOVE"
        //action
        scoreA = 15
        const actual = GetScore()
        //assert
        expect(actual).toBe(expected)
    })

    xit ('Score A 15 and Score B 15 Say FIFTEEN-FIFTEEN',()=>{
        //arrange
        const expected = "FIFTEEN - FIFTEEN"
        const playerA = 15
        const playerB = 15
        //action
        const actual = Tennis(playerA,playerB)
        //assert
        expect(actual).toBe(expected)
    })

    xit ('Score A 30 and Score B 15 Say THIRTY-FIFTEEN',()=>{
        //arrange
        const expected = "THIRTY - FIFTEEN"
        const playerA = 30
        const playerB = 15
        //action
        const actual = Tennis(playerA,playerB)
        //assert
        expect(actual).toBe(expected)
    })

    xit ('Score A 40 and Score B 15 Say FOURTY-FIFTEEN',()=>{
        //arrange
        const expected = "FOURTY - FIFTEEN"
        const playerA = 40
        const playerB = 15
        //action
        const actual = Tennis(playerA,playerB)
        //assert
        expect(actual).toBe(expected)
    })

    // it ('A win game say A WINNER',()=>{
    //     //arrange
    //     const expected = "A WINNER"
    //     //1
    //     const playerA = 40
    //     const playerB = 15
    //     const old = Tennis(playerA,playerB)

    //     const old = Tennis(playerA,playerB)
        
    //     // 3
    //     const actual = tennis(playerA,playerB)

        
    //     //assert
    //     expect(actual).toBe(expected)
    // })
})
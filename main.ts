let index = 0
basic.forever(function () {
    while (true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showNumber(index)
        basic.pause(1000)
        index += 60
    }
})

input.onButtonPressed(Button.A, function () {
    basic.showNumber(bugVisits)
})
input.onButtonPressed(Button.AB, function () {
    bugVisits = 0
    basic.showNumber(bugVisits)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
let bugVisits = 0
bugVisits = 0
basic.showNumber(bugVisits)
basic.forever(function () {
    if (touch.getTap(touch.TouchPin.P0)) {
        bugVisits += 1
        led.plotBarGraph(
        bugVisits,
        30
        )
    }
})

basic.forever(function () {
    if (true) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(200)
    }
})
basic.forever(function () {
    if (input.lightLevel() < 100) {
        pins.servoWritePin(AnalogPin.P2, 100)
    } else {
        pins.servoWritePin(AnalogPin.P2, 0)
    }
})

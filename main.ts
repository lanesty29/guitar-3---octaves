input.onButtonPressed(Button.A, function () {
    F = F / 2
    A = A / 2
    C = C / 2
    E = E / 2
})
input.onPinPressed(TouchPin.P2, function () {
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Half))
})
input.onButtonPressed(Button.B, function () {
    F = F * 2
    A = A * 2
    C = C * 2
    E = E * 2
})
input.onPinPressed(TouchPin.P1, function () {
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(880, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
})
let E = 0
let C = 0
let A = 0
let F = 0
F = 349
A = 440
C = 523
E = 659

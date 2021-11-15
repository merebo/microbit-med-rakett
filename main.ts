radio.onReceivedString(function (receivedString) {
    if (receivedString == "Start") {
        for (let index = 0; index < 50000; index++) {
            radio.sendNumber(input.acceleration(Dimension.Strength))
        }
    }
})
radio.setGroup(1)

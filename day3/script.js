function measurement() {
    if ($('#Measurement').val() == 1) {
        $('.unit-length').hide()
        $('.unit-temperature').hide()
        $('.unit-mass').show()
    }else if ($('#Measurement').val() == 2) {
        $('.unit-length').hide()
        $('.unit-mass').hide()
        $('.unit-temperature').show()
    }else if ($('#Measurement').val() == 3){
        $('.unit-mass').hide()
        $('.unit-temperature').hide()
        $('.unit-length').show()
    }else {
        $('.unit-mass').hide()
        $('.unit-temperature').hide()
        $('.unit-length').hide()
    }
}
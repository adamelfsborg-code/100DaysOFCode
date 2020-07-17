var output, input;

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





function convert() {
    if ($('#pickedunit-mass').val() == 1 && $('#convertedunit-mass').val() == 1) {
        input = $('#convert-mass').val()
        output = input 
        console.log(output)
    }else if($('#pickedunit-mass').val() == 2 && $('#convertedunit-mass').val() == 2) {
        input = $('#convert-mass').val()
        output = input 
        console.log(output)
    }else if ($('#pickedunit-mass').val() == 3 && $('#convertedunit-mass').val() == 3) {
        input = $('#convert-mass').val()
        input = output
        console.log(output)
    } else if ($('#pickedunut-mass').val() == 1 && ($('#convertedunit-mass').val() == 2)) {
        input = $('#convert-mass').val()
        output = input * 0.001
        console.log(output)
    }else if ($('#pickedunit-mass').val() == 1 && ($('#convertedunit-mass').val() == 3)) {
        input = $('#convert-mass').val()
        output = input * 0.000001
        console.log(output)
    }else if ($('#pickedunit-mass').val() == 2 && ($('#convertedunit-mass').val() == 1)) {
        input = $('#convert-mass').val()
        output = input * 1000
        console.log(output)
    }else if ($('#pickedunit-mass').val() == 2 && ($('#convertedunit-mass').val() == 3)) {
        input = $('#convert-mass').val()
        output = input / 1000
        console.log(output)
    }else if ($('#pickedunit-mass').val() == 3 && ($('#convertedunit-mass').val() == 1)) {
        input = $('#convert-mass').val()
        output = input * 1000000
        console.log(output)
    }else if($('#pickedunit-mass').val() == 3 && ($('#convertedunit-mass').val() == 2)) {
        input = $('#convert-mass').val()
        output = input * 1000
        console.log(output)
    }
}

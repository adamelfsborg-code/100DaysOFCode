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
    var text = $('#converted-mass');
    $(text).val('')
    var text = $('#converted-temp');
    $(text).val('')
    var text = $('#converted-len');
    $(text).val('')


    if ($('#pickedunit-mass').val() == 1 && $('#convertedunit-mass').val() == 1) {
        input = $('#convert-mass').val()
        output = input 
        var text = $('#converted-mass');
        text.val(text.val() + output + 'g');   
    }else if($('#pickedunit-mass').val() == 2 && $('#convertedunit-mass').val() == 2) {
        input = $('#convert-mass').val()
        output = input 
        var text = $('#converted-mass');
        text.val(text.val() + output + 'kg');   
    }else if ($('#pickedunit-mass').val() == 3 && $('#convertedunit-mass').val() == 3) {
        input = $('#convert-mass').val()
        input = output
        var text = $('#converted-mass');
        text.val(text.val() + output + 't');   
    } else if ($('#pickedunut-mass').val() == 1 && $('#convertedunit-mass').val() == 2) {
        input = $('#convert-mass').val()
        output = input * 0.001
        var text = $('#converted-mass');
        text.val(text.val() + output + 'kg');   
    }else if ($('#pickedunit-mass').val() == 1 && $('#convertedunit-mass').val() == 3) {
        input = $('#convert-mass').val()
        output = input * 0.000001
        var text = $('#converted-mass');
        text.val(text.val() + output + 't');   
    }else if ($('#pickedunit-mass').val() == 2 && $('#convertedunit-mass').val() == 1) {
        input = $('#convert-mass').val()
        output = input * 1000
        var text = $('#converted-mass');
        text.val(text.val() + output + 'g');   
    }else if ($('#pickedunit-mass').val() == 2 && $('#convertedunit-mass').val() == 3) {
        input = $('#convert-mass').val()
        output = input / 1000
        var text = $('#converted-mass');
        text.val(text.val() + output + 't');   
    }else if ($('#pickedunit-mass').val() == 3 && $('#convertedunit-mass').val() == 1) {
        input = $('#convert-mass').val()
        output = input * 1000000
        var text = $('#converted-mass');
        text.val(text.val() + output + 'g');   
    }else if($('#pickedunit-mass').val() == 3 && $('#convertedunit-mass').val() == 2) {
        input = $('#convert-mass').val()
        output = input * 1000
        var text = $('#converted-mass');
        text.val(text.val() + output + 'kg');   
    }
    // temp 
    else if ($('#pickedunit-temp').val() == 1 && $('#convertedunit-temp').val() == 1) {
        input = $('#convert-temp').val()
        output = input
        var text = $('#converted-temp');
        text.val(text.val() + output + 'C');   

    }else if($('#pickedunit-temp').val() == 2 && $('#convertedunit-temp').val() == 2) {
        input = $('#convert-temp').val()
        output = input
        console.log(output)
        var text = $('#converted-temp');
        text.val(text.val() + output + 'K'); 
    }else if($('#pickedunit-temp').val() == 3 && $('#convertedunit-temp').val() == 3) {
        input = $('#convert-temp').val()
        output = input
        var text = $('#converted-temp');
        text.val(text.val() + output + 'F'); 
    }else if($('#pickedunit-temp').val() == 1 && $('#convertedunit-temp').val() == 2) {
        input = $('#convert-temp').val()
        output = input + 273.15
        var text = $('#converted-temp');
        text.val(text.val() + output + 'K'); 
    }else if($('#pickedunit-temp').val() == 1 && $('#convertedunit-temp').val() == 3) {
        input = $('#convert-temp').val()
        output = input * 1.8000 + 32.00
        var text = $('#converted-temp');
        text.val(text.val() + output + 'F'); 
    }else if($('#pickedunit-temp').val() == 2 && $('#convertedunit-temp').val() == 1) {
        input = $('#convert-temp').val()
        output = input - 273.15
        var text = $('#converted-temp');
        text.val(text.val() + output + 'C'); 
    }else if($('#pickedunit-temp').val() == 2 && $('#convertedunit-temp').val() == 3) {
        input = $('#convert-temp').val()
        output = (input - 273.15) * 1.8000 + 32.00
        var text = $('#converted-temp');
        text.val(text.val() + output + 'F'); 
    }else if($('#pickedunit-temp').val() == 3 && $('#convertedunit-temp').val() == 1) {
        input = $('#convert-temp').val()
        output = (input - 32) / 1.8000
        var text = $('#converted-temp');
        text.val(text.val() + output + 'C'); 
    }else if($('#pickedunit-temp').val() == 3 && $('#convertedunit-temp').val() == 2) {
        input = $('#convert-temp').val()
        output = (input - 32) * 5 / 9   
        output += 273.15
        var text = $('#converted-temp');
        text.val(text.val() + output + 'K'); 
    }

    // 
    else if($('#pickedunit-len').val() == 1 && $('#convertedunit-len').val() == 1) {
        input = $('#convert-len').val()
        output = input 
        var text = $('#converted-len');
        text.val(text.val() + output + 'mm'); 
    }
    else if($('#pickedunit-len').val() == 2 && $('#convertedunit-len').val() == 2) {
        input = $('#convert-len').val()
        output = input 
        var text = $('#converted-len');
        text.val(text.val() + output + 'cm'); 
    }
    else if($('#pickedunit-len').val() == 3 && $('#convertedunit-len').val() == 3) {
        input = $('#convert-len').val()
        output = input 
        var text = $('#converted-len');
        text.val(text.val() + output + 'm'); 
    }
    else if($('#pickedunit-len').val() == 1 && $('#convertedunit-len').val() == 2) {
        input = $('#convert-len').val()
        output = input * 0.1
        var text = $('#converted-len');
        text.val(text.val() + output + 'cm'); 
    }
    else if($('#pickedunit-len').val() == 1 && $('#convertedunit-len').val() == 3) {
        input = $('#convert-len').val()
        output = input * 0.001
        var text = $('#converted-len');
        text.val(text.val() + output + 'm'); 
    }
    else if($('#pickedunit-len').val() == 2 && $('#convertedunit-len').val() == 1) {
        input = $('#convert-len').val()
        output = input * 10
        var text = $('#converted-len');
        text.val(text.val() + output + 'mm'); 
    }
    else if($('#pickedunit-len').val() == 2 && $('#convertedunit-len').val() == 3) {
        input = $('#convert-len').val()
        output = input * 0.01
        var text = $('#converted-len');
        text.val(text.val() + output + 'm'); 
    }
    else if($('#pickedunit-len').val() == 3 && $('#convertedunit-len').val() == 1) {
        input = $('#convert-len').val()
        output = input * 1000
        var text = $('#converted-len');
        text.val(text.val() + output + 'mm'); 
    }
    else if($('#pickedunit-len').val() == 3 && $('#convertedunit-len').val() == 2) {
        input = $('#convert-len').val()
        output = input * 100
        var text = $('#converted-len');
        text.val(text.val() + output + 'cm'); 
    }
    
    
}

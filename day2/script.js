

function calculateTip() {
    var bill = $('#bill').val()
    var service = $('#service').val()
    var share = $('#share').val()
    tipAmount(bill,service, share)
    document.getElementById('show-result').style.display = 'block'
}


function tipAmount(bill, service, share) {
    var tip;
    if (service == 1 && share > 1) {
        tip = (bill * 0.25) 

        document.getElementById('tip').innerHTML = 'your should tip ' + (tip / share).toFixed(1) + '$ per person('+share+')' 
    }else if (service == 2 && share > 1) {
        tip = (bill * 0.10) 

        document.getElementById('tip').innerHTML = 'your should tip ' + (tip / share).toFixed(1) + '$ per person('+share+')'  
    }else if (service == 1 && share == 0){
        tip = (bill * 0.25) 
        document.getElementById('tip').innerHTML = 'your should tip ' + tip + '$'
    }else if (service == 2 && share == 0) {
        tip = (bill * 0.10) 

        document.getElementById('tip').innerHTML = 'your should tip ' + tip + '$'
    }else {
        tip = 0
        document.getElementById('tip').innerHTML = 'you should not tip anything!!'
    }
}

function canelResult() {
    document.getElementById('show-result').style.display = 'none'

}

function toggleSpinning() {
    $('#animation-text').toggleClass('animation')
    if ($('#animation-text').hasClass('animation')) {
        $('#toggle-animation-btn').removeClass('bg-success')
        $('#toggle-animation-btn').addClass('bg-danger')
        document.getElementById('toggle-animation-btn').innerHTML = 'Stop Spinning'

    }else {
        $('#toggle-animation-btn').removeClass('bg-danger')
        $('#toggle-animation-btn').addClass('bg-success')
        document.getElementById('toggle-animation-btn').innerHTML = 'Start Spinning'

    }
}
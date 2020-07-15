
function toggleSpinning() {
    $('#animation-text').toggleClass('animation')
    if ($('#animation-text').hasClass('animation')) {
        $('#toggle-animation-btn').removeClass('btn-success')
        $('#toggle-animation-btn').addClass('btn-danger')
        document.getElementById('toggle-animation-btn').innerHTML = 'Stop Spinning'
        $('#speed-fast').prop('disabled', false)
        $('#speed-slow').prop('disabled', false)
    }else {
        $('#toggle-animation-btn').removeClass('btn-danger')
        $('#toggle-animation-btn').addClass('btn-success')
        document.getElementById('toggle-animation-btn').innerHTML = 'Start Spinning'
        $('#speed-fast').prop('disabled', true)
        $('#speed-slow').prop('disabled', true)

    }
}


function speedFast() {
    
    if ($('#speed-fast').hasClass('btn-success')) {
        $('#speed-fast').removeClass('btn-success')
        $('#speed-fast').addClass('btn-danger')
        $('#speed-slow').removeClass('btn-danger')
        $('#speed-slow').addClass('btn-success')
        $('#animation-text').removeClass('animation');
        $('#animation-text').css("-webkit-animation-duration", "10s");
        $('#animation-text').get(0).offsetWidth = $('#animation-text').get(0).offsetWidth;
        $('#animation-text').addClass("animation");
    
    }else {
        $('#speed-fast').removeClass('btn-danger')
        $('#speed-fast').addClass('btn-success')
        $('#speed-slow').removeClass('btn-success')
        $('#speed-slow').addClass('btn-danger')
        $('#animation-text').removeClass('animation');
        $('#animation-text').css("-webkit-animation-duration", "2s");
        $('#animation-text').get(0).offsetWidth = $('#animation-text').get(0).offsetWidth;
        $('#animation-text').addClass("animation");
    }

    
}


function speedSlow() {
    if ($('#speed-slow').hasClass('btn-danger')) {
        $('#speed-slow').removeClass('btn-danger')
        $('#speed-slow').addClass('btn-success')
        $('#speed-fast').removeClass('btn-success')
        $('#speed-fast ').addClass('btn-danger')
        $('#animation-text').removeClass('animation');
        $('#animation-text').css("-webkit-animation-duration", "10s");
        $('#animation-text').get(0).offsetWidth = $('#animation-text').get(0).offsetWidth;
        $('#animation-text').addClass("animation");
        


    }else {
        $('#speed-slow').removeClass('btn-success')
        $('#speed-slow').addClass('btn-danger')
        $('#speed-fast').removeClass('btn-danger')
        $('#speed-fast').addClass('btn-success')
        $('#animation-text').removeClass('animation');
        $('#animation-text').css("-webkit-animation-duration", "2s");
        $('#animation-text').get(0).offsetWidth = $('#animation-text').get(0).offsetWidth;
        $('#animation-text').addClass("animation");
    }


}


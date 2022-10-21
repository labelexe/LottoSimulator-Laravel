$(document).on('click', '#btn-proceed', function(){

    bootbox.confirm({
        message: "<h6>This will register your tickets to the roll event. Continue?</h6>",
        buttons: {
            confirm: {
                label: '<span class="glyphicon glyphicon-ok"></span> Yes',
                className: 'btn-danger'
            },
            cancel: {
                label: '<span class="glyphicon glyphicon-remove"></span> No',
                className: 'btn-primary'
            }
        },
        callback: function (result) {

            if(result==true){
                window.location.href = "/lotto/start";
            }
        }
    });

    return false;
});




$('#chkbx-random-digits').on('click', function(){
    if ($(this).is(':checked')) {
        triggerRandomCheckboxes();
    } else {
        uncheckAllCheckboxes();
    }
});

function uncheckAllCheckboxes() {
    $('.form-check-input-digits').prop('checked', false);
}

function triggerRandomCheckboxes() {
    var randomDigits = createUniqueDigits();

    for (let i = 0; i < randomDigits.length; i++) {
        $('#' + randomDigits[i]).prop('checked', true);
    }
}

function createUniqueDigits() {
    var uniqueDigits = new Array(6);
    for (let i = 0; i < uniqueDigits.length; i++) {
        var digit;
        do {
            var digit = randomDigitFromInterval(1, 42);
        } while ($.inArray( digit, uniqueDigits) > -1);
        uniqueDigits[i] = digit;
    }
    
    return uniqueDigits;
}

function randomDigitFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
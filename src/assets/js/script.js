(function ($) {
    'use strict';

    var selectRatio = $('select[name="ratio"]'),
        inputWidth = $('input[name="width"]'),
        inputHeight = $('input[name="height"]'),
        demos = $('.vlt-ratio-calculator__demos'),
        height = 0,
        width = 0;

    selectRatio.on('change', function() {
        var value = $(this).val().split(':');
        height = value[0];
        width = value[1];
        ratio_calculation();
    }).trigger('change');

    function ratio_calculation() {
          inputWidth.on('keyup mouseup', function() {
            var value = $(this).val();
            value *= 1;
            var valueHeight = Math.round((value/height)*width);
            inputHeight.val(valueHeight);
            demos.css({
                'width': value + 'px',
                'height': valueHeight + 'px'
            });
            if(value != 0){
                demos.find('span').text(value+'x'+valueHeight);
                demos.find('span').css({
                    'font-size': value * 0.15
                });
            }else{
                demos.find('span').text('');
            }
        }).trigger('keyup');      
    }
    ratio_calculation();

}(jQuery));
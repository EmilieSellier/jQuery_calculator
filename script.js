var aElement = new Array();
var sCalcul = '';
var iTotal;

$(function () {

    $('td').on('click', function () {

        if ($(this).html() == '=') {

            for (var iPos = 0; iPos < aElement.length; iPos++) {
                sCalcul += aElement[iPos];
            }
            
            iTotal = eval(sCalcul);
            $('input').attr('value', iTotal);

            aElement = [iTotal];

        } else if ($(this).html() == 'C') {
            aElement = [];
            $('input').attr('value', '');
            
        } else {
            aElement.push($(this).html());

            for (var iPos = 0; iPos < aElement.length; iPos++) {
                sCalcul += aElement[iPos];
            }
            $('input').attr('value', sCalcul);

        }

        sCalcul = '';
    });
    
});
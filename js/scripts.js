
$(document).ready(function(){

    function casinoDraw(coins){
        var numberOf10Draws = Math.floor(coins / 8),
            coinsSaved = coins%8,
            totalDraws = (numberOf10Draws * 10) + coinsSaved;

        return totalDraws;
    }

    function coinsNeededToReach(draws){
        var numberOf10Draws = Math.floor(draws / 10),
            singleDraw = draws%10,
            coinsNeeded = ( numberOf10Draws * 10 * 0.8 ) + singleDraw;


        return coinsNeeded;
    }



    $('.js-coins-btn').click(function(){
       var result,
           badge = 'coins',
           value = $('.js-coins-value').val() == 'X' ? 0 : $('.js-coins-value').val() ;

        result = coinsNeededToReach(value);

        $('.js-result-text').text(result);
        $('.js-badge').text(badge);
        $('.js-result').css('display', 'table');
        $('.js-result').css('opacity',1);

    });

    $('.js-coins-value').click(function(){
       $(this).val('');
    });

    $('.js-drops-value').click(function(){
        $(this).val('');
    });


    $('.js-drops-btn').click(function(){
        var result,
            badge = 'draws',
            value = $('.js-drops-value').val() == 'X' ? 0 : $('.js-drops-value').val() ;

        result = casinoDraw(value);

        $('.js-result-text').text(result);
        $('.js-badge').text(badge);
        $('.js-result').css('display', 'table');
        $('.js-result').css('opacity',1);

    });

});
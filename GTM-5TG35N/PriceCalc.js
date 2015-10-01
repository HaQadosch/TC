<script id='gtm_PriceCalc'>
(function gtm_PriceCalc(jQ, dl, loc) {
    'use strict';
    if (jQ) try {
        jQuery('span#calcbuttonspan_calc').click(function(e){
            CATTDL.CATTParams.pageid = 'pricecalc';
            CATTDL.CATTParams.pricetotal = CATTDL.CATTParams.pricetotal
                || (/\d+/.exec((jQuery('div.price-total-line').find('[class="price"]').text() || '').replace('.','')) || []).pop()
                || (/\d+/.exec((jQuery('p.price.big-font') && jQuery('p.price.big-font').eq(0)).text() || '') || []).pop()
                || '';            
            dl.push({'event': 'PriceCalc'})
            window.gatcDL && gatcDL.push({'event': 'PriceCalc'})
        });

        jQuery('span#calcbuttonspan_recalc').click(function(e){
            CATTDL.CATTParams.pageid = 'pricerecalc';
            CATTDL.CATTParams.pricetotal = CATTDL.CATTParams.pricetotal
                || (/\d+/.exec((jQuery('div.price-total-line').find('[class="price"]').text() || '').replace('.','')) || []).pop()
                || (/\d+/.exec((jQuery('p.price.big-font') && jQuery('p.price.big-font').eq(0)).text() || '') || []).pop()
                || '';
            dl.push({'event': 'PriceReCalc'})
            window.gatcDL && gatcDL.push({'event': 'PriceReCalc'})
        });

    } catch(e) {
        cdl.error('GTM BE NEC PriceCalc: '+e)
    }
    return jQ
}(window.jQuery, window.dataLayer || [], window.location))
</script>
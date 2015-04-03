<script>
(function gtm_cattdlSummary(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams || {};
        var ctpm = window.CATTParams || {};
        var newPM = {}

        cdpm.errors = {}
        var errorPM = {};
        errorPM['errorcode'] = (/(^\d+)/.exec(ctpm.ErrorCode) || '') || [].pop() || '';
        errorPM['errormsg'] = ctpm.ErrorCode || '';
        jQ.extend(cdl.CATTParams.errors, errorPM);
        
        var refreshparams = [
            "AccomCode"
            , "AccomName"
            , "AccomGEOLocation"
            , "AccomResort"
            , "AppServer"
            , "BasketContent"
            , "BoardBasis"
            , "BookingValue"
            , "Brochure"
            , "Carrier"
            , "DeptDate"
            , "Destination"
            , "DestinationISOCode"
            , "Duration"
            , "FlightType"
            , "Insurance"
            , "InsuranceSpec"
            , "PaxAdult"
            , "PaxChild"
            , "PaxInfant"
            , "PaxTotal"
            , "Region"
            , "RegionGEOLocation"
            , "RetDate"
            , "Rooms"
            , "SearchApp"
            , "SessId"
            , "TourOperator"
            , "PageContext"
            , "PageType"
            , "SiteLanguage"
            , "StarRating"          
            , "siteType"
        ];

        var ctpmkeys = Object.keys(ctpm);
        for (var i in ctpmkeys){
                    var ctpmval = ctpmkeys[i] || ''
                    var reg = new RegExp(ctpmval, 'i');
                    if (ctpmval && reg.test(refreshparams.join('|'))) { 
                        cdpm[ctpmval.toLowerCase()] = ctpm[ctpmval]
                    }
        };      

        cdpm['accomcountry'] = ctpm.Destination || '';
        cdpm['accomregion'] = ctpm.Region || '';
        cdpm['accomresort'] = ctpm.AccomResort || '';
        cdpm['deptdate'] = +(new Date(ctpm.DeptDate && ctpm.DeptDate.replace(/(\d+)\/(\d+)\/(\d+)/,'$3-$2-$1')) || new Date((jQuery('div#foCashTicket').find('div[class="flight-breakdown"]').find('span[class="trip-datetime"]').eq(0).text() || '').trim().replace(/(\d+)\/(\d+)\/(\d+)/,'$3-$2-$1').substring(0,10)) || '0');
        cdpm['destairport'] = (ctpm.DestinationAirportSelected || '').toUpperCase();      
        cdpm['depairport'] = (ctpm.DepartureAirportSelected || '').toUpperCase();
        cdpm['returndate'] = +(new Date(ctpm.RetDate && ctpm.RetDate.replace(/(\d+)\/(\d+)\/(\d+)/,'$3-$2-$1')) ||new Date((jQuery('div#foCashTicket').find('div[class="flight-breakdown"]').find('span[class="trip-datetime"]').eq(2).text() || '').trim().replace(/(\d+)\/(\d+)\/(\d+)/,'$3-$2-$1').substring(0,10)) || '0');
        cdpm['duration'] = +(/\d+/.exec(jQuery('div#foCashTicket').find('div[class="flight-breakdown"]').find('span[class="trip-party"]').text()) || []).pop() || 0;
        cdpm['roomcodes'] = ctpm.RoomType && ctpm.RoomType.split('|') || [];
        cdpm['sessionid'] = ctpm.SessId || '';
        cdpm['starrating'] = ctpm.StarRating && ctpm.StarRating.replace(',','.')
        cdpm['pricetotal'] = (/\d+/.exec((jQuery('p.price.big-font') && jQuery('p.price.big-font').eq(0)).text() || '') || []).pop()
            || (/\d+/.exec((jQuery('div.price-total-line').find('[class="price"]').text() || '').replace('.','')) || []).pop()
        //cdpm['pricepp'] = (/\d+/.exec((jQuery('p.price.big-font') && jQuery('p.price.big-font').eq(1)).text() || '') || []).pop()

        jQuery('#defaultPaymentAgreed.go-to.payment-confirmation-button').click(function(e){
           cdpm.pageid = 'pay';
           dl.push({'event' : 'core_pay'});
        })
        
        window.CATTDL.CATTParams = cdpm;
    } catch(e) {
        cdl.error('GTM CATTDL Summary: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL Summary'})
        window.gatcDL && gatcDL.push({'event': 'CATTDL Summary'})
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>

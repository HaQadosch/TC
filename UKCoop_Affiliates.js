<script id='gtm_attrAffiliatesDirect'>
(function gtm_affilinateAffdirectDL(cdl, jQ) {
    'use strict';
    if (cdl && jQ) try {
        var cdpm = cdl.CATTParams;

        var articles = "";
        var execCategory = /_gaq.push\(\[\"_addItem\",\s*.*,\s*"([^"]*)"/i.exec(document.head.innerHTML) || "notFound";
/*
    HO:Accommodation                hotel only
    FO:Flight                         flight only
    ES&H:Eurostar,Accommodation
    AP:Parking
    DP:Flight,Accommodation
    TP:                             holidays
    TO:Transfer
*/
        var jQBookingRef = $('.REFERENCE > .CheckoutItemContentHeader > span').text() || "na";
        var jQFlightNameFO = $('.basketPriceLine > .Header:eq(0)').text() || "na";
        var jQHotelNameHO = $('.basketPriceLine > .Header:eq(0)').text() || "na";
        var jQPrice = $('.price').first().text().replace(/^./, '') || "0";
        var jQDepartureAirport = $('.flightDetail:eq(0) > span:eq(0)').text() || "na";
        var jQDestinationAirport = $('.flightDetail:eq(1) > span:eq(0)').text() || "na";
        var jQDepartureDate = $('.flightDetail:eq(0) > span:eq(1)').text() || "na";
        var jQDepartureDateHO = $('.CheckoutBasketTable th:eq(0) > span:eq(0)').text() || "na";
        var jQTourOperator = $('.airlineReferenceValue').text() || "na";
        var jQBoardBasis = $('.CheckoutBasketTable tr:eq(3) span:eq(0)').text() || "na";
        var jQCarrier = $('.SupplierLogo').attr('alt') || "na";
        var execPop = execCategory && execCategory.pop() || '';

        if (/$^/gi.test(execPop) || (/Accommodation/gi.test(execPop) && /Flight/gi.test(execPop))) {
            cdl.DL_attr_affdirect = {
                articlenb     : jQHotelNameHO || "1",
                productname : "Package booking for 2 Adults and 0 Children",
                category     : "Package > "+(jQDestinationAirport || ''),
                quantity     : 1,
                singlePrice : jQPrice || '',
                brand         : 'TourOperator',
                property1     : jQDepartureAirport || '',
                property2     : jQDestinationAirport || '',
                property3     : 'Duration',
                property4     : jQDepartureDate || '',
                property5     : jQBoardBasis || '',
                order         : jQBookingRef || '0',
                voucher     : '',
                season         : '',
                site         : 12397,
                ref         : cdpm.attribution && cdpm.attribution.utm_source || ''
            }
        } else if (/Accommodation/gi.test(execPop)){
            cdl.DL_attr_affdirect = {
                articlenb     : jQHotelNameHO || "1",
                productname : "Hotel Booking",
                category     : 'Hotels',
                quantity     : 1,
                singlePrice : jQPrice || '',
                brand         : 'TourOperator',
                property1     : (jQHotelNameHO || '').replace('&', ' and ') || '',
                property2     : 'Destination',
                property3     : 'Duration',
                property4     : jQDepartureDateHO || '',
                property5     : 'StarRating',
                order         : jQBookingRef || '0',
                voucher     : '',
                season         : '',
                site         : 12397,
                ref         : cdpm.attribution && cdpm.attribution.utm_source || ''
            }
        } else if (/Flight/gi.test(execPop)){
            cdl.DL_attr_affdirect = {
                articlenb     : jQFlightNameFO || "1",
                productname : "Flights",
                category     : 'Flights',
                quantity     : 1,
                singlePrice : jQPrice || '',
                brand         : jQTourOperator || 'TourOperator',
                property1     : (jQDepartureAirport || '').replace('&', ' and ') || '',
                property2     : jQDestinationAirport || '',
                property3     : 'Duration',
                property4     : jQDepartureDate || '',
                property5     : jQCarrier || '',
                order         : jQBookingRef || '0',
                voucher     : '',
                season         : '',
                site         : 12397,
                ref         : cdpm.attribution && cdpm.attribution.utm_source || ''
            }
        }
    } catch(e){
        cdl.error('GTM Attr: '+e)
    }
    return cdl && jQ && cdl.DL_attr_affdirect
}(window.CATTDL, window.jQuery));

(function gtm_attrAffiliatesAffDirect(cdl, jQ, afdl) {
    'use strict';
    if (cdl && jQ && afdl) try {
        var article = "ArticleNb="+(afdl.articlenb || '')+
            "&ProductName="+(afdl.productname || '')+
            "&Category="+(afdl.category || '')+
            "&Quantity="+(afdl.quantity || '')+
            "&SinglePrice="+(afdl.singlePrice || '')+
            "&Brand="+(afdl.brand || '')+
            "&Property1="+(afdl.property1 || '')+
            "&Property2="+(afdl.property2 || '')+
            "&Property3="+(afdl.property3 || '')+
            "&Property4="+(afdl.property4 || '')+
            "&Property5="+(afdl.property5 || '')+
            unescape("%0D%0A")
        var src = 'https://being.successfultogether.co.uk/registersale.asp?site='+(afdl.site || '')+((afdl.ref)?'&ref='+afdl.ref:'')+'&order='+(afdl.order || '')+((afdl.voucher)?'&vcode='+afdl.voucher:'')+'&basket='+escape(article)
        var img = jQ('<img width="1" height=1" style="border-style:none;" alt="" id="affilinet_pixel">').attr('src', src);
        img.appendTo('body');

        afdl.pixel = {
            article: article,
            src: src
        }
    } catch(e) {
        cdl.error('GTM Attr: '+e)
    }
    return cdl && jQ && afdl
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_attr_affdirect))
</script>

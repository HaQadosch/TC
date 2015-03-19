<script>
try{
    var utm_medium = ""; try { utm_medium=(/utm_medium=([^&]+)&?/gi).exec(document.location.search)[1] } catch (e) { utm_medium = ""; }
    var utm_source = ""; try { utm_source=(/utm_source=([^&]+)&?/gi).exec(document.location.search)[1] } catch (e) { utm_source = ""; }
    var utm_campaign = ''; try { utm_campaign=(/utm_campaign=([^&]+)&?/gi).exec(document.location.search)[1] } catch (e) { utm_campaign = ''; }
    var utm_term = ""; try { utm_term=(/utm_term=([^&]+)&?/gi).exec(document.location.search)[1] } catch (e) { utm_term = ""; }
    var gclid = false; try { gclid=(/gclid=/gi).test(document.location.search); if (gclid) utm_medium="gclid" } catch (e) { gclid = false; }

    var today = inAMonth = new Date(); inAMonth.setDate(today.getDate()+30);
    var prevXBCAttr = ""; try {prevXBCAttr = (/xbcattr=([^;]*)/gi).exec(document.cookie)[1]} catch (e){}
    document.cookie="xbcattr="+prevXBCAttr +"|"+ utm_medium+"; expires="+inAMonth.toUTCString()+"; path=/; domain=.neckermann-reisen.de;"

    if (utm_medium.match(/aff/gi)) {
        if (typeof console != 'undefined') console.log ('Attrribution: affiliates');
        var today = inAMonth = new Date(); inAMonth.setDate(today.getDate()+30); document.cookie="xbAFFPublisherID="+utm_term+"; expires="+inAMonth.toUTCString()+"; path=/; domain=.neckermann-reisen.de;"
    } else if (utm_medium.match(/met|part/gi)) {
        if (typeof console != 'undefined') console.log ('Attrribution: partners');
        var today = inAMonth = new Date(); inAMonth.setDate(today.getDate()+30); document.cookie="xbAFFPublisherID="+utm_term+"; expires="+inAMonth.toUTCString()+"; path=/; domain=.neckermann-reisen.de;"
    } else if (utm_medium.match(/TO/gi)) { // Display_Nah|Display_indi
        if (typeof console != 'undefined') console.log ('Attrribution: display MindShare');
    } else if (utm_medium.match(/ban|criteo|dis/gi)) {
        if (typeof console != 'undefined') console.log ('Attrribution: display');
        var today = inAMonth = new Date(); inAMonth.setDate(today.getDate()+30); document.cookie="xbLastBanSource="+utm_source+"; expires="+inAMonth.toUTCString()+"; path=/; domain=.neckermann-reisen.de;"
    } else if (utm_medium.match(/email|newsletter/gi)) {
        if (typeof console != 'undefined') console.log ('Attrribution: eCRM');
    } else if (utm_medium.match(/cp|ppc|gclid/gi)) {
        if (typeof console != 'undefined') console.log ('Attrribution: PPC');
    } else if (utm_medium.match(/soc|twitter/gi)) {
        if (typeof console != 'undefined') console.log ('Attrribution: social media');
    } else {
        if (typeof console != "undefined") console.log ("Attrribution: default");
    }
} catch (e){if (typeof console != 'undefined') console.log('DE NEC LP Code: '+e)}
</script>


try{
    var pubID = ""; try {pubID = (/xbAFFPublisherID=([^;]*)/gi).exec(document.cookie)[1]} catch (e){}
    var cAttr = ""; try {cAttr = (/xbcattr=([^;]*)/gi).exec(document.cookie)[1]} catch (e){}
    var xbLastBanSource = false; try {xbLastBanSource = /xbLastBanSource/i.test(document.cookie) && /xbLastBanSource=([^;]*)/i.exec(document.cookie)[1]} catch (e){xbLastBanSource = false}
    var paidChannels = /aff|met|part|agg|ban|criteo|dis|email|newsletter|cp|ppc|gclid|to|ret/i;
    var winningCampaign = "default";
    var utmcsr = false;
    try {
        utmcsr = /utmcsr/i.test(document.cookie) && /utmcsr=([^;]*)/i.exec(document.cookie)[1];
        utmcsr = utmcsr.substring(0, utmcsr.indexOf('|'));
    } catch (e){utmcsr = false}

    if ((paidChannels).test(cAttr)){
        var checkedBookingRef = ""
        if ((typeof window.CATTParams == 'undefined') || (typeof window.CATTParams.BookingRef == 'undefined') || (CATTParams.BookingRef == "")){
            checkedBookingRef = "empty_"+ Math.random()
        } else {
            checkedBookingRef = CATTParams.BookingRef
        }
        var camps = cAttr.split('|');
        for (var camp = camps.pop(); !(paidChannels).test(camp); camp = camps.pop()){}
        if ((/aff/i).test(camp)) {
            winningCampaign = 'affiliates';
            if(window.sessionStorage.getItem('voucher_nec') != null && window.sessionStorage.getItem('voucher_nec') != '' && utmcsr == 'affiliprint') {
                $('body').append('<img src="https://portal.affiliprint.com/pixel/sale/ver-1.1/sid-a0f94b84bc0606eccc865d34f29d5186/bon-' + window.sessionStorage.getItem('voucher_nec') + '/val-' + window.CATTParams.BookingValue + '/tax-0/inf-' + window.CATTParams.BookingRef + '/lang-de/ap.gif " width="1" height="1" style="display: none;" />');
            }else{
                var pageID = ("{{PageId}}" == "charterflight") ? "Flight" : "{{PageId}}";
                var makeSortString=function(){var a=unescape("%5B%F6%E4%FC%D6%C4%DC%C0%C1%C2%E0%E1%E2%C8%C9%CA%E8%E9%EA%EB%CC%CD%CE%EC%ED%EE%D2%D3%D4%F2%F3%F4%D9%DA%DB%F9%FA%FB%E7%5D");var b=new RegExp(a,"g");var c={"%F6":"o","%E4":"a","%FC":"u","%D6":"O","%C4":"A","%DC":"U","%C0":"A","%C1":"A","%C2":"A","%E0":"a","%E1":"a","%E2":"a","%C8":"E","%C9":"E","%CA":"E","%E8":"e","%E9":"e","%EA":"e","%EB":"e","%CC":"I","%CD":"I","%CE":"I","%EC":"i","%ED":"i","%EE":"i","%D2":"O","%D3":"O","%D4":"O","%F2":"o","%F3":"o","%F4":"o","%D9":"U","%DA":"U","%DB":"U","%F9":"u","%FA":"u","%FB":"u","%E7":"c","%5B":"","%5D":""};return function(a){return a.replace(b,function(a){return c[escape(a)]})}}();
                var pubID = ""; try {pubID = (/xbAFFPublisherID=([^;]*)/gi).exec(document.cookie)[1]} catch (e){}
                $('body').append('<IMG SRC="https://partners.webmasterplan.com/registersale.asp?site=5649&'+((pubID)?'&ref='+pubID:'')+'&order='+checkedBookingRef+'&vcode={{voucherCode}}&basket='+escape(makeSortString("ArticleNb={{IFF}}_Ticket&ProductName={{Brand}} {{PageId}} de {{Region}} {{nbPassengers}} Menschen&Category="+pageID+"&Quantity=1&SinglePrice={{levrev}}&Brand={{Brand}} {{TourOperator}}&Property1={{OutboundDepartAirport}}&Property2={{Location}}&Property3={{Duration}}&Property4={{RoomCategory}}&Property5={{Stars}}"+unescape("%0D%0A")))+'" WIDTH="1" HEIGHT="1" />')
            }
        }
        else if ((/met|part/i).test(camp)) {
            winningCampaign = 'partners';

            var pageID = ("{{PageId}}" == "charterflight") ? "Flight" : "{{PageId}}";
            var makeSortString=function(){var a=unescape("%5B%F6%E4%FC%D6%C4%DC%C0%C1%C2%E0%E1%E2%C8%C9%CA%E8%E9%EA%EB%CC%CD%CE%EC%ED%EE%D2%D3%D4%F2%F3%F4%D9%DA%DB%F9%FA%FB%E7%5D");var b=new RegExp(a,"g");var c={"%F6":"o","%E4":"a","%FC":"u","%D6":"O","%C4":"A","%DC":"U","%C0":"A","%C1":"A","%C2":"A","%E0":"a","%E1":"a","%E2":"a","%C8":"E","%C9":"E","%CA":"E","%E8":"e","%E9":"e","%EA":"e","%EB":"e","%CC":"I","%CD":"I","%CE":"I","%EC":"i","%ED":"i","%EE":"i","%D2":"O","%D3":"O","%D4":"O","%F2":"o","%F3":"o","%F4":"o","%D9":"U","%DA":"U","%DB":"U","%F9":"u","%FA":"u","%FB":"u","%E7":"c","%5B":"","%5D":""};return function(a){return a.replace(b,function(a){return c[escape(a)]})}}();
            var pubID = ""; try {pubID = (/xbAFFPublisherID=([^;]*)/gi).exec(document.cookie)[1]} catch (e){}
            $('body').append('<IMG SRC="https://partners.webmasterplan.com/registersale.asp?site=9746&ref=651&order='+checkedBookingRef+'&vcode={{voucherCode}}&basket='+escape(makeSortString("ArticleNb={{IFF}}&ProductName={{Brand}} {{PageId}} de {{Region}} {{nbPassengers}} Menschen&Category="+pageID+"&Quantity=1&SinglePrice={{levrev}}&Brand={{Brand}} {{TourOperator}}&Property1={{OutboundDepartAirport}}&Property2={{Location}}&Property3={{Duration}}&Property4={{RoomCategory}}&Property5={{Stars}}"+unescape("%0D%0A")))+'" WIDTH="1" HEIGHT="1" />')

        }
        else if ((/agg/i).test(camp)) winningCampaign = 'aggregator';
        else if ((/TO/i).test(camp)) { // Display_Nah|Display_indi
            winningCampaign = 'display MindShare';
            $('body').append('<scr'+'ipt src="HTTPS://bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&amp;ActivityID=258483&amp;rnd=' +((Math.random() * 1000000)+'')+ '&amp;tp_OrderID='+CATTParams.BookingRef+'&amp;tp_Currency=Euro&amp;tp_Amount='+CATTParams.BookingValue+'&amp;tp_DateofDeparture='+CATTParams.DeptDate.replace(/\//g, '-')+'&amp;tp_Gutschein=&amp;tp_Origin='+CATTParams.DepartureAirportSelected+'&amp;tp_Destination='+CATTParams.DestinationAirportSelected+'&amp;tp_Revenue=&amp;tp_Rubric=&amp;tp_Ticketprice=&amp;tp_BookingClass="></scr' + 'ipt>');
        }
        else if ((/ban|criteo|dis/i).test(camp)) {
            winningCampaign = 'display';
            xbLastBanSource && /esp/i.test(xbLastBanSource.split('|').pop()) && $('body').append('<script src="https://tracking.esp-srv.de/Trackers/eventtracker/a:5446413e-9d60-4b60-b6b6-7c086def3350/e:54464335-e6f0-4b89-94fd-7f396def3350/uid:'+window.CATTParams.BookingRef+'/value:'+window.CATTParams.BookingValue+'"></script>')
            if(xbLastBanSource){
                if(/metrigo/i.test(xbLastBanSource.split('|').pop())){
                    // Queue for API calls
                    window._mstack = window._mstack || []
                    window._mstack.push(function() {  DELIVERY.DataLogger.logConversion({
                            shop_id: 1527,
                            type: 'sale',
                            order_id: window.CATTParams.BookingRef,
                            source: 0,
                            products: [
                                {external_id: window.CATTParams.AccomCode }
                            ]
                        });
                    });

                    (function() {
                        var s = document.createElement('script');
                        s.async = true;
                        var h = (("https:" == document.location.protocol) ? "https://" : "http://");
                        s.src = h + 'rtb.metrigo.com/delivery/sync_and_log.js'
                        var c = document.getElementsByTagName('script')[0];
                        c.parentNode.insertBefore(s, c);
                    })();
                }
            }
        }
        else if ((/email|newsletter/i).test(camp)) winningCampaign = 'eCRM';
        else if ((/cp|ppc|gclid/i).test(camp)) winningCampaign = 'PPC';
        else if ((/soc|twitter/i).test(camp)) winningCampaign = 'social';
        else if (/ret/i.test(camp)) {
            // Tracking is done in criteo tag
            winningCampaign = 'retargeting';
        }
    }

    window._gaq = window._gaq || [];
    window._gaq.push(['CATTGATC._setAccount', 'UA-29069538-1']);
    window._gaq.push(['CATTGATC._setDomainName', 'neckermann-reisen.de']);
    window._gaq.push(['_gat._anonymizeIp']);
    window._gaq.push(['CATTGATC._setAllowLinker', true]);
    window._gaq.push(['CATTGATC._addOrganic', 'suche.t-online.de', 'q'], ['CATTGATC._addOrganic', 'suche.web.de', 'q'], ['CATTGATC._addOrganic', 'suche.gmx.net', 'q'], ['CATTGATC._addOrganic', 'search.1und1.de', 'q'], ['CATTGATC._addOrganic', 'suche.freenet.de', 'query']);
    window._gaq.push(['CATTGATC._trackEvent', 'BkgCookieAttrib', 'BookingRef='+checkedBookingRef, 'Attr='+camp+'->'+winningCampaign+'|'+pubID+'|'+'_path='+cAttr, 1, true]);
} catch (e){if (typeof console != "undefined") console.log("DE NEC Conf Cookie Attr: "+e)}

/*
 *
 * Affilinet
 *
 */
<script id='gtm_affilinateAff'>
(function gtm_affilinateAffDL(cdl, jQ) {
    'use strict';
    if (cdl && jQ) try {
        var cdpm = cdl.CATTParams;
        cdl.DL_attr_aff = {
            articlenb     : cdpm.accomcode || "1",
            productname : "Flights",
            category     : 'Flights',
            quantity     : 1,
            singlePrice : cdpm.bookingvalue || '',
            brand         : cdpm.touroperator || '',
            property1     : cdpm.departureairportselected || '',
            property2     : cdpm.destinationairportselected || '',
            property3     : cdpm.duration || '',
            property4     : cdpm.deptdate || '',
            property5     : cdpm.carrier || '',
            order         : cdpm.bookingref || '0',
            voucher     : cdpm.voucher || '',
            site         : '5649',
            ref         : cdpm.attribution && cdpm.attribution.utm_source || ''
        };
    } catch(e){
        cdl.error('GTM Attr: '+e);
    }
    return cdl && jQ && cdl.DL_attr_aff;
}(window.CATTDL, window.jQuery));

(function gtm_attrAffiliatesAff(cdl, jQ, afdl) {
    'use strict';
    if (cdl && jQ) try {
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
            unescape("%0D%0A");
        var src = 'https://partners.webmasterplan.com/registersale.asp?site='+(afdl.site || '')+((afdl.ref)?'&ref='+afdl.ref:'')+'&order='+(afdl.order || '')+((afdl.voucher)?'&vcode='+afdl.voucher:'')+'&basket='+escape(article);
        var img = jQ('<img width="1" height=1" style="border-style:none;" alt="" id="affilinet_pixel">').attr('src', src);
        img.appendTo('body');

        afdl.pixel = {
            article: article,
            src: src
        };
    } catch(e) {
        cdl.error('GTM Attr: '+e);
    }
    return cdl && jQ && afdl;
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_attr_aff))
</script>

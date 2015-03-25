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
 * Attribution eSP
 *
 */
<script id='gtm_eSP'>
(function gtm_attreSPDL(cdl, jQ) {
    'use strict';
    if (cdl && jQ) try {
        var cdpm = cdl.CATTParams;
        cdl.DL_eSPAttr = {
            a   : '5446413e-9d60-4b60-b6b6-7c086def3350',
            e   : '54464335-e6f0-4b89-94fd-7f396def3350',
            uid : cdpm.bookingref || '',
            value : cdpm.bookingvalue || '',
            script  : {
                status  : 'not fired',
                src :   '//tracking.esp-srv.de/Trackers/eventtracker/a:_a_/e:_e_/uid:_u_/value:_v_'
            }
        };
    } catch(e){
        cdl.error('GTM Attr eSP DL: '+e);
    }
    return cdl && jQ && cdl.DL_eSPAttr;
}(window.CATTDL, window.jQuery));

(function gtm_attreSP(cdl, jQ, esdl) {
    'use strict';
    if (cdl && jQ && esdl) try {
        var src = esdl.script && esdl.script.src.replace(/_a_/, esdl.a || '').replace(/_e_/, esdl.e || '').replace(/_u_/, esdl.uid || '').replace(/_v_/, esdl.value || '') || '';
        src && jQ.getScript && jQ.getScript(src, function gtm_attrespScript(){
            try {
                esdl.script = {
                    status: 'fired',
                    src: src
                };
            } catch(err) {
                cdl.error && cdl.error('GTM esp Script', err);
            }
        })
    } catch(e) {
        cdl.error('GTM Attr eSP: '+e);
    }
    return cdl && jQ && esdl;
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_eSPAttr))
</script>

/*
 *
 * All pageview eSP
 *
 */
try {
    (function () {
        var esp = document.createElement('script');
        esp.type = 'text/javascript';
        esp.async = true;
        var wca_event = '';
        wca_event += '{"PageView":{';
        wca_event += '"Destination":"' + window.CATTParams.Destination + '",';
        wca_event += '"LOB":"' + window.CATTParams.LOB + '",';
        wca_event += '"PaxAdult":"' + window.CATTParams.PaxAdult + '",';
        wca_event += '"PaxChild":"' + window.CATTParams.PaxChild + '",';
        wca_event += '"BookingValue":"' + window.CATTParams.BookingValue + '",';
        wca_event += '"PageID":"' + window.CATTParams.PageID + '"';
        wca_event += '}}';
        var s = document.getElementsByTagName('script')[0];
        esp.src = '//tracking.esp-srv.de/rtg/wca/a:5446413e-9d60-4b60-b6b6-7c086def3350/e:544e07ba-4b68-4ac5-aac0-3daf6def3350/wca_event:' + wca_event + '/';
        s.parentNode.insertBefore(esp, s);
    })();
} catch (e) { if (typeof console != "undefined") console.log("DE NEC eSP: " + e) }

<script id='gtm_AlleSP'>
(function gtm_eSPDL(cdl, jQ) {
    'use strict';
    if (cdl && jQ) try {
        var cdpm = cdl.CATTParams;
        cdl.DL_eSP = {
            a   : '5446413e-9d60-4b60-b6b6-7c086def3350',
            e   : '544e07ba-4b68-4ac5-aac0-3daf6def3350',
            wca_event : {'PageView':{
                'Destination': cdpm.destination || '',
                'LOB': cdpm.lob || '',
                'PaxAdult': cdpm.paxadult || '',
                'PaxChild': cdpm.paxchild || '',
                'BookingValue': cdpm.bookingvalue || '',
                'PageID': cdpm.pageid || ''
            }},
            script  : {
                status  : 'not fired',
                src :   '//tracking.esp-srv.de/rtg/wca/a:_a_/e:_e_/wca_event:_v_/'
            }
        };
    } catch(e){
        cdl.error('GTM eSP DL: '+e);
    }
    return cdl && jQ && cdl.DL_eSP;
}(window.CATTDL, window.jQuery));

(function gtm_eSP(cdl, jQ, esdl) {
    'use strict';
    if (cdl && jQ && esdl) try {
        var src = esdl.script && esdl.script.src.replace(/_a_/, esdl.a || '').replace(/_e_/, esdl.e || '').replace(/_v_/, JSON && JSON.stringify && JSON.stringify(esdl.wca_event || '{}') || '') || '';
        src && jQ.getScript && jQ.getScript(src, function gtm_espScript(){
            try {
                esdl.script = {
                    status: 'fired',
                    src: src
                };
            } catch(err) {
                cdl.error && cdl.error('GTM esp Script', err);
            }
        })
    } catch(e) {
        cdl.error('GTM eSP: '+e);
    }
    return cdl && jQ && esdl;
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_eSP))
</script>


/*
 *
 * All booking eSP
 *
 */
 try{
     $('body').append('<script src="https://tracking.esp-srv.de/Trackers/eventtracker/a:5446413e-9d60-4b60-b6b6-7c086def3350/e:5446474a-3514-40b2-80b1-07a16def3350/uid:'+window.CATTParams.BookingRef+'/value:'+window.CATTParams.BookingValue+'"></script>');

     (function () {
         var esp = document.createElement('script');
         esp.type = 'text/javascript';
         esp.async = true;
         var wca_event = '';
         wca_event += '{"Booking":{';
         wca_event += '"Destination":"' + window.CATTParams.Destination + '",';
         wca_event += '"LOB":"' + window.CATTParams.LOB + '",';
         wca_event += '"PaxAdult":"' + window.CATTParams.PaxAdult + '",';
         wca_event += '"PaxChild":"' + window.CATTParams.PaxChild + '",';
         wca_event += '"BookingValue":"' + window.CATTParams.BookingValue + '",';
         wca_event += '"PageID":"' + window.CATTParams.PageID + '"';
         wca_event += '}}';
         var s = document.getElementsByTagName('script')[0];
         esp.src = '//tracking.esp-srv.de/rtg/wca/a:5446413e-9d60-4b60-b6b6-7c086def3350/e:544e07ba-4b68-4ac5-aac0-3daf6def3350/wca_event:' + wca_event + '/';
         s.parentNode.insertBefore(esp, s);
     })();
 }catch(e){console && console.log && console.log('DE NEC Conf eSP: '+e);}



<script id='gtm_AlleSP'>
(function gtm_eSPDL(cdl, jQ) {
    'use strict';
    if (cdl && jQ) try {
        var cdpm = cdl.CATTParams;
        cdl.DL_eSP = {
            a   : '5446413e-9d60-4b60-b6b6-7c086def3350',
            e   : '5446474a-3514-40b2-80b1-07a16def3350',
            wca_a : '5446413e-9d60-4b60-b6b6-7c086def3350',
            wca_e: '544e07ba-4b68-4ac5-aac0-3daf6def3350',
            uid : cdpm.bookingref || '',
            value : cdpm.bookingvalue || '',
            wca_event : {'Booking':{
                'Destination': cdpm.destination || '',
                'LOB': cdpm.lob || '',
                'PaxAdult': cdpm.paxadult || '',
                'PaxChild': cdpm.paxchild || '',
                'BookingValue': cdpm.bookingvalue || '',
                'PageID': cdpm.pageid || ''
            }},
            script  : {
                status  : 'not fired',
                src :   '//tracking.esp-srv.de/Trackers/eventtracker/a:_a_/e:_e_/uid:_u_/value:_v_'
            },
            wca_script  : {
                status  : 'not fired',
                src :   '//tracking.esp-srv.de/rtg/wca/a:_wa_/e:_we_/wca_event:_wv_/'
            }

        };
    } catch(e){
        cdl.error('GTM eSP DL: '+e);
    }
    return cdl && jQ && cdl.DL_eSP;
}(window.CATTDL, window.jQuery));

(function gtm_eSP(cdl, jQ, esdl) {
    'use strict';
    if (cdl && jQ && esdl) try {
        var src = esdl.script && esdl.script.src.replace(/_a_/, esdl.a || '').replace(/_e_/, esdl.e || '').replace(/_u_/, esdl.uid || '').replace(/_v_/, esdl.value || '') || '';
        src && jQ.getScript && jQ.getScript(src, function gtm_espScript(){
            try {
                esdl.script = {
                    status: 'fired',
                    src: src
                };
            } catch(err) {
                cdl.error && cdl.error('GTM esp Script', err);
            }
        })
        src = esdl.wca_script && esdl.wca_script.src.replace(/_wa_/, esdl.wca_a || '').replace(/_we_/, esdl.wca_e || '').replace(/_wv_/, JSON && JSON.stringify && JSON.stringify(esdl.wca_event || '{}') || '') || '';
        src && jQ.getScript && jQ.getScript(src, function gtm_espScript(){
            try {
                esdl.wca_script = {
                    status: 'fired',
                    src: src
                };
            } catch(err) {
                cdl.error && cdl.error('GTM esp Script', err);
            }
        })
    } catch(e) {
        cdl.error('GTM Attr eSP: '+e);
    }
    return cdl && jQ && esdl;
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_eSP))
</script>

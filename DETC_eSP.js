try{
    var utm_medium = "";     try { utm_medium= /utm_medium=/i.test(document.location.search) && /utm_medium=(\w+)&?/gi.exec(document.location.search)[1] || ""} catch (e) { utm_medium = ""; }
    var utm_source = "";     try { utm_source= /utm_source=/i.test(document.location.search) && /utm_source=(\w+)&?/gi.exec(document.location.search)[1] || ""} catch (e) { utm_source = ""; }
    var utm_campaign = '';     try { utm_campaign= /utm_campaign=/i.test(document.location.search) && /utm_campaign=(\w+)&?/gi.exec(document.location.search)[1] || ""} catch (e) { utm_campaign = ''; } // get the publisher ID for Affilinet
    var utm_term = "";         try { utm_term= /utm_term=/i.test(document.location.search) && /utm_term=([^&]+)&?/gi.exec(document.location.search)[1] || ""} catch (e) { utm_term = ""; }
    var gclid = false;         try { gclid=/gclid=/i.test(document.location.search); if (gclid) utm_medium="gclid" } catch (e) { gclid = false; }

    var today = inAMonth = new Date(); inAMonth.setDate(today.getDate()+30);
    var prevXBCAttr = ""; try {prevXBCAttr = /xbcattr=/i.test(document.cookie) && /xbcattr=([^;]*)/gi.exec(document.cookie)[1]} catch (e){}
    if (!/^$/i.test(utm_medium) || (/google|yahoo|bing|web|t-online|gmx/.test(document.referrer.split('?')[0]))) document.cookie="xbcattr="+((prevXBCAttr)?prevXBCAttr+"|":"")+((utm_medium)?utm_medium:"")+"; expires="+inAMonth.toUTCString()+"; path=/; domain=.thomascook.de;"

    if (/aff/i.test(utm_medium)) {
        console && console.log && console.log ('Attrribution: affiliates');
        var today = inAMonth = new Date(); inAMonth.setDate(today.getDate()+30); document.cookie="xbAFFPublisherID="+utm_campaign+"; expires="+inAMonth.toUTCString()+"; path=/; domain=.thomascook.de;"
        var prevXBAFFCSrc = ""; try {prevXBAFFCSrc = /xbcAFFSrc/i.test(document.cookie) && /xbcAFFSrc=([^;]*)/gi.exec(document.cookie)[1]} catch (e){}
        var today = inAMonth = new Date(); inAMonth.setDate(today.getDate()+30); document.cookie="xbcAFFSrc="+((prevXBAFFCSrc)?prevXBAFFCSrc +"|":"")+ utm_source+"; expires="+inAMonth.toUTCString()+"; path=/; domain=.thomascook.de;"
    } else if (/met|part/i.test(utm_medium)) {
        console && console.log && console.log ('Attrribution: partners');
        var today = inAMonth = new Date(); inAMonth.setDate(today.getDate()+30); document.cookie="xbAFFPublisherID="+utm_term+"; expires="+inAMonth.toUTCString()+"; path=/; domain=.thomascook.de;"
    } else if (/ban|criteo|dis/i.test(utm_medium)) {
        var prevXBBANCSrc = ""; try {prevXBBANCSrc = /xbcBANSrc/i.test(document.cookie) && /xbcBANSrc=([^;]*)/gi.exec(document.cookie)[1]} catch (e){}
        var today = inAMonth = new Date(); inAMonth.setDate(today.getDate()+30); document.cookie="xbcBANSrc="+((prevXBBANCSrc)?prevXBBANCSrc +"|":"")+ utm_source+"; expires="+inAMonth.toUTCString()+"; path=/; domain=.thomascook.de;"
    } else if (/email|newsletter/i.test(utm_medium)) {
        console && console.log && console.log ('Attrribution: eCRM');
    } else if (/cp|ppc|gclid/i.test(utm_medium)) {
        console && console.log && console.log ('Attrribution: PPC');
    } else if (/soc|twitter/i.test(utm_medium)) {
        console && console.log && console.log ('Attrribution: social media');
    } else {
        console && console.log && console.log ("Attrribution: default");
    }
} catch (e){console && console.log && console.log('DE TC LP Code: '+e)}


try{
    var pubID = ""; try {pubID = /xbAFFPublisherID=/i.test(document.cookie) && /xbAFFPublisherID=([^;]*)/i.exec(document.cookie)[1]} catch (e){}
    var cAttr = ""; try {cAttr = /xbcattr=/i.test(document.cookie) && /xbcattr=([^;]*)/i.exec(document.cookie)[1]} catch (e){}
    var xbcBANSrc = false; try {xbcBANSrc = /xbcBANSrc/i.test(document.cookie) && /xbcBANSrc=([^;]*)/i.exec(document.cookie)[1]} catch (e){xbcBANSrc = false}
    var xbcAFFSrc = false; try {xbcAFFSrc = /xbcAFFSrc/i.test(document.cookie) && /xbcAFFSrc=([^;]*)/i.exec(document.cookie)[1]} catch (e){xbcAFFSrc = false}
    var paidChannels = /aff|met|part|agg|ban|criteo|dis|email|newsletter|cp|ppc|gclid|ret/i;
    var bookingRefTemp = window.CATTParams.BookingRef;
//    Removing mechanism because booking were tracking several times
//    Getting BookingRef (should be filled with a random id if empty)
//    try{
//        bookingRefTemp = checkedBookingRef;
//        if(bookingRefTemp == '') bookingRefTemp = window.CATTParams.BookingRef;
//    }catch(e){
//        bookingRefTemp = window.CATTParams.BookingRef;
//    }
    var winningCampaign = "default";
    if ((paidChannels).test(cAttr)){
        var camps = cAttr.split('|');
        for (var camp = camps.pop(); !paidChannels.test(camp); camp = camps.pop()){}
        if (/aff/i.test(camp)) {
            winningCampaign = 'affiliates';
            var site = "3578";
            var article = "";
            if (window.tmPageId == "419"){ // DAME Hotels
                article = "ArticleNb="+(window.CATTParams.AccomCode || "1")+"&ProductName=Hotel Booking&Category=Hotels&Quantity=1&SinglePrice="+window.CATTParams.BookingValue+"&Brand="+window.CATTParams.TourOperator+"&Property1="+window.CATTParams.AccomName+"&Property2="+window.CATTParams.Destination+"&Property3="+window.CATTParams.Duration+"&Property4="+window.CATTParams.DeptDate+"&Property5=click";
            } else if (/hotel/i.test(window.CATTParams.LOB)){ // Hotel on Main page
                article = "ArticleNb="+(window.CATTParams.AccomCode || "1")+"&ProductName=Hotel Booking&Category=Hotels&Quantity=1&SinglePrice="+window.CATTParams.BookingValue+"&Brand="+window.CATTParams.TourOperator+"&Property1="+window.CATTParams.AccomName+"&Property2="+window.CATTParams.Destination+"&Property3="+window.CATTParams.Duration+"&Property4="+window.CATTParams.DeptDate+"&Property5=click";
            } else if (/flight/i.test(window.CATTParams.LOB)){ // Flight
                article = "ArticleNb="+(window.CATTParams.AccomCode || "1")+"&ProductName=Flights&Category=Flights&Quantity=1&SinglePrice="+window.CATTParams.BookingValue+"&Brand="+window.CATTParams.TourOperator+"&Property1="+window.CATTParams.DepartureAirportSelected+"&Property2="+window.CATTParams.DestinationAirportSelected+"&Property3="+window.CATTParams.Duration+"&Property4="+window.CATTParams.DeptDate+"&Property5=click";
            } else { // Packages
                article = "ArticleNb="+(window.CATTParams.AccomCode || "1")+"&ProductName=Package booking for "+window.CATTParams.PaxAdult+" Adults and "+window.CATTParams.PaxChild+" Children&Category=Package > "+window.CATTParams.DestinationAirportSelected+"&Quantity=1&SinglePrice="+window.CATTParams.BookingValue+"&Brand="+window.CATTParams.TourOperator+"&Property1="+window.CATTParams.DepartureAirportSelected+"&Property2="+window.CATTParams.DestinationAirportSelected+"&Property3="+window.CATTParams.Duration+"&Property4="+window.CATTParams.DeptDate+"&Property5=click";
            }
            document.write('<IMG SRC="https://partners.webmasterplan.com/registersale.asp?site='+site+((pubID)?'&ref='+pubID:'')+'&order='+bookingRefTemp+'&basket='+escape(article)+'%0D%0A" WIDTH="1" HEIGHT="1" />')
        }
        else if (/met|part/i.test(camp)) {
            winningCampaign = 'partners';
            var article = "";
            if (window.tmPageId == "419"){ // DAME Hotels
                article = "ArticleNb="+(window.CATTParams.AccomCode || "1")+"&ProductName=Hotel Booking&Category=Hotels&Quantity=1&SinglePrice="+window.CATTParams.BookingValue+"&Brand="+window.CATTParams.TourOperator+"&Property1="+window.CATTParams.AccomName+"&Property2="+window.CATTParams.Destination+"&Property3="+window.CATTParams.Duration+"&Property4="+window.CATTParams.DeptDate+"&Property5=click";
            } else if (/hotel/i.test(window.CATTParams.LOB)){ // Hotel on Main page
                article = "ArticleNb="+(window.CATTParams.AccomCode || "1")+"&ProductName=Hotel Booking&Category=Hotels&Quantity=1&SinglePrice="+window.CATTParams.BookingValue+"&Brand="+window.CATTParams.TourOperator+"&Property1="+window.CATTParams.AccomName+"&Property2="+window.CATTParams.Destination+"&Property3="+window.CATTParams.Duration+"&Property4="+window.CATTParams.DeptDate+"&Property5=click";
            } else if (/flight/i.test(window.CATTParams.LOB)){ // Flight
                article = "ArticleNb="+(window.CATTParams.AccomCode || "1")+"&ProductName=Flights&Category=Flights&Quantity=1&SinglePrice="+window.CATTParams.BookingValue+"&Brand="+window.CATTParams.TourOperator+"&Property1="+window.CATTParams.DepartureAirportSelected+"&Property2="+window.CATTParams.DestinationAirportSelected+"&Property3="+window.CATTParams.Duration+"&Property4="+window.CATTParams.DeptDate+"&Property5=click";
            } else { // Packages
                article = "ArticleNb="+(window.CATTParams.AccomCode || "1")+"&ProductName=Package booking for "+window.CATTParams.PaxAdult+" Adults and "+window.CATTParams.PaxChild+" Children&Category=Package > "+window.CATTParams.DestinationAirportSelected+"&Quantity=1&SinglePrice="+window.CATTParams.BookingValue+"&Brand="+window.CATTParams.TourOperator+"&Property1="+window.CATTParams.DepartureAirportSelected+"&Property2="+window.CATTParams.DestinationAirportSelected+"&Property3="+window.CATTParams.Duration+"&Property4="+window.CATTParams.DeptDate+"&Property5=click";
            }
            document.write('<IMG SRC="https://partners.webmasterplan.com/registersale.asp?site=9625'+((pubID)?'&ref='+pubID:'')+'&order='+bookingRefTemp+'&basket='+escape(article)+'%0D%0A" WIDTH="1" HEIGHT="1" />');

            //**** Trivago-Pixel || stschaefer 25.04.2014 **************************************************************
            function getCookie(name)
            {
                var re = new RegExp(name + "=([^;]+)");
                var value = re.exec(document.cookie);
                return (value != null) ? unescape(value[1]) : null;
            }

            var domain = '';
            if (/utmcsr=trivago_at/i.test(document.cookie) || pubID == '620808'){
                domain = 'AT';
            }else if (/utmcsr=trivago/i.test(document.cookie) || pubID == '394965'){
                domain = 'DE';
            }
            if(domain != ''){
                var ref = '277';                                                                                                 // statisch - unsere PartnerID bei Trivago
                var hotel = 'tt_' + window.CATTParams.AccomCode;                                                                 // Hotel IFF Code
                var arrivalTemp = window.CATTParams.DeptDate.split('/');
                var arrival = new Date(Date.UTC((arrivalTemp[2]), (arrivalTemp[1]-1), arrivalTemp[0])).getTime() / 1000;         // UNIX timestamp
                var departureTemp = window.CATTParams.RetDate.split('/');
                var departure = new Date(Date.UTC((departureTemp[2]), (departureTemp[1]-1), departureTemp[0])).getTime() / 1000; // UNIX timestamp
                var volume = parseFloat(window.CATTParams.BookingValue).toFixed(2);                                              // BookingValue
                var currency = 'EUR';
                var booking_id = bookingRefTemp;                                                                   // BookingRef
                var bucket_id = getCookie('utmccn').split('|')[0].split('-')[1];                                                 // siehe utm_campaign im Link, wenn 'hotel-3' dann 3
                document.write('<img height="1" width="1" style="border-style:none;" alt="" src="https://secde.trivago.com/page_check.php?pagetype=track&ref='+ref+'&hotel='+hotel+'&arrival='+arrival+'&departure='+departure+'&volume='+volume+'&currency='+currency+'&domain='+domain+'&booking_id='+booking_id+'&bucket_id='+bucket_id+'"/> ')
            }
            //**********************************************************************************************************

        }
        else if (/agg/i.test(camp)) winningCampaign = 'aggregator';
        else if (/ban|criteo|dis/i.test(camp)) {
            winningCampaign = 'display';
            xbcBANSrc && /esp/i.test(xbcBANSrc.split('|').pop()) && $('body').append('<script src="https://tracking.esp-srv.de/Trackers/eventtracker/a:527d0b5a-ee20-4b5e-81b2-5f866def3350/e:527d0b94-7760-4148-8484-60a66def3350/uid:'+bookingRefTemp+'/value:'+window.CATTParams.BookingValue+'"></script>')
        }
        else if (/email|newsletter/i.test(camp)) winningCampaign = 'eCRM';
        else if (/cp|ppc|gclid/i.test(camp)) winningCampaign = 'PPC';
        else if (/soc|twitter/i.test(camp)) winningCampaign = 'social';
        else if (/ret/i.test(camp)) {
            // Tracking is done in criteo tag
            winningCampaign = 'retargeting';
        }
    }

    window._gaq = window._gaq || [];
    window._gaq.push(['CATTGATC._setAccount', 'UA-29010521-1']);
    window._gaq.push(['CATTGATC._setDomainName', 'thomascook.de']);
    window._gaq.push(['_gat._anonymizeIp']);
    window._gaq.push(['CATTGATC._setAllowLinker', true]);
    window._gaq.push(['CATTGATC._trackEvent', 'BkgCookieAttrib', 'BookingRef='+bookingRefTemp, 'Attr='+camp+'->'+winningCampaign+'|'+pubID+'|'+'_path='+cAttr, 1, true]);
} catch (e){console && console.log && console.log("DE TC Conf Cookie Attr: "+e)}


/*
 *
 * Attribution eSP
 *
 */
"https://tracking.esp-srv.de/Trackers/eventtracker/a:527d0b5a-ee20-4b5e-81b2-5f866def3350/e:527d0b94-7760-4148-8484-60a66def3350/uid:'+bookingRefTemp+'/value:'+window.CATTParams.BookingValue"


<script id='gtm_eSP'>
(function gtm_attreSPDL(cdl, jQ) {
    'use strict';
    if (cdl && jQ) try {
        var cdpm = cdl.CATTParams;
        cdl.DL_eSPAttr = {
            a   : '527d0b5a-ee20-4b5e-81b2-5f866def3350',
            e   : '527d0b94-7760-4148-8484-60a66def3350',
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
        });
    } catch(e) {
        cdl.error('GTM Attr eSP: '+e);
    }
    return cdl && jQ && esdl;
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_eSPAttr));
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
        esp.src = '//tracking.esp-srv.de/rtg/wca/a:527d0b5a-ee20-4b5e-81b2-5f866def3350/e:534e98a3-6a94-473b-bab1-62376def3350/wca_event:' + wca_event + '/';
        s.parentNode.insertBefore(esp, s);
    })();
} catch (e) { if (typeof console != "undefined") console.log("DE TC eSP: " + e) }

<script id='gtm_AlleSP'>
(function gtm_eSPDL(cdl, jQ) {
    'use strict';
    if (cdl && jQ) try {
        var cdpm = cdl.CATTParams;
        cdl.DL_eSP = {
            a   : '527d0b5a-ee20-4b5e-81b2-5f866def3350',
            e   : '534e98a3-6a94-473b-bab1-62376def3350',
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
        });
    } catch(e) {
        cdl.error('GTM eSP: '+e);
    }
    return cdl && jQ && esdl;
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_eSP));
</script>


/*
 *
 * All booking eSP
 *
 */
try{
    $('body').append('<script src="https://tracking.esp-srv.de/Trackers/eventtracker/a:527d0b5a-ee20-4b5e-81b2-5f866def3350/e:527d0ba1-ac18-4c74-a603-60b46def3350/uid:'+window.CATTParams.BookingRef+'/value:'+window.CATTParams.BookingValue+'"></script>');

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
        esp.src = '//tracking.esp-srv.de/rtg/wca/a:527d0b5a-ee20-4b5e-81b2-5f866def3350/e:534e98a3-6a94-473b-bab1-62376def3350/wca_event:' + wca_event + '/';
        s.parentNode.insertBefore(esp, s);
    })();
}catch(e){console && console.log && console.log('TC DE Conf ESP: '+e);}



<script id='gtm_ConfeSP'>
(function gtm_eSPDL(cdl, jQ) {
    'use strict';
    if (cdl && jQ) try {
        var cdpm = cdl.CATTParams;
        cdl.DL_eSP = {
            a   : '527d0b5a-ee20-4b5e-81b2-5f866def3350',
            e   : '527d0ba1-ac18-4c74-a603-60b46def3350',
            wca_a : '527d0b5a-ee20-4b5e-81b2-5f866def3350',
            wca_e: '534e98a3-6a94-473b-bab1-62376def3350',
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
        });
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
        });
    } catch(e) {
        cdl.error('GTM Attr eSP: '+e);
    }
    return cdl && jQ && esdl;
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_eSP));
</script>

/*
217 Generic
435 Main TIB
209 Main HP
210 SRP Dest
211 SRP Accom
212 Accom Detail
213 PayPay
214 Conf
215 X 404
216 X 500
275 SEM Generic
440 SEO Generic

*/

// Crazy Egg, all pages
try{
    setTimeout(
        function(){
            var c=document.createElement("script");
            var d=document.getElementsByTagName('script')[0];
            c.src=document.location.protocol+"//dnn506yrbagrg.cloudfront.net/pages/scripts/0012/5391.js?"+Math.floor(new Date().getTime()/3600000);
            c.async=true;
            c.type="text/javascript";
            d.parentNode.insertBefore(c,d)
        },
        1
    );
} catch (e){if (typeof console != "undefined") console.log("AT NEC CrazyEgg: "+e)}


// NetSociety All pages
(function tm_NetsocietyPixel(ctpm, jQ){
    'use strict';
    if (ctpm && jQ) try {
        var depDateYYYYMMDD = (ctpm.DeptDate || '').replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3$2$1') || '';
        var todayMS = new Date();
        var todayYYYYMMDD = (todayMS.getFullYear()+""+(todayMS.getMonth()+1)+""+todayMS.getDate()) || '';
        var bookingValue= parseInt(ctpm.BookingValue || "1");
        var dataTracked = 'destination='+(ctpm.Destination || '')+
            ';departureairport='+(ctpm.DepartureAirportSelected || '')+
            ';departuredate='+depDateYYYYMMDD+
            ';duration='+parseInt(ctpm.Duration || '0')+
            ';bookingdate='+todayYYYYMMDD+
            ';resort='+(ctpm.ResortSearched || ctpm.AccomResort || '')+
            ';children='+(ctpm.PaxChild || '')+
            ';accomCode='+(ctpm.AccomCode || '');
        if (/neckermann-reisen\.at/i.test(document.location.host || '')){
            var img = jQ('<img width="1" height=1" style="border-style:none;" alt="" id="NetsocietyPixel">');
            img.attr('src', '//googleads.g.doubleclick.net/pagead/viewthroughconversion/995981158/?value='+bookingValue+'&label=uvvJCMLp6QMQ5u712gM&guid=ON&script=0&data='+escape(dataTracked));
            img.appendTo('body');


            if (/booking/i.test(ctpm.PageID || '')){
            img = jQ('<img width="1" height=1" style="border-style:none;" alt="" id="NetsocietyPixel">');
            img.attr('src', '//googleads.g.doubleclick.net/pagead/conversion/995981158/?value='+bookingValue+'&label=6rqWCMro6QMQ5u712gM&guid=ON&script=0');
            img.appendTo('body');
            }
        }
    } catch (e){
        if (typeof console != "undefined") console.log("AT NEC NetSociety: "+e)
    }
}(window.CATTParams, window.jQuery))

// Attribution in Landing pages
try{
    var utm_medium = ""; try { utm_medium=(/utm_medium=(\w+)&?/gi).exec(document.location.search)[1] } catch (e) { utm_medium = ""; }
    var utm_source = ""; try { utm_source=(/utm_source=(\w+)&?/gi).exec(document.location.search)[1] } catch (e) { utm_source = ""; }
    var utm_campaign = ''; try { utm_campaign=(/utm_campaign=(\w+)&?/gi).exec(document.location.search)[1] } catch (e) { utm_campaign = ''; } // get the publisher ID for Affilinet
    var gclid = false; try { gclid=(/gclid=/gi).test(document.location.search); if (gclid) utm_medium="gclid" } catch (e) { gclid = false; }

    var today = inAMonth = new Date(); inAMonth.setDate(today.getDate()+30);
    var prevXBCAttr = ""; try {prevXBCAttr = (/xbcattr=([^;]*)/gi).exec(document.cookie)[1]} catch (e){}
    document.cookie="xbcattr="+prevXBCAttr +"|"+ utm_medium+"; expires="+inAMonth.toUTCString()+"; path=/; domain=.neckermann-reisen.at;"

    if (utm_medium.match(/aff/gi)) {
        if (typeof console != "undefined") console.log ("Attrribution: affiliates");
        var today = inAMonth = new Date(); inAMonth.setDate(today.getDate()+30); document.cookie="xbAFFPublisherID="+utm_campaign+"; expires="+inAMonth.toUTCString()+"; path=/; domain=.neckermann-reisen.at;"
    } else if (utm_medium.match(/met|part/gi)) {
        if (typeof console != "undefined") console.log ("Attrribution: partners");
    } else if (utm_medium.match(/ban|criteo|dis/gi)) {
        if (typeof console != "undefined") console.log ("Attrribution: display");
    } else if (utm_medium.match(/email|newsletter/gi)) {
        if (typeof console != "undefined") console.log ("Attrribution: eCRM");
    } else if (utm_medium.match(/cp|ppc|gclid/gi)) {
        if (typeof console != "undefined") console.log ("Attrribution: PPC");
    } else if (utm_medium.match(/soc|twitter/gi)) {
        if (typeof console != "undefined") console.log ("Attrribution: social media");
    } else {
        if (typeof console != "undefined") console.log ("Attrribution: default");
    }
} catch (e){if (typeof console != "undefined") console.log("AT NEC LP Code: "+e)}


// Attribution Conf page
try{
    var pubID = "";     try {pubID = /xbAFFPublisherID=/i.test(document.cookie) && /xbAFFPublisherID=([^;]*)/i.exec(document.cookie)[1]} catch (e){}
    var cAttr = "";     try {cAttr = /xbcattr=/i.test(document.cookie) && /xbcattr=([^;]*)/i.exec(document.cookie)[1]} catch (e){}
    var xbcBANSrc = ""; try {xbcBANSrc = /xbcBANSrc/i.test(document.cookie) && /xbcBANSrc=([^;]*)/i.exec(document.cookie)[1]} catch (e){}
    var paidChannels = /aff|met|part|agg|ban|criteo|dis|email|newsletter|cp|ppc|gclid|ret/i;

    var winningCampaign = "default";
    if (paidChannels.test(cAttr)){
        var camps = cAttr.split('|');
        for (var camp = camps.pop(); !paidChannels.test(camp); camp = camps.pop()){}
        if (/aff/i.test(camp)) {
            winningCampaign = 'affiliates';

            var articles = lType = "";
            if (/hotel/i.test(window.CATTParams.LOB)){
                lType = "2"
                articles += "ArticleNb="+window.CATTParams.AccomCode+"&ProductName=Hotel Booking&Category=Hotels&Quantity=1&SinglePrice="+window.CATTParams.BookingValue+"&Brand="+window.CATTParams.TourOperator+"&Property1="+window.CATTParams.AccomName.replace('&', ' and ')+"&Property2="+window.CATTParams.Destination+"&Property3="+window.CATTParams.Duration+"&Property4="+window.CATTParams.DeptDate+"&Property5="+window.CATTParams.StarRating+unescape("%0D%0A");
            } else if (/flight/i.test(window.CATTParams.LOB)){
                lType = "1"
                articles += "ArticleNb="+window.CATTParams.AccomCode+"&ProductName=Flights&Category=Flights&Quantity=1&SinglePrice="+window.CATTParams.BookingValue+"&Brand="+window.CATTParams.TourOperator+"&Property1="+window.CATTParams.DepartureAirportSelected+"&Property2="+window.CATTParams.DestinationAirportSelected+"&Property3="+window.CATTParams.Duration+"&Property4="+window.CATTParams.DeptDate+"&Property5="+window.CATTParams.Carrier+unescape("%0D%0A");
            } else {
                lType = "3"
                articles += "ArticleNb="+window.CATTParams.AccomCode+"&ProductName=Package booking for "+window.CATTParams.PaxAdult+" Adults and "+window.CATTParams.PaxChild+" Children&Category=Package > "+window.CATTParams.DestinationAirportSelected+"&Quantity=1&SinglePrice="+window.CATTParams.BookingValue+"&Brand="+window.CATTParams.TourOperator+"&Property1="+window.CATTParams.DepartureAirportSelected+"&Property2="+window.CATTParams.DestinationAirportSelected+"&Property3="+window.CATTParams.Duration+"&Property4="+window.CATTParams.DeptDate+"&Property5="+window.CATTParams.BoardBasis+unescape("%0D%0A");
            }
            $('body').append("<IMG SRC=\"https:\/\/partners.webmasterplan.com\/registersale.asp?mode=ppl&ltype="+lType+"&site=11836&order="+window.CATTParams.BookingRef+((pubID)?'&ref='+pubID:'')+"&basket="+escape(articles)+"\" WIDTH=\"1\" HEIGHT=\"1\" \/>");
        }
        else if (/met|part/i.test(camp)) winningCampaign = 'partners'
        else if (/agg/i.test(camp)) winningCampaign = 'aggregator';
        else if (/ban|criteo|dis/i.test(camp)){
            winningCampaign = 'display';
            xbcBANSrc && /mediascale/i.test(xbcBANSrc.split('|').pop()) && $('body').append('<iframe allowtransparency="true" scrolling="no" frameborder="0" border="0" width="1" height="1" marginwidth="0" marginheight="0" background-color="transparent" src="https://ad3.adfarm1.adition.com/track?tid=1199&sid=20370&type=html&orderid='+window.CATTParams.BookingRef+'&itemno=&descr=&quantity=1&price=0.00&total='+window.CATTParams.BookingValue+'"></iframe>');
            xbcBANSrc && /esp/i.test(xbcBANSrc.split('|').pop()) && $('body').append('<script src="https://tracking.esp-srv.de/Trackers/eventtracker/a:5447704a-f668-49fb-a875-3f016def3350/e:5447ab9b-8f24-4bd9-8a09-1f076def3350/uid:'+window.CATTParams.BookingRef+'/value:'+window.CATTParams.BookingValue+'"></script>');
            if(xbcBANSrc && /goldbach/i.test(xbcBANSrc.split('|').pop())){
                // conditional firing of goldbach pixel (now always fire -> DSIGN-110)
            }
        }
        else if (/email|newsletter/i.test(camp)) winningCampaign = 'eCRM';
        else if (/cp|ppc|gclid/i.test(camp)) winningCampaign = 'PPC';
        else if (/soc|twitter/i.test(camp)) winningCampaign = 'social';
        else if (/ret/i.test(camp)) {
            // Tracking is done in criteo tag
            winningCampaign = 'retargeting';
        }
    }
  var country = $('.thanxTitle:contains("Land")').next().text();
   $('body').append('<iframe src="https://4569027.fls.doubleclick.net/activityi;src=4569027;type=end;cat=sale;qty=1;cost=' + window.CATTParams.BookingValue + ';u1=AT;u2=' + country + ';u3=' + window.CATTParams.AccomResort + ';ord=' + window.CATTParams.BookingRef + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
    window._gaq = window._gaq || [];
    window._gaq.push(['CATTGATC._setAccount', 'UA-33125004-1']);
    window._gaq.push(['CATTGATC._setDomainName', 'neckermann-reisen.at']);
    window._gaq.push(['_gat._anonymizeIp']);
    window._gaq.push(['CATTGATC._addOrganic', 'search.sweetim.com', 'q'], ['CATTGATC._addOrganic', 'search.mywebsearch.com', 'searchfor'], ['CATTGATC._addOrganic', 'search.babylon.com', 'q'], ['CATTGATC._addOrganic', 'search.imesh.com', 'q'], ['CATTGATC._addOrganic', 'search.incredibar.com', 'q'], ['CATTGATC._addOrganic', 'searchsafer.com', 'q'], ['CATTGATC._addOrganic', 'fastbrowsersearch.com', 'q'], ['CATTGATC._addOrganic', 'search.1und1.de', 'q']);
    window._gaq.push(['CATTGATC._setAllowLinker', true]);
    window._gaq.push(['CATTGATC._trackEvent', 'BkgCookieAttrib', 'BookingRef='+window.CATTParams.BookingRef, 'Attr='+camp+'->'+winningCampaign+'|'+pubID+'|'+'_path='+cAttr, 1, true]);
} catch (e){console && console.log && console.log("AT NEC Conf Cookie Attr: "+e)}


// Goldbach LP
try {
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    document.write('<iframe src="http://4569027.fls.doubleclick.net/activityi;src=4569027;type=start;cat=start;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
} catch (e) { if (typeof console != "undefined") console.log("AT NEC Goldbach HOME: " + e) }


// Goldbach main generic
try {
    if(document.location.href.indexOf('pauschalreisen') >= 0) {
        if (document.location.href.indexOf('pauschalreisen') >= 0) {
            var blacklist = ['fruehbucher', 'all-inclusive', 'preisknueller', 'rundreisen', 'luxusurlaub', 'aktivurlaub'];
            var countryDestination = document.location.href.substring(document.location.href.indexOf('pauschalreisen') + 15);
            var country = countryDestination.substring(0, countryDestination.indexOf('/'));
            var destination = countryDestination.substring(countryDestination.indexOf('/') + 1).replace(/\//g, '');
            var axel = Math.random() + "";
            var a = axel * 10000000000000;
            if(blacklist.indexOf(country) < 0) {
                if (country.trim().length > 0 && destination.trim().length > 0) {
                    // Destination
                    //console.log(destination);
                    document.write('<iframe src="http://4569027.fls.doubleclick.net/activityi;src=4569027;type=start;cat=dest;u2=' + country + ';u3=' + destination + ';ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
                } else if (country.trim().length > 0) {
                    // Country
                    //console.log(country);
                    document.write('<iframe src="http://4569027.fls.doubleclick.net/activityi;src=4569027;type=start;cat=country;u2=' + country + ';ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
                }
            }
        }
    }
} catch (e) { if (typeof console != "undefined") console.log("AT NEC Goldbach COUNTRY & DESTINATION: " + e) }

// eSP all pages except Conf
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
        esp.src = '//tracking.esp-srv.de/rtg/wca/a:5447704a-f668-49fb-a875-3f016def3350/e:5458d8ad-2178-43b3-9ebc-52636def3350/wca_event:' + wca_event + '/';
        s.parentNode.insertBefore(esp, s);
    })();
} catch (e) { if (typeof console != "undefined") console.log("NEC AT eSP: " + e) }

// eSP conf
try{
    $('body').append('<script src="https://tracking.esp-srv.de/Trackers/eventtracker/a:5447704a-f668-49fb-a875-3f016def3350/e:5447ac6c-0ba0-4024-a97d-27116def3350/uid:'+window.CATTParams.BookingRef+'/value:'+window.CATTParams.BookingValue+'"></script>');
}catch(e){console && console.log && console.log('AT NEC Conf eSP: '+e);}



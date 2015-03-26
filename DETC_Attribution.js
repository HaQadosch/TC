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
 * Attribution landing pages.
 *
 */
<script id='gtm_attr'>
(function gtm_attribtionLP(jQ, cdl) {
    'use strict';
    if (jQ && cdl) try {
        var cdsr = cdl.CATTParams && cdl.CATTParams.searches || '';
        var attrs = JSON.parse(cdl.ckget('gtm_attr') || '[]');
        for (var i = 4; attrs.length > i; attrs.shift());

        if (cdsr.utm_medium || cdsr.gclid){
            attrs.push([
               cdsr.gclid || '',
               cdsr.utm_medium || '',
               cdsr.utm_campaign || '',
               cdsr.utm_content || '',
               cdsr.utm_source || '',
               Date.now() || ''
           ]);
        }
         cdl.ckset('gtm_attr', JSON.stringify(attrs), Infinity, '/', '.thomascook.de');
    } catch(e) {
        cdl.error('GTM Attribution LP: '+e);
    }
    return jQ && cdl;
}(window.jQuery, window.CATTDL))
</script>

/*
 *
 * Attribution conf page.
 *
 */
<script id='gtm_Attribution'>
(function gtm_attribution(edl, cdl){
    'use strict';
    if (edl && cdl) try {
        var cdpm = cdl.CATTParams || {}
        var lands = JSON.parse(cdl.ckget('gtm_attr') || '[]')
        var paidChannels = /aff|met|part|to|agg|ban|criteo|dis|email|newsletter|cp|ppc|gclid/i
        var validLand = lands.filter(function(e){return e[0] || paidChannels.test(e[1])}).filter(function(e){return new Date().setMonth(new Date(Date.now()).getMonth() - 1) < e[5]})

        if (validLand.length) {
            var vL = validLand.pop() || []
            cdpm['attribution'] = {
                gclid           : vL[0] || '',
                utm_medium      : vL[1] || '',
                utm_campaign    : vL[2] || '',
                utm_content     : vL[3] || '',
                utm_source      : vL[4] || '',
                landing         : new Date(vL[5] || '') || '',
                date            : vL[5] || ''
            }
            var winningCampaign = ''
            var m = vL[1]
            if ((/aff/i).test(m)) winningCampaign = 'aff';
            else if ((/met/i).test(m)) winningCampaign = /trivago/i.test(cdpm.attribution && cdpm.attribution.utm_source || '')?'trivago':'met';
            else if ((/agg|part/i).test(m)) winningCampaign = 'agg';
            else if ((/to/i).test(m)) winningCampaign = 'mindShare';
            else if ((/ban|criteo|dis/i).test(m)) winningCampaign = /esp/i.test(cdpm.attribution && cdpm.attribution.utm_source || '')?'eSP':'display';
            else if ((/email|newsletter/i).test(m)) winningCampaign = 'eCRM';
            else if ((/cp|ppc|gclid/i).test(m) || vL[0]) winningCampaign = 'PPC';
            else if ((/soc|twitter/i).test(m)) winningCampaign = 'social';

            edl.push({'event': 'Attribution '+winningCampaign});
            cdl.ckset('gtm_attr', JSON.stringify([]), Infinity, '/', '.thomascook.de')
        }
    } catch(e) {
        cdl.error('GTM Attr: '+e)
    }
    return cdl && edl && cdpm && cdpm.attribution;
}(window.dataLayer, window.CATTDL))
</script>

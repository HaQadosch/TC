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


<script id='gtm_affilinateAff'>
(function gtm_affilinateAffDL(cdl, jQ) {
    'use strict';
    if (cdl && jQ) try {
        var cdpm = cdl.CATTParams;
        cdl.DL_attr_aff = {
            articlenb     : cdpm.accomcode || "1",
            productname : (cdpm.brand || '')+' '+(cdpm.lob || '')+' Buchung '+(cdpm.region || '')+' für '+(cdpm.paxtotal || '')+' Personen',
            category     : cdpm.lob || '',
            quantity     : 1,
            singlePrice : cdpm.bookingvalue || '',
            brand         : cdpm.touroperator || '',
            property1     : cdpm.departureairportselected || '',
            property2     : /hotel/i.test(cdpm.lob || '')?(cdpm.region || cdpm.cdpm.resortsearched || ''):(cdpm.destinationairportselected || ''),
            property3     : cdpm.duration || '',
            property4     : cdpm.deptdate || '',
            property5     : /hotel/i.test(cdpm.lob || '')?(cdpm.hotelname || ''):(cdpm.carrier || ''),
            order         : cdpm.bookingref || (Math && Math.random()) || '1',
            voucher     : cdpm.voucher || '',
            site         : '3578',
            ref         : cdpm.attribution && cdpm.attribution.utm_campaign || ''
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

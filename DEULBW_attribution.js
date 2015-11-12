try{
    var pubID = ""; try {pubID = (/xbAFFPublisherID=([^;]*)/gi).exec(document.cookie)[1]} catch (e){}
    var cAttr = ""; try {cAttr = (/xbcattr=([^;]*)/gi).exec(document.cookie)[1]} catch (e){}
    var paidChannels = /aff|met|part|agg|ban|criteo|dis|email|newsletter|cp|ppc|gclid/i;

    var winningCampaign = "default";
    if ((paidChannels).test(cAttr)){
        var camps = cAttr.split('|');
        for (var camp = camps.pop(); !(paidChannels).test(camp); camp = camps.pop()){}
        if ((/aff/i).test(camp)) {
            winningCampaign = 'affiliates';

            var articles = "";
            if ((/cruise/gi).test(window.CATTParams.LOB) || (/cruise/i).test(document.location.pathname)){// Cruise Longtail
                articles += "ArticleNb="+window.CATTParams.AccomCode+"&ProductName=Cruise "+window.CATTParams.AccomName.replace('&', ' and ')+"&Category=Cruise > "+window.CATTParams.AccomResort.replace('&', ' and ')+"&Quantity=1&SinglePrice="+window.CATTParams.BookingValue+"&Brand="+window.CATTParams.TourOperator+"&Property1="+window.CATTParams.DepartureAirportSelected+"&Property2="+window.CATTParams.Destination+"&Property3="+window.CATTParams.Duration+"&Property4="+window.CATTParams.DeptDate+"&Property5="+window.CATTParams.PaxAdult+" Adults and "+window.CATTParams.PaxChild+" Children"+unescape("%0D%0A");
            } else if ((/hotel/gi).test(window.CATTParams.LOB)){// IH Longtail
                articles += "ArticleNb="+window.CATTParams.AccomCode+"&ProductName=Hotel Booking&Category=Hotels&Quantity=1&SinglePrice="+window.CATTParams.BookingValue+"&Brand="+window.CATTParams.TourOperator+"&Property1="+window.CATTParams.AccomName.replace('&', ' and ')+"&Property2="+window.CATTParams.Destination+"&Property3="+window.CATTParams.Duration+"&Property4="+window.CATTParams.DeptDate+"&Property5="+window.CATTParams.StarRating+unescape("%0D%0A");
            } else if ((/flight/gi).test(window.CATTParams.LOB)){// Flight Longtail
                articles += "ArticleNb="+window.CATTParams.AccomCode+"&ProductName=Flights&Category=Flights&Quantity=1&SinglePrice="+window.CATTParams.BookingValue+"&Brand="+window.CATTParams.TourOperator+"&Property1="+window.CATTParams.DepartureAirportSelected+"&Property2="+window.CATTParams.DestinationAirportSelected+"&Property3="+window.CATTParams.Duration+"&Property4="+window.CATTParams.DeptDate+"&Property5="+window.CATTParams.Carrier+unescape("%0D%0A");
            } else {// Package LongTail
                articles += "ArticleNb="+window.CATTParams.AccomCode+"&ProductName=Package booking for "+window.CATTParams.PaxAdult+" Adults and "+window.CATTParams.PaxChild+" Children&Category=Package > "+window.CATTParams.DestinationAirportSelected+"&Quantity=1&SinglePrice="+window.CATTParams.BookingValue+"&Brand="+window.CATTParams.TourOperator+"&Property1="+window.CATTParams.DepartureAirportSelected+"&Property2="+window.CATTParams.DestinationAirportSelected+"&Property3="+window.CATTParams.Duration+"&Property4="+window.CATTParams.DeptDate+"&Property5="+window.CATTParams.BoardBasis+unescape("%0D%0A");
            }
            var pubID = ""; try {pubID = (/xbAFFPublisherID=([^;]*)/gi).exec(document.cookie)[1]} catch (e){}
            document.write("<IMG SRC=\"https:\/\/partners.webmasterplan.com\/registersale.asp?site=2555"+((pubID)?'&ref='+pubID:'')+"&order="+window.CATTParams.BookingRef+"&basket="+escape(articles)+"\" WIDTH=\"1\" HEIGHT=\"1\" \/>");

        }
        else if ((/met|part/i).test(camp)) winningCampaign = 'partners';
        else if ((/agg/i).test(camp)) winningCampaign = 'aggregator';
        else if ((/ban|criteo|dis/i).test(camp)) winningCampaign = 'display';
        else if ((/email|newsletter/i).test(camp)) winningCampaign = 'eCRM';
        else if ((/cp|ppc|gclid/i).test(camp)) winningCampaign = 'PPC';
        else if ((/soc|twitter/i).test(camp)) winningCampaign = 'social';
    }

    window._gaq = window._gaq || [];
    window._gaq.push(['CATTGATC._setAccount', 'UA-33246660-1']);
    window._gaq.push(['CATTGATC._setDomainName', 'neckermann-urlaubswelt.de']);
    window._gaq.push(['_gat._anonymizeIp']);
    window._gaq.push(['CATTGATC._setAllowLinker', true]);
    window._gaq.push(['CATTGATC._addOrganic', 'suche.t-online.de', 'q'], ['CATTGATC._addOrganic', 'suche.web.de', 'q'], ['CATTGATC._addOrganic', 'suche.gmx.net', 'q'], ['CATTGATC._addOrganic', 'search.1und1.de', 'q'], ['CATTGATC._addOrganic', 'suche.freenet.de', 'query']);
    window._gaq.push(['CATTGATC._trackEvent', 'BkgCookieAttrib', 'BookingRef='+window.CATTParams.BookingRef, 'Attr='+camp+'->'+winningCampaign+'|'+pubID+'|'+'_path='+cAttr, 1, true]);
} catch (e){if (typeof console != "undefined") console.log("DE ULBW Conf Cookie Attr: "+e)}

/*
 *
 * Attribution landing pages.
 *
 */
//<script id='gtm_attr'>
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
               cdsr.utm_term || '',
               Date.now() || ''
           ]);
        }
         cdl.ckset('gtm_attr', JSON.stringify(attrs), Infinity, '/', '.neckermann-urlaubswelt.de');
    } catch(e) {
        cdl.error('GTM Attribution LP: '+e);
    }
    return jQ && cdl;
}(window.jQuery, window.CATTDL))
//</script>

/*
 *
 * Attribution conf page.
 *
 */
//<script id='gtm_Attribution'>
(function gtm_attribution(edl, cdl){
    'use strict';
    var cdpm = '';
    if (edl && cdl) try {
        cdpm = cdl.CATTParams || {};
        var lands = JSON.parse(cdl.ckget('gtm_attr') || '[]');
        var paidChannels = /aff|met|part|to|agg|ban|criteo|dis|email|newsletter|cp|ppc|gclid/i;
        var validLand = lands.filter(function(e){return e[0] || paidChannels.test(e[1])}).filter(function(e){return new Date().setMonth(new Date(Date.now()).getMonth() - 1) < e[6];});

        if (validLand.length) {
            var vL = validLand.pop() || [];
            cdpm.attribution = {
                gclid           : vL[0] || '',
                utm_medium      : vL[1] || '',
                utm_campaign    : vL[2] || '',
                utm_content     : vL[3] || '',
                utm_source      : vL[4] || '',
                utm_term        : vL[5] || '',
                landing         : new Date(vL[6] || '') || '',
                date            : vL[6] || ''
            };
            var winningCampaign = '';
            var m = vL[1];
            if ((/aff/i).test(m)) winningCampaign = 'aff';
            else if ((/met/i).test(m)) winningCampaign = /trivago/i.test(cdpm.attribution && cdpm.attribution.utm_source || '')?'trivago':'met';
            else if ((/agg|part/i).test(m)) winningCampaign = 'agg';
            else if ((/to/i).test(m)) winningCampaign = 'mindShare';
            else if ((/ban|criteo|dis/i).test(m)) winningCampaign = /esp/i.test(cdpm.attribution && cdpm.attribution.utm_source || '')?'eSP':'display';
            else if ((/email|newsletter/i).test(m)) winningCampaign = 'eCRM';
            else if ((/cp|ppc|gclid/i).test(m) || vL[0]) winningCampaign = 'PPC';
            else if ((/soc|twitter/i).test(m)) winningCampaign = 'social';

            edl.push({'event': 'Attribution '+winningCampaign});
            cdl.ckset('gtm_attr', JSON.stringify([]), Infinity, '/', '.neckermann-urlaubswelt.de');
        }
    } catch(e) {
        cdl.error('GTM Attr: '+e);
    }
    return cdl && edl && cdpm && cdpm.attribution;
}(window.dataLayer, window.CATTDL));
//</script>



// Affilinet
//<script id='gtm_affilinateAff'>
(function gtm_affilinateAffDL(cdl, jQ) {
    'use strict';
    if (cdl && jQ) try {
        var cdpm = cdl.CATTParams;

        if (/hotel/i.test(cdpm.lob || '')){

            cdl.DL_attr_aff = {
                articlenb     : cdpm.accomcode || "1",
                productname : "Hotel Booking",
                category     : 'Hotels',
                quantity     : 1,
                singlePrice : cdpm.bookingvalue || '',
                brand         : cdpm.touroperator || '',
                property1     : (cdpm.accomname || '').replace('&', ' and '),
                property2     : cdpm.destination || '',
                property3     : cdpm.duration || '',
                property4     : cdpm.deptdate || '',
                property5     : cdpm.starrating || '',
                order         : cdpm.bookingref || '0',
                voucher     : cdpm.voucher || '',
                site         : 2555,
                ref         : cdpm.attribution && cdpm.attribution.utm_campaign || ''
            };
        } else if (/flight/i.test(cdpm.lob || '')){

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
                site         : 2555,
                ref         : cdpm.attribution && cdpm.attribution.utm_campaign || ''
            };
        } else {

            cdl.DL_attr_aff = {
                articlenb     : cdpm.accomcode || "1",
                productname : "Package booking for "+(cdpm.paxadult || '')+" Adults and "+(cdpm.paxchild || '')+" Children",
                category     : cdpm.lob || '',
                quantity     : 1,
                singlePrice : cdpm.bookingvalue || '',
                brand         : cdpm.touroperator || '',
                property1     : cdpm.departureairportselected || '',
                property2     : cdpm.destinationairportselected || '',
                property3     : cdpm.duration || '',
                property4     : cdpm.deptdate || '',
                property5     : cdpm.boardbasis || '',
                order         : cdpm.bookingref || '0',
                voucher     : cdpm.voucher || '',
                site         : 2555,
                ref         : cdpm.attribution && cdpm.attribution.utm_campaign || ''
            };
        }
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
            window.unescape("%0D%0A");
        var src = 'https://partners.webmasterplan.com/registersale.asp?site='+(afdl.site || '')+((afdl.ref)?'&ref='+afdl.ref:'')+'&order='+(afdl.order || '')+((afdl.voucher)?'&vcode='+afdl.voucher:'')+'&basket='+window.escape(article);
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
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_attr_aff));
//</script>

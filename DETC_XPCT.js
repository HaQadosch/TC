//<script id='gtm_kayak'>
(function gtm_kayakDL(cdl, dl){
    'use strict';
    if (cdl && dl) try {
        var cdpm = cdl.CATTParams || '';

        cdl.DL_kayak = {
            type : 'pixeltracking',
            partnercode : 'HOTELS4UDOTCOM',
            price : cdpm.bookingvalue || '',
            currency : cdpm.searches && cdpm.searches.currency || cdpm.currency || 'GBP',
            linkid : cdpm.attribution && cdpm.attribution.utm_content || '',
            img : {
                src : '//www.kayak.com/s/pixeltracking/_pc_?price=_p_&currency=_c_&linkid=_l_',
                status : 'not fired'
            }
        };
    } catch(e) {
        cdl.error && cdl.error('GTM Kayak DL: '+e);
    } finally {
        dl.push({'event':'DL Kayak'});
    }
    return cdl && dl && cdl.DL_kayak;
}(window.CATTDL, window.dataLayer));

(function gtm_kayak(jQ, dl, cdl, kkdl){
    'use strict';
    if (jQ && dl && cdl && kkdl) try {
        var src = kkdl.img && kkdl.img.src
            .replace(/_pc_/, kkdl.partnercode || '')
            .replace(/_p_/, kkdl.price || '')
            .replace(/_c_/, kkdl.currency || '')
            .replace(/_l_/, kkdl.linkid || '');
        jQ().append && jQ('body').append(jQ('<img>', {
            src : kkdl.img && kkdl.img.src || '',
            style : 'border-style:none;',
            alt : '',
            id : 'KayakPixel',
            width : 1,
            height : 1
        }));
        kkdl.img = {
            status : 'fired',
            src : src
        }
    } catch(e) {
        cdl.error && cdl.error('GTM Kayak: '+e);
    } finally {
        dl.push({'event':'kayak'});
    }
    return jQ && dl && cdl && kkdl;
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_kayak))
//</script>

// XPCT SRP  Page
// BEGIN XPCT-Tracking *************************************************************************************
// 2014-05-14 Stefan Schaefer
//<script id='gtm_XPCT'>
(function gtm_XPCTDL(jQ, cdl, dl){
    'use strict';
    function setCookie( cookie_name, cookie_value, lifespan_in_days, valid_domain ){
        var domain_string = valid_domain ?
            ("; domain=" + valid_domain) : '' ;
        document.cookie = cookie_name +
            "=" + ( cookie_value ) +
            "; max-age=" + 60 * 60 *
            24 * lifespan_in_days +
            "; path=/" + domain_string ;
    }
    function deleteCookie( cookie_name, valid_domain ){
        var domain_string = valid_domain ?
            ("; domain=" + valid_domain) : '' ;
        document.cookie = cookie_name +
            "=; max-age=0; path=/" + domain_string ;
    }
    if (jQ && cdl && dl) try {
        var cdpm = cdl.CATTParams || '';

        deleteCookie('xpctIffPos', '.thomascook.de');
        if (/unsere empfehlung/i.test(cdpm.sortoption || '')) {
            var web = 'TC_DE';
            var productType = (/hotel/i.test(cdpm.lob || ''))?'H':(/package/i.test(cdpm.lob || ''))?'P':'?';
            var pos = '';
            var currentPos = parseInt(cdpm.searches && cdpm.searches.startIndex || 0) + 1;
            var iffPos = '';
            jQ('.hotelSelectionWrap').each(function (index) {
                if (jQ(this).text().trim().length > 0) {
                    var supplierId = window.hibItems[index].iff;
                    iffPos += supplierId + '@' + currentPos + '|';
                    pos += '&pos' + (currentPos++) + '=' + supplierId;
                }
            });
            setCookie('xpctIffPos', iffPos, 30, '.thomascook.de');
            cdl.DL_xpct = {
                iffpos : iffPos,
                img : {
                    src : 'http://tracker.xpct.de/viewPixel.gif?web=' + web + '&product_type=' + productType + '&supplier_name=TT' + pos,
                    status : 'not fired'
                }
            };
        }
    } catch(e) {
        cdl.error && cdl.error('GTM XPCT DL: '+e);
    } finally {
        dl.push({'event':'DL XPCT'});
    }
    return jQ && cdl && dl && cdl.DL_xpct;
}(window.jQuery, window.CATTDL, window.dataLayer));

(function gtm_XPCT(jQ, dl, cdl, kkdl){ //      document.write(' " width="1" height="1" style="height: 1px; width: 1px; display: hidden" />')

    'use strict';
    if (jQ && dl && cdl && kkdl) try {
        var src = kkdl.img && kkdl.img.src
            .replace(/_pc_/, kkdl.partnercode || '')
            .replace(/_p_/, kkdl.price || '')
            .replace(/_c_/, kkdl.currency || '')
            .replace(/_l_/, kkdl.linkid || '');
        jQ().append && jQ('body').append(jQ('<img>', {
            src : kkdl.img && kkdl.img.src || '',
            style : 'border-style:none;',
            alt : '',
            id : 'KayakPixel',
            width : 1,
            height : 1
        }));
        kkdl.img = {
            status : 'fired',
            src : src
        }
    } catch(e) {
        cdl.error && cdl.error('GTM XPCT: '+e);
    } finally {
        dl.push({'event':'XPCT'});
    }
    return jQ && dl && cdl && kkdl;
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_xpct))
//</script>

try{
    function GetURLParameter(sParam)
    {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++)
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam)
            {
                return sParameterName[1];
            }
        }
    }

    function setCookie( cookie_name, cookie_value,
                          lifespan_in_days, valid_domain )
    {
        var domain_string = valid_domain ?
            ("; domain=" + valid_domain) : '' ;
        document.cookie = cookie_name +
            "=" + ( cookie_value ) +
            "; max-age=" + 60 * 60 *
            24 * lifespan_in_days +
            "; path=/" + domain_string ;
    }

    function deleteCookie( cookie_name, valid_domain )
    {
        var domain_string = valid_domain ?
            ("; domain=" + valid_domain) : '' ;
        document.cookie = cookie_name +
            "=; max-age=0; path=/" + domain_string ;
    }

    deleteCookie('xpctIffPos', '.thomascook.de');
    // XPCT-Sort?
    if ((/unsere empfehlung/i).test(window.CATTParams.SortOption)) {
        var web = 'TC_DE';
        var productType = '?';
        if ((/hotel/i).test(window.CATTParams.LOB)) {
            productType = 'H';
        } else if ((/package/i).test(window.CATTParams.LOB)) {
            productType = 'P';
        }
        var supplierName = 'TT';
        var pos = '';
        var currentPos = 1;
        var iffPos = '';
        if (GetURLParameter('startIndex') > 0) {
            currentPos = parseInt(GetURLParameter('startIndex')) + 1;
        }
        $('.hotelSelectionWrap').each(function (index) {
            if ($(this).text().trim().length > 0) {
                var supplierId = window.hibItems[index].iff;
                iffPos += supplierId + '@' + currentPos + '|';
                pos += '&pos' + (currentPos++) + '=' + supplierId;
            }
        });
        // Setting Cookie for tracking of click (is done on ACCOM Page)
        setCookie('xpctIffPos', iffPos, 30, '.thomascook.de');
        // Writing ViewPixel
        document.write('<img src="http://tracker.xpct.de/viewPixel.gif?web=' + web + '&product_type=' + productType + '&supplier_name=' + supplierName + pos + '" width="1" height="1" style="height: 1px; width: 1px; display: hidden" />')
    }
} catch(e){ console.log("DE TC SRP GATC Tag 1 // XPCT-Tracking" + e); }



// XPCT Accom
// BEGIN XPCT-Tracking *************************************************************************************
// 2014-05-14 Stefan Schaefer
try{
    function getCookie(cookieName)
    {
        var allcookies = document.cookie;
        // Get all the cookies pairs in an array
        cookiearray  = allcookies.split(';');
        // Now take key value pair out of this array
        for(var i=0; i<cookiearray.length; i++){
            name = cookiearray[i].split('=')[0].trim();


        value = cookiearray[i].split('=')[1].trim();
            if(name==cookieName) {
                return value;
            }
        }
    }

    var position = getCookie('xpctIffPos');
    // Cookie exists -> XPCT-Sort
    if(position) {
        var web = 'TC_DE';
        var productType = '?';
        if ((/hotel/i).test(window.CATTParams.LOB)) {
            productType = 'H';
        } else if ((/package/i).test(window.CATTParams.LOB)) {
            productType = 'P';
        }
        var supplierName = 'TT';
        var supplierId = window.CATTParams.AccomCode;
        position = position.split(supplierId+'@')[1].split('|')[0];
        // Writing Click Pixel
        var track = new Image();
        track.src= 'http://tracker.xpct.de/clickPixel.gif?web=' + web + '&product_type=' + productType + '&supplier_name=' + supplierName + '&supplier_id=' + supplierId + '&position=' + position;
    }
} catch(e){ console.log("DE TC ACCOM GATC Tag 1 // XPCT-Tracking" + e); }

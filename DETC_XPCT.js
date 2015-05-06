// XPCT SRP  Page
// BEGIN XPCT-Tracking *************************************************************************************
// 2014-05-14 Stefan Schaefer
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

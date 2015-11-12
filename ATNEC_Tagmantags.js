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


// GoldBach  Conf page

  var country = $('.thanxTitle:contains("Land")').next().text();
   $('body').append('<iframe src="https://4569027.fls.doubleclick.net/activityi;src=4569027;type=end;cat=sale;qty=1;cost=' +window.CATTParams.BookingValue + ';u1=AT;u2=' + country + ';u3=' + window.CATTParams.AccomResort + ';ord=' + window.CATTParams.BookingRef + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');


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


// NetSociety conf
try{
    var bookingValue="1";if(typeof window.CATTParams!="undefined"){if(typeof window.CATTParams.BookingValue!="undefined"){if(window.CATTParams.BookingValue!=""&&window.CATTParams.BookingValue!="0"){bookingValue=window.CATTParams.BookingValue}}}
    document.write(unescape("%3Cimg%20height%3D%221%22%20width%3D%221%22%20style%3D%22border-style%3Anone%3B%22%20alt%3D%22%22%20src%3D%22https%3A//www.googleadservices.com/pagead/conversion/1041389759/%3Fvalue%3D"+bookingValue+"%26amp%3Blabel%3DxiZ1COPG-gIQv7HJ8AM%26amp%3Bguid%3DON%26amp%3Bscript%3D0%22/%3E%3Cimg%20height%3D%221%22%20width%3D%221%22%20style%3D%22border-style%3Anone%3B%22%20alt%3D%22%22%20src%3D%22https%3A//www.googleadservices.com/pagead/conversion/1041388589/%3Fvalue%3D"+bookingValue+"%26amp%3Blabel%3DOzOVCJPG8QIQrajJ8AM%26amp%3Bguid%3DON%26amp%3Bscript%3D0%22/%3E%3Cimg%20height%3D%221%22%20width%3D%221%22%20style%3D%22border-style%3Anone%3B%22%20alt%3D%22%22%20src%3D%22https%3A//www.googleadservices.com/pagead/conversion/1000168421/%3Fvalue%3D"+bookingValue+"%26amp%3Blabel%3DS_n1CIufgQMQ5bf13AM%26amp%3Bguid%3DON%26amp%3Bscript%3D0%22/%3E%3Cimg%20height%3D%221%22%20width%3D%221%22%20style%3D%22border-style%3Anone%3B%22%20alt%3D%22%22%20src%3D%22https%3A//www.googleadservices.com/pagead/conversion/997632276/%3Fvalue%3D"+bookingValue+"%26amp%3Blabel%3Djb_WCMTvlwMQlNLa2wM%26amp%3Bguid%3DON%26amp%3Bscript%3D0%22/%3E%3Cimg%20height%3D%221%22%20width%3D%221%22%20style%3D%22border-style%3Anone%3B%22%20alt%3D%22%22%20src%3D%22https%3A//www.googleadservices.com/pagead/conversion/997278255/%3Fvalue%3D"+bookingValue+"%26amp%3Blabel%3DxYbeCMmHzQQQr4TF2wM%26amp%3Bguid%3DON%26amp%3Bscript%3D0%22/%3E%3Cimg%20height%3D%221%22%20width%3D%221%22%20style%3D%22border-style%3Anone%3B%22%20alt%3D%22%22%20src%3D%22https%3A//www.googleadservices.com/pagead/conversion/1000261273/%3Fvalue%3D"+bookingValue+"%26amp%3Blabel%3DuER1CIfG9wIQmY373AM%26amp%3Bguid%3DON%26amp%3Bscript%3D0%22/%3E"));

    // Google Code for MCC NEC.AT Booking Conversion Page
    var google_conversion_id = 996232563;
    var google_conversion_label = "2teMCM3zoQkQ85qF2wM";
    var google_conversion_value = bookingValue;
    document.write('<div style="display:inline;"><img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/'+google_conversion_id+'/?value='+google_conversion_value+'&amp;label='+google_conversion_label+'&amp;guid=ON&amp;script=0"/></div>');
} catch (e){if (typeof console != "undefined") console.log("AT NEC Conf NetSociety AdWords: "+e);}

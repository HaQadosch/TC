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


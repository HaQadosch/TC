var bookingValue="1";
if(typeof window.CATTParams!="undefined"){
    if(typeof window.CATTParams.BookingValue!="undefined"){
        if(window.CATTParams.BookingValue!=""&&window.CATTParams.BookingValue!="0"){
            bookingValue=window.CATTParams.BookingValue

        }

    }

};
document.write(unescape("%3Cimg%20height%3D%221%22%20width%3D%221%22%20style%3D%22border-style%3Anone%3B%22%20alt%3D%22%22%20src%3D%22https%3A//www.googleadservices.com/pagead/conversion/1046670361/%3Fvalue%3D"+bookingValue+"%26amp%3Blabel%3DSxxsCP_i7wIQmdiL8wM%26amp%3Bguid%3DON%26amp%3Bscript%3D0%22/%3E"))

//<script id='gtm_NetSoc'>
(function gtm_NetSocDL(cdl, jQ) {
    'use strict';
    if (cdl && jQ) try {
        var cdpm = cdl.CATTParams;
        cdl.DL_netsoc = {
            bookingvalue : cdpm.bookingvalue || '',
            img : {
                src : '//googleads.g.doubleclick.net/pagead/conversion/1046670361/?value=_v_&label=SxxsCP_i7wIQmdiL8wM&guid=ON&script=0',
                status : 'not fired'
            }
        };
    } catch(e){
        cdl.error('GTM NetSoc DL: '+ e);
    }
    return cdl && jQ && cdl.DL_netsoc;
}(window.CATTDL, window.jQuery));

(function gtm_NetSocAdwords(cdl, jQ, nsdl) {
    'use strict';
    if (cdl && jQ && nsdl) try {
        var imgdl = nsdl.img || '';
        for (var i in imgdl) {
            var src = nsdl.img && nsdl.img.src && nsdl.img.src.replace(/_v_/i, nsdl.bookingvalue || '') || '';
            src && jQ().append && jQ('body').append(jQ('<img>', {
                src : src,
                style : 'border-style:none;',
                alt : '',
                id : 'NetSoc'+i,
                width : 1,
                height : 1
            }));
            nsdl.img = {
                src : src,
                status : 'fired'
            };
        }
    } catch(e) {
        cdl.error('GTM NetSoc: '+ e);
    }
    return cdl && jQ && nsdl;
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_netsoc));
//</script>

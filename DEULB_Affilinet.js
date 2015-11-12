// Affilinet
<script id='gtm_affilinateAff'>
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
                property1     : cdpm.accomname && cdpm.accomname.replace('&', ' and ') || '',
                property2     : cdpm.destination || '',
                property3     : cdpm.duration || '',
                property4     : cdpm.deptdate || '',
                property5     : cdpm.starrating || '',
                order         : cdpm.bookingref || '0',
                voucher     : cdpm.voucher || '',
                site         : 5104,
                ref         : cdpm.attribution && cdpm.attribution.utm_source || ''
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
                site         : 5104,
                ref         : cdpm.attribution && cdpm.attribution.utm_source || ''
            };
        } else {
            cdl.DL_attr_aff = {
                articlenb     : cdpm.accomcode || "1",
                productname : "Package booking for "+(cdpm.paxadult || '')+" Adults and "+(cdpm.paxchild || '')+" Children",
                category     : 'Package > '+(cdpm.destinationairportselected || ''),
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
                site         : 5104,
                ref         : cdpm.attribution && cdpm.attribution.utm_source || ''
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

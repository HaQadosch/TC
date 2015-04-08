<script id='gtm_affilinateMET'>
(function gtm_affilinateMETDL(cdl, jQ) {
    'use strict';
    if (cdl && jQ) try {
        var cdpm = cdl.CATTParams;
        cdl.DL_attr_met = {
            articlenb     : cdpm.accomcode || "1",
            productname : (cdpm.brand || '')+' '+(cdpm.lob || '')+' Buchung '+(cdpm.region || '')+' für '+(cdpm.paxtotal || '')+' Personen',
            category     : (cdpm.lob || '').replace(/-dame/, ''),
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
            site         : '9625',
            ref         : cdpm.attribution && cdpm.attribution.utm_term || ''
        };
    } catch(e){
        cdl.error('GTM Attr Affilinet MET DL: '+e);
    }
    return cdl && jQ && cdl.DL_attr_met;
}(window.CATTDL, window.jQuery));

(function gtm_attrAffiliatesMET(cdl, jQ, afdl) {
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
        cdl.error('GTM AttrAffilinet MET: '+e);
    }
    return cdl && jQ && afdl;
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_attr_met))
</script>

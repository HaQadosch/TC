<script>
(function gtm_affilinateAffdirectDL(cdl, jQ) {
    'use strict';
    if (cdl && jQ) try {
        var cdpm = cdl.CATTParams

        cdl.DL_attr_affdirect = {
            articlenb   : cdpm.accomcode || "1",
            productname : "Package booking for "+(cdpm.paxadult || 0)+" Adults and "+(cdpm.paxchild || 0)+" Children",
            category    : (cdpm.lob || '')+'|'+(cdpm.holidaytype || ''),
            quantity    : 1,
            singlePrice : cdpm.bookingvalue || cdpm.totalprice || '',
            brand       : cdpm.touroperator || '',
            property1   : cdpm.departureairportselected || '',
            property2   : cdpm.destinationairportselected || '',
            property3   : cdpm.duration || '',
            property4   : cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || '',
            property5   : (cdpm.boardbasis || '').replace(/&#233;/g, 'e'),
            order       : cdpm.bookingref || '0',
            site        : 9747,
            ref         : cdpm.attribution && cdpm.attribution.utm_campaign || '',
            pixel       : {
                src     : 'https://clic.reussissonsensemble.fr/registersale.asp?site=_site_&ref=_ref_&order=_order_&basket=_basket_',
                article : '',
                status  : 'not fired'
            }
        }
    } catch (e) {
        cdl.error('GTM Attr Affdirect: '+e)
    }
    return cdl.DL_attr_affdirect || !1
}(!window.CATTDL?!1:window.CATTDL, !window.jQuery?!1:window.jQuery));

(function gtm_attrAffiliatesAffDirect(cdl, jQ, afdl) {
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
            unescape("%0D%0A")
        var src = afdl.pixel.src.replace(/_site_/, afdl.site || '').replace(/&ref=_ref_/g, afdl.ref&&('&ref='+afdl.ref)||'').replace(/_order_/g, afdl.order || '').replace(/_basket_/g, escape(article))
        var img = jQ('<img width="1" height=1" style="border-style:none;" alt="" id="affilinet_pixel">').attr('src', src);
        img.appendTo('body');

        afdl.pixel = {
            status : 'fired',
            article: article,
            src: src
        }
    } catch (e) {
        cdl.error('GTM Attr. Affdirect: '+e)
    }
    return afdl || !1
}(!window.CATTDL?!1:window.CATTDL, !window.jQuery?!1:window.jQuery, window.CATTDL.DL_attr_affdirect))
</script>

<script id='gtm_affilinateAffdirect'>
(function gtm_affilinateAffdirectDL(cdl, jQ) {
    'use strict';
    if (cdl && jQ) try {
        var cdpm = cdl.CATTParams;
        var defSeason = (function defSeason(){
            var season = '';
            try {
                var dates = (cdpm.deptdate || '').split('/');
                if (dates.length == 3) {
                    var year = parseInt(dates[2]);
                    var month = parseInt(dates[1]);
                    if (year === 2014) {
                        season = (month < 11)?"S14":'W14';
                    } else if (year === 2015) {
                        if (month < 5) season = 'W14';
                        else season = (month < 11)?'S15':'W15';
                    }
                }
            } catch(e){
                cdl.error('GTM Season:'+ e);
            }
            return season;
        }());

        cdl.DL_attr_affdirect = {
            articlenb     : cdpm.accomcode || "1",
            productname : "Package booking for "+(cdpm.paxadult || 0)+" Adults and "+(cdpm.paxchild || 0)+" Children",
            category     : defSeason+" > Package > "+(cdpm.destinationairportselected || ''),
            quantity     : 1,
            singlePrice : cdpm.bookingvalue || '',
            brand         : cdpm.touroperator || '',
            property1     : cdpm.departureairportselected || '',
            property2     : cdpm.destinationairportselected || '',
            property3     : cdpm.duration || '',
            property4     : cdpm.deptdate || '',
            property5     : (cdpm.boardbasis || '').replace(/&#233;/g, 'e'),
            order         : cdpm.bookingref || '0',
            voucher     : cdpm.voucher || '',
            season         : defSeason || '',
            site         : (/directholidays/i.test(window.location.hostname || ''))?9483:9416,
            ref         : cdpm.attribution && cdpm.attribution.utm_source || ''
        };
    } catch(e){
        cdl.error('GTM Attr: '+e);
    }
    return cdl && jQ && cdl.DL_attr_affdirect;
}(window.CATTDL, window.jQuery));

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
            unescape("%0D%0A");
        var src = 'https://being.successfultogether.co.uk/registersale.asp?site='+(afdl.site || '')+((afdl.ref)?'&ref='+afdl.ref:'')+'&order='+(afdl.order || '')+((afdl.voucher)?'&vcode='+afdl.voucher:'')+'&basket='+escape(article)
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
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_attr_affdirect))
</script>



<script id='gtm_affilinateAflong'>
(function gtm_affilinateAflongDL(cdl, jQ) {
    'use strict';
    if (cdl && jQ) try {
         var cdpm = cdl.CATTParams
        var defSeason = (function defSeason(){
            var season = '';
            try {
                var dates = (cdpm.deptdate || '').split('/')
                if (dates.length == 3) {
                    var year = parseInt(dates[2])
                    var month = parseInt(dates[1])
                    if (year === 2014) {
                        season = (month < 11)?"S14":'W14'
                    } else if (year === 2015) {
                        if (month < 5) season = 'W14'
                        else season = (month < 11)?'S15':'W15'
                    }
                }
            } catch(e){
                cdl.error('GTM Season:'+ e)
            }
            return season
        }());

        cdl.DL_attr_afflong = {
            articlenb     : cdpm.accomcode || "1",
            productname : "Package booking for "+(cdpm.paxadult || 0)+" Adults and "+(cdpm.paxchild || 0)+" Children",
            category     : defSeason+" > Package > "+(cdpm.destinationairportselected || ''),
            quantity     : 1,
            singlePrice : cdpm.bookingvalue || '',
            brand         : cdpm.touroperator || '',
            property1     : cdpm.departureairportselected || '',
            property2     : cdpm.destinationairportselected || '',
            property3     : cdpm.duration || '',
            property4     : cdpm.deptdate || '',
            property5     : (cdpm.boardbasis || '').replace(/&#233;/g, 'e'),
            order         : cdpm.bookingref || '0',
            voucher     : cdpm.voucher || '',
            season         : defSeason || '',
            site         : (/directholidays/i.test(window.location.hostname || ''))?9483:9415,
            ref         : cdpm.attribution && cdpm.attribution.utm_source || ''
        }
        if (cdl.twlh(/club18-30/i) || /club/i.test(cdpm.touroperator)) {
            cdl.DL_attr_afflong.productname = "Package booking for "+(cdpm.paxadult || 0)+" Adults";
            cdl.DL_attr_afflong.site = 11787;
        }
    } catch(e) {
        cdl.error('GTM Attr: '+e)
    }
    return cdl.DL_attr_afflong || !1
}(window.CATTDL, window.jQuery));

(function gtm_attrAffiliatesAffLong(cdl, jQ, afdl) {
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
        var src = 'https://being.successfultogether.co.uk/registersale.asp?site='+(afdl.site || '')+((afdl.ref)?'&ref='+afdl.ref:'')+'&order='+(afdl.order || '')+((afdl.voucher)?'&vcode='+afdl.voucher:'')+'&basket='+escape(article)
        var img = jQ('<img width="1" height=1" style="border-style:none;" alt="" id="affilinet_pixel">').attr('src', src);
        img.appendTo('body');

        afdl.pixel = {
            article: article,
            src: src
        }
    } catch(e){
        cdl.error('GTM Attr: '+e)
    }
    return cdl && jQ && afdl;
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_attr_afflong))
</script>



<script id='gtm_affilinateAffMeta'>
(function gtm_affilinateAffMetaDL(cdl, jQ) {
    'use strict';
    if (cdl && jQ) try {
        var cdpm = cdl.CATTParams
        var defSeason = (function defSeason(){
            var season = '';
            try {
                var dates = (cdpm.deptdate || '').split('/')
                if (dates.length == 3) {
                    var year = parseInt(dates[2])
                    var month = parseInt(dates[1])
                    if (year === 2014) {
                        season = (month < 11)?"S14":'W14'
                    } else if (year === 2015) {
                        if (month < 5) season = 'W14'
                        else season = (month < 11)?'S15':'W15'
                    }
                }
            } catch(e){
                cdl.error('GTM Season:'+ e)
            }
            return season
        }());

        cdl.DL_attr_affmeta = {
            articlenb     : cdpm.accomcode || "1",
            productname : "Package booking for "+(cdpm.paxadult || 0)+" Adults and "+(cdpm.paxchild || 0)+" Children",
            category     : defSeason+" > Package > "+(cdpm.destinationairportselected || ''),
            quantity     : 1,
            singlePrice : cdpm.bookingvalue || '',
            brand         : cdpm.touroperator || '',
            property1     : cdpm.departureairportselected || '',
            property2     : cdpm.destinationairportselected || '',
            property3     : cdpm.duration || '',
            property4     : cdpm.deptdate || '',
            property5     : (cdpm.boardbasis || '').replace(/&#233;/g, 'e'),
            order         : cdpm.bookingref || '0',
            voucher     : cdpm.voucher || '',
            season         : defSeason || '',
            site         : (/directholidays/i.test(window.location.hostname || ''))?9483:10519,
            ref         : cdpm.attribution && cdpm.attribution.utm_source || ''
        }
    } catch(e) {
        cdl.error('GTM Attr: '+e)
    }
    return cdl.DL_attr_affmeta || !1
}(window.CATTDL, window.jQuery));

(function gtm_attrAffiliatesAffMET(cdl, jQ, afdl) {
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
        var src = 'https://being.successfultogether.co.uk/registersale.asp?site='+(afdl.site || '')+((afdl.ref)?'&ref='+afdl.ref:'')+'&order='+(afdl.order || '')+((afdl.voucher)?'&vcode='+afdl.voucher:'')+'&basket='+escape(article)
        var img = jQ('<img width="1" height=1" style="border-style:none;" alt="" id="affilinet_pixel">').attr('src', src);
        img.appendTo('body');

        afdl.pixel = {
            article: article,
            src: src
        }
    } catch(e) {
        cdl.error('GTM Attr: '+e)
    }
    return cdl && jQ && afdl;
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_attr_affmeta))
</script>

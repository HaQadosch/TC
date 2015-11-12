(function gtm_attribution(cdl) {
    'use strict';
    if (cdl) try {
        var lands = JSON.parse(cdl.ckget('gtm_attr') || '[]')
        var paidChannels = /afflong|met|part|affdirect|ban|criteo|dis|email|newsletter|cp|ppc|gclid/i
        var validLand = lands.filter(function(e){return e[0] || paidChannels.test(e[1])}).filter(function(e){return new Date().setMonth(new Date(Date.now()).getMonth() - 1) < e[5]})

        if (validLand.length) {
            var vL = validLand.pop() || []
            cdl.CATTParams['attribution'] = {
                gclid             : vL[0] || '',
                utm_medium         : vL[1] || '',
                utm_campaign     : vL[2] || '',
                utm_content     : vL[3] || '',
                utm_source         : vL[4] || '',
                landing         : new Date(vL[5] || '') || '',
                date              : vL[5] || ''
            }
            var winningCampaign = ''
            var m = vL[1]
            if ((/afflong/i).test(m)) winningCampaign = 'afflong';
            else if ((/met/i).test(m)) winningCampaign = 'affmeta';
            else if ((/affdirect|part/i).test(m)) winningCampaign = 'affdirect';
            else if ((/ban|criteo|dis/i).test(m)) winningCampaign = 'display';
            else if ((/email|newsletter/i).test(m)) winningCampaign = 'eCRM';
            else if ((/cp|ppc|gclid/i).test(m)) winningCampaign = 'PPC';
            else if ((/soc|twitter/i).test(m)) winningCampaign = 'social';

            dataLayer.push({event: 'Attribution '+winningCampaign});
            var domainName = cdl.twlh(/airtours/i)?'.airtours.co.uk':(cdl.twlh(/club18-30/i)?'.club18-30.com':(cdl.twlh(/directholidays/gi)?'.directholidays.co.uk':'.thomascook.com'))
             cdl.ckset('gtm_attr', JSON.stringify([]), Infinity, '/', domainName)
        }
    } catch(e) {
        cdl.error('GTM Attr: '+e)
    }
    return cdl.CATTParams.attribution || !1
}(window.CATTDL))



(function gtm_affilinateAffMetaDL(cdl, jQ) {
    'use strict';
    if (cdl && jQ) try {
        var cdpm = cdl.CATTParams
        var season = (function season(){
                try {
                    var season = ''
                    var dates = (cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '').split('/')
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

        cdl.DL_attr_affmeta = (function gtm_affilinetData(lob, hol){
            'use strict'
            var data = {}
            if (lob && hol) try {
                data = {
                    quantity     : 1,
                    singlePrice : cdpm.bookingvalue || '',
                    brand         : "Thomas Cook",
                    articlenb     : cdpm.accomcode || "1",
                    productname : cdpm.accomname || '',
                    property1     : '',
                    property2     : cdpm.destination || '',
                    property3     : cdpm.duration || '',
                    property4     : cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '',
                    property5     : cdpm.starrating || '',
                    order         : cdpm.bookingref || '0',
                    voucher     : cdpm.voucher || '',
                    ref         : cdpm.attribution && cdpm.attribution.utm_source || ''
                }
                if (/citybreaks/i.test(hol)) {
                    data.category = season+' > City Breaks > '+(cdpm.country || '')+' > '+(cdpm.destination || '')
                } else if (/eurostar/i.test(lob) && /eurostar/i.test(hol)) {
                    data.articlenb = cdpm.destination || ''
                    data.productname = 'Eurostar'
                    data.category = season+' > Eurostar > '+(cdpm.country || '')+' > '+(cdpm.destination || '')
                } else if (/epackage/i.test(lob) && /eurostar/i.test(hol)) {
                    data.productname = 'Eurostar > '+(cdpm.accomname || '')
                    data.category = season+' > Eurostar + Hotel > '+(cdpm.country || '')+' > '+(cdpm.destination || '')
                    data.property5 = ''
                } else if (/epackage/i.test(lob) && /epackage/i.test(hol)) {
                    data.productname = (cdpm.touroperator || '')+' > '+ (cdpm.accomname || '')
                    data.category = season+' > Flight + Hotel > '+(cdpm.country || '')+' > '+(cdpm.destination || '')
                } else if (/hotel/i.test(lob) && /hotel/i.test(hol)) {
                    data.category = season+' > Hotel > '+(cdpm.country || '')+' > '+(cdpm.destination || '')
                } else if (/epackage/i.test(lob) && /ski/i.test(hol)) {
                    data.category = season+' > Ski > '+(cdpm.country || '')+' > '+(cdpm.destination || '')
                }
            } catch(e) {

            };
            return data
        }(cdpm.lob, cdpm.holidaytype));
        cdl.DL_attr_affmeta.site = 10519

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
    return afdl || !1
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_attr_affmeta))

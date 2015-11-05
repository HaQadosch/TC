<script id='GTM-M8NMSC_affdirect'>
  (function gtm_affilinateAffdirectDL(cdl, edl) {
    'use strict';
    if (cdl && edl) try {
      var cdpm = cdl.CATTParams
      var season = (function season(){
        try {
          var season = ''
          var dates = ((new Date(cdpm.deptdate)).toISOString() || '').split(/-|T/)
          if (dates.length > 2) {
            var year = parseInt(dates[0])
            var month = parseInt(dates[1])
            if (year === 2014) {
              season = (month < 11)?"S14":'W14'
            } else if (year === 2015) {
              if (month < 5) season = 'W14'
              else season = (month < 11)?'S15':'W15'
                }
          }
        } catch(e){
          cdl.error('GTM Ext Season:'+ e)
        }
        return season
      }());

      cdl.DL_attr_affdirect = {
        articlenb 	: cdpm.accomcode || "1",
        productname : "Package booking for "+(cdpm.paxadult || 0)+" Adults and "+(cdpm.paxchild || 0)+" Children",
        category 	: season+" > Package > "+(cdpm.destairport || ''),
        quantity 	: 1,
        singlePrice : cdpm.totalprice || '',
        brand 		: cdpm.touroperator || '',
        property1 	: cdpm.deptairport || '',
        property2 	: cdpm.destairport || '',
        property3 	: cdpm.duration || '',
        property4 	: cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '',
        property5 	: (cdpm.boardbasis || '').replace(/&#233;/g, 'e'),
        order 		: cdpm.bookingref || '0',
        voucher 	: cdpm.voucher || (cdpm.promotion && cdpm.promotion.code) || '',
        season 		: season,
        site 		: 9416,
        ref 		: cdpm.attribution && cdpm.attribution.utm_source || ''
      }
    } catch(e){
      cdl.error('GTM Ext Attr: '+e)
    } finally {
      edl.push({'event': 'DL_attr_affdirect'})
    }
    return cdl && edl && cdl.DL_attr_affdirect
  }(window.CATTDL, window.dataLayer_M8NMSC));

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
    var src = 'https://being.successfultogether.co.uk/registersale.asp?site='+(afdl.site || '')+((afdl.ref)?'&ref='+afdl.ref:'')+'&order='+(afdl.order || '')+((afdl.voucher)?'&vcode='+afdl.voucher:'')+'&basket='+escape(article)
    var img = jQ('<img width="1" height=1" style="border-style:none;" alt="" id="affilinet_pixel">').attr('src', src);
    img.appendTo('body');

    afdl.pixel = {
      article: article,
      src: src
    }
  } catch(e) {
    cdl.error('GTM Ext Attr: '+e)
  }
  return cdl && jQ && afdl
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_attr_affdirect))
</script>

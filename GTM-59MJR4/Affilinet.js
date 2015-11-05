 <script id='GTM-59MJR4_Affilinet'>
   (function gtm_Affilinet(edl, cdl) {
     'use strict';
     if (edl && cdl) try {
       var article = cdl.transpose('ArticleNb={articlenb}&ProductName={productname}&Category={category}&Quantity={quantity}&SinglePrice={singlePrice}&Brand={brand}&Property1={property1}&Property2={property2}&Property3={property3}&Property4={property4}&Property5={property5}{end}', {
            'articlenb'   : cdpm.paxtotal || '1'
          , 'productname' : cdpm.flightno || '0'
          , 'category'    : (cdpm.haul || '')+(cdpm.destinationairport || '')
          , 'quantity'    : '1'
          , 'singlePrice' : cdpm.bookingvalue || ''
          , 'brand'       : cdpm.touroperator || 'FlyThomasCook'
          , 'property1'   : cdpm.departureairport || ''
          , 'property2'   : cdpm.destinationairport || ''
          , 'property3'   : (cdpm.duration === '0')?'one way':cdpm.duration
          , 'property4'   : cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || ''
          , 'property5'   : (parseInt(cdpm.paxtotal) * parseInt(/return/i.test(cdpm.flighttype)?2:1))
          , 'end'         : unescape("%0D%0A")
        });
       cdl.insertImg({
            'name'      : 'affilinet'
          , 'src'       : 'https://being.successfultogether.co.uk/registersale.asp?site={site}{ref}&order={order}{voucher}&curr={curr}&basket={article}'
          , 'params'    : {
              'site' : '3969'
            , 'curr' : cdpm.currency || 'GBP'
            , 'ref' : (cdpm.attribution && cdpm.attribution.utm_source)?('&ref='+cdpm.attribution.utm_source):''
            , 'order' : cdpm.bookingref || '0'
            , 'voucher' : cdpm.voucher?('&vcode='+cdpm.voucher):(cdpm.promotion && cdpm.promotion.code)?('&vcode='+cdpm.promotion.code):''
            , 'article' : window.escape(article)
          }
          , 'dataLayer' : edl
       });
       var timeStart = cdpm.timestart || 0;
       var stampEpoch = +new Date();
       edl.push({'event': 'Affilinet', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
       window.sessionStorage.removeItem('gtm_attribution');
     } catch(e) {
       cdl.error('GTM Affilinet: '+e);
     }
     return edl;
   }(window.dataLayer_59MJR4, window.CATTDL));
 </script>

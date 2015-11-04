<script id="Affilinet">
 (function gtm_affilinet(jQ, cpm){
  try {
  	var affPubID = typeof pubID !== "undefined" && pubID || /xbAFFPublisherID=([^;]*)/gi.test(document.cookie) && /xbAFFPublisherID=([^;]*)/gi.exec(document.cookie) && /xbAFFPublisherID=([^;]*)/gi.exec(document.cookie).pop() || ""
  	var airport = cpm.destinationairport;
  	regAirport = new RegExp(airport, "i")

    var article = "ArticleNb="+cpm.paxtotal+"&ProductName="+cpm.flightno+"&Category="+window.CATTParams.Haul/*+(regAirport.test("GOI,CCC,HOG,SNU,VRA,PUJ,MBJ,CUN,SFB,LAS,BGI,UVF,ANU,JFK,MIA")?"LH>":"SH>")*/+airport+"&Quantity=1&SinglePrice="+cpm.bookingvalue+"&Brand=FlyThomasCook&Property1="+cpm.departureairport+"&Property2="+cpm.destinationairport+"&Property3="+((cpm.duration == "0")?"one way":cpm.duration)+"&Property4="+cpm.deptdate+"&Property5="+(parseInt(cpm.paxtotal) * parseInt(/return/i.test(cpm.flighttype)?2:1));
  	//typeof $ !== "undefined" &&
  	//typeof $('body').append !== "undefined" &&
  	jQ('body').append('<IMG SRC="https://being.successfultogether.co.uk/registersale.asp?site=3969'+((affPubID)?'&ref='+affPubID:'')+'&order='+cpm.bookingref+'&curr='+cpm.currency+'&basket='+escape(article)+'%0D%0A" WIDTH="1" HEIGHT="1" />');
  }
  catch(e){
    if (typeof console != "undefined")
    console.log("GTM_UKTCA_Affilinet: "+e);
  }
}(window.jQuery, window.CATTDL.CATTParams));
 </script>

 <script id='GTM-59MJR4_Affilinet'>
   (function gtm_Affilinet(edl, cdl) {
     'use strict';
     if (cdl && edl) try {
       var cdpm = cdl.CATTParams;
       var season = (function season(){
         try {
           var season = '';
           var dates = ((new Date(cdpm.deptdate)).toISOString() || '').split(/-|T/);
           if (dates.length > 2) {
             var year = parseInt(dates[0]);
             var month = parseInt(dates[1]);
             if (year === 2014) {
               season = (month < 11)?"S14":'W14';
             } else if (year === 2015) {
               if (month < 5) season = 'W14';
               else season = (month < 11)?'S15':'W15';
                 }
           }
         } catch(e){
           cdl.error('GTM Ext Season:'+ e);
         }
         return season;
       }());
       var article = cdl.transpose('ArticleNb={articlenb}&ProductName={productname}&Category={category}&Quantity={quantity}&SinglePrice={singlePrice}&Brand={brand}&Property1={property1}&Property2={property2}&Property3={property3}&Property4={property4}&Property5={property5}{end}', {
            'articlenb'   : cdpm.accomcode || '1'
          , 'productname' : "Package booking for "+(cdpm.paxadult || 0)+" Adults and "+(cdpm.paxchild || 0)+" Children"
          , 'category'    : season+" > Package > "+(cdpm.destairport || '')
          , 'quantity'    : '1'
          , 'singlePrice' : cdpm.totalprice || ''
          , 'brand'       : cdpm.touroperator || ''
          , 'property1'   : cdpm.deptairport || ''
          , 'property2'   : cdpm.destairport || ''
          , 'property3'   : cdpm.duration || ''
          , 'property4'   : cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || ''
          , 'property5'   : cdpm.boardbasis || ''
          , 'end'         : unescape("%0D%0A")
        });
       cdl.insertImg({
            'name'      : 'affilinet'
          , 'src'       : 'https://being.successfultogether.co.uk/registersale.asp?site={site}{ref}&order={order}{voucher}&basket={article}'
          , 'params'    : {
              'site' : '9416'
            , 'ref' : (cdpm.attribution && cdpm.attribution.utm_source)?('&ref='+cdpm.attribution.utm_source):''
            , 'order' : cdpm.bookingref || '0'
            , 'voucher' : cdpm.voucher?('&vcode='+cdpm.voucher):(cdpm.promotion && cdpm.promotion.code)?('&vcode='+cdpm.promotion.code):''
            , 'article' : article
          }
          , 'dataLayer' : edl
       });
     } catch(e) {
       cdl.error('GTM Ext Attr: '+e)
     }
     return edl
   }(window.dataLayer_59MJR4, window.CATTDL));
 </script>

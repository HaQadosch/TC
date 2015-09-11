<script id="GTM-N8HKDL_doubleClick">
  (function gtm_doubleclick(cdl, dl){
    'use strict';
    var cdpm = cdl && cdl.CATTParams || '';
    var lands = JSON.parse(cdl.ckget('gtm_attr') || '[]');
    var lastLand = lands[lands.length-1];
    var ppcSession = Boolean(lastLand[0] || /ppc/i.test(lastLand[1]));
    if (cdl && dl && ppcSession) try {
      var dlp = document.location.pathname;
      var bkgParams = cdl.transpose(';num={num}', {
        'num'  : Number(Math.random() * 10000000000000).toString()
      });
      if (/itinerary.aspx/i.test(dlp)){
        bkgParams = cdl.transpose(';qty={qty};cost={cost};u1={u1};u2={u2};u3={u3};u4={u4};u5={u5};u6={u6};u7={u7}', {
            'qty': '1'
          , 'cost': cdpm.bookingvalue || 0
          , 'u1' : cdpm.departureairportselected || 'na'
          , 'u2' : cdpm.destinationairportselected || 'na'
          , 'u3' : cdl.gadate(cdpm.deptdate || 0)
          , 'u4' : cdl.gadate(cdpm.retdate || 0)
          , 'u5' : cdpm.basketcontent || '0'
          , 'u6' : cdpm.paxadult || '0'
          , 'u7' : cdpm.paxchild || '0'
          , 'ord' : cdpm.bookingref || 'na'
        });
      }
      if (cdl.insertImg) cdl.insertImg({
          'name'     : 'doubleclick'
        , 'dataLayer': window.dataLayer_N8HKDL
        , 'src'      : 'https://ad.doubleclick.net/ddm/activity/src={src};type={type};cat={cat}{bkg};ord={ord}?'
        , 'params'   : {
            'src'  : '5040727'
          , 'type' : /itinerary.aspx/i.test(dlp)?'tc-sales':'tc-count'
          , 'cat'  : /select.aspx/i.test(dlp)?'tcschres':/extras.aspx/i.test(dlp)?'tcextras':/seats.aspx/i.test(dlp)?'tcseatmp':/details.aspx/i.test(dlp)?'tccontdt':/payment.aspx/i.test(dlp)?'tcpaydt':/itinerary.aspx/i.test(dlp)?'tcslconf':'tcschres'
          , 'bkg'  : bkgParams
          , 'ord'  : /itinerary.aspx/i.test(dlp)?(cdpm.bookingref || 'na'):'1'
        }
      });
    } catch(e) {
      cdl.error('GTM DoubleClick: '+e);
    } finally {
      var timeStart = (cdl.CATTParams?cdl.CATTParams.timestart:0) || 0;
      var stampEpoch = +new Date();
      dl.push({'event': 'GTM DoubleClick', 'pid': cdpm.pageid || '', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
    }
    return cdl;
  }(window.CATTDL, window.dataLayer_N8HKDL));
</script>
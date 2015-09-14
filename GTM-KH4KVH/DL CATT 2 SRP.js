<script id='GTM-KH4KVH_cattdlSRP'>
    (function gtm_cattdlSRP(jQ, dl, cdl) {
      'use strict';
      var timeStart = cdl.CATTParams?cdl.CATTParams.timestart:0;
      var cdpm;
      var ld = cdl._;
      if (jQ && cdl && !dl.some(function(a){return /CATTDL SRP/i.test(a && a.event || '');}) ) try {
        cdpm = cdl.CATTParams;
        var keeps = {};
        var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}');

        var jqmain = jQ('div#fh_results');
        var jqSelPage =  jqmain.find('div.numbers em span:eq(0)').text() || '1';
        var jqSortOption = jqmain.find('select.ordered-dropdown > option:selected').text()  || "";
        var accoms = jqmain.find('div.ResultsListView').toArray().map(function (e, i) {
          return {
            'name'      : jQ(e).find('span.headerInfo span.name').text()
            , 'id'        : cdpm.accomguid || cdpm.accomcode || ''
            , 'totalprice': (/(\d+.?\d+)/.exec(jQ(e).find('.ResultItemHeaderTotalPrice').text() || '') || []).pop() || ''
            , 'pricepp'   : (/(\d+.?\d+)/.exec(jQ(e).find('.ResultItemHeaderPricePerPerson').text() || '') || []).pop() || ''
            , 'location'  : jQ(e).find('.location').text() || ''
            , 'starrating': (/(\d+)/i.exec(jQ(e).find('span.starRating img').attr('title') || '') || []).pop() || ''
            , 'duration'  : cdpm.duration || ''
            , 'boardbasis': (jQ(e).find('.boardBasisOptions .option.selected input').val() || '').toLowerCase()
            , 'imgurl'    : jQ(e).find('div.ResultItemInfoImage img').attr('src') || ''
            , 'resort'    : jQ(e).find('.location').text() || ''
            , 'pos'       : i
          };
        });

        var departweeknbr = (function gtm_weekNbr(dd){
          var wNbr = 0;
          var date = new Date(dd);
          var dateY = date.getFullYear();
          var firstOfJan = new Date(dateY,0,1);
          wNbr = Math.ceil((((date - firstOfJan) / 86400000) + firstOfJan.getDay()+1)/7) || 0;
          return wNbr || 0;
        }(cdpm.deptdate || ''));

        keeps = {
          'accoms': accoms
          , 'departweeknbr': departweeknbr
          , 'selpage': jqSelPage
          , 'sortoption': jqSortOption
        };

        ld.assign(cdl.CATTParams, keeps);
        ld.assign(ck_cdpm, keeps);

        cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.thomascook.com');
      } catch(e) {
        cdl.error('GTM CATTDL SRP: '+e);
      } finally {
        var stampEpoch = +new Date();
        dl.push({'event': 'CATTDL SRP', 'pid': cdl.CATTParams.pageid, 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
      }
      return jQ && cdl;
    }(window.jQuery, window.dataLayer, window.CATTDL));
</script>
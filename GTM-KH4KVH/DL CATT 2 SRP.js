<script id='GTM-KH4KVH_cattdlSRP'>
    (function gtm_cattdlSRP(jQ, dl, cdl) {
        'use strict';
        if (jQ && jQ.extend && cdl && !dl.some(function(a){return /CATTDL SRP/i.test(a && a.event || '');}) ) try {
            var cdpm = cdl.CATTParams;
            var newPM = {};
            var keeps = {};

            var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}');

            newPM.deptdate = cdpm.deptdate || (/dd=(\d\d)(\d\d)(\d\d\d\d)/i.exec((jQ('a[href*=accomIndex]:eq(0)').attr('href') || '')) || []).slice(1).join('/').replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/g, '$2/$1/$3') || '';
            newPM.selpage = jQ('.pager.alt span.active:eq(0)').text() || cdpm.searches.pageNum || cdpm.searchresultspagenbr || jQ(jQ('div.numbers em span')[1]).text() || 1;
            newPM.sortoption = jQ('#SelectOrderType > option:selected').text().replace(/\(|\)/g, '')  || jQ('select#sortby :selected').val() || (jQ('select.ordered-dropdown option[selected="selected"]').text()) || cdpm.sortoption || "";

            var accoms = jQ('div.ResultsListView');
            newPM.accoms = [];

            if (accoms.length) {
                accoms.each(function gtm_forEachAccoms(i, e) {
                    newPM.accoms.push({
                        'name' 			 : jQ(e).find('.name').text() || '',
                        'id' 			   : (/(\d+)/i.exec(jQ(e).find('.exactMatch').attr('id')) || []).pop() || '',
                        'totalprice' : (/(\d+.?\d+)/.exec(jQ(e).find('.ResultItemHeaderTotalPrice').text() || '') || []).pop() || '',
                        'pricepp'    : (/(\d+.?\d+)/.exec(jQ(e).find('.ResultItemHeaderPricePerPerson').text() || '') || []).pop() || '',
                        'location'   : jQ(e).find('.location').text() || '',
                        'starrating' : (/(\d+)/i.exec(jQ(e).find('.starRating').attr('title') || '') || []).pop() || '',
                        'duration' 	 : cdpm.duration || '',
                        'boardbasis' : (jQ(e).find('.boardBasisOptions .option.selected input').val() || '').toLowerCase(),
                        'imgurl' 		 : jQ(e).find('.ResultItemInfoHotelImage img').attr('src') || '',
                        'resort' 		 : jQ(e).find('.location').text() || '',
                        'position' 	 : i+1  || 0
                    });
                });
            }

            keeps.departweeknbr = (function gtm_weekNbr(dd){
                var wNbr = 0;
                var dates = dd && dd.split(/\//g) || [];
                if (dates.length > 2){
                    var dateY = dates.pop();
                    var date = new Date(dateY, dates.pop()-1, dates.pop());
                    var firstOfJan = new Date(dateY,0,1);
                    wNbr = Math.ceil((((date - firstOfJan) / 86400000) + firstOfJan.getDay()+1)/7) || 0;
                }
                return wNbr || 0;
            }(newPM.deptdate || ''));

            jQ.extend(cdl.CATTParams, newPM, keeps);
            jQ.extend(ck_cdpm, keeps);
            var domainName = cdl.twlh(/airtours/i)?'.airtours.co.uk':(cdl.twlh(/club18-30/i)?'.club18-30.com':(cdl.twlh(/directholidays/gi)?'.directholidays.co.uk':'.thomascook.com'));
            cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', domainName);
        } catch(e) {
            cdl.error('GTM CATTDL SRP: '+e);
        } finally {
            var stampEpoch = +new Date();
            dl.push({'event': 'CATTDL SRP', 'pid': cdl.CATTParams.pageid, 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - window.dataLayer[0]['gtm.start']});
        }
        return jQ && jQ.extend && cdl;
    }(window.jQuery, window.dataLayer, window.CATTDL));
</script>
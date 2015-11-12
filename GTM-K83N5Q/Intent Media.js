<script id='GTM-K83N5Q_IntentMedia'>
(function gtm_IntentMediaDL(dl, cdl, cdpm){
    'use strict';
    if (dl && cdl && cdpm) try {
        cdl.DL_intentMedia = {
            page_id             : (cdpm.lob || '')+'_'+(cdpm.pageid || ''),
            visitor_id          : cdpm.gaguid || cdpm.utamguid || 'na',
            travelers           : cdpm.paxtotal || '2',
            timestamp           : +Date.now() || ' ',
            rooms               : cdpm.rooms  || '1',
            // hotel_property_id   : cdpm.accomguid || ' ',
            available_property_ids : (cdpm.srpresults || []).length && cdpm.srpresults.map(function(e){return e.accomguid || ''}).join('_') || 'na',
            callback            : ' ',
            travel_date_start   : /\//i.test(cdpm.deptdate || '') && (cdpm.deptdate || '').replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3$2$1') || cdpm.deptdate && (new Date(cdpm.deptdate)).toISOString().replace(/(\d\d\d\d)-(\d\d)-(\d\d)T.*/i, '$1$2$3') || '',
            travel_date_end     : cdpm.returndate && (new Date(cdpm.returndate)).toISOString().replace(/(\d\d\d\d)-(\d\d)-(\d\d)T.*/i, '$1$2$3') || (cdpm.retdate || '').replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3$2$1') ||  '',
            adults              : cdpm.paxadult || ' ',
            children            : parseInt(cdpm.paxchild || 0) + parseInt(cdpm.paxinfant || 0),
            site_country        : 'UK',
            site_language       : 'EN',
            site_currency       : 'GBP',
            display_format_type : cdpm.device || ' ',
            ad_unit_id          :  (function gtm_intentAdID(l, p){
                var r = '';
                if (/package/i.test(l || '')) r = 'tck_ssn_pkg_XXX_ads_uk';
                else if (/hotels/i.test(l || '')) r = 'tck_ssn_hot_XXX_ads_uk';
                if (r && /search/i.test(cdpm.pageid || '')) r = r.replace('_XXX_', '_lst_');
                else if (r && /accom/i.test(cdpm.pageid || '')) r = r.replace('_XXX_', '_det_');
                return r;
            }(cdpm.lob, cdpm.pageid)) || 'na'
        };
    } catch(e) {
        cdl.error && cdl.error('GTM IntentMEdia DL:', e);
    } finally {
        dl.push({'event':'IntentMediaDL'});
    }
    return dl && cdl && cdpm && cdl.DL_intentMedia;
}(window.dataLayer_K83N5Q, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams));

(function gtm_intentMedia(jQ, dl, cdl, imdl){
    'use strict'
    if (jQ && dl && cdl && imdl) try {
        var imdlsrc = '//a.intentmedia.net/api/ssn/hotels/v1/impressions';

        jQ.ajax && jQ.ajax({
            type: "POST",
            url: imdlsrc,
            data: window.JSON && window.JSON.stringify && window.JSON.stringify(imdl),
            done: function gtm_JSONIntentMedia(data){
                try {
                    console.log('JSONData: ', data)
                } catch(ee) {
                    console.error('gtm_JSONIntentMedia: ', ee)
                }
            },
            fail: function errorPost(err, a, b){
                cdl.error('GTM intent media post error: ', err)
                console.log(a)
                console.log(b)
                console.log(src)
            },
            dataType: 'JSON'
        });
    } catch(e) {
        cdl.error && cdl.error('GTM IntentMedia:'+ e) || ''
    } finally {
        dl.push({'event':'intentMedia'})
    }
    return jQ && dl && cdl && imdl
}(window.CATTDL?window.CATTDL.jQ:!1, window.dataLayer_K83N5Q, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_intentMedia))
</script>

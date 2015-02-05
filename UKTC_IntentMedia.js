

/*
ad_unit_id
Package Path - Search Results Page: tck_ssn_pkg_lst_ads_uk
Package Path - Details Page: tck_ssn_pkg_det_ads_uk
Hotels Path - Search Results Page: tck_ssn_hot_lst_ads_uk
Hotels Path - Details Page: tck_ssn_hot_det_ads_uk

*/
Non v2
room ->  $('div.rooms-summary div.searchPanel-staticValue div').length
retDate -> new Date(+new Date(CATTDL.CATTParams.deptdate.replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3 $2 $1'))+(7*24*60*60*1000)).toLocaleString()

<script id='intentMedia'>
(function gtm_IntentMediaDL(dl, cdl, cdpm){
    'use strict';
    if (dl && cdl && cdpm) try {
        cdl.DL_intentMedia = {
            ad_unit_id      :  (function gtm_intentAdID(l, p){
                var r = '';
                if (/package/i.test(l || '')) r = 'tck_ssn_pkg_XXX_ads_uk';
                else if (/hotels/i.test(l || '')) r = 'tck_ssn_hot_XXX_ads_uk';
                if (r && /search/i.test(cdpm.pageid || '')) r = r.replace('_XXX_', '_lst_');
                else if (r && /accom/i.test(cdpm.pageid || '')) r = r.replace('_XXX_', '_det_');
                return r;
            }(cdpm.lob, cdpm.pageid)) || '',
            page_id             : (cdpm.lob || '')+'_'+(cdpm.pageid || ''),
            visitor_id          : cdpm.gaguid || cdpm.utamguid || '',
            travelers           : cdpm.paxtotal || '',
            timestamp           : +Date.now() || '',
            rooms               : (cdpm.srpresults || []).length && cdpm.srpresults.map(function(e){return e.accomguid || ''}).join('_') || cdpm.rooms  || '',
            hotel_property_id   : cdpm.accomguid || '',
            available_property_ids : || '',
            callback            : '',
            travel_date_start   : /\//i.test(cdpm.deptdate || '') && (cdpm.deptdate || '').replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3$2$1') || cdpm.deptdate && (new Date(cdpm.deptdate)).toISOString().replace(/(\d\d\d\d)-(\d\d)-(\d\d)T.*/i, '$1$2$3') || '',
            travel_date_end     : cdpm.returndate && (new Date(cdpm.returndate)).toISOString().replace(/(\d\d\d\d)-(\d\d)-(\d\d)T.*/i, '$1$2$3') || (cdpm.retdate || '').replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3$2$1') ||  '',
            adults              : cdpm.paxadult || '',
            children            : parseInt(cdpm.paxchild || 0) + parseInt(cdpm.paxinfant || 0),
            site_country        : 'UK',
            site_language       : 'EN',
            site_currency       : 'GBP',
            display_format_type : cdpm.device || ''
        };
    } catch(e) {
        cdl.error && cdl.error('GTM IntentMEdia DL:', e);
    } finally {
        dl.push({'event':'IntentMediaDL'});
    }
    return dl && cdl && cdpm && cdl.DL_intentMedia;
}(window.externalLayer || window.externalDataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams));

// ATG
(function gtm_intentMedia(jQ, dl, cdl, imdl){
    'use strict';
    if (jQ && dl && cdl && imdl) try {
        var imdlsrc = '//a.intentmedia.net/api/ssn/hotels/v1/impressions?';
        jQ.post && jQ.post(imdlsrc, imdl, 'JSON').done(function gtm_JSONIntentMedia(){
            imdl.call = {
                src:src,
                status:'fired'
            };
        }).error(function errorPost(err, a, b){
            cdl.error('GTM intent media post error');
            console.log(err);
            console.log(a);
            console.log(b);
        });
    } catch(e) {
        cdl.error && cdl.error('GTM IntentMedia:'+ e) || '';
    } finally {
        dl.push({'event':'intentMedia'});
    }
    return jQ && dl && cdl && imdl;
}(window.jQuery, window.externalLayer || window.externalDataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_intentMedia))
</script>


// URL Get format, V2 site
(function gtm_intentMedia(jQ, dl, cdl, imdl){
    'use strict'
    if (jQ && dl && cdl && imdl) try {
        var imdlsrc = '//a.intentmedia.net/api/ssn/hotels/v1/impressions?'
        var src = imdlsrc+
            'ad_unit_id='+(imdl.ad_unit_id || '')+'&'+
            'page_id='+(imdl.page_id || '')+'&'+
            'visitor_id='+(imdl.visitor_id || '')+'&'+
            'travelers='+(imdl.travelers || '')+'&'+
            'timestamp='+(imdl.timestamp || '')+'&'+
            'rooms='+(imdl.rooms || '')+'&'+
            'hotel_property_id='+(imdl.hotel_property_id || '')+'&'+
            'callback='+(imdl.callback || '')+'&'+
            'travel_date_start='+(imdl.travel_date_start || '')+'&'+
            'travel_date_end='+(imdl.travel_date_end || '')+'&'+
            'adults='+(imdl.adults || '')+'&'+
            'children='+(imdl.children || '')+'&'+
            'available_property_ids='+(imdl.available_property_ids || '')+'&'+
            'site_country='+(imdl.site_country || '')+'&'+
            'site_language='+(imdl.site_language || '')+'&'+
            'site_currency='+(imdl.site_currency || '')+'&'+
            'display_format_type='+(imdl.display_format_type || '')+'&'+
            'hotel_country_code='+(imdl.hotel_country_code || '')+'&'+
            'hotel_state_code='+(imdl.hotel_state_code || '')+'&'+
            'hotel_city_name='+(imdl.hotel_city_name || '');

        jQ.getJSON && jQ.getJSON(imdlsrc, imdl, 'JSON').done(function gtm_JSONIntentMedia(){
            imdl.call = {
                src:src,
                status:'fired'
            }
        }).error(function errorPost(err, a, b){
            cdl.error('GTM intent media post error')
            console.log(err)
            console.log(a)
            console.log(b)
            console.log(src)
        })
    } catch(e) {
        cdl.error && cdl.error('GTM IntentMedia:'+ e) || ''
    } finally {
        dl.push({'event':'intentMedia'})
    }
    return jQ && dl && cdl && imdl
}(window.jQuery, window.externalLayer || window.externalDataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_intentMedia))

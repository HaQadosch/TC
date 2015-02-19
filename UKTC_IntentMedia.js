

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

<script id='gtm_IntentMediaDL'>
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
            rooms               : cdpm.rooms  || '',
            hotel_property_id   : cdpm.accomguid || '',
            available_property_ids : (cdpm.srpresults || []).length && cdpm.srpresults.map(function(e){return e.accomguid || ''}).join('_') || '',
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


// get request alternative
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

        jQ.ajax && jQ.ajax({
             type: "POST",
             url: url,
             data: data,
             success: success,
             dataType: dataType
           });
        jQ.getJSON && jQ.getJSON(src, function gtm_JSONIntentMedia(data){
            try {
                console.log('JSONData: ', data)
            } catch(ee) {
                console.error('gtm_JSONIntentMedia: ', ee)
            }
        }).error(function errorPost(err, a, b){
            cdl.error('GTM intent media post error: ', err)
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



// URL Get format, V2 site
/*
ad_unit_id=tck_ssn_pkg_lst_ads_uk&
page_id=package_search&
visitor_id=2020777701&
travelers=2&
timestamp=1422383315700&
rooms=1&
hotel_property_id=&
callback=&
travel_date_start=20150227&
travel_date_end=20150312&
adults=2&
children=0&
available_property_ids=123456_234987_456987_123098_583928_235753_283875_183848&
hotel_country_code=ES&
hotel_state_code=&
hotel_city_name=Barcelona+City&
site_country=UK&
site_language=EN&
site_currency=GBP&
display_format_type=desktop
*/


<script id='gtm_IntentMedia'>
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
}(window.externalLayer || window.externalDataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams));

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
}(window.jQuery, window.externalLayer || window.externalDataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_intentMedia))
</script>

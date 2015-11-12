<script id='GTM-NCQJZJ_cattdlNewView'>
(function gtm_cattdlNewView(jQ, w, dl, cdl, loc) {
    'use strict';
    setTimeout(function cattNewView() {
        if (jQ && cdl) try {
            var cdpm = cdl.CATTParams || {}
            var keeps = {}
            var locpathname = loc.pathname == '/' && /#!/i.test(loc.hash) && (/([^#!][^?]*)/i.exec(loc.hash) || ['']).pop() || loc.pathname
            var wgetData = w.getPageData && w.getPageData(locpathname) || {}

            //Set previous pageid       
            var params = JSON.parse(CATTDL.ckget('gtm_params') || '{}');
            params.previouspageid = cdpm.pageid || '';
            CATTDL.ckset('gtm_params', JSON.stringify(params), '', '/', '.'+(cdpm.cookiedomain || 'neckermann.nl'));    

            //Not keeping all params from the previous view. Refreshing CATTParams.
            var refreshparams = [
                "abtanumber"
                , "consultantref"
                , "dreamcapturerid"
                , "emailguid"   
                , "ecircleid"
                , "gaguid"
                , "utmaguid"
                , "utmbguid"
                , "urlparams"
                , "domevents"
                , "cookiedomain"
            ]
            var cdpmkeys = Object.keys(cdpm);
            
            if (!/\/packages\//i.test(locpathname) || (wgetData && wgetData.details && wgetData.matrix)) {
                for (var i in cdpmkeys){
                    var reg = new RegExp(cdpmkeys[i], 'i');
                    if (!reg.test(refreshparams.join('|'))) delete cdpm[cdpmkeys[i]]
                };
            }

            //url & cookies
            var refurl = decodeURIComponent(cdpm.urlparams && cdpm.urlparams.fullurl || "");
            cdpm.urlparams = {};
            cdpm.urlparams.paramstring = "";
            var cdurl = cdpm.urlparams;
            if (/\/#\!\//.test(loc.href)) {
                cdurl.paramstring = decodeURIComponent((/([?].*)/.exec(loc.hash) || []).pop());     
                cdurl.fullurl = decodeURIComponent(loc.href.replace(/#\!\//,'') || "");
            } else {
                cdurl.paramstring = decodeURIComponent(loc.search);
                cdurl.fullurl = decodeURIComponent(loc.href || "");
            };
                cdurl.pathname = locpathname;
                ((cdurl && cdurl.fullurl).split(/\?|&|#/g).slice(1)).forEach(function urlparams(prm, _){ var cur = /([^=]+)=(.*)/i.exec(prm); if (cur && cur.length > 1) {cdurl[cur[1]]=cur[2]} });
                cdurl.referrer = decodeURIComponent(refurl || document.referrer ||  "");
            cdpm.urlparams = cdurl;

            cdpm.cookies = {}; (document.cookie.split(/;\s?/g)).forEach(function cookies(coo, _){ var cur = /([^=]+)=(.*)/i.exec(coo); if (cur && cur.length > 1) cdpm.cookies[cur[1]]=cur[2]})
            cdpm['gaguid'] = cdpm.gaguid || cdpm.cookies && (/\.([^\.]*)\.\d*$/i.exec(cdpm.cookies._ga || '') || []).pop() || ""
            cdpm['utmaguid'] = cdpm.utmaguid || (cdpm.cookies && cdpm.cookies.__utma && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma) && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma) || []).pop() || "" 
            cdpm['utmbguid'] = cdpm.utmbguid || cdpm.cookies && cdpm.cookies.__utmb || ""
            cdpm['pagetimestamp'] = (w.Date && +w.Date.now() || '0');

            //define pageid based on url
            cdpm['pageid'] = ({
                'search'            : 'search',
                'searchresults-map' : 'searchmap',
                'holidays'          : 'searchseo',
                'packages'          : 'accom',
                'accommodatie'      : 'accomseo',
                'customize'         : 'cust',
                'pax'               : 'pax',
                'payment'           : 'pay',
                'confirmation'      : 'booking',
                'process-payment'   : 'secure',
                ''                  : 'home'
            })[(/\/([^\/]*)/i.exec(locpathname) || ['']).pop()];
            if (wgetData && wgetData.source === 'calendar') {cdpm.pageid = 'accomcalendar'};

            if (!cdpm.pageid) {
                if(/\/.+\/search$/.test(locpathname)) {cdpm.pageid = 'search'}
                if(/\/.+\/searchresults-map$/.test(location.pathname)) {cdpm.pageid = 'searchmap'}
            };        

            //journey steps path
            var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}')
            if (ck_cdpm.trailingsteps && /\(/i.test(ck_cdpm.trailingsteps)){
                var steps = (ck_cdpm.trailingsteps.split(/([^\)]+\(\d+\))$/) || []).filter(function steps(e){return e})
                var lastSteps = /(.+)\((\d+)\)/.exec(steps.pop())
                if (lastSteps[1] === cdpm.pageid) 
                    lastSteps = lastSteps[1]+'('+(++lastSteps[2])+')'
                else 
                    lastSteps = /home/i.test(cdpm.pageid)?'home(1)':(lastSteps[0]+cdpm.pageid+'(1)');
                keeps['trailingsteps'] = (/home/i.test(cdpm.pageid) && steps.join('') || '')+lastSteps
            } else keeps['trailingsteps'] = cdpm.pageid+'(1)';


            if (cdurl) {
            cdpm['internalcampaignid'] = cdurl.intcmp || (w.CATTDL.ewls(/intcmp=([^&|\s|\?]*)/i) || []).pop() || ""
            cdpm['optimostcreative'] = window.opCreative || ""
            cdpm['emailguid'] = cdurl.user_id || (w.CATTDL.ewls(/user_id=([^&]*)/i) || []).pop() || ""
            cdpm['ecircleid'] =  cdurl.user_id ||(w.CATTDL.ewls(/user_id=([^&|\s|\?]*)/i) || []).pop() || ""
            cdpm['dreamcaptureid'] =  cdpm.urlparams.dc_id || (w.CATTDL.ewls(/dc_id=([^&|\s|\?]*)/i) || []).pop()  || ""
            cdpm['abtanumber'] = cdurl.abtaNumber || (w.CATTDL.ewls(/abtaNumber=([^&|\s|\?]*)/i) || []).pop() || ""
            cdpm['consultantref'] =  cdurl.consultantRef || (w.CATTDL.ewls(/consultantRef=([^&|\s|\?]*)/i) || []).pop() || ""
            cdpm['qsearchedkeyword'] = cdurl.q || w.CATTDL.ewls(/[&\?]q=([^&|\s|\?]*)/i) && w.CATTDL.ewls(/[&\?]q=([^&|\s|\?]*)/i).pop() || ""
            }
            cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', cdpm.cookiedomain);
            jQ.extend(cdl.CATTParams, keeps);
            cdpm.pageid = cdpm.pageid || 'home';
            
            window.CATTDL.CATTParams = cdpm
        } catch(e) {
            w.CATTDL.error('GTM CATTDL New View: '+e)
        } finally {
            dl.push({'event': 'core_'+(cdpm.pageid || 'home')});
        }
        return w.CATTDL
    }, 500)
}(window.jQuery, window, window.dataLayer_NCQJZJ, window.CATTDL, document.location))
</script>
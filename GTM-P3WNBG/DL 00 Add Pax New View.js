<script id='GTM-P3WNBG_cattdlAddPaxNewView'>
(function gtm_cattdlAddPaxNewView(jQ, w, dl, cdl, loc) {
    'use strict';
    setTimeout(function cattNewView() {
        if (jQ && cdl) try{
            w.CATTDL = w.CATTDL || {}
            var cdpm = w.CATTDL.CATTParams || {}
            var keeps = {}
            var locpathname = (loc.pathname == '/' && /#!/i.test(loc.hash) && (/([^#!][^?]*)/i.exec(loc.hash) || ['']).pop() || loc.pathname  || "/");
            if(!String.prototype.trim){String.prototype.trim=function trim(){return this.replace(/^\s+|\s+$/g,"")}}

                //Set previous pageid       
                /*window.sessionStorage.setItem('gtm_previouspageid', cdpm.pageid || '')*/
                var params = JSON.parse(CATTDL.ckget('gtm_params') || '{}');
                params.previouspageid = cdpm.pageid || '';
                CATTDL.ckset('gtm_params', JSON.stringify(params), '', '/', '.'+(cdpm.cookiedomain || 'thomascook.com'));

                if(window.getPageData('pax-go-to-passenger-details-is-valid') && window.getPageData('pax-go-to-passenger-details-is-valid').data === "true"){
                    var refurl = cdpm.urlparams && cdpm.urlparams.fullurl || "";
                    cdpm.urlparams = {};
                    var cdurl = cdpm.urlparams;
                    cdurl.paramstring = "";
                    if (/\/#\!\//.test(loc.href)) {
                        cdurl.paramstring = decodeURIComponent((/([?].*)/.exec(loc.hash) || []).pop());
                        cdurl.fullurl = decodeURIComponent((loc.href).replace(/#\!\//,'') || "");
                    } else {
                        cdurl.paramstring = decodeURIComponent(loc.search);
                        cdurl.fullurl = decodeURIComponent(loc.href || "");
                    };
                        cdurl.pathname = locpathname;
                        ((cdurl && cdurl.paramstring).split(/\?|&/g).slice(1)).forEach(function urlparams(prm, _){ var cur = /([^=]+)=(.*)/i.exec(prm); if (cur && cur.length > 1) {cdurl[cur[1]]=cur[2]} });
                        cdurl.referrer = refurl || decodeURIComponent(document.referrer) ||  "";
                    cdpm.urlparams = cdurl;

                    cdpm.cookies = {}; (document.cookie.split(/;\s?/g)).forEach(function cookies(coo, _){ var cur = /([^=]+)=(.*)/i.exec(coo); if (cur && cur.length > 1) cdpm.cookies[cur[1]]=cur[2]})
                    cdpm['gaguid'] = cdpm.gaguid || cdpm.cookies && (/\.([^\.]*)\.\d*$/i.exec(cdpm.cookies._ga || '') || []).pop() || (w.CATTDL.ewdc(/_ga=[^\.]*\.\d+\.([^\.]*)\.\d+/i) || []).pop() || ""      
                    cdpm['utmaguid'] = cdpm.utmaguid || (cdpm.cookies && cdpm.cookies.__utma && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma) && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma) || []).pop() || (w.CATTDL.ewdc(/_utma=[^;\.%=]*\.([^;\.%=]*)\./i) || []).pop() || ""   
                    cdpm['utmbguid'] = cdpm.utmbguid || cdpm.cookies && cdpm.cookies.__utmb || (w.CATTDL.ewdc(/_utmb=([^;%=]*)/i) || []).pop() || ""
                    
                    cdpm['pageid'] = 'addpax';
                    cdpm['pagetimestamp'] = (w.Date && +w.Date.now() || '0');

                    var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}')
                    if (ck_cdpm.trailingsteps && /\(/i.test(ck_cdpm.trailingsteps)){
                        var steps = (ck_cdpm.trailingsteps.split(/([^\)]+\(\d+\))$/) || []).filter(function steps(e){return e})
                        var lastSteps = /(.+)\((\d+)\)/.exec(steps.pop())
                        if (lastSteps[1] === cdpm.pageid) 
                            lastSteps = lastSteps[1]+'('+(++lastSteps[2])+')'
                        else 
                            lastSteps = /home/i.test(cdpm.pageid)?'home(1)':(lastSteps[0]+cdpm.pageid+'(1)');
                        keeps['trailingsteps'] = (/home/i.test(cdpm.pageid) && steps.join('') || '')+lastSteps
                    } else {keeps['trailingsteps'] = cdpm.pageid+'(1)'};

                    cdpm['internalcampaignid'] = cdpm.urlparams && cdpm.urlparams.intcmp || (w.CATTDL.ewls(/intcmp=([^&|\s|\?]*)/i) || []).pop() || ""
                    cdpm['optimostcreative'] = window.opCreative || ""
                    
                    cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.'+(cdpm.cookiedomain || 'thomascook.com'));
                    jQ.extend(cdl.CATTParams, keeps);
                }   
                    window.CATTDL.CATTParams = cdpm
        } catch(e) {
            w.CATTDL.error('GTM CATTDL Add Pax New View: '+e)
        } finally {
            if(window.getPageData('pax-go-to-passenger-details-is-valid') && window.getPageData('pax-go-to-passenger-details-is-valid').data === "true") {dl.push({'event': 'core_addpax'}) };
        }
        return w.CATTDL
    }, 500)
}(!window.jQuery?!1:window.jQuery, window, !window.dataLayer?!1:window.dataLayer, !window.CATTDL?!1:window.CATTDL, document.location))
</script>
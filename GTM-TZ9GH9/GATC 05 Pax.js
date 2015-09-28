<script id='GTM-TZ9GH9_gatcPax'>
(function gtm_gatcPax(jQ, cdl, gadl, w, d){
    'use strict';
    if (cdl && gadl) try {
        var tn = gadl.trackername+'.' || ''
        var gawa = gadl.webanalytics || {}
        w._gaq = w._gaq || []
        var wgp = function gtm_wgp(arr){ return w._gaq.push(arr)};
        var cdpm = cdl.CATTParams
        var cdurl = cdpm.urlparams || {};       
        var locpathname = cdurl && cdurl.pathname || loc.pathname || '';
        var locsearch = cdurl && cdurl.paramstring || loc.search || '';
        var lochref = cdurl && cdurl.fullurl || loc.href || '';

        wgp([tn+'_setAccount', gadl.profileid]);
        wgp([tn+'_setDomainName', gadl.cookiedomain]);
        wgp([tn+'_setAllowLinker', gadl.allowlinker]);
        wgp([tn+'_addIgnoredRef', 'www1.thomascook.com']); 
        if (jQ && gadl.organicsearch) jQ.each(gadl.organicsearch, function gtm_organicSearch(domain, term){wgp([tn+'_addOrganic', domain, term])})
        if (jQ && gawa.customvars) jQ.each(gawa.customvars, function gtm_customvars(_, custVar){if (custVar.value !== '') wgp([tn+'_setCustomVar', custVar.index, custVar.name, custVar.value, custVar.scope])});

        var fullVP = gawa.vp+'?'+gawa.qsp_st+'&'+gawa.qsp_cat+'&'+gawa.qsp_p;
        wgp([tn+'_set', 'page', fullVP]);   
        wgp([tn+'_trackPageview', fullVP]);

        for (evt in gawa.events) {
            var gevt = gawa.events[evt]
            if (gevt.action) wgp([tn+'_trackEvent', gevt.category, gevt.action, gevt.label, gevt.value, gevt.noninteraction]);
        };

        (function gtm_callGAscript() { var ga = d.createElement('script'); ga.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js'; var s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s)}())
    } catch(e) {
        cdl.error('GTM UK TC GATC Pax: '+e)
    }
    return cdl && gadl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_gatc, window, document))
</script>
<script>
(function gtm_gatcSRP(jQ, cdl, gadl, w, d){
    'use strict';
    if (jQ && cdl && gadl) try {
        var tn = gadl.trackername+'.' || ''
        var gawa = gadl.webanalytics || {}
        w._gaq = w._gaq || []
        var wgp = function gtm_wgp(arr){ return w._gaq.push(arr)};

        wgp([tn+'_setAccount', gadl.profileid]);
        wgp([tn+'_setDomainName', gadl.cookiedomain]);
        wgp([tn+'_setAllowLinker', gadl.allowlinker]);
        wgp([tn+'_addIgnoredRef', gadl.addignoredref]);

        if (jQ && gadl.organicsearch) jQ.each(gadl.organicsearch, function gtm_organicSearch(domain, term){wgp([tn+'_addOrganic', domain, term])})
        if (jQ && gawa.customvars) jQ.each(gawa.customvars, function gtm_customvars(_, custVar){if (custVar.value !== '') wgp([tn+'_setCustomVar', custVar.index, custVar.name, custVar.value, custVar.scope])});

        var fullVP = gawa.vp+'?'+gawa.qsp_st+'&'+gawa.qsp_cat+'&'+gawa.qsp_p;
        wgp([tn+'_trackPageview', fullVP])

        for (evt in gawa.events) {
            var gevt = gawa.events[evt]
            if (gevt.action) wgp([tn+'_trackEvent', gevt.category, gevt.action, gevt.label, gevt.value, gevt.noninteraction]);
        };

        (function gtm_callGAscript() {var ga = d.createElement('script'); ga.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js'; var s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s)}());

        var accoms = jQ('.js-result-item') || jQ([]);
        accoms.find('button.src-srpResult-headerWishlist').on('click', function(d){
            wgp([tn+'_trackEvent', 'FrogWishList', d.target.innerText.replace(/Wish List/i, 'Add'), d.target.parentElement.parentElement.dataset.resultId || 0])
        });

        try{
            if (/lastselfacet=/i.test(location.search)){
                var facetID =  /lastselfacet=([^&\s]+)/i.exec(location.search) && /lastselfacet=([^&\s]+)/i.exec(location.search).pop() || 0
                var facets=[];facets[12004]="Star Rating";facets[18002]="TripAdvisor Rating";facets[17002]="Facilities";facets[56008]="Activities";facets[17005]="Location";facets[99010]="Discount in percentage";facets[99018]="Discount in pounds";facets[99012]="Tour Operator";facets[65012]="Product";facets[19012]="Party";facets[19008]="Departure Date";facets[19010]="Holiday Duration";facets[19006]="Departure Airport";facets[62010]="Destination";facets[30001]="Resort";facets[19002]="Board Basis";facets[87012]="Featured Holiday";facets[86010]="Price Per Adult"
                wgp([tn+'_trackEvent', 'ATG Facet Interaction', 'Facet Selected', facets[facetID] || ('unknown_'+facetID), 1, true]);
            } else if (/clear=/i.test(location.search)){
                var clearedFacet =  /clear=([^&\s]+)/i.exec(location.search) && /clear=([^&\s]+)/i.exec(location.search).pop() || 'unknown'
                wgp([tn+'_trackEvent', 'ATG Facet Interaction', 'Clear Facet', clearedFacet, 1, true]);
            }
        } catch(e) {}

    } catch(e) {
        cdl.error('GTM UK TC GATC SRP: '+e)
    }
    return jQ && cdl && gadl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_gatc, window, document))
</script>

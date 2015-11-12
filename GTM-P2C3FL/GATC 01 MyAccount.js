<script id='GTM-P2C3FL_gatcMA'>
(function gtm_gatcMA(jQ, cdl, gadl, w, d) {
    'use strict';
    if (jQ && cdl && gadl) try {
        var tn = gadl.trackername+'.' || ''
        var gawa = gadl.webanalytics || {}
        w._gaq = w._gaq || []
        var wgp = function gtm_wgp(arr){ return w._gaq.push(arr)};

        wgp([tn+'_setAccount', gadl.profileid]);
        wgp([tn+'_setDomainName', gadl.cookiedomain]);
        wgp([tn+'_setAllowLinker', gadl.allowlinker]);
        wgp([tn+'_addIgnoredRef', 'ww1.thomascook.com']);
        if (jQ && gadl.organicsearch) jQ.each(gadl.organicsearch, function gtm_organicSearch(domain, term){wgp([tn+'_addOrganic', domain, term])})
        if (jQ && gawa.customvars) jQ.each(gawa.customvars, function gtm_customvars(_, custVar){if (custVar.value !== '') wgp([tn+'_setCustomVar', custVar.index, custVar.name, custVar.value, custVar.scope])});

        wgp([tn+'_trackPageview'])

        for (evt in gawa.events) {
            var gevt = gawa.events[evt]
            if (gevt.action) wgp([tn+'_trackEvent', gevt.category, gevt.action, gevt.label, gevt.value, gevt.noninteraction]);
        }

        try{
            $("#util1 > ul > li").first().one("click",function gtm_clickRetrieveBooking(){
                wgp([tn+"_trackEvent","Retrieve Booking","href="+d.location.href,"referrer="+d.referrer,1,true])
            })
        }catch(e){};

        (function gtm_callGAscript() {var ga = d.createElement('script'); ga.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js'; var s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s)}());

        var as=d.getElementsByTagName("a");
        var inBound=new RegExp("^#$|^javascript:|"+d.location.host.match(/\w+\.\w+$|\w+\.co\.uk$/gi)[0].replace(".","\\.")+"|thomascook\\.com|google-analytics\\.com|mailto:","gi");
        for(var i=0;i<as.length;i++){
            var aHref=as[i].href;
            if(!aHref||aHref.match(inBound))continue;
            var aOnClick=as[i].onclick;
            as[i].onclick=function(){wgp([tn+"_trackEvent","outbound link","click",this.href.split("//")[1],1,true]);aOnClick()}
        }
    } catch(e) {
        cdl.error('GTM UK TC GATC MyAccount: '+e)
    } finally {
          window.dataLayer && window.dataLayer.push({'event':'GAPoolControl'});
      }
    return jQ && cdl && gadl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_gatc, window, document))
</script>
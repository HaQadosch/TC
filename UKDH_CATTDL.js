<script>
(function gtm_uatcdlHP(cdl, dl, loc){
    'use strict'
    if (cdl && cdl.CATTParams){
        try{
            var twlh = cdl.twlh;
            var cdpm = cdl.CATTParams;
            cdl.DL_uatc = {};
            cdl.DL_uatc.webanalytics = {};
            var locpathname = loc.pathname || '';
            var locsearch = loc.search || '';
            var lochref = loc.href || document.URL || '';
            var lochost = location.hostname || location.host || '';

            cdl.DL_uatc = {
                profileid       : 'UA-33036832-7',
                cookiedomain    : twlh(/airtours/i)?"airtours.co.uk":(twlh(/club18-30/i)?"club18-30.com":(twlh(/directholidays/i)?"directholidays.co.uk":"thomascook.com")),
                name            : 'CATTUATC',
                set             : {
                    anonymizeIp : false
                },
                allowLinker     : true,
                autolink        : ['thomascook.com','directholidays.co.uk', 'airtours.co.uk', 'club18-30.com']
            };
            cdl.DL_uatc.webanalytics = {
                page            : ((location.pathname || '')+(location.search || '')) || '',
                location        : location.href,
                metrics         : {
                    metric1         : {'paxadult'               : parseInt(cdpm.paxadult) || 0},
                    metric2         : {'paxchild'               : parseInt(cdpm.paxchild) || 0},
                    metric3         : {'paxinfant'              : parseInt(cdpm.paxinfant) || 0},
                    metric4         : {'paxtotal'               : parseInt(cdpm.paxtotal) || 0},
                    metric5         : {'rooms'                  : parseInt(cdpm.rooms) || 0},
                    metric6         : {'searchresultspagenbr'   : parseInt(cdpm.searchresultspagenbr) || 0},
                    metric7         : {'searchresultspages'     : parseInt(cdpm.searchresultspages) || 0},
                    metric8         : {'searchresultsperpage'   : parseInt(cdpm.searchresultsperpage) || 0},
                    metric9         : {'searchresultstotal'     : parseInt(cdpm.searchresultstotal) || 0},
                    metric10        : {'bookingvalue'           : parseInt(cdpm.bookingvalue) || 0},
                    metric11        : {'depositvalue'           : parseInt(cdpm.depositvalue) || 0},
                    metric12        : {'discountvalue'          : parseInt(cdpm.discountvalue) || 0},
                    metric13        : {'insurance'              : parseInt(cdpm.insurance) || 0},
                    metric14        : {'luggage'                : parseInt(cdpm.luggage) || 0},
                    metric15        : {'hitcount'               : 1}
                },
                dimensions      : {
                    dimension19     : {'errorcode'                  : cdpm.errors || ''},
                    dimension30     : {'utmaguid'                   : cdpm.utmaguid || ''},
                    dimension31     : {'utmbguid'                   : cdpm.utmbguid || ''},
                    dimension51     : {'gaguid'                     : cdpm.gaguid || 'empty'},
                    dimension32     : {'emailguid'                  : cdpm.emailguid || ''},
                    dimension65     : {'pagetimestamp'              : cdl.gadate && cdl.gatime && cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},
                    dimension75     : {'unixtimestamp'              : ''+(cdpm.pagetimestamp || 0) || ''}
                },
                events : {
                internalcampaignid  : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': lochost+locpathname, 'value': 1, 'noninteraction': true, 'page': locpathname+locsearch},
                errorcode           : {'category': 'Errors', 'action': cdpm.errors || (cdpm.errors && cdpm.errors.Code) || '', 'label': lochost+locpathname+'/?destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&deptairport='+(cdpm.departureairportselected || cdpm.deptairport || '')+'&deptdate='+(cdpm.deptdate || '')+'&duration='+(cdpm.duration || '')+'&appserver='+(cdpm.appserver || '')+(((/[\?].+/.exec(lochref)) || '').toString()).replace(/\?/, '&'), 'value': 1, 'noninteraction': true, 'page': locpathname+locsearch}
                }
            }
        } catch (e){cdl.error('GTM UK TC UATCDL HP: '+e)}
        dl.push({'event': 'UATCDL LP'})
        return cdl.DL_uatc;
    }
}(!window.CATTDL?!1:window.CATTDL, window.dataLayer, window.location))
</script>

<script>
(function gtm_uatcHP(jQ, cdl, uadl, w) {
    'use strict';
    if (jQ && cdl && uadl) try {
        var trackerName = (uadl.name+".") || ""
        var uawa = uadl.webanalytics || {};

        w = (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return window})(window,document,'script','//www.google-analytics.com/analytics.js','ga') || window;

        setTimeout(function(){
            w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name, 'allowLinker' : uadl.allowLinker});
            w.ga(trackerName+'require', 'displayfeatures');
            w.ga(trackerName+'require', 'linker');
            w.ga(trackerName+'linker:autoLink', uadl.autolink);
            var trc = ga.getByName(uadl.name);

            for (var setOption in uadl.set) {w.ga(trackerName+'set', setOption, uadl.set[setOption])};
            cdl.CATTParams.gaguid =  /(.+)\./i.exec(trc.get('clientId') || '.').pop() || cdl.CATTParams.gaguid || '';
            uawa && uawa.dimensions && (uawa.dimensions.dimension51 = {'gaguid' : cdl.CATTParams.gaguid || 'empty'}) || console.info('err', uawa);

            var ux = window.ECEOP || '';
            if (ux){
                jQ.each(ux && ux.pageview || [], function ux_keyDimension(kDim, vDim){
                    jQ.each(vDim, function uxvalDimension(_, val){val && w.ga(trackerName+'set', 'dimension'+vDim.dimension, val)})
                })
            };
            if (jQ){
                jQ.each(uadl.webanalytics.dimensions, function gtm_keyDimension(kDim, vDim){
                    jQ.each(vDim, function valDimension(_, val){val && w.ga(trackerName+'set', kDim, val)})
                })
                jQ.each(uadl.webanalytics.metrics, function gtm_keyMetrics(kMet, vMet){
                    jQ.each(vMet, function valMetrics(_, val){val && w.ga(trackerName+'set', kMet, val)})
                })
            };
            w.ga(trackerName+'send', 'pageview')
            if (ux) {window.ECEOP.pageview = []};

            for (evt in uawa.events) {
                var gevt = uawa.events[evt]
                var timestamp = +new Date(window.Date && window.Date.now() || 0);
                if (gevt.action) {trc.send('event'
                                            , gevt.category, gevt.action,  gevt.label, gevt.value
                                            , { 'page': gevt.page || location.pathname+(location.search || '') || '',
                                                'dimension51': cdpm.gaguid || 'empty',
                                                'dimension65': cdl.gadate && cdl.gatime && window.Date && cdl.gadate(timestamp)+' '+cdl.gatime(timestamp) || '',
                                                'dimension75': ''+(timestamp || 0)}
                                            , {'nonInteraction': gevt.noninteraction})};
            };

        }, 500)

    } catch (e){cdl.error('GTM UK TC UATC LP: '+e)}
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window))
</script>

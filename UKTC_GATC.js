<script id='gtm_gatcDLLP'>
(function gtm_gatcdlLP(cdl, dl, loc){
    'use strict';
    if (cdl && cdl.CATTParams && dl && !dl.some(function(a){return /GATCDL LP/i.test(a && a.event || '')})) try {
        var twlh = cdl.twlh;
        var cdpm = cdl.CATTParams || {};
        cdl.DL_gatc = cdl.DL_gatc || {};
        cdl.DL_gatc.webanalytics = cdl.DL_gatc.webanalytics || {};

        var cdpmVP = ('/vp/'+
            (cdpm.lob || "")+'/'+
            (cdpm.holidaytype || "")+'/'+
            (cdpm.pageid || "")
            ).toLowerCase();

        cdl.DL_gatc = {
            profileid        : twlh(/directholidays/i)?"UA-33029666-1":"UA-33036832-1",
            cookiedomain     : twlh(/airtours/i)?"airtours.co.uk":(twlh(/club18-30/i)?"club18-30.com":(twlh(/directholidays/i)?"directholidays.co.uk":"thomascook.com")),
            trackername        : 'CATTGATC',
            anonymizeip        : false,
            allowlinker        : true,
            addignoredref    : 'thomascook.com',
            organicsearch    : {
                'search.bt.com': 'p',
                'search.sky.com': 'term',
                'search.mywebsearch.com': 'searchfor',
                'search.orange.co.uk': 'q',
                'search.virginmedia.com': 'q',
                'search.incredibar.com': 'q',
                'search.alot.com': 'q',
                'search.sweetim.com': 'q',
                'searchmobileonline.com': 'q',
                'searchbrowsing.com': 'q',
                'advancedsearch2.virginmedia.com': 'SearchQuery'
            }
        };
        cdl.DL_gatc.webanalytics = {
            vp    : cdpmVP,
            qsp_st : ('ss_st='+
                (cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+
                (cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+
                (cdpm.accomcode || '')
                ).toLowerCase(),
            qsp_cat : ('ss_cat='+
                (cdpm.lob || '')+'_'+
                (cdpm.pageid || '')
                ).toLowerCase(),
            qsp_p : (
                'DeptDate='+(cdpm.deptdate || '').replace(/\//g, '-')+
                '&depAirport='+(cdpm.departureairportSelected || '')+
                '&PaxAdult='+(cdpm.paxadult || '')+
                '&PaxChild='+(cdpm.paxchild || '')+
                '&BoardBasis='+(cdpm.boardbasis || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&Destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&AccomCode='+(cdpm.accomcode || '')+
                '&AccomName='+(cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&Rooms='+(cdpm.rooms || '')+
                '&AppServer='+(cdpm.appserver || '')
                ).toLowerCase(),
            customvars : {
                custvar02     : {'index': 2,    'name':'AppServer',            'value':(cdpm.appserver || ''),                    'scope': 3},
                custvar04     : {'index': 4,    'name':'InternalCampaign',    'value':(cdpm.internalcampaignid || ''),        'scope': 3},
                custvar30     : {'index': 30,    'name':'UtmaGuid',            'value':(cdpm.utmaguid || ''),                    'scope': 1},
                custvar31     : {'index': 31,    'name':'eCircleID',            'value':(cdpm.ecircleid || ''),                    'scope': 1},
                custvar32     : {'index': 32,    'name':'dreamCaptureID',    'value':(cdpm.dreamcaptureid || ''),            'scope': 1},
                custvar35     : {'index': 35,    'name':'UtmbGuid',             'value':(cdpm.utmbguid || ''),                    'scope': 2},
                custvar36     : {'index': 36,    'name':'tags',             'value':(cdpm.poolcontrol && 'control' || 'variant'),                    'scope': 1},
                custvar39     : {'index': 39,    'name':'dreamCaptureAbtaVisitorSession',    'value':(cdpm.abtanumber || '')+(cdpm.consultantref?('-'+cdpm.consultantref):'' || ''), 'scope': 1}
            },
            events : {
                internalcampaignid    : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': loc.host+loc.pathname, 'value': 1, 'noninteraction': true},
                nodejspages            : {'category': 'NodeJS Pages', 'action': loc.host+loc.pathname || '', 'label': loc.host, 'value': 1, 'noninteraction': true},
                qsearchedkeyword    : {'category': 'GoogleInternalSearch', 'action': cdpm.qsearchedkeyword || '', 'label': loc.host+loc.pathname, 'value': 1, 'noninteraction': true},
                errorcode             : {'category': 'Errors', 'action': cdpm.errorcode || (cdpm.errors && cdpm.errors.Code) || '', 'label': (loc.host+loc.pathname || '')+"?SessionID="+cdpm.sessionid+"&AppServer="+cdpm.appserver+loc.search.replace(/\?/, '&'), 'value': 1, 'noninteraction': true}
            }
        };
    } catch(e) {
        cdl.error('GTM UK TC GATCDL LP: '+e);

    }
    dl.push({'event': 'GATCDL LP'});
    return window.DL_gatc;
}(window.CATTDL, window.dataLayer, document.location || window.location))
</script>

<script id='gtm_GATCLP'>
(function gtm_gatcLP(jQ, cdl, gadl, w, d) {
    'use strict';
    if (cdl && gadl) try {
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

        wgp([tn+'_trackPageview'])

        for (var evt in gawa.events) {
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
        cdl.error('GTM UK TC GATC LP: '+e)
    } finally {
        window.dataLayer && window.dataLayer.push({'event':'GAPoolControl'});
    }
    return cdl && gadl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_gatc, window, document))
</script>


<script id='gtm_gatcdlMA'>
(function gtm_gatcdlMA(cdl, dl, loc){
    'use strict'
    if (cdl && cdl.CATTParams && dl && !dl.some(function(a){return /GATCDL MyAccount/i.test(a && a.event || '')}) ) try {
        var twlh = cdl.twlh
        var cdpm = cdl.CATTParams || {};
        cdl.DL_gatc = cdl.DL_gatc || {};
        cdl.DL_gatc.webanalytics = cdl.DL_gatc.webanalytics || {}

        var cdpmVP = ('/vp/'+
            (cdpm.lob || "")+'/'+
            (cdpm.holidaytype || "")+'/'+
            (cdpm.pageid || "")
            ).toLowerCase();

        cdl.DL_gatc = {
            profileid        : twlh(/directholidays/i)?"UA-33029666-1":"UA-33036832-1",
            cookiedomain     : twlh(/airtours/i)?"airtours.co.uk":(twlh(/club18-30/i)?"club18-30.com":(twlh(/directholidays/i)?"directholidays.co.uk":"thomascook.com")),
            trackername        : 'CATTGATC',
            anonymizeip        : false,
            allowlinker        : true,
            organicsearch    : {
                'search.bt.com': 'p',
                'search.sky.com': 'term',
                'search.mywebsearch.com': 'searchfor',
                'search.orange.co.uk': 'q',
                'search.virginmedia.com': 'q',
                'search.incredibar.com': 'q',
                'search.alot.com': 'q',
                'search.sweetim.com': 'q',
                'searchmobileonline.com': 'q',
                'searchbrowsing.com': 'q',
                'advancedsearch2.virginmedia.com': 'SearchQuery'
            }
        };
        cdl.DL_gatc.webanalytics = {
            vp    : cdpmVP,
            qsp_st : ('ss_st='+
                (cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+
                (cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+
                (cdpm.accomcode || '')
                ).toLowerCase(),
            qsp_cat : ('ss_cat='+
                (cdpm.lob || '')+'_'+
                (cdpm.pageid || '')
                ).toLowerCase(),
            qsp_p : (
                'DeptDate='+(cdpm.deptdate || '').replace(/\//g, '-')+
                '&depAirport='+(cdpm.departureairportSelected || '')+
                '&PaxAdult='+(cdpm.paxadult || '')+
                '&PaxChild='+(cdpm.paxchild || '')+
                '&BoardBasis='+(cdpm.boardbasis || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&Destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&AccomCode='+(cdpm.accomcode || '')+
                '&AccomName='+(cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&Rooms='+(cdpm.rooms || '')+
                '&AppServer='+(cdpm.appserver || '')
                ).toLowerCase(),
            customvars : {
                custvar02     : {'index': 2,    'name':'AppServer',            'value':(cdpm.appserver || ''),                    'scope': 3},
                custvar04     : {'index': 4,    'name':'InternalCampaign',    'value':(cdpm.internalcampaignid || ''),        'scope': 3},
                custvar30     : {'index': 30,    'name':'UtmaGuid',            'value':(cdpm.utmaguid || ''),                    'scope': 1},
                custvar31     : {'index': 31,    'name':'eCircleID',            'value':(cdpm.ecircleid || ''),                    'scope': 1},
                custvar32     : {'index': 32,    'name':'dreamCaptureID',    'value':(cdpm.dreamcaptureid || ''),            'scope': 1},
                custvar35     : {'index': 35,    'name':'UtmbGuid',             'value':(cdpm.utmbguid || ''),                    'scope': 2},
                custvar36     : {'index': 36,    'name':'tags',  'value':(cdpm.poolcontrol && 'control' || 'variant'),                    'scope': 1},
                custvar39     : {'index': 39,    'name':'dreamCaptureAbtaVisitorSession',    'value':(cdpm.abtanumber || '')+(cdpm.consultantref?('-'+cdpm.consultantref):'' || ''), 'scope': 1}
            },
            events : {
                internalcampaignid    : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': loc.host+loc.pathname, 'value': 1, 'noninteraction': true},
                nodejspages            : {'category': 'NodeJS Pages', 'action': loc.host+loc.pathname || '', 'label': loc.host, 'value': 1, 'noninteraction': true},
                qsearchedkeyword    : {'category': 'GoogleInternalSearch', 'action': cdpm.qsearchedkeyword || '', 'label': loc.host+loc.pathname, 'value': 1, 'noninteraction': true},
                errorcode             : {'category': 'Errors', 'action': cdpm.errorcode || (cdpm.errors && cdpm.errors.Code) || '', 'label': (loc.host+loc.pathname || '')+"&SessionID="+cdpm.sessionid+"&AppServer="+cdpm.appserver+loc.search.replace(/\?/, '&'), 'value': 1, 'noninteraction': true}
            }
        }
    } catch(e) {
        cdl.error('GTM UK TC GATCDL MyAccount: '+e)

    }
    dl.push({'event': 'GATCDL MyAccount'});
    return window.DL_gatc;
}(window.CATTDL, window.dataLayer, document.location || window.location))
</script>

<script id='gtm_gatcMA'>
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

<script id='gtm_gatcdlSRP'>
(function gtm_gatcdlSRP(cdl, dl, loc){
    'use strict';
    if (cdl && cdl.CATTParams && dl && !dl.some(function(a){return /GATCDL SRP/i.test(a && a.event || '')}) ) try {
        var twlh = cdl.twlh
        var cdpm = cdl.CATTParams || {};
        cdl.DL_gatc = cdl.DL_gatc || {};
        cdl.DL_gatc.webanalytics = cdl.DL_gatc.webanalytics || {}

        var cdpmVP = ('/vp/'+
            (cdpm.lob || "")+'/'+
            (cdpm.holidaytype || "")+'/'+
            (cdpm.pageid || "")
            ).toLowerCase();

        cdl.DL_gatc = {
            profileid        : twlh(/directholidays/i)?"UA-33029666-1":"UA-33036832-1",
            cookiedomain     : twlh(/airtours/i)?"airtours.co.uk":(twlh(/club18-30/i)?"club18-30.com":(twlh(/directholidays/i)?"directholidays.co.uk":"thomascook.com")),
            trackername        : 'CATTGATC',
            anonymizeip        : false,
            allowlinker        : true,
            addignoredref    : 'thomascook.com',
            organicsearch    : {
                'search.bt.com': 'p',
                'search.sky.com': 'term',
                'search.mywebsearch.com': 'searchfor',
                'search.orange.co.uk': 'q',
                'search.virginmedia.com': 'q',
                'search.incredibar.com': 'q',
                'search.alot.com': 'q',
                'search.sweetim.com': 'q',
                'searchmobileonline.com': 'q',
                'searchbrowsing.com': 'q',
                'advancedsearch2.virginmedia.com': 'SearchQuery'
            }
        };

        cdl.DL_gatc.webanalytics = {
            vp    : cdpmVP,
            qsp_st : ('ss_st='+
                (cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+
                (cdpm.deptdate || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+
                (((cdpm.accoms && cdpm.accoms.length > 0)?'yResults':'nResults') || '')
                ).toLowerCase(),
            qsp_cat : ('ss_cat='+
                (cdpm.lob || '')+'_'+
                (cdpm.pageid || '')
                ).toLowerCase(),
            qsp_p : (
                'DeptDate='+(cdpm.deptdate || '').replace(/\//g, '-')+
                '&depAirport='+(cdpm.departureairportselected || '')+
                '&PaxAdult='+(cdpm.paxadult || '')+
                '&PaxChild='+(cdpm.paxchild || '')+
                '&BoardBasis='+(cdpm.boardbasis || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&Destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&srpTop3='+(cdpm.searchresultstop3 || '')+
                '&srpTot='+(cdpm.searchresultstotal || '')+
                '&duration='+(cdpm.duration || '')+
                '&sortoption='+(cdpm.sortoption || '')
                ).toLowerCase(),
            customvars : {
                custvar02     : {'index': 2,    'name':'AppServer',            'value':(cdpm.appserver || ''),                    'scope': 3},
                custvar04     : {'index': 4,    'name':'InternalCampaign',    'value':(cdpm.internalcampaignid || ''),        'scope': 3},
                custvar30     : {'index': 30,    'name':'UtmaGuid',            'value':(cdpm.utmaguid || ''),                    'scope': 1},
                custvar31     : {'index': 31,    'name':'eCircleID',            'value':(cdpm.ecircleid || ''),                    'scope': 1},
                custvar32     : {'index': 32,    'name':'dreamCaptureID',    'value':(cdpm.dreamcaptureid || ''),            'scope': 1},
                custvar35     : {'index': 35,    'name':'UtmbGuid',             'value':(cdpm.utmbguid || ''),                    'scope': 2},
                custvar36     : {'index': 36,    'name':'tags',  'value':(cdpm.poolcontrol && 'control' || 'variant'),                    'scope': 1},
                custvar39     : {'index': 39,    'name':'dreamCaptureAbtaVisitorSession',    'value':(cdpm.abtanumber || '')+(cdpm.consultantref?('-'+cdpm.consultantref):'' || ''), 'scope': 1}
            },
            events : {
                nodejspages            : {'category': 'NodeJS Pages', 'action': loc.host+loc.pathname || '', 'label': loc.host, 'value': 1, 'noninteraction': true},
                internalcampaignid    : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': loc.host+loc.pathname, 'value': 1, 'noninteraction': true},
                qsearchedkeyword    : {'category': 'GoogleInternalSearch', 'action': cdpm.qsearchedkeyword || '', 'label': loc.host+loc.pathname, 'value': 1, 'noninteraction': true},
                errorcode             : {'category': 'Errors', 'action': cdpm.errorcode || (cdpm.errors && cdpm.errors.Code) || '', 'label': (loc.host+loc.pathname || '')+'/?destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&deptairport='+(cdpm.departureairportselected || '')+'&deptdate='+(cdpm.deptdate || '').replace(/\//g, '-')+'&duration='+(cdpm.duration || '')+'&appserver='+(cdpm.appserver || '')+loc.search.replace(/\?/, '&'), 'value': 1, 'noninteraction': true}
            }
        }
    } catch(e) {
        cdl.error('GTM UK TC GATCDL SRP: '+e);
    }
    dl.push({'event': 'GATCDL SRP'});
    return window.DL_gatc;
}(window.CATTDL, window.dataLayer, document.location || window.location))
</script>

<script id='gtm_gatcSRP'>
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
        wgp([tn+'_set', 'page', fullVP]);
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
    } finally {
          window.dataLayer && window.dataLayer.push({'event':'GAPoolControl'});
      }
    return jQ && cdl && gadl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_gatc, window, document))
</script>

<script id='gtm_gatcdlAccom'>
(function gtm_gatcdlAccom(cdl, dl, loc){
    'use strict';
    if (cdl && cdl.CATTParams && dl && !dl.some(function(a){return /GATCDL Accom/i.test(a && a.event || '')}) ) try {
        var twlh = cdl.twlh;
        var cdpm = cdl.CATTParams || {};
        cdl.DL_gatc = cdl.DL_gatc || {};
        cdl.DL_gatc.webanalytics = cdl.DL_gatc.webanalytics || {};

        var cdpmVP = ('/vp/'+
            (cdpm.lob || "")+'/'+
            (cdpm.holidaytype || "")+'/'+
            (cdpm.pageid || "")
            ).toLowerCase();

        cdl.DL_gatc = {
            profileid        : twlh(/directholidays/i)?"UA-33029666-1":"UA-33036832-1",
            cookiedomain     : twlh(/airtours/i)?"airtours.co.uk":(twlh(/club18-30/i)?"club18-30.com":(twlh(/directholidays/i)?"directholidays.co.uk":"thomascook.com")),
            trackername        : 'CATTGATC',
            anonymizeip        : false,
            allowlinker        : true,
            addignoredref    : 'thomascook.com',
            organicsearch    : {
                'search.bt.com': 'p',
                'search.sky.com': 'term',
                'search.mywebsearch.com': 'searchfor',
                'search.orange.co.uk': 'q',
                'search.virginmedia.com': 'q',
                'search.incredibar.com': 'q',
                'search.alot.com': 'q',
                'search.sweetim.com': 'q',
                'searchmobileonline.com': 'q',
                'searchbrowsing.com': 'q',
                'advancedsearch2.virginmedia.com': 'SearchQuery'
            }
        };
        cdl.DL_gatc.webanalytics = {
            vp    : cdpmVP,
            qsp_st : ('ss_st='+
                (cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+
                (cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+
                (cdpm.accomcode || '')
                ).toLowerCase(),
            qsp_cat : ('ss_cat='+
                (cdpm.lob || '')+'_'+
                (cdpm.pageid || '')
                ).toLowerCase(),
            qsp_p : (
                'DeptDate='+(cdpm.deptdate || '').replace(/(\d+)-(\d+)-(\d+)/, '$3/$2/$1')+
                '&depAirport='+(cdpm.departureairportSelected || '')+
                '&PaxAdult='+(cdpm.paxadult || '')+
                '&PaxChild='+(cdpm.paxchild || '')+
                '&BoardBasis='+(cdpm.boardbasis || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&Destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&AccomCode='+(cdpm.accomcode || '')+
                '&AccomName='+(cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                '&Rooms='+(cdpm.rooms || '')+
                '&AppServer='+(cdpm.appserver || '')
                ).toLowerCase(),
            customvars : {
                custvar02     : {'index': 2,    'name':'AppServer',            'value':(cdpm.appserver || ''),                    'scope': 3},
                custvar04     : {'index': 4,    'name':'InternalCampaign',    'value':(cdpm.internalcampaignid || ''),        'scope': 3},
                custvar11     : {'index': 11,    'name':'AccomVideoVisible',    'value':((cdpm.accomvideo || 'n')+'|'+(cdpm.accomguid || '')),                'scope': 3},
                custvar30     : {'index': 30,    'name':'UtmaGuid',            'value':(cdpm.utmaguid || ''),                    'scope': 1},
                custvar31     : {'index': 31,    'name':'eCircleID',            'value':(cdpm.ecircleid || ''),                    'scope': 1},
                custvar32     : {'index': 32,    'name':'dreamCaptureID',    'value':(cdpm.dreamcaptureid || ''),            'scope': 1},
                custvar35     : {'index': 35,    'name':'UtmbGuid',             'value':(cdpm.utmbguid || ''),                    'scope': 2},
                custvar36     : {'index': 36,    'name':'tags',  'value':(cdpm.poolcontrol && 'control' || 'variant'),                    'scope': 1},
                custvar39     : {'index': 39,    'name':'dreamCaptureAbtaVisitorSession',    'value':(cdpm.abtanumber || '')+(cdpm.consultantref?('-'+cdpm.consultantref):'' || ''), 'scope': 1}
            },
            events : {
                nodejspages            : {'category': 'NodeJS Pages', 'action': loc.host+loc.pathname || '', 'label': loc.host, 'value': 1, 'noninteraction': true},
                internalcampaignid    : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': loc.host+loc.pathname, 'value': 1, 'noninteraction': true},
                qsearchedkeyword    : {'category': 'GoogleInternalSearch', 'action': cdpm.qsearchedkeyword || '', 'label': loc.host+loc.pathname, 'value': 1, 'noninteraction': true},
                errorcode             : {'category': 'Errors', 'action': cdpm.errorcode || (cdpm.errors && cdpm.errors.Code) || '', 'label': (loc.host+loc.pathname || '')+'/?destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&deptairport='+(cdpm.departureairportselected || '')+'&deptdate='+(cdpm.deptdate || cdpm.departuredate || '').replace(/\//g, '-')+'&duration='+(cdpm.duration || '')+'&appserver='+(cdpm.appserver || '')+'&destairport='+loc.search.replace(/\?/, '&'), 'value': 1, 'noninteraction': true},
                opcreative             : {'category': 'OptimostCreative', 'action': cdpm.optimostcreative || '', 'label': loc.href || '', 'value': 1, 'noninteraction': true},
                pathfinder            : {'category': 'ThePathfinder', 'action': (/ota\/accommodation|srv-search\/accom/i.test(loc.pathname)?'':loc.pathname) || '', 'label': (loc.search?loc.search:"empty"), 'value': 1, 'noninteraction': true}
            }
        }
    } catch(e) {
        cdl.error('GTM UK TC GATCDL Accom: '+e);
    } finally {
        dl.push({'event': 'GATCDL Accom'});
    }
    return window.DL_gatc;
}(window.CATTDL, window.dataLayer, document.location || window.location))
</script>

<script id='gtm_gatcAccom'>
(function gtm_gatcAccom(jQ, cdl, gadl, w, d) {
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
        wgp([tn+'_set', 'page', fullVP]);
        wgp([tn+'_trackPageview', fullVP]);

        for (evt in gawa.events) {
            var gevt = gawa.events[evt]
            if (gevt.action) wgp([tn+'_trackEvent', gevt.category, gevt.action, gevt.label, gevt.value, gevt.noninteraction]);
        };

        jQ('button.btn.btn-block.btn-default.src-accomHighlights-videoButton').on('click',function(e){
            var cdl = window.CATTDL || {};
            var cdpm = cdl && cdl.CATTParams;
            window._gaq.push([(cdl && cdl.DL_gatc && cdl.DL_gatc.trackername)+'._trackEvent'
                    , 'Videoclicks'
                    , 'Hotelvideo'
                    , cdpm.lob+'|'+cdpm.holidaytype+'|'+cdpm.pageid+'|'+(cdpm.accomguid || 'accomguid')
                    , 1
                    , {'noninteraction': true}]);
        });

        (function gtm_callGAscript() {var ga = d.createElement('script'); ga.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js'; var s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s)}());

    } catch(e) {
        cdl.error('GTM UK TC GATC Accom: '+e);
    } finally {
          window.dataLayer && window.dataLayer.push({'event':'GAPoolControl'});
      }
    return jQ && cdl && gadl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_gatc, window, document))
</script>

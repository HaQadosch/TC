<script id='gtm_gatcDLLP'>
(function gtm_gatcdlLP(cdl, dl, loc){
    'use strict';
    if (cdl && cdl.CATTParams) try {
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
            addignoredref    : twlh(/airtours/i)?"airtours.co.uk":(twlh(/club18-30/i)?"club18-30.com":(twlh(/directholidays/i)?"directholidays.co.uk":"thomascook.com")),
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
                custvar09     : {'index': 9,    'name':'tcFrogVis',            'value':((typeof cdpm.cookies.TCFRGROUTING !== 'undefined')?cdpm.cookies.TCFRGROUTING:'none'),        'scope': 1},
                custvar30     : {'index': 30,    'name':'UtmaGuid',            'value':(cdpm.utmaguid || ''),                    'scope': 1},
                custvar31     : {'index': 31,    'name':'eCircleID',            'value':(cdpm.ecircleid || ''),                    'scope': 1},
                custvar32     : {'index': 32,    'name':'dreamCaptureID',    'value':(cdpm.dreamcaptureid || ''),            'scope': 1},
                custvar35     : {'index': 35,    'name':'UtmbGuid',             'value':(cdpm.utmbguid || ''),                    'scope': 2},
                custvar39     : {'index': 39,    'name':'dreamCaptureAbtaVisitorSession',    'value':(cdpm.abtanumber || '')+(cdpm.consultantref?('-'+cdpm.consultantref):'' || ''), 'scope': 1}
            },
            events : {
                internalcampaignid    : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': loc.host+loc.pathname, 'value': 1, 'noninteraction': true},
                qsearchedkeyword    : {'category': 'GoogleInternalSearch', 'action': cdpm.qsearchedkeyword || '', 'label': loc.host+loc.pathname, 'value': 1, 'noninteraction': true},
                errorcode             : {'category': 'Errors', 'action': cdpm.errorcode || (cdpm.errors && cdpm.errors.Code) || '', 'label': (loc.host+loc.pathname || '')+"?SessionID="+cdpm.sessionid+"&AppServer="+cdpm.appserver+loc.search.replace(/\?/, '&'), 'value': 1, 'noninteraction': true}
            }
        };
    } catch(e) {
        cdl.error('GTM UK TC GATCDL LP: '+e);
    }
    dl.push({'event': 'GATCDL LP'});
    return cdl && cdl.CATTParams && cdl.DL_gatc;
}(window.CATTDL, window.dataLayer || [], document.location || window.location))
</script>

<script id='gtm_GATCLP'>
(function gtm_gatcLP(jQ, cdl, gadl, w, d){
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

        (function gtm_callGAscript() {
            var ga = d.createElement('script');
                ga.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js'
            var s = d.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(ga, s)
        }());

        var as=d.getElementsByTagName("a");
        var inBound=new RegExp("^#$|^javascript:|"+d.location.host.match(/\w+\.\w+$|\w+\.co\.uk$/gi)[0].replace(".","\\.")+"|thomascook\\.com|google-analytics\\.com|mailto:","gi");
        for(var i=0;i<as.length;i++){
            var aHref=as[i].href;
            if(!aHref||aHref.match(inBound))continue;
            var aOnClick=as[i].onclick;
            as[i].onclick=function(){wgp([tn+"_trackEvent","outbound link","click",this.href.split("//")[1],1,true]);aOnClick()}
        }
    } catch(e) {
        cdl.error('GTM UK TC GATC LP: '+e);
    }
    return jQ && cdl && gadl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_gatc, window, document))
</script>

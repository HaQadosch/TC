<script id='GTM-KZXG7Q_cattdlSRP'>
(function gtm_cattdlSRP(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams
        var newPM = {}
        var keeps = {}
        var locpathname = cdpm.urlparams && cdpm.urlparams.pathname || ""

        var params = JSON.parse(CATTDL.ckget('gtm_params') || '{}');
        newPM['initialholidaytype'] = params && params.initialholidaytype || '';

        if (window.getPageData && window.getPageData(locpathname)) {
            var wgD = window.getPageData && window.getPageData(locpathname) || {}
            var wgdItems = wgD.items || {}
            var wgdStats = wgD.stats || {}
            var wgdCurrent = (!/500|502|404/.test(wgD.status) && (!wgD.errorCode || wgD.errorCode !== null))?(wgD.links && wgD.links.search && wgD.links.search.context || {}):(wgD.searchParams || {})

            //Page Info
            cdpm['holidaypagecontextytype'] = "angular"
            cdpm['holidaytype'] = ({
                'vliegvakanties'    : 'package',
                'autovakanties'     : 'carholidays',
                'stedentrips'       : 'citytrips',
                'wintersport'       : 'ski',
                'lastminute'        : 'lastminute',
                'kortevakanties'    : 'shortholidays',
                'search'            : 'general',
                'searchresults-map' : 'general'
            })[(/\/([^\/]*)/i.exec(locpathname) || ['']).pop()];
            cdpm['lob'] =  (cdpm.holidaytype && cdpm.holidaytype!=='package')?'hotel':'package';

            var strdeptdate = ''
            var strdeptdatewhen = (strdeptdate = wgdCurrent.when && wgdCurrent.when._i || wgdCurrent.when || "19700101") && +new Date(strdeptdate.substring(0,4), strdeptdate.substring(4,6)-1, strdeptdate.substring(6,8)) || 0;
            var rngdeptdate = wgdCurrent && wgdCurrent.departureDate || '';
            newPM['deptdatestart'] = +new Date(((rngdeptdate || '').split(',')[0]).replace(/(\d\d\d\d)(\d\d)(\d\d)/, '$1-$2-$3') || strdeptdatewhen || 0);
            newPM['deptdateend'] = +new Date(((rngdeptdate  || '').split(',')[1] || (rngdeptdate  || '').split(',')[0]).replace(/(\d\d\d\d)(\d\d)(\d\d)/, '$1-$2-$3') || strdeptdatewhen || 0);
            newPM['deptdate'] = strdeptdatewhen || newPM.deptdatestart || 0;
            if ((rngdeptdate  || '').split(',')[1]) {newPM['deptdaterange'] = true} else {newPM['deptdaterange'] = false};
            
            newPM['searchwidened'] = (''+wgdCurrent.flexible == 'true')?'true':((''+wgD.widened == 'true')?'true':'false');
            newPM['searchwidenedselected'] = (''+wgdCurrent.flexible == 'true')?'true':'false';
            newPM['sortoption'] = wgdCurrent.sort || "";
            newPM['duration'] = wgdCurrent.duration || "Geen Voorkeu";
            newPM['searchapp'] = (wgdCurrent.connectorCode == 3?"solr":"unknown");
            newPM['searchresultstop3'] = wgdItems && ((wgdItems[0] && wgdItems[0].id || "")+"|"+(wgdItems[1] && wgdItems[1].id || "")+"|"+(wgdItems[2] && wgdItems[2].id || ""))|| '';
            newPM['searchresultstotal'] = wgdStats && wgdStats.total || 0;
            newPM['searchresultsperpage'] = wgdItems && Math.ceil(wgdItems.length/10)*10 || 0;
            newPM['searchresultspages'] = +(jQ('div.paginationSearchResults:eq(0) span#lastPage').text() || wgdStats && wgdStats.total && Math.ceil(wgdStats.total / newPM['searchresultsperpage']) || 0);
            newPM['searchresultspagenbr'] = parseInt(jQ('div.paginationSearchResults:eq(0) span.active').attr('analytics-data') || Math.ceil(newPM['searchresultstotal'] / newPM['searchresultsperpage']) || 0)
            newPM['sessionid'] = window.sessionToken || "";
            newPM['searchlist'] = wgdItems && wgdItems.length || 0;

            newPM['deptairportsearched'] = wgdCurrent.origin || "";
            newPM['destinationsearched'] = wgdCurrent.goingTo || "";
            newPM['regionsearched'] = "";
            newPM['resortsearched'] = "";
            newPM['countrysearched'] = "";
            if (!wgdCurrent.resortCategory && !wgdCurrent.regionCategory) {
                newPM['countrysearched'] = (!wgdCurrent.destinationCategory)?(wgdCurrent.goingTo || ""):((typeof wgdCurrent.destinationCategory == "string")?(wgdCurrent.destinationCategory || ""):(wgdCurrent.resortCategory[0] || ''));
            } else if (wgdCurrent.regionCategory && !wgdCurrent.resortCategory) {
                newPM['regionsearched'] = (typeof wgdCurrent.regionCategory == "string")?(wgdCurrent.regionCategory || ''):(wgdCurrent.regionCategory[0] || '');
            } else if (wgdCurrent.resortCategory) {
                newPM['resortsearched'] = (typeof wgdCurrent.resortCategory == "string")?(wgdCurrent.resortCategory || ''):(wgdCurrent.resortCategory[0] || '');
                newPM['regionsearched'] = (wgdCurrent.goingTo && wgdCurrent.goingTo.split(',') || ['',''])[1].trim();
                newPM['countrysearched'] = (wgdCurrent.goingTo && wgdCurrent.goingTo.split(',') || ['','',''])[2].trim();
            }
            //window.sessionStorage.setItem('gtm_srpsortoption',newPM['sortoption']);
            //window.sessionStorage.setItem('gtm_srplist',(locpathname).replace(/^\/|\/$/g, ''));
            var params = JSON.parse(CATTDL.ckget('gtm_params') || '{}');
            params.sortoption = newPM['sortoption'] || '';
            params.srplist = (locpathname).replace(/^\/|\/$/g, '') || '';
            CATTDL.ckset('gtm_params', JSON.stringify(params), '', '/', cdpm.cookiedomain);

            cdpm.srpfacets = {};
            var facetPM = {};

            facetPM['destination'] = jQ('[analytics-id="srp-facet-destinationCategory"] :selected') && jQ('[analytics-id="srp-facet-destinationCategory"] :selected').attr('label') && jQ('[analytics-id="srp-facet-destinationCategory"] :selected').attr('label').replace(/(.*)\s\(\d+\)/,'$1') || '';
            facetPM['deptairport'] = jQ('[analytics-id="srp-facet-depAirport"] :selected') && jQ('[analytics-id="srp-facet-depAirport"] :selected').attr('label') && jQ('[analytics-id="srp-facet-depAirport"] :selected').attr('label').replace(/(.*)\s\(\d+\)/,'$1') || '';
            facetPM['pricerange'] = [];
            if(jQ('[analytics-id="srp-facet-priceRange"]')) {
            jQ('[analytics-id="srp-facet-priceRange"]').each(function(e,d){ 
                if(jQ(this) && jQ(this).is(':checked') && jQ(this).next().text()){ facetPM['pricerange'].push(jQ(this).next().text() || '') }
            })};
            facetPM['accomtype'] = [];
            if(jQ('[analytics-id="srp-facet-accommodationType"]')) {
            jQ('[analytics-id="srp-facet-accommodationType"]').each(function(e,d){ 
                if(jQ(this) && jQ(this).is(':checked') && jQ(this).next().text()){ facetPM['accomtype'].push(jQ(this).next().text() || '') }
            })};
            facetPM['zooverrating'] = [];
            if(jQ('[analytics-id="srp-facet-zoover"]')) {
            jQ('[analytics-id="srp-facet-zoover"]').each(function(e,d){ 
                if(jQ(this) && jQ(this).is(':checked') && jQ(this).next().text()){ facetPM['zooverrating'].push(jQ(this).next().text() || '') }
            })} 
            facetPM['starrating'] = [];
            if(jQ('[analytics-id="srp-facet-stars"]')) {
            jQ('[analytics-id="srp-facet-stars"]').each(function(e,d){ 
                if(jQ(this) && jQ(this).is(':checked') && jQ(this).next().text()) { facetPM['starrating'].push(jQ(this).next().text().replace(/\((\d+)\)/g,'$1 stars') || '') }
            })}
            facetPM['boardbasis'] = [];
            if(jQ('[analytics-id="srp-facet-boardType"]')) {
            jQ('[analytics-id="srp-facet-boardType"]').each(function(e,d){ 
                if(jQ(this) && jQ(this).is(':checked') && jQ(this).next().text()){ facetPM['boardbasis'].push(jQ(this).next().text() || '') }
            })} 
            facetPM['facilities'] = [];
            if(jQ('[analytics-id="srp-facet-facilities"]')) {
            jQ('[analytics-id="srp-facet-facilities"]').each(function(e,d){ 
                if(jQ(this) && jQ(this).is(':checked') && jQ(this).next().text()){ facetPM['facilities'].push(jQ(this).next().text() || '') }
            })};
            facetPM['brochure'] = [];
            if(jQ('[analytics-id="srp-facet-brochureName"]')) {
            jQ('[analytics-id="srp-facet-brochureName"]').each(function(e,d){ 
                if(jQ(this) && jQ(this).is(':checked') && jQ(this).next().text()){ facetPM['brochure'].push(jQ(this).next().text() || '') }
            })};

            var arrpax = wgdCurrent && wgdCurrent.occupation || ""; //'2' or [2]  or ['2, 3'] or ["2,1,2", "1,6"] 
            newPM['paxadultperroom'] = []
            newPM['paxchildperroom'] = []
            newPM['paxinfantperroom'] = []
            if (typeof arrpax == "string") {
                newPM['paxadultperroom'].push(+arrpax[0] || 0);
                newPM['paxchildperroom'].push((arrpax.split(",")).slice(1).map(Number).filter(function(e){return e>1}).length || 0);
                newPM['paxinfantperroom'].push((arrpax.split(",")).slice(1).map(Number).filter(function(e){return e<2}).length || 0);
            } else {
                arrpax = arrpax.map(String)
                for (var i = 0; i < arrpax.length; i++) {
                    newPM['paxadultperroom'].push(+(arrpax[i][0] || arrpax[i] || 0))
                    newPM['paxchildperroom'].push(((arrpax[i] || "").split(",") || []).slice(1).map(Number).filter(function(e){return e>1}).length)
                    newPM['paxinfantperroom'].push(((arrpax[i] || "").split(",") || []).slice(1).map(Number).filter(function(e){return e<2}).length)
                }
            }
            newPM['paxadult'] = newPM.paxadultperroom.reduce(function gtm_reduceAdd(x, y){ return x+y }) || 0
            newPM['paxchild'] = newPM.paxchildperroom.reduce(function gtm_reduceAdd(x, y){ return x+y }) || 0
            newPM['paxinfant'] = newPM.paxinfantperroom.reduce(function gtm_reduceAdd(x, y){ return x+y }) || 0
            newPM['paxtotal'] = newPM['paxadult']+newPM['paxchild']+newPM['paxinfant'];
            newPM['rooms'] = newPM['paxadultperroom'].length;
            newPM['destination'] = ''; if (!facetPM['destination']){newPM['destination']=newPM['destinationsearched']} else {newPM['destination']=facetPM['destination']};
            newPM['deptairport'] = ''; if (!facetPM['deptairport']){newPM['deptairport']=newPM['deptairportsearched']} else {newPM['deptairport']=facetPM['deptairport']};
            newPM['country'] = newPM.countrysearched;
            newPM['region'] = newPM.regionsearched;
            newPM['resort'] = newPM.resortsearched

            cdpm.errors = {}
            var errorPM = {};
            errorPM['errorcode'] = wgD.errorCode || "";
            errorPM['errormsg'] = (wgD.message || []).join(' ');
        }   

        jQ.extend(cdl.CATTParams, newPM ,keeps);
        jQ.extend(cdl.CATTParams.srpfacets, facetPM);
        jQ.extend(cdl.CATTParams.errors, errorPM);        
        window.CATTDL.CATTParams = cdpm;
    } catch(e) {
        cdl.error('GTM CATTDL SRP: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': (window.getPageData && window.getPageData(cdpm.urlparams && cdpm.urlparams.pathname)?'CATTDL SRP':'CATTDL LP')})
        window.dataLayer_557RZS && dataLayer_557RZS.push({'event': (window.getPageData && window.getPageData(cdpm.urlparams && cdpm.urlparams.pathname)?'CATTDL SRP':'CATTDL LP')})
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>
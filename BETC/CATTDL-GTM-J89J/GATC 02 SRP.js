<script>
(function gtm_gatcSRP(jQ, dl, cdl) {
    'use strict'
        try {
            var ctpm = CATTParams || {};
            var cdpm = cdl.CATTParams || {};

            var CATTPageId = window.CATTParams.PageId; if (CATTPageId == "")  CATTPageId = "search";
            var VP = '/VP/'+(cdpm.lob || 'lob')+'/'+(cdpm.holidaytype || 'holidaytype')+'/'+(cdpm.pageid || 'pageid');
            var QSP_ST = 'SS_ST='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+(cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '').replace(/\//g, '-')+'_'+((window.CATTParams.SearchResultsTotal.tcTrim() == "0")?'nResults':'yResults');
            var QSP_CAT = 'SS_CAT='+((cdpm.lob || '')+'_'+(CATTPageId));
            var QSP_P = 'DeptDate='+(cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '').replace(/\//g, '-')
            +'&PaxAdult='+(cdpm.paxadult || '')
            +'&PaxChild='+(cdpm.paxchild || '')
            +'&BoardBasis='+(cdpm.boardbasis || '')
            +'&Destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')
            +'&SRPTop3='+(cdpm.searchresultstop3 || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')
            +'&SRPTot='+(cdpm.searchresultstotal || '')
            +'&Brochure='+(cdpm.brochure || '')
            +'&Region='+(cdpm.region || '')
            +'&AccomResort='+(cdpm.accomresort || '');

            var fullVP = VP+'?'+QSP_ST+'&'+QSP_CAT+'&'+QSP_P;
            fullVP = fullVP.toLowerCase();

            window._gaq = window._gaq || [];
            window._gaq.push(['CATTGATC._setAccount', 'UA-33287406-1']);
            window._gaq.push(['CATTGATC._setDomainName', 'thomascook.be']);
            window._gaq.push(['CATTGATC._addIgnoredRef','thomascook.be'])
            window._gaq.push(['CATTGATC._addOrganic', 'search.sweetim.com', 'q'], ['CATTGATC._addOrganic', 'search.incredibar.com', 'q'], ['CATTGATC._addOrganic', 'search.softonic.com', 'q'], ['CATTGATC._addOrganic', 'searchmobileonline.com', 'q'], ['CATTGATC._addOrganic', 'search.mywebsearch.com', 'searchfor'], ['CATTGATC._addOrganic', 'search.searchcompletion.com', 'q'], ['CATTGATC._addOrganic', 'search.alot.com', 'q'], ['CATTGATC._addOrganic', 'searchya.com', 'q']);
            window._gaq.push(['_gat._anonymizeIp']);
            window._gaq.push(['CATTGATC._setAllowLinker', true]);

            (function() {
              var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
              ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
              var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();

            if(cdpm.sessionid){window._gaq.push(['CATTGATC._setCustomVar', 11, 'SessionID', cdpm.sessionid, 3])};
            if(cdpm.appserver){window._gaq.push(['CATTGATC._setCustomVar', 12, 'AppServer', cdpm.appserver, 3])};
            if(cdpm.lob){window._gaq.push(['CATTGATC._setCustomVar', 13, 'LOB', cdpm.lob, 3])};
            if(cdpm.holidaytype){window._gaq.push(['CATTGATC._setCustomVar', 14, 'HolidayType', cdpm.holidaytype, 3])};
            if(cdpm.initialholidaytype){window._gaq.push(['CATTGATC._setCustomVar', 15, 'InitialHolidayType', cdpm.holidaytype, 3])};            
            if(cdpm.pageid){window._gaq.push(['CATTGATC._setCustomVar', 16, 'PageID', cdpm.pageid, 3])};
            if(cdpm.duration){window._gaq.push(['CATTGATC._setCustomVar', 17, 'Duration', cdpm.duration, 3])};            
            if (cdpm.sitelanguage) {
                window._gaq.push(['CATTGATC._setCustomVar', 19, 'PageLanguage', cdpm.sitelanguage, 3]);
                window._gaq.push(['CATTGATC._setCustomVar', 20, 'SessionLanguage', cdpm.sitelanguage, 2]);
            };
            if(cdpm.destination){window._gaq.push(['CATTGATC._setCustomVar', 21, 'Country', cdpm.destination, 3])};
            if(cdpm.region){window._gaq.push(['CATTGATC._setCustomVar', 22, 'Region', cdpm.region, 3])};
            if(cdpm.accomresort){window._gaq.push(['CATTGATC._setCustomVar', 23, 'Place', cdpm.accomresort, 3])};           
            if(cdpm.deptdate){window._gaq.push(['CATTGATC._setCustomVar', 24, 'DeptDate', (cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate)) , 3])};
            if(cdpm.accomcode){window._gaq.push(['CATTGATC._setCustomVar', 25, 'AccomCode', cdpm.accomcode, 3])};
            if(cdpm.accomname){window._gaq.push(['CATTGATC._setCustomVar', 26, 'AccomName', cdpm.accomname, 3])};
            if(cdpm.depairport){window._gaq.push(['CATTGATC._setCustomVar', 27, 'DepartureAirport', cdpm.depairport, 3])};
            if(cdpm.destairport){window._gaq.push(['CATTGATC._setCustomVar', 28, 'DestinationAirport', cdpm.destairport, 3])};           
            if (/_utma=/i.test(document.cookie)) {window._gaq.push(['CATTGATC._setCustomVar', 30, 'UtmaGuid', (function(e){var t=/_utma=([^;%=]*)/i.exec(e)&&/_utma=([^;%=]*)/i.exec(e).pop()||false;t=t&&t.split(".")[1];return t||""})(document.cookie), 1]);}
            if (/&m_i=/i.test(document.location.search)) {window._gaq.push(['CATTGATC._setCustomVar', 31, 'espID', (function(e){var t=/&m_i=([^&]*)/i.exec(e)&&/&m_i=([^&]*)/i.exec(e).pop()||false;return t||""})(document.location.search), 1]);}
            if (/_utmb=/i.test(document.cookie)) {window._gaq.push(['CATTGATC._setCustomVar', 35, 'UtmbGuid', (function(e){var t=/_utmb=([^;%=]*)/i.exec(e)&&/_utmb=([^;%=]*)/i.exec(e).pop()||false;return t||""})(document.cookie), 2]);}
            window._gaq.push(['CATTGATC._trackPageview', fullVP]);

            if (/scip=/i.test(document.location.href)){window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign', (cdpm.searches && cdpm.searches.scip || ''), (window.document.referrer || 'None'), 1, true]); }
            if (/s_cip=/i.test(document.location.href)){window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign', (cdpm.searches && cdpm.searches.s_cip || ''), (window.document.referrer || 'None'), 1, true]); }
            if (/sccl=/i.test(document.location.href)){window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign', (cdpm.searches && cdpm.searches.sccl || ''), (window.document.referrer || 'None'), 1, true]); }
            if (/s_ip=/i.test(document.location.href)){window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign', (cdpm.searches && cdpm.searches.s_ip || ''), (window.document.referrer || 'None'), 1, true]); }

            if (cdpm.errors && cdpm.errors.errormsg){
                var errorLabel= (cdpm.errors.errormsg)+'_SessionID='+(cdpm.sessionid || '')+'_AppServer='+(cdpm.appserver || '');
                window._gaq.push(['CATTGATC._trackEvent', 'Errors', errorLabel, window.document.referrer, 1, true]); 
            };

        } catch(e) {
            window.CATTDL && CATTDL.info('GTM GATC SRP: '+e)
        } finally {
            window.dataLayer && dataLayer.push({'event' : 'GATC SRP'})
        }
        return jQ && jQ.extend && cdl
    }(window.jQuery, window.dataLayer, window.CATTDL))
</script>

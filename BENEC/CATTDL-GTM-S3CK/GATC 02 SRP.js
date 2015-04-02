<script>
(function gtm_gatcSRP(jQ, dl, cdl) {
    'use strict'
        try {
            var ctpm = CATTParams || {};
            var cdpm = cdl.CATTParams || {};

            var CATTPageId = window.CATTParams.PageId; if (CATTPageId == "")  CATTPageId = "search";
            var VP = '/VP/'+(cdpm.lob || 'lob')+'/'+(cdpm.holidaytype || 'holidaytype')+'/'+(cdpm.pageid || 'pageid');
            var QSP_ST = 'SS_ST='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+(cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '')+'_'+((window.CATTParams.SearchResultsTotal.tcTrim() == "0")?'nResults':'yResults');
            var QSP_CAT = 'SS_CAT='+((cdpm.lob || '')+'_'+(CATTPageId));
            var QSP_P = 'DeptDate='+(cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '')
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
            window._gaq.push(['CATTGATC._setAccount', 'UA-33087819-1']);
            window._gaq.push(['CATTGATC._setDomainName', 'neckermann.be']);
            window._gaq.push(['CATTGATC._addIgnoredRef','neckermann.be'])
            window._gaq.push(['CATTGATC._addOrganic', 'search.sweetim.com', 'q'], ['CATTGATC._addOrganic', 'search.incredibar.com', 'q'], ['CATTGATC._addOrganic', 'search.softonic.com', 'q'], ['CATTGATC._addOrganic', 'searchmobileonline.com', 'q'], ['CATTGATC._addOrganic', 'search.mywebsearch.com', 'searchfor'], ['CATTGATC._addOrganic', 'search.searchcompletion.com', 'q'], ['CATTGATC._addOrganic', 'search.alot.com', 'q'], ['CATTGATC._addOrganic', 'searchya.com', 'q']);
            window._gaq.push(['_gat._anonymizeIp']);
            window._gaq.push(['CATTGATC._setAllowLinker', true]);
            window._gaq.push(['CATTGATC._trackPageview', fullVP]);

            (function() {
              var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
              ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
              var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();

            if (cdpm.errors && cdpm.errors.errormsg){
                var errorLabel= (cdpm.errors.errormsg)+'_SessionID='+(cdpm.sessionid || '')+'_AppServer='+(cdpm.appserver || '');
                window._gaq.push(['CATTGATC._trackEvent', 'Errors', errorLabel, window.document.referrer, 1, true]); 
            };

            if (/scip=/i.test(document.location.href)){window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign', {{URLscip}}, window.document.referrer, 1, true]); }
            if (cdpm.sitelanguage) {
                window._gaq.push(['CATTGATC._setCustomVar', 21, 'PageLanguage', cdpm.sitelanguage, 3]);
                window._gaq.push(['CATTGATC._setCustomVar', 22, 'SessionLanguage', cdpm.sitelanguage, 2]);
            }
            if (/_utma=/i.test(document.cookie)) {window._gaq.push(['CATTGATC._setCustomVar', 30, 'UtmaGuid', (function(e){var t=/_utma=([^;%=]*)/i.exec(e)&&/_utma=([^;%=]*)/i.exec(e).pop()||false;t=t&&t.split(".")[1];return t||""})(document.cookie), 1]);}
            if (/_utmb=/i.test(document.cookie)) {window._gaq.push(['CATTGATC._setCustomVar', 35, 'UtmbGuid', (function(e){var t=/_utmb=([^;%=]*)/i.exec(e)&&/_utmb=([^;%=]*)/i.exec(e).pop()||false;return t||""})(document.cookie), 2]);}
            if (/&m_i=/i.test(document.location.search)) {window._gaq.push(['CATTGATC._setCustomVar', 31, 'espID', (function(e){var t=/&m_i=([^&]*)/i.exec(e)&&/&m_i=([^&]*)/i.exec(e).pop()||false;return t||""})(document.location.search), 1]);}

            setTimeout(function(){
                /test=test/i.test(document.cookie) && jQuery('#emptyTextSearchPopup').length && window._gaq.push(['CATTGATC._trackEvent', 'Free Text Search without Results', jQuery('#emptyTextSearchPopup .keyword').text(),document.location.pathname.split('/')[1], 1, true]);
            }, 1000)
                window.CATTDL.CATTParams = cdpm;
        } catch(e) {
            cdl.error('GTM CATTDL SRP: '+e)
        } 
        return jQ && jQ.extend && cdl
    }(window.jQuery, window.dataLayer, window.CATTDL))
</script>

<script>
(function gtm_gatcHP(jQ, dl, cdl) {
    'use strict'
        try {
            var ctpm = CATTParams || {};
            var cdpm = cdl.CATTParams || {};

            window._gaq = window._gaq || [];
            window._gaq.push(['CATTGATC._setAccount', 'UA-33087819-1']);
            window._gaq.push(['CATTGATC._setDomainName', 'neckermann.be']);
            window._gaq.push(['CATTGATC._addIgnoredRef','neckermann.be'])
            window._gaq.push(['CATTGATC._addOrganic', 'search.sweetim.com', 'q'], ['CATTGATC._addOrganic', 'search.incredibar.com', 'q'], ['CATTGATC._addOrganic', 'search.softonic.com', 'q'], ['CATTGATC._addOrganic', 'searchmobileonline.com', 'q'], ['CATTGATC._addOrganic', 'search.mywebsearch.com', 'searchfor'], ['CATTGATC._addOrganic', 'search.searchcompletion.com', 'q'], ['CATTGATC._addOrganic', 'search.alot.com', 'q'], ['CATTGATC._addOrganic', 'searchya.com', 'q']);
            window._gaq.push(['_gat._anonymizeIp']);
            window._gaq.push(['CATTGATC._setAllowLinker', true]);
            window._gaq.push(['CATTGATC._trackPageview']);

            (function() {
              var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
              ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
              var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();

            if (cdpm.errors && cdpm.errors.errormsg){
                var errorLabel= (cdpm.errors.errormsg)+'_SessionID='+(cdpm.sessionid || '')+'_AppServer='+(cdpm.appserver || '');
                window._gaq.push(['CATTGATC._trackEvent', 'Errors', errorLabel, window.document.referrer, 1, true]); 
            };

            if (/scip=/i.test(document.location.href)){window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign', {{URLscip}}, window.document.referrer, 1, true]);}
            if (cdpm.sitelanguage) {
                window._gaq.push(['CATTGATC._setCustomVar', 21, 'PageLanguage', cdpm.sitelanguage, 3]);
                window._gaq.push(['CATTGATC._setCustomVar', 22, 'SessionLanguage', cdpm.sitelanguage, 2]);
            }            
            if (/_utma=/i.test(document.cookie)) {window._gaq.push(['CATTGATC._setCustomVar', 30, 'UtmaGuid', (function(e){var t=/_utma=([^;%=]*)/i.exec(e)&&/_utma=([^;%=]*)/i.exec(e).pop()||false;t=t&&t.split(".")[1];return t||""})(document.cookie), 1]);}
            if (/&m_i=/i.test(document.location.search)) {window._gaq.push(['CATTGATC._setCustomVar', 31, 'espID', (function(e){var t=/&m_i=([^&]*)/i.exec(e)&&/&m_i=([^&]*)/i.exec(e).pop()||false;return t||""})(document.location.search), 1]);}
            if (/_utmb=/i.test(document.cookie)) {window._gaq.push(['CATTGATC._setCustomVar', 35, 'UtmbGuid', (function(e){var t=/_utmb=([^;%=]*)/i.exec(e)&&/_utmb=([^;%=]*)/i.exec(e).pop()||false;return t||""})(document.cookie), 2]);}
        
        } catch(e) {
            cdl.info('GTM GATC HP: '+e)
        } 
        return jQ && jQ.extend && cdl
    }(window.jQuery, window.dataLayer, window.CATTDL))
</script>

<script>
(function gtm_gatcBookingDialog(jQ, dl, cdl) {
    'use strict'
        try {
            var ctpm = CATTParams || {};
            var cdpm = cdl.CATTParams || {};

            var VP = '/VP/'+(cdpm.lob || 'lob')+'/'+(cdpm.holidaytype || 'holidaytype')+'/'+(cdpm.pageid || 'pageid');

            var QSP_ST = 'SS_ST='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+(cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+(cdpm.accomcode || '');
            var QSP_CAT = 'SS_CAT='+(cdpm.lob || '')+'_'+(cdpm.pageid || '');
            var QSP_P = 'DeptDate='+(cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '')
                    +'&depAirport='+(cdpm.depairport || '')
                    +'&PaxAdult='+(cdpm.paxadult || '')
                    +'&PaxChild='+(cdpm.paxchild || '')
                    +'&BoardBasis='+(cdpm.boardbasis || '')
                    +'&Destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')
                    +'&AccomCode='+(cdpm.accomcode || '')
                    +'&AccomName='+(cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')
                    +'&Rooms='+(cdpm.rooms || '')
                    +'&destAirport='+(cdpm.destairport || '')
                    +'&Brochure='+(cdpm.brochure || '')
                    +'&Region='+(cdpm.region || '')
                    +'&AccomResort='+(cdpm.region || '');

            var fullVP = VP+'?'+QSP_ST+'&'+QSP_CAT+'&'+QSP_P;
            fullVP = fullVP.toLowerCase();

            window._gaq = window._gaq || [];
            window._gaq.push(['CATTGATC._setAccount', 'UA-33087819-1']);
            window._gaq.push(['CATTGATC._setDomainName', 'neckermann.be']);
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
            }
                window.CATTDL.CATTParams = cdpm;
        } catch(e) {
            cdl.error('GTM CATTDL BookingDialog: '+e)
        } 
        return jQ && jQ.extend && cdl
    }(window.jQuery, window.dataLayer, window.CATTDL))
</script>

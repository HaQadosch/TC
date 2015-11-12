<script>
(function gtm_cattdlLP(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams || {};
        var ctpm = window.CATTParams || {};
        var newPM = {}

        cdpm.errors = {}
        var errorPM = {};
        errorPM['errorcode'] = (/(^\d+)/.exec(ctpm.ErrorCode) || '') || [].pop() || '';
        errorPM['errormsg'] = ctpm.ErrorCode || '';

        cdpm.sitelanguage = ctpm.SiteLanguage || '';
        cdpm.sessionid = ctpm.SessId || '';
        cdpm.appserver = ctpm.AppServer || '';
        cdpm.lob = ctpm.LOB || '';
        cdpm.holidaytype = ctpm.HolidayType || '';
        cdpm.initialholidaytype = ctpm.InitialHolidayType || '';
        cdpm.pageid = ctpm.PageId || '';        
        cdpm.pagetype = ctpm.PageType || '';        

        jQ.extend(cdl.CATTParams.errors, errorPM);
        window.CATTDL.CATTParams = cdpm;
    } catch(e) {
        cdl.error('GTM CATTDL LP: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL LP'})
        window.gatcDL && gatcDL.push({'event': 'CATTDL LP'})
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>

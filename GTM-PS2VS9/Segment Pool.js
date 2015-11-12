<script id='gtm_pool'>
(function gtm_pool(cdl, dl) {
    'use strict';
    var cdpm = '';
    if (cdl && dl) try {
        cdpm = cdl.CATTParams;
        dl.push({'event': 'pool'+((cdpm && cdpm.utmaguid || 1)%2?'C':'M'), 'pageid':cdpm.pageid || ''});

    } catch(e) {
        cdl.error("GTM pool: "+e);
    }
    return cdl && dl;
}(window.CATTDL, window.dataLayer));
</script>

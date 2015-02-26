/*
http://www.jettours.com/
<iframe src="http://4353627.fls.doubleclick.net/activityi;src=4353627;type=jetto0;cat=2014-00;ord=1;num=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>

http://www.jettours.com/vacances-ete/
<iframe src="http://4353627.fls.doubleclick.net/activityi;src=4353627;type=jetto0;cat=2014-0;ord=1;num=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>

paymemt
<iframe src="https://4353627.fls.doubleclick.net/activityi;src=4353627;type=jetto0;cat=2014-001;ord=1;num=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>

// conf
<iframe src="http://4353627.fls.doubleclick.net/activityi;src=4353627;type=jetto0;cat=2014-000;u1=[Danke];u2=[Buchungs-ID];ord=1;num=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>
*/

<script id='gtm_iProspect'>
(function gtm_iProspectDL(cdl, dl) {
    'use strict'
    if (cdl && dl) try {
        var cdpm = cdl.CATTParams || ''
        cdl.DL_iprospect = {
            iFrame: {
                status: 'not fired',
                src: /vacances-ete/i.test(location.pathname)?'http://4353627.fls.doubleclick.net/activityi;src=4353627;type=jetto0;cat=2014-0;ord=1;num=1?':/^\/$/i.test(location.pathname)?'http://4353627.fls.doubleclick.net/activityi;src=4353627;type=jetto0;cat=2014-00;ord=1;num=1?':/booking|conf/i.test(cdpm.pageid || '')?'http://4353627.fls.doubleclick.net/activityi;src=4353627;type=jetto0;cat=2014-000;u1=Danke;u2='+(cdpm.bookingref || '')+';ord=1;num=1?':/pay/i.test(cdpm.pageid || '')?'https://4353627.fls.doubleclick.net/activityi;src=4353627;type=jetto0;cat=2014-001;ord=1;num=1?':''
            }
        }
    } catch (e) {
        cdl.error('GTM iProspect: ' + e)
    } finally {
        dl.push({'event': 'DL iProspect'});
    }
    return cdl && dl && cdl.DL_iprospect
}(window.CATTDL, window.externaldataLayer));

(function gtm_iProspect(jQ, cdl, ipdl) {
    'use strict';
    if (jQ && cdl && ipdl && ipdl.iFrame) try {
        jQ('<iframe></iframe>').attr({
            id:'iProspect',
            frameborder: '0',
            scrolling: 'no',
            width:'1',
            height:'1',
            style:'visibility:hidden;display:none',
            src : ipdl.iFrame.src || ''
        }).appendTo('body');
        ipdl.iFrame.status = 'fired'
    } catch (e) {
        cdl.error('GTM iProspect: ' + e)
    }
    return jQ && cdl && ipdl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_iprospect))
</script>

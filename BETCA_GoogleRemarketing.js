<script id='gtm_GoogleRemarketing'>
(function gtm_googleRemarketingDL(dl, cdl, cdpm){
    'use strict'
    if (dl && cdl && cdpm) try {
        cdl.DL_googleRemarketing = {
            conversion_id : '1066539339',
            duration : cdpm.durationsearched || '',
            deptdate : cdpm.deptdate || '',
            holidaytype : cdpm.holidaytype || '',
            destinationairport : cdpm.destinationairportsearched || '',
            departureairport : cdpm.departureairportsearched || '',
            flighttype : cdpm.flighttype || '',
            paxinfant : cdpm.paxinfant || '',
            paxchild : cdpm.paxchild || '',
            paxadult : cdpm.paxadult || '',
            pageid : cdpm.pageid || '',
            lob : cdpm.lob || '',
            img : {
                src : '//googleads.g.doubleclick.net/pagead/viewthroughconversion/',
                status: 'not fired'
            }
        }
    } catch(e) {
        cdl.error && cdl.error('GTM DL Google Remarketing:', e)
    } finally {
        dl.push({'event':'DL GoogleRemarketing'})
    }
    return dl && cdl && cdpm && cdl.DL_googleRemarketing
}(window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams));

(function gtm_googleRemarketing(dl, cdl, grdl){
    'use strict'
    if (dl && cdl && grdl) try {
        var img = document.createElement("img");
        img.src = '//googleads.g.doubleclick.net/pagead/viewthroughconversion/'+(grdl.conversion_id || '')+'/?value=0&guid=ON&script=0&data='+'holidaytype%3D' +(grdl.holidaytype || '')+'%3Bpageid%3D' +(grdl.pageid || '')+'%3Blob%3D' +(grdl.lob || '')+((/search|select/i.test(grdl.pageid || ''))?('%3Bduration%3D' +(grdl.duration || '')+'%3Bdeptdate%3D' +(grdl.deptdate || '')+'%3Bdestinationairport%3D' +(grdl.destinationairport || '')+'%3Bdepartureairport%3D' +(grdl.departureairport || '')+'%3Bflighttype%3D' +(grdl.flighttype || '')+'%3Bpaxinfant%3D' +(grdl.paxinfant || '')+'%3Bpaxchild%3D' +(grdl.paxchild || '')+'%3Bpaxadult%3D' +(grdl.paxadult || '')):'')+'&random=' + new Date().getTime();
        grdl.img = {
            src: img.src,
            status : 'fired'
        }
    } catch(e) {
        cdl.error && cdl.error('GTM GoogleRemarketing:'+e)
    } finally {
        dl.push({'event':'GoogleRemarketing'})
    }
    return dl && cdl && grdl
}(window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_googleRemarketing))
</script>


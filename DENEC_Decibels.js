//<script type="text/javascript">
// <![CDATA[
    (function(d,e,c,i,b,el,it) {
        d._da_=d._da_||[];_da_.oldErr=d.onerror;_da_.err=[];
        d.onerror=function(){_da_.err.push(arguments);_da_.oldErr&&_da_.oldErr.apply(d,Array.prototype.slice.call(arguments));};
        d.DecibelInsight=b;d[b]=d[b]||function(){(d[b].q=d[b].q||[]).push(arguments);};
        el=e.createElement(c),it=e.getElementsByTagName(c)[0];el.async=1;el.src=i;it.parentNode.insertBefore(el,it);
    })(window,document,'script','//cdn.decibelinsight.net/i/25735/di.js','decibelInsight');
// ]]>
//</script>

//<script id='gtm_Decibel'>
(function gtm_DecibelDL(jQ, dl, cdl, cdpm){
    'use strict';
    if (jQ && dl && cdl && cdpm) try {
        cdl.DL_decibel = {
            script : {
                url: 'https://cdn.decibelinsight.net/i/25735/di.js',
                status: 'not fired'
            }
        };
    } catch(e) {
        cdl.error('GTM Decibel: '+ e);
    } finally {
        dl.push({'event':'DecibelDL'});
    }
    return jQ && dl && cdl && cdpm && cdl.DL_decibel;
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams));

(function gtm_Decibel(jQ, dl, cdl, bhdl){
    'use strict';
    if (jQ && dl && cdl && bhdl) try {
        window._da_ = window._da_ || [];
        window._da_.oldErr = window.onerror;
        window._da_.err = [];
        window.onerror = function () {
            window._da_.err.push(arguments);
            window._da_.oldErr && window._da_.oldErr.apply(window, Array.prototype.slice.call(arguments));
        };
        window.decibelInsight = window.decibelInsight || function () {
            (window.decibelInsight.q = window.decibelInsight.q || []).push(arguments);
        };
        jQ.getScript && jQ.getScript(bhdl.script && bhdl.script.url || '', function gtm_DecibelScript(){
            try {
                bhdl.script && (bhdl.script.status = 'fired');
            } catch(ee) {
                cdl.error('GTM DecibelScript: '+ ee);
            }
        });
    } catch(e) {
        cdl.error('GTM Decibel:'+ e);
    } finally {
        dl.push({'event':'Decibel'});
    }
    return jQ && dl && cdl && bhdl;
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_decibel))
//</script>


<script id='gtm_kayak'>
(function gtm_kayakDL(cdl, dl){
    'use strict';
    if (cdl && dl) try {
        var cdpm = cdl.CATTParams || '';

        cdl.DL_kayak = {
            type : 'pixeltracking',
            partnercode : 'HOTELS4UDOTCOM',
            price : cdpm.bookingvalue || '',
            currency : cdpm.searches && cdpm.searches.currency || cdpm.currency || 'GBP',
            linkid : cdpm.attribution && cdpm.attribution.utm_content || '',
            img : {
                src : '//www.kayak.com/s/pixeltracking/_pc_?price=_p_&currency=_c_&linkid=_l_',
                status : 'not fired'
            }
        };
    } catch(e) {
        cdl.error && cdl.error('GTM Kayak DL: '+e);
    } finally {
        dl.push({'event':'DL Kayak'});
    }
    return cdl && dl && cdl.DL_kayak;
}(window.CATTDL, window.dataLayer));

(function gtm_kayak(jQ, dl, cdl, kkdl){
    'use strict';
    if (jQ && dl && cdl && kkdl) try {
        var src = kkdl.img && kkdl.img.src
            .replace(/_pc_/, kkdl.partnercode || '')
            .replace(/_p_/, kkdl.price || '')
            .replace(/_c_/, kkdl.currency || '')
            .replace(/_l_/, kkdl.linkid || '');
        jQ().append && jQ('body').append(jQ('<img>', {
            src : kkdl.img && kkdl.img.src || '',
            style : 'border-style:none;',
            alt : '',
            id : 'KayakPixel',
            width : 1,
            height : 1
        }));
        kkdl.img = {
            status : 'fired',
            src : src
        }
    } catch(e) {
        cdl.error && cdl.error('GTM Kayak: '+e);
    } finally {
        dl.push({'event':'kayak'});
    }
    return jQ && dl && cdl && kkdl;
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_kayak))
</script>

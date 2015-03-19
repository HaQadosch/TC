<script id='gtm_minsdhare'>
(function gtm_minsdhareDL(edl, cdl){
    'use strict';
    if (edl && cdl) try {
        var cdpm = cdl.CATTParams || '';

        cdl.DL_mindshare = {
            cn : 'a',
            ActivityID : '258483',
            rnd : Math.random() * 1000000,
            tp_Amount : cdpm.bookingvalue || 0,
            tp_Currency : 'Euro',
            tp_OrderID : cdpm.bookingref || '',
            tp_DateofDeparture : cdpm.deptdate || '',
            tp_Gutschein : '',
            tp_Origin : cdpm.departureairportselected || '',
            tp_Destination : cdpm.destinationairportselected,
            tp_Revenue : '',
            tp_Rubric : '',
            tp_Ticketprice : '',
            tp_BookingClass : '',
            script : {
                src : '//bs.serving-sys.com/BurstingPipe/ActivityServer.bs?',
                status : 'not fired'
            }
        };
    } catch(e) {
        cdl.errror && cdl.error('GTM Mindshare DL:'+e);
    } finally {
        edl.push({'event':'GTM DL Mindshare'});
    }
    return edl && cdl && cdl.DL_mindshare;
}(window.externaldataLayer, window.CATTDL));

(function gtm_Mindshare(jQ, edl, cdl, msdl){
    'use strict';
    if (jQ, edl && cdl && msdl) try {
        var src = msdl.script && msdl.script.src && msdl.script.src+
            'cn='+(msdl.cn || '')+
            '&ActivityID='+(msdl.ActivityID || '')+
            '&rnd='+(msdl.rnd || '')+
            '&tp_Amount='+(msdl.tp_Amount || 0)+
            '&tp_Currency='+(msdl.tp_Currency || '')+
            '&tp_DateofDeparture='+(msdl.tp_DateofDeparture || '')+
            '&tp_Gutschein='+(msdl.tp_Gutschein || '')+
            '&tp_Origin='+(msdl.tp_Origin || '')+
            '&tp_Destination='+(msdl.tp_Destination || '')+
            '&tp_Revenue='+(msdl.tp_Revenue || '')+
            '&tp_Rubric='+(msdl.tp_Rubric || '')+
            '&tp_Ticketprice='+(msdl.tp_Ticketprice || '')+
            '&tp_BookingClass='+(msdl.tp_BookingClass || '')+
            '&tp_OrderID='+(msdl.tp_OrderID || '')
        || '';

        src && jQ.getScript && jQ.getScript(src, function gtm_MindshareGetScript(){
            try {
                msdl.script = {
                    src : src,
                    status: 'fired'
                };
            } catch(err) {
                cdl.errror && cdl.error('GTM MindShare:'+err);
            }
        });
    } catch(e) {
        cdl.errror && cdl.error('GTM MindShare:'+e);
    } finally {
        edl.push({'event':'GTM MindShare'});
    }
    return edl && cdl && msdl;
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_mindshare))
</script>

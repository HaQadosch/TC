<script id="gtm_iAdvise">
(function gtm_iAdviseDL(edl, cdl, cdpm) {
    'use strict';
    if (edl && cdl && cdpm) try {
        cdl.DL_iAdvise = {
            sid : '1715',
            lang : 'fr',
            script: {
                status: "not fired",
                url: "//halc.iadvize.com/iadvize.js?sid=_sid_&lang=_lang_"
            }
        }
    } catch (err) {
        cdl.error ("GTM IAdviseDL :", err);
    } finally {
        edl.push({"event":"iAdviseDL"});
    }
    return edl && cdl && cdpm && cdl.DL_iAdvise;
}(window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams));

(function gtm_iAdvise (jQ, cdl, iadl, edl) {
    if (jQ && cdl && iadl && edl) try {
        var src = (iadl.script && iadl.script.url || '').replace(/_sid_/, iadl.sid || '').replace(/_lang_/,  iadl.lang|| '');
        jQ.ajaxSetup({cache: true});
        src && jQ.getScript && jQ.getScript(src, function gtm_iAdviseScript() {
            try {
                if (iadl.script) {
                    iadl.script.status = 'fired';
                    iadl.script.url = src;
                }
            } catch(e) {
                cdl.error && cdl.error('GTM iAdvise gtm_iAdviseScript: ', e);
            }
        });
    } catch(err) {
        cdl.error && cdl.error("GTM IAdvise :", err);
    } finally {
        edl.push({"event" : "iAdvise"});
    }
    return jQ && cdl && iadl && edl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_iAdvise, window.externaldataLayer));
</script>



<script id="gtm_iAdviseBooking">
(function gtm_IAdviseDL(edl, cdl, cdpm) {
    if (edl && cdl && cdpm) try {
            cdl.DL_iAdviseConf = {
                bookingamount: cdpm.bookingvalue || '',
                bookingref: cdpm.bookingref || "",
                sid : '1715',
                lang : 'fr',
                script: {
                    status: "not fired",
                    url: "//halc.iadvize.com/iadvize.js?sid=_sid_&lang=_lang_"
                }
            }
        } catch(err) {
            cdl.error("GTM iAdviseConfDL :", err);
        } finally {
            edl.push({"event":"iAdviseConfDL"});
        }
        return edl && cdl && cdpm && cdl.DL_iAdviseConf;
}(window.externaldataLayer, window.CATTDL, window.CATTDL.CATTParams));

(function gtm_iAdvise (jQ, cdl, iadl, edl) {
    if (jQ && cdl && iadl && edl) try {
        var src = (iadl.script && iadl.script.url || '').replace(/_sid_/, iadl.sid || '').replace(/_lang_/,  iadl.lang|| '');
        jQ.ajaxSetup({cache: true});
        window.idzTrans = {"cartAmount":(iadl.bookingamount || ''),"tID":(iadl.bookingref || '')};
        src && jQ.getScript && jQ.getScript(src, function gtm_iAdviseScript() {
            try {
                if (iadl.script) {
                    iadl.script.status = 'fired';
                    iadl.script.url = src;
                }
            } catch(e) {
                cdl.error && cdl.error('GTM iAdviseConf gtm_iAdviseScript: ', e);
            }
        });
    } catch (err) {
        cdl.error("GTM iAdviseConf :", err);
    } finally {
        edl.push({"event" : "iAdviseConf"});
    }
    return jQ && cdl && iadl && edl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_iAdviseConf, window.externaldataLayer));
</script>

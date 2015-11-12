<script id="gtm_iAdvise">
(function gtm_iAdviseDL(dl, cdl, cdpm) {
    'use strict';
    if (dl && cdl && cdpm) try {
        cdl.DL_iAdvise = {
            sid : '1723',
            lang : 'fr',
            script: {
                status: "not fired",
                url: "//halc.iadvize.com/iadvize.js?sid=_sid_&lang=_lang_"
            }
        }
    } catch (err) {
        cdl.error ("GTM IAdviseDL :", err);
    } finally {
        dl.push({"event":"iAdviseDL"});
    }
    return dl && cdl && cdpm && cdl.DL_iAdvise;
}(window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams));

(function gtm_iAdvise (jQ, cdl, iadl, dl) {
    if (jQ && cdl && iadl && dl) try {
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
        dl.push({"event" : "iAdvise"});
    }
    return jQ && cdl && iadl && dl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_iAdvise, window.dataLayer));
</script>



<script id="gtm_iAdviseBooking">
(function gtm_IAdviseDL(dl, cdl, cdpm) {
    if (dl && cdl && cdpm) try {
            cdl.DL_iAdvise = {
                bookingamount: cdpm.bookingvalue || "",
                bookingref: cdpm.bookingref || "",
                sid : '1723',
                lang : 'fr',
                script: {
                    status: "not fired",
                    url: "//halc.iadvize.com/iadvize.js?sid=_sid_&lang=_lang_"
                }
            }
        } catch(err) {
            cdl.error("GTM IAdviseDL :", err);
        } finally {
            dl.push({"event":"iAdviseDL"});
        }
        return dl && cdl && cdpm && cdl.DL_iAdvise;
}(window.externaldataLayer, window.CATTDL, window.CATTDL.CATTParams));

(function gtm_iAdvise (jQ, cdl, iadl, dl) {
    if (jQ && cdl && iadl && dl) try {
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
                cdl.error && cdl.error('GTM iAdvise gtm_iAdviseScript: ', e);
            }
        });
    } catch (err) {
        cdl.error("GTM IAdvise :", err);
    } finally {
        dl.push({"event" : "iAdvise"});
    }
    return jQ && cdl && iadl && dl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_iAdvise, window.dataLayer));
</script>

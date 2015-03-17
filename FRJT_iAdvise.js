<script id="gtm_iAdvise">
(function gtm_iAdviseDL(dl, cdl, cdpm) {
    'use strict';
    if (dl && cdl && cdpm) try {
        cdl.DL_iAdvise = {
            sid : '1715',
            lang : 'fr',
            script: {
                status: "not fired",
                url: "//halc.iadvize.com/iadvize.js?sid=1715&lang=fr"
            }
        }
    } catch (err) {
        cdl.error ("GTM IAdviseDL :", err);
    } finally {
        dl.push({"event":"iAdviseDL"});
    }
    return dl && cdl && cdpm && cdl.DL_iAdvise;
}(window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams));


(function gtm_iAdvise (jQ, cdl, iadl, dl) {
    if (jQ && cdl && iadl && dl) try {
        jQ.ajaxSetup({cache: true});
        jQ.getScript && jQ.getScript(iadl.script.url, function gtm_fireIAdviseScript() {
            iadl.script && (iadl.script.status = 'fired');
        });
    } catch(err) {
        cdl.error && cdl.error("GTM IAdvise :" + err );
    } finally {
        dl.push({"event" : "iAdvise"});
    }
    return jQ && cdl && iadl && dl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_iAdvise, window.externaldataLayer));
</script>



<script id="gtm_iAdviseBooking">
(function gtm_IAdviseDL(dl, cdl, cdpm) {
    if (dl && cdl && cdpm) try {
            cdl.DL_iAdvise = {
                bookingamount: cdpm.bookingvalue || "",
                bookingref: cdpm.bookingref || "",
                sid : '1715',
                lang : 'fr',
                script: {
                    status: "not fired",
                    url: "//halc.iadvize.com/iadvize.js?sid=1715&lang=fr"
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
        jQ.ajaxSetup({cache: true});
        jQ.getScript(iadl.script.url,
        function gtm_fireIAdviseScript() {
            iadl.script && (iadl.script.status = 'fired');
        });
    } catch (err) {
        cdl.error("GTM IAdvise :" + err );
    } finally {
        dl.push({"event" : "iAdvise"});
    }
    return jQ && cdl && iadl && dl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_iAdvise, window.externaldataLayer));
</script>

<script id="gtm_iAdviseBooking">
//27 July 2015 - One Digital TC - TODO Add jQuery and CATTParams

(function gtm_IAdviseDL(dl, cdl, jQ, cdpm)
{
	try
    {
    	cdl.DL_iAdvise =
        {
        	bookingamount: 	cdpm.bookingvalue || jQuery('.tt_bucPreisRiInsurance.tt_padright.tt_font16bbb').text() || "",
            bookingref: 	cdpm.bookingref || cdpm.totalprice || $('div:eq(8) span:eq(2)').text().slice(24, 60) || "",
            sid : '1723',
            lang : 'fr',
            script:
                {
                    status: "not fired",
                    url: "https://halc.iadvize.com/iadvize.js?sid=_sid_&lang=_lang_"
                }
        };
	}
    catch(err)
    {
        console.error("GTM IAdviseDL :", err);
    }
    finally
    {
        dl.push({"event":"iAdviseDL"});
    }
    return dl && cdl && cdpm;
}(window.externaldataLayer || window.dataLayer, window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.CATTParams));

(function gtm_iAdvise (cdl, iadl, dl) {
    if (cdl && iadl && dl)
    {
    	try
    	{
        	var src = (iadl.script && iadl.script.url || '').replace(/_sid_/, iadl.sid || '').replace(/_lang_/,  iadl.lang|| '');
        	$.ajaxSetup({cache: true});
        	window.idzTrans = {"cartAmount":(iadl.bookingamount || ''),"tID":(iadl.bookingref || '')};

        	src && $.getScript && $.getScript(src,
        	function gtm_iAdviseScript() {
            	try
            	{
                	if (iadl.script)
                	{
                    	iadl.script.status = 'fired';
	                    iadl.script.url = src;
    	            }
        	    }
        	    catch(e)
        	    {
                	cdl.error && cdl.error('GTM iAdvise gtm_iAdviseScript: ', e);
	            }
        	});
    	}
    	catch (err)
    	{
        	cdl.error("GTM IAdvise :", err);
    	}
    	finally
    	{
        	dl.push({"event" : "iAdvise"});
    	}

    	return cdl && iadl && dl;
    }
}(window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_iAdvise, window.dataLayer?window.dataLayer:window.externaldataLayer));
</script>

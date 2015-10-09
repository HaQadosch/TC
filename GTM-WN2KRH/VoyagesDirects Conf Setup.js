<script>
(function gtm_IAdviseJQ()
{
		window.dataLayer = window.dataLayer || [];
		window.CATTDL = window.CATTDL || {};
		window.CATTDL.CATTParams = window.CATTDL.CATTParams || {};

    	try
    	{
    		/*jQuery shim*/
          	if (!window.jQuery)
            {
              var head = document.getElementsByTagName('head')[0];
              var script = document.createElement('script');
              script.type = 'text/javascript';
              script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js';
              head.appendChild(script);
            }

          	/*Booking Amount*/
          	window.CATTDL.CATTParams.bookingvalue = $('.tt_bucPreisRiInsurance.tt_padright.tt_font16bbb').text() || "";
			/*Booking Ref*/
            window.CATTDL.CATTParams.bookingref = $('div:eq(8) span:eq(2)').text().slice(24, 60) || 'N/A';

		}
		catch (e)
		{
			console.error("GTM Iadvise Booking Setup : " + e);
		}
		finally
		{
			window.CATTDL.CATTParams.pageid = "booking";
			dataLayer.push({"event" : "conf_jQuery"});
		}

		return dataLayer && CATTDL && cdpm;
})();
</script>

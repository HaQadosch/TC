<script id="GTM-K83N5Q_IntentMedia_Hotels">
// 	HOTEL SRP
(function IntentMedia_Refactored (jQ, dl, cdl, cdpm)
{
    'use strict';
	if (jQ && dl && cdl && cdpm && cdl.ckget("gtm_IntentTest"))
	{
	 	try{
	 		cdl.DL_IntentMedia_Accom =
	 		{
	 			values: '',
	 			script:
	 			{
	 				status: "not fired"
	 			}
	 		}
		 	var urlReqAStem = "https://a.intentmedia.net/api/ssn/hotels/v1/impressions";
			var urlReqA =
		 	{
				ad_unit_id:					'tck_ssn_hot_det_ads_uk',
				page_id:					cdpm.pageid || '',
				hotel_property_id:
											(function fn(){
												var accom_arr = []; var result;
												for (var i = 0; i < cdpm.accoms.length; i++)
												{
													accom_arr[i] = cdpm.accoms[i].id;
													if (i < 1)
													{
														result = cdpm.accoms[i].id;
													}
													else
													{
														result += ("_"+cdpm.accoms[i].id);
													}
												}
												return result || '';
											}()),
				visitor_id:					cdpm.utmaguid || '',
				travelers:					cdpm.paxtotal || '',
				travel_date_start:			cdpm.searches.departure_date || '',
				travel_date_end:			cdpm.searches.return_date || '',
				adults:						cdpm.paxadult || '',
				children:					cdpm.paxchild || '',
				hotel_country_code:			'' || '',
				hotel_state_code:			'' || '',
				search_term:				(cdpm.searches.resort + ", " + cdpm.searches.country) || '',
				hotel_city_name:			(cdpm.searches.resort || ''),
				site_country:				'GB',
				site_language:				'EN',
				site_currency:				'GBP',
				rooms:						cdpm.rooms || '',
				display_format_type:		cdpm.device || ''
			};

	 		jQ.ajaxSetup({cache: true});
	 		jQ.post(urlReqAStem, urlReqA, 
		        function gtm_JSONIntentMedia()
		        {
		        	cdl.DL_IntentMedia_Accom.script.status = "fired";
		        	cdl.DL_IntentMedia_Accom.values = urlReqA;
		        }, "JSON");
	 	}
	 	catch (er)
	 	{
	 		cdl.error("GTM Intent Media DL : " + er);
	 	}
	 	finally
	 	{
	 		dl.push({"event" : "IntentMedia"});
	 	}
	 	return dl && cdl && cdpm;
	}
}(window.CATTDL?window.CATTDL.jQ:!1, window.dataLayer_K83N5Q, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams));
</script>

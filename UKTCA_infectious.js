PageID = PaidItinerary

Confirmation page (https://www.thomascookairlines.com/Confirmation.aspx) - PageID = Confirmation

"//pix.impdesk.com/pixel.js?
id=3126&
order_code=[order_code]&
order_value=[order_value]&
ud1=[DepartureAirportSearched]&
ud2=[DestinationAirportSearched]&
ud3=[DeptDateSelected]&
ud4=[DurationSelected]&
ud5=[PaxAdult]&
ud6=[PaxChild]&
ud8=[FlightType]"

"https://secure-id.impressiondesk.com/px?
id=469719&
seg=2368377&
order_id=[order_code]&
value=[order_value]&
t=1"

"//ad.doubleclick.net/activity;
src=4463882;
type=invmedia;
cat=1v8hjigp;
ord=1?"

"//pixel.adacado.com/1000651?
Source=[DepartureAirportSelected]&
Destination=[DestinationAirportSelected]&
Adult=[PaxAdult]&
Child=[PaxChild]&
Journey_Type=[FlightType]&
Departure_Date=[DeptDateSelected]&
Return_Date=[RetDate]"




PageID = RetrieveBooking

"//pix.impdesk.com/pixel.js?
id=2288"

"https://secure-id.impressiondesk.com/px?
id=200639&
seg=1810910&
t=1

"//ad.doubleclick.net/activity;
src=4463882;
type=invmedia;
cat=ExqUY1d9;
ord=1?"

"//pixel.adacado.com/1000651?"



PageID = Itinerary


(function() {
  var _fbq = window._fbq || (window._fbq = []);
  if (!_fbq.loaded) {
    var fbds = document.createElement('script');
    fbds.async = true;
    fbds.src = '//connect.facebook.net/en_US/fbds.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(fbds, s);
    _fbq.loaded = true;
  }
})();
window._fbq = window._fbq || [];
window._fbq.push(['track', '6019814753600', {'value':'<order_value>','currency':'GBP'}]);




PageID = PaidItinerary // not booking page

Confirmation page (https://www.thomascookairlines.com/Confirmation.aspx) - PageID = Confirmation

<script async defer src="//pix.impdesk.com/pixel.js?id=3126&order_code=[order_code]&order_value=[order_value]&ud1=[DepartureAirportSearched]&ud2=[DestinationAirportSearched]&ud3=[DeptDateSelected]&ud4=[DurationSelected]&ud5=[PaxAdult]&ud6=[PaxChild]&ud8=[FlightType]" type="text/javascript"></script>
<script async defer src="https://secure-id.impressiondesk.com/px?id=469719&seg=2368377&order_id=[order_code]&value=[order_value]&t=1" type="text/javascript"></script>
<img src="//ad.doubleclick.net/activity;src=4463882;type=invmedia;cat=1v8hjigp;ord=1?" width="1" height="1" alt="" />

<script type="text/javascript" id="adacadoPixel" src="//pixel.adacado.com/1000651?Source=[DepartureAirportSelected]&Destination=[DestinationAirportSelected]&Adult=[PaxAdult]&Child=[PaxChild]&Journey_Type=[FlightType]&Departure_Date=[DeptDateSelected]&Return_Date=[RetDate]"></script>



PageID = RetrieveBooking // not on booking page

<script async defer src="//pix.impdesk.com/pixel.js?id=2288" type="text/javascript"></script>
<script async defer src="https://secure-id.impressiondesk.com/px?id=200639&seg=1810910&t=1" type="text/javascript"></script>
<img src="//ad.doubleclick.net/activity;src=4463882;type=invmedia;cat=ExqUY1d9;ord=1?" width="1" height="1" alt="" />

<script type="text/javascript" id="adacadoPixel" src="//pixel.adacado.com/1000651?"></script>



PageID = Itinerary

<!-- Facebook Conversion Code for Thomas Cook FB Conversion Pixel -->
<script>(function() {
  var _fbq = window._fbq || (window._fbq = []);
  if (!_fbq.loaded) {
    var fbds = document.createElement('script');
    fbds.async = true;
    fbds.src = '//connect.facebook.net/en_US/fbds.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(fbds, s);
    _fbq.loaded = true;
  }
})();
window._fbq = window._fbq || [];
window._fbq.push(['track', '6019814753600', {'value':'<order_value>','currency':'GBP'}]);
</script>
<noscript><img height="1" width="1" alt="" style="display:none" src="https://www.facebook.com/tr?ev=6019814753600&amp;cd[value]=<order_value>&amp;cd[currency]=GBP&amp;noscript=1" /></noscript>




// Attribution correction
<script id='gtm_attr'>
(function gtm_attribution(dl, cdl){
    'use strict';
    if (dl && cdl) try {
        var cdpm = cdl.CATTParams || {}
        var lands = JSON.parse(cdl.ckget('gtm_attr') || '[]')
        var paidChannels = /aff|met|part|agg|ban|criteo|dis|email|newsletter|cp|ppc|gclid/i
        var validLand = lands.filter(function(e){return e[0] || paidChannels.test(e[1])}).filter(function(e){return new Date().setMonth(new Date(Date.now()).getMonth() - 1) < e[5]})

        if (validLand.length) {
            var vL = validLand.pop() || []
            cdpm['attribution'] = {
                gclid           : vL[0] || '',
                utm_medium      : vL[1] || '',
                utm_campaign    : vL[2] || '',
                utm_content     : vL[3] || '',
                utm_source      : vL[4] || '',
                landing         : new Date(vL[5] || '') || '',
                date            : vL[5] || ''
            }
            var winningCampaign = ''
            var m = vL[1]
            if ((/aff/i).test(m)) winningCampaign = 'aff';
            else if ((/met/i).test(m)) winningCampaign = 'met';
            else if ((/agg|part/i).test(m)) winningCampaign = 'agg';
            else if ((/ban|criteo|dis/i).test(m)) winningCampaign = 'display';
            else if ((/email|newsletter/i).test(m)) winningCampaign = 'eCRM';
            else if ((/cp|ppc|gclid/i).test(m) || vL[0]) winningCampaign = 'PPC';
            else if ((/soc|twitter/i).test(m)) winningCampaign = 'social';

            dl.push({event: 'Attribution_'+winningCampaign});
            cdl.ckset('gtm_attr', JSON.stringify([]), Infinity, '/', '.thomascookairlines.com')
        } else dl.push({event: 'No Attribution'});
    } catch(e) {
        cdl.error('GTM Attr: '+e)
    }
    return cdl && dl && cdpm && cdpm.attribution
}(dl = window.dataLayer, cdl = window.CATTDL))
</script>

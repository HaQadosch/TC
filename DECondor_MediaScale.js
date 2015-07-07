//<script id='gtm_mediascale'>
(function gtm_mediascale(jQ, cdl, cdpm, dl){
    'use strict';
    if (jQ && cdl && cdpm && dl && cdl.twdc(/test=mediascale/)) try {
        var options = {
            'depairport' : cdpm.departureairportsearched || '',
            'destairport' : cdpm.destinationairportsearched || '',
            'depdate' : cdpm.deptdate.replace(/\d\d(\d\d)-(\d\d)-\d\d/, '$2$1') || '',
            'comp' : cdpm.compartment || ''
        };
        var dlMediaScale = {
           'DL_mediascale' : cdl.assign({
               'start' : new Date().getTime(),
               'img' : {
                   'src' : cdl.transpose && cdl.transpose('https://ad3.adfarm1.adition.com/tagging?network=250&type=src&tag[condor.page]=search&tag[condor.data]={depairport},{destairport},{depdate},{comp}&source=gtm', options) || ''
               }
           }, options)
       };
       cdl.assign && cdl.assign(cdl, dlMediaScale);
       cdl.assign && dl.push && jQ().append &&  jQ.when && jQ.when(jQ('body').append(jQ('<img>', {
           src : cdl.DL_mediascale && cdl.DL_mediascale.img && cdl.DL_mediascale.img.src || '',
           style : 'border-style:none;',
           alt : '',
           id : 'gtm_mediaScalePixel',
           width : 1,
           height : 1
       }))).done(function gtm_mediaScaleDone() {dl.push(cdl.assign({}, {'event': 'mediascale'}, dlMediaScale))});
    } catch(e) {
        cdl.error && cdl.error('GTM mediascale : '+e);
    }
    return jQ && cdl && cdpm;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams, window.dataLayer));
//</script>

URL = https://www.condor.com/tcibe/de/flight/flights
PageID = select
Language=de
Tag:
<img src="https://ad3.adfarm1.adition.com/tagging?network=250&type=src&tag[condor.page]=search&tag[condor.data]=<DepartureAirportSelected>,<DestinationAirportSelected>,<DeptDateSelected-Month><DeptDateSelected-2DigitYear>,<Compartment>" width="1" height="1" />


URL = https://www.condor.com/tcibe/secure/de/flight/passengers
PageID = contact
Language=de
Tag:
<img src="https://ad3.adfarm1.adition.com/tagging?network=250&type=src&tag[condor.page]=pax&tag[condor.wkdata]=<DepartureAirportSelected>,<DestinationAirportSelected>,<DeptDateSelected-Month><DeptDateSelected-2DigitYear>,<Compartment>" width="1" height="1" />


URL = https://www.condor.com/tcibe/secure/de/flight/booking
PageID = itinerary
Language=de
Tag:
<img src="https://ad3.adfarm1.adition.com/tagging?network=250&type=src&tag[condor.page]=paymentConfirmation&tag[condor.dankedata]=<DepartureAirportSelected>,<DestinationAirportSelected>,<DeptDateSelected-Month><DeptDateSelected-2DigitYear>,<Compartment>" width="1" height="1" />

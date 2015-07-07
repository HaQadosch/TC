function transpose(s, d){
  for (var p in d) s = s.replace(new RegExp('{'+p+'}', 'g'), d[p]);
  return s;
}

var build = function build(id, href){
  var options = {
    id: id,
    href: href
  };
  return t('<div id="tab"><a href="{href}" id="{id}" /></div>', options);
}

(function gtm_mediascale(jQ, cdl, cdpm){
    'use strict';
    if (jQ && cdl && cdpm) try {
        var options = {
            'depairport' : cdpm.departureairportselected || '',
            'destairport' : cdpm.destinationairportselected || '',
            'depdate' : cdpm.deptdateselectedMonth_2DigitYear || '',
            'comp' : cdpm.compartment || '',
        };
        cdl.assign && cdl.assign(cdpm, options, {
            'start' : new Date().getTime(),
            'pixel' : {
                'src' : 'https://ad3.adfarm1.adition.com/tagging?network=250&type=src&tag[condor.page]=search&tag[condor.data]=<DepartureAirportSelected>,<DestinationAirportSelected>,<DeptDateSelected-Month><DeptDateSelected-2DigitYear>,<Compartment>'
           }
        });
    } catch(e) {

    } finally {

    }
    return jQ && cdl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams));


var img2 = document.createElement('img'); // use DOM HTMLImageElement
img2.src = 'image2.jpg';
img2.alt = 'alt text';
document.body.appendChild(img2);

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

<script id='gtm_bookingdatalayer'>
(function gtm_bookingDatalayer(cdl, dl){
    'use strict';
    if (dl) try {
        var cdpm = cdl.CATTParams && cdl.CATTParams.length && cdl.CATTParams || window.CATTParams || '';
        var product = {
            'sku': cdpm.accomcode || cdpm.AccomCode || '',
            'name': cdpm.accomname || cdpm.AccomName || '',
            'category': cdpm.holidaytype || cdpm.HolidayType || '',
            'price': cdpm.bookingvalue ||  cdpm.BookingValue || 0,
            'quantity': 1
        };
        var transaction = {
            'transactionId': cdpm.bookingref || cdpm.BookingRef || '',
            'transactionTotal': cdpm.bookingvalue ||  cdpm.BookingValue || 0,
            'transactionProducts': [product]
        };
        dl.push(transaction);
    } catch(e) {
        cdl.error && cdl.error('GTM Booking Datalayer'+ e);
    } finally {
        dl.push({'event':'booking'});
    }
    return cdl && dl;
}(window.CATTDL, window.dataLayer));
</script>

window.dataLayer = [{
    'transactionId': '1234',
    'transactionAffiliation': 'Acme Clothing',
    'transactionTotal': 38.26,
    'transactionTax': 1.29,
    'transactionShipping': 5,
    'transactionProducts': [{
        'sku': 'DD44',
        'name': 'T-Shirt',
        'category': 'Apparel',
        'price': 11.99,
        'quantity': 1
    },{
        'sku': 'AA1243544',
        'name': 'Socks',
        'category': 'Apparel',
        'price': 9.99,
        'quantity': 2
    }]
}];


AccomCode: "H4U|13320"
AccomGEOLocation: "(25.2713,55.329)"
AccomName: "Novotel Deira City Centre Hotel"
AccomResort: "Deira"
BoardBasis: "BED_AND_BREAKFAST"
BookingRef: "TS3UKYX"
BookingValue: "1892.06"
CardType: "Visa Credit"
DepartureAirportSelected: "LHR"
DepositSelection: "0"
DepositValue: "337.10"
DeptDate: "21/09/2015"
DestinationAirportSelected: "DXB"
Duration: "7"
HolidayType: "ePackage"
InitialHolidayType: "ePackage"
LOB: "package"
LeadPAXPostCode: "EC1A 4HD"
PageID: "booking"
PaxAdult: "2"
PaxChild: "0"
PaxInfant: "0"
PaxTotal: "2"
PaymentOption: "CREDIT CARD"
RetDate: "28/09/2015"
Rooms: "1"
SessID: "876055C6287A1BC092C4B68350DD38DC"
StarRating: "4*"
TLD: "uat7.thomascook.com"
TourOperator: "Gold Medal Net fares"

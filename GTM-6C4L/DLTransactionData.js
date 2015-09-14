<script id='GTM-6C4L_transactionData'>
    (function transactionData(dl, cdl, cdpm){
        'use strict';
        if (dl && cdl && cdpm) try {
            setTimeout(function() {
                var mmb = /PaidItinerary/i.test(cdpm.pageid || '')?"MMB_":"";
                var mmbBookRef = /PaidItinerary/i.test(cdpm.pageid || '')?("_MMB_"+new Date().toUTCString()):"";
                dl.push({
                    'transactionId': (cdpm.bookingref || '')+mmbBookRef,
                    'transactionDate': new Date().toUTCString(),
                    'transactionType': mmb+'Booking',
                    'transactionAffiliation': 'UK TCA',
                    'transactionTotal': cdpm.bookingvalue || '',
                    'transactionShipping': 0,
                    'transactionTax': 0,
                    'transactionPaymentType': cdpm.paymentoption || '',
                    'transactionCurrency': 'GBP',
                    'transactionShippingMethod': '',
                    'transactionPromoCode': '',
                    'transactionProducts': [{
                    'id': cdl.transpose('{flightno}|{carrier}', {
                        'flightno': cdpm.flightno || '',
                        'carrier' : cdpm.carrier || ''
                    }),
                    'name': cdl.transpose('|{flightno}|{deptairport}|{paxtotal}|{paxadult}|{paxchild}|{deptdate}|{duration}|{paymentoption}|{flighttype}|{basket}', {
                        'flightno' : cdpm.flightno || '',
                        'deptairport' : cdpm.departureairportselected || '',
                        'paxtotal' : cdpm.paxtotal || '',
                        'paxadult' : cdpm.paxadult || '',
                        'paxchild' : cdpm.paxchild || '',
                        'deptdate' : cdl.gadate(cdpm.deptdateselected || 0),
                        'duration' : cdpm.durationselected || '',
                        'paymentoption' : cdpm.paymentoption || '',
                        'flighttype' : cdpm.flighttype || '',
                        'basket' : cdpm.basketcontent || ''
                    }),
                    'sku': cdl.transpose('{deptairport}|{destairport}|{deptdate}|{carrier}', {
                        'deptairport' : cdpm.departureairportselected || '',
                        'destairport' : cdpm.destinationairportselected || '',
                        'deptdate' : cdl.gadate(cdpm.deptdateselected || 0),
                        'carrier' : cdpm.carrier || ''
                    }),
                    'category': cdl.transpose('{mmb}{lob}|{holidaytype}', {
                        'mmb' : mmb,
                        'lob' : cdpm.lob || '',
                        'holidaytype' : cdpm.holidaytype || ''
                    }),
                    'price': cdpm.bookingvalue || '',
                    'currency': 'GBP',
                    'quantity': 1
                    }]
                });
                var timeStart = cdpm.timestart || 0;
                var stampEpoch = +new Date();
                dl.push({'event': 'TransactionData', 'pid': cdl.CATTParams.pageid, 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
            }, 1000);
        } catch(e) {
            dl.push({'event': 'error', 'GTM transactionData':e});
        }
    }(window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams));
</script>

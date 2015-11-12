<script id='GTM-WN2KRH_dlTransaction'>
  (function gtm_transactiondata(dl, cdl, cdpm){
    'use strict'
    if (cdl && cdpm) try{
      setTimeout(
        function(){
          var confType = (/([^_]*)_?confirm/i.exec(cdpm.pageid) || ['']).pop()
          dl.push({
            'transactionId': (cdpm.bookingref || ''),
            'transactionDate': new Date().toUTCString(),
            'transactionType': 'Booking',
            'transactionAffiliation': 'TCFR',
            'transactionTotal': (cdpm.bookingvalue || '0'),
            'transactionShipping': 0,
            'transactionTax': 0,
            'transactionPaymentType': 'na',
            'transactionCurrency': 'EUR',
            'transactionShippingMethod': '',
            'transactionPromoCode': '',
            'transactionProducts': [{
              'id': cdpm.accomguid || '',
              'name': (cdpm.accomname || '')+'|'+(cdpm.accomcode || '')+'|'+(cdpm.deptairport || cdpm.departureairportselected || '')+'|'+(cdpm.paxtotal || '')+'|'+(cdpm.paxadult || '')+'|'+(cdpm.paxchild || '')+'|'+(cdl.gadate && cdl.gadate(cdpm.deptdate || 0))+'|'+(cdpm.duration || '')+'|'+(cdpm.paymentoption || ''),
              'sku': (cdpm.destination || '')+'|'+(cdpm.destinationairportselected || '')+'|'+(cdpm.accomresort || cdpm.resortsearched || '')+'|'+(cdpm.touroperator || ''),
              'category': (cdpm.lob || "")+'|'+(cdpm.holidaytype || "")+(confType?('_'+confType):''),
              'price': (cdpm.bookingvalue || cdpm.totalprice || '0'),
              'currency': 'EUR',
              'quantity': 1
            }]
          });
          dl.push({'event': 'TransactionData'});
        },
        1000
      );
    } catch(e) {
      cdl.error('GTM Transaction Data: '+e);
    }
    return (cdl && cdpm) || !1
  }(window.dataLayer || [], window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams))
</script>

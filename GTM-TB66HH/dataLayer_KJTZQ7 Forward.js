// dataLayer.push({'event': 'stuffHappened', 'forward':'dataLayer_XXXX'})
//
// Here is the list of current events:
// DestinationsPageLoaded
// DestinationsLoaded
// HotelsPageLoaded
// HotelsLoaded
// MoreHotelsLoaded
// OffersPageLoaded
// OffersLoaded
// OfferChecked
// BookingPageLoaded
// CheckOutErrorLoaded
// ConformationPageLoaded
// OfferBooked
//
//
// May be we can use following keywords:
// 1.       Loaded
// 2.       Page
// 3.       Destination
// 4.       Hotel
// 5.       Offer
// 6.       Booking
// 7.       Confirmation

<script id='GTM-TB66HH_dlForward'>
  (function gtm_dlForward(dl, dlK2, sessStore, ld){
    'use strict';
    var cons = window.console;
    var lastEvt = {};
    if (ld, dl && dlK2 && sessStore && sessStore.getItem('dl_KJTZQ7')) try {
      ld.assign(lastEvt, ld(dl).last());
      if (lastEvt.forward || /Loaded|Page|Destination|Hotel|Offer|Booking|Confimration/i.test(lastEvt.event)) {
        lastEvt.event = 'TB66HH_'+lastEvt.event;
        dlK2.push(lastEvt);
      }
    } catch (err) {
      cons && cons.error && cons.error('GTM-TB66HH_dlForward: '+err);
    }
    return lastEvt;
  }(window.dataLayer, window.dataLayer_KJTZQ7, window.sessionStorage, window._));
</script>

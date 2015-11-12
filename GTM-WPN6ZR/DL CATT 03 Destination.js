<script id='GTM-WPN6ZR_cattdlDestination'>
(function gtm_cattdlDestination(jQ, w, d, dl, cdl) {
    'use strict'
    if (cdl) try {
      var ld = cdl._;
      var cdpm = cdl.CATTParams || {};

      if (w.tagManageribe) {
        var key = '';
        ld.assign(cdpm, ld.transform(w.tagManageribe[0], function gtm_lowerCasetagManagerIBE(r, n, k){
          key = k.toLowerCase();
          if (n) {
            if (/lob|holidaytype/i.test(key)) {n = n.toLowerCase() || 'generic'}
            else if (/destination|boardbasis/i.test(key)) {n.replace(/\&amp;/g, '-').replace(/\&/g, '-') || ""}
            else if (/LineOfBusiness/i.test(key)) {n = n.replace(/[^_]+_([^_]+)_?.*/, '$1').toLowerCase() || "generic"; key = 'holidaytype'}
            else if (/typeoffers/i.test(key)) {n = n.toLowerCase() || "generic"; key = 'lob'}
            else if (/pageid/i.test(key)) {n = n.toLowerCase() || "generic"}
            else if (/errorcode/i.test(key)) {n = ld.trunc(n || '', 267).replace(/-/, '') || ""}
            else if (/nbrstars/i.test(key)) { r.starrating = n || ''}
            else if (/DeptDate/i.test(key)) { n = +new Date(n.replace(/(\d+)\/(\d+)\/(\d+)/, '$3 $2 $1'))|| '0'}
            else if (/RetDate/i.test(key)) { n = +new Date(n.replace(/(\d+)\/(\d+)\/(\d+)/, '$3 $2 $1'))|| '0'}
            else if (/EndDate/i.test(key)) {n = +new Date(n.replace(/(\d+)\/(\d+)\/(\d+)/, '$3 $2 $1'))|| '0'}
            else if (/price/i.test(key)) {key = 'bookingvalue'; n = (''+n).replace(/\D*(\d+\.\d\d).*/, '$1') || '0'}
            else if (/DepartureDate/i.test(key)) {n = +new Date(n.replace(/(\d+)\/(\d+)\/(\d+)/, '$3 $2 $1')) || '0'; key = 'deptdate'}
            r[key] = typeof n === 'string'?ld.trim(n):n;
          }
        })
                 )
      }

      cdpm.internalcampaignid = cdpm.searches && cdpm.searches.intcmp || w.CATTDL.twls(/intcmp=/i) && (w.CATTDL.ewls(/intcmp=([^&|\s|\?]*)/i) || []).pop() || "";
      cdpm.qsearchedkeyword = cdpm.searches && cdpm.searches.q || w.CATTDL.ewls(/[&\?]q=([^&|\s|\?]*)/i) && w.CATTDL.ewls(/[&\?]q=([^&|\s|\?]*)/i).pop() || "";
      cdpm.utmaguid = cdpm.utmaguid || cdpm.cookies.__utma && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma) && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma).pop() || w.CATTDL.twdc(/_utma=/i) && w.CATTDL.ewdc(/_utma=[^;\.%=]*\.([^;\.%=]*)\./i) && w.CATTDL.ewdc(/_utma=[^;\.%=]*\.([^;\.%=]*)\./i).pop() || "";
      cdpm.utmbguid = cdpm.utmbguid || cdpm.cookies.__utmb || w.CATTDL.twdc(/_utmb=/i) && w.CATTDL.ewdc(/_utmb=([^;%=]*)/i) && w.CATTDL.ewdc(/_utmb=([^;%=]*)/i).pop() || "";
      cdpm.gaguid = cdpm.gaguid || cdpm.cookies && (/\.([^\.]*)\.\d*$/i.exec(cdpm.cookies._ga || '') || []).pop() || w.CATTDL.twdc(/_ga=/i) && (w.CATTDL.ewdc(/_ga=[^\.]*\.\d+\.([^\.]*)\.\d+/i) || []).pop() || "";
      cdpm.poolcontrol = !Boolean((cdpm.utmaguid || 1)%20);
      cdpm.codeagence = cdpm.codeagence || jQ && jQ('header div#header_top p.left').text().trim().replace(/CODE\ AGENCE\ :\ /, '') || '';

      cdpm.errors = cdpm.errorcode || '';
      cdpm.device = (function(t){var n="desktop";var r=/mobile/i.test(t);var i=/android/i.test(t);var s=/phone/i.test(t);var o=i&&!/mobile/i.test(t);var u=/ipad/i.test(t);var a=/tablet/i.test(t);if(a||o||u)n="tablet";else if(r||i||s)n="mobile";return n})(navigator.userAgent||"") || '';
      cdpm.pagetimestamp = Date.now();
      cdpm.user = cdpm.user || {};
      window.CATTDL.CATTParams = cdpm;

//             var onclickAttr = ''
//       var jqdests = ld(jQ('table#tdestination tr[role=row]'))
//       .omit('0')
//       .transform(function transform(trs, elt, prop) {
//         onclickAttr = $(elt).attr('onclick');
//         if (onclickAttr) {
//           onclickAttr = /.*&agencyName=&idRegion=([^&\']*)&idCountry=([^&\']*)&country=([^&\']*)&region=([^&\']*)&disableLayout=true&KID=([^&\']*)&DLC=([^&\']*)/.exec(onclickAttr)
//           trs[prop] = ld.zip(['idRegion', 'idCountry', 'country', 'region', 'KID', 'DLC'], onclickAttr.slice(1))
//         }
//       })
//       .value()


//       var jqa = ''
//       var jqaname = ''
//       var jqadepdate = ''
//       var jqaid = ''
//       var cdpmcategory = ('en|'+(cdpm.lob||"")+'|'+(cdpm.holidaytype||"")).toLowerCase()
//       var jqabrand = ''
//       var jqavariant = ''
//       var jqaboardbasis = ''
//       var jqaairportcode = ''
//       var jqaairportname = ''
//       var jqaretdate = ''
//       var jqatotalprice = ''
//       var cdpmlist = ('search|'+cdpm.sortoption).toLowerCase()
//       var cdpmposition = 1000
//       var dimension27 = 'SRP_Viewer'

//       var ldaddimpression = ld(jqdests).map(function ldaddimpression(accom){
//         jqa            = jQ(accom)
//         jqaid          = ''
//         jqaname        = ''+'||||'
//         jqabrand       = ''
//         jqaboardbasis  = ''
//         jqaairportcode = ''
//         jqaairportname = ''
//         jqadepdate     = cdl.gadate(new Date())
//         jqaretdate     = cdl.gadate(new Date())
//         jqatotalprice  = ''
//         jqavariant     = ((jqaboardbasis || '')+'|'+(jqaairportcode || jqaairportname || "")+'|'+(jqadepdate ||"")+'|'+(jqaretdate ||"")+'|'+(cdpm.paxtotal || "0")+'|'+(cdpm.paxadult || "0")+'|'+(cdpm.paxchild || "0")+'|'+(cdpm.paxinfant || "0")+'|'+(jqatotalprice || '')).toLowerCase()

//         return {
//             'id'         : jqaid
//           , 'name'       : jqaname
//           , 'depdate'    : jqadepdate
//           , 'category'   : cdpmcategory
//           , 'brand'      : jqabrand
//           , 'variant'    : jqavariant
//           , 'list'       : cdpmlist
//           , 'position'   : ++cdpmposition
//           , 'dimension27': 'SRP_Viewer'
//         }
//       }).value()

    } catch(e) {
        cdl.error('GTM CATTDL Destination: '+e)
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'CATTDL Destination', 'pid': cdpm.pageid, 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - dl[0]['gtm.start']});
    }
    return cdl
}(window.jQuery, window, window.document, window.dataLayer, window.CATTDL))
</script>

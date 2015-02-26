<!-- BoldChat Visitor Monitor HTML v5.00 (Website=Thomascook.FR,ChatButton=Thomascook.FR Floating Chat Button,ChatInvitation=tcfrance) -->
<script type="text/javascript">
  var _bcvma = _bcvma || [];
  _bcvma.push(["setAccountID", "506561190423742882"]);
  _bcvma.push(["setParameter", "WebsiteDefID", "3177590592033593426"]);
  _bcvma.push(["setParameter", "InvitationDefID", "658349628503165700"]);
  _bcvma.push(["addFloat", {type: "chat", id: "1649681153134734931"}]);
  _bcvma.push(["pageViewed"]);
  var bcLoad = function(){
    if(window.bcLoaded) return; window.bcLoaded = true;
    var vms = document.createElement("script"); vms.type = "text/javascript"; vms.async = true;
    vms.src = ('https:'==document.location.protocol?'https://':'http://') + "vmss.boldchat.com/aid/506561190423742882/bc.vms4/vms.js";
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(vms, s);
  };
  if(window.pageViewer && pageViewer.load) pageViewer.load();
  else if(window.addEventListener) window.addEventListener('load', bcLoad, false);
  else window.attachEvent('onload', bcLoad);
</script>
<noscript>
<a href="http://www.boldchat.com" title="Live Chat" target="_blank"><img alt="Live Chat" src="https://vms.boldchat.com/aid/506561190423742882/bc.vmi?wdid=3177590592033593426" border="0" width="1" height="1" /></a>
</noscript>
<!-- /BoldChat Visitor Monitor HTML v5.00 -->

<!-- BoldChat Conversion Tracking HTML v5.00 (Website=Thomascook.FR,ConversionCode=TC France) -->
<script type="text/javascript">
    var _bcvma = _bcvma || [];
    _bcvma.push(["setAccountID", "506561190423742882"]);
    _bcvma.push(["addConversion", {
      ConversionAmount: null,
      ConversionRef: "",
      ConversionInfo: "",
      WebsiteDefID: "3177590592033593426",
      ConversionCodeID: "2422615716842941542"
    }]);
  var bcLoad = function(){
    if(window.bcLoaded) return; window.bcLoaded = true;
    var vms = document.createElement("script"); vms.type = "text/javascript"; vms.async = true;
    vms.src = ('https:'==document.location.protocol?'https://':'http://') + "vmss.boldchat.com/aid/506561190423742882/bc.vms4/vms.js";
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(vms, s);
  };
  if(window.pageViewer && pageViewer.load) pageViewer.load();
  else if(window.addEventListener) window.addEventListener('load', bcLoad, false);
  else window.attachEvent('onload', bcLoad);
</script>
<noscript>
<a href="http://www.boldchat.com" title="Live Chat" target="_blank"><img alt="Live Chat" src="https://vms.boldchat.com/aid/506561190423742882/bc.vci?wdid=3177590592033593426&amp;ccid=2422615716842941542&amp;ca=&amp;cr=&amp;ci=" border="0" width="1" height="1" /></a>
</noscript>
<!-- /BoldChat Conversion Tracking HTML v5.00 -->

<script id='gtm_boldchatMonitor'>
(function gtm_boldchatDL(cdl, edl) {
    'use strict';
    if (edl && cdl) try {
        cdl.DL_boldchat = {
            accountid       : '506561190423742882',
            websitedefid    : '3177590592033593426',
            invitationdefid : '658349628503165700',
            visitname       : '',
            visitphone      : '',
            visitemail      : '',
            visitref        : '',
            visitinfo       : '',
            customurl       : '',
            windowparameters: '',
            chatid          : '1649681153134734931',
            script          : {
                status  : 'not fired',
                url     : '//vmss.boldchat.com/aid/506561190423742882/bc.vms4/vms.js'
            }
        };
    } catch(e) {
        cdl.error("GTM DL_boldchat: "+e);
    } finally {
        edl.push({event: 'Boldchat'});
    }
    return edl && cdl && cdl.DL_boldchat;
}(window.CATTDL, window.externaldataLayer));

(function gtm_boldchat(jQ, cdl, bcdl) {
    'use strict';
    if (jQ && cdl && bcdl) try {
        if (!window.bcLoaded && bcdl.script) {
            jQ.ajaxSetup({cache: true});
            jQ.getScript && jQ.getScript(bcdl.script.url, function gtm_boldchatScript(){
                window.bcLoaded = true;
                window._bcvma = window._bcvma || [];
                _bcvma.push(["setAccountID", bcdl.accountid]);
                _bcvma.push(["setParameter", "WebsiteDefID", bcdl.websitedefid]);
                _bcvma.push(["setParameter", "InvitationDefID", bcdl.invitationdefid]);
                _bcvma.push(["setParameter", "VisitName", bcdl.visitname]);
                _bcvma.push(["setParameter", "VisitPhone", bcdl.visitphone]);
                _bcvma.push(["setParameter", "VisitEmail", bcdl.visitemail]);
                _bcvma.push(["setParameter", "VisitRef", bcdl.visitref]);
                _bcvma.push(["setParameter", "VisitInfo", bcdl.visitinfo]);
                _bcvma.push(["setParameter", "CustomUrl", bcdl.customurl]);
                _bcvma.push(["setParameter", "WindowParameters", bcdl.windowparameters]);
                _bcvma.push(["addFloat", {type: "chat", id: bcdl.chatid}]);
                _bcvma.push(["pageViewed"]);
                bcdl.script.status = 'fired';
                window.pageViewer && pageViewer.load && pageViewer.load();
            });
        }
    } catch(e) {
        cdl.error('GTM BoldChat: '+e);
    }
    return jQ && cdl && bcdl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_boldchat))
</script>


<script id='gtm_boldchatConversion'>
(function gtm_boldchatconvDL(cdl, edl) {
'use strict'
    if (edl && cdl) try {
        var cdpm = cdl.CATTParams
        var jQBookingRef = $('.REFERENCE > .CheckoutItemContentHeader > span').text() || "na";
        var jQPrice = $('.price').first().text().replace(/^./, '') || "0";

        cdl.DL_boldchatconv = {
            accountid         : '506561190423742882',
            addconversion     : {
                convamount      : cdpm.bookingvalue || jQPrice || null,
                convref         : cdpm.bookingref || jQBookingRef || '',
                convinfo        : '',
                websitedefid    : '3177590592033593426',
                convcodeid      : '2422615716842941542'
            },
            script         : {
                status  : 'not fired',
                url     : '//vmss.boldchat.com/aid/506561190423742882/bc.vms4/vms.js'
            }
        }
    } catch(e) {
        cdl.error("GTM DL_boldchatconv: "+e)
    } finally {
        edl.push({event: 'BoldchatConvDL'});
    }
    return cdl && cdl.DL_boldchatconv
}(window.CATTDL, window.externaldataLayer));

(function gtm_boldchatconv(jQ, cdl, bcdl, edl){
    'use strict';
    if (jQ && cdl && bcdl && edl) try {
        jQ.ajaxSetup({cache: true});
        window._bcvma = window._bcvma || [];
        _bcvma.push(["setAccountID", bcdl.accountid]);
        _bcvma.push(["addConversion", {
            ConversionAmount: bcdl.addconversion.convamount,
            ConversionRef: bcdl.addconversion.convref,
            ConversionInfo: bcdl.addconversion.convinfo,
            WebsiteDefID: bcdl.addconversion.websitedefid,
            ConversionCodeID: bcdl.addconversion.convcodeid
        }]);
        jQ.getScript && jQ.getScript(bcdl.script.url, function gtm_boldchatconvScript(){
            bcdl.script.status = 'fired';
            window.pageViewer && pageViewer.load && pageViewer.load()
        })
    } catch(e) {
        cdl.error('GTM BoldChat Conv: '+e)
    } finally {
      edl.push({'event':'boldchatConv'})
    }
    return jQ && cdl && bcdl && edl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_boldchatconv, window.externaldataLayer))
</script>

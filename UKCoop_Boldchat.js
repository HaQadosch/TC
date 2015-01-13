<script>
(function gtm_boldchatDL(cdl, dl) {
    'use strict';
    if (dl && cdl) try {
        cdl.DL_boldchat = {
            accountid       : '5202905059732673190',
            websitedefid    : '310342275321263988',
            invitationdefid : '3823967141686248195',
            visitname       : '',
            visitphone      : '',
            visitemail      : '',
            visitref        : '',
            visitinfo       : '',
            customurl       : '',
            windowparameters: '',
            chatid          : '7280584607110301046',
            script          : {
                status  : 'not fired',
                url     : '//vmss.boldchat.com/aid/5202905059732673190/bc.vms4/vms.js'
            }
        };
    } catch(e) {
        cdl.error("GTM DL_boldchat: "+e);
    } finally {
        dl.push({event: 'Boldchat'});
    }
    return dl && cdl && cdl.DL_boldchat;
}(window.CATTDL, window.dataLayer));

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


<script>
(function gtm_boldchatconvDL(cdl, dl) {
'use strict'
    if (cdl) try {
        var cdpm = cdl.CATTParams

        cdl.DL_boldchatconv = {
            accountid         : '5202905059732673190',
            addconversion     : {
                convamount      : cdpm.bookingvalue || null,
                convref         : cdpm.bookingref || '',
                convinfo        : '',
                websitedefid    : '3135583959424557065',
                convcodeid      : '2002723353680610733'
            },
            script         : {
                status  : 'not fired',
                url     : '//vmss.boldchat.com/aid/5202905059732673190/bc.vms4/vms.js'
            }
        }
    } catch(e) {
        cdl.error("GTM DL_boldchatconv: "+e)
    } finally {
        dataLayer.push({event: 'BoldchatConv'});
    }
    return cdl && cdl.DL_boldchatconv
}(window.CATTDL, window.dataLayer));

(function gtm_boldchatconv(jQ, cdl, bcdl){
    'use strict';
    if (jQ && cdl && bcdl) try {
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
    }
    return jQ && cdl && bcdl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_boldchatconv))
</script>

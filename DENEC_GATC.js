<script id='gtm_gatcLP'>
(function gtm_gatc() {

    function setTrackPageViewOnce(ev) {
        if (setTrackPageView) {
            setTrackPageView = false;
            window._gaq.push(['CATTGATC._trackPageview']);
            // Removing the events
            for (var i = 0; i < humanEvents.length; i++) {
                $(document.body).undelegate("*", humanEvents[i], setTrackPageViewOnce);
            }
        }
    }

    try {
        var checkedErrorCode = ''; var checkedSessID = ''; var checkedAppServer = "";
        if (typeof window.CATTParams != 'undefined'){
            if (typeof window.CATTParams.ErrorCode != 'undefined') {checkedErrorCode = window.CATTParams.ErrorCode}
            if (typeof window.CATTParams.SessID != 'undefined') {checkedSessID = window.CATTParams.SessID}
            if (typeof window.CATTParams.AppServer != 'undefined') {checkedAppServer = window.CATTParams.AppServer}
        }

        window._gaq = window._gaq || [];
        window._gaq.push(['CATTGATC._setAccount', 'UA-29069538-1']);
        window._gaq.push(['_gat._anonymizeIp']);
        window._gaq.push(['CATTGATC._setAllowLinker', true]);
        window._gaq.push(['CATTGATC._addOrganic', 'suche.t-online.de', 'q'], ['CATTGATC._addOrganic', 'suche.web.de', 'q'], ['CATTGATC._addOrganic', 'suche.gmx.net', 'q'], ['CATTGATC._addOrganic', 'search.1und1.de', 'q'], ['CATTGATC._addOrganic', 'suche.freenet.de', 'query']);

        var campaignID = ''; try {
            if ((/intcmp/i).test(document.location.href)){
                campaignID = (/intcmp=([^&|\s|\?]*)/i).exec(document.location.href)[1];
                window._gaq.push(['CATTGATC._setCustomVar',  4, 'InternalCampaign',  campaignID, 3]);
                window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign',  campaignID, document.location.host+document.location.pathname, 1, true]);
            } else if ((/intcall/i).test(document.location.href)){
                campaignID = (/intcall=([^&|\s|\?]*)/i).exec(document.location.href)[1];
                window._gaq.push(['CATTGATC._setCustomVar',  4, 'InternalCampaign',  campaignID, 3]);
                window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign',  campaignID, document.location.host+document.location.pathname, 1, true]);
            }
        } catch(e) {}
        var xbUtmaGuid=""; try{

            if(/utmaGuid/i.test(document.cookie)){
                try{xbUtmaGuid=/utmaGuid=([^;%=]*)/gi.exec(document.cookie)[1]}catch(e){}
            }else{
                xbUtmaGuid=/_utma=([^;%=]*)/gi.exec(document.cookie)[1];
                xbUtmaGuid=xbUtmaGuid.split(".")[1];
            }
        }catch(e){var xbUtmaGuid=""}
        window._gaq.push(["CATTGATC._setCustomVar",30,"UtmaGuid",xbUtmaGuid,1]);
        if (/&user_id=/i.test(location.search)) {
            var eCircleID = /user_id=([^&]*)/i.exec(location.search) && /user_id=([^&]*)/i.exec(location.search).pop();
            eCircleID && window._gaq.push(['CATTGATC._setCustomVar',  31, 'eCricleID',  eCircleID, 1]);
        }
        try{
            window._gaq.push(["CATTGATC._setCustomVar",35,"UtmbGuid",/_utmb=([^;%=]*)/gi.exec(document.cookie)[1],2]);
        } catch(e){}

        /*** BEGIN _trackPageview ***********************/
        /*   2014-03-24 stschaefer                      */
        /*   Only human visits are tracked              */
        var humanEvents = ['keydown', 'mousemove'];
        var setTrackPageView = true;

        // Device supports touch events -> mobile device
        if ('ontouchstart' in window) {
            window._gaq.push(['CATTGATC._trackPageview']);
        } else {

            // Adding all events which identify human behaviour
            for (var i = 0; i < humanEvents.length; i++) {
                $(document.body).delegate("*", humanEvents[i], setTrackPageViewOnce);
            }
        }


        /*** END _trackPageview *************************/

        (function() {
          var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
          ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();

        if (checkedErrorCode){
            var errorLabel= checkedErrorCode+'_SessionID='+checkedSessID+'_AppServer='+checkedAppServer;
            window._gaq.push(['CATTGATC._trackEvent', 'Errors', errorLabel, window.document.referrer, 1, true]);
        }

        var as = document.getElementsByTagName("a");
        var inBound = new RegExp("^#$|^javascript:|"+document.location.host.match(/\w+\.\w+$|\w+\.co\.uk$/gi)[0].replace('.', '\\.')+"|vidado\\.com|neckermann-reisen\\.de|google-analytics\\.com|mailto:", "gi");
        for (var i=0; i<as.length; i++){
            var aHref = as[i].href;
            if(!aHref || aHref.match(inBound)) continue;
            var aOnClick = as[i].onclick;

            as[i].onclick = function () {
                window._gaq.push(['CATTGATC._trackEvent', 'outbound link', 'click', this.href.split("//")[1], 1, true]);
                aOnClick();
                return false;
            };
        }

        // 10.1.2014 New Code for eRech Tracking

        (function() {
            if (document.referrer === "") {
                var prevXBCAttr = "";
                try {prevXBCAttr = (/xbcattr=([^;]*)/gi).exec(document.cookie)[1]} catch (e){}
                if(prevXBCAttr.indexOf('view') != -1 ){
                    window._gaq.push(['CATTGATC._trackEvent', 'eReach',  'InfluencedVisits', '', 1, true]);
                    console.log("InfluencedVisits");
                }
            }
        })();
    } catch(e) {
        console.error('GTM GATC: '+ e);
    }
}())
</script>

/*****************************************************************************/

<script id='gtm_gatcsubSRP'>
(function gtm_gatc() {
    try {
        if(!String.prototype.tcTrim){String.prototype.tcTrim=function(){return this.replace(/^\s+|\s+$/g,"")}}if(!Number.prototype.tcTrim){Number.prototype.tcTrim=function(){return this+0}}

        var checkedLOB = "generic", checkedHolidayType = "generic", checkedPageID = "subsrch",  checkedErrorCode = checkedSessID = checkedAppServer = "";
        if (typeof window.CATTParams != 'undefined'){
            if (typeof window.CATTParams.LOB != 'undefined') {checkedLOB = window.CATTParams.LOB.toLowerCase()}
            if (typeof window.CATTParams.HolidayType != 'undefined') {checkedHolidayType = window.CATTParams.HolidayType.toLowerCase()}
            if (typeof window.CATTParams.PageID != 'undefined') {checkedPageID = window.CATTParams.PageID.toLowerCase()}
            if (typeof window.CATTParams.ErrorCode != 'undefined') {checkedErrorCode = window.CATTParams.ErrorCode}
            if (typeof window.CATTParams.SessID != 'undefined') {checkedSessID = window.CATTParams.SessID}
            if (typeof window.CATTParams.AppServer != 'undefined') {checkedAppServer = window.CATTParams.AppServer}
         }
        if (checkedLOB == "")  checkedLOB = "generic";
        if (checkedHolidayType == "")  checkedHolidayType = "generic";
        if (checkedPageID == "")  checkedPageID = "subsrch";

        var fullVP = '/VP/'+checkedLOB.tcTrim()+'/'+checkedHolidayType.tcTrim()+'/'+checkedPageID.tcTrim();
        fullVP = fullVP.toLowerCase();

        window._gaq = window._gaq || [];
        window._gaq.push(['CATTGATC._setAccount', 'UA-29069538-1']);
        window._gaq.push(['_gat._anonymizeIp']);
        window._gaq.push(['CATTGATC._setAllowLinker', true]);
        window._gaq.push(['CATTGATC._addOrganic', 'suche.t-online.de', 'q'], ['CATTGATC._addOrganic', 'suche.web.de', 'q'], ['CATTGATC._addOrganic', 'suche.gmx.net', 'q'], ['CATTGATC._addOrganic', 'search.1und1.de', 'q'], ['CATTGATC._addOrganic', 'suche.freenet.de', 'query']);
        try {
            if ((/intcmp/i).test(document.location.href)){
                var campaignID = (/intcmp=([^&|\s|\?]*)/i).exec(document.location.href)[1];
                window._gaq.push(['CATTGATC._setCustomVar',  4, 'InternalCampaign',  campaignID, 3]);
                window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign',  campaignID, document.location.host+document.location.pathname, 1, true]);
            } else if ((/intcall/i).test(document.location.href)){
                var campaignID = (/intcall=([^&|\s|\?]*)/i).exec(document.location.href)[1];
                window._gaq.push(['CATTGATC._setCustomVar',  4, 'InternalCampaign',  campaignID, 3]);
                window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign',  campaignID, document.location.host+document.location.pathname, 1, true]);
            }
        } catch(e) {}
        try{
            var xbUtmaGuid="";
            if(/utmaGuid/i.test(document.cookie)){
                var xbUtmaGuid="";
                try{xbUtmaGuid=/utmaGuid=([^;%=]*)/gi.exec(document.cookie)[1]}catch(e){}
            }else{
                var xbUtmaGuid="";
                xbUtmaGuid=/_utma=([^;%=]*)/gi.exec(document.cookie)[1];
                xbUtmaGuid=xbUtmaGuid.split(".")[1]
            }
        }catch(e){var xbUtmaGuid=""}
        window._gaq.push(["CATTGATC._setCustomVar",30,"UtmaGuid",xbUtmaGuid,1]);
        if (/&user_id=/i.test(location.search)) {
            var eCircleID = /user_id=([^&]*)/i.exec(location.search) && /user_id=([^&]*)/i.exec(location.search).pop()
            eCircleID && window._gaq.push(['CATTGATC._setCustomVar',  31, 'eCricleID',  eCircleID, 1]);
        };
        try{
            window._gaq.push(["CATTGATC._setCustomVar",35,"UtmbGuid",/_utmb=([^;%=]*)/gi.exec(document.cookie)[1],2]);
        } catch(e){}
        if (typeof CATTParams.SearchHomepage != "undefined" && CATTParams.SearchHomepage != "") {
            window._gaq.push(['CATTGATC._trackEvent', 'SearchHomepage', CATTParams.SearchHomepage, fullVP, 1, true]);
        }

        // new section for tracking live chats

        (function() {
            $(function() {
                try {

                    var trackChat = function() {
                        // console.log("tracking Chat !!")
                        var chatType = "eMail";
                        if(window.bt_chatAvailable) {chatType = "Chat"};
                        window._gaq.push([
                            'CATTGATC._trackEvent',
                            "LiveChat",
                            CATTParams.LOB+"_"+CATTParams.PageID+"_"+chatType,
                            CATTParams.Destination,
                            0,
                            true]);
                    }
                    $("#pri .chatTxt").bind("click", trackChat);
                } catch (err) {
                    console.log("Error binding Chat tracking");
                };
            });

        })();
        // new section




        window._gaq.push(['CATTGATC._trackPageview', fullVP]);

        (function() {
          var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
          ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();

        if (checkedErrorCode){
            var errorLabel= checkedErrorCode+'_SessionID='+checkedSessID+'_AppServer='+checkedAppServer;
            window._gaq.push(['CATTGATC._trackEvent', 'Errors', errorLabel, window.document.referrer, 1, true]);
        }
    } catch(e) {
        console.error('GTM GATC: '+ e);
    }
}())
</script>

/*****************************************************************************/

<script id='gtm_gatcSRP'>
(function gtm_gatc() {
    try {
        if(!String.prototype.tcTrim){String.prototype.tcTrim=function(){return this.replace(/^\s+|\s+$/g,"")}}if(!Number.prototype.tcTrim){Number.prototype.tcTrim=function(){return this+0}}

        var checkedLOB = "generic", checkedHolidayType = "generic", checkedPageID = "search", checkedDestination = checkedDestinationAirportSelected = checkedDeptDate = checkedSearchResultsTotal = checkedDepartureAirportSelected = checkedPaxAdult = checkedPaxChild = checkedBoardBasis = checkedSearchResultsTop3 = checkedErrorCode = checkedSessID = checkedAppServer = "";
        if (typeof window.CATTParams != 'undefined'){
            if (typeof window.CATTParams.LOB != 'undefined') {checkedLOB = window.CATTParams.LOB.toLowerCase()}
            if (typeof window.CATTParams.HolidayType != 'undefined') {checkedHolidayType = window.CATTParams.HolidayType.toLowerCase()}
            if (typeof window.CATTParams.PageID != 'undefined') {checkedPageID = window.CATTParams.PageID.toLowerCase()}
            if (typeof window.CATTParams.Destination != 'undefined') {checkedDestination = window.CATTParams.Destination}
            if (typeof window.CATTParams.DeptDate != 'undefined') {checkedDeptDate = window.CATTParams.DeptDate}
            if (typeof window.CATTParams.SearchResultsTotal != 'undefined') {checkedSearchResultsTotal = window.CATTParams.SearchResultsTotal}
            if (typeof window.CATTParams.DepartureAirportSelected != 'undefined') {checkedDepartureAirportSelected = window.CATTParams.DepartureAirportSelected}
            if (typeof window.CATTParams.PaxAdult != 'undefined') {checkedPaxAdult = window.CATTParams.PaxAdult}
            if (typeof window.CATTParams.PaxChild != 'undefined') {checkedPaxChild = window.CATTParams.PaxChild}
            if (typeof window.CATTParams.BoardBasis != 'undefined') {checkedBoardBasis = window.CATTParams.BoardBasis}
            if (typeof window.CATTParams.DestinationAirportSelected != 'undefined') {checkedDestinationAirportSelected = window.CATTParams.DestinationAirportSelected}
            if (typeof window.CATTParams.SearchResultsTop3 != 'undefined') {checkedSearchResultsTop3 = window.CATTParams.SearchResultsTop3}
            if (typeof window.CATTParams.ErrorCode != 'undefined') {checkedErrorCode = window.CATTParams.ErrorCode}
            if (typeof window.CATTParams.SessID != 'undefined') {checkedSessID = window.CATTParams.SessID}
            if (typeof window.CATTParams.AppServer != 'undefined') {checkedAppServer = window.CATTParams.AppServer}
        }
        if (checkedLOB == "")  checkedLOB = "generic";
        if (checkedHolidayType == "")  checkedHolidayType = "generic";
        if (checkedPageID == "")  checkedPageID = "search";

        var VP = '/VP/'+checkedLOB.tcTrim()+'/'+checkedHolidayType.tcTrim()+'/'+checkedPageID.tcTrim();
        var QSP_ST = 'SS_ST='+checkedDestination.tcTrim().replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+checkedDeptDate.tcTrim().replace(/\//g, '-')+'_'+((checkedSearchResultsTotal.tcTrim() == "0")?'nResults':'yResults');
        var QSP_CAT = 'SS_CAT='+checkedLOB.tcTrim()+'_'+checkedPageID.tcTrim();
        var QSP_P = 'DeptDate='+checkedDeptDate.tcTrim().replace(/\//g, '-')+'&depAirport='+checkedDepartureAirportSelected.tcTrim()+'&PaxAdult='+checkedPaxAdult.tcTrim()+'&PaxChild='+checkedPaxChild.tcTrim()+'&BoardBasis='+checkedBoardBasis.tcTrim().replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&Destination='+checkedDestination.tcTrim().replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&SRPTop3='+checkedSearchResultsTop3.tcTrim().replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&SRPTot='+checkedSearchResultsTotal.tcTrim()+'&destAirport='+checkedDestinationAirportSelected.tcTrim();
        var fullVP = VP+'?'+QSP_ST+'&'+QSP_CAT+'&'+QSP_P;
        fullVP = fullVP.toLowerCase();

        window._gaq = window._gaq || [];
        window._gaq.push(['CATTGATC._setAccount', 'UA-29069538-1']);
        window._gaq.push(['_gat._anonymizeIp']);
        window._gaq.push(['CATTGATC._setAllowLinker', true]);
        window._gaq.push(['CATTGATC._addOrganic', 'suche.t-online.de', 'q'], ['CATTGATC._addOrganic', 'suche.web.de', 'q'], ['CATTGATC._addOrganic', 'suche.gmx.net', 'q'], ['CATTGATC._addOrganic', 'search.1und1.de', 'q'], ['CATTGATC._addOrganic', 'suche.freenet.de', 'query']);
        try {
            if ((/intcmp/i).test(document.location.href)){
                var campaignID = (/intcmp=([^&|\s|\?]*)/i).exec(document.location.href)[1];
                window._gaq.push(['CATTGATC._setCustomVar',  4, 'InternalCampaign',  campaignID, 3]);
                window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign',  campaignID, document.location.host+document.location.pathname, 1, true]);
            } else if ((/intcall/i).test(document.location.href)){
                var campaignID = (/intcall=([^&|\s|\?]*)/i).exec(document.location.href)[1];
                window._gaq.push(['CATTGATC._setCustomVar',  4, 'InternalCampaign',  campaignID, 3]);
                window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign',  campaignID, document.location.host+document.location.pathname, 1, true]);
            }
        } catch(e) {}

        // Heissel inserted Performance Tracking for XPCT
        try{
            window._gaq.push(["CATTGATC._setCustomVar",15,"SortOption_HotelsPP",CATTParams.SortOption + "_" + CATTParams.SearchResultsPerPage,2]);
            // BEGIN Tracking of empty SortOption ******************************************************************************
            //   2014-04-07 Stefan Schaefer
            if (CATTParams.SortOption.trim().length <= 0){
                window._gaq.push([
                    'CATTGATC._trackEvent',
                    'SortOptionEmpty',
                    document.referrer.split('?')[0], // Getting previous url without parameters
                    CATTParams.LOB + '/' + CATTParams.HolidayType + '/' + CATTParams.PageID + '_' + CATTParams.Destination + '_' + CATTParams.SearchResultsPageNbr + 'von' + CATTParams.SearchResultsPages
                ]);
            }
            // END Tracking of empty SortOption ********************************************************************************
            if (/empfehlung/gi.test(CATTParams.SortOption)) {
                window._gaq.push(["CATTGATC._setCustomVar",16,"XPCT","True",2]);
            }
            // window._gaq.push(["CATTGATC._setCustomVar",17,"Destination (Page)",CATTParams.Destination,3]);
            // window._gaq.push(["CATTGATC._setCustomVar",18,"Destination (Session)",CATTParams.Destination,2]);
            // window._gaq.push(["CATTGATC._setCustomVar",19,"Hotels pro Seite",CATTParams.SearchResultsPerPage,3]);
        } catch(e){}


        if (typeof CATTParams.SearchHomepage != "undefined" && CATTParams.SearchHomepage != "") {
            window._gaq.push(['CATTGATC._trackEvent', 'SearchHomepage', CATTParams.SearchHomepage, VP, 1, true]);
        }

        // Thorsten Heissel, DE Ecom-Team: 24.10.13: new section to track the days to departure
        // 15.11.13 removed cutstom_var and replaced by track_Event
        (function() {
            try {
                var today = new Date();
                var deptDateArray = CATTParams.DeptDate.split("/");
                var deptDate = new Date(deptDateArray[2], deptDateArray[1] -1, deptDateArray[0]);
                if (isFinite(deptDate)) {
                    var daysToDeparture = "" + Math.round((deptDate-today) / 1000 / 3600 / 24);
                    // console.log("daysToDeparture: " + daysToDeparture);
                    window._gaq.push(['CATTGATC._setCustomVar',  20, 'DaysToDeparture-Search',  daysToDeparture, 3]);
                    window._gaq.push(['CATTGATC._trackEvent', "DaysToDeparture", 'search', daysToDeparture, 1, true]);
                    // window._gaq.push(['CATTGATC._setCustomVar',  20, 'DaysToDeparture-Search',  daysToDeparture, 3]);
                    // window._gaq.push(['CATTGATC._trackPageview', "fullVP"]);
                } else {
                    // console.log("invalid departure date");
                    window._gaq.push(['CATTGATC._setCustomVar',  20, 'DaysToDeparture-Search',  "invalid departure date", 3]);
                    window._gaq.push(['CATTGATC._trackEvent',  "DaysToDeparture", 'search',"invalid departure date", 1, true]);
                }

            } catch (err) {
                // console.log("error tracking DaysToDeparture: " + err);
                window._gaq.push(['CATTGATC._setCustomVar',  20, 'DaysToDeparture-Search',  "unknown error", 3]);
                window._gaq.push(['CATTGATC._trackEvent', "DaysToDeparture", 'search', "unknown error", 1, true]);
            }
        // Thorsten Heissel 15.12.13 new Code for Videotracking

            $(function() {
                try {
        // new Code for Tacing Live Chat
                    var trackChat = function() {
                        // console.log("tracking Chat !!")
                        var chatType = "eMail";
                        if(window.bt_chatAvailable) {chatType = "Chat"};
                        window._gaq.push([
                            'CATTGATC._trackEvent',
                            "LiveChat",
                            CATTParams.LOB+"_"+CATTParams.PageID+"_"+chatType,
                            CATTParams.Destination,
                            0,
                            true]);
                    }

                    $("#pri .chatTxt").bind("click", trackChat);
        // End new Code Live Chat


                    if(window.opCreative) {
                        window._gaq.push(['CATTGATC._setCustomVar',  42, 'Videoviewer',  window.opCreative, 2]);
                        window._gaq.push(['CATTGATC._trackEvent', "Videoclicks", "startAB-Test", window.opCreative, 1, true]);
                    }

                    var fireHotel = function(iffCode, type) {
                        window._gaq.push(['CATTGATC._trackEvent',
                            "Videoclicks v2",
                            type,
                            checkedLOB + "|" + checkedHolidayType + "|"  + checkedPageID+ "|"  + iffCode,
                            1, false]);
                        var prevHotels = ""; try {prevHotels = (/cattpvideos=([^;]*)/gi).exec(document.cookie)[1]} catch (e){}
                        var today = inAMonth = new Date(); inAMonth.setDate(today.getDate()+30);
                        document.cookie="cattpvideos="+prevHotels +"|"+ iffCode+"; expires="+inAMonth.toUTCString()+";path=/";
                    };
                     // <Xavier Brinon>
                    $('a.showlightbox.videoUrl.video').mousedown(function(elt){
                        fireHotel((elt.currentTarget && elt.currentTarget.href || '').replace(/.*\/([^#]*)##.*/, '$1'), "Hotelvideo");
                    });
                    $('a.showlightbox.videoUrl.videoheli').mousedown(function(elt){
                       fireHotel((elt.currentTarget && elt.currentTarget.href || '').replace(/.*\/([^#]*)##.*/, '$1'), "Helivideo");
                    });
                    $('a.showlightbox.videoUrl.videothreesixty').mousedown(function(elt){
                      fireHotel((elt.currentTarget && elt.currentTarget.href || '').replace(/.*\/([^#]*)##.*/, '$1'), "360Sicht");
                    });
                    $('a#srpvideom.showlightbox.carousel_imglink').mousedown(function(elt){
                      fireHotel((elt.currentTarget && elt.currentTarget.href || '').replace(/.*\/([^#]*)##.*/, '$1'), "Hotelvideo");
                    });
                    $('a#srpvideothreesixty.showlightbox.carousel_imglink').mousedown(function(elt){
                      fireHotel((elt.currentTarget && elt.currentTarget.href || '').replace(/.*\/([^#]*)##.*/, '$1'), "360Sicht");
                    });
                    // </Xavier Brinon>
                } catch (err) {
                    console.log("Error Binding Event");
                };
            });

        })();
        // new section

        window._gaq.push(['CATTGATC._trackPageview', fullVP]);

        (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();

        if (checkedErrorCode){
            var errorLabel= checkedErrorCode+'_SessionID='+checkedSessID+'_AppServer='+checkedAppServer;
            window._gaq.push(['CATTGATC._trackEvent', 'Errors', errorLabel, window.document.referrer, 1, true]);
        }

    } catch(e) {
        console.error('GTM GATC: '+ e);
    }
}())
</script>

/*****************************************************************************/

<script id='gtm_gatcAccom'>
(function gtm_gatc() {
    try {
        if(!String.prototype.tcTrim){String.prototype.tcTrim=function(){return this.replace(/^\s+|\s+$/g,"")}}if(!Number.prototype.tcTrim){Number.prototype.tcTrim=function(){return this+0}}

        var checkedLOB = "generic", checkedHolidayType = "generic", checkedPageID = "accom", checkedDestination = checkedAccomName = checkedDestinationAirportSelected = checkedAccomCode = checkedDeptDate = checkedDepartureAirportSelected = checkedPaxAdult = checkedPaxChild = checkedBoardBasis = checkedRooms = checkedErrorCode = checkedSessID = checkedAppServer = "";
        if (typeof window.CATTParams != 'undefined'){
            if (typeof window.CATTParams.LOB != 'undefined') {checkedLOB = window.CATTParams.LOB.toLowerCase()}
            if (typeof window.CATTParams.HolidayType != 'undefined') {checkedHolidayType = window.CATTParams.HolidayType.toLowerCase()}
            if (typeof window.CATTParams.PageID != 'undefined') {checkedPageID = window.CATTParams.PageID.toLowerCase()}
            if (typeof window.CATTParams.Destination != 'undefined') {checkedDestination = window.CATTParams.Destination}
            if (typeof window.CATTParams.AccomName != 'undefined') {checkedAccomName = window.CATTParams.AccomName}
            if (typeof window.CATTParams.AccomCode != 'undefined') {checkedAccomCode = window.CATTParams.AccomCode}
            if (typeof window.CATTParams.DeptDate != 'undefined') {checkedDeptDate = window.CATTParams.DeptDate}
            if (typeof window.CATTParams.DepartureAirportSelected != 'undefined') {checkedDepartureAirportSelected = window.CATTParams.DepartureAirportSelected}
            if (typeof window.CATTParams.PaxAdult != 'undefined') {checkedPaxAdult = window.CATTParams.PaxAdult}
            if (typeof window.CATTParams.PaxChild != 'undefined') {checkedPaxChild = window.CATTParams.PaxChild}
            if (typeof window.CATTParams.BoardBasis != 'undefined') {checkedBoardBasis = window.CATTParams.BoardBasis}
            if (typeof window.CATTParams.Rooms != 'undefined') {checkedRooms = window.CATTParams.Rooms}
            if (typeof window.CATTParams.ErrorCode != 'undefined') {checkedErrorCode = window.CATTParams.ErrorCode}
            if (typeof window.CATTParams.SessID != 'undefined') {checkedSessID = window.CATTParams.SessID}
            if (typeof window.CATTParams.DestinationAirportSelected != 'undefined') {checkedDestinationAirportSelected = window.CATTParams.DestinationAirportSelected}
            if (typeof window.CATTParams.AppServer != 'undefined') {checkedAppServer = window.CATTParams.AppServer}
        }
        if (checkedLOB == "")  checkedLOB = "generic";
        if (checkedHolidayType == "")  checkedHolidayType = "generic";
        if (checkedPageID == "")  checkedPageID = "accom";

        var VP = '/VP/'+checkedLOB.tcTrim()+'/'+checkedHolidayType.tcTrim()+'/'+checkedPageID.tcTrim();
        var QSP_ST = 'SS_ST='+checkedDestination.tcTrim().replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+checkedAccomName.tcTrim().replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+checkedAccomCode.tcTrim();
        var QSP_CAT = 'SS_CAT='+checkedLOB.tcTrim()+'_'+checkedPageID.tcTrim();
        var QSP_P = 'DeptDate='+checkedDeptDate.tcTrim().replace(/\//g, '-')+'&depAirport='+checkedDepartureAirportSelected.tcTrim()+'&PaxAdult='+checkedPaxAdult.tcTrim()+'&PaxChild='+checkedPaxChild.tcTrim()+'&BoardBasis='+checkedBoardBasis.tcTrim().replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&Destination='+checkedDestination.tcTrim().replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&AccomCode='+checkedAccomCode.tcTrim()+'&AccomName='+checkedAccomName.tcTrim().replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&Rooms='+checkedRooms.tcTrim()+'&destAirport='+checkedDestinationAirportSelected.tcTrim();
        var fullVP = VP+'?'+QSP_ST+'&'+QSP_CAT+'&'+QSP_P;
        fullVP = fullVP.toLowerCase();

        window._gaq = window._gaq || [];
        window._gaq.push(['CATTGATC._setAccount', 'UA-29069538-1']);
        window._gaq.push(['_gat._anonymizeIp']);
        window._gaq.push(['CATTGATC._setAllowLinker', true]);
        window._gaq.push(['CATTGATC._addOrganic', 'suche.t-online.de', 'q'], ['CATTGATC._addOrganic', 'suche.web.de', 'q'], ['CATTGATC._addOrganic', 'suche.gmx.net', 'q'], ['CATTGATC._addOrganic', 'search.1und1.de', 'q'], ['CATTGATC._addOrganic', 'suche.freenet.de', 'query']);
        try {
            if ((/intcmp/i).test(document.location.href)){
                var campaignID = (/intcmp=([^&|\s|\?]*)/i).exec(document.location.href)[1];
                window._gaq.push(['CATTGATC._setCustomVar',  4, 'InternalCampaign',  campaignID, 3]);
                window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign',  campaignID, document.location.host+document.location.pathname, 1, true]);
            } else if ((/intcall/i).test(document.location.href)){
                var campaignID = (/intcall=([^&|\s|\?]*)/i).exec(document.location.href)[1];
                window._gaq.push(['CATTGATC._setCustomVar',  4, 'InternalCampaign',  campaignID, 3]);
                window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign',  campaignID, document.location.host+document.location.pathname, 1, true]);
            }
        } catch(e) {}
        try{
            var xbUtmaGuid="";
            if(/utmaGuid/i.test(document.cookie)){
                var xbUtmaGuid="";
                try{xbUtmaGuid=/utmaGuid=([^;%=]*)/gi.exec(document.cookie)[1]}catch(e){}
            }else{
                var xbUtmaGuid="";
                xbUtmaGuid=/_utma=([^;%=]*)/gi.exec(document.cookie)[1];
                xbUtmaGuid=xbUtmaGuid.split(".")[1]
            }
        }catch(e){var xbUtmaGuid=""}
        window._gaq.push(["CATTGATC._setCustomVar",30,"UtmaGuid",xbUtmaGuid,1]);
        if (/&user_id=/i.test(location.search)) {
            var eCircleID = /user_id=([^&]*)/i.exec(location.search) && /user_id=([^&]*)/i.exec(location.search).pop()
            eCircleID && window._gaq.push(['CATTGATC._setCustomVar',  31, 'eCricleID',  eCircleID, 1]);
        };
        try{
            window._gaq.push(["CATTGATC._setCustomVar",35,"UtmbGuid",/_utmb=([^;%=]*)/gi.exec(document.cookie)[1],2]);
        } catch(e){}
        if (typeof CATTParams.SearchHomepage != "undefined" && CATTParams.SearchHomepage != "" && !/null/i.test(CATTParams.SearchHomepage)) {
            window._gaq.push(['CATTGATC._trackEvent', 'SearchHomepage', CATTParams.SearchHomepage, VP, 1, true]);
        }

        // Thorsten Heissel, DE Ecom-Team: 09.01.14: tracking for DaysToDepartuer and Videos

        (function() {

            try {
                // window._gaq.push(['CATTGATC._trackEvent', 'accom', "Anzahl der Tage", "start", 1, true]);
                var today = new Date();
                var deptDateArray = CATTParams.DeptDate.split("/");
                var deptDate = new Date(deptDateArray[2], deptDateArray[1] -1, deptDateArray[0]);
                // window._gaq.push(['CATTGATC._setCustomVar',  20, 'DeptDate-Accom',  CATTParams.DeptDate, 3]);
                if (isFinite(deptDate)) {
                    var daysToDeparture = "" + Math.round((deptDate-today) / 1000 / 3600 / 24);
                    window._gaq.push(['CATTGATC._trackEvent', "DaysToDeparture", 'accom',  daysToDeparture, 1, true]);
                    // console.log("daysToDeparture: " + daysToDeparture);
                    // window._gaq.push(['CATTGATC._setCustomVar',  20, 'DaysToDeparture-Accom',  daysToDeparture + " days", 3]);
                    // window._gaq.push(['CATTGATC._trackPageview', "fullVP"]);
                } else {
                    // console.log("invalid departure date");
                    window._gaq.push(['CATTGATC._trackEvent', "DaysToDeparture", 'accom', "invalid departure date", 1, true]);
                    // window._gaq.push(['CATTGATC._setCustomVar',  20, 'DaysToDeparture-Accom',  "invalid departure date", 3]);
                }
            } catch (err) {
                window._gaq.push(['CATTGATC._trackEvent', "DaysToDeparture", 'accom', "unknown error", 1, true]);
                // window._gaq.push(['CATTGATC._setCustomVar',  20, 'DaysToDeparture-Accom',  "unknown error", 3]);
                // console.log("error tracking DaysToDeparture: " + err);
            }

        // Thorsten Heissel 15.12.13 new Code for Videotracking

            $(function() {
                try {

        // new Code for Tacing Live Chat
                    var trackChat = function() {
                        // console.log("tracking Chat !!")
                        var chatType = "eMail";
                        if(window.bt_chatAvailable) {chatType = "Chat"};
                        window._gaq.push([
                            'CATTGATC._trackEvent',
                            "LiveChat",
                            CATTParams.LOB+"_"+CATTParams.PageID+"_"+chatType,
                            CATTParams.Destination,
                            parseInt(CATTParams.AccomCode),
                            true]);
                    }

                    $("#pri .chatTxt").bind("click", trackChat);
                    $(".chatBox a").bind("click", trackChat);
        // End new Code Live Chat

                    if(window.opCreative) {
                        window._gaq.push(['CATTGATC._setCustomVar',  42, 'Videoviewer',  window.opCreative, 2]);
                        window._gaq.push(['CATTGATC._trackEvent', "Videoclicks", "startAB-Test", window.opCreative, 1, true]);
                    }

                    var fireHotel = function(iffCode, type) {
                        // console.log("Fire "+type+" for "+ iffCode);
                        window._gaq.push(['CATTGATC._trackEvent',
                            "Videoclicks v2",
                            type,
                            checkedLOB + "|" + checkedHolidayType + "|"  + checkedPageID+ "|"  + iffCode,
                            1, true]);
                        var prevHotels = ""; try {prevHotels = (/cattpvideos=([^;]*)/gi).exec(document.cookie)[1]} catch (e){}
                        var today = inAMonth = new Date(); inAMonth.setDate(today.getDate()+30);
                        // console.log("old cookie = " + prevHotels);
                        document.cookie="cattpvideos="+prevHotels +"|"+ iffCode+"; expires="+inAMonth.toUTCString()+";path=/";
                        // console.log("cookie updated ");
                    }

                    $('a.accomHotelVideoLink').mousedown(function(elt){
                        fireHotel(CATTParams.AccomCode, "Hotelvideo");
                    })
                    $('a.accomHotelHeliLink').mousedown(function(elt){
                        fireHotel(CATTParams.AccomCode, "Helivideo");
                    })
                    $('a.accomHotelThreesixtyLink').mousedown(function(elt){
                        fireHotel(CATTParams.AccomCode, "360Sicht");
                    })
                    $('a#primaryVideoLink').mousedown(function(elt){
                        fireHotel(CATTParams.AccomCode, "Hotelvideo");
                    })
                    $('a#primaryThreesixtyLink').mousedown(function(elt){
                        fireHotel(CATTParams.AccomCode, "360Sicht");
                    })
                    $('a#primaryHeliLink').mousedown(function(elt){
                        fireHotel(CATTParams.AccomCode, "Helivideo");
                    })
                    // only for jquery Version >= 1.7 :     $(document).on("click", "#lightboxGalleryContainer .hotelHeliLink", function() {
                    $("#lightboxGalleryContainer .hotelHeliLink").live("mousedown",  function() {
                        fireHotel(CATTParams.AccomCode, "Helivideo");
                    })

                    $("#lightboxGalleryContainer .hotelVideoLink").live("mousedown",  function() {
                        fireHotel(CATTParams.AccomCode, "Hotelvideo");
                    })

                    $(".videoUrl.videoheli").bind("click", function(event){
                        fireHotel(CATTParams.AccomCode, "Helivideo");
                    });

                    $(".videoUrl.video").bind("click", function(event){
                        fireHotel(CATTParams.AccomCode, "Hotelvideo");
                    });

                    $(".videoUrl.videothreesixty").bind("click", function(event){
                        fireHotel(CATTParams.AccomCode, "360Sicht");
                    });

                    // console.log("End Binding Event");
                } catch (err) {
                    console.log("Error Binding Event");
                };
            });

        })();

        //AccomVideoVisible
        if($('#primaryVideoLink').length || $('#primaryHeliLink').length || $('#primaryThreesixtyLink').length) {
            window._gaq.push(['CATTGATC._setCustomVar',11,'AccomVideoVisible'
                            ,'y|'+(CATTParams.AccomCode || '')+'|'+($('#primaryVideoLink').length && 'Hotelvideo' || '')+'-'+($('#primaryHeliLink').length && 'Helivideo' || '')+'-'+($('#primaryThreesixtyLink').length && '360Sicht' || '')
                            ,3]);
        } else {
            window._gaq.push(['CATTGATC._setCustomVar',11,'AccomVideoVisible','n|'+(CATTParams.AccomCode || '')+'|--',3]);
        };
        //}
        // new section

        window._gaq.push(['CATTGATC._trackPageview', fullVP]);

        (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();

        if (checkedErrorCode){
            var errorLabel= checkedErrorCode+'_SessionID='+checkedSessID+'_AppServer='+checkedAppServer;
            window._gaq.push(['CATTGATC._trackEvent', 'Errors', errorLabel, window.document.referrer, 1, true]);
        }
        window.opCreative && window._gaq.push(['CATTGATC._trackEvent', 'OptimostCreative', window.opCreative, window.document.href, 1, true]);
        var cdpm = window.CATTDL && window.CATTDL.CATTParams || '';
        cdpm && window._gaq.push(['CATTGATC._trackEvent', 'accommodationDetail', cdpm.lob || '', (cdpm.accomcode || '') + '|' + (cdpm.accomname) + '|' + (cdpm.destination) + '|' + (cdpm.accomresort || ''), 1, true]);

    } catch(e) {
        console.error('GTM GATC: '+ e);
    }
}())
</script>

/*****************************************************************************/

<script id='gtm_gatPaxPay'>
(function gtm_gatc() {
    try {
        if(!String.prototype.tcTrim){String.prototype.tcTrim=function(){return this.replace(/^\s+|\s+$/g,"")}}if(!Number.prototype.tcTrim){Number.prototype.tcTrim=function(){return this+0}}

        var checkedLOB = "generic", checkedHolidayType = "generic", checkedPageID = "paxpay", checkedDestination = checkedAccomName = checkedAccomCode = checkedDeptDate = checkedDepartureAirportSelected = checkedPaxAdult = checkedPaxChild = checkedBoardBasis = checkedRooms = checkedDestinationAirportSelected = checkedErrorCode = checkedSessID = checkedAppServer = "";
        if (typeof window.CATTParams != 'undefined'){
             if (typeof window.CATTParams.LOB != 'undefined') {checkedLOB = window.CATTParams.LOB.toLowerCase()}
            if (typeof window.CATTParams.HolidayType != 'undefined') {checkedHolidayType = window.CATTParams.HolidayType.toLowerCase()}
            if (typeof window.CATTParams.Destination != 'undefined') {checkedDestination = window.CATTParams.Destination}
            if (typeof window.CATTParams.AccomName != 'undefined') {checkedAccomName = window.CATTParams.AccomName}
            if (typeof window.CATTParams.AccomCode != 'undefined') {checkedAccomCode = window.CATTParams.AccomCode}
            if (typeof window.CATTParams.PageID != 'undefined') {checkedPageID = window.CATTParams.PageID.toLowerCase()}
            if (typeof window.CATTParams.DeptDate != 'undefined') {checkedDeptDate = window.CATTParams.DeptDate}
            if (typeof window.CATTParams.DepartureAirportSelected != 'undefined') {checkedDepartureAirportSelected = window.CATTParams.DepartureAirportSelected}
            if (typeof window.CATTParams.PaxAdult != 'undefined') {checkedPaxAdult = window.CATTParams.PaxAdult}
            if (typeof window.CATTParams.PaxChild != 'undefined') {checkedPaxChild = window.CATTParams.PaxChild}
            if (typeof window.CATTParams.BoardBasis != 'undefined') {checkedBoardBasis = window.CATTParams.BoardBasis}
            if (typeof window.CATTParams.Rooms != 'undefined') {checkedRooms = window.CATTParams.Rooms}
            if (typeof window.CATTParams.DestinationAirportSelected != 'undefined') {checkedDestinationAirportSelected = window.CATTParams.DestinationAirportSelected}
            if (typeof window.CATTParams.ErrorCode != 'undefined') {checkedErrorCode = window.CATTParams.ErrorCode}
            if (typeof window.CATTParams.SessID != 'undefined') {checkedSessID = window.CATTParams.SessID}
            if (typeof window.CATTParams.AppServer != 'undefined') {checkedAppServer = window.CATTParams.AppServer}
        }
        if (checkedLOB == "")  checkedLOB = "generic";
        if (checkedHolidayType == "")  checkedHolidayType = "generic";
        if (checkedPageID == "")  checkedPageID = "paxpay";

        var VP = '/VP/'+checkedLOB.tcTrim()+'/'+checkedHolidayType.tcTrim()+'/'+checkedPageID.tcTrim();
        var QSP_ST = 'SS_ST='+checkedDestination.tcTrim().replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+checkedAccomName.tcTrim().replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+checkedAccomCode.tcTrim();
        var QSP_CAT = 'SS_CAT='+checkedLOB.tcTrim()+'/'+checkedPageID.tcTrim();
        var QSP_P = 'DeptDate='+checkedDeptDate.tcTrim().replace(/\//g, '-')+'&depAirport='+checkedDepartureAirportSelected.tcTrim()+'&PaxAdult='+checkedPaxAdult.tcTrim()+'&PaxChild='+checkedPaxChild.tcTrim()+'&BoardBasis='+checkedBoardBasis.tcTrim().replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&Destination='+checkedDestination.tcTrim().replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&AccomCode='+checkedAccomCode.tcTrim()+'&AccomName='+checkedAccomName.tcTrim().replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&Rooms='+checkedRooms.tcTrim()+'&destAirport='+checkedDestinationAirportSelected.tcTrim();
        var fullVP = VP+'?'+QSP_ST+'&'+QSP_CAT+'&'+QSP_P;
        fullVP = fullVP.toLowerCase();

        window._gaq = window._gaq || [];
        window._gaq.push(['CATTGATC._setAccount', 'UA-29069538-1']);
        window._gaq.push(['_gat._anonymizeIp']);
        window._gaq.push(['CATTGATC._setAllowLinker', true]);
        window._gaq.push(['CATTGATC._trackPageview', fullVP]);

        // new section for tracking live chats

        setTimeout(function() {
            $(function() {
                try {

                    var trackChat = function() {
                        // console.log("tracking Chat !!")
                        var chatType = "eMail";
                        if(window.bt_chatAvailable) {chatType = "Chat"};
                        window._gaq.push([
                            'CATTGATC._trackEvent',
                            "LiveChat",
                            CATTParams.LOB+"_"+CATTParams.PageID+"_"+chatType,
                            CATTParams.Destination,
                            parseInt(CATTParams.AccomCode),
                            true]);
                    }

                    $("#pri .chatTxt").bind("click", trackChat);
                    $(".livechat a").bind("click", trackChat);
                } catch (err) {
                    console.log("Error binding Chat tracking");
                };
            });

        }, 1000);
        // new section


        (function() {
          var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
          ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();

        if (checkedErrorCode){
            var errorLabel= checkedErrorCode+'_SessionID='+checkedSessID+'_AppServer='+checkedAppServer;
            window._gaq.push(['CATTGATC._trackEvent', 'Errors', errorLabel, window.document.referrer, 1, true]);
        }
    } catch(e) {
        console.error('GTM GATC: '+ e);
    }
}())
</script>

/*****************************************************************************/

<script id='gtm_gatcBooking'>
(function gtm_gatc() {
    try {
        if(!String.prototype.tcTrim){String.prototype.tcTrim=function(){return this.replace(/^\s+|\s+$/g,"")}}if(!Number.prototype.tcTrim){Number.prototype.tcTrim=function(){return this+0}}

        var checkedPageID = "booking", checkedLOB = "generic", checkedHolidayType = "generic", checkedDestinationAirportSelected = checkedAccomCode = checkedDestination = checkedDeptDate = checkedErrorCode = checkedSessID = checkedAppServer = checkedBookingRef = checkedBookingValue = checkedAccomResort = checkedTourOperator = checkedAccomName = checkedDepartureAirportSelected = checkedPaxTotal = checkedPaxAdult = checkedPaxChild = checkedDuration = checkedPaymentOption = checkedBoardBasis = checkedRooms = checkedDepositValue = checkedDepositSelection ="";
        if (typeof window.CATTParams != 'undefined'){
            if (typeof window.CATTParams.PageID != 'undefined') {checkedPageID = window.CATTParams.PageID.toLowerCase()}
            if (typeof window.CATTParams.LOB != 'undefined') {checkedLOB = window.CATTParams.LOB.toLowerCase()}
            if (typeof window.CATTParams.HolidayType != 'undefined') {checkedHolidayType = window.CATTParams.HolidayType.toLowerCase()}
            if (typeof window.CATTParams.DestinationAirportSelected != 'undefined') {checkedDestinationAirportSelected = window.CATTParams.DestinationAirportSelected}
            if (typeof window.CATTParams.AccomCode != 'undefined') {checkedAccomCode = window.CATTParams.AccomCode}
            if (typeof window.CATTParams.Destination != 'undefined') {checkedDestination = window.CATTParams.Destination}
            if (typeof window.CATTParams.DeptDate != 'undefined') {checkedDeptDate = window.CATTParams.DeptDate}
            if (typeof window.CATTParams.ErrorCode != 'undefined') {checkedErrorCode = window.CATTParams.ErrorCode}
            if (typeof window.CATTParams.SessID != 'undefined') {checkedSessID = window.CATTParams.SessID}
            if (typeof window.CATTParams.AppServer != 'undefined') {checkedAppServer = window.CATTParams.AppServer}
            if (typeof window.CATTParams.BookingRef != 'undefined') {checkedBookingRef = window.CATTParams.BookingRef}
            if (typeof window.CATTParams.BookingValue != 'undefined') {checkedBookingValue = window.CATTParams.BookingValue.replace(/\s+|\,/gi,'')}
            if (typeof window.CATTParams.AccomResort != 'undefined') {checkedAccomResort = window.CATTParams.AccomResort}
            if (typeof window.CATTParams.TourOperator != 'undefined') {checkedTourOperator = window.CATTParams.TourOperator}
            if (typeof window.CATTParams.AccomName != 'undefined') {checkedAccomName = window.CATTParams.AccomName}
            if (typeof window.CATTParams.DepartureAirportSelected != 'undefined') {checkedDepartureAirportSelected = window.CATTParams.DepartureAirportSelected}
            if (typeof window.CATTParams.PaxTotal != 'undefined') {checkedPaxTotal = window.CATTParams.PaxTotal}
            if (typeof window.CATTParams.PaxAdult != 'undefined') {checkedPaxAdult = window.CATTParams.PaxAdult}
            if (typeof window.CATTParams.PaxChild != 'undefined') {checkedPaxChild = window.CATTParams.PaxChild}
            if (typeof window.CATTParams.Duration != 'undefined') {checkedDuration = window.CATTParams.Duration}
            if (typeof window.CATTParams.PaymentOption != 'undefined') {checkedPaymentOption = window.CATTParams.PaymentOption}
            if (typeof window.CATTParams.BoardBasis != 'undefined') {checkedBoardBasis = window.CATTParams.BoardBasis}
            if (typeof window.CATTParams.Rooms != 'undefined') {checkedRooms = window.CATTParams.Rooms}
            if (typeof window.CATTParams.DepositValue != 'undefined') {checkedDepositValue = window.CATTParams.DepositValue}
            if (typeof window.CATTParams.DepositSelection != 'undefined') {checkedDepositSelection = window.CATTParams.DepositSelection}
        }
        if (checkedLOB == "")  checkedLOB = "generic";
        if (checkedHolidayType == "")  checkedHolidayType = "generic";
        if (checkedPageID == "")  checkedPageID = "booking";
        if (checkedBookingRef == "" || checkedBookingRef == "0") checkedBookingRef = "empty_"+Math.random();
        if (checkedBookingValue == "") checkedBookingValue = "0";

        var QSP_P = 'DeptDate='+checkedDeptDate.tcTrim().replace(/\//g, '-')+'&depAirport='+checkedDepartureAirportSelected.tcTrim()+'&PaxAdult='+checkedPaxAdult.tcTrim()+'&PaxChild='+checkedPaxChild.tcTrim()+'&BoardBasis='+checkedBoardBasis.tcTrim().replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&Destination='+checkedDestination.tcTrim().replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&AccomCode='+checkedAccomCode.tcTrim()+'&AccomName='+checkedAccomName.tcTrim().replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&Rooms='+checkedRooms.tcTrim()+'&BookingRef='+checkedBookingRef.tcTrim()+'&payOpt='+checkedPaymentOption.tcTrim()+'&GBV='+checkedBookingValue.tcTrim()+'&depVal='+checkedDepositValue.tcTrim()+'&depSelect='+checkedDepositSelection.tcTrim();
        var VP = '/VP/'+checkedLOB.tcTrim()+'/'+checkedHolidayType.tcTrim()+'/'+checkedPageID.tcTrim();
        var fullVP = VP+'?'+QSP_P;
        fullVP = fullVP.toLowerCase();

        window._gaq = window._gaq || [];
        window._gaq.push(['CATTGATC._setAccount', 'UA-29069538-1']);
        window._gaq.push(['_gat._anonymizeIp']);
        window._gaq.push(['CATTGATC._setAllowLinker', true]);
        window._gaq.push(['CATTGATC._setCustomVar',  1, 'Buyer',  checkedLOB+'|'+checkedHolidayType, 3]);
        window._gaq.push(['CATTGATC._trackPageview', fullVP]);

        /*** BEGIN Tracking of Booking ******************/
        /*   2014-03-24 stschaefer                      */
        /*   Returning visits are not tracked           */
        // Cookie does not exists->first visit of page
        if (document.cookie.indexOf("NEC_Ref_" + checkedBookingRef+"="+checkedBookingRef) == -1) {
            // Tracking the booking
            window._gaq.push(['CATTGATC._addTrans', checkedBookingRef, '', checkedBookingValue, '', '', '', '', '']);
            window._gaq.push(['CATTGATC._addItem', checkedBookingRef,
                checkedDestination.replace(/\&amp;/g, '-').replace(/\&/g, '-') + '|' + checkedDestinationAirportSelected + '|' + checkedAccomResort + '|' + checkedTourOperator, // SKU
                checkedAccomName + '|' + checkedAccomCode + '|' + checkedDepartureAirportSelected + '|' + checkedPaxTotal + '|' + checkedPaxAdult + '|' + checkedPaxChild + '|' + checkedDeptDate + '|' + checkedDuration + '|' + checkedPaymentOption, // ProductName
                checkedLOB + '|' + checkedHolidayType, // Category
                checkedBookingValue, // UnitPrice
                '1' // quantity
            ]);
            // Setting cookie
            document.cookie = "NEC_Ref_" + checkedBookingRef + "=" + checkedBookingRef + "; expires=" + new Date(2099, 11, 31);
        }
        /*** END Tracking of Booking ********************/

        // Thorsten Heissel, DE Ecom-Team: 24.10.13: new section to track the days to departure
        // 15.11.13 removed cutstom_var and replaced by track_Event
        // 8.1.2013 Video Tracking eingebaut
        //if(localStorage.getItem("tc-tagman-test")){

        (function() {

            var hotelVideosWatched = "";
            try {hotelVideosWatched = (/cattpvideos=([^;]*)/gi).exec(document.cookie)[1]} catch (e){};
            if (hotelVideosWatched) {
                try {
                    // console.log("track video boooking1");
                    window._gaq.push([    'CATTGATC._trackEvent',
                                        "Videoclicks v2",
                                        'booking',
                                        hotelVideosWatched,
                                        Math.round(CATTParams.BookingValue),
                                        true
                    ]);
                    if(hotelVideosWatched.indexOf(CATTParams.AccomCode) != -1 ){
                        // console.log("track video boooking2");
                        window._gaq.push([    'CATTGATC._trackEvent',
                                            "Videoclicks v2",
                                            'booking2',
                                            CATTParams.AccomCode,
                                            Math.round(CATTParams.BookingValue),
                                            true
                        ]);
                    }
                } catch (err) {
                    // console.log("error sending Video tracking " + err);
                }
            }


            try {
                var today = new Date();
                var deptDateArray = CATTParams.DeptDate.split("/");
                var deptDate = new Date(deptDateArray[2], deptDateArray[1] -1, deptDateArray[0]);
                if (isFinite(deptDate)) {
                    var daysToDeparture = "" + Math.round((deptDate-today) / 1000 / 3600 / 24);
                    // console.log("daysToDeparture: " + daysToDeparture);
                    // window._gaq.push(['CATTGATC._setCustomVar',  20, 'DaysToDeparture-Booking',  daysToDeparture, 3]);
                    window._gaq.push(['CATTGATC._trackEvent', "DaysToDeparture", 'booking', daysToDeparture, 1, true]);
                    // window._gaq.push(['CATTGATC._trackPageview', "fullVP"]);
                } else {
                    // console.log("invalid departure date");
                    window._gaq.push(['CATTGATC._trackEvent', "DaysToDeparture", 'booking', "invalid departure date", 1, true]);
                }
            } catch (err) {
                // console.log("error tracking DaysToDeparture: " + err);
                window._gaq.push(['CATTGATC._trackEvent', "DaysToDeparture", 'booking', "unknown error", 1, true]);
            }
        })();


        //}
        // new section

        window._gaq.push(['CATTGATC._trackTrans']);

        (function() {
          var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
          ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();

        if (checkedErrorCode){
            var errorLabel= checkedErrorCode+'_SessionID='+checkedSessID+'_AppServer='+checkedAppServer;
            window._gaq.push(['CATTGATC._trackEvent', 'Errors', errorLabel, window.document.referrer, 1, true]);
        }
    } catch(e) {
        console.error('GTM GATC: '+ e);
    }
}())
</script>

/*****************************************************************************/

if(!String.prototype.tcTrim){String.prototype.tcTrim=function(){return this.replace(/^\s+|\s+$/g,"")}}if(!Number.prototype.tcTrim){Number.prototype.tcTrim=function(){return this+0}}

var checkedLOB = "generic", checkedHolidayType = "generic", checkedPageID = "search", checkedDestination = checkedDestinationAirportSelected = checkedDeptDate = checkedSearchResultsTotal = checkedDepartureAirportSelected = checkedPaxAdult = checkedPaxChild = checkedBoardBasis = checkedSearchResultsTop3 = checkedErrorCode = checkedSessID = checkedAppServer = "";
if (typeof window.CATTParams != 'undefined'){
    if (typeof window.CATTParams.LOB != 'undefined') {checkedLOB = window.CATTParams.LOB.toLowerCase()}
    if (typeof window.CATTParams.HolidayType != 'undefined') {checkedHolidayType = window.CATTParams.HolidayType.toLowerCase()}
    if (typeof window.CATTParams.PageID != 'undefined') {checkedPageID = window.CATTParams.PageID.toLowerCase()}
    if (typeof window.CATTParams.Destination != 'undefined') {checkedDestination = window.CATTParams.Destination}
    if (typeof window.CATTParams.DeptDate != 'undefined') {checkedDeptDate = window.CATTParams.DeptDate}
    if (typeof window.CATTParams.SearchResultsTotal != 'undefined') {checkedSearchResultsTotal = window.CATTParams.SearchResultsTotal}
    if (typeof window.CATTParams.DepartureAirportSelected != 'undefined') {checkedDepartureAirportSelected = window.CATTParams.DepartureAirportSelected}
    if (typeof window.CATTParams.PaxAdult != 'undefined') {checkedPaxAdult = window.CATTParams.PaxAdult}
    if (typeof window.CATTParams.PaxChild != 'undefined') {checkedPaxChild = window.CATTParams.PaxChild}
    if (typeof window.CATTParams.BoardBasis != 'undefined') {checkedBoardBasis = window.CATTParams.BoardBasis}
    if (typeof window.CATTParams.DestinationAirportSelected != 'undefined') {checkedDestinationAirportSelected = window.CATTParams.DestinationAirportSelected}
    if (typeof window.CATTParams.SearchResultsTop3 != 'undefined') {checkedSearchResultsTop3 = window.CATTParams.SearchResultsTop3}
    if (typeof window.CATTParams.ErrorCode != 'undefined') {checkedErrorCode = window.CATTParams.ErrorCode}
    if (typeof window.CATTParams.SessID != 'undefined') {checkedSessID = window.CATTParams.SessID}
    if (typeof window.CATTParams.AppServer != 'undefined') {checkedAppServer = window.CATTParams.AppServer}
}
if (checkedLOB == "")  checkedLOB = "generic";
if (checkedHolidayType == "")  checkedHolidayType = "generic";
if (checkedPageID == "")  checkedPageID = "search";

var VP = '/VP/'+checkedLOB.tcTrim()+'/'+checkedHolidayType.tcTrim()+'/'+checkedPageID.tcTrim();
var QSP_ST = 'SS_ST='+checkedDestination.tcTrim().replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+checkedDeptDate.tcTrim().replace(/\//g, '-')+'_'+((checkedSearchResultsTotal.tcTrim() == "0")?'nResults':'yResults');
var QSP_CAT = 'SS_CAT='+checkedLOB.tcTrim()+'_'+checkedPageID.tcTrim();
var QSP_P = 'DeptDate='+checkedDeptDate.tcTrim().replace(/\//g, '-')+'&depAirport='+checkedDepartureAirportSelected.tcTrim()+'&PaxAdult='+checkedPaxAdult.tcTrim()+'&PaxChild='+checkedPaxChild.tcTrim()+'&BoardBasis='+checkedBoardBasis.tcTrim().replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&Destination='+checkedDestination.tcTrim().replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&SRPTop3='+checkedSearchResultsTop3.tcTrim().replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&SRPTot='+checkedSearchResultsTotal.tcTrim()+'&destAirport='+checkedDestinationAirportSelected.tcTrim();
var fullVP = VP+'?'+QSP_ST+'&'+QSP_CAT+'&'+QSP_P;
fullVP = fullVP.toLowerCase();

window._gaq = window._gaq || [];
window._gaq.push(['CATTGATC._setAccount', 'UA-29069538-1']);
window._gaq.push(['CATTGATC._setDomainName', 'neckermann-reisen.de']);
window._gaq.push(['_gat._anonymizeIp']);
window._gaq.push(['CATTGATC._setAllowLinker', true]);
window._gaq.push(['CATTGATC._addOrganic', 'suche.t-online.de', 'q'], ['CATTGATC._addOrganic', 'suche.web.de', 'q'], ['CATTGATC._addOrganic', 'suche.gmx.net', 'q'], ['CATTGATC._addOrganic', 'search.1und1.de', 'q'], ['CATTGATC._addOrganic', 'suche.freenet.de', 'query']);
try {
    if ((/intcmp/i).test(document.location.href)){
        var campaignID = (/intcmp=([^&|\s|\?]*)/i).exec(document.location.href)[1];
        window._gaq.push(['CATTGATC._setCustomVar',  4, 'InternalCampaign',  campaignID, 3]);
        window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign',  campaignID, document.location.host+document.location.pathname, 1, true]);
    } else if ((/intcall/i).test(document.location.href)){
        var campaignID = (/intcall=([^&|\s|\?]*)/i).exec(document.location.href)[1];
        window._gaq.push(['CATTGATC._setCustomVar',  4, 'InternalCampaign',  campaignID, 3]);
        window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign',  campaignID, document.location.host+document.location.pathname, 1, true]);
    }
} catch(e) {}

// Heissel inserted Performance Tracking for XPCT
try{
    window._gaq.push(["CATTGATC._setCustomVar",15,"SortOption_HotelsPP",CATTParams.SortOption + "_" + CATTParams.SearchResultsPerPage,2]);
    // BEGIN Tracking of empty SortOption ******************************************************************************
    //   2014-04-07 Stefan Schaefer
    if (CATTParams.SortOption.trim().length <= 0){
        window._gaq.push([
            'CATTGATC._trackEvent',
            'SortOptionEmpty',
            document.referrer.split('?')[0], // Getting previous url without parameters
            CATTParams.LOB + '/' + CATTParams.HolidayType + '/' + CATTParams.PageID + '_' + CATTParams.Destination + '_' + CATTParams.SearchResultsPageNbr + 'von' + CATTParams.SearchResultsPages
        ]);
    }
    // END Tracking of empty SortOption ********************************************************************************
    if (/empfehlung/gi.test(CATTParams.SortOption)) {
        window._gaq.push(["CATTGATC._setCustomVar",16,"XPCT","True",2]);
    }
    // window._gaq.push(["CATTGATC._setCustomVar",17,"Destination (Page)",CATTParams.Destination,3]);
    // window._gaq.push(["CATTGATC._setCustomVar",18,"Destination (Session)",CATTParams.Destination,2]);
    // window._gaq.push(["CATTGATC._setCustomVar",19,"Hotels pro Seite",CATTParams.SearchResultsPerPage,3]);
} catch(e){}


if (typeof CATTParams.SearchHomepage != "undefined" && CATTParams.SearchHomepage != "") {
    window._gaq.push(['CATTGATC._trackEvent', 'SearchHomepage', CATTParams.SearchHomepage, VP, 1, true]);
}

// Thorsten Heissel, DE Ecom-Team: 24.10.13: new section to track the days to departure
// 15.11.13 removed cutstom_var and replaced by track_Event
(function() {
    try {
        var today = new Date();
        var deptDateArray = CATTParams.DeptDate.split("/");
        var deptDate = new Date(deptDateArray[2], deptDateArray[1] -1, deptDateArray[0]);
        if (isFinite(deptDate)) {
            var daysToDeparture = "" + Math.round((deptDate-today) / 1000 / 3600 / 24);
            // console.log("daysToDeparture: " + daysToDeparture);
            window._gaq.push(['CATTGATC._setCustomVar',  20, 'DaysToDeparture-Search',  daysToDeparture, 3]);
            window._gaq.push(['CATTGATC._trackEvent', "DaysToDeparture", 'search', daysToDeparture, 1, true]);
            // window._gaq.push(['CATTGATC._setCustomVar',  20, 'DaysToDeparture-Search',  daysToDeparture, 3]);
            // window._gaq.push(['CATTGATC._trackPageview', "fullVP"]);
        } else {
            // console.log("invalid departure date");
            window._gaq.push(['CATTGATC._setCustomVar',  20, 'DaysToDeparture-Search',  "invalid departure date", 3]);
            window._gaq.push(['CATTGATC._trackEvent',  "DaysToDeparture", 'search',"invalid departure date", 1, true]);
        }

    } catch (err) {
        // console.log("error tracking DaysToDeparture: " + err);
        window._gaq.push(['CATTGATC._setCustomVar',  20, 'DaysToDeparture-Search',  "unknown error", 3]);
        window._gaq.push(['CATTGATC._trackEvent', "DaysToDeparture", 'search', "unknown error", 1, true]);
    }
// Thorsten Heissel 15.12.13 new Code for Videotracking

    $(function() {
        try {
// new Code for Tacing Live Chat
            var trackChat = function() {
                // console.log("tracking Chat !!")
                var chatType = "eMail";
                if(window.bt_chatAvailable) {chatType = "Chat"};
                window._gaq.push([
                    'CATTGATC._trackEvent',
                    "LiveChat",
                    CATTParams.LOB+"_"+CATTParams.PageID+"_"+chatType,
                    CATTParams.Destination,
                    0,
                    true]);
            }

            $("#pri .chatTxt").bind("click", trackChat);
// End new Code Live Chat


            if(window.opCreative) {
                window._gaq.push(['CATTGATC._setCustomVar',  42, 'Videoviewer',  window.opCreative, 2]);
                window._gaq.push(['CATTGATC._trackEvent', "Videoclicks", "startAB-Test", window.opCreative, 1, true]);
            }

            var fireHotel = function(iffCode, type) {
                window._gaq.push(['CATTGATC._trackEvent',
                    "Videoclicks v2",
                    type,
                    checkedLOB + "|" + checkedHolidayType + "|"  + checkedPageID+ "|"  + iffCode,
                    1, false]);
                var prevHotels = ""; try {prevHotels = (/cattpvideos=([^;]*)/gi).exec(document.cookie)[1]} catch (e){}
                var today = inAMonth = new Date(); inAMonth.setDate(today.getDate()+30);
                document.cookie="cattpvideos="+prevHotels +"|"+ iffCode+"; expires="+inAMonth.toUTCString()+";path=/";
            };
             // <Xavier Brinon>
            $('a.showlightbox.videoUrl.video').mousedown(function(elt){
                fireHotel((elt.currentTarget && elt.currentTarget.href || '').replace(/.*\/([^#]*)##.*/, '$1'), "Hotelvideo");
            });
            $('a.showlightbox.videoUrl.videoheli').mousedown(function(elt){
               fireHotel((elt.currentTarget && elt.currentTarget.href || '').replace(/.*\/([^#]*)##.*/, '$1'), "Helivideo");
            });
            $('a.showlightbox.videoUrl.videothreesixty').mousedown(function(elt){
              fireHotel((elt.currentTarget && elt.currentTarget.href || '').replace(/.*\/([^#]*)##.*/, '$1'), "360Sicht");
            });
            $('a#srpvideom.showlightbox.carousel_imglink').mousedown(function(elt){
              fireHotel((elt.currentTarget && elt.currentTarget.href || '').replace(/.*\/([^#]*)##.*/, '$1'), "Hotelvideo");
            });
            $('a#srpvideothreesixty.showlightbox.carousel_imglink').mousedown(function(elt){
              fireHotel((elt.currentTarget && elt.currentTarget.href || '').replace(/.*\/([^#]*)##.*/, '$1'), "360Sicht");
            });
            // </Xavier Brinon>
        } catch (err) {
            console.log("Error Binding Event");
        };
    });

})();
// new section

window._gaq.push(['CATTGATC._trackPageview', fullVP]);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

if (checkedErrorCode){
    var errorLabel= checkedErrorCode+'_SessionID='+checkedSessID+'_AppServer='+checkedAppServer;
    window._gaq.push(['CATTGATC._trackEvent', 'Errors', errorLabel, window.document.referrer, 1, true]);
}

// BEGIN XPCT-Tracking *************************************************************************************
// 2014-05-14 Stefan Schaefer
try{
    function GetURLParameter(sParam)
    {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++)
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam)
            {
                return sParameterName[1];
            }
        }
    }

    function setCookie( cookie_name, cookie_value,
                        lifespan_in_days, valid_domain )
    {
        var domain_string = valid_domain ?
            ("; domain=" + valid_domain) : '' ;
        document.cookie = cookie_name +
            "=" + ( cookie_value ) +
            "; max-age=" + 60 * 60 *
            24 * lifespan_in_days +
            "; path=/" + domain_string ;
    }

    function deleteCookie( cookie_name, valid_domain )
    {
        var domain_string = valid_domain ?
            ("; domain=" + valid_domain) : '' ;
        document.cookie = cookie_name +
            "=; max-age=0; path=/" + domain_string ;
    }

    deleteCookie('xpctIffPos', '.neckermann-reisen.de');
    // XPCT-Sort?
    if ((/unsere empfehlung/i).test(window.CATTParams.SortOption)) {
        var web = 'NEC_DE';
        var productType = '?';
        if ((/hotel/i).test(window.CATTParams.LOB)) {
            productType = 'H';
        } else if ((/package/i).test(window.CATTParams.LOB)) {
            productType = 'P';
        }
        var supplierName = 'TT';
        var pos = '';
        var currentPos = 1;
        var iffPos = '';
        if (GetURLParameter('startIndex') > 0) {
            currentPos = parseInt(GetURLParameter('startIndex')) + 1;
        }
        $('.hotelSelectionWrap').each(function (index) {
            if ($(this).text().trim().length > 0) {
                var supplierId = window.hibItems[index].iff;
                iffPos += supplierId + '@' + currentPos + '|';
                pos += '&pos' + (currentPos++) + '=' + supplierId;
            }
        });
        // Setting Cookie for tracking of click (is done on ACCOM Page)
        setCookie('xpctIffPos', iffPos, 30, '.neckermann-reisen.de');
        // Writing ViewPixel
        document.write('<img src="http://tracker.xpct.de/viewPixel.gif?web=' + web + '&product_type=' + productType + '&supplier_name=' + supplierName + pos + '" width="1" height="1" style="height: 1px; width: 1px; display: hidden" />')
    }
} catch(e){ console.log("DE NEC SRP GATC Tag 1 // XPCT-Tracking" + e); }

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

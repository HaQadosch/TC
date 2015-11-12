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

// BEGIN XPCT-Tracking *************************************************************************************
// 2014-05-14 Stefan Schaefer
try{
    function getCookie(cookieName)
    {
        var allcookies = document.cookie;
        // Get all the cookies pairs in an array
        cookiearray  = allcookies.split(';');
        // Now take key value pair out of this array
        for(var i=0; i<cookiearray.length; i++){
            name = cookiearray[i].split('=')[0].trim();
            value = cookiearray[i].split('=')[1].trim();
            if(name==cookieName) {
                return value;
            }
        }
    }

    var position = getCookie('xpctIffPos');
    // Cookie exists -> XPCT-Sort
    if(position) {
        var web = 'NEC_DE';
        var productType = '?';
        if ((/hotel/i).test(window.CATTParams.LOB)) {
            productType = 'H';
        } else if ((/package/i).test(window.CATTParams.LOB)) {
            productType = 'P';
        }
        var supplierName = 'TT';
        var supplierId = window.CATTParams.AccomCode;
        position = position.split(supplierId+'@')[1].split('|')[0];
        // Writing Click Pixel
        var track = new Image();
        track.src= 'http://tracker.xpct.de/clickPixel.gif?web=' + web + '&product_type=' + productType + '&supplier_name=' + supplierName + '&supplier_id=' + supplierId + '&position=' + position;
    }
} catch(e){ console.log("DE NEC ACCOM GATC Tag 1 // XPCT-Tracking" + e); }

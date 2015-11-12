/*
Attribution Landing Pages.
*/
try{
    var utm_medium = "";     try { utm_medium= /utm_medium=/i.test(document.location.search) && /utm_medium=(\w+)&?/gi.exec(document.location.search)[1] } catch (e) { utm_medium = ""; }
    var utm_source = "";     try { utm_source= /utm_source=/i.test(document.location.search) && /utm_source=(\w+)&?/gi.exec(document.location.search)[1] } catch (e) { utm_source = ""; }
    var utm_campaign = '';     try { utm_campaign= /utm_campaign=/i.test(document.location.search) && /utm_campaign=(\w+)&?/gi.exec(document.location.search)[1] } catch (e) { utm_campaign = ''; } // get the publisher ID for Affilinet
    var utm_term = "";         try { utm_term= /utm_term=/i.test(document.location.search) && /utm_term=([^&]+)&?/gi.exec(document.location.search)[1] } catch (e) { utm_term = ""; }
    var gclid = false;         try { gclid=/gclid=/i.test(document.location.search); if (gclid) utm_medium="gclid" } catch (e) { gclid = false; }

    var today = inAMonth = new Date(); inAMonth.setDate(today.getDate()+30);
    var prevXBCAttr = ""; try {prevXBCAttr = /xbcattr=/i.test(document.cookie) && /xbcattr=([^;]*)/gi.exec(document.cookie)[1]} catch (e){}
    document.cookie="xbcattr="+((prevXBCAttr)?prevXBCAttr+"|":"")+((utm_medium)?utm_medium:"")+"; expires="+inAMonth.toUTCString()+"; path=/; domain=.urlaub.de;"

    if (/aff/i.test(utm_medium)) {
        if (typeof console != "undefined") console.log ("Attrribution: affiliates");
        var today = inAMonth = new Date(); inAMonth.setDate(today.getDate()+30); document.cookie="xbAFFPublisherID="+utm_campaign+"; expires="+inAMonth.toUTCString()+"; path=/; domain=.urlaub.de;"
    } else if (/met|part/i.test(utm_medium)) {
        if (typeof console != "undefined") console.log ("Attrribution: partners");
        var today = inAMonth = new Date(); inAMonth.setDate(today.getDate()+30); document.cookie="xbAFFPublisherID="+utm_campaign+"; expires="+inAMonth.toUTCString()+"; path=/; domain=.urlaub.de;"
    } else if (/ban|criteo|dis/i.test(utm_medium)) {
        if (typeof console != "undefined") console.log ("Attrribution: display");
    } else if (/email|newsletter/i.test(utm_medium)) {
        if (typeof console != "undefined") console.log ("Attrribution: eCRM");
    } else if (/cp|ppc|gclid/i.test(utm_medium)) {
        if (typeof console != "undefined") console.log ("Attrribution: PPC");
    } else if (/soc|twitter/i.test(utm_medium)) {
        if (typeof console != "undefined") console.log ("Attrribution: social media");
    } else {
        if (typeof console != "undefined") console.log ("Attrribution: default");
    }
} catch (e){if (typeof console != "undefined") console.log("ULB DE LP Code: "+e)}

/*
Attribution Conf page.
*/
try{
    var pubID = ""; try {pubID = /xbAFFPublisherID=/i.test(document.cookie) && /xbAFFPublisherID=([^;]*)/i.exec(document.cookie)[1]} catch (e){}
    var cAttr = ""; try {cAttr = /xbcattr=/i.test(document.cookie) && /xbcattr=([^;]*)/i.exec(document.cookie)[1]} catch (e){}
    var paidChannels = /aff|met|part|agg|ban|criteo|dis|email|newsletter|cp|ppc|gclid/i;

    var winningCampaign = "default";
    if (paidChannels.test(cAttr)){
        var camps = cAttr.split('|');
        for (var camp = camps.pop(); !paidChannels.test(camp); camp = camps.pop()){}
        if (/aff/i.test(camp)) {
            winningCampaign = 'affiliates';

            var article = "";
            if (/flight/i.test(window.CATTParams.LOB)){
                var article = "ArticleNb="+(window.CATTParams.AccomCode || "1")+"&ProductName=Flights&Category=Flights&Quantity=1&SinglePrice="+window.CATTParams.BookingValue+"&Brand="+window.CATTParams.TourOperator+"&Property1="+window.CATTParams.DepartureAirportSelected+"&Property2="+window.CATTParams.DestinationAirportSelected+"&Property3="+window.CATTParams.Duration+"&Property4="+window.CATTParams.DeptDate+"&Property5="+window.CATTParams.Carrier;
            } else if (/hotel/i.test(window.CATTParams.LOB)){
                var article = "ArticleNb="+(window.CATTParams.AccomCode || "1")+"&ProductName=Hotel Booking&Category=Hotels&Quantity=1&SinglePrice="+window.CATTParams.BookingValue+"&Brand="+window.CATTParams.TourOperator+"&Property1="+window.CATTParams.AccomName+"&Property2="+window.CATTParams.Destination+"&Property3="+window.CATTParams.Duration+"&Property4="+window.CATTParams.DeptDate+"&Property5="+window.CATTParams.StarRating;
            } else { // Packages
                var article = "ArticleNb="+(window.CATTParams.AccomCode || "1")+"&ProductName=Package booking for "+window.CATTParams.PaxAdult+" Adults and "+window.CATTParams.PaxChild+" Children&Category=Package > "+window.CATTParams.DestinationAirportSelected+"&Quantity=1&SinglePrice="+window.CATTParams.BookingValue+"&Brand="+window.CATTParams.TourOperator+"&Property1="+window.CATTParams.DepartureAirportSelected+"&Property2="+window.CATTParams.DestinationAirportSelected+"&Property3="+window.CATTParams.Duration+"&Property4="+window.CATTParams.DeptDate+"&Property5="+window.CATTParams.BoardBasis;
            }
            var pubID = ""; try {pubID = /xbAFFPublisherID=([^;]*)/i.test(document.cookie) && /xbAFFPublisherID=([^;]*)/gi.exec(document.cookie)[1]} catch (e){}
            (function() {var ga = document.createElement('img'); ga.src = "https://partners.webmasterplan.com/registersale.asp?site=5104"+((pubID)?'&ref='+pubID:'')+"&order="+window.CATTParams.BookingRef+"&basket="+escape(article)+"%0D%0A"; var s = document.getElementsByTagName('img')[0]; s.parentNode.insertBefore(ga, s);})();
        }
        else if (/met|part/i.test(camp)) winningCampaign = 'partners';
        else if (/agg/i.test(camp)) winningCampaign = 'aggregator';
        else if (/ban|criteo|dis/i.test(camp)) winningCampaign = 'display';
        else if (/email|newsletter/i.test(camp)) winningCampaign = 'eCRM';
        else if (/cp|ppc|gclid/i.test(camp)) winningCampaign = 'PPC';
        else if (/soc|twitter/i.test(camp)) winningCampaign = 'social';
    }

    window._gaq = window._gaq || [];
    window._gaq.push(['CATTGATC._setAccount', 'UA-33086843-1']);
    window._gaq.push(['CATTGATC._setDomainName', 'urlaub.de']);
    window._gaq.push(['_gat._anonymizeIp']);
    window._gaq.push(['CATTGATC._setAllowLinker', true]);
    window._gaq.push(['CATTGATC._addOrganic', 'suche.t-online.de', 'q'], ['CATTGATC._addOrganic', 'suche.web.de', 'q'], ['CATTGATC._addOrganic', 'suche.gmx.net', 'q'], ['CATTGATC._addOrganic', 'search.1und1.de', 'q'], ['CATTGATC._addOrganic', 'suche.freenet.de', 'query']);
    window._gaq.push(['CATTGATC._trackEvent', 'BkgCookieAttrib', 'BookingRef='+window.CATTParams.BookingRef, 'Attr='+camp+'->'+winningCampaign+'|'+pubID+'|'+'_path='+cAttr, 1, true]);
} catch (e){if (typeof console != "undefined") console.log("DE ULB Conf Cookie Attr: "+e)}


/*
GATC Generic, default page.
*/
var checkedErrorCode = checkedSessID = checkedAppServer = "";
var missingParams = "";
if (typeof window.CATTParams != 'undefined'){
    if (typeof window.CATTParams.ErrorCode != 'undefined') {checkedErrorCode = window.CATTParams.ErrorCode}
    if (typeof window.CATTParams.SessID != 'undefined') {checkedSessID = window.CATTParams.SessID}
    if (typeof window.CATTParams.AppServer != 'undefined') {checkedAppServer = window.CATTParams.AppServer}
}

window._gaq = window._gaq || [];
window._gaq.push(['CATTGATC._setAccount', 'UA-33086843-1']);
window._gaq.push(['CATTGATC._setDomainName', 'urlaub.de']);
window._gaq.push(['_gat._anonymizeIp']);
window._gaq.push(['CATTGATC._setAllowLinker', true]);
window._gaq.push(['CATTGATC._addOrganic', 'suche.t-online.de', 'q'], ['CATTGATC._addOrganic', 'suche.web.de', 'q'], ['CATTGATC._addOrganic', 'suche.gmx.net', 'q'], ['CATTGATC._addOrganic', 'search.1und1.de', 'q'], ['CATTGATC._addOrganic', 'suche.freenet.de', 'query']);
try {
    if ((/intcmp/i).test(document.location.href)){
        var campaignID = (/intcmp=([^&|\s|\?]*)/i).exec(document.location.href)[1];
        window._gaq.push(['CATTGATC._setCustomVar',  4, 'InternalCampaign',  campaignID, 3]);
        window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign',  campaignID, document.location.host+document.location.pathname, 1, true]);
    }
} catch(e) {}
window._gaq.push(['CATTGATC._trackPageview']);

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
var inBound = new RegExp("^#$|^javascript:|"+document.location.host.match(/\w+\.\w+$|\w+\.co\.uk$/gi)[0].replace('.', '\\.')+"|urlaub\\.de|google-analytics\\.com|mailto:", "gi")
for (var i=0; i<as.length; i++){
    var aHref = as[i].href;
    if(!aHref || aHref.match(inBound)) continue;
    var aOnClick = as[i].onclick;

    as[i].onclick = function () {
        window._gaq.push(['CATTGATC._trackEvent', 'outbound link', 'click', this.href.split("//")[1], 1, true]);
        aOnClick();
    };
}

/*
GATC SubSRP
*/
if(!String.prototype.tcTrim){String.prototype.tcTrim=function(){return this.replace(/^\s+|\s+$/g,"")}}if(!Number.prototype.tcTrim){Number.prototype.tcTrim=function(){return this+0}}

var checkedLOB = "generic", checkedHolidayType = "generic", checkedPageID = "subsrch",  checkedErrorCode = checkedSessID = checkedAppServer = "";
var missingParams = "";
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

var VP = '/VP/'+checkedLOB.tcTrim()+'/'+checkedHolidayType.tcTrim()+'/'+checkedPageID.tcTrim();
var fullVP = VP;
fullVP = fullVP.toLowerCase();

window._gaq = window._gaq || [];
window._gaq.push(['CATTGATC._setAccount', 'UA-33086843-1']);
window._gaq.push(['CATTGATC._setDomainName', 'urlaub.de']);
window._gaq.push(['_gat._anonymizeIp']);
window._gaq.push(['CATTGATC._setAllowLinker', true]);
window._gaq.push(['CATTGATC._addOrganic', 'suche.t-online.de', 'q'], ['CATTGATC._addOrganic', 'suche.web.de', 'q'], ['CATTGATC._addOrganic', 'suche.gmx.net', 'q'], ['CATTGATC._addOrganic', 'search.1und1.de', 'q'], ['CATTGATC._addOrganic', 'suche.freenet.de', 'query']);
try {
    if ((/intcmp/i).test(document.location.href)){
        var campaignID = (/intcmp=([^&|\s|\?]*)/i).exec(document.location.href)[1];
        window._gaq.push(['CATTGATC._setCustomVar',  4, 'InternalCampaign',  campaignID, 3]);
        window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign',  campaignID, document.location.host+document.location.pathname, 1, true]);
    }
} catch(e) {}
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


/*
GATC SRP
*/
if(!String.prototype.tcTrim){String.prototype.tcTrim=function(){return this.replace(/^\s+|\s+$/g,"")}}if(!Number.prototype.tcTrim){Number.prototype.tcTrim=function(){return this+0}}

var checkedLOB = "generic", checkedHolidayType = "generic", checkedPageID = "search", checkedDestination = checkedDeptDate = checkedDestinationAirportSelected = checkedSearchResultsTotal = checkedDepartureAirportSelected = checkedPaxAdult = checkedPaxChild = checkedBoardBasis = checkedSearchResultsTop3 = checkedErrorCode = checkedSessID = checkedAppServer = "";
var missingParams = "";
if (typeof window.CATTParams != 'undefined'){
    if (typeof window.CATTParams.LOB != 'undefined') {checkedLOB = window.CATTParams.LOB.toLowerCase()}
    if (typeof window.CATTParams.HolidayType != 'undefined') {checkedHolidayType = window.CATTParams.HolidayType.toLowerCase()}
    if (typeof window.CATTParams.PageID != 'undefined') {checkedPageID = window.CATTParams.PageID.toLowerCase()}
    if (typeof window.CATTParams.Destination != 'undefined') {checkedDestination = window.CATTParams.Destination}
    if (typeof window.CATTParams.DeptDate != 'undefined') {checkedDeptDate = window.CATTParams.DeptDate}
    if (typeof window.CATTParams.DestinationAirportSelected != 'undefined') {checkedDestinationAirportSelected = window.CATTParams.DestinationAirportSelected}
    if (typeof window.CATTParams.SearchResultsTotal != 'undefined') {checkedSearchResultsTotal = window.CATTParams.SearchResultsTotal}
    if (typeof window.CATTParams.DepartureAirportSelected != 'undefined') {checkedDepartureAirportSelected = window.CATTParams.DepartureAirportSelected}
    if (typeof window.CATTParams.PaxAdult != 'undefined') {checkedPaxAdult = window.CATTParams.PaxAdult}
    if (typeof window.CATTParams.PaxChild != 'undefined') {checkedPaxChild = window.CATTParams.PaxChild}
    if (typeof window.CATTParams.BoardBasis != 'undefined') {checkedBoardBasis = window.CATTParams.BoardBasis}
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
window._gaq.push(['CATTGATC._setAccount', 'UA-33086843-1']);
window._gaq.push(['CATTGATC._setDomainName', 'urlaub.de']);
window._gaq.push(['_gat._anonymizeIp']);
window._gaq.push(['CATTGATC._setAllowLinker', true]);
window._gaq.push(['CATTGATC._addOrganic', 'suche.t-online.de', 'q'], ['CATTGATC._addOrganic', 'suche.web.de', 'q'], ['CATTGATC._addOrganic', 'suche.gmx.net', 'q'], ['CATTGATC._addOrganic', 'search.1und1.de', 'q'], ['CATTGATC._addOrganic', 'suche.freenet.de', 'query']);
try {
    if ((/intcmp/i).test(document.location.href)){
        var campaignID = (/intcmp=([^&|\s|\?]*)/i).exec(document.location.href)[1];
        window._gaq.push(['CATTGATC._setCustomVar',  4, 'InternalCampaign',  campaignID, 3]);
        window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign',  campaignID, document.location.host+document.location.pathname, 1, true]);
    }
} catch(e) {}
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


/*
GATC Accom
*/
if(!String.prototype.tcTrim){String.prototype.tcTrim=function(){return this.replace(/^\s+|\s+$/g,"")}}if(!Number.prototype.tcTrim){Number.prototype.tcTrim=function(){return this+0}}

var checkedLOB = "generic", checkedHolidayType = "generic", checkedPageID = "accom", checkedDestination = checkedAccomName = checkedDestinationAirportSelected = checkedAccomCode = checkedDeptDate = checkedDepartureAirportSelected = checkedPaxAdult = checkedPaxChild = checkedBoardBasis = checkedRooms = checkedErrorCode = checkedSessID = checkedAppServer = "";
var missingParams = "";
if (typeof window.CATTParams != 'undefined'){
    if (typeof window.CATTParams.LOB != 'undefined') {checkedLOB = window.CATTParams.LOB.toLowerCase()}
    if (typeof window.CATTParams.HolidayType != 'undefined') {checkedHolidayType = window.CATTParams.HolidayType.toLowerCase()}
    if (typeof window.CATTParams.PageID != 'undefined') {checkedPageID = window.CATTParams.PageID.toLowerCase()}
    if (typeof window.CATTParams.Destination != 'undefined') {checkedDestination = window.CATTParams.Destination}
    if (typeof window.CATTParams.AccomName != 'undefined') {checkedAccomName = window.CATTParams.AccomName}
    if (typeof window.CATTParams.AccomCode != 'undefined') {checkedAccomCode = window.CATTParams.AccomCode}
    if (typeof window.CATTParams.DeptDate != 'undefined') {checkedDeptDate = window.CATTParams.DeptDate}
    if (typeof window.CATTParams.DestinationAirportSelected != 'undefined') {checkedDestinationAirportSelected = window.CATTParams.DestinationAirportSelected}
    if (typeof window.CATTParams.DepartureAirportSelected != 'undefined') {checkedDepartureAirportSelected = window.CATTParams.DepartureAirportSelected}
    if (typeof window.CATTParams.PaxAdult != 'undefined') {checkedPaxAdult = window.CATTParams.PaxAdult}
    if (typeof window.CATTParams.PaxChild != 'undefined') {checkedPaxChild = window.CATTParams.PaxChild}
    if (typeof window.CATTParams.BoardBasis != 'undefined') {checkedBoardBasis = window.CATTParams.BoardBasis}
    if (typeof window.CATTParams.Rooms != 'undefined') {checkedRooms = window.CATTParams.Rooms}
    if (typeof window.CATTParams.ErrorCode != 'undefined') {checkedErrorCode = window.CATTParams.ErrorCode}
    if (typeof window.CATTParams.SessID != 'undefined') {checkedSessID = window.CATTParams.SessID}
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
window._gaq.push(['CATTGATC._setAccount', 'UA-33086843-1']);
window._gaq.push(['CATTGATC._setDomainName', 'urlaub.de']);
window._gaq.push(['_gat._anonymizeIp']);
window._gaq.push(['CATTGATC._setAllowLinker', true]);
window._gaq.push(['CATTGATC._addOrganic', 'suche.t-online.de', 'q'], ['CATTGATC._addOrganic', 'suche.web.de', 'q'], ['CATTGATC._addOrganic', 'suche.gmx.net', 'q'], ['CATTGATC._addOrganic', 'search.1und1.de', 'q'], ['CATTGATC._addOrganic', 'suche.freenet.de', 'query']);
try {
    if ((/intcmp/i).test(document.location.href)){
        var campaignID = (/intcmp=([^&|\s|\?]*)/i).exec(document.location.href)[1];
        window._gaq.push(['CATTGATC._setCustomVar',  4, 'InternalCampaign',  campaignID, 3]);
        window._gaq.push(['CATTGATC._trackEvent', 'InternalCampaign',  campaignID, document.location.host+document.location.pathname, 1, true]);
    }
} catch(e) {}
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



/*
GATC PaxPay
*/
if(!String.prototype.tcTrim){String.prototype.tcTrim=function(){return this.replace(/^\s+|\s+$/g,"")}}if(!Number.prototype.tcTrim){Number.prototype.tcTrim=function(){return this+0}}

var checkedLOB = "generic", checkedHolidayType = "generic", checkedPageID = "paxpay", checkedDestination = checkedAccomName = checkedAccomCode = checkedDeptDate = checkedDepartureAirportSelected = checkedPaxAdult = checkedPaxChild = checkedBoardBasis = checkedRooms = checkedDestinationAirportSelected = checkedErrorCode = checkedSessID = checkedAppServer = "";
var missingParams = "";
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
window._gaq.push(['CATTGATC._setAccount', 'UA-33086843-1']);
window._gaq.push(['CATTGATC._setDomainName', 'urlaub.de']);
window._gaq.push(['_gat._anonymizeIp']);
window._gaq.push(['CATTGATC._setAllowLinker', true]);
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



/*
GATC Conf
*/
var verboseMode; try { verboseMode = (/CATTGATC=verbose/gi).test(document.cookie); } catch (e) { verboseMode = false; }
if(!String.prototype.tcTrim){String.prototype.tcTrim=function(){return this.replace(/^\s+|\s+$/g,"")}}if(!Number.prototype.tcTrim){Number.prototype.tcTrim=function(){return this+0}}

var checkedPageID = "booking", checkedLOB = "generic", checkedHolidayType = "generic", checkedDestinationAirportSelected = checkedAccomCode = checkedDestination = checkedDeptDate = checkedErrorCode = checkedSessID = checkedAppServer = checkedBookingRef = checkedBookingValue = checkedAccomResort = checkedTourOperator = checkedAccomName = checkedDepartureAirportSelected = checkedPaxTotal = checkedPaxAdult = checkedPaxChild = checkedDuration = checkedPaymentOption = checkedBoardBasis = checkedRooms = checkedDepositValue = checkedDepositSelection ="";
var missingParams = "";
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
window._gaq.push(['CATTGATC._setAccount', 'UA-33086843-1']);
window._gaq.push(['CATTGATC._setDomainName', 'urlaub.de']);
window._gaq.push(['_gat._anonymizeIp']);
window._gaq.push(['CATTGATC._setAllowLinker', true]);
window._gaq.push(['CATTGATC._setCustomVar',  1, 'Buyer',  checkedLOB+'|'+checkedHolidayType, 3]);
window._gaq.push(['CATTGATC._trackPageview', fullVP]);

window._gaq.push(['CATTGATC._addTrans', checkedBookingRef,'',checkedBookingValue,'','','','','']);
window._gaq.push(['CATTGATC._addItem', checkedBookingRef,
    checkedDestination+'|'+checkedDestinationAirportSelected+'|'+checkedAccomResort+'|'+checkedTourOperator, // SKU
    checkedAccomName+'|'+checkedAccomCode+'|'+checkedDepartureAirportSelected+'|'+checkedPaxTotal+'|'+checkedPaxAdult+'|'+checkedPaxChild+'|'+checkedDeptDate+'|'+checkedDuration+'|'+checkedPaymentOption, // ProductName
    checkedLOB+'|'+checkedHolidayType,   // Category
    checkedBookingValue,  // UnitPrice
    '1'       // quantity
]);

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



/*
*/

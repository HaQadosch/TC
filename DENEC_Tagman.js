/*
 *
 * Kampyle
 *
 */
(try{
    var k_url = '//assets.kampyle.com/clients/4110186/d/k_config.js';
                var k_head = document.getElementsByTagName('head')[0],
k_script = document.createElement('script');
k_script.setAttribute('src', k_url);
k_script.setAttribute('type', 'text/javascript');
k_script.setAttribute('charset', 'utf-8');
k_head.insertBefore(k_script, k_head.firstChild);
} catch(e){if (typeof console != "undefined") console.log("DE NEC Kampyle: "+e)}
)

/*
 *
 * Generic GATC
 *
 */

    var checkedErrorCode = checkedSessID = checkedAppServer = "";
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
var inBound = new RegExp("^#$|^javascript:|"+document.location.host.match(/\w+\.\w+$|\w+\.co\.uk$/gi)[0].replace('.', '\\.')+"|vidado\\.com|neckermann-reisen\\.de|google-analytics\\.com|mailto:", "gi")
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
    if (document.referrer == "") {
        var prevXBCAttr = "";
        try {prevXBCAttr = (/xbcattr=([^;]*)/gi).exec(document.cookie)[1]} catch (e){};
        if(prevXBCAttr.indexOf('view') != -1 ){
            window._gaq.push(['CATTGATC._trackEvent', 'eReach',  'InfluencedVisits', '', 1, true]);
            console.log("InfluencedVisits");
        }
    }
})();

// Outbound links
try {
    $("a[href*='outboundcall']").click(function () {
        var href = $(this).attr('href');
        href = href.substring(href.indexOf('outboundcall='), href.length);
        href = href.substring(0, href.indexOf('&')).replace('outboundcall=', '');
        window._gaq.push(['CATTGATC._trackEvent', 'Outbound Campaign Click', href, window.location.href, 1, true]);
    });
} catch (e){if (typeof console != "undefined") console.log("DE NEC Outbound Links: " + e)}


/*
 *
 * LP Code
 *
 */
(try{
    var utm_medium = ""; try { utm_medium=(/utm_medium=([^&]+)&?/gi).exec(document.location.search)[1] } catch (e) { utm_medium = ""; }
    var utm_source = ""; try { utm_source=(/utm_source=([^&]+)&?/gi).exec(document.location.search)[1] } catch (e) { utm_source = ""; }
    var utm_campaign = ''; try { utm_campaign=(/utm_campaign=([^&]+)&?/gi).exec(document.location.search)[1] } catch (e) { utm_campaign = ''; }
    var utm_term = ""; try { utm_term=(/utm_term=([^&]+)&?/gi).exec(document.location.search)[1] } catch (e) { utm_term = ""; }
    var gclid = false; try { gclid=(/gclid=/gi).test(document.location.search); if (gclid) utm_medium="gclid" } catch (e) { gclid = false; }

    var today = inAMonth = new Date(); inAMonth.setDate(today.getDate()+30);
    var prevXBCAttr = ""; try {prevXBCAttr = (/xbcattr=([^;]*)/gi).exec(document.cookie)[1]} catch (e){}
    document.cookie="xbcattr="+prevXBCAttr +"|"+ utm_medium+"; expires="+inAMonth.toUTCString()+"; path=/; domain=.neckermann-reisen.de;"

    if (utm_medium.match(/aff/gi)) {
        if (typeof console != 'undefined') console.log ('Attrribution: affiliates');
        var today = inAMonth = new Date(); inAMonth.setDate(today.getDate()+30); document.cookie="xbAFFPublisherID="+utm_term+"; expires="+inAMonth.toUTCString()+"; path=/; domain=.neckermann-reisen.de;"
    } else if (utm_medium.match(/met|part/gi)) {
        if (typeof console != 'undefined') console.log ('Attrribution: partners');
        var today = inAMonth = new Date(); inAMonth.setDate(today.getDate()+30); document.cookie="xbAFFPublisherID="+utm_term+"; expires="+inAMonth.toUTCString()+"; path=/; domain=.neckermann-reisen.de;"
    } else if (utm_medium.match(/TO/gi)) { // Display_Nah|Display_indi
        if (typeof console != 'undefined') console.log ('Attrribution: display MindShare');
    } else if (utm_medium.match(/ban|criteo|dis/gi)) {
        if (typeof console != 'undefined') console.log ('Attrribution: display');
        var today = inAMonth = new Date(); inAMonth.setDate(today.getDate()+30); document.cookie="xbLastBanSource="+utm_source+"; expires="+inAMonth.toUTCString()+"; path=/; domain=.neckermann-reisen.de;"
    } else if (utm_medium.match(/email|newsletter/gi)) {
        if (typeof console != 'undefined') console.log ('Attrribution: eCRM');
    } else if (utm_medium.match(/cp|ppc|gclid/gi)) {
        if (typeof console != 'undefined') console.log ('Attrribution: PPC');
    } else if (utm_medium.match(/soc|twitter/gi)) {
        if (typeof console != 'undefined') console.log ('Attrribution: social media');
    } else {
        if (typeof console != "undefined") console.log ("Attrribution: default");
    }
} catch (e){if (typeof console != 'undefined') console.log('DE NEC LP Code: '+e)})


/*
 *
 * LP Mindshare
 *
 */
try {
    document.write(decodeURI("%3Ciframe%20src='http://gmads.net/pct?gmtevt=8a8386883a8e5222013acff0d86c3fda&gmtcl=1&gmtr="+Date.parse(new Date())+"'%20style='overflow:hidden'%20frameborder='0'%20width='0'%20height='0'%3E%20%3C/iframe%3E"))
} catch (e){if (typeof console != "undefined") console.log("DE NEC HP MindShare: "+e)}

/*
 *
 * LP Criteo
 *
 */
try{
    // Including criteo script
    (function() { var ga = document.createElement('script');ga.type = 'text/javascript';ga.async = true;ga.src = '//static.criteo.net/js/ld/ld.js';var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga, s); })();
    var accountId = 7517; // package booking
    if ((/hotel/i).test(document.location.pathname)){
        accountId = 8113; // hotel booking
    }
    window.criteo_q = window.criteo_q || [];
    window.criteo_q.push(
        { event: "setAccount", account: accountId },
        { event: "setSiteType", type: "d" },
        { event: "viewHome", requiresDOM: "yes"}
    );
} catch (e){if (typeof console != "undefined") console.log("DE NEC HP Criteo Tag 1: "+e)}

/*
 *
 * LP NetSociety
 *
 */
try{
    var depDateYYYYMMDD = ""; try {var depDateDDMMMYYYY = (/(\d\d)\/(\d\d)\/(\d\d\d\d)/).exec(window.CATTParams.DeptDate); depDateYYYYMMDD = depDateDDMMMYYYY[3]+depDateDDMMMYYYY[2]+depDateDDMMMYYYY[1];} catch (e){}
    var todayYYYYMMDD = ""; try{var todayMS = new Date(); todayYYYYMMDD = todayMS.getFullYear()+""+(todayMS.getMonth()+1)+""+todayMS.getDate();} catch (e){}
    var bookingValue="1";if(typeof window.CATTParams!="undefined"){if(typeof window.CATTParams.BookingValue!="undefined"){if(window.CATTParams.BookingValue!=""&&window.CATTParams.BookingValue!="0"){bookingValue=window.CATTParams.BookingValue}}}
    var dataTracked = 'destination='+window.CATTParams.Destination+';departureairport='+window.CATTParams.DepartureAirportSelected+';departuredate='+depDateYYYYMMDD+';duration='+(parseInt(window.CATTParams.Duration)+"").replace("NaN", "0")+';bookingdate='+todayYYYYMMDD+';resort='+(window.CATTParams.ResortSearched || window.CATTParams.AccomResort)+';children='+window.CATTParams.PaxChild+';accomCode='+window.CATTParams.AccomCode;
    if ((/neckermann-reisen\.de/gi).test(document.location.host)){/* All pages within the Neckermann-Reisen.de domain. */
        document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/994280421/?value="+bookingValue+"&amp;label=75sVCMOc9gMQ5YeO2gM&amp;guid=ON&amp;script=0&amp;data=")+escape(dataTracked)+decodeURI("'/%3E"))
        if (document.location.pathname == "/"){/* Homepage of Neckermann-Reisen.de. */
            document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/997899920/?value="+bookingValue+"&amp;label=iT2XCLig8QMQkP3q2wM&amp;guid=ON&amp;script=0&amp;data=")+escape(dataTracked)+decodeURI("'/%3E"))
        } else if (!(/accom|paxpay|booking/gi).test(window.CATTParams.PageID)){/* Specific Destination pages.*/
            if ((/Mallorca/gi).test(window.CATTParams.ResortSearched)){
                document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/997899920/?value="+bookingValue+"&amp;label=-E5ACLDd8QMQkP3q2wM&amp;guid=ON&amp;script=0&amp;data=")+escape(dataTracked)+decodeURI("'/%3E"))
                /* Accommodation Protur Monte Safari Mallorca. */
                if ((/14207/gi).test(window.CATTParams.AccomCode) || (/hotels\/14207/gi).test(document.location.pathname)){
                    document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/997899920/?value="+bookingValue+"&amp;label=AvsJCICf8gMQkP3q2wM&amp;guid=ON&amp;script=0&amp;data=")+escape(dataTracked)+decodeURI("'/%3E"))
                }
            } else if ((/Antalya/gi).test(window.CATTParams.ResortSearched)){
                document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/997899920/?value="+bookingValue+"&amp;label=Pn8KCJCd8gMQkP3q2wM&amp;guid=ON&amp;script=0&amp;data=")+escape(dataTracked)+decodeURI("'/%3E"))
                /* Accommodation Aspendos Beach Antalya. */
                if ((/47214/gi).test(window.CATTParams.AccomCode) || (/hotels\/47214/gi).test(document.location.pathname)){
                    document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/997899920/?value="+bookingValue+"&amp;label=UW23CPif8gMQkP3q2wM&amp;guid=ON&amp;script=0&amp;data=")+escape(dataTracked)+decodeURI("'/%3E"))
                }
            } else if ((/Gran\+Canaria/gi).test(window.CATTParams.ResortSearched)){
                document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/997899920/?value="+bookingValue+"&amp;label=geF2CIie8gMQkP3q2wM&amp;guid=ON&amp;script=0&amp;data=")+escape(dataTracked)+decodeURI("'/%3E"))
                /* Accommodation Lopesan Costa Meloneras Gran Canaria. */
                if ((/22038/gi).test(window.CATTParams.AccomCode) || (/hotels\/22038/gi).test(document.location.pathname)){
                    document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/997899920/?value="+bookingValue+"&amp;label=Um8JCOih8gMQkP3q2wM&amp;guid=ON&amp;script=0&amp;data=")+escape(dataTracked)+decodeURI("'/%3E"))
                }
            }
        } else if ((/paxpay/gi).test(window.CATTParams.PageID)){ /* Booking process page.*/
            document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/997899920/?value="+bookingValue+"&amp;label=8_TbCJCl8QMQkP3q2wM&amp;guid=ON&amp;script=0&amp;data=")+escape(dataTracked)+decodeURI("'/%3E"))
        } else if ((/booking/gi).test(window.CATTParams.PageID)){/* All booking confirmation pages.*/
            document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='https://www.googleadservices.com/pagead/conversion/994280421/?value="+bookingValue+"&amp;label=c1-RCLud9gMQ5YeO2gM&amp;guid=ON&amp;script=0'/%3E"))
            document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/conversion/997899920/?value="+bookingValue+"&amp;label=NmfoCLCo8gMQkP3q2wM&amp;guid=ON&amp;script=0'/%3E"))
        }

        if ((/Pauschalreisen/gi).test(window.CATTParams.HolidayType)){/* All Pauschalreisen pages.*/
            document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/997899920/?value="+bookingValue+"&amp;label=ZxGQCLCh8QMQkP3q2wM&amp;guid=ON&amp;script=0&amp;data=")+escape(dataTracked)+decodeURI("'/%3E"))
        } else if ((/lastminute/gi).test(window.CATTParams.HolidayType)){ /* All Last minute pages. */
            document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/997899920/?value="+bookingValue+"&amp;label=Ep_COCi8gMQkP3q2wM&amp;guid=ON&amp;script=0&amp;data=")+escape(dataTracked)+decodeURI("'/%3E"))
        }

        if ((/topziele/gi).test(document.location.host)){/* Topziele Page. */
            document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/997899920/?value="+bookingValue+"&amp;label=ErVUCKii8QMQkP3q2wM&amp;guid=ON&amp;script=0&amp;data=")+escape(dataTracked)+decodeURI("'/%3E"))
        }
    }
} catch (e){if (typeof console != "undefined") console.log("DE NEC NetSociety: "+e)}

/*
 *
 * LP HP CrazyEgg
 *
 */
try{
    setTimeout(
        function(){
            var a=document.createElement("script");
            var b=document.getElementsByTagName("script")[0];
            a.src=document.location.protocol+"//dnn506yrbagrg.cloudfront.net/pages/scripts/0012/5391.js?"+Math.floor(new Date().getTime()/3600000);
            a.async=true;
            a.type="text/javascript";
            b.parentNode.insertBefore(a,b)
        },
        1);
} catch (e){if (typeof console != "undefined") console.log("NEC DE HP CrazyEgg: "+e)}

/*
 *
 * LP NEC CrazyEgg
 *
 */
try{
    setTimeout(
        function(){
            var c=document.createElement("script");
            var d=document.getElementsByTagName('script')[0];
            c.src=document.location.protocol+"//dnn506yrbagrg.cloudfront.net/pages/scripts/0013/9168.js?"+Math.floor(new Date().getTime()/3600000);
            c.async=true;
            c.type="text/javascript";
            d.parentNode.insertBefore(c,d)
        },
        1
    );
} catch (e){if (typeof console != "undefined") console.log("DE NEC CrazyEgg: "+e)}


/*
 *
 * LP SocioMantic
 *
 */
try {
    (function(){
        var s   = document.createElement('script');
        var x   = document.getElementsByTagName('script')[0];
        s.type  = 'text/javascript';
        s.async = true;
        s.src   = ('https:'==document.location.protocol?'https://':'http://')
                + 'eu-sonar.sociomantic.com/js/2010-07-01/adpan/neckermann-reisen-de';
        x.parentNode.insertBefore( s, x );
    })();
} catch (e){if (typeof console != "undefined") console.log("DE NEC HP SocioMantic: "+e)}

/*
 *
 * LP UATC
 *
 */
try{
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-29069538-4');
  ga('send', 'pageview');
} catch(e){if (typeof console != "undefined") console.log("DE NEC UATC: "+e)}

/*
 *
 * LP Metrigo CUST2
 *
 */
try{
    // Queue for API calls
    window._mstack = window._mstack || []
    window._mstack.push(function() {  DELIVERY.DataLogger.logConversion({
            shop_id: 1527,
            type: 'cust2'
        });
    });

    (function() {
        var s  = document.createElement('script');
        s.async = true;
        var h = (("https:" == document.location.protocol) ? "https://" : "http://");
        s.src = h + 'rtb.metrigo.com/delivery/sync_and_log.js'
        var c = document.getElementsByTagName('script')[0];
        c.parentNode.insertBefore(s, c);
    })();
} catch (e){if (typeof console != "undefined") console.log("DE NEC Metrigo CUST2: " + e)}

// attribution LP
try{
    var utm_medium = ""; try { utm_medium=(/utm_medium=(\w+)&?/gi).exec(document.location.search)[1] } catch (e) { utm_medium = ""; }
    var utm_source = ""; try { utm_source=(/utm_source=(\w+)&?/gi).exec(document.location.search)[1] } catch (e) { utm_source = ""; }
    var utm_campaign = ''; try { utm_campaign=(/utm_campaign=(\w+)&?/gi).exec(document.location.search)[1] } catch (e) { utm_campaign = ''; } // get the publisher ID for Affilinet
    var gclid = false; try { gclid=(/gclid=/gi).test(document.location.search); if (gclid) utm_medium="gclid" } catch (e) { gclid = false; }

    var today = inAMonth = new Date(); inAMonth.setDate(today.getDate()+30);
    var prevXBCAttr = ""; try {prevXBCAttr = (/xbcattr=([^;]*)/gi).exec(document.cookie)[1]} catch (e){}
    document.cookie="xbcattr="+prevXBCAttr +"|"+ utm_medium+"; expires="+inAMonth.toUTCString()+"; path=/; domain=.neckermann-urlaubswelt.de;"

    if (utm_medium.match(/aff/gi)) {
        if (typeof console != "undefined") console.log ("Attrribution: affiliates");
        var today = inAMonth = new Date(); inAMonth.setDate(today.getDate()+30); document.cookie="xbAFFPublisherID="+utm_campaign+"; expires="+inAMonth.toUTCString()+"; path=/; domain=.neckermann-urlaubswelt.de;"
        window._gaq.push(['XB._trackEvent', 'Affilinet Attribution',  tmPageId+' DE ULBW LP Code', 'pubID='+utm_campaign+'|AFF|'+location.href, 1, true]);
    } else if (utm_medium.match(/met|part/gi)) {
        if (typeof console != "undefined") console.log ("Attrribution: partners");
        var today = inAMonth = new Date(); inAMonth.setDate(today.getDate()+30); document.cookie="xbAFFPublisherID="+utm_campaign+"; expires="+inAMonth.toUTCString()+"; path=/; domain=.neckermann-urlaubswelt.de;"
        window._gaq.push(['XB._trackEvent', 'Affilinet Attribution',  tmPageId+' DE ULBW LP Code', 'pubID='+utm_campaign+'|MET|'+location.href, 1, true]);
    } else if (utm_medium.match(/ban|criteo|dis/gi)) {
        if (typeof console != "undefined") console.log ("Attrribution: display");
    } else if (utm_medium.match(/email|newsletter/gi)) {
        if (typeof console != "undefined") console.log ("Attrribution: eCRM");
    } else if (utm_medium.match(/cp|ppc/gi) || gclid) {
        if (typeof console != "undefined") console.log ("Attrribution: PPC");
    } else if (utm_medium.match(/soc|twitter/gi)) {
        if (typeof console != "undefined") console.log ("Attrribution: social media");
    } else {
        if (typeof console != "undefined") console.log ("Attrribution: default");
    }
} catch (e){if (typeof console != "undefined") console.log("DE ULBW LP Code: "+e)}



//<script id='gtm_blah'>
(function gtm_blahDL(jQ, dl, cdl, cdpm){
    'use strict';
    if (jQ && dl && cdl && cdpm) try {
        cdl.DL_blah = {
            var1 : cdpm.val1 || '',
            var2 : cdpm.val2 || ''
        };
    } catch(e) {
        cdl.error('GTM blah: '+ e);
    } finally {
        dl.push({'event':'blahDL'});
    }
    return jQ && dl && cdl && cdpm && cdl.DL_blah;
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams));

(function gtm_blah(jQ, dl, cdl, bhdl){
    'use strict';
    if (jQ && dl && cdl && bhdl) try {
        jQ.getScript && jQ.getScript('url.js', function gtm_blahScript(){
            try {
                window._blah && (window._blah.var1 = true);
            } catch(ee) {
                cdl.error('GTM blahScript: '+ ee);
            }
        });
    } catch(e) {
        cdl.error('GTM Blah:'+ e);
    } finally {
        dl.push({'event':'Blah'});
    }
    return jQ && dl && cdl && bhdl;
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_blah));
//</script>


//<script id='gtm_mediascale'>
(function gtm_mediascale(jQ, cdl, cdpm, dl){
    'use strict';
    if (jQ && cdl && cdpm && dl && cdl.twdc(/test=mediascale/)) try {
        var options = {
            'depairport' : cdpm.departureairportsearched || '',
            'destairport' : cdpm.destinationairportsearched || '',
            'depdate' : cdpm.deptdate.replace(/\d\d(\d\d)-(\d\d)-\d\d/, '$2$1') || '',
            'comp' : cdpm.compartment || ''
        };
        var dlMediaScale = {
           'DL_mediascale' : cdl.assign({
               'start' : new Date().getTime(),
               'img' : {
                   'src' : cdl.transpose && cdl.transpose('https://ad3.adfarm1.adition.com/tagging?network=250&type=src&tag[condor.page]=search&tag[condor.data]={depairport},{destairport},{depdate},{comp}&source=gtm', options) || ''
               }
           }, options)
       };
       cdl.assign && cdl.assign(cdl, dlMediaScale);
       cdl.assign && dl.push && jQ().append &&  jQ.when && jQ.when(jQ('body').append(jQ('<img>', {
           src : cdl.DL_mediascale && cdl.DL_mediascale.img && cdl.DL_mediascale.img.src || '',
           style : 'border-style:none;',
           alt : '',
           id : 'gtm_mediaScalePixel',
           width : 1,
           height : 1
       }))).done(function gtm_mediaScaleDone() {dl.push(cdl.assign({}, {'event': 'mediascale'}, dlMediaScale))});
    } catch(e) {
        cdl.error && cdl.error('GTM mediascale : '+e);
    }
    return jQ && cdl && cdpm;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams, window.dataLayer));
//</script>

/*
insertJS : function insertJS(e,t){return e&&t&&function(e,t,r,n,a,s){e[n]&&(e[n]["DL_"+a]={start:(new Date()).getTime(),script:s});var c=t.getElementsByTagName(r)[0],i=t.createElement(r);return i.async=!0,i.src=s,c.parentNode.insertBefore(i,c),e[n]}(w,d,"script","CATTDL",e,t)},
transpose : function transpose(s, d){for (var p in d) s = s.replace(new RegExp('{'+p+'}', 'g'), d[p]);return s;}
assign  : Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(void 0===e||null===e)throw new TypeError("Cannot convert first argument to object");for(var r=Object(e),t=1;t<arguments.length;t++){var n=arguments[t];if(void 0!==n&&null!==n){n=Object(n);for(var o=Object.keys(Object(n)),a=0,c=o.length;c>a;a++){var i=o[a],b=Object.getOwnPropertyDescriptor(n,i);void 0!==b&&b.enumerable&&(r[i]=n[i])}}}return r}}),
*/



//<script id='gtm_mediascale'>
(function gtm_mediascale(jQ, cdl, cdpm, dl){
    'use strict';
    if (jQ && cdl && cdpm && dl && cdl.twdc(/test=mediascale/)) try {
        var options = {
            'depairport' : cdpm.departureairportsearched || '',
            'destairport' : cdpm.destinationairportsearched || '',
            'depdate' : cdpm.deptdate.replace(/\d\d(\d\d)-(\d\d)-\d\d/, '$2$1') || '',
            'comp' : cdpm.compartment || ''
        };
        var dlMediaScale = {
           'DL_mediascale' : cdl.assign({
               'start' : new Date().getTime(),
               'img' : {
                   'src' : cdl.transpose && cdl.transpose('https://ad3.adfarm1.adition.com/tagging?network=250&type=src&tag[condor.page]=search&tag[condor.data]={depairport},{destairport},{depdate},{comp}&source=gtm', options) || ''
               }
           }, options)
       };
       cdl.assign && cdl.assign(cdl, dlMediaScale);
       cdl.assign && dl.push && jQ().append &&  jQ.when && jQ.when(jQ('body').append(jQ('<img>', {
           src : cdl.DL_mediascale && cdl.DL_mediascale.img && cdl.DL_mediascale.img.src || '',
           style : 'border-style:none;',
           alt : '',
           id : 'gtm_mediaScalePixel',
           width : 1,
           height : 1
       }))).done(function gtm_mediaScaleDone() {dl.push(cdl.assign({}, {'event': 'mediascale'}, dlMediaScale))});
    } catch(e) {
        cdl.error && cdl.error('GTM mediascale : '+e);
    }
    return jQ && cdl && cdpm;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams, window.dataLayer));
//</script>

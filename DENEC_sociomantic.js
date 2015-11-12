/*
 * Generic
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

//<script id='gtm_sociomantic'>
(function gtm_sociomanticDL(jQ, dl, cdl, cdpm){
    'use strict';
    if (jQ && dl && cdl && cdpm) try {
        cdl.DL_sociomantic = {
            script : {
                src : 'https://eu-sonar.sociomantic.com/js/2010-07-01/adpan/neckermann-reisen-de',
                status: 'not fired'
            }
        };
    } catch(e) {
        cdl.error('GTM sociomantic: '+ e);
    } finally {
        dl.push({'event':'sociomanticDL'});
    }
    return jQ && dl && cdl && cdpm && cdl.DL_sociomantic;
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams));

(function gtm_sociomantic(jQ, dl, cdl, bhdl){
    'use strict';
    if (jQ && dl && cdl && bhdl) try {
        jQ.getScript && jQ.getScript(bhdl.script && bhdl.script.src || '', function gtm_sociomanticScript(){
            try {
                bhdl.script && (bhdl.script.status = 'fired');
            } catch(ee) {
                cdl.error('GTM sociomanticScript: '+ ee);
            }
        });
    } catch(e) {
        cdl.error('GTM sociomantic:'+ e);
    } finally {
        dl.push({'event':'sociomantic'});
    }
    return jQ && dl && cdl && bhdl;
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_sociomantic));
//</script>


/*
 * SRP
 */
try {
    var dateSplit = window.CATTParams.DeptDate.split('/'); var dateValid = (new Date(dateSplit[2], dateSplit[1]-1, dateSplit[0]-1));


    window.product = {
        category : [ window.CATTParams.LOB, window.CATTParams.Destination, window.region, dateSplit[2], dateSplit[1]],
        date: ''+(dateValid.getTime()/1000)
    };
    (function(){
        var s   = document.createElement('script');
        var x   = document.getElementsByTagName('script')[0];
        s.type  = 'text/javascript';
        s.async = true;
        s.src   = ('https:'==document.location.protocol?'https://':'http://')
                + 'eu-sonar.sociomantic.com/js/2010-07-01/adpan/neckermann-reisen-de';
        x.parentNode.insertBefore( s, x );
    })();
} catch (e){if (typeof console != "undefined") console.log("DE NEC SRP Accom Category SocioMantic: "+e)}

//<script id='gtm_sociomantic'>
(function gtm_sociomanticDL(jQ, dl, cdl, cdpm){
    'use strict';
    if (jQ && dl && cdl && cdpm) try {
        var ymd = (cdpm.deptdate || ' / / ').split('/');
        cdl.DL_sociomantic = {
            product : {
               category : [cdpm.lob || '', cdpm.destination || '', window.region || cdpm.resortsearched || cdpm.srchregion || '', ymd[2], ymd[1]],
               date : ''+(new Date((cdpm.deptdate || '').replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3 $2 $1')).getTime()/1000)
            },
            script : {
                src : 'https://eu-sonar.sociomantic.com/js/2010-07-01/adpan/neckermann-reisen-de',
                status: 'not fired'
            }
        };
    } catch(e) {
        cdl.error('GTM sociomantic: '+ e);
    } finally {
        dl.push({'event':'sociomanticDL'});
    }
    return jQ && dl && cdl && cdpm && cdl.DL_sociomantic;
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams));

(function gtm_sociomantic(jQ, dl, cdl, bhdl){
    'use strict';
    if (jQ && dl && cdl && bhdl) try {
        window.product = bhdl.product;
        jQ.getScript && jQ.getScript(bhdl.script && bhdl.script.src || '', function gtm_sociomanticScript(){
            try {
                bhdl.script && (bhdl.script.status = 'fired');
            } catch(ee) {
                cdl.error('GTM sociomanticScript: '+ ee);
            }
        });
    } catch(e) {
        cdl.error('GTM sociomantic:'+ e);
    } finally {
        dl.push({'event':'sociomantic'});
    }
    return jQ && dl && cdl && bhdl;
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_sociomantic));
//</script>


/*
 * Accom
 */
try {
    var departureAirport = "";
    if (window.hibItems !== undefined && window.hibItems[0] !== undefined && window.hibItems[0].departureAirport !== undefined){
        departureAirport = window.hibItems[0].departureAirport;
    } else {
        departureAirport = $('#ID0>.colA>div>.regionInfoLink').text().replace(/\s*$/i, '') || "";
    }

    var dateSplit = window.CATTParams.DeptDate.split('/') || false;
    var priceAmount = parseInt($('#ID0>.colF>.dealPrice').text().replace(/\./gi, '')) || false;
    var imagePreview = $('#previewPane>a>img').url || false;
    var lob = window.CATTParams.LOB || false;
    var destination = window.CATTParams.Destination || false;
    var accomResort = window.CATTParams.AccomResort.replace(/\+/gi, ' ') || false;

    var firstOptionDate;
        firstOptionDate = (/.*(\d\d)\.(\d\d).*/).exec($('#ID0>div.colB').text());

    var dateValid;
    if (firstOptionDate){
        var maybeNextYear = dateSplit[2];
        if (parseInt(dateSplit[1]) > parseInt(firstOptionDate[2])+1) maybeNextYear++;
        dateValid = (new Date(maybeNextYear, firstOptionDate[2]-1, firstOptionDate[1]-1));
    }else{
        dateValid = (new Date(dateSplit[2], dateSplit[1]-1, dateSplit[0]-1));
    }

    var duration = parseInt($('#ID0>.colC').text()) || "";

    if (dateSplit && priceAmount && imagePreview && lob && destination && accomResort){
        window.product = {
            identifier: window.CATTParams.AccomCode+'_'+window.CATTParams.DeptDate+'_'+window.CATTParams.RetDate+'_'+duration+'_'+departureAirport,
            fn: window.CATTParams.AccomName.replace(/\+/g, ' '),
            category : [ lob, destination, accomResort, dateSplit[2], dateSplit[1]],
            price: priceAmount,
            amount: priceAmount,
            currency: 'EUR',
            date: ''+(dateValid.getTime()/1000),
            valid: ''+(dateValid.getTime()/1000),
            description: "Finde jetzt deine Traumreise nach " + window.CATTParams.AccomResort.replace(/\+/gi, ' ') +" bei neckermann-reisen.de" ,
            url: '',
            photo: imagePreview,
            brand: destination+' | '+accomResort+' | ab '+($('#ID0>.colA>div>.regionInfoLink').text().replace(/\s*$/i, '').replace(/\s\(\w+\)/i, ''))+' | '+duration+unescape('%20N%E4chte')
        };
    }

    (function(){
        var s   = document.createElement('script');
        var x   = document.getElementsByTagName('script')[0];
        s.type  = 'text/javascript';
        s.async = true;
        s.src   = ('https:'==document.location.protocol?'https://':'http://')
                + 'eu-sonar.sociomantic.com/js/2010-07-01/adpan/neckermann-reisen-de';
        x.parentNode.insertBefore( s, x );
    })();
} catch (e){if (typeof console != "undefined") console.log("DE NEC Accom Product SocioMantic: "+e)}

//<script id='gtm_sociomantic'>
(function gtm_sociomanticDL(jQ, dl, cdl, cdpm){
    'use strict';
    if (jQ && dl && cdl && cdpm) try {
        var ymd = (cdpm.deptdate || ' / / ').split('/');
        var cleanedResort = (cdpm.accomresort || '').replace(/\+/gi, ' ');
        cdl.DL_sociomantic = {
            product : {
                identifier: (cdpm.accomcode || '')+'_'+(cdpm.deptdate || '')+'_'+(cdpm.retdate || '')+'_'+(cdpm.duration || '')+'_'+(cdpm.departureairportselected || ''),
                fn: (cdpm.accomname || '').replace(/\+/g, ' '),
                price: cdpm.fromprice || '',
                amount: cdpm.fromprice || '',
                currency: 'EUR',
                description: "Finde jetzt deine Traumreise nach " + cleanedResort +" bei neckermann-reisen.de" ,
                url: '',
                photo: jQ('img#mainImage').attr('src') || '',
                brand: (cdpm.destination || '')+' | '+cleanedResort+' | ab '+(jQ('#ID0>.colA>div>.regionInfoLink').text().replace(/\s*$/i, '').replace(/\s\(\w+\)/i, ''))+' | '+(/a|e/i.test(cdpm.duration || '')?cdpm.duration:(cdpm.duration+window.unescape('%20N%E4chte'))),
                category : [cdpm.lob || '', cdpm.destination || '', cleanedResort, ymd[2], ymd[1]],
                date : ''+(new Date((cdpm.deptdate || '').replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3 $2 $1')).getTime()/1000),
                valid : ''+(new Date((cdpm.deptdate || '').replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3 $2 $1')).getTime()/1000)
            },
            script : {
                src : 'https://eu-sonar.sociomantic.com/js/2010-07-01/adpan/neckermann-reisen-de',
                status: 'not fired'
            }
        };
    } catch(e) {
        cdl.error('GTM sociomantic: '+ e);
    } finally {
        dl.push({'event':'sociomanticDL'});
    }
    return jQ && dl && cdl && cdpm && cdl.DL_sociomantic;
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams));

(function gtm_sociomantic(jQ, dl, cdl, bhdl){
    'use strict';
    if (jQ && dl && cdl && bhdl) try {
        window.product = bhdl.product;
        jQ.getScript && jQ.getScript(bhdl.script && bhdl.script.src || '', function gtm_sociomanticScript(){
            try {
                bhdl.script && (bhdl.script.status = 'fired');
            } catch(ee) {
                cdl.error('GTM sociomanticScript: '+ ee);
            }
        });
    } catch(e) {
        cdl.error('GTM sociomantic:'+ e);
    } finally {
        dl.push({'event':'sociomantic'});
    }
    return jQ && dl && cdl && bhdl;
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_sociomantic));
//</script>

/*
 * Payment
 */

try {
    var duration = parseInt(window.CATTParams.Duration) || "";

    window.basket = {
        products: [{
            identifier: window.CATTParams.AccomCode+'_'+window.CATTParams.DeptDate+'_'+window.CATTParams.RetDate+'_'+duration+'_'+window.CATTParams.DepartureAirportSelected,
            amount: parseInt(window.CATTParams.BookingValue),
            currency: 'EUR',
            quantity: 1
        }]
    };

    (function(){
        var s   = document.createElement('script');
        var x   = document.getElementsByTagName('script')[0];
        s.type  = 'text/javascript';
        s.async = true;
        s.src   = ('https:'==document.location.protocol?'https://':'http://')
                + 'eu-sonar.sociomantic.com/js/2010-07-01/adpan/neckermann-reisen-de';
        x.parentNode.insertBefore( s, x );
    })();
} catch (e){if (typeof console != "undefined") console.log("DE NEC Basket SocioMantic: "+e)}

//<script id='gtm_sociomantic'>
(function gtm_sociomanticDL(jQ, dl, cdl, cdpm){
    'use strict';
    if (jQ && dl && cdl && cdpm) try {
        cdl.DL_sociomantic = {
            basket : {
                product : [{
                    identifier: (cdpm.accomcode || '')+'_'+(cdpm.deptdate || '')+'_'+(cdpm.retdate || '')+'_'+(cdpm.duration || '')+'_'+(cdpm.departureairportselected || ''),
                    amount: cdpm.bookingvalue || '',
                    currency: 'EUR',
                    quantity : 1
                }]
            },
            script : {
                src : 'https://eu-sonar.sociomantic.com/js/2010-07-01/adpan/neckermann-reisen-de',
                status: 'not fired'
            }
        };
    } catch(e) {
        cdl.error('GTM sociomantic: '+ e);
    } finally {
        dl.push({'event':'sociomanticDL'});
    }
    return jQ && dl && cdl && cdpm && cdl.DL_sociomantic;
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams));

(function gtm_sociomantic(jQ, dl, cdl, bhdl){
    'use strict';
    if (jQ && dl && cdl && bhdl) try {
        window.basket = bhdl.basket;
        jQ.getScript && jQ.getScript(bhdl.script && bhdl.script.src || '', function gtm_sociomanticScript(){
            try {
                bhdl.script && (bhdl.script.status = 'fired');
            } catch(ee) {
                cdl.error('GTM sociomanticScript: '+ ee);
            }
        });
    } catch(e) {
        cdl.error('GTM sociomantic:'+ e);
    } finally {
        dl.push({'event':'sociomantic'});
    }
    return jQ && dl && cdl && bhdl;
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_sociomantic));
//</script>

/*
 * Conf
 */
 try {
     var duration = parseInt(window.CATTParams.Duration) || "";

     window.basket = {
         products: [{
             identifier: window.CATTParams.AccomCode+'_'+window.CATTParams.DeptDate+'_'+window.CATTParams.RetDate+'_'+duration+'_'+window.CATTParams.DepartureAirportSelected,
             amount: parseInt(window.CATTParams.BookingValue),
             currency: 'EUR',
             quantity: 1
         }],
         transaction : window.CATTParams.AccomCode,
            amount: parseInt(window.CATTParams.BookingValue),
         currency: 'EUR'
     };

     (function(){
         var s   = document.createElement('script');
         var x   = document.getElementsByTagName('script')[0];
         s.type  = 'text/javascript';
         s.async = true;
         s.src   = ('https:'==document.location.protocol?'https://':'http://')
                 + 'eu-sonar.sociomantic.com/js/2010-07-01/adpan/neckermann-reisen-de';
         x.parentNode.insertBefore( s, x );
     })();
 } catch (e){if (typeof console != "undefined") console.log("DE NEC Booking SocioMantic: "+e)}
 try {
     if (/utmcsr=sociomantic/i.test(document.cookie)){
         var sale = {confirmed : true};
         if ("object"===typeof sociomantic&&"object"===typeof sociomantic.sonar&&"object"===typeof sociomantic.sonar.adv&&"object"===typeof sociomantic.sonar.adv["neckermann-reisen-de"]&&"function"===typeof sociomantic.sonar.adv["neckermann-reisen-de"].getConfirmed){
             sociomantic.sonar.adv["neckermann-reisen-de"].getConfirmed();
         }
     }
 } catch (e){if (typeof console != "undefined") console.log("DE NEC Booking SocioMantic: "+e)}

//<script id='gtm_sociomantic'>
(function gtm_sociomanticDL(jQ, dl, cdl, cdpm){
    'use strict';
    if (jQ && dl && cdl && cdpm) try {
        cdl.DL_sociomantic = {
            sale : {confirmed : /sociomantic/i.test(cdpm.attribution && cdpm.attribution.src || '')},
            basket : {
                products : [{
                    identifier: (cdpm.accomcode || '')+'_'+(cdpm.deptdate || '')+'_'+(cdpm.retdate || '')+'_'+(cdpm.duration || '')+'_'+(cdpm.departureairportselected || ''),
                    amount: cdpm.bookingvalue || '',
                    currency: 'EUR',
                    quantity : 1
                }],
                transaction : cdpm.accomcode || '',
                amount: cdpm.bookingvalue || '',
                currency: 'EUR'
            },
            script : {
                src : 'https://eu-sonar.sociomantic.com/js/2010-07-01/adpan/neckermann-reisen-de',
                status: 'not fired'
            }
        };
    } catch(e) {
        cdl.error('GTM sociomantic: '+ e);
    } finally {
        dl.push({'event':'sociomanticDL'});
    }
    return jQ && dl && cdl && cdpm && cdl.DL_sociomantic;
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams));

(function gtm_sociomantic(jQ, dl, cdl, bhdl){
    'use strict';
    if (jQ && dl && cdl && bhdl) try {
        window.basket = bhdl.basket;
        jQ.getScript && jQ.getScript(bhdl.script && bhdl.script.src || '', function gtm_sociomanticScript(){
            try {
                bhdl.script && (bhdl.script.status = 'fired');
                if (bhdl.sale && bhdl.sale.confirmed) {
                    window.sale = bhdl.sale;
                    window.sociomantic && window.sociomantic.sonar && window.sociomantic.sonar.adv["thomascook-de"] && window.sociomantic.sonar.adv["thomascook-de"].getConfirmed && window.sociomantic.sonar.adv["thomascook-de"].getConfirmed();
                }
            } catch(ee) {
                cdl.error('GTM sociomanticScript: '+ ee);
            }
        });
    } catch(e) {
        cdl.error('GTM sociomantic:'+ e);
    } finally {
        dl.push({'event':'sociomantic'});
    }
    return jQ && dl && cdl && bhdl;
}(window.jQuery, window.externaldataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_sociomantic));
//</script>

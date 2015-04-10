<script>
(function gtm_uatcdlSRP(jQ, dl, cdl, loc){
    'use strict';
    if (jQ && cdl && cdl.CATTParams){
        try{
            var twlh = cdl.twlh
            var cdpm = cdl.CATTParams
            var cdpmac = cdl.CATTParams.accoms;
            cdl.DL_uatc = {};
            cdl.DL_uatc.webanalytics = {};
            var nbrAccom = (cdpm.accoms || []).length
                || (jQ('input[id*=hotelCodeForReview]') || []).length
                || (jQ('.searchResults > li') || []).length
                || (jQ('div[id*=searchinfo_]') || []).length
                || 0

            cdl.DL_uatc = {
                profileid       : 'UA-33036832-7',
                cookiedomain    : twlh(/airtours/i)?"airtours.co.uk":(twlh(/club18-30/i)?"club18-30.com":(twlh(/directholidays/i)?"directholidays.co.uk":"thomascook.com")),
                name            : 'CATTUATC',
                set             : {
                    anonymizeIp : false,
                    location    : loc && loc.href || window.document && window.document.URL || '',
                    referrer    : document.referrer.split(/\?/)[0],
                    hostname    : loc && loc.hostname || ''
                }
            };
            cdl.DL_uatc.webanalytics = {
                nbrimpressions  : nbrAccom,
                addimpression   : [],
                page            : '/vp/en/'+(cdpm.lob || 'lob')+'/'+(cdpm.holidaytype || 'holidaytype')+'/'+(cdpm.pageid || 'pageid'),
                location        : loc && loc.href || window.document && window.document.URL || '',
                metrics         : {
                    metric1         : {'paxadult'               : parseInt(cdpm.paxadult) || 0},
                    metric2         : {'paxchild'               : parseInt(cdpm.paxchild) || 0},
                    metric3         : {'paxinfant'              : parseInt(cdpm.paxinfant) || 0},
                    metric4         : {'paxtotal'               : parseInt(cdpm.paxtotal) || 0},
                    metric5         : {'rooms'                  : parseInt(cdpm.rooms) || 0},
                    metric6         : {'searchresultspagenbr'   : parseInt(cdpm.searchresultspagenbr) || 0},
                    metric7         : {'searchresultspages'     : parseInt(cdpm.searchresultspages) || 0},
                    metric8         : {'searchresultsperpage'   : parseInt(cdpm.searchresultsperpage) || 0},
                    metric9         : {'searchresultstotal'     : parseInt(cdpm.searchresultstotal) || 0},
                    metric10        : {'bookingvalue'           : parseInt(cdpm.bookingvalue) || 0},
                    metric11        : {'depositvalue'           : parseInt(cdpm.depositvalue) || 0},
                    metric12        : {'discountvalue'          : parseInt(cdpm.discountvalue) || 0},
                    metric13        : {'insurance'              : parseInt(cdpm.insurance) || 0},
                    metric14        : {'luggage'                : parseInt(cdpm.luggage) || 0},
                    metric15        : {'hitcount'               : 1}
                },
                dimensions      : {
                    dimension1      : {'departureairportselected'   : cdpm.departureairportselected || 'empty'},
                    dimension2      : {'destination'                : cdpm.destination || 'empty'},
/*                  dimension3      : {'brochure'                   : cdpm.brochure || 'empty'},
*/                  dimension4      : {'searchresultstop3'          : cdpm.searchresultstop3 || 'empty'},
                    dimension5      : {'deptdate'                   : cdpm.deptdate || 'empty'},
                    dimension6      : {'appserver'                  : cdpm.appserver || 'empty'},
                    dimension7      : {'boardbasis'                 : cdpm.boardbasis || 'empty'},
                    dimension8      : {'budget'                     : cdpm.budget || 'empty'},
                    dimension9      : {'duration'                   : cdpm.duration || 'empty'},
                    dimension10     : {'lob'                        : cdpm.lob || ''},
                    dimension11     : {'holidaytype'                : cdpm.holidaytype || ''},
                    dimension12     : {'pageid'                     : cdpm.pageid || ''},
                    dimension13     : {'resortsearched'             : cdpm.resortsearched || 'empty'},
                    dimension14     : {'sessid'                     : cdpm.sessid || 'empty'},
                    dimension15     : {'starrating'                 : cdpm.starrating || 'empty'},
/*                  dimension16     : {'accomcode'                  : cdpm.accomcode || 'empty'},
                    dimension17     : {'accomname'                  : cdpm.accomname || 'empty'},
                    dimension18     : {'accomresort'                : cdpm.accomresort || 'empty'},
*/                  dimension19     : {'errorcode'                  : cdpm.errorcode || ''},
                    dimension20     : {'touroperator'               : cdpm.touroperator || 'empty'},
                    dimension21     : {'destinationsearched'        : cdpm.destination || 'empty'},
                    dimension22     : {'destinationairportselected' : cdpm.destinationairportselected || 'empty'},
                    dimension23     : {'searchresultspagenbr'       : cdpm.searchresultspagenbr || 'empty'},
                    dimension24     : {'searchresultspages'         : cdpm.searchresultspages || 'empty'},
                    dimension25     : {'searchresultsperpage'       : cdpm.searchresultsperpage || 'empty'},
                    dimension26     : {'searchresultstotal'         : cdpm.searchresultstotal || 'empty'},
                    /* dimension27      : {'SRP_Viewer'                 : 'EcAddImpression'}, */
                    dimension28     : {'sortoption'                 : cdpm.sortoption || 'empty'},
                    dimension29     : {'sortoption'                 : cdpm.sortoption || 'empty'},
                    dimension30     : {'utmaguid'                   : cdpm.utmaguid || 'empty'},
                    dimension31     : {'utmbguid'                   : cdpm.utmbguid || 'empty'},
                    dimension32     : {'emailguid'                  : cdpm.emailguid || 'empty'},
                    dimension33     : {'carrier'                    : cdpm.carrier || 'empty'},
                    dimension34     : {'paxadult'                   : cdpm.paxadult || 'empty'},
                    dimension35     : {'paxchild'                   : cdpm.paxchild || 'empty'},
                    dimension36     : {'paxinfant'                  : cdpm.paxinfant || 'empty'},
                    dimension37     : {'paxtotal'                   : cdpm.paxtotal || 'empty'},
                    dimension65     : {'pagetimestamp'              : cdl.gadate && cdl.gatime && cdpm.pagetimestamp && cdl.gadate(cdpm.pagetimestamp)+' '+cdl.gatime(cdpm.pagetimestamp) || ''},
                    dimension75     : {'unixtimestamp'              : cdpm.pagetimestamp || ''}
                }
            };


            var depdateDates = /(\d\d)\/(\d\d)\/(\d\d\d\d)/.exec(cdpm.deptdate)
            var depdateDate = depdateDates && new Date(depdateDates[3], parseInt(depdateDates[2])-1, depdateDates[1])

            var passInfo = {}
            for (var i = 0; i < nbrAccom; i++){
                var accomDests = (cdpmac[i].location || '').split(/\s*,\s*/g)
                    || []
                var accomCountry = (accomDests[0] || '').replace(/^\s*/g, '')
                    || ""
                var accomRegion = (accomDests[1] || '')
                    || ""
                var accomRest = accomDests[2] && accomDests.slice(2, accomDests.length).join(',').replace(/\s*$/g, '')
                    || ""
                var retdateDate = new Date(depdateDates[3], parseInt(depdateDates[2])-1, depdateDates[1]); retdateDate.setDate(depdateDate.getDate()+cdpm.duration)
                var retDate = retdateDate.getDate()+'/'+(retdateDate.getMonth()+1)+'/'+retdateDate.getFullYear();


                cdl.DL_uatc.webanalytics.addimpression.push({
                    id          : cdpmac[i].id || '',
                    name        : ((cdpmac[i].name || '')+'||'+accomCountry+'|'+accomRegion+'|'+accomRest).toLowerCase(),
                    category    : ('en|'+(cdpm.lob||"")+'|'+(cdpm.holidaytype||"")).toLowerCase(),
                    brand       : (cdpmac[i].touroperator || cdpm.touroperator || '').toLowerCase()||"",
                    variant     : ((cdpmac[i].boardBasis || '')+'|'+(cdpmac[i].airportcode || cdpmac[i].airportname || "")+'|'+(cdpm.deptdate||"")+'|'+(retDate||"")+'|'+(cdpm.paxtotal||"0")+'|'+(cdpm.paxadult||"0")+'|'+(cdpm.paxchild||"0")+'|'+(cdpm.paxinfant||"0")+'|'+(cdpmac[i].totalprice || '')).toLowerCase(),
                    list        : ('search|'+cdpm.sortoption).toLowerCase(),
                    position    : (cdpm.selpage*1000)+parseInt(i)+1,
                    dimension27 : 'SRP_Viewer'
                })
                passInfo[cdpmac[i].id] = (cdpm.selpage*1000)+parseInt(i)+1;
            }
        passInfo['sort'] = cdpm.sortoption.toLowerCase();
        cdl.post('xbUATCEC', escape(JSON.stringify(passInfo)))

        } catch (e){cdl.error('GTM UK TC UATCDL SRP: '+e)}
        dl.push({'event': 'UATCDL SRP'})
        return  cdl.DL_uatc
    }
}(!window.jQuery?!1:window.jQuery, window.dataLayer || [], !window.CATTDL?!1:window.CATTDL, window.location))
</script>

<script id='gtm_uatcdlBook'>
(function gtm_uatcdlSRP(jQ, dl, cdl, loc) {
    'use strict';
    if (jQ && cdl && cdl.CATTParams) try {
        var cdpm = cdl.CATTParams;
        var cdsr = cdpm.accoms || [];
        var params = JSON.parse(cdl.ckget('gtm_params') || '{}');
        
        cdl.DL_uatc = {
            profileid       : 'UA-33870117-1',
            cookiedomain    : /staging/i.test(location.hostname)?'auto':'jettours.com',
            name            : 'CATTUATC',
            set             : {
                anonymizeIp : false,
                location    : loc && loc.href || window.document && window.document.URL || '',
                referrer    : document.referrer  || '',
                hostname    : loc && (loc.hostname || '') || ''
            },
            webanalytics    :   {
                page            : '/vp/fr/'+((cdpm.lob || 'lob')+'/'+(cdpm.holidaytype || 'holidaytype')+'/'+(cdpm.pageid || 'pageid')).toLowerCase(),
                location        : loc && loc.href || window.document && window.document.URL || '',         
                metrics         : {
                    metric1         : {'paxadult'                   : parseInt(cdpm.paxadult) || parseInt(cdpm.srchnbradults) || 0},
                    metric2         : {'paxchild'                   : parseInt(cdpm.paxchild) || 0},
                    metric3         : {'paxinfant'                  : parseInt(cdpm.paxinfant) || 0},
                    metric4         : {'paxtotal'                   : parseInt(cdpm.paxtotal) || 0},
                    metric5         : {'rooms'                      : parseInt(cdpm.rooms) || 0},
                    metric6         : {'searchresultspagenbr'       : parseInt(cdpm.searchresultspagenbr) || 0},
                    metric7         : {'searchresultspages'         : parseInt(cdpm.searchresultspages) || 0},
                    metric8         : {'searchresultsperpage'       : parseInt(cdpm.searchresultsperpage) || 0},
                    metric9         : {'searchresultstotal'         : parseInt(cdpm.searchresultstotal) || 0},
                    metric15        : {'hitcount'                   : 1}
                },
                dimensions      : {
                    dimension1      : {'deptairport'                : cdpm.deptairport || cdpm.departureairportselected || ''},
                    dimension2      : {'destination'                : cdpm.destination || ''},
                    dimension4      : {'searchresultstop3'          : cdpm.searchresultstop3 || ''},
                    dimension5      : {'deptdate'                   : cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || ''},
                    dimension6      : {'appserver'                  : cdpm.appserver || ''},
                    dimension7      : {'boardbasis'                 : cdpm.boardbasis || ''},
                    dimension8      : {'budget'                     : ''},
                    dimension9      : {'duration'                   : ''+(cdpm.duration || '')},
                    dimension10     : {'lob'                        : cdpm.lob || ''},
                    dimension11     : {'holidaytype'                : cdpm.holidaytype || ''},
                    dimension12     : {'pageid'                     : cdpm.pageid || ''},
                    dimension13     : {'resort'                     : cdpm.resort || ''},
                    dimension14     : {'sessionid'                  : cdpm.sessionid || ''},                   
                    dimension15     : {'starrating'                 : cdpm.starrating || ''},
                    dimension17     : {'accomname'                  : params.accomnamesearched || ''},                    
                    dimension19     : {'errorcode'                  : cdpm.errorcode || ''},
                    dimension20     : {'touroperator'               : cdpm.touroperator || ''},
                    dimension21     : {'destination'                : cdpm.destination || ''},
                    dimension23     : {'searchresultspagenbr'       : cdpm.searchresultspagenbr && (''+cdpm.searchresultspagenbr) || ''},
                    dimension24     : {'searchresultspages'         : cdpm.searchresultspages && (''+cdpm.searchresultspages) || ''},
                    dimension25     : {'searchresultsperpage'       : cdpm.searchresultsperpage && (''+cdpm.searchresultsperpage) || ''},
                    dimension26     : {'searchresultstotal'         : cdpm.searchresultstotal && (''+cdpm.searchresultstotal) || ''},
                    dimension28     : {'sortoption'                 : cdpm.sortby || ''},
                    dimension29     : {'sortoptionsession'          : cdpm.sortby || ''},
                    dimension30     : {'utmaguid'                   : cdpm.utmaguid || ''},
                    dimension31     : {'utmbguid'                   : cdpm.utmbguid || ''},
                    dimension32     : {'emailguid'                  : cdpm.emailguid || ''},
                    dimension34     : {'paxadult'                   : ''+(cdpm.paxadult || cdpm.srchnbradults || '0')},
                    dimension35     : {'paxchild'                   : ''+(cdpm.paxchild || '0')},
                    dimension36     : {'paxinfant'                  : ''+(cdpm.paxinfant || '0')},  
                    dimension37     : {'paxtotal'                   : ''+(cdpm.paxtotal || '0')},
                    dimension51     : {'gaguid'                     : cdpm.gaguid || ''},
                    dimension52     : {'searchengine'               : cdpm.searchapp || ''},
                    dimension53     : {'hittype'                    : 'page'},                       
                    dimension54     : {'intcmp'                     : cdpm.internalcampaignid || ''},
                    dimension55     : {'intcmpsession'              : cdpm.internalcampaignid || ''},
                    dimension59     : {'room1type'                  : params.roomtypesearched || ''},
                    dimension65     : {'pagetimestamp'              : cdl.gadate && cdl.gatime && cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},
                    dimension75     : {'unixtimestamp'              : ''+(cdpm.pagetimestamp || 0) || ''},
                    dimension102    : {'pagecontext'                : cdpm.pagecontext || ''},
                    dimension115    : {'errormsg'                   : cdpm.errors || ''}
                }
            }
        };

        cdl.DL_uatc.webanalytics.nbrimpressions = cdsr.length || 0
        cdl.DL_uatc.webanalytics.addimpression = []
        var curCDSR = {}
        for (var i = 0; i < cdl.DL_uatc.webanalytics.nbrimpressions; i++){
            if (cdsr[i]) {
                curCDSR = cdsr[i]
                cdl.DL_uatc.webanalytics.addimpression.push({
                    id          : curCDSR.accomguid || "",
                    name        : ((curCDSR.accomname || "")+'|'+(curCDSR.arrivalairportcode || "")+'|'+(curCDSR.accomcountry || "")+'|'+(curCDSR.accomregion || "")+'|'+(curCDSR.accomresort || "")).toLowerCase(),
                    category    : ('fr|'+(cdpm.lob || "")+'|'+(cdpm.holidaytype || "")).toLowerCase(),
                    brand       : curCDSR.touroperator || "",
                    variant     : ((curCDSR.boardbasis || "")+'|'+(curCDSR.deptairportcode || "")+'|'+(cdl.gadate && cdl.gadate(curCDSR.deptdate || 0) || '')+'|'+(cdl.gadate && cdl.gadate(curCDSR.retdate || 0) || '')+'|'+(cdpm.paxtotal || "0")+'|'+(cdpm.paxadult || cdpm.srchnbradults || "0")+'|'+(cdpm.paxchild || "0")+'|'+(cdpm.paxinfant || "0")+'|'+(curCDSR.totalprice || "")).toLowerCase(),
                    list        : ('search|'+(cdpm.sortoption || "")).toLowerCase(),
                    position    : (((cdpm.searchresultspagenbr || "0")*1000)+(curCDSR.position || "")) || 0,
                    dimension27 : 'SRP_Viewer'
                })

            }
        };
        jQ('a.voir').each(function(ind, elt){ 
            if (window.sessionStorage) window.sessionStorage.getItem('gtm_srpaccomposition|'+(jQ(elt).attr('data-hid') || 'na')) || window.sessionStorage.setItem('gtm_srpaccomposition|'+(jQ(elt).attr('data-hid') || 'na'), jQ(elt).attr('data-pos') || 'na')
        });
    } catch(e) {
        cdl.error('GTM FR JT UATCDL SRP: '+e)
    } finally {
        dl.push({'event': 'UATCDL SRP'})
    }   
    return  cdl.DL_uatc
}(window.jQuery, window.dataLayer || [], window.CATTDL, window.location));
</script>

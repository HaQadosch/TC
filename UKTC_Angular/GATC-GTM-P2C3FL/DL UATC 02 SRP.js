<script id='gtm_uatcdlSRP'>
(function gtm_uatcdlSRP(jQ, dl, cdl, loc) {
    'use strict';
    if (jQ && cdl && cdl.CATTParams && dl && !dl.some(function(a){return /UATCDL SRP/i.test(a && a.event || '')}) ) try {
        var twlh = cdl.twlh
        var cdpm = cdl.CATTParams
        var cdpmac = cdl.CATTParams.accoms;
        cdl.DL_uatc = {};
        cdl.DL_uatc.webanalytics = {};
        var locpathname = loc.pathname || '';
        var locsearch = loc.search || '';
        var lochref = loc.href || document.URL || '';
        var lochost = location.hostname || location.host || '';
        var nbrAccom = (cdpm.accoms || []).length
            || (jQ('input[id*=hotelCodeForReview]') || []).length
            || (jQ('.searchResults > li') || []).length
            || (jQ('div[id*=searchinfo_]') || []).length
            || 0

        if (!window.ga || window.ga.length < 1)  {
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return window})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        };

        var vpagepath     = '/vp/en/'+(cdpm.lob || 'node')+'/'+(cdpm.holidaytype || 'node')+'/'+(cdpm.pageid || 'search');
        var vpqsp_cat   = ('ss_cat='+
                            (cdpm.lob || '')+'_'+
                            (cdpm.pageid || '')
                        ).toLowerCase();
        var vpqsp_st  = ('ss_st='+
                            (cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+
                            (cdl.gadate(cdpm.deptdate) || '')+'_'+
                            (((cdpm.accoms && cdpm.accoms.length > 0)?'yResults':'nResults') || '')
                        ).toLowerCase();
        var vpqsp_p     = (
                            'deptdate='+(cdpm.deptdate || '')+
                            '&depairport='+(cdpm.departureairportselected || '')+
                            '&paxadult='+(cdpm.paxadult || '')+
                            '&paxchild='+(cdpm.paxchild || '')+
                            '&paxinfant='+(cdpm.paxinfant || '')+
                            '&boardbasis='+(cdpm.boardbasis || '')+
                            '&destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                            '&srptop3='+(cdpm.searchresultstop3 || '')+
                            '&srptot='+(cdpm.searchresultstotal || '')+
                            '&duration='+(cdpm.duration || '')+
                            '&sortoption='+(cdpm.sortoption || '')+
                            '&rooms='+(cdpm.rooms || '')+
                            '&sessionid='+(cdpm.sessionid || '')
                        ).toLowerCase();
        var vppage = (vpagepath || '') + '?' + (vpqsp_cat || '') +'&'+ (vpqsp_st || '') +'&'+ (vpqsp_p || '');

        cdl.DL_uatc = {
            profileid       : 'UA-33036832-7',
            cookiedomain    : twlh(/airtours/i)?"airtours.co.uk":(twlh(/club18-30/i)?"club18-30.com":(twlh(/directholidays/i)?"directholidays.co.uk":"thomascook.com")),
            name            : 'CATTUATC',
            set             : {
                anonymizeIp : false,
                location    : loc && loc.href || document.URL || '',
                referrer    : document.referrer.split(/\?/)[0],
                hostname    : loc && loc.hostname || ''
            },
            webanalytics : {
                nbrimpressions  : nbrAccom,
                addimpression   : [],
                page            : vppage,
                location        : loc.href || document.URL || '',
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
                    metric14        : {'luggage'                : parseInt(cdpm.luggage) || 0}
                },
                dimensions      : {
                    dimension1      : {'departureairportselected'   : cdpm.departureairportselected || 'any'},
                    dimension2      : {'destination'                : cdpm.destination || 'any'},
                    dimension4      : {'searchresultstop3'          : cdpm.searchresultstop3 || ''},
                    dimension5      : {'deptdate'                   : cdpm.deptdate || ''},
                    dimension6      : {'appserver'                  : cdpm.appserver || ''},
                    dimension7      : {'boardbasis'                 : cdpm.boardbasis || ''},
                    dimension8      : {'budget'                     : cdpm.budget || ''},
                    dimension9      : {'duration'                   : cdpm.duration || ''},
                    dimension10     : {'lob'                        : cdpm.lob || ''},
                    dimension11     : {'holidaytype'                : cdpm.holidaytype || ''},
                    dimension12     : {'pageid'                     : cdpm.pageid || ''},
                    dimension13     : {'resortsearched'             : cdpm.resortsearched || ''},
                    dimension14     : {'sessid'                     : cdpm.sessid || ''},
                    dimension15     : {'starrating'                 : cdpm.starrating || ''},
                    dimension19     : {'errorcode'                  : cdpm.errors || ''},
                    dimension20     : {'touroperator'               : cdpm.touroperator || ''},
                    dimension21     : {'destinationsearched'        : cdpm.destination || 'any'},
                    dimension23     : {'searchresultspagenbr'       : cdpm.searchresultspagenbr || ''},
                    dimension24     : {'searchresultspages'         : cdpm.searchresultspages || ''},
                    dimension25     : {'searchresultsperpage'       : cdpm.searchresultsperpage || ''},
                    dimension26     : {'searchresultstotal'         : cdpm.searchresultstotal || ''},
                    dimension28     : {'sortoption'                 : cdpm.sortoption || ''},
                    dimension29     : {'sortoptionsession'          : cdpm.sortoption || ''},
                    dimension30     : {'utmaguid'                   : cdpm.utmaguid || ''},
                    dimension31     : {'utmbguid'                   : cdpm.utmbguid || ''},
                    dimension32     : {'emailguid'                  : cdpm.emailguid || ''},
                    dimension33     : {'carrier'                    : cdpm.carrier || ''},
                    dimension34     : {'paxadult'                   : ''+(cdpm.paxadult || 0)},
                    dimension35     : {'paxchild'                   : ''+(cdpm.paxchild || 0)},
                    dimension36     : {'paxinfant'                  : ''+(cdpm.paxinfant || 0)},
                    dimension37     : {'paxtotal'                   : ''+(cdpm.paxtotal || 0)},
                    dimension51     : {'gaguid'                     : cdpm.gaguid || ''},
                    dimension52     : {'anonymousid'        		: window.userId || ''},
                    dimension53     : {'myaccountuserid'    		: cdpm.user && cdpm.user.id || ''},
                    //dimension54     : {'myaccountaction'    		: myaccountactivation || ''},                    
                    dimension64     : {'dreamcaptureid'             : cdpm.dreamcaptureid || ''},
                    dimension65     : {'pagetimestamp'              : cdl.gadate && cdl.gatime && cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},
                    dimension75     : {'unixtimestamp'              : ''+(cdpm.pagetimestamp || 0) || ''},
                    dimension76     : {'tags'                       : cdpm.poolcontrol && 'N' || 'Y'},
                    dimension118    : {'realurlpath'                : loc.pathname || ''},
                    dimension119    : {'realurlparams'              : loc.search || ''}
                },
                events : {
                internalcampaignid  : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': lochost+locpathname, 'value': 1, 'noninteraction': true, 'page': vppage},
                errorcode           : {'category': 'Errors', 'action': cdpm.errors || (cdpm.errors && cdpm.errors.Code) || '', 'label': lochost+locpathname+'/?destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&deptairport='+(cdpm.departureairportselected || cdpm.deptairport || '')+'&deptdate='+(cdpm.deptdate || '')+'&duration='+(cdpm.duration || '')+'&appserver='+(cdpm.appserver || '')+(((/[\?].+/.exec(lochref)) || '').toString()).replace(/\?/, '&'), 'value': 1, 'noninteraction': true, 'page': vppage}
                }
            }
        }

        var depdateDates = /(\d\d)\/(\d\d)\/(\d\d\d\d)/.exec(cdpm.deptdate)
        var depdateDate = depdateDates && new Date(depdateDates[3], parseInt(depdateDates[2])-1, depdateDates[1])

        var passInfo = {}
        for (var i = 0; i < nbrAccom; i++){
            var accomDests = (cdpmac[i].resort || '').split(/\s*,\s*/g)
                || jQ('input#resort'+i) && jQ('input#resort'+i).val() && jQ('input#resort'+i).val().split(/\s*,\s*/g)
                || []
            var accomCountry = (accomDests[0] || '').replace(/^\s*/g, '')
                || ""
            var accomRegion = (accomDests[1] || '')
                || ""
            var accomRest = accomDests[2] && accomDests.slice(2, accomDests.length).join(',').replace(/\s*$/g, '')
                || jQ('#dealIndex_'+i).length && jQ('#dealIndex_'+i+' .block:eq(0)')
                || ""
            var accomDeptDate = cdpmac[i].deptdate || cdpm.deptdate ;
            var retdateDate = new Date(depdateDates[3], parseInt(depdateDates[2])-1, depdateDates[1]); retdateDate.setDate(depdateDate.getDate()+cdpm.duration)
            var accomRetDate = cdpmac[i].retdate
                || (retdateDate.getDate() || '')+'/'+(retdateDate.getMonth()+1  || '')+'/'+(retdateDate.getFullYear() || '');


            cdl.DL_uatc.webanalytics.addimpression.push({
                id          : cdpmac[i].id || '',
                name        : ((cdpmac[i].name || '')+'||'+accomCountry+'|'+accomRegion+'|'+accomRest).toLowerCase(),
                category    : ('en|'+(cdpm.lob||"")+'|'+(cdpm.holidaytype||"")).toLowerCase(),
                brand       : (cdpmac[i].touroperator || cdpm.touroperator || '').toLowerCase()||"",
                variant     : ((cdpmac[i].boardBasis || '')+'|'+(cdpmac[i].airportcode || cdpmac[i].airportname || "")+'|'+(accomDeptDate||"")+'|'+(accomRetDate||"")+'|'+(cdpm.paxtotal||"0")+'|'+(cdpm.paxadult||"0")+'|'+(cdpm.paxchild||"0")+'|'+(cdpm.paxinfant||"0")+'|'+(cdpmac[i].totalprice || '')).toLowerCase(),
                list        : ('search|'+cdpm.sortoption).toLowerCase(),
                position    : (cdpm.selpage*1000)+parseInt(i)+1,
                dimension27 : 'SRP_Viewer'
            })
            passInfo[cdpmac[i].id] = (cdpm.selpage*1000)+parseInt(i)+1;
        }
        passInfo['sort'] = cdpm.sortoption.toLowerCase();
        cdl.post('xbUATCEC', escape(JSON.stringify(passInfo)))

    } catch(e) {
        cdl.error('GTM UK TC UATCDL SRP: '+e)
    } finally {
        dl.push({'event': 'UATCDL SRP'})
    }
    return  cdl.DL_uatc
}(window.jQuery, window.dataLayer, window.CATTDL, window.location))
</script>

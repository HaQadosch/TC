<script id='gtm_uatcdlLM'>
setTimeout(function gtm_uatcdlLM(cdl, dl, loc, jQ) {
    'use strict'
    if (cdl && cdl.CATTParams && jQ) try {
                    var cdpm = cdl.CATTParams;
                    var holidaytype; $('li.active a').each(function(e) {if ($(this).attr("data-ibe-engine")) { holidaytype = ($(this).attr("data-ibe-engine") || '').split('-')[0] } });
                    cdpm.holidaytype = holidaytype;
                    var deptairport = $('p.col-depart input[name="airport"]').attr('value') || 'any';
                    cdpm.deptairport = deptairport;
                    var duration = $('p.col-datedepart select').val() || "any";
                    cdpm.duration = duration  || '';
                    var destid = $('p.col-voyage input[name="destination"]').attr('value') || '';
                    var destination = 'any';
                    $('tbody tr').each(function(e) {if (destid && ($(this).attr('data-idcountry') || '').toString() === destid) { destination =  $('tbody tr').children('td[class="destination"]').eq(0).find('span').text() } })
                    cdpm.destination = destination  || '';
                    var errormessage = $('img[alt="Jet Tours pas de resultat"]').attr('alt')
                        || '';
                    cdpm.errors = errormessage || '';

                    cdl.DL_uatc = {
                        profileid       : 'UA-33870117-1',
                        cookiedomain    : /staging/i.test(location.hostname)?'auto':'jettours.com',
                        name            : 'CATTUATC',
                        set             : {
                            anonymizeIp : false
                        },
                        webanalytics    : {
                            page            : loc && ((loc.pathname || '')+(loc.search || '')) || '',
                            location        : loc && loc.href || window.document && window.document.URL || '',
                            metrics         : {
                                metric15        : {'hitcount'       : 1}
                            },
                            dimensions      : {
                                dimension1      : {'deptairport'    : deptairport || ''},
                                dimension2      : {'destination'    : destination || 'any'},
                                dimension6      : {'appserver'      : cdpm.appserver || ''},
                                dimension9      : {'duration'       : ''+(duration || 'any')},
                                dimension10     : {'lob'            : 'package'},
                                dimension11     : {'holidaytype'    : (holidaytype || '')},
                                dimension12     : {'pageid'         : cdpm.pageid || ''},
                                dimension19     : {'errorcode'      : cdpm.errorcode || ''},
                                dimension30     : {'utmaguid'       : cdpm.utmaguid || ''},
                                dimension31     : {'utmbguid'       : cdpm.utmbguid || ''},
                                dimension32     : {'emailguid'      : cdpm.emailguid || ''},
                                dimension51     : {'gaguid'         : cdpm.gaguid || ''},
                                dimension53     : {'hittype'        : 'page'},
                                dimension54     : {'intcmp'         : cdpm.internalcampaignid || ''},
                                dimension55     : {'intcmpsession'  : cdpm.internalcampaignid || ''},
                                dimension65     : {'pagetimestamp'  : cdl.gadate && cdl.gatime && cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},
                                dimension75     : {'unixtimestamp'  : ''+(cdpm.pagetimestamp || 0) || ''},
                                dimension102    : {'pagecontext'    : cdpm.pagecontext || ''},
                                dimension115    : {'errormessage'   : errormessage || ''}
                            }
                        }
                    };
                    cdl.CATTParams = cdpm;
    } catch(e) {
        cdl.error('GTM FR JT UATCDL Lastminute: '+e)
    } finally {
        dl.push({'event': 'UATCDL LM'})
    }
    return cdl && cdl.CATTParams && cdl.DL_uatc
}(window.CATTDL, window.dataLayer, window.location, window.jQuery), 500);
</script>

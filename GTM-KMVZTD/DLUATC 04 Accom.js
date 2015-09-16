<script id='GTM-KMVZTD_UATCDLAccom'>
  (function gtm_uatcdAccom(cdl, loc, dl){
    'use strict';
    if (cdl && cdl.CATTParams) try {
      var twlh = cdl.twlh
      var twls = cdl.twls
      var ewls = cdl.ewls
      var ld = cdl._
      var cdpm = cdl.CATTParams || {}
      var locpathname = location.pathname || ''
      var locsearch = location.search || ''
      cdl.DL_uatc = {}
      cdl.DL_uatc.webanalytics = {}

      ld.assign(cdl.DL_uatc, {
          profileid       : 'UA-65261977-1'
        , cookiedomain    : 'thomascook.fr'
        , name            : 'CATTUATC'
        , set             : {
            anonymizeIp : false
          , location    : loc && loc.href || window.document && window.document.URL || ''
          , referrer    : document.referrer  || ''
          , hostname    : loc && loc.hostname || ''
        }
        , webanalytics    : {
            page            : '/vp/fr/'+(cdpm.lob || 'package')+'/'+(cdpm.holidaytype || 'package')+'/'+(cdpm.pageid || 'accom')
          , location        : loc && loc.href || window.document && window.document.URL || ''
          , nbrimpressions  : cdpm.searchresultstotal
          , addimpression   : []
          , metrics         : {
              metric1         : {'paxadult'               : parseInt(cdpm.paxadult) || 0}
            , metric2         : {'paxchild'               : parseInt(cdpm.paxchild) || 0}
            , metric3         : {'paxinfant'              : parseInt(cdpm.paxinfant) || 0}
            , metric4         : {'paxtotal'               : parseInt(cdpm.paxtotal) || 0}
            , metric5         : {'rooms'                  : parseInt(cdpm.rooms) || 0}
            , metric6         : {'searchresultspagenbr'   : 1}
            , metric7         : {'searchresultspages'     : parseInt(cdpm.searchresultspages) || 0}
            , metric8         : {'searchresultsperpage'   : parseInt(cdpm.searchresultstotal) || 0}
            , metric9         : {'searchresultstotal'     : parseInt(cdpm.searchresultstotal) || 0}
            , metric15        : {'hitcount'               : 1}
          }
          , dimensions      : {
              dimension1      : {'deptairport'                : cdpm.departureairportselected || 'empty'}
            , dimension2      : {'destination'                : cdpm.destination || 'empty'}
            , dimension4      : {'searchresultstop3'          : cdpm.searchresultstop3 || 'empty'}
            , dimension5      : {'deptdate'                   : cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || 'empty'}
            , dimension6      : {'appserver'                  : cdpm.appserver || 'empty'}
            , dimension7      : {'boardbasis'                 : cdpm.boardbasis || 'empty'}
            , dimension9      : {'duration'                   : ''+cdpm.duration || 'empty'}
            , dimension10     : {'lob'                        : cdpm.lob || ''}
            , dimension11     : {'holidaytype'                : cdpm.holidaytype || ''}
            , dimension12     : {'pageid'                     : cdpm.pageid || ''}
            , dimension13     : {'resortsearched'             : cdpm.searches && cdpm.searches.resort || 'empty'}
            , dimension14     : {'sessid'                     : cdpm.sessid || 'empty'}
            , dimension15     : {'starrating'                 : cdpm.starrating || 'empty'}
            , dimension19     : {'errorcode'                  : cdpm.errors && cdpm.errors.code || cdpm.errorcode || ''}
            , dimension20     : {'touroperator'               : cdpm.touroperator || 'empty'}
            , dimension21     : {'destinationsearched'        : cdpm.searches && cdpm.searches.resort || 'empty'}
            , dimension22     : {'destairport'                : cdpm.destinationairportselected || 'empty'}
            , dimension23     : {'searchresultspagenbr'       : '1'}
            , dimension24     : {'searchresultspages'         : '1'}
            , dimension25     : {'searchresultsperpage'       : cdpm.searchresultstotal || 'empty'}
            , dimension26     : {'searchresultstotal'         : cdpm.searchresultstotal || 'empty'}
            , dimension28     : {'sortoption'                 : cdpm.sortoption || 'empty'}
            , dimension29     : {'sortoption'                 : cdpm.sortoption || 'empty'}
            , dimension30     : {'utmaguid'                   : cdpm.utmaguid || 'empty'}
            , dimension31     : {'utmbguid'                   : cdpm.utmbguid || 'empty'}
            , dimension32     : {'emailguid'                  : cdpm.emailguid || 'empty'}
            , dimension33     : {'carrier'                    : cdpm.carrier || 'empty'}
            , dimension34     : {'paxadult'                   : ''+(cdpm.paxadult || '0')}
            , dimension35     : {'paxchild'                   : ''+(cdpm.paxchild || '0')}
            , dimension36     : {'paxinfant'                  : ''+(cdpm.paxinfant || '0')}
            , dimension37     : {'paxtotal'                   : ''+(cdpm.paxtotal || '0')}
            , dimension55     : {'hittype'                    : 'page'}
            , dimension56     : {'codeagence'                 : cdpm.codeagence || ''}
            , dimension65     : {'pagetimestamp'              : cdl.gadate && cdpm.pagetimestamp && cdl.gadate(cdpm.pagetimestamp)+' '+cdl.gatime(cdpm.pagetimestamp) || ''}
            , dimension75     : {'unixtimestamp'              : ''+(cdpm.pagetimestamp || 0) || ''}
            , dimension118    : {'vprealpath'                 : locpathname || ''}
            , dimension119    : {'vprealparameter'            : locsearch || ''}
          }
        }
      })

    } catch(e) {
      cdl.error('GTM FR TC MultiTO UATCDL Accom: '+e)
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'UATCDL Accom', 'pid': (cdpm.pageid || ''), 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - window.dataLayer[0]['gtm.start']})
    }
    return cdl.DL_uatc
   }(window.CATTDL, window.location, window.dataLayer))
</script>
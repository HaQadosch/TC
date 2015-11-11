<script>
(function gtm_cattdlPay(jQ, dl, cdl) {
    'use strict'
    if (jQ &&jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams
        var newPM = {}
        var keeps = {}

        var ck_cdpm = JSON.parse(cdl.ckget('gtm_cdpm') || '{}')

        if (ck_cdpm.trailingsteps && /\(/i.test(ck_cdpm.trailingsteps)){
            var steps = ck_cdpm.trailingsteps.split(/([^\)]+\(\d+\))$/)
            if (steps[0] === '') steps.shift()
            if (steps[steps.length-1] === '') steps.pop()
            var lastSteps = steps.pop();
            lastSteps = /(.+)\((\d+)\)/.exec(lastSteps)
            if (lastSteps[1] === cdpm.pageid)
                lastSteps = lastSteps[1]+'('+(++lastSteps[2])+')'
            else
                lastSteps = lastSteps[1]+'('+lastSteps[2]+')'+cdpm.pageid+'(1)';
            keeps['trailingsteps'] = steps.join('')+lastSteps

        } else keeps['trailingsteps'] = cdpm.pageid+'(1)';

        newPM['brand'] = cdpm.brand
            || ''


        keeps['address'] = {
            addresss    : cdpm.leadpassengeraddress || '',
            city        : cdpm.leadpassengercity || '',
            country     : cdpm.leadpassengercountry || '',
            emailaddress : cdpm.leadpassengeremailaddress || '',
            name        : cdpm.leadpassengername || '',
            postcode    : cdpm.leadpassengerpostcode || '',
            surname     : cdpm.leadpassengersurname || '',
            title       : cdpm.leadpassengertitle || ''
        }

        var accomDetails = jQ('dl.inc span')
            || false
        newPM['accomdetails'] = {
            roomtype    : accomDetails.eq(0).text().replace(/^\s*|\s*$|\n/g, '') || '',
            boardbasis  : accomDetails.eq(1).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s+/g, ' ') || ''
        }
        var flightDetails = jQ('dl.horizontal.flight-details>dd')
            || false
        var fd_outbound1 = flightDetails.eq(0).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s\s+/g, '\n').split('\n') || []
        var fd_outbound2 = flightDetails.eq(1).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s\s+/g, '\n').split('\n') || []
        var fd_inbound1 = flightDetails.eq(2).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s\s+/g, '\n').split('\n') || []
        var fd_inbound2 = flightDetails.eq(3).text().replace(/^\s*|\s*$|\n/g, '').replace(/\s\s+/g, '\n').split('\n') || []
        newPM['flightdetails'] = {
            outbound    : {
                flight  : fd_outbound1[2] || '',
                depart  : {
                    location    : fd_outbound1[0] || '',
                    date        : fd_outbound1[1] || ''
                },
                arrive  : {
                    location    : fd_outbound2[0] || '',
                    date        : fd_outbound2[1] || ''
                }
            },
            inbound     : {
                flight  : fd_inbound1[2] || '',
                depart  : {
                    location    : fd_inbound1[0] || '',
                    date        : fd_inbound1[1] || ''
                },
                arrive  : {
                    location    : fd_inbound2[0] || '',
                    date        : fd_inbound2[1] || ''
                }
            }
        }
        newPM['deptairport'] = cdpm.departureairportselected
            || cdpm.departurecity
            || cdpm.srchcitydeparture && cdpm.srchcitydeparture.replace(/^([^;]+).*/, '$1')
            || ''
        newPM['retdate'] = cdpm.retdate || cdpm.enddate || 0
        var list = $('div.bloc-inner-content.paymentOption.choix-paiement ul.nav-paiement li') || [];
        var payopt = ''; for (var i = 0; i < 3; i++){if(/actif/.test($(list[i]).attr('class') || '')){payopt = (($(list[i]).attr('class')).replace('actif',''))}};
        newPM['paymentoption'] = /telephone/.test(payopt)?'callcenter':/agence/.test(payopt)?'agency':'creditcard';

        jQ.extend(cdl.CATTParams, newPM, keeps);
        jQ.extend(ck_cdpm, keeps);
        cdl.ckset('gtm_cdpm', JSON.stringify(keeps), Infinity, '/', '.jettours.com');

        var params = JSON.parse(CATTDL.ckget('gtm_params') || '{}');
        params.lob = cdpm.lob || '';
        params.holidaytype = cdpm.holidaytype || '';
        params.accomcode = cdpm.accomcode || '';
        params.accomname = cdpm.accomname || '';
        params.deptdate = cdpm.deptdate || 0;
        params.retdate = cdpm.retdate || cdpm.enddate || 0;
        params.duration = cdpm.duration || '0';
        params.paxadult = cdpm.paxadult || 0;
        params.paxchild = cdpm.paxchild || 0;
        params.paxinfant = cdpm.paxinfant || 0;
        params.paxtotal = cdpm.paxtotal || 0;
        params.totalprice = cdpm.totalprice || 0;
        params.pricepp = cdpm.pricepp || 0;
        params.touroperator = cdpm.touroperator || '';
        params.destairport = cdpm.destairport || '';
        params.deptairport = cdpm.deptairport || '';
        params.boardbasis = cdpm.boardbasis || 0;
        params.accomcountry = cdpm.accomcountry || cdpm.country || '';
        params.accomregion = cdpm.accomregion || cdpm.region || '';
        params.accomresort = cdpm.accomresort || cdpm.resortsearched || '';
        params.paymentoption = cdpm.paymentoption || newPM.paymentoption || '';
        CATTDL.ckset('gtm_params', JSON.stringify(params), '', '/', '.jettours.com');

        $('input#creditCardOpt').on("click",function(){ var payopt = $(this).attr('id');
                                                        var payopttrans = /telephone/.test(payopt)?'callcenter':/agence/.test(payopt)?'agency':'creditcard';
                                                        var params = JSON.parse(cdl.ckget('gtm_params') || '{}');
                                                        params.paymentoption = payopttrans || '';
                                                        cdl.ckset('gtm_params', JSON.stringify(params), '', '/', '.jettours.com');
                                                    });
        $('input#telephoneOpt').on("click",function(){ var payopt = $(this).attr('id');
                                                        var payopttrans = /telephone/.test(payopt)?'callcenter':/agence/.test(payopt)?'agency':'creditcard';
                                                        var params = JSON.parse(cdl.ckget('gtm_params') || '{}');
                                                        params.paymentoption = payopttrans || '';
                                                        cdl.ckset('gtm_params', JSON.stringify(params), '', '/', '.jettours.com');
                                                    });
        $('input#agenceOpt').on("click",function(){ var payopt = $(this).attr('id');
                                                        var payopttrans = /telephone/.test(payopt)?'callcenter':/agence/.test(payopt)?'agency':'creditcard';
                                                        var params = JSON.parse(cdl.ckget('gtm_params') || '{}');
                                                        params.paymentoption = payopttrans || '';
                                                        cdl.ckset('gtm_params', JSON.stringify(params), '', '/', '.jettours.com');
                                                    });
        $('select#ccard.sspSelect').change(function()   { $('select#ccard.sspSelect option').each( function(e)  { if (this.selected) {
                                                                                                                    var params = JSON.parse(cdl.ckget('gtm_params') || '{}');
                                                                                                                    params.cardtype = this.value || '';
                                                                                                                    cdl.ckset('gtm_params', JSON.stringify(params), '', '/', '.jettours.com');
                                                                                                }})
                                                        });
    } catch(e) {
        cdl.error('GTM CATTDL Pay: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL Pay'})
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>

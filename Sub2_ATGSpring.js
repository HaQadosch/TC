<script id='gtm_Sub2TC'>
(function gtm_Sub2TCDL(cdl, dl) {
    'use strict'
    if (cdl && dl) try {
        var cdpm = cdl.CATTParams
        var outB = cdpm.flightdetails && cdpm.flightdetails.outbound || ''
        var inB = cdpm.flightdetails && cdpm.flightdetails.inbound || ''

        cdl.DL_sub2 = {
            poolTest : /Sub2Test/i.test(window.document.URL) || !((cdpm && cdpm.utmaguid || 1)%4) || 0,
            Title : cdpm.address && cdpm.address.title || '',
            Forename : cdpm.address && cdpm.address.name || '',
            Surname : cdpm.address && cdpm.address.surname || '',
            Address1 : cdpm.address && cdpm.address.house || '',
            Address2 : cdpm.address && cdpm.address.street1 || '',
            Postcode : cdpm.address && cdpm.address.postcode || '',
            Email_Address : cdpm.address && cdpm.address.email || '',
            Mobile_Number : cdpm.address && cdpm.address.phone || '',
            Optout1P : false,
            Optout3P : '',
            sendBasket : '',
            OrderID : cdpm.bookingref || '',
            Total : parseInt(cdpm.bookingvalue) || cdpm.accomprice || 0,
            Tax : '0' ,
            SKU : cdpm.accomcode || '',
            Hotel_ID : cdpm.accomguid || '',
            Category : 'Resort',
            Product_Name : cdpm.accomname || '',
            Accommodation_Detail_1 : cdpm.roomtypes && cdpm.roomtypes.length && cdpm.roomtypes.join('|') || '',
            Accommodation_Detail_2 : cdpm.boardbasis || '',
            CO : cdpm.retdate && (/-/i.test(cdpm.retdate || '')?cdpm.retdate.replace(/(\d\d\d\d)-(\d\d)-(\d\d)/, '$3/$2/$1'):cdpm.retdate) || '',
            Flight_Detail_1 : outB.flight && (outB.depart && outB.depart.date || '').replace(/\./g, '/') +'|'+ (outB.depart && outB.depart.location || '') +'|'+ (outB.flight || '') || ((cdpm.deptdate || '') +'|'+(cdpm.departureairportselected || '')+'|'+(cdpm.flightno|| ''))  || '',
            Flight_Detail_2 : outB.flight && (outB.arrive && outB.arrive.date || '').replace(/\./g, '/') +'|'+ (outB.arrive && outB.arrive.location || '') || ((cdpm.deptdate || '') +'|'+(cdpm.destinationairportselected || '')) || '',
            Flight_Detail_3 : inB.flight && (inB.depart && inB.depart.date || '').replace(/\./g, '/') +'|'+ (inB.depart && inB.depart.location || '') +'|'+ (inB.flight || '') || ((cdpm.retdate && (/-/i.test(cdpm.retdate || '')?cdpm.retdate.replace(/(\d\d\d\d)-(\d\d)-(\d\d)/, '$3/$2/$1'):cdpm.retdate) || '') +'|'+(cdpm.destinationairportselected || '')) || '',
            Flight_Detail_4 : inB.flight && (inB.arrive && inB.arrive.date || '').replace(/\./g, '/') +'|'+ (inB.arrive && inB.arrive.location || '') || ((cdpm.retdate && (/-/i.test(cdpm.retdate || '')?cdpm.retdate.replace(/(\d\d\d\d)-(\d\d)-(\d\d)/, '$3/$2/$1'):cdpm.retdate) || '') +'|'+(cdpm.departureairportselected || ''))  || '',
            CI : cdpm.deptdate || '',
            NoA : cdpm.paxadult || '0',
            NoC : cdpm.paxchild || '0',
            NoI : cdpm.paxinfant || '0',
            C1A : '',
            C2A : '',
            C3A : '',
            C4A : '',
            Unit_Price : parseInt(cdpm.bookingvalue) || cdpm.accomprice || 0,
            Quantity : cdpm.paxtotal || 0,
            script     : {
                status  : 'not fired',
                src     : '//webservices.sub2tech.com/CodeBase/LIVE/Min/sub2.js?LICENSEKEY=24edfbd3-61e8-4661-84f0-59c37b83296f&trackPage=Y'
            }
        }
    } catch(e){
        cdl.error("GTM Sub2: "+e)
    } finally {
        dl.push({event: 'DL Sub2'});
    }
    return cdl && dl && cdl.DL_sub2
}(window.CATTDL, window.externalLayer));

(function gtm_Sub2TC(jQ, cdl, s2dl) {
    'use strict';
    if (jQ && cdl && s2dl && s2dl.poolTest) try {
        var cdpm = cdl.CATTParams

        jQ.ajaxSetup({cache: true});
        var src = s2dl.script && s2dl.script.src || ''
        src && jQ.when(jQ.getScript(src)).done(function gtm_sub2Script(){
            window.__s2tQ = window.__s2tQ || [];
            s2dl.script.status = 'fired';
            if (/accom|cust|pax|pay/i.test(cdpm.pageid || '')) {
                s2dl.sendBasket = "<Store>"+
                        "<Product>"+
                            "<SKU>"+(s2dl.SKU || '')+"</SKU>"+
                            "<Hotel_ID>"+(s2dl.Hotel_ID || '')+"</Hotel_ID>"+
                            "<Product_Name>"+
                                "<Accommodation_Detail_1>"+(s2dl.Accommodation_Detail_1 || '')+"</Accommodation_Detail_1>"+
                                "<Accommodation_Detail_2>"+(s2dl.Accommodation_Detail_2 || '')+"</Accommodation_Detail_2>"+
                                "<CO>"+(s2dl.CO || '')+"</CO>"+
                                "<Flight_Detail_1>"+(s2dl.Flight_Detail_1 || '')+"</Flight_Detail_1>"+
                                "<Flight_Detail_2>"+(s2dl.Flight_Detail_2 || '')+"</Flight_Detail_2>"+
                                "<Flight_Detail_3>"+(s2dl.Flight_Detail_3 || '')+"</Flight_Detail_3>"+
                                "<Flight_Detail_4>"+(s2dl.Flight_Detail_4 || '')+"</Flight_Detail_4>"+
                                "<CI>"+(s2dl.CI || '')+"</CI>"+
                                "<NoA>"+(s2dl.NoA || '')+"</NoA>"+
                                "<NoC>"+(s2dl.NoC || '')+"</NoC>"+
                                "<NoI>"+(s2dl.NoI || '')+"</NoI>"+
                                "<C1A>"+(s2dl.C1A || '')+"</C1A>"+
                                "<C2A>"+(s2dl.C2A || '')+"</C2A>"+
                                "<C3A>"+(s2dl.C3A || '')+"</C3A>"+
                                "<C4A>"+(s2dl.C4A || '')+"</C4A>"+
                            "</Product_Name>"+
                            "<Unit_Price>"+(s2dl.Unit_Price || '')+"</Unit_Price>"+
                            "<Quantity>1</Quantity>"+
                        "</Product>"+
                    "</Store>";
                window.__s2tQ && window.__s2tQ.push(['sendBasket' , s2dl.sendBasket]);
            }
            if (/pax/i.test(cdpm.pageid || '')) {
                var newsletter = jQ('label.inputConfirm input').length && jQ('label.inputConfirm input') || jQ('label.leadPassCheckbox input')
                newsletter.on('click', function(elt){
                  s2dl.Optout1P = !s2dl.Optout1P
                  window.__s2tQ && window.__s2tQ.push(['storeData',{
                    'Title' : s2dl.title || '',
                    'Forename' : s2dl.Forename || '',
                    'Surname' : s2dl.Surname || '',
                    'Address1' : s2dl.Address1 || '',
                    'Address2' : s2dl.Address2 || '',
                    'Postcode' : s2dl.Postcode || '',
                    'Email_Address' : s2dl.Email_Address || '',
                    'Mobile_Number' : s2dl.Mobile_Number || '',
                    'Optout1P' : +s2dl.Optout1P
                  }]);
                })
            }
            if (/pay/i.test(cdpm.pageid || '')) {
                window.__s2tQ && window.__s2tQ.push(['storeData',{
                    'Title' : s2dl.title || '',
                    'Forename' : s2dl.Forename || '',
                    'Surname' : s2dl.Surname || '',
                    'Address1' : s2dl.Address1 || '',
                    'Address2' : s2dl.Address2 || '',
                    'Postcode' : s2dl.Postcode || '',
                    'Email_Address' : s2dl.Email_Address || '',
                    'Mobile_Number' : s2dl.Mobile_Number || '',
                    'Optout1P' : +s2dl.Optout1P
                }]);
            }
            window._gaq && window._gaq.push(function gtm_sub2ControlTest() {
                if (cdl.DL_gatc && cdl.DL_gatc.webanalytics && cdl.DL_gatc.webanalytics.customvars && cdl.DL_gatc.webanalytics.customvars) cdl.DL_gatc.webanalytics.customvars.custvar45 = {
                    'index': 45,
                    'name':'Sub2Test',
                    'value':'PoolTest',
                    'scope': 1
                }
                var tracker = window._gat._getTrackerByName && window._gat._getTrackerByName('CATTGATC');
                tracker._setCustomVar(45, 'Sub2Test', 'PoolTest', 1);
                tracker._trackEvent('Sub2', 'test', 'PoolTest', 1, true)
            })
        });
    } catch(e) {
        cdl.error('GTM Sub2: '+e)
    }
    if (!s2dl.poolTest) window._gaq && window._gaq.push(function gtm_sub2ControlTest() {
        if (cdl.DL_gatc && cdl.DL_gatc.webanalytics && cdl.DL_gatc.webanalytics.customvars && cdl.DL_gatc.webanalytics.customvars) cdl.DL_gatc.webanalytics.customvars.custvar45 = {'index': 45,'name':'Sub2Test','value':'PoolControl','scope': 1}
        var tracker = window._gat._getTrackerByName && window._gat._getTrackerByName('CATTGATC');
        tracker._setCustomVar(45, 'Sub2Test', 'PoolControl', 1);
        tracker._trackEvent('Sub2', 'test', 'PoolControl', 1, true)
    })
    return jQ && cdl && s2dl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_sub2))
</script>

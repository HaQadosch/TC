<script id='gtm_Sub2TC'>
(function gtm_Sub2TCDL(jQ, cdl, dl) {
    'use strict';
    if (jQ && cdl && dl) try {
        var cdpm = cdl.CATTParams;
        var outB = cdpm.flightdetails && cdpm.flightdetails.outbound && cdpm.flightdetails.outbound[0] || '';
        var inB = cdpm.flightdetails && cdpm.flightdetails.inbound && cdpm.flightdetails.inbound[0] || '';

        cdl.DL_sub2 = {
            poolTest : /Sub2Test/i.test(window.document.URL) || !((cdpm && cdpm.utmaguid || 1)%4) || 0,
            Title : cdl.DL_sub2 && cdl.DL_sub2.Title || cdl.DL_sub2 && cdl.DL_sub2.storeData && cdl.DL_sub2.storeData.Title || cdpm.address && cdpm.address.title || '',
            Forename : cdl.DL_sub2 && cdl.DL_sub2.Forename || cdl.DL_sub2 && cdl.DL_sub2.storeData && cdl.DL_sub2.storeData.Forename|| cdpm.address && cdpm.address.name || '',
            Surname : cdl.DL_sub2 && cdl.DL_sub2.Surname || cdl.DL_sub2 && cdl.DL_sub2.storeData && cdl.DL_sub2.storeData.Surname|| cdpm.address && cdpm.address.surname || '',
            Address1 : cdl.DL_sub2 && cdl.DL_sub2.Address1 || cdl.DL_sub2 && cdl.DL_sub2.storeData && cdl.DL_sub2.storeData.Address1|| cdpm.address && cdpm.address.house || '',
            Address2 : cdl.DL_sub2 && cdl.DL_sub2.Address2 || cdl.DL_sub2 && cdl.DL_sub2.storeData && cdl.DL_sub2.storeData.Address2|| cdpm.address && cdpm.address.street1 || '',
            Postcode : cdl.DL_sub2 && cdl.DL_sub2.Postcode || cdl.DL_sub2 && cdl.DL_sub2.storeData && cdl.DL_sub2.storeData.Postcode|| cdpm.address && cdpm.address.postcode || '',
            Email_Address : cdl.DL_sub2 && cdl.DL_sub2.Email_Address || cdl.DL_sub2 && cdl.DL_sub2.storeData && cdl.DL_sub2.storeData.Email_Address|| cdpm.address && cdpm.address.email || '',
            Mobile_Number : cdl.DL_sub2 && cdl.DL_sub2.Mobile_Number || cdl.DL_sub2 && cdl.DL_sub2.storeData && cdl.DL_sub2.storeData.Mobile_Number|| cdpm.address && cdpm.address.phone || '',
            Optout1P : cdl.DL_sub2 && cdl.DL_sub2.Optout1P || cdl.DL_sub2 && cdl.DL_sub2.storeData && cdl.DL_sub2.storeData.Optout1P|| false,
            sendBasket : cdl.DL_sub2 && cdl.DL_sub2.sendBasket || '',
            OrderID : cdl.DL_sub2 && cdl.DL_sub2.OrderID || cdpm.bookingref || '',
            Total : cdl.DL_sub2 && cdl.DL_sub2.Total || parseInt(cdpm.totalprice) || cdpm.totalprice || 0,
            Tax : '0' ,
            SKU : cdl.DL_sub2 && cdl.DL_sub2.SKU || cdpm.accomcode || '',
            Hotel_ID : cdl.DL_sub2 && cdl.DL_sub2.Hotel_ID || cdpm.accomguid || '',
            Category : 'Resort',
            Product_Name : cdl.DL_sub2 && cdl.DL_sub2.Product_Name || cdpm.accomname || '',
            Accommodation_Detail_1 : cdl.DL_sub2 && cdl.DL_sub2.Accommodation_Detail_1 || jQ('.room-description').text() || '',
            Accommodation_Detail_2 : cdl.DL_sub2 && cdl.DL_sub2.Accommodation_Detail_2 || cdpm.boardbasis || '',
            CO : cdl.DL_sub2 && cdl.DL_sub2.CO || cdpm.returndate && cdl.gadate(cdpm.returndate || 0) || '',
            Flight_Detail_1 : cdl.DL_sub2 && cdl.DL_sub2.Flight_Detail_1 || outB && cdl.gadate(outB.depart && outB.depart.date || 0) +'|'+ (outB.depart && outB.depart.airport || '') +'|'+ (outB.flightno || '') || '',
            Flight_Detail_2 : cdl.DL_sub2 && cdl.DL_sub2.Flight_Detail_2 || outB && cdl.gadate(outB.arrive && outB.arrive.date || 0) +'|'+ (outB.arrive && outB.arrive.airport || '') || '',
            Flight_Detail_3 : cdl.DL_sub2 && cdl.DL_sub2.Flight_Detail_3 || inB && cdl.gadate(inB.depart && inB.depart.date || 0) +'|'+ (inB.depart && inB.depart.airport || '') +'|'+ (inB.flightno || '') || '',
            Flight_Detail_4 : cdl.DL_sub2 && cdl.DL_sub2.Flight_Detail_4 || inB && cdl.gadate(inB.arrive && inB.arrive.date || 0) +'|'+ (inB.arrive && inB.arrive.airport || '') || '',
            CI : cdl.DL_sub2 && cdl.DL_sub2.CI || cdpm.deptdate && cdl.gadate(cdpm.deptdate || 0) || '',
            NoA : cdl.DL_sub2 && cdl.DL_sub2.NoA || cdpm.paxadult || '0',
            NoC : cdl.DL_sub2 && cdl.DL_sub2.NoC || cdpm.paxchild || '0',
            NoI : cdl.DL_sub2 && cdl.DL_sub2.NoI || cdpm.paxinfant || '0',
            C1A : '',
            C2A : '',
            C3A : '',
            C4A : '',
            Unit_Price : cdl.DL_sub2 && cdl.DL_sub2.Unit_Price || parseInt(cdpm.totalprice) || cdpm.totalprice || 0,
            Quantity : cdl.DL_sub2 && cdl.DL_sub2.Quantity || cdpm.paxtotal || 0,
            script     : {
                status  : 'not fired',
                src     : '//webservices.sub2tech.com/CodeBase/LIVE/Min/sub2.js?LICENSEKEY=24edfbd3-61e8-4661-84f0-59c37b83296f&trackPage=Y'
            }
        };
    } catch(e){
        cdl.error("GTM Sub2: "+e);
    } finally {
        dl.push({event: 'DL Sub2'});
    }
    return jQ && cdl && dl && cdl.DL_sub2;
}(window.jQuery, window.CATTDL, window.externalLayer));

(function gtm_Sub2TC(jQ, cdl, s2dl) {
    'use strict';
    if (jQ && cdl && s2dl && s2dl.poolTest) try {
        var cdpm = cdl.CATTParams;

        jQ.ajaxSetup({cache: true});
        var src = s2dl.script && s2dl.script.src || '';
        src && jQ.when(jQ.getScript(src)).done(function gtm_sub2Script(){
            window.__s2tQ = window.__s2tQ || [];
            s2dl.script.status = 'fired';
            if (/accom|cust|pax|pay|booking|conf/i.test(cdpm.pageid || '')) {
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
                var newsletter = jQ('label.paxLabel input').length && jQ('label.paxLabel input') || '';
                newsletter && newsletter.on('click', function(){
                    s2dl.Optout1P = !s2dl.Optout1P;
                    var formData = unescape(jQ('form').serialize() || '');
                    var storeData = formData.length && {
                        'Title' : jQ('select[analytics-id=pax-leadPassenger_title] option[value='+(formData.replace(/leadPassengerTitle=([^\&]+)&.*/, '$1') || '1')+']').text() || '',
                        'Forename' : formData.replace(/.+&leadPassengerName=([^\&]*)&.*/, '$1') || '',
                        'Surname' : formData.replace(/.+&leadPassengerSurname=([^\&]*)&.*/, '$1') || '',
                        'Address1' : formData.replace(/.+&leadPassengerHouseNumber=([^\&]*)&leadPassengerStreet=([^\&]*)&.*/, '$1 $2').replace(/\+/g, ' ') || '',
                        'Address2' : formData.replace(/.+&leadPassengerStreet1=([^\&]*)&.*/, '$1').replace(/\+/g, ' ') || '',
                        'Postcode' : formData.replace(/.+&leadPassengerPostalcode=([^\&]*)&.*/, '$1').replace(/\+/g, ' ') || '',
                        'Email_Address' : formData.replace(/.+&leadPassengerEmail=([^\&]*)&.*/, '$1') || '',
                        'Mobile_Number' : formData.replace(/.+&leadPassengerPhonenumber=([^\&]*)&.*/, '$1') || '',
                        'Optout1P' : +s2dl.Optout1P
                    } || '';
                    s2dl.storeData = storeData;
                    window.__s2tQ && storeData && window.__s2tQ.push(['storeData', storeData]);
                });
                jQ('input#contactNumber').focusout(function() {
                    var formData = unescape(jQ('form').serialize() || '');
                    var storeData = formData.length && {
                        'Title' : jQ('select[analytics-id=pax-leadPassenger_title] option[value='+(formData.replace(/leadPassengerTitle=([^\&]+)&.*/, '$1') || '1')+']').text() || '',
                        'Forename' : formData.replace(/.+&leadPassengerName=([^\&]*)&.*/, '$1') || '',
                        'Surname' : formData.replace(/.+&leadPassengerSurname=([^\&]*)&.*/, '$1') || '',
                        'Address1' : formData.replace(/.+&leadPassengerHouseNumber=([^\&]*)&leadPassengerStreet=([^\&]*)&.*/, '$1 $2').replace(/\+/g, ' ') || '',
                        'Address2' : formData.replace(/.+&leadPassengerStreet1=([^\&]*)&.*/, '$1').replace(/\+/g, ' ') || '',
                        'Postcode' : formData.replace(/.+&leadPassengerPostalcode=([^\&]*)&.*/, '$1').replace(/\+/g, ' ') || '',
                        'Email_Address' : formData.replace(/.+&leadPassengerEmail=([^\&]*)&.*/, '$1') || '',
                        'Mobile_Number' : formData.replace(/.+&leadPassengerPhonenumber=([^\&]*)&.*/, '$1') || '',
                        'Optout1P' : +s2dl.Optout1P
                    } || '';
                    s2dl.storeData = storeData;
                    window.__s2tQ && storeData && window.__s2tQ.push(['storeData', storeData]);
                });
            }
            if (/pay|booking|conf/i.test(cdpm.pageid || '')) {
                var storeData = s2dl.storeData && s2dl.storeData.Title || {
                    'Title' : s2dl.Title || '',
                    'Forename' : s2dl.Forename || '',
                    'Surname' : s2dl.Surname || '',
                    'Address1' : s2dl.Address1 || '',
                    'Address2' : s2dl.Address2 || '',
                    'Postcode' : s2dl.Postcode || '',
                    'Email_Address' : s2dl.Email_Address || '',
                    'Mobile_Number' : s2dl.Mobile_Number || '',
                    'Optout1P' : +s2dl.Optout1P
                };
                s2dl.storeData = storeData;
                window.__s2tQ && window.__s2tQ.push(['storeData', storeData]);
            }
            if (/booking|conf/i.test(cdpm.pageid || '')) {
                window.__s2tQ && window.__s2tQ.push(['addOrder' ,{
                    'OrderID' : s2dl.OrderID || '',
                    'Total' : s2dl.Total || '0'
                }]);
                window.__s2tQ && window.__s2tQ.push(['addItem' ,{
                    'OrderID' : s2dl.OrderID || '',
                    'Product_ID' : s2dl.Hotel_ID || '' ,
                    'Product_Name' : s2dl.Product_Name || '' ,
                    'Category' : 'Resort',
                    'Unit_Price' : s2dl.Unit_Price || '0' ,
                    'Quantity' : s2dl.Quantity || '0'
                }]);
            }
            window._gaq && window._gaq.push(function gtm_sub2ControlTest() {
                if (cdl.DL_gatc && cdl.DL_gatc.webanalytics && cdl.DL_gatc.webanalytics.customvars && cdl.DL_gatc.webanalytics.customvars) cdl.DL_gatc.webanalytics.customvars.custvar45 = {
                    'index': 45,
                    'name':'Sub2Test',
                    'value':'PoolTestv2',
                    'scope': 1
                }
                var tracker = window._gat._getTrackerByName && window._gat._getTrackerByName('CATTGATC');
                tracker._setCustomVar(45, 'Sub2Test', 'PoolTestv2', 1);
                tracker._trackEvent('Sub2', 'test', 'PoolTestv2', 1, true)
            })
        });
    } catch(e) {
        cdl.error('GTM Sub2: '+e);
    }
    if (!s2dl.poolTest) window._gaq && window._gaq.push(function gtm_sub2ControlTest() {
        if (cdl.DL_gatc && cdl.DL_gatc.webanalytics && cdl.DL_gatc.webanalytics.customvars && cdl.DL_gatc.webanalytics.customvars) cdl.DL_gatc.webanalytics.customvars.custvar45 = {'index': 45,'name':'Sub2Test','value':'PoolControlv2','scope': 1}
        var tracker = window._gat._getTrackerByName && window._gat._getTrackerByName('CATTGATC');
        tracker._setCustomVar(45, 'Sub2Test', 'PoolControlv2', 1);
        tracker._trackEvent('Sub2', 'test', 'PoolControlv2', 1, true)
    })
    return jQ && cdl && s2dl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_sub2))
</script>


<script>
(function gtm_SalecycleDL(cdl, dl){
    'use strict'
    if (cdl) try {
        cdl.DL_salecycle = {
                        testPool : parseInt(CATTDL.CATTParams && CATTDL.CATTParams.utmaguid || 0)%2,
            script         : {
                status  : 'not fired',
                url     : '//d16fk4ms6rqz1v.cloudfront.net/capture/thomascook.js'
            }
        }
    } catch(e) {
        cdl.error("GTM DL_salecycle: "+e)
    } finally {
        dl.push({event: 'Salecycle'});
    }
    return cdl.DL_salecycle
}(window.CATTDL, window.externalLayer));

(function gtm_Salecycle(jQ, cdl, scdl){
    'use strict';
    if (jQ && cdl && scdl && parseInt(CATTDL.CATTParams && CATTDL.CATTParams.utmaguid || 0)%2) try {
        if (scdl.script) {
            jQ.ajaxSetup({cache: true});
            jQ.getScript && jQ.getScript(scdl.script.url, function gtm_salecyleScript(){
                scdl.script.status = 'fired'
             })
        }
    } catch (e){cdl.error('GTM Salecyle: '+e)}
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_salecycle))
</script>

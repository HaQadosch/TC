<script id='gtm_Sub2TC'>
(function gtm_Sub2TCDL(jQ, cdl, dl) {
    'use strict';
    if (jQ && cdl && dl) try {
        var cdpm = cdl.CATTParams;
        var outB = cdpm.flightdetails && cdpm.flightdetails.outbound && cdpm.flightdetails.outbound[0] || '';
        var inB = cdpm.flightdetails && cdpm.flightdetails.inbound && cdpm.flightdetails.inbound[0] || '';

        cdl.DL_sub2 = {
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
            Accommodation_Detail_1 : jQ('.room-description').text() || '',
            Accommodation_Detail_2 : cdpm.boardbasis || '',
            CO : cdl.gadate(cdpm.returndate || 0),
            Flight_Detail_1 : outB && cdl.gadate(outB.depart && outB.depart.date || 0) +'|'+ (outB.depart && outB.depart.airport || '') +'|'+ (outB.flightno || '') || '',
            Flight_Detail_2 : outB && cdl.gadate(outB.arrive && outB.arrive.date || 0) +'|'+ (outB.arrive && outB.arrive.airport || '') || '',
            Flight_Detail_3 : inB && cdl.gadate(inB.depart && inB.depart.date || 0) +'|'+ (inB.depart && inB.depart.airport || '') +'|'+ (inB.flightno || '') || '',
            Flight_Detail_4 : inB && cdl.gadate(inB.arrive && inB.arrive.date || 0) +'|'+ (inB.arrive && inB.arrive.airport || '') || '',
            CI : cdl.gadate(cdpm.deptdate || 0),
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
    if (jQ && cdl && s2dl) try {
        var cdpm = cdl.CATTParams;

        jQ.ajaxSetup({cache: true});
        var src = s2dl.script && s2dl.script.src || '';
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
                var newsletter = jQ('label.paxLabel input').length && jQ('label.paxLabel input') || '';
                newsletter && newsletter.on('click', function(elt){
                    s2dl.Optout1P = !s2dl.Optout1P;
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
                });
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
        });
    } catch(e) {
        cdl.error('GTM Sub2: '+e);
    }
    return jQ && cdl && s2dl;
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_sub2))
</script>

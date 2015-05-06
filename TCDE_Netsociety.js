try{
    var depDateYYYYMMDD = ""; try {var depDateDDMMMYYYY = (/(\d\d)\/(\d\d)\/(\d\d\d\d)/).exec(window.CATTParams.DeptDate); depDateYYYYMMDD = depDateDDMMMYYYY[3]+depDateDDMMMYYYY[2]+depDateDDMMMYYYY[1];} catch (e){}
    var todayYYYYMMDD = ""; try{var todayMS = new Date(); todayYYYYMMDD = todayMS.getFullYear()+""+(todayMS.getMonth()+1)+""+todayMS.getDate();} catch (e){}
    var bookingValue="1";if(typeof window.CATTParams!=="undefined"){if(typeof window.CATTParams.BookingValue!="undefined"){if(window.CATTParams.BookingValue!=""&&window.CATTParams.BookingValue!="0"){bookingValue=window.CATTParams.BookingValue}}}
    var dataTracked = 'destination='+window.CATTParams.Destination+';departureairport='+window.CATTParams.DepartureAirportSelected+';departuredate='+depDateYYYYMMDD+';duration='+parseInt(window.CATTParams.Duration)+';bookingdate='+todayYYYYMMDD+';resort='+(window.CATTParams.ResortSearched || window.CATTParams.AccomResort)+';children='+window.CATTParams.PaxChild+';accomCode='+window.CATTParams.AccomCode;
    if ((/thomascook\.de/gi).test(document.location.host)){/* All pages within the thomascook.de domain. */
        document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/995713325/?value="+bookingValue+"&amp;label=0rVwCPPc7QQQrcLl2gM&amp;guid=ON&amp;script=0&amp;data=")+escape(dataTracked)+decodeURI("'/%3E"))
        if (document.location.pathname === "/"){/* Homepage of thomascook.de. */
            document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/992702868/?value="+bookingValue+"&amp;label=J8eNCNSxuQQQlOOt2QM&amp;guid=ON&amp;script=0&amp;data=")+escape(dataTracked)+decodeURI("'/%3E"))
        } else if (!(/accom|paxpay|booking/gi).test(window.CATTParams.PageID)){/* Specific Destination pages.*/
            if ((/Mallorca/gi).test(window.CATTParams.ResortSearched)){
                document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/992702868/?value="+bookingValue+"&amp;label=ee8_CPStuQQQlOOt2QM&amp;guid=ON&amp;script=0&amp;data=")+escape(dataTracked)+decodeURI("'/%3E"))
                /* Accommodation Iberostar Cala Barca Club Mallorca. */
                if ((/2380/gi).test(window.CATTParams.AccomCode) || (/hotels\/2380/gi).test(document.location.pathname)){
                    document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/992702868/?value="+bookingValue+"&amp;label=ARkKCLS1uQQQlOOt2QM&amp;guid=ON&amp;script=0&amp;data=")+escape(dataTracked)+decodeURI("'/%3E"))
                }
            } else if ((/Antalya/gi).test(window.CATTParams.ResortSearched)){
                document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/992702868/?value="+bookingValue+"&amp;label=xPjECOyuuQQQlOOt2QM&amp;guid=ON&amp;script=0&amp;data=")+escape(dataTracked)+decodeURI("'/%3E"))
                /* Accommodation Royal Dragon Antalya. */
                if ((/63200/gi).test(window.CATTParams.AccomCode) || (/hotels\/63200/gi).test(document.location.pathname)){
                    document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/992702868/?value="+bookingValue+"&amp;label=Y92YCKy2uQQQlOOt2QM&amp;guid=ON&amp;script=0&amp;data=")+escape(dataTracked)+decodeURI("'/%3E"))
                }
            } else if ((/Gran\+Canaria/gi).test(window.CATTParams.ResortSearched)){
                document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/992702868/?value="+bookingValue+"&amp;label=m9N9COSvuQQQlOOt2QM&amp;guid=ON&amp;script=0&amp;data=")+escape(dataTracked)+decodeURI("'/%3E"))
                /* Accommodation Lopesan Costa Meloneras Gran Canaria. */
                if ((/22038/gi).test(window.CATTParams.AccomCode) || (/hotels\/22038/gi).test(document.location.pathname)){
                    document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/992702868/?value="+bookingValue+"&amp;label=l19ACKS3uQQQlOOt2QM&amp;guid=ON&amp;script=0&amp;data=")+escape(dataTracked)+decodeURI("'/%3E"))
                }
            }
        } else if ((/paxpay/gi).test(window.CATTParams.PageID)){ /* Booking process page.*/
            document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/992702868/?value="+bookingValue+"&amp;label=EMx1CLy0uQQQlOOt2QM&amp;guid=ON&amp;script=0&amp;data=")+escape(dataTracked)+decodeURI("'/%3E"))
        } else if ((/booking/gi).test(window.CATTParams.PageID)){/* All booking confirmation pages.*/
            document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/conversion/995713325/?value="+bookingValue+"&amp;label=AY0JCMvh7QQQrcLl2gM&amp;guid=ON&amp;script=0'/%3E"))
            document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/conversion/992702868/?value="+bookingValue+"&amp;label=V0A_CIy6uQQQlOOt2QM&amp;guid=ON&amp;script=0'/%3E"))
        }

        if ((/Pauschalreisen/gi).test(window.CATTParams.HolidayType)){/* All Pauschalreisen pages.*/
            document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/997899920/?value="+bookingValue+"&amp;label=ZxGQCLCh8QMQkP3q2wM&amp;guid=ON&amp;script=0&amp;data=")+escape(dataTracked)+decodeURI("'/%3E"))
        } else if ((/lastminute/gi).test(window.CATTParams.HolidayType)){ /* All Last minute pages. */
            document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/992702868/?value="+bookingValue+"&amp;label=L4DXCMyyuQQQlOOt2QM&amp;guid=ON&amp;script=0&amp;data=")+escape(dataTracked)+decodeURI("'/%3E"))
        }

        if ((/topziele/gi).test(document.location.host)){/* Topziele Page. */
            document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/992702868/?value="+bookingValue+"&amp;label=UESCCMSzuQQQlOOt2QM&amp;guid=ON&amp;script=0&amp;data=")+escape(dataTracked)+decodeURI("'/%3E"))
        } else if ((/deal-der-woche/gi).test(document.location.pathname)){
            document.write(decodeURI("%3Cimg%20height='1'%20width='1'%20style='border-style:none;'%20alt=''%20src='//googleads.g.doubleclick.net/pagead/viewthroughconversion/992702868/?value="+bookingValue+"&amp;label=oKE4CJS5uQQQlOOt2QM&amp;guid=ON&amp;script=0&amp;data=")+escape(dataTracked)+decodeURI("'/%3E"))
        }
    }
} catch (e){if (typeof console != "undefined") console.log("DE TC NetSociety: "+e)}


//<script id='gtm_NetSoc'>
(function gtm_NetSocDL(cdl, jQ) {
    'use strict';
    if (cdl && jQ) try {
        var cdpm = cdl.CATTParams;
        var vtcsrc = '//googleads.g.doubleclick.net/pagead/viewthroughconversion/_i_/?value=_v_&amp;label=_l_&amp;guid=ON&amp;script=0data=_d_';
        cdl.DL_netsoc = {
            destination : cdpm.destination || '',
            departureairport : cdpm.departureairportselected || '',
            departuredate : (cdpm.departdate || '').replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3$2$1'),
            duration : (cdpm.duration || '').replace(/(\d).*/, '$1'),
            bookingdate : new Date().toLocaleDateString().replace(/(\d\d)\/(\d\d)\/(\d\d\d\d)/, '$3$2$1') || '',
            resort : cdpm.resortsearched || cdpm.accomresort || '',
            children : cdpm.paxchild || '0',
            accomcode : cdpm.accomcode || '',
            bookingvalue : cdpm.bookingvalue || '',
            img : {
                img01 : { conv_id : '995713325', conv_label : '0rVwCPPc7QQQrcLl2gM', src : vtcsrc }
            }
        };

        if (/home/i.test(cdpm.pageid || '')){
            cdl.DL_netsoc.img.img02 = { conv_id : '992702868', conv_label : 'J8eNCNSxuQQQlOOt2QM', src : vtcsrc };
        } else if (!(/accom|paxpay|booking/gi).test(cdpm.pageid || '')){
            if ((/Mallorca/gi).test(cdpm.resortsearched || '')){
                cdl.DL_netsoc.img.img03 = { conv_id : '992702868', conv_label : 'ee8_CPStuQQQlOOt2QM', src : vtcsrc };
                if (/2380/i.test(cdpm.accomcode || '') || /hotels\/2380/i.test(document.location.pathname)) cdl.DL_netsoc.img.img04 = { conv_id : '992702868', conv_label : 'ARkKCLS1uQQQlOOt2QM', src : vtcsrc };
            } else if (/antalya/i.test(cdpm.resortsearched || '')){
                cdl.DL_netsoc.img.img05 = { conv_id : '992702868', conv_label : 'xPjECOyuuQQQlOOt2QM', src : vtcsrc };
                if (/63200/i.test(cdpm.accomcode || '') || /hotels\/63200/i.test(document.location.pathname)) cdl.DL_netsoc.img.img06 = { conv_id : '992702868', conv_label : 'Y92YCKy2uQQQlOOt2QM', src : vtcsrc };
            } else if (/Gran\+Canaria/i.test(cdpm.resortsearched || '')){
                cdl.DL_netsoc.img.img07 = { conv_id : '992702868', conv_label : 'm9N9COSvuQQQlOOt2QM', src : vtcsrc };
                if (/22038/i.test(cdpm.accomcode) || /hotels\/22038/i.test(document.location.pathname)) cdl.DL_netsoc.img.img08 = { conv_id : '992702868', conv_label : 'l19ACKS3uQQQlOOt2QM', src : vtcsrc };
            }
        } else if (/paxpay/i.test(cdpm.pageid || '')){
            cdl.DL_netsoc.img.img09 = { conv_id : '992702868', conv_label : 'EMx1CLy0uQQQlOOt2QM', src : vtcsrc };
        } else if (/booking/i.test(cdpm.pageid || '')){
            cdl.DL_netsoc.img.img10 = { conv_id : '995713325', conv_label : 'AY0JCMvh7QQQrcLl2gM', src : vtcsrc };
            cdl.DL_netsoc.img.img11 = { conv_id : '992702868', conv_label : 'V0A_CIy6uQQQlOOt2QM', src : vtcsrc };
        }
        if (/Pauschalreisen/i.test(cdpm.holidaytype || '')){
            cdl.DL_netsoc.img.img12 = { conv_id : '997899920', conv_label : 'ZxGQCLCh8QMQkP3q2wM', src : vtcsrc };
        } else if (/lastminute/i.test(cdpm.holidaytype || '')){
            cdl.DL_netsoc.img.img13 = { conv_id : '992702868', conv_label : 'L4DXCMyyuQQQlOOt2QM', src : vtcsrc };
        }
        if (/topziele/i.test(document.location.host)) cdl.DL_netsoc.img.img14 = { conv_id : '992702868', conv_label : 'UESCCMSzuQQQlOOt2QM', src : vtcsrc };
        if (/deal-der-woche/i.test(document.location.pathname)) cdl.DL_netsoc.img.img14 = { conv_id : '992702868', conv_label : 'oKE4CJS5uQQQlOOt2QM', src : vtcsrc };
    } catch(e){
        cdl.error('GTM NetSoc DL: '+ e);
    }
    return cdl && jQ && cdl.DL_netsoc;
}(window.CATTDL, window.jQuery));

(function gtm_NetSocAdwords(cdl, jQ, nsdl) {
    'use strict';
    if (cdl && jQ && nsdl) try {
        var imgdl = nsdl.img || '';
        var dataTracked = window.escape && window.escape('destination='+(nsdl.destination || '')+
            ';departureairport='+(nsdl.departureairport || '')+
            ';departuredate='+(nsdl.departuredate || '')+
            ';duration='+(nsdl.duration || '')+
            ';bookingdate='+(nsdl.bookingdate || '')+
            ';resort='+(nsdl.resort || '')+
            ';children='+(nsdl.children || '')+
            ';accomCode='+(nsdl.accomcode || '')
        ) || '';
        for (var i in imgdl) {
            var src = imgdl[i] && imgdl[i].src && imgdl[i].src.replace(/_i_/i, imgdl[i].conv_id || '').replace(/_l_/i, imgdl[i].conv_label || '').replace(/_v_/i, nsdl.bookingvalue || '').replace(/_d_/i, dataTracked || '') || '';
            /img/i.test(i) &&
            jQ().append &&
            jQ('body').append(jQ('<img>', {
                src : src,
                style : 'border-style:none;',
                alt : '',
                id : 'NetSoc'+i,
                width : 1,
                height : 1
            }));
            imgdl[i] && (imgdl[i].src = src);
        }
    } catch(e) {
        cdl.error('GTM NetSoc: '+ e);
    }
    return cdl && jQ && nsdl;
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_netsoc));
//</script>

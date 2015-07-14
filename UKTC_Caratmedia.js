//<script id='gtm_salecycle'>
(function gtm_salecycle(cdl, dl){
    if (dl && cdl && cdl.twlh(/directholidays/) && cdl.twdc(/test=salecycleDH/)) try {
        cdl.insertJS('salecycle', 'https://d16fk4ms6rqz1v.cloudfront.net/capture/UAT/directholidays.js');
    } catch(e) {
        cdl.error && cdl.error('GTM SaleCycle: '+e);
    }
    return dl && cdl;
}(window.CATTDL, window.dataLayer));
//</script>


/*
 * LP
<!-- Tag for Activity Group: Counter Tags, Activity Name: 200. Homepage, Activity ID: 2332592 -->
<!-- Expected URL: https://? -->

<!--
Activity ID: 2332592
Activity Name: 200. Homepage
Activity Group Name: Counter Tags
-->

<!--
Start of DoubleClick Floodlight Tag: Please do not remove
Activity name of this tag: 200. Homepage
URL of the webpage where the tag is expected to be placed: https://?
This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
Creation Date: 04/13/2015
-->
<script type="text/javascript">
var axel = Math.random() + "";
var a = axel * 10000000000000;
document.write('<iframe src="https://1870474.fls.doubleclick.net/activityi;src=1870474;type=count205;cat=100ho0;u1=[Device Type];u2=[URL];u7=[Logged In Y/N];ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
</script>
<noscript>
<iframe src="https://1870474.fls.doubleclick.net/activityi;src=1870474;type=count205;cat=100ho0;u1=[Device Type];u2=[URL];u7=[Logged In Y/N];ord=1;num=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>
</noscript>
<!-- End of DoubleClick Floodlight Tag: Please do not remove -->
 */
//<script id='gtm_iprospect'>
(function gtm_iprospectDL(cdl, dl){
    'use strict';
    if (cdl && dl) try {
        var cdpm = cdl.CATTParams || '';

        cdl.DL_iprospect = {
            src : '1870474',
            type : 'count205',
            cat : '100ho0',
            u1 : 'Device Type',
            u2 : 'URL',
            u3 : 'Promo Code',
            u4 : 'Price',
            u5 : 'Product',
            u6 : 'Product ID',
            u7 : 'Logged In Y/N',
            u8 : 'Departure Date/Check In Date',
            u9 : 'Return Date',
            u10 : 'Brand',
            u11 : 'No of Adults',
            u12 : 'No of Children',
            u13 : 'Destination Location',
            u14 : 'Departure Location',
            u15 : 'Newsletter Y/N',
            u16 : 'Board Basis | Star Rating | Flight Class',
            u17 : 'Age',
            u18 : 'Title',
            u19 : 'Insurance',
            u20 : 'Postcode',
            prd : 'Product Listing Details',
            ord : '',
            num : '',
            iFrame : {
                src : 'https//www.xx.com/s/pixeltracking/_pc_?price=_p_&currency=_c_&linkid=_l_',
                status : 'not fired'
            }
        };
    } catch(e) {
        cdl.error && cdl.error('GTM iprospect DL: '+e);
    } finally {
        dl.push({'event':'DL iprospect'});
    }
    return cdl && dl && cdl.DL_iprospect;
}(window.CATTDL, window.dataLayer));

(function gtm_iprospect(jQ, dl, cdl, ipdl){
    'use strict';
    if (jQ && dl && cdl && ipdl) try {
        var src = ipdl.iFrame && ipdl.iFrame.src
            .replace(/_pc_/, ipdl.partnercode || '')
            .replace(/_p_/, ipdl.price || '')
            .replace(/_c_/, ipdl.currency || '')
            .replace(/_l_/, ipdl.linkid || '');
        jQ().append && jQ('body').append(jQ('<iframe>', {
            src : ipdl.iFrame && ipdl.iFrame.src || '',
            style : 'display:none;',
            alt : '',
            frameborder : 0,
            id : 'iProspectiFrame',
            width : 1,
            height : 1
        }));
        ipdl.iFrame = {
            status : 'fired',
            src : src
        };
    } catch(e) {
        cdl.error && cdl.error('GTM iprospect: '+e);
    } finally {
        dl.push({'event':'iprospect'});
    }
    return jQ && dl && cdl && ipdl;
}(window.jQuery, window.dataLayer, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_iprospect));
//</script>

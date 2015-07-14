//<script id='gtm3rd_iProspectSelect'>
(function gtm3rd_iProspectSelect(edl, cdl){
    'use strict';
    if (edl && cdl) edl.push({'event':cdl.twdc(/test=iprospect/i)?'iProspect':'CaratMedia'});
}(window.externalDataLayer || window.externalLayer, window.CATTDL));
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

<iframe src="https://1870474.fls.doubleclick.net/activityi;src=1870474;type=count205;cat=101se0;
u1=[Device Type];
u2=[URL];
u5=[Product];
u7=[Logged In Y/N];
u8=[Departure Date];
u9=[Return Date];
u11=[No of Adults];
u12=[No of Children];
u13=[Destination Location];
u14=[Departure Location];
u16=[Board Basis | Star Rating | Flight Class];ord=1;num=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>

 */

//<script id='GTM-K83N5Q_iprospect'>
(function gtm3rd_iprospect(cdl, cdpm, dl){
    if (dl && cdl && cdpm) try {
        var pid = cdpm.pageid;
        var params = {
            src     : '1870474',
            type    : (/booking/i.test(pid))?'sales481':'count205',
            cat     : (/home|generic/i.test(pid))?'100ho0':((/search/i.test(pid))?'101se0':((/accom/i.test(pid))?'50pro262':((/cust|quote/i.test(pid))?'20ord020':((/pax/i.test(pid))?'21ord021':((/pay/i.test(pid))?'22ord022':((/booking/i.test(pid))?'03con579':'01hom743')))))),
            u1      : cdpm.device || '1',
            u2      : window.location && window.location.host || window.location.hostname || '1',
            u3      : cdpm.voucher || cdpm.promocode || '1',
            u4      : cdpm.bookingprice || '1',
            u5      : cdpm.lob || '1',
            u6      : cdpm.accomcode || '1',
            u7      : cdpm.loggedin || '1',
            u8      : cdpm.deptdate || '1', //13/4/2015
            u9      : cdpm.retdate || '1',
            u10     : cdpm.touroperatore || cdpm.brand || '1',
            u11     : cdpm.paxadult || '1',
            u12     : cdpm.paxchild || '1',
            u13     : cdpm.destination || '1', //cityname
            u14     : cdpm.departure || '1', //cityname
            u15     : cdpm.newsletter || '1',
            u16     : cdpm.boardbasis+'|'+cdpm.starrating+'|'+cdpm.flightclass || '1',
            u17     : cdpm.age || '1',
            u18     : cdpm.title || '1',
            u19     : cdpm.insurance || '1',
            u20     : cdpm.postcode || '1',
            qty     : '1',
            cost    : cdpm.bookingvalue || '1',
            ord     : cdpm.bookingref || '1',
            num     : (Math.random()*10000000000000).toString(),
            prd     : 'i1:'+(cdpm.accomcode || '')+'|p1:'+(cdpm.bookingprice || '')+'|q1:1'
         };
         var source = 'https://{src}.fls.doubleclick.net/activityi;src={src};type={type};cat={cat};u1={u1};u2={u2};'+
            (/search/i.test(pid)?'u5={u5};u7={u7};u8={u8};u9={u9};u11={u11};u12={u12};u13={u13};u14={u14};u16={u16};':'')+
            (/accom/i.test(pid)?'u4={u4};u5={u5};u6={u6};u7={u7};u8={u8};u9={u9};u10={u10};u11={u11};u12={u12};u13={u13};u14={u14};u16={u16};':'')+
            (/cust|quote/i.test(pid)?'u4={u4};u5={u5};u6={u6};u7={u7};u8={u8};u9={u9};u10={u10};u11={u11};u12={u12};u13={u13};u14={u14};u16={u16};u17={u17};u18={u18};u20={u20}':'')+
            (/pax/i.test(pid)?'u4={u4};u5={u5};u6={u6};u7={u7};u8={u8};u9={u9};u10={u10};u11={u11};u12={u12};u13={u13};u14={u14};u15={u15};u16={u16};u17={u17};u18={u18};u20={u20}':'')+
            (/pay/i.test(pid)?'u4={u4};u5={u5};u6={u6};u7={u7};u8={u8};u9={u9};u10={u10};u11={u11};u12={u12};u13={u13};u14={u14};u15={u15};u16={u16};u17={u17};u18={u18};u20={u20}':'')+
            (/booking/i.test(pid)?'u3={u3};u4={u4};u5={u5};u6={u6};u7={u7};u8={u8};u9={u9};u10={u10};u11={u11};u12={u12};u13={u13};u14={u14};u15={u15};u16={u16};u17={u17};u18={u18};u19={u19};u20={u20};qty={qty};cost={cost}':'')+
            'ord={ord};num={num}?';

        cdl.insertIFrame('iprospect', source, params);
        dl.push({'event': 'DL_iprospect'});
    } catch(e) {
        cdl.error && cdl.error('GTM iProspect: '+e);
    }
    return dl && cdl;
}(window.CATTDL, !window.CATTDL?!1:window.CATTDL.CATTParams, window.externalDataLayer));
//</script>

// 207. Wish List    u1, u2, u4, u5, u6, u7, u8, u9, u10, u11, u12, u13, u14, u16, u17, u18, u20
// 208. Destination    u1, u2
// 209. Deals    u1, u2
// 210. Customer Services    u1, u2
// 211. Email Sign Up Confirmation    u1, u2
// 212. Store Locator Form    u1, u2
// 213. Store Locator Results    u1, u2, u20

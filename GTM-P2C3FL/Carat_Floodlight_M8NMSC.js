//<script id='GTM-M8NMSC_carat'>
(function gtm_caratMediaDL(cdl, edl){
	'use strict';
	if (cdl && edl) try{
		var cdpm = cdl.CATTParams
		var pid = cdpm.pageid

		cdl.DL_caratmedia = {
			src : '1870474',
			type 	: (/booking/i.test(pid))?'sales481':'count205',
			cat 	: (/home|generic/i.test(pid))?'01hom743':((/search/i.test(pid))?'02sea781':((/accom/i.test(pid))?'50pro262':((/cust|quote/i.test(pid))?'20ord020':((/pax/i.test(pid))?'21ord021':((/pay/i.test(pid))?'22ord022':((/booking/i.test(pid))?'03con579':'01hom743')))))),
			u1 		: window.location && window.location.host || window.location.hostname || 'n/a',
			u2 		: cdpm.lob || 'n/a',
			u3 		: cdpm.touroperator || (/sprite-brand-(\w*)/i.exec($('div[class*=sprite-brand-]').attr('class') || []) || []).pop() || (/brandIcon-(\w*)/i.exec($('span[class*=brandIcon-]').attr('class') || []) || []).pop() || 'n/a',
			u4 		: cdpm.lob || 'n/a',
			u5 		: cdpm.paxtotal || '0',
			u6 		: cdl.gadate && cdpm.deptdate && cdl.gadate(cdpm.deptdate) || 'n/a',
			u7 		: cdpm.retdate || 'n/a',
			u8 		: cdpm.duration || '0',
			u9 		: cdpm.deptairport || 'n/a',
			u10 	: cdpm.destairport || 'n/a',
			u11 	: cdpm.accomname || 'n/a',
			u12 	: cdpm.accomcode || 'n/a',
			u13 	: cdpm.boardbasis || 'n/a',
			u14 	: cdpm.destination || 'n/a',
			qty 	: '1',
			cost 	: cdpm.totalprice || '0',
			ord 	: cdpm.bookingref || '1',
			num 	: (Math.random()*10000000000000).toString()
		};
		var cdcm = cdl.DL_caratmedia;

		cdcm.iframe = {
			src	: 'https://'+(cdcm.src || '')+
				'.fls.doubleclick.net/activityi;'+
				'src='+(cdcm.src || '')+
				';type='+(cdcm.type || '')+
				';cat='+(cdcm.cat || '')+
				(/booking/i.test(pid) && (';qty='+cdcm.qty) || '')+
				(/booking/i.test(pid) && (';cost='+cdcm.cost) || '')+
				';u1='+(cdcm.u1 || '')+
				(/home|generic/i.test(pid)?'':(
					';u2='+(cdcm.u2 || '')+
					';u3='+(cdcm.u3 || '')+
					';u4='+(cdcm.u4 || '')+
					';u5='+(cdcm.u5 || '')+
					';u6='+(cdcm.u6 || '')+
					';u7='+(cdcm.u7 || '')+
					';u8='+(cdcm.u8 || '')+
					';u9='+(cdcm.u9 || '')+
					';u10='+(cdcm.u10 || '')+
					';u11='+(cdcm.u11 || '')+
					';u12='+(cdcm.u12 || '')+
					';u13='+(cdcm.u13 || '')+
					';u14='+(cdcm.u14 || '')
				))+
				';ord='+(cdcm.ord || '')+
				';num='+(cdcm.num || '')+
				'?',
			status 	: 'not fired'
		}
	} catch(e) {
    	cdl.error('GTM Ext DL_caratmedia: '+e)
    } finally {
    	edl.push({'event': 'DL_caratmedia'})
    }
	return cdl && edl && cdcm
}(window.CATTDL, window.dataLayer_M8NMSC));

(function gtm_caratmedia(cdl, jQ, cmdl, edl){
    'use strict';
    if (cdl && jQ && cmdl && edl) try {
		var caratIframe = jQ('<iframe width="1" height="1" frameborder="0" style="display:none" id="caratmediaIframe"></iframe>').attr('src', cmdl.iframe.src);
		caratIframe.appendTo('body');

		cmdl.iframe.status ='fired'

    } catch (e){
    	cdl.error('GTM Ext Caratmedia: '+e)
    } finally {
    	edl.push({'event':'Caratmedia'})
    }
    return cdl && jQ && cmdl && edl;
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_caratmedia, window.dataLayer_M8NMSC))
//</script>

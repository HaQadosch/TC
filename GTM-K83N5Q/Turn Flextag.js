<script id='GTM-K83N5Q_Turn'>
(function gtm3rd_TurnDL(cdl, dl, path) {
	'use strict';
	if (cdl && dl && !dl.some(function(a){return /turn/i.test(a && a.event || '')}) ) try {
		cdl.DL_turn = {
			dest: cdl.CATTParams.destination && cdl.CATTParams.destination.split(/,/g).pop() || '',
			cat: {
				"/holidays-abroad/summer-2014/":'11',
				"/lp/1z6-deals/":'12', "/lp/city-breaks/":'13',
				"/hotels/hotel-deals":'14',
				"/flights/":'15',
				"/holidays/flight-hotel/":'16',
				"/holidays/ski-holidays/":'17',
				"/cruise/":'18',
				"/holiday-extras/":'19',
				"/destinations/":'20'
			}[path] || '',
			imgDest: {
				src: '//d.turn.com/r/dd/id/L21rdC80MzQvY2lkLzI4MTE3ODg0L3QvMg/kv/destctry=_dest_',
				status: 'not fired'
			},
			script: {
				src: '//d.turn.com/r/dft/id/L21rdC80MzQvcGlkLzI4NDE4MzQzL3QvMA',
				status: 'not fired'
			},
			imgCat: {
				src: '//d.turn.com/r/dd/id/L21rdC80MzQvY2lkLzI4MTE3ODg0L3QvMg/cat/_cat_',
				status: 'not fired'
			}
		};
		dl.push({event: 'DL_turn'})
	} catch(e) {
		cdl.error("GTM UK TC DL_turn: "+e)
	}
	return cdl && dl && cdl.DL_turn
}(window.CATTDL, window.dataLayer_K83N5Q, window.location.pathname));

(function gtm3rd_TurnPixel(jQ, cdl, tndl){
	'use strict';
	if (jQ && cdl && tndl) try{
		var img = ''
		var src = ''
		if (tndl.dest) {
			src = (tndl.imgDest.src || '').replace(/_dest_/, (tndl.dest || ''))
			if (src) {
				img = jQ('<img width="1" height=1" style="border-style:none;" alt="" id="turnDestPixel">').attr('src', src);
				img.appendTo('body');
				if (jQ.extend !== 'undefined') jQ.extend(tndl.imgDest, {status: 'fired', src: src})
			}
		}
		if (tndl.cat) {
			src = (tndl.imgCat.src || '').replace(/_cat_/, (tndl.cat || ''))
			if (src) {
				img = jQ('<img width="1" height=1" style="border-style:none;" alt="" id="turnCastPixel">').attr('src', src);
				img.appendTo('body');
				if (jQ.extend !== 'undefined') jQ.extend(tndl.imgCat, {status: 'fired', src: src})
			}
		}
		jQ.ajaxSetup({cache: true});
	 	jQ.getScript && jQ.getScript(tndl.script.src, function gtm_turnScript(){
			tndl.script.status = 'fired'
	 	})
	} catch(e) {
    cdl.error('GTM UK TC Turn: '+e)
  }
  return jQ && cdl && tndl
}(window.CATTDL?window.CATTDL.jQ:!1, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_turn))
</script>

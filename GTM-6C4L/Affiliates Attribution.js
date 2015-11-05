<script>
try{
	var affPubID = typeof pubID !== "undefined" && pubID || /xbAFFPublisherID=([^;]*)/gi.test(document.cookie) && /xbAFFPublisherID=([^;]*)/gi.exec(document.cookie) && /xbAFFPublisherID=([^;]*)/gi.exec(document.cookie).pop() || ""
	var airport = window.CATTParams.DestinationAirportSelected;
	regAirport = new RegExp(airport, "i")
	var article = "ArticleNb="+window.CATTParams.PaxTotal+"&ProductName="+window.CATTParams.FlightNo+"&Category="+(regAirport.test("GOI,CCC,HOG,SNU,VRA,PUJ,MBJ,CUN,SFB,LAS,BGI,UVF,ANU,JFK,MIA")?"LH>":"SH>")+airport+"&Quantity=1&SinglePrice="+window.CATTParams.BookingValue+"&Brand=FlyThomasCook&Property1="+window.CATTParams.DepartureAirportSelected+"&Property2="+window.CATTParams.DestinationAirportSelected+"&Property3="+((window.CATTParams.DurationSelected == "0")?"one way":window.CATTParams.DurationSelected)+"&Property4="+window.CATTParams.DeptDateSelected+"&Property5="+(parseInt(CATTParams.PaxTotal) * parseInt(/return/i.test(CATTParams.FlightType)?2:1));
	typeof $ !== "undefined" &&
	typeof $('body').append !== "undefined" &&
	$('body').append('<IMG SRC="https://being.successfultogether.co.uk/registersale.asp?site=3969'+((affPubID)?'&ref='+affPubID:'')+'&order='+window.CATTParams.BookingRef+'&basket='+escape(article)+'%0D%0A" WIDTH="1" HEIGHT="1" />')
} catch(e){ if (typeof console != "undefined") console.log("UK FlyTC Conf Affiliates: "+e) }
</script>

<script>
(function gtm_Eventlog(){
	'use strict';
	try {
		var tm = [
		    { name: "event", macro: "{{event}}" },
		    { name: "element", macro: "{{element}}" },
		    { name: "element id", macro: "{{element id}}" },
		    { name: "element classes", macro: "{{element classes}}" },
		    { name: "element target", macro: "{{element target}}" },
		    { name: "element text", macro: "{{element text}}" },
		    { name: "element url", macro: "{{element url}}" }
		]
		var im = '\n\tEvent: {{event}}'+
			'\n\tElement: {{element}}'+
			'\n\tElement id: {{element id}}'+
			'\n\tElement classes: {{element classes}}'+
			'\n\tElement target: {{element target}}'+
			'\n\tElement text: {{element text}}'+
			'\n\tElement url: {{element url}}'
		;
		if (console) {
			if (console.table) console.table(tm)
			else if (console.info) console.info('GTM Event fired '+im)
		}
	} catch(e) {}
}())
</script>

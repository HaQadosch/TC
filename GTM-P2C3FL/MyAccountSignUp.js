<script id="GTM-P2C3FL_uamyaccountSignUp">
(function gtm_uamyaccountSignUp(jQ, cdl, uadl, w){
    'use strict';
  if (cdl && uadl) try{
        var cdpm = cdl.CATTParams || [];
        var trackerName = (uadl.name+".") || "";
        var uawa = uadl.webanalytics || {};
        //var myaccountid = (w.getPageData('user') && w.getPageData('user').data.id) || (w.getPageData('user') && w.getPageData('user').data.data) || "";

        if (cdpm.user && cdpm.user.action === "User_SignUp_Success") {
             w.ga(trackerName+'set',{'userId': CATTDL.CATTParams.user.id});
        };
        w.ga(trackerName+'send', 'event'
            , 'MyAccountSignUp'
            , (cdpm.user && cdpm.user.action || "")
            , (cdpm.user && cdpm.user.msg || "")
            , 1
            , { 'dimension51': cdpm.gaguid || ''
                ,'dimension52': window.userId || '' //my account anonymous id
                ,'dimension53': (cdpm.user && cdpm.user.msg || "") || '' //my account userid
                ,'dimension54': (cdpm.user && cdpm.user.action || "") || '' // action
                ,'dimension65': cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                ,'dimension75': ''+(window.Date && window.Date.now() || 0)}                          
                , {'nonInteraction': 1});
  }
  catch(e){cdl.error('GTM UATC MyAccountSignUp: '+e)}
}(!window.jQuery?!1:window.jQuery, !window.CATTDL?!1:window.CATTDL, !window.CATTDL.DL_uatc?!1:window.CATTDL.DL_uatc, window))
</script>

<script id="GTM-P2C3FL_gamyaccountSignUp">
(function gtm_gamyaccountSignUp(jQ, cdl, gadl, w){
    'use strict';
  if (cdl && gadl) try{ 

  var cdpm = cdl.CATTParams || [];
  var trackerName = (gadl.trackername+".") || "";
  if(cdpm.user && cdpm.user.msg){
  w._gaq.push([trackerName+'_setCustomVar'
            , 33                 
            , 'MyAccountUserID'      
            , cdpm.user.msg
            , 3                    
           ]);
  } 
  if(window.userId){
  w._gaq.push([trackerName+'_setCustomVar'
            , 34                   
            , 'MyAccountAnonymousID'      
            , window.userId
            , 3                    
           ]);
  }
    
    w._gaq.push([trackerName+'_trackEvent'
            , 'MyAccountSignUp'
            , (cdpm.user && cdpm.user.action || "")
            , (cdpm.user && cdpm.user.msg || "")
            , 1     
            , {'noninteraction': 1}]);  
  }
  catch(e){cdl.error('GTM GATC MyAccountSignUp: '+e)}
}(!window.jQuery?!1:window.jQuery, !window.CATTDL?!1:window.CATTDL, !window.CATTDL.DL_gatc?!1:window.CATTDL.DL_gatc, window))
</script>
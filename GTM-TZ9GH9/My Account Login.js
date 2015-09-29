<script id='GTM-TZ9GH9_uamyaccountLogin'>
(function gtm_uamyaccountLogin(jQ, cdl, uadl, w){
        'use strict';
    if (cdl && uadl) try{
        var cdpm = cdl.CATTParams || [];
        var trackerName = (uadl.name+".") || "";
        var uawa = uadl.webanalytics || {};
        var wgD = window.getPageData && window.getPageData('user') || {}

        //var myaccountid = (w.getPageData('user') && w.getPageData('user').data.id) || (w.getPageData('user') && w.getPageData('user').data.data) || "";
        var loginerror = jQ('div#login-signup-form div.alert-box.alert.ng-binding.alert-danger').next().text()
          ||  'Uncaptured Error';

        if (cdpm.user && cdpm.user.action === "User_Login_Success") {
             w.ga(trackerName+'set',{'userId': cdpm.user.id});
        };

        w.ga(trackerName+'send', 'event'
                , 'MyAccountLogin'
                , (cdpm.user && cdpm.user.action || "")
                , (cdpm.user && cdpm.user.msg || loginerror || "")
                , 1
                , { 'dimension51': cdpm.gaguid || ''
                    ,'dimension52': window.userId || '' //my account anonymous id
                    ,'dimension53': (cdpm.user && cdpm.user.msg || "") || '' //my account userid
                    ,'dimension54': (cdpm.user && cdpm.user.action || "") || '' // action
                    ,'dimension65': cdl && cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                    ,'dimension75': ''+(window.Date && window.Date.now() || 0)}                          
                , {'nonInteraction': 1});
    }
    catch(e){cdl.error('GTM UATC MyAccountLogin: '+e)}
}(!window.jQuery?!1:window.jQuery, !window.CATTDL?!1:window.CATTDL, !window.CATTDL.DL_uatc?!1:window.CATTDL.DL_uatc, window))
</script>

<script id='gtm_gamyaccountLogin'>
(function gtm_gamyaccountLogin(jQ, cdl, gadl, w){
        'use strict';
    if (cdl && gadl) try{   

    var cdpm = cdl.CATTParams || [];
    var trackerName = (gadl.trackername+".") || "";
    var wgD = window.getPageData && window.getPageData('user') || {}    
    var loginerror = jQ('div#login-signup-form div.alert-box.alert.ng-binding.alert-danger').next().text() 
      ||  'Uncaptured Error';

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
            , 'MyAccountLogin'
            , (cdpm.user && cdpm.user.action || "")
            , (cdpm.user && cdpm.user.msg || loginerror || "")
            , 1     
            , {'noninteraction': 1}]);  
    }
    catch(e){cdl.error('GTM GATC MyAccountLogin: '+e)}
}(!window.jQuery?!1:window.jQuery, !window.CATTDL?!1:window.CATTDL, !window.CATTDL.DL_gatc?!1:window.CATTDL.DL_gatc, window))
</script>
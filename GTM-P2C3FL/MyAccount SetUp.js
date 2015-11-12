<script id="GTM-P2C3FL_gatcMyAccount">
(function gtm_gatcMyAccount(jQ, cdl, gadl, uadl, w, d){
    'use strict';
    if (jQ && cdl && gadl && uadl) try {
        var gatrc = gadl.trackername+'.' || ''
        var gawa = gadl.webanalytics || {}
        var uatrc = (uadl.name+".") || ""
        var uawa = uadl.webanalytics || {};
        var cdpm = cdl.CATTParams || {};

        w._gaq = w._gaq || []
        w.ga = w.ga || []
        var wgp = function gtm_wgp(arr){ return w._gaq.push(arr)}
        var ctlg = 0
        var ctsu = 0;

        (function trackLogin() {
            jQ('#mainHeader > .container').on('DOMNodeInserted', '#my-account-widget', function(e) {
                var mess = jQ('#signup-login-form > div.alert.alert-danger').text() || !1
                var signupcls = jQ('div.alert-success')
                if (mess && !/xbtracked/i.test(jQuery('#my-account-widget').attr('class'))){
                    jQ('#my-account-widget').addClass('xbtracked');
                    mess = mess.replace(/^\s*|\s*$|\n\s+/g, '') || mess;
                    cdl.CATTParams.error = mess;
 
                    wgp([gatrc+'_trackEvent', 'MyAccountLogin', 'User_Login_Error', mess || '', 1, true])
                    w.ga(uatrc+'send','event'
                            , 'MyAccountLogin', 'User_Login_Error',  (mess || ''), 1
                            , {
                                'dimension51': cdpm.gaguid || 'empty'
                                ,'dimension54': 'User_Login_Error'
                                ,'dimension56': mess || 'unknown'
                                ,'dimension65': cdl.gadate && cdl.gatime && window.Date && cdl.gadate(+new Date())+' '+cdl.gatime(+new Date()) || ''
                                ,'dimension75': ''+(+new Date() || 0)
                                ,'nonInteraction': true}
                    );

                } else if (/Sign\sout/i.test(e.target.innerText)){
                    if (++ctlg === 1) {
                        jQuery.when(jQuery.ajax('/api/users/session')).done(function(a, b, x){
                            wgp([gatrc+'_setCustomVar'
                                      , 33                 
                                      , 'MyAccountUserID'      
                                      , ''+(x.responseJSON && x.responseJSON.id || 1) || 'unknown'
                                      , 3]);
                            wgp([gatrc+'_trackEvent', 'MyAccountLogin', 'User_Login_Success', ''+(x.responseJSON && x.responseJSON.id || 'na'), 1, true])                                                        
                            w.ga(uatrc+'send','event'
                                    , 'MyAccountLogin', 'Login Success',  ''+(x.responseJSON && x.responseJSON.id || 'na'), 1
                                    , { 
                                        'dimension51': cdpm.gaguid || 'empty'
                                        ,'dimension53': ''+(x.responseJSON && x.responseJSON.id || 1) || 'unknown'
                                        ,'dimension54': 'User_Login_Success'
                                        ,'dimension65': cdl.gadate && cdl.gatime && window.Date && cdl.gadate(+new Date())+' '+cdl.gatime(+new Date()) || ''
                                        ,'dimension75': ''+(+new Date() || 0)
                                        ,'nonInteraction': true}
                            );
                        });                     
                    }
                } else if (signupcls.length){
                    if (++ctsu === 1) {
                        var signupid; jQuery.when(jQuery.ajax('/api/users/session')).done(function(a, b, x){ 
                            signupid = ''+(x.responseJSON && x.responseJSON.id || 1) || 'unknown'
                        });
                        wgp([gatrc+'_setCustomVar'
                                  , 33                 
                                  , 'MyAccountUserID'      
                                  , signupid
                                  , 3]);                        
                        wgp([gatrc+'_trackEvent', 'MyAccountSignUp', w.location.href, (signupcls.text() || 'Success').replace(/^\s*|\s*$|\s*\n\s*/g, ' '), 1, true]);

                        w.ga(uatrc+'send','event'
                                , 'MyAccountSignUp', 'User_SignUp_Success',  w.location.href, (signupcls.text() || 'Success').replace(/^\s*|\s*$|\s*\n\s*/g, ' '), 1
                                , { 
                                    'dimension51': cdpm.gaguid || 'empty'
                                    ,'dimension53': signupid
                                    ,'dimension54': 'User_SignUp_Success'
                                    ,'dimension65': cdl.gadate && cdl.gatime && window.Date && cdl.gadate(+new Date())+' '+cdl.gatime(+new Date()) || ''
                                    ,'dimension75': ''+(+new Date() || 0)
                                    ,'nonInteraction': true}
                        );                        
                    }
                }
            })
        }())

    } catch (e){cdl.error('GTM MyAccount: '+e)}
}(!window.jQuery?!1:window.jQuery, !window.CATTDL?!1:window.CATTDL,!window.CATTDL.DL_gatc?!1:window.CATTDL.DL_gatc, !window.CATTDL.DL_uatc?!1:window.CATTDL.DL_uatc, window, document))
</script>
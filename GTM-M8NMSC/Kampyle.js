<script id='GTM-M8NMSC_kampyle'>
  (function gtm_kampyle(w, d, s, c, u) {
    'use strict';
    if (w && d && s && c && u && /test=kampyle/i.test(document.cookie)) try {
      w[c] = w[c] || {};
      var assign = Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){"use strict";if(void 0===e||null===e)throw new TypeError("Cannot convert first argument to object");for(var r=Object(e),t=1;t<arguments.length;t++){var n=arguments[t];if(void 0!==n&&null!==n){n=Object(n);for(var o=Object.keys(Object(n)),a=0,c=o.length;c>a;a++){var i=o[a],b=Object.getOwnPropertyDescriptor(n,i);void 0!==b&&b.enumerable&&(r[i]=n[i])}}}return r}});
      if (!w.k_config) {
        assign(w[c], {
          'DL_kampyle': {
            'start' : new Date().getTime(),
            'client' : '4313641',
            'script' : u
          }
        });
        var f = d.getElementsByTagName(s)[0];
        var j = d.createElement(s);
        j.async = true;
        j.src = u;
        f.parentNode.insertBefore(j, f);      
      } else if (!document.querySelector('div#kampyleButton')) {
        w.k_config.k_tags_created = false;
        w.k_config.createKampyleTags && w.k_config.createKampyleTags();
      }
    } catch (e) {
      cdl.error && cdl.error('gtm kampyle:' + e);
    } finally {
      return u;
    }
  }(window, document, 'script', 'CATTDL', 'https://assets.kampyle.com/clients/4313641/d/k_config.js'));
</script>

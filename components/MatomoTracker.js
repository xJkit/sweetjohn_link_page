import { useEffect } from "react";
const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const IDSITE = process.env.NEXT_PUBLIC_IDSITE;


/** code snipet from matomo official guide  */
function init() {
  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u = MATOMO_URL;
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', IDSITE]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
}

// export function push(options = []) {
//   if (!window._paq) {
//     window._paq = [];
//   }
//   window._paq.push(options);
// }

export default function MatomoTracker() {
  useEffect(init, [])
}
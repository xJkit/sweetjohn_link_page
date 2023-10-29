import { useEffect } from "react";
import { init } from '@socialgouv/matomo-next';

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const IDSITE = process.env.NEXT_PUBLIC_IDSITE;

export default function MatomoTracker() {
  useEffect(() => {
    init({
      url: MATOMO_URL,
      siteId: IDSITE,
    })
  }, [])
}
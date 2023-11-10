import { useEffect, useRef } from "react";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GA() {
  const isMounted = useRef(false);
  useEffect(() => {
    if (isMounted.current) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_ID);

    isMounted.current = true;
  }, [])

  return (
    <>
      <Script async strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></Script>
    </>
  )
}

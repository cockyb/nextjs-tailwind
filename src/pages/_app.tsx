import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {DefaultSeo} from 'next-seo';

import {pageview} from 'lib/ga';
import {SEO} from 'configs/seo';

import 'styles/globals.scss';
import 'tailwindcss/tailwind.css';

import type {AppProps} from 'next/app';

export default function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}


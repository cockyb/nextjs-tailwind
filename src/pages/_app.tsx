import {DefaultSeo} from 'next-seo';

import {SEO} from 'configs/seo';

import 'styles/globals.scss';
import 'tailwindcss/tailwind.css';

import type {AppProps} from 'next/app';

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}


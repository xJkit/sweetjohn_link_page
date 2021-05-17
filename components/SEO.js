import { NextSeo } from 'next-seo';
import { SEOS } from '../website.config.js';

export default function SEO() {
  return SEOS.map((seo, idx) => <NextSeo key={idx} {...seo} />);
}

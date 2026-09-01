import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description }) => (
  <Helmet>
    <title>{title} | Adarsh Kumar Portfolio</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={`${title} | Adarsh Kumar`} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
  </Helmet>
);

export default SEO;

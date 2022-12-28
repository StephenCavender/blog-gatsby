import React from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'

export const SEO = ({ title, description, pathname, image, tags }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl,
    keywords,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image ? image : defaultImage,
    url: siteUrl + (pathname || ''),
    keywords: tags ? tags : keywords,
  }

  console.log('grabbing seo', title)

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="image:alt" content={seo.description} />
      <link rel="canonical" href={seo.url} />
      <meta name="keywords" content={seo.keywords.join(', ')} />
    </>
  )
}

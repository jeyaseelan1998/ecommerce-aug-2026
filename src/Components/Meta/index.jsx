// React 19 hoists these tags into <head> and removes them on unmount.
export default function Meta({ title, description, keywords, image }) {
  return (
    <>
      {title && <title>{title}</title>}
      {title && <meta property="og:title" content={title} />}
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {image && <meta property="og:image" content={image} />}
    </>
  )
}

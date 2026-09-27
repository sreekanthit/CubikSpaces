import { useState } from "react";

// Shows a soft colour block if an image fails to load.
export default function Img({ src, alt = "", className = "", ...rest }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className={`img-fallback ${className}`} role="img" aria-label={alt} />;
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let didCancel = false;

    if (imageRef && imageSrc === '') {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '75%',
          }
        );
        observer.observe(imageRef);
      } else {
        // Fallback for older browsers
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      if (observer && imageRef) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: imageSrc ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <img
        ref={setImageRef}
        src={imageSrc || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'} // Tiny transparent placeholder
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
      />
    </motion.div>
  );
}; 
import React, { useState, useRef } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import "yet-another-react-lightbox/plugins/captions.css";

type Slide = { src: string; title?: string; description?: string };

type Props = {
  slides: Slide[];
  thumbnailWidth?: number;
  containerStyle?: React.CSSProperties;
};

export default function LightboxGallery({ slides, thumbnailWidth = 320, containerStyle }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const captionsRef = React.useRef(null);

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {slides.map((slide, idx) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.title || `Screenshot ${idx + 1}`}
            style={{ width: thumbnailWidth, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer', marginBottom: '1rem' }}
            onClick={() => { setPhotoIndex(idx); setLightboxOpen(true); }}
          />
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={photoIndex}
        on={{ view: ({ index }) => setPhotoIndex(index ?? 0) }}
        plugins={[Captions]}
        captions={{ ref: captionsRef }}
      />
    </div>
  );
}
import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { XIcon } from 'lucide-react';

export const MediaSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Placeholder images for the gallery
  const galleryImages = [
    {
      src: 'https://raw.githubusercontent.com/hyperonevn/hyperonevnver3/main/1.jpg',
      title: t('media.gallery.event1')
    },
    {
      src: 'https://raw.githubusercontent.com/hyperonevn/hyperonevnver3/main/2.jpg',
      title: t('media.gallery.tech1')
    },
    {
      src: 'https://raw.githubusercontent.com/hyperonevn/hyperonevnver3/main/3.jpg',
      title: t('media.gallery.team1')
    },
    {
      src: 'https://raw.githubusercontent.com/hyperonevn/hyperonevnver3/main/4.jpg',
      title: t('media.gallery.conference1')
    },
    {
      src: 'https://raw.githubusercontent.com/hyperonevn/hyperonevnver3/main/5.jpg',
      title: t('media.gallery.team2')
    },
    {
      src: 'https://raw.githubusercontent.com/hyperonevn/hyperonevnver3/main/6.jpg',
      title: t('media.gallery.office1')
    }
  ];

  return (
    <section id="media" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,209,102,0.05),transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('media.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#00E0FF] to-[#FFD166] mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg">{t('media.description')}</p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="text-white font-medium">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="px-8 py-3 bg-[#00E0FF]/10 text-[#00E0FF] border border-[#00E0FF]/30 rounded-full hover:bg-[#00E0FF]/20 transition-all duration-300"
          >
            {t('media.viewMore')}
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#00E0FF] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <XIcon className="h-8 w-8" />
          </button>

          <div
            className="max-w-4xl max-h-[80vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

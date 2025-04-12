import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

const HeroSection = () => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://movies-latest-ao07.onrender.com/media');
        if (!response.ok) {
          throw new Error('Failed to fetch media');
        }

        const data = await response.json();

        // Add default type if needed
        const formattedData = data.map(item => ({
          ...item,
          type: item.type || 'movie' 
        }));

        setMedia(formattedData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-screen flex justify-center items-center min-h-[200px]">
        <p className="text-white text-lg">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex flex-col justify-center items-center min-h-[300px] pt-32">
        <p className="text-[#d10000] text-md mb-4">
          Failed to load content. Please try again.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-[#d10000] text-white px-6 py-2 rounded cursor-pointer"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="w-full pb-16 bg-[#929baf] min-h-[200px]">
      <div className="container mx-auto text-left px-8 py-8">
        <h1 className="text-white text-3xl font-bold mb-2 uppercase">Trending Now</h1>
        <p className="text-[#ffffffc2]">Hot Streaming now</p>
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={6}
        breakpoints={{
          320: { slidesPerView: 1 },
          575: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 6 },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
      >
        {media.map((item, index) => {
          const linkPath = item.type === 'movie' ? `/media/${item.id}` : `/media/${item.id}`;
          return (
            <SwiperSlide key={`${item.id}-${index}`} className="relative">
              <Link to={linkPath} className="block">
                <div className="h-[250px]">
                  <img
                    src={item.imageURL}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-white text-center mt-2">
                  <h3 className="text-sm font-bold uppercase text-[#ffffffc2]">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeroSection;

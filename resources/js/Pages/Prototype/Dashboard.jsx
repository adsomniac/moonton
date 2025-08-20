import Authenticated from "@/Layouts/Authenticated/Index";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import { Head } from "@inertiajs/react";
import { useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Dashboard() {
    const movieData = [
        { id: 1, title: "The Batman in Love", genre: "Action • Horror", rating: "4.5/5.0", slug: "the-batman-in-love" },
        { id: 2, title: "Spider-Man Returns", genre: "Action • Adventure", rating: "4.2/5.0", slug: "spider-man-returns" },
        { id: 3, title: "Wonder Woman", genre: "Action • Fantasy", rating: "4.8/5.0", slug: "wonder-woman" },
        { id: 4, title: "Black Panther", genre: "Action • Sci-Fi", rating: "4.6/5.0", slug: "black-panther" },
        { id: 5, title: "Doctor Strange", genre: "Action • Fantasy", rating: "4.3/5.0", slug: "doctor-strange" },
    ];

    return (
        <Authenticated>
            <Head>
                <title>Dashboard</title>
                <style>{`
                    /* Custom Swiper Styles */
                    .featured-swiper {
                        width: 100%;
                        padding: 20px 0;
                        overflow: visible;
                    }
                    
                    .featured-swiper .swiper-slide {
                        width: 520px !important;
                        height: 340px;
                        flex-shrink: 0;
                    }
                    
                    .browse-swiper {
                        width: 100%;
                        padding: 20px 0;
                        overflow: visible;
                    }
                    
                    .browse-swiper .swiper-slide {
                        width: 250px !important;
                        height: 340px;
                        flex-shrink: 0;
                    }
                    
                    /* Navigation buttons */
                    .swiper-button-next,
                    .swiper-button-prev {
                        background: rgba(0, 0, 0, 0.5) !important;
                        width: 50px !important;
                        height: 50px !important;
                        border-radius: 50% !important;
                        color: #fff !important;
                        margin-top: -25px !important;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
                        backdrop-filter: blur(10px);
                        transition: all 0.3s ease;
                    }
                    
                    .swiper-button-next:after,
                    .swiper-button-prev:after {
                        font-size: 18px !important;
                        font-weight: bold !important;
                    }
                    
                    .swiper-button-next:hover,
                    .swiper-button-prev:hover {
                        background: rgba(0, 0, 0, 0.8) !important;
                        transform: scale(1.1);
                    }
                    
                    .swiper-button-prev {
                        left: 10px !important;
                    }
                    
                    .swiper-button-next {
                        right: 10px !important;
                    }
                    
                    /* Hide buttons when not hovering over swiper */
                    .featured-swiper .swiper-button-next,
                    .featured-swiper .swiper-button-prev,
                    .browse-swiper .swiper-button-next,
                    .browse-swiper .swiper-button-prev {
                        opacity: 0;
                        transition: opacity 0.3s ease;
                    }
                    
                    .featured-swiper:hover .swiper-button-next,
                    .featured-swiper:hover .swiper-button-prev,
                    .browse-swiper:hover .swiper-button-next,
                    .browse-swiper:hover .swiper-button-prev {
                        opacity: 1;
                    }
                    
                    /* Pagination */
                    .swiper-pagination {
                        bottom: 10px !important;
                        left: 50% !important;
                        transform: translateX(-50%) !important;
                        width: auto !important;
                    }
                    
                    .swiper-pagination-bullet {
                        background: rgba(255,255,255,0.4) !important;
                        opacity: 1 !important;
                        width: 12px !important;
                        height: 12px !important;
                        margin: 0 6px !important;
                        transition: all 0.3s ease !important;
                    }
                    
                    .swiper-pagination-bullet-active {
                        background: #fff !important;
                        transform: scale(1.2) !important;
                    }
                    
                    /* Container spacing */
                    .movie-section {
                        padding: 20px 0;
                    }
                    
                    .section-title {
                        font-weight: 600;
                        font-size: 22px;
                        color: #000;
                        margin-bottom: 20px;
                        padding-left: 20px;
                    }
                `}</style>
            </Head>

            <div className="movie-section">
                {/* Featured Movies Section */}
                <div className="section-title">Featured Movies</div>
                <Swiper
                    modules={[Navigation, Pagination]}
                    className="featured-swiper"
                    spaceBetween={30}
                    slidesPerView="auto"
                    navigation={true}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    grabCursor={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 'auto',
                            spaceBetween: 30,
                        },
                    }}
                >
                    {movieData.map((movie) => (
                        <SwiperSlide key={`featured-${movie.id}`}>
                            <FeaturedMovie movie={movie} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Browse Movies Section */}
                <div className="section-title" style={{ marginTop: '60px' }}>Browse</div>
                <Swiper
                    modules={[Navigation, Pagination]}
                    className="browse-swiper"
                    spaceBetween={30}
                    slidesPerView="auto"
                    navigation={true}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    grabCursor={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 'auto',
                            spaceBetween: 30,
                        },
                    }}
                >
                    {movieData.map((movie) => (
                        <SwiperSlide key={`browse-${movie.id}`}>
                            <MovieCard movie={movie} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Authenticated>
    );
}
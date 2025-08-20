import Authenticated from "@/Layouts/Authenticated/Index";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";
import { Head } from "@inertiajs/react";
import { useEffect, useRef } from "react";

export default function Dashboard() {
    const featuredFlickityRef = useRef(null);
    const browseFlickityRef = useRef(null);

    const featuredFlickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: false,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: true,
        draggable: true,
        freeScroll: false,
        percentPosition: false,
        resize: true,
        imagesLoaded: true,
    };

    const browseFlickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: false,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: true,
        draggable: true,
        freeScroll: false,
        percentPosition: false,
        resize: true,
        imagesLoaded: true,
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            // Resize featured flickity
            if (featuredFlickityRef.current && featuredFlickityRef.current.flickity) {
                console.log('Featured Flickity instance:', featuredFlickityRef.current.flickity);
                featuredFlickityRef.current.flickity.resize();
                featuredFlickityRef.current.flickity.reloadCells();
            }

            // Resize browse flickity
            if (browseFlickityRef.current && browseFlickityRef.current.flickity) {
                console.log('Browse Flickity instance:', browseFlickityRef.current.flickity);
                browseFlickityRef.current.flickity.resize();
                browseFlickityRef.current.flickity.reloadCells();
            }
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const movieData = [
        { id: 1, title: "The Batman in Love", genre: "Action • Horror", rating: "4.5/5.0" },
        { id: 2, title: "Spider-Man Returns", genre: "Action • Adventure", rating: "4.2/5.0" },
        { id: 3, title: "Wonder Woman", genre: "Action • Fantasy", rating: "4.8/5.0" },
        { id: 4, title: "Black Panther", genre: "Action • Sci-Fi", rating: "4.6/5.0" },
        { id: 5, title: "Doctor Strange", genre: "Action • Fantasy", rating: "4.3/5.0" },
    ];

    return (
        <Authenticated>
            <Head>
                <title>Dashboard</title>
                <style>{`
                    /* Base styles */
                    .movie-section {
                        width: 100%;
                        overflow: visible;
                        padding: 20px 0;
                    }

                    /* Featured Movies Flickity */
                    .featured-flickity {
                        width: 100% !important;
                        min-height: 400px !important;
                        overflow: visible !important;
                        margin-bottom: 40px;
                    }
                    
                    .featured-flickity .flickity-enabled {
                        position: relative;
                        width: 100%;
                    }
                    
                    .featured-flickity .flickity-viewport {
                        overflow: hidden;
                        position: relative;
                        width: 100%;
                        height: 380px;
                    }
                    
                    .featured-flickity .flickity-slider {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        display: flex !important;
                        align-items: flex-start !important;
                    }
                    
                    .featured-flickity .flickity-cell {
                        width: 520px !important;
                        height: 340px !important;
                        margin-right: 30px !important;
                        flex-shrink: 0 !important;
                        position: relative !important;
                        border: 1px solid #00ff00; /* Debug border */
                    }

                    /* Browse Movies Flickity */
                    .browse-flickity {
                        width: 100% !important;
                        min-height: 400px !important;
                        overflow: visible !important;
                    }
                    
                    .browse-flickity .flickity-enabled {
                        position: relative;
                        width: 100%;
                    }
                    
                    .browse-flickity .flickity-viewport {
                        overflow: hidden;
                        position: relative;
                        width: 100%;
                        height: 380px;
                    }
                    
                    .browse-flickity .flickity-slider {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        display: flex !important;
                        align-items: flex-start !important;
                    }
                    
                    .browse-flickity .flickity-cell {
                        width: 250px !important;
                        height: 340px !important;
                        margin-right: 30px !important;
                        flex-shrink: 0 !important;
                        position: relative !important;
                        border: 1px solid #ff0000; /* Debug border */
                    }

                    /* Common button styles */
                    .flickity-button {
                        background: rgba(255,255,255,0.8) !important;
                        border: none !important;
                        color: #333 !important;
                    }

                    .flickity-button:hover {
                        background: rgba(255,255,255,1) !important;
                    }

                    .flickity-enabled:focus {
                        outline: none;
                    }
                `}</style>
            </Head>
            <div className="movie-section">
                {/* Featured Movies Section */}
                <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                <div style={{ width: '100%', minHeight: '400px', marginBottom: '40px' }}>
                    <Flickity
                        className="featured-flickity"
                        elementType="div"
                        options={featuredFlickityOptions}
                        disableImagesLoaded={false}
                        flickityRef={c => featuredFlickityRef.current = c}
                        reloadOnUpdate={true}
                    >
                        {movieData.map((movie) => (
                            <FeaturedMovie key={`featured-${movie.id}`} movie={movie} />
                        ))}
                    </Flickity>
                </div>

                {/* Browse Movies Section */}
                <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                <div style={{ width: '100%', minHeight: '400px' }}>
                    <Flickity
                        className="browse-flickity"
                        elementType="div"
                        options={browseFlickityOptions}
                        disableImagesLoaded={false}
                        flickityRef={c => browseFlickityRef.current = c}
                        reloadOnUpdate={true}
                    >
                        {movieData.map((movie) => (
                            <MovieCard key={`browse-${movie.id}`} movie={movie} />
                        ))}
                    </Flickity>
                </div>
            </div>
        </Authenticated>
    );
}
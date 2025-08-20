export default function FeaturedMovie({ movie }) {

    return (
        <div
            className="relative overflow-hidden group cursor-pointer"
            style={{
                width: '520px',
                height: '340px',
                marginRight: '30px',
                flexShrink: 0,
                backgroundColor: '#f0f0f0', // Temporary background untuk debug
                display: 'block', // Ensure display
                minWidth: '520px' // Prevent shrinking
            }}
        >
            <img
                src="/images/featured-1.png"
                className="object-cover rounded-[30px] w-full h-full"
                alt={movie.title}
                loading="lazy"
                onError={(e) => {
                    console.log('Image failed to load:', e.target.src);
                    // Fallback ke placeholder jika gambar tidak ada
                    e.target.style.backgroundColor = '#ddd';
                    e.target.style.display = 'flex';
                    e.target.style.alignItems = 'center';
                    e.target.style.justifyContent = 'center';
                    e.target.innerHTML = 'Image Not Found';
                }}
                onLoad={() => console.log('Image loaded successfully')}
            />

            {/* Rating Badge */}
            <div className="rating absolute top-0 left-0 z-10">
                <div className="p-[30px] flex items-center gap-1">
                    <img
                        src="/icons/ic_star.svg"
                        alt="Rating"
                        onError={(e) => {
                            // Fallback jika icon tidak ada
                            e.target.style.display = 'none';
                        }}
                    />
                    <span className="text-sm font-medium text-white mt-1">
                        {movie.rating}
                    </span>
                </div>
            </div>

            {/* Movie Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px] rounded-br-[28px] flex justify-between items-center px-7 h-[130px] z-10">
                <div>
                    <div className="font-medium text-[22px] text-white">
                        {movie.title}
                    </div>
                    <p className="mb-0 text-white text-sm font-light">
                        {movie.genre}
                    </p>
                </div>

                {/* Play Button */}
                <div className="translate-x-[100px] group-hover:translate-x-0 transition ease-in-out duration-500">
                    <img
                        src="/icons/ic_play.svg"
                        width="50"
                        alt="Play"
                        className="hover:scale-110 transition-transform"
                        onError={(e) => {
                            // Fallback jika icon tidak ada
                            e.target.style.display = 'none';
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
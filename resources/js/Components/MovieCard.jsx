import { Link } from "@inertiajs/react";

export default function MovieCard({ movie }) {
    console.log('Rendering MovieCard:', movie); // Debug log

    return (
        <div
            className="relative overflow-hidden group cursor-pointer"
            style={{
                width: '250px',
                height: '340px',
                marginRight: '30px',
                flexShrink: 0,
                backgroundColor: '#f0f0f0', // Temporary background untuk debug
                display: 'block',
                minWidth: '250px'
            }}
        >
            <img
                src="/images/browse-1.png"
                className="object-cover rounded-[30px] w-full h-full"
                alt={movie.title || movie.name}
                onError={(e) => {
                    console.log('Browse image failed to load:', e.target.src);
                    // Fallback ke placeholder jika gambar tidak ada
                    e.target.style.backgroundColor = '#ddd';
                    e.target.style.display = 'flex';
                    e.target.style.alignItems = 'center';
                    e.target.style.justifyContent = 'center';
                    e.target.innerHTML = 'Browse Image';
                }}
                onLoad={() => console.log('Browse image loaded successfully')}
            />

            {/* Movie Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px] rounded-br-[28px]">
                <div className="px-7 pb-7 pt-10">
                    <div className="font-medium text-xl text-white">
                        {movie.title || movie.name}
                    </div>
                    <p className="mb-0 text-gray-300 text-base mt-[10px]">
                        {movie.genre}
                    </p>
                </div>
            </div>

            {/* Play Button */}
            <div className="absolute top-1/2 left-1/2 translate-y-[500px] group-hover:-translate-y-1/2 -translate-x-1/2 z-20 transition ease-in-out duration-500">
                <Link href={route('prototype.movie.show', movie.slug )}>
                    <img
                        src="/icons/ic_play.svg"
                        width="50"
                        alt="Play"
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />
                </Link>
            </div>
        </div >
    );
}
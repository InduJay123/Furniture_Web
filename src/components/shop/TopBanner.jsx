import livingRoom from "../../assets/hero-living-room.jpg";

const TopBanner = () => {
    return(
        <div className="h-40 p-2 bg-cover bg-center flex items-center justify-center"
            style={{
            backgroundImage: `url(${livingRoom})`,
        }}> 
            <h1 className="text-white">Timeless Elegance |</h1>
            <p>Explore today</p>
        </div>
    )
}

export default TopBanner;
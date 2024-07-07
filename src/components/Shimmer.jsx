
const ShimmerCard = () => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="shimmer-card"></div>
            <div className="shimmer-details">
                <div className="shimmer-line shimmer-md"></div>
                <div className="shimmer-line shimmer-sm"></div>
            </div>
        </div>
    )
}

const Shimmer = () => {
    return (
        <div className="row">
            {[...Array(12)].map((_, i) => (
                <ShimmerCard key={i} />
            ))}
        </div>
    );
}
export default Shimmer;

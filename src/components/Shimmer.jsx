
const ShimmerCard = () => {
    return (
        <div>
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
        <div>
            {[...Array(12)].map((_, i) => (
                <ShimmerCard key={i} />
            ))}
        </div>
    );
}
export default Shimmer;

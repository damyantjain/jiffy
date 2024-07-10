
const ShimmerCard = () => {
    return (
        <div className="h-72">
            <div className="h-44 rounded-2xl bg-gradient-to-r from-[#f0f0f0] to-[#d9d9d9] "></div>
            <div className="">
                <div className="shimmer-line bg-gradient-to-r from-[#f0f0f0] to-[#d9d9d9] w-7/12 rounded-md h-4 mt-3"></div>
                <div className="shimmer-line bg-gradient-to-r from-[#f0f0f0] to-[#d9d9d9] w-4/12 rounded-md h-4 mt-3"></div>
            </div>
        </div>
    )
}

const ShimmerRestaurant = () => {
    return (
        <div className="grid grid-cols-4 gap-5 mx-52 mt-5">
            {[...Array(12)].map((_, i) => (
                <ShimmerCard key={i} />
            ))}
        </div>
    );
}
export default ShimmerRestaurant;

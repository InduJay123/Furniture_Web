import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="h-16 flex items-center gap-3 px-6 border-b bg-[#faf7f2]">
                <button onClick={() => navigate(-1)} className="text-2xl">←</button>
                <h1 className="text-2xl font-serif">Checkout</h1>
            </div>
        </div>
    )
}   

export default Checkout;
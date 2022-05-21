import leftarrow from "../assets/leftarrow.png";
import OrderCard from "../components/OrderCard";

export default function OrderPage() {
  return (
    <>
      <div className="container-sm h-full bg-[#EFEAD8]">
        <div className="bg-[#1F3933] h-[165px] p-4">
          <div className="grid grid-cols-10 mb-4">
            <img src={leftarrow} alt="" className="h-6 w-6" />
            <p className="col-span-9 text-white font-semibold text-2xl mt-[-6px]">
              Your Order
            </p>
          </div>
          <p className="mb-2 text-lg text-white">Pickup Store</p>
          <select
            id="countries"
            className="bg-gray-50 text-white font-medium text-m rounded-lg w-full p-2.5 bg-[#1F3933]"
          >
            <option selected>Citraraya Tangerang - 1 km</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="flex flex-col mb-[60px]">
          <OrderCard />
        </div>
        <div className="flex flex-col mb-[60px]">
          <div className="w-full h-[100px] p-4 ">
            <div className="w-full h-full bg-white rounded-[30px]">
              <div className="flex flex-row justify-end items-center p-4 gap-x-10">
                <div class="basis-1/3 text-2xl font-bold">IDR 105000</div>
                <div class="basis-1/3">
                  <button className="bg-[#1F3933] w-[115px] h-10 rounded-[30px] text-white text-lg font-semibold">
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

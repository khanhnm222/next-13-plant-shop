import {
  IconCashback,
  IconDelivery,
  IconServiceHour,
} from "@/components/icons";

const Features = () => {
  return (
    <div className="container">
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <IconDelivery />
          <div>
            <h4 className="font-medium capitalize text-lg">
              Free Shipping
            </h4>
            <p className="text-gray-500 text-sm">Order over 200.000 VND</p>
          </div>
        </div>
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <IconCashback />
          <div>
            <h4 className="font-medium capitalize text-lg">Money Rturns</h4>
            <p className="text-gray-500 text-sm">7 days money returs</p>
          </div>
        </div>
        <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <IconServiceHour />
          <div>
            <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
            <p className="text-gray-500 text-sm">Customer support</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
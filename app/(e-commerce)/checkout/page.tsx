import Image from "next/image";
import React from "react";

const Checkout = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Column: Order Summary */}
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Your Order</h2>
          <div className="space-y-4">
            {/* Product Items */}
            <div className="flex items-center space-x-4">
              <Image
                src={"/images/imageDetail.png"}
                alt="product"
                width={40}
                height={40}
                className="rounded"
              />

              <div>
                <p>T-Shirt</p>
                <p className="text-gray-600">Color: Green, Size: Large</p>
                <p>$174.00</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/path-to-jacket-image.jpg"
                alt="Jacket"
                className="w-20 h-20 rounded-lg"
              />
              <div>
                <p>Men’s Dri-FIT Golf Jacket</p>
                <p className="text-gray-600">Color: Ocean, Size: Large</p>
                <p>$100.00</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/path-to-shoes-image.jpg"
                alt="Shoes"
                className="w-20 h-20 rounded-lg"
              />
              <div>
                <p>Tatrum 2 "Red Cement"</p>
                <p className="text-gray-600">Size: 11.5</p>
                <p>$250.00</p>
              </div>
            </div>
          </div>

          {/* Discount Code */}
          <div className="mt-8 flex space-x-2">
            <input
              type="text"
              placeholder="Add discount code"
              className="flex-1 p-2 border border-gray-300 rounded-lg"
            />
            <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
              Apply
            </button>
          </div>

          {/* Order Total */}
          <div className="mt-8 space-y-2">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>$524.00</p>
            </div>
            <div className="flex justify-between">
              <p>Discount</p>
              <p>$0</p>
            </div>
            <div className="flex justify-between font-bold">
              <p>Order total</p>
              <p>$524.00</p>
            </div>
          </div>

          {/* Shipping Method */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Shipping method</h2>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="radio" name="shipping" className="form-radio" />
                <span className="ml-2">
                  Free shipping (7-10 business days) - $0
                </span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="shipping" className="form-radio" />
                <span className="ml-2">
                  Regular shipping (3-5 business days) - $7.50
                </span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="shipping" className="form-radio" />
                <span className="ml-2">
                  Express shipping (1-3 business days) - $22.50
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Column: Payment Details */}
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Payment details</h2>

          {/* Shipping Address */}
          <h3 className="text-lg font-medium mb-2">Shipping address</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Last name"
              className="p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email address"
              className="p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Address"
              className="col-span-2 p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="City"
              className="p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Postal code"
              className="p-2 border border-gray-300 rounded-lg"
            />
            <select className="p-2 border border-gray-300 rounded-lg">
              <option>Select region</option>
              {/* Add options here */}
            </select>
          </div>

          {/* Payment Method */}
          <h3 className="text-lg font-medium mt-8 mb-2">
            Select payment method
          </h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2 border border-gray-300 p-2 rounded-lg">
              <input type="radio" name="payment" className="form-radio" />
              <span>Debit/Credit Card</span>
            </label>
            <label className="flex items-center space-x-2 border border-gray-300 p-2 rounded-lg">
              <input type="radio" name="payment" className="form-radio" />
              <span>Virtual account</span>
            </label>
          </div>

          {/* Card Details */}
          <div className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Card number"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Expiration date (MM/YY)"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Security code"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Use Shipping Address */}
          <div className="mt-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">
                Use shipping address as billing address
              </span>
            </label>
          </div>

          {/* Pay Button */}
          <button className="mt-8 w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800">
            Pay $524.00
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

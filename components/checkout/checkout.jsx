import React, { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";

const Checkout = ({ open, setOpen, products }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const createSession = async () => {
    setIsLoading(true);
    // Mock API call for demonstration
    // Replace this with your actual API endpoint
    // const { data } = await axios.post("/api/create-session", {
    //   items: products,
    // });
    // const url = data.payment_url.replace("checkout", "pos"); add this for POS mode
    // router.push(data.payment_url);

    // Mock data for demonstration
    console.log("Creating session...");
    setTimeout(() => {
      console.log("Session created!");
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    const price = getPrice(products);
    setTotal(price);
  }, [products]);

  const getPrice = (products) => {
    let price = 0;
    products?.forEach((prod) => {
      price += prod.price * prod.quantity;
    });
    return price;
  };

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-y-auto"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Shopping cart
                    </Dialog.Title>
                    <div className="mt-5">
                      <ul className="divide-y divide-gray-200">
                        {products?.map((product) => (
                          <li key={product.id} className="py-4 flex">
                            <div className="flex-shrink-0 mr-4">
                              <img
                                className="h-10 w-10 rounded-md"
                                src={product.image}
                                alt={product.imageAlt}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {product.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                {product.color}
                              </p>
                              <p className="text-sm text-gray-500">
                                Qty {product.quantity}
                              </p>
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-900">
                                ${product.price.toFixed(2)}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={createSession}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin h-5 w-5 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12c0-3.042-1.135-5.824-3-7.938l-3 2.647A7.963 7.963 0 0116 12h4zm-7-6.416V0h-2v5.584a8.014 8.014 0 012 0zM4 12h2V6.416a8.014 8.014 0 00-2 0V12zm8 6.416V24h2v-5.584a8.014 8.014 0 01-2 0zM20 12l-3 2.647V9.353L20 12z"
                      ></path>
                    </svg>
                  ) : (
                    <span>Checkout</span>
                  )}
                </button>
                <button
                  onClick={() => setOpen(false)}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Checkout;

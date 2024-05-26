"use client";
import React, { useState } from "react";
import { Disclosure, Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Checkout from "@/components/checkout/checkout";
import { useStateContext } from "@/context/Context";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Page = () => {
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [balance, setBalance] = useState(null);
  const [done, setDone] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);

  const { prod } = useStateContext();

  const [product, setProduct] = useState({
    name: "Default Event Name",
    price: 5.0,
    rating: 3,
    images: [
      {
        id: 1,
        name: "Default Image",
        src: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1711530735/eventmintcloud_o63cif.png",
        alt: "Default Image Alt Text",
        ptice: "$15",
      },
    ],
    colors: [{ name: "Black", bgColor: "bg-black", selectedColor: "" }],
    description: "Default event description.",
    details: [{ name: "Feature", items: ["Feature 1", "Feature 2"] }],
  });

  return (
    <>
      <Checkout products={prod} open={open} setOpen={setOpen} />
      <div className="">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Tab.Group as="div" className="flex flex-col-reverse">
              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                  {product?.images.map((image) => (
                    <Tab
                      key={image.id}
                      className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-index text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                    >
                      {({ selected }) => (
                        <>
                          <span className="sr-only"> {image.name} </span>
                          <span className="absolute inset-0 overflow-hidden rounded-md">
                            <img
                              src={image.src}
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </span>
                          <span
                            className={classNames(
                              selected ? "ring-index" : "ring-transparent",
                              "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
              </div>

              <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
                {product?.images.map((image) => (
                  <Tab.Panel key={image.id}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover object-center sm:rounded-lg"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-white">
                {product.title}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-white">
                  $ {product?.price}
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-3">
                <h3 className="sr-only text-white">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? "text-index"
                            : "text-gray-300",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div
                  className="space-y-6 text-base text-white"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              {/* Colors */}
              <h1 className="mb-3 mt-10 text-white">Quantity</h1>
              <select
                defaultValue={1}
                onChange={(e) => {
                  setQuantity(parseInt(e.target.value));
                }}
                className="w-44 h-12 border rounded-lg px-2"
              >
                {[1, 2, 3, 4, 5, 6, 7].map((val, index) => {
                  return (
                    <option key={index} value={val}>
                      {val}
                    </option>
                  );
                })}
              </select>

              <div className="sm:flex-col1 mt-10 flex">
                <button
                  onClick={() => {
                    // Implement your purchase logic here
                  }}
                  className="max-w-xs flex-1 rounded-md border border-transparent bg-index py-3 px-8 text-base font-medium text-white hover:bg-index-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-index"
                >
                  Add to bag
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

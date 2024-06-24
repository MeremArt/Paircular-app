"use client";
import React, { useEffect, useState } from "react";
import { Disclosure, Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Checkout from "@/components/checkout/checkout";
import { useStateContext } from "@/context/Context";
import axios, { AxiosResponse } from "axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Page = () => {
  const [amount] = useState("10000");
  const [email] = useState("ugofranklin22@gmil.com");
  const [fullName] = useState("Ugo Chinemerem Franklin");
  const [authorizationUrl, setAuthorizationUrl] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);

  const { prod } = useStateContext();

  useEffect(() => {
    postData();
  }, []);

  const postData = async () => {
    try {
      const response = await axios.post(
        "https://paircular-server-vdwt.onrender.com/api/v1/paircular-holmes/payment/",
        {
          amount: amount,
          email: email,
          full_name: fullName,
        }
      );

      const url = response.data.data.data.authorization_url;
      setAuthorizationUrl(url);
      console.log("Authorization URL:", url);
    } catch (error) {
      console.error("There was an error making the POST request!", error);
    }
  };

  const handleButtonClick = () => {
    window.location.href = authorizationUrl;
  };

  const [product, setProduct] = useState({
    title: "Sunny Three-Bedroom Flat with Balcony",
    price: 5.0,
    rating: 3,
    images: [
      {
        id: 1,
        name: "Sunny Three-Bedroom Flat with Balcony",
        src: "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1711530735/eventmintcloud_o63cif.png",
        alt: "Default Image Alt Text",
        ptice: "$15",
      },
    ],
    colors: [{ name: "Black", bgColor: "bg-black", selectedColor: "" }],
    description:
      "Relax in the cozy living room equipped with a large flat-screen TV and plush sofas.",
    details: [{ name: "Feature", items: ["Feature 1", "Feature 2"] }],
  });

  useEffect(() => {
    // Simulate fetching data
    // setProduct(prod.find((p) => p.id === id)); // Uncomment this when fetching actual product
  }, [prod]);

  return (
    <>
      <Checkout products={prod} open={open} setOpen={setOpen} />
      <div className="">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Tab.Group as="div" className="flex flex-col-reverse">
              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                  {product.images.map((image) => (
                    <Tab
                      key={image.id}
                      className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-gray-50 text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                    >
                      {({ selected }) => (
                        <>
                          <span className="sr-only">{image.name}</span>
                          <span className="absolute inset-0 overflow-hidden rounded-md">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="h-full w-full object-cover object-center"
                            />
                          </span>
                          <span
                            className={classNames(
                              selected ? "ring-indigo-500" : "ring-transparent",
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
                {product.images.map((image) => (
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
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {product.title}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">
                  ${product.price}
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-3">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? "text-wizard"
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
                  className="space-y-6 text-base text-gray-700"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <h1 className="mb-3 mt-10 text-gray-900">Number of people </h1>
              <select
                defaultValue={1}
                onChange={(e) => {
                  setQuantity(parseInt(e.target.value));
                }}
                className="w-44 h-12 border rounded-lg px-2"
              >
                {[1, 2, 3, 4, 5, 6, 7].map((val) => (
                  <option key={val} value={val}>
                    {val}
                  </option>
                ))}
              </select>

              <div className="sm:flex-col1 mt-10 flex">
                <button
                  onClick={handleButtonClick}
                  className="max-w-xs flex-1 rounded-md border border-transparent bg-wizard py-3 px-8 text-base font-medium text-white hover:bg-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Unlock Info
                </button>
              </div>

              <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>

                <div className="divide-y divide-gray-200 border-t">
                  {product.details.map((detail) => (
                    <Disclosure key={detail.name} as="div">
                      {({ open }) => (
                        <>
                          <h3>
                            <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                              <span
                                className={classNames(
                                  open ? "text-indigo-600" : "text-gray-900",
                                  "text-sm font-medium"
                                )}
                              >
                                {detail.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel
                            as="div"
                            className="prose prose-sm pb-6"
                          >
                            <ul role="list">
                              {detail.items.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

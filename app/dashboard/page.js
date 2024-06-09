"use client";
import React, { useState } from "react";
import axios from "axios";
import { DashboardLayout } from "@/components/Dashboard/Layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./search.module.css";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedCountry, setSelectedCountry] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [numberOfPeople, setNumberOfPeople] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.get(
  //       "https://paircular-server-vdwt.onrender.com/api/v1/paircular-holmes/product/searchResults",
  //       {
  //         params: {
  //           location: selectedCountry,
  //           availabilityDate: startDate.toISOString(),
  //           occupants: numberOfPeople,
  //         },
  //       }
  //     );

  //     if (Array.isArray(response.data)) {
  //       setSearchResults(response.data);
  //       console.log("Search results:", response.data);
  //     } else {
  //       console.error(
  //         "Invalid data format returned from the server:",
  //         response.data
  //       );
  //       setSearchResults([]);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     setSearchResults([]);
  //   }
  // };

  const data = [
    {
      id: 1,
      title: "Sunny Three-Bedroom Flat with Balcony",
      location: "nigeria",
      availabilityDate: "2024-03-21T00:00:00.000Z",
      occupants: 2,
      description:
        "Relax in the cozy living room equipped with a large flat-screen TV and plush sofas",
    },
    {
      id: 2,
      title: "Stylish Condo with Riverfront Access",
      location: "canada",
      availabilityDate: "2024-03-22T00:00:00.000Z",
      occupants: 4,
      description:
        "This spacious apartment offers a comfortable living space with breathtaking views of the city skyline",
      // Add more properties as needed
    },
    {
      id: 3,
      title: "Elegant Townhouse with Private Garden",
      location: "canada",
      availabilityDate: "2024-03-22T00:00:00.000Z",
      occupants: 4,
      description:
        "Enjoy the convenience of a fully equipped kitchen with stainless steel appliances and granite countertops. ",
      // Add more properties as needed
    },
    // Add more objects for additional data
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredResults = data.filter((item) => {
      return (
        item.location.toLowerCase() === selectedCountry.toLowerCase() &&
        item.availabilityDate === startDate.toISOString() &&
        item.occupants === parseInt(numberOfPeople)
      );
    });

    setSearchResults(filteredResults);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <DashboardLayout>
      <main>
        <section>
          <div className={styles.container}>
            <form onSubmit={handleSubmit}>
              <div className={styles.wrapper}>
                <div className={styles.searchcontainer}>
                  <select
                    id="country"
                    className={styles.inputstyle}
                    name="country"
                    onChange={handleCountryChange}
                    required
                  >
                    <option value="">Select country</option>
                    <option value="nigeria">Nigeria</option>
                    <option value="canada">Canada</option>
                    <option value="chicago">Chicago</option>
                    <option value="boston">Boston</option>
                  </select>
                  {/* Render state/province select based on selected country */}
                  {selectedCountry === "nigeria" && (
                    <select
                      id="nigeriaState"
                      className={styles.inputstyle}
                      name="nigeriaState"
                      required
                    >
                      <option value="">Select state</option>
                      <option value="">Select state</option>
                      <option value="Abia">Abia</option>
                      <option value="Adamawa">Adamawa</option>
                      <option value="Akwa Ibom">Akwa Ibom</option>
                      <option value="Anambra">Anambra</option>
                      <option value="Bauchi">Bauchi</option>
                      <option value="Bayelsa">Bayelsa</option>
                      <option value="Benue">Benue</option>
                      <option value="Borno">Borno</option>
                      <option value="Cross River">Cross River</option>
                      <option value="Delta">Delta</option>
                      <option value="Ebonyi">Ebonyi</option>
                      <option value="Edo">Edo</option>
                      <option value="Ekiti">Ekiti</option>
                      <option value="Enugu">Enugu</option>
                      <option value="Gombe">Gombe</option>
                      <option value="Imo">Imo</option>
                      <option value="Jigawa">Jigawa</option>
                      <option value="Kaduna">Kaduna</option>
                      <option value="Kano">Kano</option>
                      <option value="Katsina">Katsina</option>
                      <option value="Kebbi">Kebbi</option>
                      <option value="Kogi">Kogi</option>
                      <option value="Kwara">Kwara</option>
                      <option value="Lagos">Lagos</option>
                      <option value="Nasarawa">Nasarawa</option>
                      <option value="Niger">Niger</option>
                      <option value="Ogun">Ogun</option>
                      <option value="Ondo">Ondo</option>
                      <option value="Osun">Osun</option>
                      <option value="Oyo">Oyo</option>
                      <option value="Plateau">Plateau</option>
                      <option value="Rivers">Rivers</option>
                      <option value="Sokoto">Sokoto</option>
                      <option value="Taraba">Taraba</option>
                      <option value="Yobe">Yobe</option>
                      <option value="Zamfara">Zamfara</option>
                    </select>
                  )}

                  {selectedCountry === "canada" && (
                    <select
                      id="canadaState"
                      className={styles.inputstyle}
                      name="canadaState"
                      required
                    >
                      <option value="">Select province</option>
                      {/* Add options for Canada provinces */}
                    </select>
                  )}

                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    className={styles.inputstyle}
                  />
                  <input
                    type="Number"
                    className={styles.inputstyle}
                    placeholder="Number of people"
                    onChange={(e) => setNumberOfPeople(e.target.value)}
                  />
                  <button type="submit" className={styles.button}>
                    <FaSearch className={styles.searchIcon} /> Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
        <br />
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {/* Render both dummy data and search results */}
          {[...data, ...searchResults].map((result) => (
            <div
              key={result.id}
              className={`${styles.searchResult} bg-gray-100 p-4 rounded shadow-md mb-4`}
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                <img
                  src={`https://res.cloudinary.com/dtfvdjvyr/image/upload/v1711530735/eventmintcloud_o63cif.png`}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <h3 className="text-sm mt-2 text-dashbg font-semibold">
                {result.title}
              </h3>
              <p className="text-sm">
                <strong>Location:</strong> {result.location}
              </p>
              <p className="text-sm"> {result.description}</p>
              <Link href="/location">
                <button className="bg-wizard hover:bg-hover hover:text-black mt-2 text-white font-bold py-2 px-4 rounded">
                  Subscribe for More Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </DashboardLayout>
  );
};

export default Dashboard;

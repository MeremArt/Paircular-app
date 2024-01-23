"use client";
import { DashboardLayout } from "@/components/Dashboard/Layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./search.module.css";
import React, { useState } from "react";
import "./machine.css";
import { FaSearch } from "react-icons/fa";
const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [useLiveLocation, setUseLiveLocation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling form submission here
    console.log("Form submitted!");
  };

  const handleUseLiveLocation = () => {
    // Add logic to use live location
    console.log("Using live location");
  };

  return (
    <>
      <DashboardLayout>
        <main>
          <section>
            <div className={styles.container}>
              <form onSubmit={handleSubmit}>
                <div className={styles.wrapper}>
                  <div className={styles.searchcontainer}>
                    {/* <input
                      type="text"
                      className={styles.inputstyle}
                      placeholder="Search destination"
                    /> */}
                    <select
                      id="city"
                      className={styles.inputstyle}
                      name="location"
                      required
                    >
                      <option value="">Select destination</option>
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
                    />
                    <button type="submit" className={styles.button}>
                      <FaSearch className={styles.searchIcon} /> Search
                    </button>
                  </div>
                  <div>
                    {/* <button
                      type="button"
                      onClick={handleUseLiveLocation}
                      className={styles.liveLocationButton}
                    >
                      Use Live Location
                    </button> */}
                  </div>
                </div>
              </form>
            </div>
          </section>
        </main>
      </DashboardLayout>
    </>
  );
};

export default Search;

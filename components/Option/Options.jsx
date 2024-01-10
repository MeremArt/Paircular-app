import React, { useState } from "react";
import styles from "./Option.module.css"; // Import the main CSS module
// Import the CSS module for ComponentB
// Import the CSS modules for ComponentC and ComponentD

function Options() {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className={styles.appContainer}>
      {/* <h1>Ancillary Options</h1> */}
      <br />
      <br />
      <div className={styles.buttonContainer}>
        <button
          onClick={() => renderComponent("ComponentA")}
          className={styles.button}
        >
          Our Mission
        </button>
        <button
          onClick={() => renderComponent("ComponentB")}
          className={styles.button}
        >
          Our Vision
        </button>
        <button
          onClick={() => renderComponent("ComponentC")}
          className={styles.button}
        >
          Our Values
        </button>
        <button
          onClick={() => renderComponent("ComponentD")}
          className={styles.button}
        >
          Our Team
        </button>
      </div>
      <br />
      <br />
      <div className={styles.componentContainer}>
        {activeComponent === "ComponentA" && <ComponentA />}
        {activeComponent === "ComponentB" && <ComponentB />}
        {activeComponent === "ComponentC" && <ComponentC />}
        {activeComponent === "ComponentD" && <ComponentD />}
        {/* Include rendering logic for ComponentC and ComponentD */}
      </div>
    </div>
  );
}

function ComponentA() {
  return (
    <div className={styles.component}>
      Paircular Holmes is committed to being your go-to destination for all
      things home. We're dedicated to redefining living experiences by providing
      tailored solutions for every housing need. Your one-stop destination for
      comprehensive home solutions.
    </div>
  );
}

function ComponentB() {
  return (
    <div className={styles.component}>
      Paircular Homes envisions redefine the concept of home, offering not just
      spaces but places where your unique story unfolds, and where every moment
      resonates with comfort and joy.We aspire to be the guiding force in your
      journey to find the perfect home.
    </div>
  );
}
function ComponentC() {
  return (
    <div className={styles.component}>
      {" "}
      Our core values drive us to redefine the housing experience. We prioritize
      innovation, ensuring inventive solutions that enhance lives. Our
      customer-centric approach focuses on trust, personalization, and
      integrity, fostering lasting relationships. Diversity is embraced,
      enriching our community and service. We maintain high-quality standards,
      prioritizing sustainability and community engagement.
    </div>
  );
}
function ComponentD() {
  return (
    <div className={styles.component}>
      Our team thrives on collaboration, integrity, and innovation. We value
      each member's unique skills, fostering an inclusive environment where
      creativity flourishes. Committed to transparency and ethical practices, we
      encourage continuous learning for professional growth. With a shared
      vision, we overcome challenges, celebrating success as a united family
      dedicated to revolutionizing the housing landscape.
    </div>
  );
}
// Implement ComponentC and ComponentD in a similar way

export default Options;

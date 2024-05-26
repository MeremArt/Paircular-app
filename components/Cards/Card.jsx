import React, { useState } from "react";
import { Card as BootstrapCard, Button, Modal } from "react-bootstrap";
import styles from "./card.module.css"; // Your custom styles

const Card = ({ data }) => {
  console.log("Data:", data); // Log the received data

  const [showImage, setShowImage] = useState(false);

  const handleImageClick = () => {
    setShowImage(true);
  };

  const handleClose = () => {
    setShowImage(false);
  };

  // Ensure data is provided and has required fields
  if (
    !data ||
    !data.location ||
    !data.profession ||
    !data.socialMedia ||
    !data.imageUrl
  ) {
    return null; // Return null if data is missing or incomplete
  }

  return (
    <>
      <BootstrapCard
        style={{ width: "18rem" }}
        className={`${styles.card} mb-3`}
      >
        <BootstrapCard.Img
          variant="top"
          src={data.imageUrl}
          alt="Card image"
          className={styles.cardImage}
        />
        <BootstrapCard.Body>
          <BootstrapCard.Title className={styles.cardTitle}>
            {data.profession}
          </BootstrapCard.Title>
          <BootstrapCard.Text className={styles.cardText}>
            <span className={styles.location}>Location: {data.location}</span>
            <br />
            <span className={styles.socialMedia}>
              Social Media: {data.socialMedia}
            </span>
          </BootstrapCard.Text>
          <Button
            variant="primary"
            onClick={handleImageClick}
            className={styles.viewImageButton}
          >
            Contact
          </Button>
        </BootstrapCard.Body>
      </BootstrapCard>

      <Modal show={showImage} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Card Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={data.imageUrl}
            alt="Card image"
            className={styles.modalImage}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Card;

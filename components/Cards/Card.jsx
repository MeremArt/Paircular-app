// Card.js
import React, { useState } from "react";
import { Card as BootstrapCard, Button, Modal } from "react-bootstrap";
import styles from "./card.module.css"; // Your custom styles

const Card = ({ location, profession, socialMedia, imageUrl }) => {
  const [showImage, setShowImage] = useState(false);

  const handleImageClick = () => {
    setShowImage(true);
  };

  const handleClose = () => {
    setShowImage(false);
  };

  // Dummy data for testing
  const dummyData = {
    location: location || "Dummy Location",
    profession: profession || "Dummy Profession",
    socialMedia: socialMedia || "@dummy",
    imageUrl: imageUrl || "https://via.placeholder.com/150", // Placeholder image URL
  };

  return (
    <>
      <BootstrapCard
        style={{ width: "18rem" }}
        className={`${styles.card} mb-3`}
      >
        <BootstrapCard.Img
          variant="top"
          src={dummyData.imageUrl}
          alt="Card image"
          className={styles.cardImage}
        />
        <BootstrapCard.Body>
          <BootstrapCard.Title className={styles.cardTitle}>
            {dummyData.profession}
          </BootstrapCard.Title>
          <BootstrapCard.Text className={styles.cardText}>
            <span className={styles.location}>
              Location: {dummyData.location}
            </span>
            <br />
            <span className={styles.socialMedia}>
              Social Media: {dummyData.socialMedia}
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
            src={dummyData.imageUrl}
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

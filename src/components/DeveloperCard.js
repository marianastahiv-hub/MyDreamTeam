import React from "react";

const DeveloperCard = ({ image, name, position, bio }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.photo} />
      <div style={styles.textContainer}>
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.position}>{position}</p>
        {bio && <p style={styles.bio}>{bio}</p>}
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: "280px",
    padding: "1.5em",
    borderRadius: "15px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    textAlign: "center",
    margin: "1.5em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  photo: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "0.5em",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1.2em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "1em",
    color: "#6a0dad", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
  bio: {
    fontSize: "0.9em",
    color: "#666",
    margin: "1em 0 0 0",
    lineHeight: "1.5",
    textAlign: "center",
  },
};

export default DeveloperCard;


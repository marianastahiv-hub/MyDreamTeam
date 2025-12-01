import React from "react";

const Body = () => {

  const developers = [
    {
      image: "/images/developers/Vlad.jpeg",
      name: "Владсилав Циндрін",
      position: "Студент групи ПЗ-24",
      bio: "Захоплююся веб-розробкою та створенням інноваційних рішень. Прагну постійно розвиватися та вдосконалювати свої навички у програмуванні."
    },
    {
      image: "/images/developers/Mariana.jpg",
      name: "Стахів Мар'яна",
      position: "Студентка групи ПЗ-24",
      bio: "За достатню ціну все можливо. Full-stack розробник."
    },
    {
      image: "/images/developers/Maksym.jpg",
      name: "Максим Коваль",
      position: "Студент групи ПЗ-24",
      bio: "18 рочків. Пишу на C# цікавлюсь backend-розробкою."
    },
    {
      image: "/images/developers/Rostyslav.jpg",
      name: "Барановський Ростислав",
      position: "Студент групи ПЗ-24",
      bio: "Цікавлюся C++ та платформою .NET. Хочу зробити революцію в інформаційних технологіях та підняти програмування на новий рівень"
    },
    {
      image: "/images/developers/photo_2025-12-01_20-09-56.jpg",
      name: "Максим Рапак",
      position: "Студент групи ПЗ-24",
      bio: "Чіл бой."
    }
  ];

  return (
    <main style={styles.body}>
      <div style={styles.card}>
        <img src={"/avatar-default.png"} alt="John Doe" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>John Doe</h2>
          <p style={styles.position}>Software engineer</p>
        </div>
      </div>
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "#6a0dad", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;

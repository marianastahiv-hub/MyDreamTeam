import React from "react";
import DeveloperCard from "./DeveloperCard";

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
      bio: "Чіл гай."
    }
  ];

  return (
    <main style={styles.body}>
      {developers.map((developer, index) => (
        <DeveloperCard
          key={index}
          image={developer.image}
          name={developer.name}
          position={developer.position}
          bio={developer.bio}
        />
      ))}
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    padding: "2em",
  },
};

export default Body;

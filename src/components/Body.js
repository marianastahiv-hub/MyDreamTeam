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
      image: "/avatar-default.png",
      name: "Розробник 2",
      position: "Студент групи ПЗ-24",
      bio: "Біографія розробника 2. Опишіть тут інтереси та навички цього розробника."
    },
    {
      image: "/avatar-default.png",
      name: "Розробник 3",
      position: "Студент групи ПЗ-24",
      bio: "Біографія розробника 3. Опишіть тут інтереси та навички цього розробника."
    },
    {
      image: "/avatar-default.png",
      name: "Розробник 4",
      position: "Студент групи ПЗ-24",
      bio: "Біографія розробника 4. Опишіть тут інтереси та навички цього розробника."
    },
    {
      image: "/avatar-default.png",
      name: "Розробник 5",
      position: "Студент групи ПЗ-24",
      bio: "Біографія розробника 5. Опишіть тут інтереси та навички цього розробника."
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

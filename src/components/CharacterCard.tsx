import React from "react";
import Image from "next/image";
import { CharacterCardProps } from "@/interface/types";
import styles from "@/styles/CharacterCard.module.css";

const CharacterCard: React.FC<CharacterCardProps> = ({ name, image }) => {
  return (
    <div className={styles.characterCard}>
      {/* Replace <img> with <Image /> */}
      <Image
        src={image}
        alt={name}
        width={100} // Set the desired width
        height={100} // Set the desired height
      />
      <p>{name}</p>
    </div>
  );
};

export default CharacterCard;

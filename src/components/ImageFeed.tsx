"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Character } from "@/interface/types";
import CharacterCard from "./CharacterCard";
import styles from "@/styles/ImageFeed.module.css";

const ImageFeed: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const charactersPerPage = 9;

  useEffect(() => {
    // Fetch data from the Rick and Morty API
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currentPage]);

  // Function to handle pagination navigation
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageFeed}>
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </div>
      <div className={styles.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;&lt; {/* This represents "<<" */}
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={characters.length < charactersPerPage}
        >
          &gt;&gt; {/* This represents ">>" */}
        </button>
      </div>
    </div>
  );
};

export default ImageFeed;

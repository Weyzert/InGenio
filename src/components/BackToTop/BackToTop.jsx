import { useEffect, useState } from "react";

import "./BackToTop.css";

import { FaArrowUp } from "react-icons/fa";

function BackToTop() {

  const [mostrar, setMostrar] =
    useState(false);

  useEffect(() => {

    function handleScroll() {

      if (window.scrollY > 300) {
        setMostrar(true);
      } else {
        setMostrar(false);
      }

    }

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);

  function voltarAoTopo() {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  }

  if (!mostrar) return null;

  return (
    <button
      className="back-to-top"
      onClick={voltarAoTopo}
    >

      <FaArrowUp />

    </button>
  );
}

export default BackToTop;
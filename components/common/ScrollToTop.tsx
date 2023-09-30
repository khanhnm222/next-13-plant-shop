'use client'

import { useEffect, useState } from "react";
import { IconUpArrow } from "../icons";

const ScrollToTop = () => {
  const [clientWindow, setClientWindow] = useState<HTMLElement | null>();
  useEffect(() => {
    setClientWindow(window.document.getElementById("btn-back-to-top"));
  }, [])

  // When the user scrolls down 20px from the top of the document, show the button
  const scrollFunction = () => {
    if (clientWindow) {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        clientWindow.classList.remove("hidden");
      } else {
        clientWindow.classList.add("hidden");
      }
    }
  };
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // When the user clicks on the button, scroll to the top of the document
    clientWindow && clientWindow.addEventListener("click", backToTop);
    window.addEventListener("scroll", scrollFunction);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientWindow])

  return (
    <button
      type="button"
      data-te-ripple-init
      data-te-ripple-color="light"
      className="!fixed bottom-5 right-5 hidden rounded-full bg-primary border-white p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-secondary hover:shadow-lg focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-secondary active:shadow-lg"
      id="btn-back-to-top"
    >
      <IconUpArrow />
    </button>
  )
}
export default ScrollToTop
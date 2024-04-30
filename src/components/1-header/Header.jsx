import { useEffect, useRef, useState } from "react";
import "./header.css";

export default function Header() {
  let [showModal, setShowModal] = useState(false);
  let headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.position = "fixed";
        headerRef.current.style.top = "0px  ";
        headerRef.current.style.left = "0";
        headerRef.current.style.right = "0";
        headerRef.current.style.right = "0";
        headerRef.current.style.width = "fit-content";
        headerRef.current.style.margin = "20px auto 0 auto";
        headerRef.current.style.zIndex = "100";
      } else {
        headerRef.current.style.position = "relative";
        headerRef.current.style.margin = "0";
      }
    });
  }, []);
  // dark mode
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add(
        localStorage.getItem("currentMode") ?? "dark"
      );
    }
  }, [theme]);
  return (
    <header>
      <button
        className="menu icon-menu"
        onClick={() => {
          setShowModal(true);
        }}
      />

      <div />

      <nav ref={headerRef}>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#main">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        className="icon-moon-o"
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currentMode"));
        }}
      />

      {showModal && (
        <div className="fixed">
          <ul>
            <li
              onClick={() => {
                setShowModal(false);
              }}
            >
              <button className="icon-clear" />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

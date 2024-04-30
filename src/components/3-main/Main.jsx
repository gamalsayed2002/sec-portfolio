import "./main.css";

import { useState } from "react";
import maindata from "../../data/items.json";
export default function Main() {
  let [currentActive, setCurrentActive] = useState("all");
  let [mainData, setMainData] = useState(maindata);
  return (
    <main id="main">
      <section className="left-section">
        <button
          className={currentActive === "all" ? "active" : null}
          onClick={() => {
            setCurrentActive("all");
            setMainData(maindata);
          }}
        >
          all projects
        </button>
        <button
          className={currentActive === "css" ? "active" : null}
          onClick={() => {
            setCurrentActive("css");
            let data = maindata.filter((i) => {
              return i.category === "css";
            });
            setMainData(data);
          }}
        >
          HTML & CSS
        </button>
        <button
          className={currentActive === "js" ? "active" : null}
          onClick={() => {
            setCurrentActive("js");
            let data = maindata.filter((i) => {
              return i.category === "js";
            });
            setMainData(data);
          }}
        >
          JavaScript
        </button>
        <button
          className={currentActive === "react" ? "active" : null}
          onClick={() => {
            setCurrentActive("react");
            let data = maindata.filter((i) => {
              return i.category === "react";
            });
            setMainData(data);
          }}
        >
          React Js
        </button>
      </section>
      <section className="right-section">
        {mainData.map((item) => {
          return (
            <article className="card" key={item.id}>
              <img src={item.imgUrl} alt="img not found" />
              <div className="content">
                <h2>{item.name}</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  debitis est reprehenderit ullam! Culpa nam qui blanditiis,
                  unde rerum aut beatae odit praesentium eligendi dolorum,
                  laudantium facere? Sunt, necessitatibus numquam!
                </p>
              </div>

              <div className="info">
                <div className="code">
                  <a className="icon-link" target="blank" href={item.link}></a>
                  <a className="icon-github"></a>
                </div>
                <div className="more">
                  <span>more</span>
                  <span className="icon-arrow_forward"></span>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
/*



   
        <article className="card">
          <img src={img} alt="" />
          <div className="content">
            <h2>landing page 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              debitis est reprehenderit ullam! Culpa nam qui blanditiis, unde
              rerum aut beatae odit praesentium eligendi dolorum, laudantium
              facere? Sunt, necessitatibus numquam!
            </p>
          </div>

          <div className="info">
            <div className="code">
              <a className="icon-link"></a>
              <a className="icon-github"></a>
            </div>
            <div className="more">
              <span>more</span>
              <span className="icon-arrow_forward"></span>
            </div>
          </div>
        </article>

        <article className="card">
          <img src={img} alt="" />
          <div className="content">
            <h2>landing page 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              debitis est reprehenderit ullam! Culpa nam qui blanditiis, unde
              rerum aut beatae odit praesentium eligendi dolorum, laudantium
              facere? Sunt, necessitatibus numquam!
            </p>
          </div>

          <div className="info">
            <div className="code">
              <a className="icon-link"></a>
              <a className="icon-github"></a>
            </div>
            <div className="more">
              <span>more</span>
              <span className="icon-arrow_forward"></span>
            </div>
          </div>
        </article>
        <article className="card">
          <img src={img} alt="" />
          <div className="content">
            <h2>landing page 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              debitis est reprehenderit ullam! Culpa nam qui blanditiis, unde
              rerum aut beatae odit praesentium eligendi dolorum, laudantium
              facere? Sunt, necessitatibus numquam!
            </p>
          </div>

          <div className="info">
            <div className="code">
              <a className="icon-link"></a>
              <a className="icon-github"></a>
            </div>
            <div className="more">
              <span>more</span>
              <span className="icon-arrow_forward"></span>
            </div>
          </div>
        </article>
        <article className="card">
          <img src={img} alt="" />
          <div className="content">
            <h2>landing page 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              debitis est reprehenderit ullam! Culpa nam qui blanditiis, unde
              rerum aut beatae odit praesentium eligendi dolorum, laudantium
              facere? Sunt, necessitatibus numquam!
            </p>
          </div>

          <div className="info">
            <div className="code">
              <a className="icon-link"></a>
              <a className="icon-github"></a>
            </div>
            <div className="more">
              <span>more</span>
              <span className="icon-arrow_forward"></span>
            </div>
          </div>
        </article>

*/

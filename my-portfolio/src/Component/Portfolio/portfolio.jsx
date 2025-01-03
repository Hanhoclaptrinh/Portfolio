import "./portfolio.css";
import { useState } from "react";
import Menu from "./menu";

const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categoryItem;
        });
        setItems(updatedItems);
    }
  return (
    <>
      <section className="work container section">
        <h2 className="section__title" id="portfolio">Recent Work</h2>
        <div className="work__filters">
          <span className="work__item" onClick={() => setItems(Menu)}>All</span>
          <span className="work__item" onClick={() => filterItem("Creative")}>Creative</span>
          <span className="work__item" onClick={() => filterItem("Design")}>Design</span>
          <span className="work__item" onClick={() => filterItem("Branding")}>Branding</span>
          <span className="work__item" onClick={() => filterItem("Art")}>Art</span>
        </div>
        <div className="work__container grid">
            {items.map((e) => {
                const{ id, image, title, category } = e;
                return (
                    <div className="work__card" key={id}>
                        <div className="thumb__nail">
                            <img src={image} alt="" className="work__img" />
                            <div className="work__mask"></div>
                        </div>
                        <span className="work__category">{category}</span>
                        <h3 className="work__title">{title}</h3>
                        <a href="#" className="work__button">
                            <i className="icon-link work__button-icon"></i>
                        </a>
                    </div>
                )
            })}
        </div>
      </section>
    </>
  );
};

export default Portfolio;

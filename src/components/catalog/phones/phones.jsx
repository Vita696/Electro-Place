import React, { useState } from "react";
import "./../../../style/normalaiz.css";
import AsaidBar from "./asaidBar";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import data from "./../../../MOCK_DATA.json";
import "./style.css";
import CatalogContent from "./catalogContent";
import ModalWindow from "../modalWindow/modalWindow";

// import phone from "./../../../img/bestsellers/phone.png";
// import phone2 from "./../../catalog/phones/img/samsungFirst.png";
// import phone3 from "./../../catalog/phones/img/SamsungFird.png";
// import phone4 from "./../../catalog/phones/img/Samsung4.png";
// import phone5 from "./../../catalog/phones/img/Huawei.png";
// import phone6 from "./../../catalog/phones/img/Samsung6.png";
// import phone7 from "./../../catalog/phones/img/Huawei7.png";
// import phone8 from "./../../catalog/phones/img/Honor8.png";
// import phone9 from "./../../catalog/phones/img/Iphone9.png";

function Phones() {
  const [cards,SetCards] = useState(data.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const cardsPerPage = 9;
  const pagesVisited = pageNumber * cardsPerPage;

  const displayCards = cards
    .slice(pagesVisited, pagesVisited + cardsPerPage)
    .map((item) => {
      return (
        <CatalogContent
          phone={item.img}
          title={item.title}
          delPrice={item.delPrice && item.delPrice}
          price={item.price}
          isLike={item.isLike}
        />
      );
    });

  const pageCount = Math.ceil(cards.length / cardsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <ModalWindow />
      <div className="catalog-phones">
        <ul className="catalog-phones-lists container">
          <li className="catalog-phones-lists__item">
            <Link to="/" className="catalog-phones-lists__link">
              Главная
            </Link>
          </li>
          <li className="catalog-phones-lists__item">
            <a href="/#" className="catalog-phones-lists__link">Каталог</a>
          </li>
          <li className="catalog-phones-lists__item">
            <a href="/#" className="catalog-phones-lists__link">Смартфоны</a>
          </li>
        </ul>
        <div className="catalog-phones-top container">
          <h2 className="catalog-phones-top__title">Смартфоны</h2>
        </div>
        <div className="content container">
          <asaid>
            <AsaidBar />
          </asaid>
          <ul className="phonesContent">{displayCards}</ul>
        </div>
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBtn"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </>
  );
}

export default Phones;

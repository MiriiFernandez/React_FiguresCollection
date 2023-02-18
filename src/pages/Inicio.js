import { useEffect, useState } from "react";

import Header from "../Componentes/Header";
import Navbar from "../Componentes/Navbar";
import Footer from "../Componentes/Footer";
import StandardContainer from "../Componentes/containers/StandardContainer";
import MainBanner from "../Componentes/banners/MainBanner";

//IMAGENES
import img1 from "../img/thor.png";
import img2 from "../img/blackAdam.png";

const DATA = [
  {
    path: "pages/categorias/descubrir",
    name: "descubrir",
    imagen: img1,
    style: "bg-red-100"
  },
  {
    path: "pages/categorias/novedades",
    name: "proximamente",
    imagen: img2,
    style: "bg-blue-100"
  },
];

const Inicio = () => {
  return (
    <div class="Inicio">
      <Header></Header>
      <MainBanner></MainBanner>
      <Navbar></Navbar>
      <section className="banner_categorias">
        {DATA.map((item) => (
          <StandardContainer
            imagen={item.imagen}
            path={item.path}
            name={item.name}
            style= {item.style}
          />
        ))}
      </section>
      <Footer></Footer>
    </div>
  );
};
export default Inicio;

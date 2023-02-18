import { useEffect, useState } from "react";
import Navbar from "../Componentes/Navbar";
import Footer from "../Componentes/Footer";

import MainBanner from "../Componentes/banners/MainBanner";

const Inicio = () => {
  return (
    <div class="Inicio">
      <Navbar></Navbar>
      <Footer></Footer>
      <MainBanner></MainBanner>
    </div>
  );
};
export default Inicio;
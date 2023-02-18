import React from 'react';
import ObiWan from "../../img/obiwanBanner.png";

import Banner_Links from '../links/Banner_Links';

function MainBanner() {
    return (
        <div className='banner'>
             <img src={ObiWan} alt="Main Banner" />
            <Banner_Links path="pages/categorias/novedades" name="Novedades" />
        </div>
    )
}

export default MainBanner;
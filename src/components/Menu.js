import React from 'react';

const Menu = () => {
    return (
        <div class="menu trans_500">
            <div class="menu_content d-flex flex-column align-items-center justify-content-center text-center">
                <div class="menu_close_container"><div class="menu_close"></div></div>
                <div class="logo menu_logo"><a href="/#"><img src="../../public/logo.png" alt="" /></a></div>
                <ul>
                    <li class="menu-item text-white"><a class="text-white" href="/#">Accueil</a></li>
                    <li class="menu-item text-white"><a class="text-white" href="/#">A propos de nous</a></li>
                    <li class="menu-item text-white"><a class="text-white" href="/#">Tarifs</a></li>
                    <li class="menu-item text-white"><a class="text-white" href="/#">Actualité</a></li>
                    <li class="menu-item text-white"><a class="text-white" href="/#">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu
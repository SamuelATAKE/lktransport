import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Slider from '../components/Slider'

const About = () => {
  return (
    <div class="super_container">

            {/* <!-- Header --> */}
            <Header />

            <Menu />

            {/* <!-- Home --> */}

            <div class="home">

                {/* <!-- Home Slider --> */}

                <Slider />

            </div>

            {/* <!-- Intro --> */}

            <div class="intro">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h2 class="intro_title text-center">Nous avons les meilleurs trajets</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <div class="intro_text text-center">
                                <p>De Lomé à Cinkassé, passant par Atakpamé, Sokodé, Kara et bien entendu Dapaong avec plusieurs autres escales </p>
                            </div>
                        </div>
                    </div>
                    <div class="row intro_items">

                        {/* <!-- Intro Item --> */}

                        <div class="col-lg-4 intro_col">
                            <div class="intro_item">
                                <div class="intro_item_overlay"></div>
                                {/* <!-- Image by https://unsplash.com/@dnevozhai --> */}
                                <div class="intro_item_background bg1"></div>
                                <div class="intro_item_content d-flex flex-column align-items-center justify-content-center">
                                    <div class="intro_date">Départ: Lomé</div>
                                    <div class="button intro_button"><div class="button_bcg"></div><a href="/#">Voir plus<span></span><span></span><span></span></a></div>
                                    <div class="intro_center text-center">
                                        <h1>Sokodé</h1>
                                        <div class="intro_price">5000 FCFA</div>
                                        <div class="rating rating_4">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Intro Item --> */}

                        <div class="col-lg-4 intro_col">
                            <div class="intro_item">
                                <div class="intro_item_overlay"></div>
                                {/* <!-- Image by https://unsplash.com/@hellolightbulb --> */}
                                <div class="intro_item_background bg2"></div>
                                <div class="intro_item_content d-flex flex-column align-items-center justify-content-center">
                                    <div class="intro_date">Départ: Cinkassé</div>
                                    <div class="button intro_button"><div class="button_bcg"></div><a href="/#">Voir plus<span></span><span></span><span></span></a></div>
                                    <div class="intro_center text-center">
                                        <h1>Lomé</h1>
                                        <div class="intro_price">9000 FCFA</div>
                                        <div class="rating rating_4">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Intro Item --> */}

                        <div class="col-lg-4 intro_col">
                            <div class="intro_item">
                                <div class="intro_item_overlay"></div>
                                {/* <!-- Image by https://unsplash.com/@willianjusten --> */}
                                <div class="intro_item_background bg3"></div>
                                <div class="intro_item_content d-flex flex-column align-items-center justify-content-center">
                                    <div class="intro_date">Départ: Kara</div>
                                    <div class="button intro_button"><div class="button_bcg"></div><a href="/#">Voir plus<span></span><span></span><span></span></a></div>
                                    <div class="intro_center text-center">
                                        <h1>Lomé</h1>
                                        <div class="intro_price">6000 FCFA</div>
                                        <div class="rating rating_4">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <!-- CTA --> */}

            <div class="cta">
                {/* <!-- Image by https://unsplash.com/@thanni --> */}
                <div class="cta_background bg-cta"></div>

                <div class="container">
                    <div class="row">
                        <div class="col">

                            {/* <!-- CTA Slider --> */}

                            <div class="cta_slider_container">
                                <div class="owl-carousel owl-theme cta_slider">

                                    {/* <!-- CTA Slider Item --> */}
                                    <div class="owl-item cta_item text-center">
                                        <div class="cta_title">Voyages paisibles</div>
                                        <div class="rating_r rating_r_4">
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                        </div>
                                        <p class="cta_text">LK-Transport met à votre disposition des bus de qualité, climatisés, rapides et écologiques, ainsi qu'un personnel de transport expérimenté.</p>
                                        <div class="button cta_button"><div class="button_bcg"></div><a href="/#">Réserver<span></span><span></span><span></span></a></div>
                                    </div>

                                    {/* <!-- CTA Slider Item --> */}
                                    <div class="owl-item cta_item text-center">
                                        <div class="cta_title">Voyages paisibles</div>
                                        <div class="rating_r rating_r_4">
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                        </div>
                                        <p class="cta_text">LK-Transport met à votre disposition des bus de qualité, climatisés, rapides et écologiques, ainsi qu'un personnel de transport expérimenté.</p>
                                        <div class="button cta_button"><div class="button_bcg"></div><a href="/#">Réserver<span></span><span></span><span></span></a></div>
                                    </div>

                                    {/* <!-- CTA Slider Item --> */}
                                    <div class="owl-item cta_item text-center">
                                        <div class="cta_title">Voyages paisibles</div>
                                        <div class="rating_r rating_r_4">
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                        </div>
                                        <p class="cta_text">LK-Transport met à votre disposition des bus de qualité, climatisés, rapides et écologiques, ainsi qu'un personnel de transport expérimenté.</p>
                                        <div class="button cta_button"><div class="button_bcg"></div><a href="/#">Réserver<span></span><span></span><span></span></a></div>
                                    </div>

                                </div>

                                {/* <!-- CTA Slider Nav - Prev --> */}
                                <div class="cta_slider_nav cta_slider_prev">
                                    {/* <svg version="1.1" id="Layer_4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        width="28px" height="33px" viewBox="0 0 28 33" enable-background="new 0 0 28 33" xml:space="preserve">
                                        <defs>
                                            <linearGradient id='cta_grad_prev'>
                                                <stop offset='0%' stop-color='#fa9e1b' />
                                                <stop offset='100%' stop-color='#8d4fff' />
                                            </linearGradient>
                                        </defs>
                                        <path class="nav_path" fill="/#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
								M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
								C22.545,2,26,5.541,26,9.909V23.091z"/>
                                        <polygon class="nav_arrow" fill="/#F3F6F9" points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
								11.042,18.219 "/>
                                    </svg> */}
                                </div>

                                {/* <!-- CTA Slider Nav - Next --> */}
                                <div class="cta_slider_nav cta_slider_next">
                                    {/* <svg version="1.1" id="Layer_5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        width="28px" height="33px" viewBox="0 0 28 33" enable-background="new 0 0 28 33" xml:space="preserve">
                                        <defs>
                                            <linearGradient id='cta_grad_next'>
                                                <stop offset='0%' stop-color='#fa9e1b' />
                                                <stop offset='100%' stop-color='#8d4fff' />
                                            </linearGradient>
                                        </defs>
                                        <path class="nav_path" fill="/#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
							M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
							C22.545,2,26,5.541,26,9.909V23.091z"/>
                                        <polygon class="nav_arrow" fill="/#F3F6F9" points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
							17.046,15.554 "/>
                                    </svg> */}
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

            {/* <!-- Footer --> */}

            <Footer />

            {/* <!-- Copyright --> */}

            <div class="copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 order-lg-1 order-2  ">
                            <div class="copyright_content d-flex flex-row align-items-center">
                                <div>{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> Tous droits réservés 
                                    {/* | Made by <i class="fa fa-heart-o" aria-hidden="true"></i> by SamDev.  */}
                                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}</div>
                            </div>
                        </div>
                        <div class="col-lg-9 order-lg-2 order-1">
                            <div class="footer_nav_container d-flex flex-row align-items-center justify-content-lg-end">
                                <div class="footer_nav">
                                    <ul class="footer_nav_list">
                                        <li class="footer_nav_item"><a href="/#">Accueil</a></li>
                                        <li class="footer_nav_item"><a href="/#">A propos de nous</a></li>
                                        <li class="footer_nav_item"><a href="/#">Tarifs</a></li>
                                        <li class="footer_nav_item"><a href="/#">Actualités</a></li>
                                        <li class="footer_nav_item"><a href="/#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default About
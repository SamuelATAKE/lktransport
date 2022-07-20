import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { toast } from "react-toastify";
import axios from "axios";
import Footer from "../components/Footer";

const venues = [
  { id: 1, name: "Lomé", value: "Lomé", isDisable: false },
  { id: 2, name: "Atakpamé", value: "Atakpamé", isDisable: false },
  { id: 3, name: "Sokodé", value: "Sokodé", isDisable: false },
  { id: 4, name: "Kara", value: "Kara", isDisable: false },
  { id: 5, name: "Mango", value: "Mango", isDisable: false },
  { id: 6, name: "Dapaong", value: "Dapaong", isDisable: false },
  { id: 7, name: "Cinkassé", value: "Cinkassé", isDisable: false },
];

const initialState = {
  depart: "",
  destination: "",
  dateVoyage: "",
};

const reservationState = {
  departure: "",
  arrival: "",
  number: "",
  price: "",
  dateVoyage: "",
};

const First = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const [reservation, setReservation] = useState(reservationState);
  const { depart, destination, dateVoyage } = state;
  const { departure, arrival, number, price } = reservation;
  const [tarifs, setTarifs] = useState([]);

  useEffect(() => {
    axios.get(`https://lktransportbackend.herokuapp.com/tarif`).then((res) => {
      setTarifs(res.data);
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // eslint-disable-next-line
    console.log(e);
    setState({ ...state, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("L état");
    console.log(state);
    console.log("Les tarifs");
    console.log(tarifs);
    if (state.depart === state.destination) {
      console.log("erreur");
      toast("Votre lieu de départ et de destination sont les mêmes");
    } else if (state.depart === "") {
      console.log("erreur");
      toast("Veuillez sélectionner un lieu de départ");
    } else if (state.destination === "") {
      console.log("erreur");
      toast("Veuillez sélectionner un lieu de destination");
    } else if (state.places === "00" || state.places === "") {
      console.log("erreur");
      toast("Veuillez sélectionner le nombre de places à réserver");
    } else {
      tarifs.forEach((tarif) => {
        if (
          tarif.depart === state.depart &&
          tarif.destination === state.destination
        ) {
          reservation.price = tarif.prix;
          sessionStorage.setItem("tarif", JSON.stringify(tarif));
          sessionStorage.setItem("dateVoyage", JSON.stringify(dateVoyage));
        }
      });

      reservation.departure = state.depart;
      reservation.arrival = state.destination;
      // reservation.number = state.places;
      reservation.dateVoyage = state.dateVoyage;

      console.log("La réservation");
      console.log(reservation);
      sessionStorage.setItem("reservation", JSON.stringify(reservation));
      navigate("/reservation", { state: reservation });
    }
  };

  return (
    <div>
      <div id="app">
        <NavBar />
        <div class="video-background-wrapper">
          <video
            src="assets/images/background.mp4"
            muted
            loop
            autoplay
            poster="assets/images/video-background-poster.png"
          ></video>
          <div class="overlay"></div>
        </div>
        <main class="py-4">
          <div class="container">
            <header class="d-flex align-items-center justify-content-center">
              <h1 class="text-center mb-3 text-white font-weight-light align-middle">
                <b>Rechercher les programmes de voyages</b>
              </h1>
            </header>

            <div class="row justify-content-center align-items-center">
              <div class="col-sm-12">
                <div class="card card-transparent py-2">
                  <div class="card-body">
                    <form action="#" onSubmit={onSubmit}>
                      <div class="form-row align-items-center justify-content-center">
                        <div class="col-sm-12 col-md-4 col-lg-3 col-xl-4">
                          <div class="form-group position-relative">
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <div class="input-group-text">
                                  <i class="fas fa-map-marker-alt"></i>
                                </div>
                              </div>
                              <select
                                name="depart"
                                placeholder="Départ"
                                prepend_icon="fas fa-map-marker-alt"
                                value={depart || ""}
                                onChange={handleInputChange}
                                className="form-control"
                              >
                                <option className="text-blacked">
                                  Sélectionner votre lieu de départ
                                </option>
                                {venues.map((venue) => (
                                  <option
                                    className="text-blacked"
                                    key={venue.id}
                                    value={venue.value}
                                  >
                                    {venue.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>

                        <div class="col-sm-12 col-md-4 col-lg-3 col-xl-4">
                          <div class="form-group position-relative">
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <div class="input-group-text">
                                  <i class="fas fa-map-marker-alt"></i>
                                </div>
                              </div>
                              <select
                                name="destination"
                                placeholder="Destination"
                                value={destination || ""}
                                onChange={handleInputChange}
                                prepend_icon="fas fa-map-marker-alt"
                                className="form-control"
                              >
                                <option className="text-blacked">
                                  Sélectionner votre lieu de destination
                                </option>
                                {venues.map((venue) => (
                                  <option
                                    className="text-blacked"
                                    key={venue.id}
                                    value={venue.value}
                                  >
                                    {venue.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>

                        <div class="col-sm-12 col-md-4 col-lg-3 col-xl-2">
                          <div class="form-group position-relative">
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <div class="input-group-text">
                                  <i class="far fa-calendar-alt"></i>
                                </div>
                              </div>
                              <input
                                name="dateVoyage"
                                type="date"
                                placeholder="Date"
                                value={dateVoyage || ""}
                                onChange={handleInputChange}
                                class="form-control"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2">
                          <div class="form-group">
                            <button
                              type="submit"
                              class="btn btn-primary btn-block btn-o"
                            >
                              <i class="fas fa-search"></i> <b>Rechercher</b>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div class="super_container">
        {/* <!-- Intro --> */}

        <div class="intro" id="tarif">
        <div class="cta_background bg-intro"></div>
          <div class="container">
            <div class="row">
              <div class="col">
                <h2 class="intro_title text-center text-white">
                  Nous avons les meilleurs trajets
                </h2>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-10 offset-lg-1">
                <div class="intro_text text-center">
                  <p>
                    De Lomé à Cinkassé, passant par Atakpamé, Sokodé, Kara et
                    bien entendu Dapaong avec plusieurs autres escales{" "}
                  </p>
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
                    <div class="button intro_button">
                      <div class="button_bcg"></div>
                      <a href="/#">
                        Voir plus<span></span>
                        <span></span>
                        <span></span>
                      </a>
                    </div>
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
                    <div class="button intro_button">
                      <div class="button_bcg"></div>
                      <a href="/#">
                        Voir plus<span></span>
                        <span></span>
                        <span></span>
                      </a>
                    </div>
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
                    <div class="button intro_button">
                      <div class="button_bcg"></div>
                      <a href="/#">
                        Voir plus<span></span>
                        <span></span>
                        <span></span>
                      </a>
                    </div>
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
                      <p class="cta_text">
                        LK-Transport met à votre disposition des bus de qualité,
                        climatisés, rapides et écologiques, ainsi qu'un
                        personnel de transport expérimenté.
                      </p>
                      <div class="button cta_button">
                        <div class="button_bcg"></div>
                        <a href="/#">
                          Réserver<span></span>
                          <span></span>
                          <span></span>
                        </a>
                      </div>
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
                      <p class="cta_text">
                        LK-Transport met à votre disposition des bus de qualité,
                        climatisés, rapides et écologiques, ainsi qu'un
                        personnel de transport expérimenté.
                      </p>
                      <div class="button cta_button">
                        <div class="button_bcg"></div>
                        <a href="/#">
                          Réserver<span></span>
                          <span></span>
                          <span></span>
                        </a>
                      </div>
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
                      <p class="cta_text">
                        LK-Transport met à votre disposition des bus de qualité,
                        climatisés, rapides et écologiques, ainsi qu'un
                        personnel de transport expérimenté.
                      </p>
                      <div class="button cta_button">
                        <div class="button_bcg"></div>
                        <a href="/#">
                          Réserver<span></span>
                          <span></span>
                          <span></span>
                        </a>
                      </div>
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

        {/* <!-- Offers --> */}

        <div class="contact" id="contact">
          <div class="contact_background bg-contact"></div>

          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <div class="contact_image"></div>
              </div>
              <div class="col-lg-7">
                <div class="contact_form_container">
                  <div class="contact_title">Contactez-nous</div>
                  <form action="/#" id="contact_form" class="contact_form">
                    <input
                      type="text"
                      id="contact_form_name"
                      class="contact_form_name input_field"
                      placeholder="Votre nom"
                      required="required"
                      data-error="Votre nom est réquis."
                    />
                    <input
                      type="text"
                      id="contact_form_email"
                      class="contact_form_email input_field"
                      placeholder="Votre adresse mail"
                      required="required"
                      data-error="Votre adresse mail est réquise."
                    />
                    <input
                      type="text"
                      id="contact_form_email"
                      class="contact_form_email input_field"
                      placeholder="Votre numéro de téléphone"
                      required="required"
                      data-error="Votre numéro de téléphone est réquis."
                    />
                    <input
                      type="text"
                      id="contact_form_subject"
                      class="contact_form_subject input_field"
                      placeholder="Le sujet de votre message"
                      required="required"
                      data-error="Le sujet de votre message est requis."
                    />
                    <textarea
                      id="contact_form_message"
                      class="text_field contact_form_message"
                      name="message"
                      rows="4"
                      placeholder="Votre message"
                      required="required"
                      data-error="Veuillez écrire un message."
                    ></textarea>
                    <button
                      type="submit"
                      id="form_submit_button"
                      class="form_submit_button button"
                    >
                      Envoyer le message<span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </form>
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
                  <div>
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    Tous droits réservés
                    {/* | Made by <i class="fa fa-heart-o" aria-hidden="true"></i> by SamDev.  */}
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
                  </div>
                </div>
              </div>
              <div class="col-lg-9 order-lg-2 order-1">
                <div class="footer_nav_container d-flex flex-row align-items-center justify-content-lg-end">
                  <div class="footer_nav">
                    <ul class="footer_nav_list">
                      <li class="footer_nav_item">
                        <a href="/#">Accueil</a>
                      </li>
                      <li class="footer_nav_item">
                        <a href="/#">A propos de nous</a>
                      </li>
                      <li class="footer_nav_item">
                        <a href="/#">Tarifs</a>
                      </li>
                      <li class="footer_nav_item">
                        <a href="/#">Actualités</a>
                      </li>
                      <li class="footer_nav_item">
                        <a href="/#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;

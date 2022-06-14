import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Slider from "../components/Slider";

const initialState = {
  nom: "",
  email: "",
  telephone: "",
  dateVoyage: "",
  station: [],
};

const commandeState = {
  nom: "",
  dateVoyage: "",
  station: "",
  tarif: "",
  payement: "",
  nombre: "",
};

const paymentState = {
  auth_token: "",
  phone_number: "",
  amount: "",
  description: "",
  identifier: "",
  network: "",
};

const payementState = {
  reference: "",
  status: "",
  datepayement: "",
  etat: "",
};

const Reservation = (props) => {
  const navigate = useNavigate();
  const [state, setState] = React.useState(initialState);
  const [reservation, setReservation] = React.useState([]);
  const [_tarif, setTarif_] = React.useState([]);
  const [stations, setStations] = React.useState([]);
  const [commande, setCommande] = React.useState(commandeState);
  const [payment, setPayment] = React.useState(paymentState);
  const [payement, setPayement] = React.useState(payementState);
  //   const {nom,  dateVoyage, tarif, station} = commande;
  const { nom, email, telephone, dateVoyage, station } = state;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // eslint-disable-next-line
    console.log(e);
    setState({ ...state, [name]: value });
  };

  React.useEffect(() => {
    console.log("Le props:");
    // console.log(props);
    console.log(JSON.parse(sessionStorage.getItem("reservation")));
    setReservation(JSON.parse(sessionStorage.getItem("reservation")));
    setTarif_(JSON.parse(sessionStorage.getItem("tarif")));

    axios
      .get(`https://lktransportbackend.herokuapp.com/station`)
      .then((res) => {
        setStations(res.data);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(stations);
    commande.tarif = _tarif;
    state.station = JSON.parse(state.station);
    console.log(state);
    commande.nom = state.nom;
    commande.dateVoyage = state.dateVoyage;
    commande.station = state.station;
    commande.nombre = reservation.number;
    console.log(commande);

    axios
      .post(
        `https://lktransportbackend.herokuapp.com/reservation`,
        JSON.stringify(commande),
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        sessionStorage.setItem("commande", JSON.stringify(res.data));
        // console.log("navigate");
        // history.push({ pathname: "/qrcode", state: { reservation: rstate } });
        payment.auth_token = "356c06b2-6f4b-4376-b4b5-af495b581725";
        payment.phone_number = state.telephone;
        // payment.amount = commande.tarif.prix;
        payment.amount = 2;
        payment.description = "Réservation de ticket de bus";
        const d = new Date();
        console.log(d);
        console.log(d.toLocaleDateString);
        const s = d.toString();
        payment.identifier = `${
          res.data.id
        }${d.getFullYear()}${d.getMonth()}${d.getDay()}`;
        if (
          state.telephone.slice(0, 2) === "90" ||
          state.telephone.slice(0, 2) === "91" ||
          state.telephone.slice(0, 2) === "92" ||
          state.telephone.slice(0, 2) === "93" ||
          state.telephone.slice(0, 2) === "70"
        ) {
          payment.network = "TMONEY";
        } else {
          payment.network = "FLOOZ";
        }

        console.log("Le payement");
        console.log(JSON.stringify(payment));
        axios
          .post(
            `https://paygateglobal.com/api/v1/pay`,
            JSON.stringify(payment),
            {
              headers: {
                "content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
                // "Access-Control-Allow-Methods":
                //   "GET,PUT,POST,DELETE,PATCH,OPTIONS",
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            sessionStorage.setItem("tx_reference", res.data.tx_reference);
            sessionStorage.setItem("status", res.data.status);

            payement.status = res.data.status;
            payement.reference = res.data.tx_reference;
            payement.datepayement = Date.now();

            axios
              .post(
                `https://lktransportbackend.herokuapp.com/payement`,
                JSON.stringify(payement),
                {
                  headers: {
                    "content-type": "application/json",
                  },
                }
              )
              .then((res) => {
                console.log(res.data);
                commande.payement = res.data;

                axios
                  .put(
                    `https://lktransportbackend.herokuapp.com/commande`,
                    JSON.stringify(commande),
                    {
                      headers: {
                        "content-type": "application/json",
                      },
                    }
                  )
                  .then((res) => {
                    console.log(res.data);
                    console.log("Modified Data");
                  });
              });
          });

        // navigate(
        //   `https://paygateglobal.com/v1/page?token=${payment.auth_token}&amount=0&description=ReservationDeBus&identifier=${payment.identifier}&url=https://lktransport.vercel.app/qrcode`
        // );
        navigate("/qrcode");
      });
  };
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
              <h2 class="intro_title text-center">Confirmer la réservation</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="intro_text text-center">
                <p class="cta_text">Départ: {reservation.departure}</p>
                <p class="cta_text">Destination: {reservation.arrival}</p>
                <p class="cta_text">Nombre de places: {reservation.number}</p>
                <p class="cta_text">Prix unitaire: {reservation.price}</p>
                <p class="cta_text">
                  Prix total: {reservation.price * reservation.number}
                </p>
              </div>
              <div class="contact_form_container">
                <div class="contact_title text-center">
                  Entrez les informatives relatives à votre identité
                </div>
                <form
                  action="/#"
                  id="contact_form"
                  class="contact_form"
                  onSubmit={onSubmit}
                >
                  <input
                    name="nom"
                    type="text"
                    id="contact_form_name"
                    class="contact_form_name input_field"
                    placeholder="Votre nom"
                    required="required"
                    value={nom || ""}
                    onChange={handleInputChange}
                    data-error="Votre nom est réquis."
                  />
                  <input
                    name="email"
                    type="email"
                    id="contact_form_email"
                    class="contact_form_email input_field"
                    value={email || ""}
                    onChange={handleInputChange}
                    placeholder="Votre adresse mail"
                  />
                  <input
                    name="telephone"
                    type="tel"
                    id="contact_form_email"
                    class="contact_form_name input_field"
                    placeholder="Votre numéro de téléphone"
                    required="required"
                    value={telephone || ""}
                    onChange={handleInputChange}
                    data-error="Votre numéro de téléphone est réquis."
                  />
                  <input
                    name="dateVoyage"
                    type="date"
                    id="contact_form_date"
                    class="contact_form_name input_field"
                    required="required"
                    value={dateVoyage}
                    onChange={handleInputChange}
                    data-error="Votre date de voyage est requise."
                  />
                  <select
                    name="station"
                    aria-labelledby="aria-label"
                    value={station || ""}
                    onChange={handleInputChange}
                    className="dropdown_item_select search_input"
                  >
                    <option className="text-blacked">
                      Sélectionner votre station de départ
                    </option>
                    {stations.map((station) => (
                      <option
                        className="text-blacked"
                        key={station.id}
                        value={JSON.stringify(station)}
                      >
                        {station.siege} {station.ville}
                      </option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    id="form_submit_button"
                    class="form_submit_button button"
                  >
                    Réserver
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

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
  );
};

export default Reservation;

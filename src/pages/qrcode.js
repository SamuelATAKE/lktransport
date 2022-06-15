import { QRCodeSVG } from "qrcode.react";
import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import ReactToPdf from "react-to-pdf";

const QrCode = () => {
  const [reservation, setReservation] = React.useState([]);
  const [commande, setCommande] = React.useState([]);
  const [reload, setReload] = React.useState(false);
  const ref = React.createRef();

  React.useEffect(() => {
    // window.location.reload(false);
    setReservation(JSON.parse(sessionStorage.getItem("reservation")));
    setCommande(JSON.parse(sessionStorage.getItem("commande")));
  }, []);
  const link = {
    value:
      "https://lktransportbackend.herokuapp.com/reservation/" + commande.id,
  };
  
  // window.location.reload(false);

  return (
    <div class="super_container">
      {/* <!-- Header --> */}
      <Header />

      <Menu />

      {/* <!-- Intro --> */}

      <div class="intro">
        <div class="container" ref={ref}>
            <br/><br/>
          <div class="row">
            <div class="col">
              <h2 class="intro_title text-center">Votre code QrCode</h2>
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
                <p class="cta_text">Nom: {commande.nom}</p>
                <p class="cta_text">Date de voyage: {commande.dateVoyage}</p>
              </div>
              <div class="contact_form_container">
                <center>
                  <QRCodeSVG
                    id="reservation"
                    value={link.value}
                    fgColor="#00FF00"
                    size={280}
                    includeMargin={true}
                  />
                </center>

                <div class="contact_title text-center">
                  <ReactToPdf
                    targetRef={ref}
                    filename="mareservation.pdf"
                    x={0.5}
                    y={0.5}
                    scale={0.8}
                  >
                    {({ toPdf }) => (
                      <button onClick={toPdf} className="button search_button">
                        Télécharger
                      </button>
                    )}
                  </ReactToPdf>
                </div>
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
                  Copyright &copy; LK-Transport 2022
                  <script>
                    document.write(new Date().getFullYear());
                  </script>{" "}
                  Tous droits réservés
                  {/* | Made by <i class="fa fa-heart-o" aria-hidden="true"></i> by SamDev.  */}
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
                </div>
              </div>
            </div>
            {/* <div class="col-lg-9 order-lg-2 order-1">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrCode;

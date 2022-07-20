import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { toast } from "react-toastify";
import axios from "axios";

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
  );
};

export default First;

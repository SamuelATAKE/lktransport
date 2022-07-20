import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
// import Select from "react-select";
import { toast } from "react-toastify";
// import { VenueOption, venues } from './docs/data';

const venues = [
  { id: 1, name: "Lomé", value: "Lomé", isDisable: false },
  { id: 2, name: "Atakpamé", value: "Atakpamé", isDisable: false },
  { id: 3, name: "Sokodé", value: "Sokodé", isDisable: false },
  { id: 4, name: "Kara", value: "Kara", isDisable: false },
  { id: 5, name: "Mango", value: "Mango", isDisable: false },
  { id: 6, name: "Dapaong", value: "Dapaong", isDisable: false },
  { id: 7, name: "Cinkassé", value: "Cinkassé", isDisable: false },
];

const formatOptionLabel = ({ id, name, value }) => (
  <option className="text-blacked" key={id} value={value}>
    {name}
  </option>
);

const initialState = {
  depart: "",
  destination: "",
  places: "",
};

const reservationState = {
  departure: "",
  arrival: "",
  number: "",
  price: "",
};

const commissionState = {
  depart: "",
  destination: "",
  bagage: "",
  prix: "",
  
}

const Search = () => {
  const navigate = useNavigate();
  const [ariaFocusMessage, setAriaFocusMessage] = React.useState("");
  const [state, setState] = React.useState(initialState);
  const [reservation, setReservation] = React.useState(reservationState);
  const { depart, destination, places } = state;
  const { departure, arrival, number, price } = reservation;
  const [tarifs, setTarifs] = React.useState([]);

  React.useEffect(() => {
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
        }
      });

      reservation.departure = state.depart;
      reservation.arrival = state.destination;
      reservation.number = state.places;

      console.log("La réservation");
      console.log(reservation);
      sessionStorage.setItem("reservation", JSON.stringify(reservation));
      navigate("/reservation", { state: reservation });
    }
  };

  const onFocus = (focused, isDisable) => {
    const msg = `L'option choisie est: ${focused.name}${isDisable ? ", disabled" : ""
      }`;
    setAriaFocusMessage(msg);
    return msg;
  };

  return (
    <div className="container fill_height">
      <div className="row fill_height">
        <div className="col fill_height">
          {/* <!-- Search Tabs --> */}

          <div className="search_tabs_container">
            <div className="search_tabs d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
              <div className="search_tab active d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                <img src="../../public/images/suitcase.png" alt="" />
                <span>Voyages</span>
              </div>
              <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                <img src="../../public/images/bus.png" alt="" />
                Commission colis
              </div>
            </div>
          </div>

          {/* <!-- Search Panel --> */}

          <div className="search_panel active">
            <form
              action="/#"
              id="search_form_1"
              className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"
              onSubmit={onSubmit}
            >
              <div className="search_item">
                <div>Départ</div>
                {/* <Select
                  defaultValue={venues[0]}
                  aria-labelledby="aria-label"
                  ariaLiveMessages={{
                    onFocus,
                  }}
                  formatOptionLabel={formatOptionLabel}
                  name="depart"
                  value={depart || ''}
                  onChange={handleInputChange}
                  options={venues}
                /> */}
                <select
                  name="depart"
                  aria-labelledby="aria-label"
                  value={depart || ""}
                  onChange={handleInputChange}
                  className="dropdown_item_select search_input"
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
              <div className="search_item">
                <div>Destination</div>
                {/* <Select
                  defaultValue={venues[0]}
                  aria-labelledby="aria-label"
                  ariaLiveMessages={{
                    onFocus,
                  }}
                  formatOptionLabel={formatOptionLabel}
                  name="destination"
                  value={destination}
                  onChange={handleInputChange}
                  options={venues}
                /> */}
                <select
                  name="destination"
                  aria-labelledby="aria-label"
                  value={destination || ""}
                  onChange={handleInputChange}
                  className="dropdown_item_select search_input"
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
              <div className="search_item">
                <div>Nombre de places</div>
                <select
                  name="places"
                  id="adults_1"
                  className="dropdown_item_select search_input"
                  value={places}
                  onChange={handleInputChange}
                >
                  <option value="00">00</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                </select>
              </div>
              <button className="button search_button">
                Réservation<span></span>
                <span></span>
                <span></span>
              </button>
            </form>
          </div>

          {/* <!-- Search Panel2 --> */}

          <div className="search_panel">
            <form
              action="/#"
              id="search_form_2"
              className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"
            >
              <div className="search_item">
                <div>Départ</div>
                <select
                  name="depart"
                  aria-labelledby="aria-label"
                  value={depart || ""}
                  onChange={handleInputChange}
                  className="dropdown_item_select search_input"
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
              <div className="search_item">
                <div>Destination</div>
                <select
                  name="destination"
                  aria-labelledby="aria-label"
                  value={destination || ""}
                  onChange={handleInputChange}
                  className="dropdown_item_select search_input"
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
              <div className="search_item">
                <div>Type de bagages</div>
                <select
                  name="places"
                  id="adults_1"
                  className="dropdown_item_select search_input"
                  value={places}
                  onChange={handleInputChange}
                >
                  <option value="00">Enveloppe</option>
                  <option value="01">Petit Sac</option>
                  <option value="01">Grand Sac (Sac de charbon par exemple)</option>
                  <option value="02">Animal</option>
                  <option value="03">Moto/Vélo</option>
                </select>
              </div>
              <button className="button search_button">
                Réservation<span></span>
                <span></span>
                <span></span>
              </button>
            </form>
          </div>

          {/* <!-- Search Panel --> */}

          {/* <div className="search_panel">
            <form
              action="/#"
              id="search_form_3"
              className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"
            >
              <div className="search_item">
                <div>Départ</div>
                <input
                  type="text"
                  className="destination search_input"
                  required
                />
              </div>
              <div className="search_item">
                <div>Destination</div>
                <input
                  type="text"
                  className="destination search_input"
                  required
                />
              </div>
              <div className="search_item">
                <div>Adultes</div>
                <select
                  name="adults"
                  id="adults_1"
                  className="dropdown_item_select search_input"
                >
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                </select>
              </div>
              <div className="search_item">
                <div>Enfants</div>
                <select
                  name="children"
                  id="children_1"
                  className="dropdown_item_select search_input"
                >
                  <option>0</option>
                  <option>02</option>
                  <option>03</option>
                </select>
              </div>
              <button className="button search_button">
                Recherche<span></span>
                <span></span>
                <span></span>
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Search;

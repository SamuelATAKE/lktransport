import React from 'react'
import Select, { AriaOnFocus } from 'react-select';
import { VenueOption, venues } from './docs/data';

const Search = () => {
    const [ariaFocusMessage, setAriaFocusMessage] = React.useState('');

    // const style: { [key: string]: CSSProperties } = {
    //     blockquote: {
    //       fontStyle: 'italic',
    //       fontSize: '.75rem',
    //       margin: '1rem 0',
    //     },
    //     label: {
    //       fontSize: '.75rem',
    //       fontWeight: 'bold',
    //       lineHeight: 2,
    //     },
    //   };

    const onFocus: AriaOnFocus<VenueOption> = ({ focused, isDisabled }) => {
        const msg = `Vous avez choisi ${focused.name}${
            isDisabled ? ', disabled' : ''
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
                            <div className="search_tab active d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="../../public/images/suitcase.png" alt="" /><span>Voyages</span></div>
                            <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="../../public/images/bus.png" alt="" />Commission colis</div>
                        </div>
                    </div>

                    {/* <!-- Search Panel --> */}

                    <div className="search_panel active">
                        <form action="/#" id="search_form_1" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                            <div className="search_item">
                                <div>Départ</div>
                                <Select 
                                    aria-labelledby="aria-label"
                                    ariaLiveMessages={{
                                    onFocus,
                                    }}
                                    inputId="aria-example-input"
                                    name="aria-live-color"
                                    options={venues} 
                                />
                            </div>
                            <div className="search_item">
                                <div>Destination</div>
                                <input type="text" className="destination search_input" required />
                            </div>
                            <div className="search_item">
                                <div>Adultes</div>
                                <select name="adults" id="adults_1" className="dropdown_item_select search_input">
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                </select>
                            </div>
                            <div className="search_item">
                                <div>Enfants</div>
                                <select name="children" id="children_1" className="dropdown_item_select search_input">
                                    <option>00</option>
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                </select>
                            </div>
                            <button className="button search_button">Réservation<span></span><span></span><span></span></button>
                        </form>
                    </div>

                    {/* <!-- Search Panel --> */}

                    <div className="search_panel">
                        <form action="/#" id="search_form_2" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                            <div className="search_item">
                                <div>Départ</div>
                                <input type="text" className="destination search_input" required />
                            </div>
                            <div className="search_item">
                                <div>Destination</div>
                                <input type="text" className="destination search_input" required />
                            </div>
                            <button className="button search_button">Réservation<span></span><span></span><span></span></button>
                        </form>
                    </div>

                    {/* <!-- Search Panel --> */}

                    <div className="search_panel">
                        <form action="/#" id="search_form_3" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                            <div className="search_item">
                                <div>Départ</div>
                                <input type="text" className="destination search_input" required />
                            </div>
                            <div className="search_item">
                                <div>Destination</div>
                                <input type="text" className="destination search_input" required />
                            </div>
                            <div className="search_item">
                                <div>Adultes</div>
                                <select name="adults" id="adults_1" className="dropdown_item_select search_input">
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                </select>
                            </div>
                            <div className="search_item">
                                <div>Enfants</div>
                                <select name="children" id="children_1" className="dropdown_item_select search_input">
                                    <option>0</option>
                                    <option>02</option>
                                    <option>03</option>
                                </select>
                            </div>
                            <button className="button search_button">Recherche<span></span><span></span><span></span></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
import jsPDF from 'jspdf';
import React from 'react'
import '../components/styles/Ticket.css'

const Ticket = () => {
    const [display, setDisplay] = React.useState("block");

    const generatePDF = () => {
        setDisplay("block");
        var rep = new jsPDF("p", "pt", "a4");
        rep.html(document.querySelector("#ticket"), {
            callback: function (pdf) {
                pdf.save("ticket.pdf");
                setDisplay("none");
            }
        });
    };
    return (
        <div>
            <div id="ticket" class="super_container bgti" style={{ display }}>
                <div class="intro">
                    <div class="container">
                        <div class="intro_items">
                            <div class="intro_item">
                                <div class="intro_item_overlay"></div>
                                <div class="intro_item_background bgt col-12"></div>
                                <div class="intro_item_content container d-flex flex-column align-items-center justify-content-center">
                                    <div class="row1 pt-0 pb-0">
                                        <h1 className="text-center">TICKET DE VOYAGE</h1>
                                        <hr />
                                        <div class="row">
                                            <table class="col-12">
                                                <tr>
                                                    <td class="col-5">
                                                        <h3 className="dark-text">Société L.K</h3>
                                                        <p className="dark-text">Lomé: Cacavelie face Eglise des Camboniens</p>
                                                        <p className="dark-text">13 BP 230 LOME-TOGO</p>
                                                        <p className="dark-text">LOME / TEL: 23 36 87 75 / 92 27 16 01</p>
                                                        <p className="dark-text">KARA / TEL: 26 61 10 58 / 92 27 16 04</p>
                                                        <h4 className="dark-text">Caissière: ABALO</h4>
                                                    </td>
                                                    <td class="col-3">
                                                        <h2 className="dark-text">6</h2>
                                                        <p className="dark-text">2è Bus</p>
                                                    </td>
                                                    <td class="col-4">
                                                        <p className="dark-text">Embarquement: </p>
                                                        <p className="dark-text">Départ: </p>
                                                        <p className="dark-text">Tarif: <span className="tarif-border">6000 FCFA</span></p>
                                                    </td>
                                                </tr>
                                            </table>

                                        </div>

                                    </div>
                                    <hr class="dark-text" />
                                    <div class="row1">
                                        <div className="row pb-0 pt-0">
                                            <p className="dark-text col-12">RT ............................................................</p>
                                            <p className="dark-text col-12">Reçu de.............. M./Mme ROSALINE.......... 00000000.............</p>
                                        </div>
                                        <div className="row pb-0 pt-0">
                                            <p className="dark-text col-lg-4">Nombre de colis:  </p>
                                            <p className="dark-text col-lg-4">Taxe de bagage: </p>
                                            <p className="dark-text col-lg-4">Total: </p>
                                        </div>
                                        <div className="row pb-0 pt-0">
                                            <p className="dark-text col-lg-6">Départ: </p>
                                            <p className="dark-text col-lg-6">Destination: </p>
                                        </div>
                                        <div className="row pb-0 pt-0">
                                            <p className="dark-text col-lg-6">Arrêt: </p>
                                            <p className="dark-text col-lg-6">Date de voyage: </p>
                                        </div>

                                    </div>
                                    {/* <hr /> */}
                                    <div className="row2">
                                        <p class="col-12 dark-text">N.B.: Le ticket n'est remboursable que si le client prévient à la veille du jour du voyage.</p>
                                        <h2 class="text-center">BON VOYAGE</h2>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container">
                <button className="btn btn-success" onClick={generatePDF}>Télécharger</button>
            </div>

        </div>

    )
}

export default Ticket

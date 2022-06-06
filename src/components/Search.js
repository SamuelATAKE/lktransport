import React from 'react'

const Search = () => {
    const venues = [
        {id: 1, name: "Lomé", value: "Lomé"},
        {id: 2, name: "Atakpamé", value: "Atakpamé"},
        {id: 3, name: "Sokodé", value: "Sokodé"},
        {id: 4, name: "Kara", value: "Kara"},
        {id: 5, name: "Mango", value: "Mango"},
        {id: 6, name: "Dapaong", value: "Dapaong"},
        {id: 7, name: "Cinkassé", value: "Cinkassé"},
    ];

    const getSelections = () => {
        return $('select.select2')
            .map((i, sel) => $(sel).val()).toArray()
            .map(id => parseInt(id, 10));
    } 

    const fixSelections = () => {
        const selections = getSelections();

        $('select.select2').each((i, sel) => {
            let $sel = $(sel), val = $sel.val();
            $sel.find('option').each((j, opt) => {
            let $opt = $(opt);
            if ($opt.val() !== val && selections.includes(parseInt($opt.val(), 10))) {
                $opt.attr('disabled', true);
            } else {
                $opt.removeAttr('disabled');
            }
            });
        });
    }

    const populateOptions = () => {
        const selections = getSelections();

        return options.map(option => {
            return `
            <option value="${option.id}"
                ${selections.includes(option.id) ? 'disabled="disabled"' : ''}>
                ${option.name}
            </option>
            `;
        });
    }

    const addRow = () => {
        const tr = `
        <tr class="cb" id="row_${rowId}">
            <td>
                <select class="s form-control select2" id="name1_${rowId}_first" name="name[]">
                ${populateOptions()}
                </select>
            </td>
        </tr>
        `;
        rowId++;
        $('tbody').append(tr);
    }

    $('.addRow').on('click', function() {
        addRow();
        $('.s').change(function() {
          let value = $(this).val();
          $(this).siblings('.s')
            .children('option')
            .attr('disabled', false);
          $('.s').each(function() {
            $(this).siblings('.s')
              .children('option[value=' + $(this).val() + ']')
              .attr('disabled', 'disabled');
          })
        });
        fixSelections();
    });
      
    $('tbody').on('click', '.remove', function() {
    $(this).parent().parent().remove();
    fixSelections();
    });
      
    $('.savebtn').on('click', function() {
    $('.listable .cb').each(function(index, item) {
        console.log($('#amt1_' + index).val());
    });
    });
      
    $(document).on('change', 'select.select2', e => fixSelections());

    return (
        <div class="container fill_height">
            <div class="row fill_height">
                <div class="col fill_height">

                    {/* <!-- Search Tabs --> */}

                    <div class="search_tabs_container">
                        <div class="search_tabs d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                            <div class="search_tab active d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="../../public/images/suitcase.png" alt="" /><span>Voyages</span></div>
                            <div class="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="../../public/images/bus.png" alt="" />Commission colis</div>
                        </div>
                    </div>

                    {/* <!-- Search Panel --> */}

                    <div class="search_panel active">
                        <form action="/#" id="search_form_1" class="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                            <div class="search_item">
                                <div>Départ</div>
                                <input type="text" class="destination search_input" required="required" />
                            </div>
                            <div class="search_item">
                                <div>Destination</div>
                                <input type="text" class="destination search_input" required="required" />
                            </div>
                            <div class="search_item">
                                <div>Adultes</div>
                                <select name="adults" id="adults_1" class="dropdown_item_select search_input">
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                </select>
                            </div>
                            <div class="search_item">
                                <div>Enfants</div>
                                <select name="children" id="children_1" class="dropdown_item_select search_input">
                                    <option>00</option>
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                </select>
                            </div>
                            <button class="button search_button">Réservation<span></span><span></span><span></span></button>
                        </form>
                    </div>

                    {/* <!-- Search Panel --> */}

                    <div class="search_panel">
                        <form action="/#" id="search_form_2" class="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                            <div class="search_item">
                                <div>Départ</div>
                                <input type="text" class="destination search_input" required="required" />
                            </div>
                            <div class="search_item">
                                <div>Destination</div>
                                <input type="text" class="destination search_input" required="required" />
                            </div>
                            <button class="button search_button">Réservation<span></span><span></span><span></span></button>
                        </form>
                    </div>

                    {/* <!-- Search Panel --> */}

                    <div class="search_panel">
                        <form action="/#" id="search_form_3" class="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                            <div class="search_item">
                                <div>Départ</div>
                                <input type="text" class="destination search_input" required="required" />
                            </div>
                            <div class="search_item">
                                <div>Destination</div>
                                <input type="text" class="destination search_input" required="required" />
                            </div>
                            <div class="search_item">
                                <div>Adultes</div>
                                <select name="adults" id="adults_1" class="dropdown_item_select search_input">
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                </select>
                            </div>
                            <div class="search_item">
                                <div>Enfants</div>
                                <select name="children" id="children_1" class="dropdown_item_select search_input">
                                    <option>0</option>
                                    <option>02</option>
                                    <option>03</option>
                                </select>
                            </div>
                            <button class="button search_button">Recherche<span></span><span></span><span></span></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
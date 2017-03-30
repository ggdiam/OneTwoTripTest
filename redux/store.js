/**
 * Created by Alexander on 30.03.2017.
 */
class RootState {
    /** @type {FlightModel[]} */
    flights = [];
    /** @type {string[]} */
    carriers = [];

    /** @type {string[]} */
    selectedCarriers = [];
    /** @type {FlightModel[]} */
    selectedFlights = [];
}

const allCarriers = 'Все авиакомании';

const initialState = new RootState();

function rootReducer (state = initialState, action) {
    /** @type {RootState} */
    var newState = Object.assign({}, state);

    switch (action.type) {
        case actions.DATA_INIT:
            /** @type {FlightModel[]} */
            var flights = action.payload;

            var list = [allCarriers];
            flights.forEach((/**FlightModel*/item) => {
                if (list.indexOf(item.carrier) == -1) {
                    list.push(item.carrier)
                }
            });

            newState.flights = flights;
            newState.carriers = list;
            newState.selectedCarriers = [...list];
            newState.selectedFlights = [...flights];

            return newState;

        case actions.FILTER_CHECK_CARRIER:
            var carrier = action.payload.carrier;
            var isChecked = action.payload.isChecked;

            //запоминаем текущие выбранные
            var selectedCarriers = [...state.selectedCarriers];

            //выбираем / снимаем выбор с авиакомпаний
            var ix = selectedCarriers.indexOf(carrier);
            if (isChecked) {
                if (carrier == allCarriers) {//выбрано все - добавляем в выбранные все
                    selectedCarriers = [...state.carriers];
                }
                else {//выбрана одна - добавляем в выбранные одну
                    if (ix == -1) {
                        selectedCarriers.push(carrier);
                    }
                }
            }
            else {//если снимаем выбор
                if (carrier == allCarriers) {//со всех авиакомп - то снимаем все
                    selectedCarriers = [];
                }
                else {//если с одной - то снимаем ее
                    if (ix > -1) {
                        //remove
                        selectedCarriers.splice(ix, 1);
                    }
                }

            }


            //фильтруем перелеты
            var selectedFlights = state.flights.filter((/**FlightModel*/flight) => {
                return selectedCarriers.indexOf(flight.carrier) != -1;
            });

            newState.selectedCarriers = selectedCarriers;
            newState.selectedFlights = selectedFlights;

            return newState;

        default:
            return state; // Always return the state
    }
}

// Create Store
var appStore = Redux.createStore(rootReducer);

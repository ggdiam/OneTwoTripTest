/**
 * Created by Alexander on 30.03.2017.
 */

//для intellisence
class FlightModel {
    /** @type {number} */
    id;
    /** @type {DirectionModel} */
    direction;
    /** @type {date } */
    arrival;
    /** @type {date} */
    departure;
    /** @type {string} */
    carrier;
}

class DirectionModel {
    /** @type {string} */
    from;
    /** @type {string} */
    to;
}
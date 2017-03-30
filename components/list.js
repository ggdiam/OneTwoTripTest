/**
 * Created by Alexander on 30.03.2017.
 */

const dateFormat = "D MMM HH:mm";

class List extends React.Component {
    render() {
        /** @type {RootState} */
        var data = this.props.data;
        /** @type {FlightModel[]} */
        var selectedFlights = data.selectedFlights;

        return (
            <div className="flights">
                {selectedFlights.length == 0 ? this.renderEmpty() : null}
                <div className="flights__list">
                    {selectedFlights.map(this.renderItem)}
                </div>
            </div>
        )
    }

    /**
     * @param {FlightModel} flight
     * @param ix
     * @returns {XML}
     */
    renderItem = (flight, ix) => {
        var departure = moment(flight.departure).format(dateFormat);
        var arrival = moment(flight.arrival).format(dateFormat);

        return (
            <div key={ix} className="flight">
                <div className="flight__direction">
                    Откуда: {flight.direction.from} - Куда: {flight.direction.to}
                </div>
                <div className="flight__time">
                    Время вылета: {departure}
                </div>
                <div className="flight__time">
                    Время прилета: {arrival}
                </div>
                <div className="flight__carrier">
                    Название авиакомпании: {flight.carrier}
                </div>
            </div>
        )
    };

    renderEmpty() {
        return (
            <div>Пусто</div>
        )
    }
}

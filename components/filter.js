/**
 * Created by Alexander on 30.03.2017.
 */
class Filter extends React.Component {
    props;

    render() {
        /** @type {RootState} */
        var data = this.props.data;
        /** @type {string[]} */
        var carriers = data.carriers;
        /** @type {string[]} */
        var selectedCarriers = data.selectedCarriers;

        return (
            <div className="filter">
                {carriers.map(this.renderItem)}
            </div>
        )
    }

    renderItem = (carrier, ix) => {
        /** @type {RootState} */
        var data = this.props.data;
        /** @type {string[]} */
        var selectedCarriers = data.selectedCarriers;
        /** @type {boolean} */
        var isChecked = selectedCarriers.indexOf(carrier) != -1;

        return (
            <div key={ix}>
                <label htmlFor={`inp_${carrier}`}>
                    <input checked={isChecked}
                           onChange={(e) => this.handleChange(e, carrier)}
                           type="checkbox"
                           id={`inp_${carrier}`}
                           value={carrier}/> {carrier}
                </label>
            </div>
        )
    };

    handleChange = (e, carrier) => {
        /** @type {boolean} */
        var isChecked = e.target.checked;

        this.props.checkCarrier(carrier, isChecked);
    }
}
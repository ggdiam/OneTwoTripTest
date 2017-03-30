/**
 * Created by Alexander on 30.03.2017.
 */

class Widget extends React.Component {
    props;

    constructor(props) {
        super(props);

        this.props.dispatch(initData())
    }

    render() {
        /** @type {RootState} */
        var data = this.props.data;

        return (
            <div className="widget">
                <div className="widget__filter">
                    <Filter data={data} checkCarrier={this.checkCarrier}/>
                </div>
                <div className="widget__list">
                    <List data={data}/>
                </div>
            </div>
        )
    }

    /**
     * @param {string} carrier
     * @param {boolean} isChecked
     */
    checkCarrier = (carrier, isChecked) => {
        this.props.dispatch(checkCarrier(carrier, isChecked))
    }
}

var WidgetContainer = ReactRedux.connect((/**RootState*/state) => {
    return {
        data: state,
    }
})(Widget);
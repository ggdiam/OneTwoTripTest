/**
 * Created by Alexander on 30.03.2017.
 */

moment.locale('ru');

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>OneTwoTrip test</h1>
                <WidgetContainer />
            </div>
        )
    }
}

var Provider = ReactRedux.Provider; // Injects store into context of all descendents
ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>,
    document.getElementById('app')
);
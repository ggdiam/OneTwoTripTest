/**
 * Created by Alexander on 30.03.2017.
 */
// Action Creators:
function initData() {
    return {type: actions.DATA_INIT, payload: rawData.flights};
}

/**
 * @param {string} carrier
 * @param {boolean} isChecked
 */
function checkCarrier(carrier, isChecked) {
    return {type: actions.FILTER_CHECK_CARRIER, payload: {
        carrier: carrier,
        isChecked: isChecked
    }};
}

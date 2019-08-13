import humanizeDuration from 'humanize-duration'

export const totalAmountAvailable = (loans) => {
    return loans.reduce((accum, val) => {
        return accum + parseInt(val.available.replace(/,/g, ''), 10);
    }, 0);
}

export const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN').format(value);
}

export const termRemaining = (value) => {
    return humanizeDuration(parseInt(value) * 1000, { units: ['y', 'mo', 'd'], round: true })
}

export const decreaseAvailable = (available, value) => {
    return parseInt(available.replace(/,/g, ''), 10) - parseInt(value.replace(/,/g, ''), 10)
}
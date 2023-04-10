// BEGIN
export default class Money {

    constructor(value, currency = 'usd') {

        this.value = value;
        this.currency = currency;
    }

    getCurrency() {

        return this.currency;
    }

    getValue() {

        return this.value;
    }

    exchangeTo(currency) {

        if (this.currency === currency) {

            return new Money(this.value, this.currency);
        }

        let isRate = 1;
        if (this.currency === 'usd' && currency === 'eur') {

            isRate = 0.7;
        } else if (this.currency === 'eur' && currency === 'usd') {

            isRate = 1.2;
        }

        const newValue = this.value * isRate;
        return new Money(newValue, currency);
    }

    add(money) {

        if (this.currency === money.currency) {

            const newValue = this.value + money.value;

            return new Money(newValue, this.currency);
        } else {

            const newValue = this.value + money.exchangeTo(this.currency).value;

            return new Money(newValue, this.currency);
        }
    }

    format() {

        const formatter = new Intl.NumberFormat('en-US', {

            style: 'currency',
            currency: this.currency,
            minFractionDigits: 2,
        });

        return formatter.format(this.value);
    }

}
// END

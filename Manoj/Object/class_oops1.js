class Company {
    constructor (name, est_yr) {
        this.name = name;
        this.est_yr = est_yr;
    }

    start() {
        console.log(this.name + 'was established in the year'+ this.est_yr)
    }
}
module.exports = Company;

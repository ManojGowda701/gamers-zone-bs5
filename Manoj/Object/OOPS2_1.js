class Company {
    constructor(company_name, est_yr, place, fortune500) {
        this.company_name = company_name;
        this.est_yr = est_yr;
        this.place = place;
        this.fortune500 = fortune500;
    }

    displayInfo() {
        console.log(`Company name: ${this.company_name}`);
        console.log(`Established Year: ${this.est_yr}`);
        console.log(`Place: ${this.place}`);
        console.log(`Fortune500: ${this.fortune500}`);
        console.log('----------------------');
    }
}

export default Company;
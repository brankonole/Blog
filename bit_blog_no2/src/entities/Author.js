class Author {
    constructor(eachUser) {
        this.id = eachUser.id;
        this.name = eachUser.name;
        this.username = eachUser.username;
        this.email = eachUser.email;
        this.phone = eachUser.phone;
        this.street = eachUser.address.street;
        this.city = eachUser.address.city;
        this.zipcode = eachUser.address.zipcode;
        this.lat = eachUser.address.geo.lat;
        this.lng = eachUser.address.geo.lng;
        this.companyName = eachUser.company.name;
        this.companySlogan = eachUser.company.bs;
    }
}

export default Author;
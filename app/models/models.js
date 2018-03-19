let User = function(name, email, type){
  this.name = name;
  this.email = email;
  this.type = type;
}

let Property = function(address_one, address_two, city, state, zip, beds, baths, sqfeet, price, status, img_1 = '', img_2 = '', img_3 = '', owner = '', tenant = ''){
  this.address_one = address_one;
  this.address_two = address_two;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.beds = beds;
  this.baths = baths;
  this.sqfeet = sqfeet;
  this.price = price;
  this.status = status;
  this.img_1 = this.img_1;
  this.img_2 = this.img_2;
  this.img_3 = this.img_3;
  this.owner = owner || '';
  this.tenant = tenant || '';
};

let Request = function(issue_title, issue_desc, date_started, contact_name, contact_phone, status){
    this.issue_title = issue_title;
    this.issue_desc = issue_desc;
    this.date_started = date_started;
    this.contact_name = contact_name;
    this.contact_phone = contact_phone;
    this.status = status;
};

let Payment = function(date, tenant, property, amount, method, tenant = ''){
  this.date = date;
  this.tenant = tenant;
  this.property = property;
  this.amount = amount;
  this.method = method;
  this.tenant = tenant;
}

module.exports = {User, Property, Request, Payment};
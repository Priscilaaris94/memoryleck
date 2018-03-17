let Property = function(address_one, address_two, city, state, zip, beds, baths, sqfeet, price, status, owner = '', tenant = ''){
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
  this.owner = owner || '';
  this.tenant = tenant || '';
};

module.exports = Propery;
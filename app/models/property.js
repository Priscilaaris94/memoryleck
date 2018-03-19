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

module.exports = Propery;
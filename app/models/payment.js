let Payment = function(date, tenant, property, amount, method, user = ''){
  this.date = date;
  this.tenant = tenant;
  this.property = property;
  this.amount = amount;
  this.method = method;
  this.user = user;
}

module.exports = Payment;
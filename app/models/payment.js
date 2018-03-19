let Payment = function(date, tenant, property, amount, method, tenant = ''){
  this.date = date;
  this.tenant = tenant;
  this.property = property;
  this.amount = amount;
  this.method = method;
  this.tenant = tenant;
}

module.exports = Payment;
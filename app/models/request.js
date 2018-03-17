let Request = function(issue_title, issue_desc, date_started, contact_name, contact_phone, status){
    this.issue_title = issue_title;
    this.issue_desc = issue_desc;
    this.date_started = date_started;
    this.contact_name = contact_name;
    this.contact_phone = contact_phone;
    this.status = status;
};

module.exports = Request;

App.Models.Contact = Backbone.Model.extend({
  defaults: {
    first_name: '',
    last_name: '',
    phone_num: ''
  },

  validate: function(attrs) {
    var errors = [];
    if (!attrs.first_name) {
      errors.push({ message: 'Please enter a first name for this contact' });
    }
    if (!attrs.last_name) {
      errors.push({ message: 'Please enter a last name for this contact' });
    }
    if (!attrs.phone_num) {
      errors.push({ message: 'Please enter a phone number for this contact' });
    }
    if (!attrs.phone_num.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)) {
      // return error if phone number contains wrong number of digits
        errors.push({ message: 'Please enter a valid phone number, using the ###-###-#### format' });
    }
    if (errors.length > 0) return errors;
  }
});
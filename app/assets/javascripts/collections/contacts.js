App.Collections.Contacts = Backbone.Collection.extend({

  url: '/contacts',

  model: App.Models.Contact,
  
  comparator: function(contact) {
    return contact.get('last_name');
  }
  
});
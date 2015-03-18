App.Collections.Contacts = Backbone.Collection.extend({
  url: '/contacts',
  model: App.Models.Contact
});
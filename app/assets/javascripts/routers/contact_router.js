App.Routers.Main = Backbone.Router.extend({

  routes: {
    '': 'index',
    'new': 'newContact',
    'contacts/:cid': 'showContact',
    'contacts/:cid/edit': 'editContact'
  },

  initialize: function() {
    App.Collections.contacts = new App.Collections.Contacts();
    App.Collections.contacts.fetch();
    App.Views.formView = new App.Views.FormView(
      { collection: App.Collections.contacts }
    );
    App.Views.contactsView = new App.Views.ContactsView(
      { collection: App.Collections.contacts ,
        formView: App.Views.formView
      }
    );
  },

  index: function() {

  },

  newContact: function() {
    App.Views.formView.show();
  },

})
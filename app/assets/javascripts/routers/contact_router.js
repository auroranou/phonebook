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
    App.Views.contactsView.unfilter();
  },

  newContact: function() {
    App.Views.formView.show();
  },

  showContact: function(cid) {
    App.Views.contactsView.filterByCID(cid);
  },

  editContact: function(cid) {
    App.Views.contactsView.filterByCID(cid);
    App.Views.contactsView.getViewWithCID('c4').edit();
  }

})
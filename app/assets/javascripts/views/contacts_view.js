App.Views.ContactsView = Backbone.View.extend({

  el: '#contacts',

  events: {
    'click #newContact': 'showForm'
  },

  initialize: function(options) {
    this.listenTo(this.collection, 'add', this.addOne);
    this.listenTo(this.collection, 'reset', this.addAll);

    this.views = [];
    this.formView = options.formView;

    this.addAll();
  },

  addOne: function() {

  },

  addAll: function() {

  },

  showForm: function(){
    this.formView.show();
  }

});
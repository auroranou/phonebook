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

  addOne: function(contact) {
    var newView = new App.Views.ContactView({ model: contact });
    if (contact.isValid()) {
      console.log("added one");
      this.views.push(newView);
      this.$el.append(newView.el);
    }
  },

  addAll: function() {
    this.collection.each(function(contact) {
      this.addOne(contact);
    }, this);
    this.collection.sort({ silent: true })
  },

  showForm: function(){
    this.formView.show();
  },

  filterByCID: function(cid) {
    _.each(this.views, function(view) {
      if (view.model.cid != cid) {
        view.$el.hide();
      }
    });
  },

  getViewWithCid: function(cid) {
    var matches = _.filter(this.views, function(view) {
      return view.model.cid === cid
    });

    return matches[0];
  },

  unfilter: function() {
    this.$('.contact').show();
  }

});
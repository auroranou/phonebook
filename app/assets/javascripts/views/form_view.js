App.Views.FormView = Backbone.View.extend({

  el: '#modal',

  events: {
    'click #closeModal': 'hide',
    'click #addContact': 'addContact'
  },

  initialize: function() {
    this.render();
  },

    show: function() {
    App.Routers.main.navigate('new');
    this.$el.removeClass('hidden');
  },

  hide: function() {
    App.Routers.main.navigate('');
    this.$el.addClass('hidden');
  },

  addContact: function() {
    var data = this.getFormData();
    this.collection.create(data, {
      success: function(model, response, options) {
        console.log(model, response);
      },
      error: function(model, response) {
        alert(response.responseJSON.error);
      }
    });
    this.render();
    this.hide();
  },

  getFormData: function() {
    var data = {
      first: this.$("[name='first_name']").val(),
      last: this.$("[name='last_name']").val(),
      phone: this.$("[name='phone_num']").val()
    }
    return data;
  }

});
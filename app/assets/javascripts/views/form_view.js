App.Views.FormView = Backbone.View.extend({

  el: '#modal',

  events: {
    'click #closeModal': 'hide',
    'click #addContact': 'addContact'
  },

  initialize: function() {
    this.render();
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
  },

  show: function() {
    this.$el.removeClass('hidden');
  },

  hide: function() {
    this.$el.addClass('hidden');
  }

});
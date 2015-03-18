App.Views.FormView = Backbone.View.extend({

  el: '#modal',

  events: {
    'click #closeModal': 'hide',
    'click #addContact': 'addContact'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$('form')[0].reset();
  },

  hide: function() {
    App.Routers.main.navigate('');
    this.$el.addClass('hidden');
  },
  
  show: function() {
    App.Routers.main.navigate('new');
    this.$el.removeClass('hidden');
  },

  getFormData: function() {
    var data = {
      first_name: this.$("[name='first_name']").val(),
      last_name: this.$("[name='last_name']").val(),
      phone_num: this.$("[name='phone_num']").val()
    }

    return data;
  },

  addContact: function(e) {
    e.preventDefault();

    var data = this.getFormData();
    this.collection.create(data, {
      success: function(model, response, options) {
        console.log('successfully added: ', model, response);
      },
      error: function(model, response) {
        alert(response.responseJSON.error);
      }
    });

    App.Routers.main.navigate('');
    this.hide();
    this.render();
  }

});
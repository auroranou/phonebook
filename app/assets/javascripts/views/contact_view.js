App.Views.ContactView = Backbone.View.extend({

  className: 'contact',

  events: {
    'click span.show': 'show', 
    'click span.edit': 'edit', 
    'click #updateContact': 'update',
    'click span.destroy': 'destroy'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render); 

    var contactSource = $('#contact-template').html();
    this.contactTemplate = Handlebars.compile(contactSource);

    var formSource = $('#form-template').html();
    this.formTemplate = Handlebars.compile(formSource);

    if (this.model.isValid()) {
      this.render();
    } else {
      this.showError(this.model.validationError);
    }
  },

  render: function() {
    this.$el.html(this.contactTemplate(this.model.toJSON()));
  },

  showError: function(error) {
    console.log('contact view errors: ', error);
    _.each(error, function(err) {
      $('.contactForm').prepend('<p>' + err.message + '</p>')
    });
  },

  show: function() {
    App.Routers.main.navigate('contacts/' + this.model.cid);
    App.Views.contactsView.filterByCID(this.model.cid);
  },

  edit: function() {
    App.Routers.main.navigate('contacts' + this.model.cid + '/edit');
    this.$('.contactForm').remove();
    this.$el.append(this.formTemplate(this.model.toJSON()));
  },

  update: function(e) {
    e.preventDefault();

    var self = this;
    var data = this.getFormData();
    this.model.save(data, {
      // validate: true,
      success: function(model, response, options) {
        console.log(model, response);
        App.Routers.main.navigate('');
        self.$('.contactForm').remove();
      },
      error: function(model, response) {
        console.log(model.validationError);
      }
    });
  },

  getFormData: function() {
    var data = {
      first_name: this.$("[name='first_name']").val(),
      last_name: this.$("[name='last_name']").val(),
      phone_num: this.$("[name='phone_num']").val()
    }
    return data;
  },

  destroy: function() {
    this.model.destroy();
    this.remove();
  }
  
});
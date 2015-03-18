App.Views.ContactView = Backbone.View.extend({

  className: 'contact',

  events: {
    'click span.show': 'show', 
    'click span.edit': 'edit', 
    'click span.update': 'update',
    'click span.destroy': 'destroy'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render)

    var contactSource = $('#contact-template').html();
    this.contactTemplate = Handlebars.compile(contactSource);

    var formSource = $('#form-template').html();
    this.formTemplate = Handlebars.compile(formSource);

    this.render();
  },

  render: function() {
    this.$el.html(this.contactTemplate(this.model.toJSON()));
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

  update: function() {
    var data = this.getFormData();
    this.model.save(data);
    this.$('.contactForm').remove();
    App.Routers.main.navigate('');
  },

  getFormData: function() {
    var data = {
      first: this.$("[name='first_name']").val(),
      last: this.$("[name='last_name']").val(),
      phone: this.$("[name='phone_num']").val()
    }
    return data;
  },

  destroy: function() {
    this.model.destroy();
    this.remove();
  }
  
});
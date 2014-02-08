(function () {
  "use strict";
  APP.Views.GowithNewView = Backbone.View.extend({
    // functions to fire on events
    events: {
      "click button.save": "save"
    },

    // the constructor
    initialize: function (options) {
      this.Gowith  = options.Gowith;
      this.Gowiths = options.Gowiths;
      this.Gowith.bind('invalid', this.showErrors, this);
    },

    showErrors: function (Gowith, errors) {
      this.$el.find('.error').removeClass('error');
      this.$el.find('.alert').html(_.values(errors).join('<br>')).show();
      // highlight the fields with errors
      _.each(_.keys(errors), _.bind(function (key) {
        this.$el.find('*[name=' + key + ']').parent().addClass('error');
      }, this));
    },

    save: function (event) {
      event.stopPropagation();
      event.preventDefault();
      this.Gowith.set({
        title: this.$el.find('input[name=title]').val(),
        author: this.$el.find('input[name=author]').val(),
        description: this.$el.find('textarea[name=description]').val(),
		beginTime: this.$el.find('input[name=beginTime]').val(),
        id: Math.floor(Math.random() * 100) + 1
      });
      if (this.Gowith.isValid()){
        // add it to the collection
        this.Gowiths.add(this.Gowith);
        alert('保存成功');
        router.navigate('gowiths/index',{trigger:true,replace:true});
       
      }
    },

    // populate the html to the dom
    render: function () {
      this.$el.html(_.template($('#template_gowith_new').html(), this.Gowith.toJSON()));
    
      return this;
    }
  });
}());

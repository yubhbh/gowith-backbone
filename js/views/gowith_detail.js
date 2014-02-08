(function () {
  "use strict";
  APP.Views.GowithDetailView = Backbone.View.extend({

    // the constructor
    initialize: function (options) {
 
    }, 
    // populate the html to the dom
    render: function () {
      this.$el.html(_.template($('#template_gowith_detail').html()));
    
      return this;
    }
  });
}());

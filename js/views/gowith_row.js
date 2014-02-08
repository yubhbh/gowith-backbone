
(function () {
  "use strict";
  APP.Views.GowithRowView = Backbone.View.extend({
    // the wrapper defaults to div, so only need to set this if you want something else
    // like in this case we are in a ul so a li
    tagName: "li",
    // functions to fire on events
    events: {
      "click a": "gotodetail"
    },

    // the constructor
    initialize: function (options) {
      // model is passed through
      this.Gowith  = options.Gowith;
      this.Gowiths = options.Gowiths;
    },

    // populate the html to the dom
    render: function () {
 
      this.$el.html(_.template($('#template_gowith_row').html(),this.Gowith.toJSON()));
      return this;
    },

 
    gotodetail: function (event) {
      router.navigate('gowith/12/detail', {trigger: true, replace: true} );
    }
  });
}());

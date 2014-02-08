(function () {
  "use strict";
  window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Routers.GowithRouter = Backbone.Router.extend({
    routes: {
      "gowith/new": "create",
      "gowiths/index": "index",
      "gowith/:id/edit": "edit",
      "gowith/:id/detail": "detail"
    },

    initialize: function (options) {
      this.Gowiths = options.Gowiths;
      // this is debug only to demonstrate how the backbone collection / models work
      this.Gowiths.bind('reset', this.updateDebug, this);
      this.Gowiths.bind('add', this.updateDebug, this);
      this.Gowiths.bind('remove', this.updateDebug, this);
      this.index();
    },

    updateDebug: function () {
      $('#output').text(JSON.stringify(this.Gowiths.toJSON(), null, 4));
      
    },

    create: function () {
      this.currentView = new APP.Views.GowithNewView({Gowiths: this.Gowiths, Gowith: new APP.Models.GowithModel()});
	    this.setHeader({title:"发起结伴",showRightBtn:false});
	    
      $('#dynamic_content').html(this.currentView.render().el);
	 
    },

    edit: function (id) {
      var gowith = this.Gowiths.get(id);
      this.currentView = new APP.Views.gowithEditView({gowith: gowith});
      $('#dynamic_content').html(this.currentView.render().el);
    },

    detail: function (id) {
	 this.setHeader({title:"结伴详情",showRightBtn:true});
      var gowith = this.Gowiths.get(id);
      this.currentView = new APP.Views.GowithDetailView({gowith: gowith});
      $('#dynamic_content').html(this.currentView.render().el);
    },
    setHeader:function(headerset){
	    var hs = headerset || {title:"结伴",showRightBtn:true}
	   
	    if(hs){
		   $(".head-title").html(hs.title);
		   if(hs.showRightBtn){
		     $(".p_nav .nav").show();
		   }
		   else{
		     $(".p_nav .nav").hide();
		   }
	    }
	 
    },
    index: function () {
      this.currentView = new APP.Views.GowithIndexView({Gowiths: this.Gowiths});
      $('#dynamic_content').html(this.currentView.render().el);
	  this.setHeader();

    }
  });
}());

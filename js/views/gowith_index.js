(function () {
  "use strict";
  window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  
  APP.Views.GowithIndexView = Backbone.View.extend({
    // 构造函数
    initialize: function (options) {
      // model 参数传入
      this.Gowiths = options.Gowiths;
      this.Gowiths.bind('reset', this.addAll, this);
	  console.log("not ok");
    },

    // populate the html to the dom
    render: function () {
      this.$el.html($('#template_gowith_index').html());
      this.addAll();
      return this;
    },

    addAll: function () {
      // clear out the container each time you render index
      this.$el.find('ul').children().remove();
      _.each(this.Gowiths.models, $.proxy(this, 'addOne'));
    },

    addOne: function (gowith) {
      var view = new APP.Views.GowithRowView({Gowiths: this.Gowiths, Gowith: gowith});
      this.$el.find(".item_list ul").append(view.render().el);
    }
  });
}());

function getServerData(callback){
  
  var data = [{"title":"美国西海岸10日自由行（兰辛—洛杉矶—拉斯...","description":"sunrise88","activityTipe":"","destination":"","destinationId":"","img":"http://dimg01.c-ctrip.com/images/tg/985/993/224/e1c859c8b0254531835b433b74ec1ea1_R_240_240.jpg","beginTime":"2013-07-02","lastDays":0,"holpPeople":0},{"title":"[i旅行]南疆梦","description":"东来东往_","activityTipe":"","destination":"","destinationId":"","img":"http://dimg01.c-ctrip.com/images/tg/399/157/372/56ffee3773984aef9b420a12309b92e1_R_240_240.jpg","beginTime":"2013-07-24","lastDays":0,"holpPeople":0},{"title":"花甲老人也到台湾自由行(1)","description":"T1171280763","activityTipe":"","destination":"","destinationId":"","img":"http://dimg01.c-ctrip.com/images/tg/391/498/438/22208c0d3ae44ad1a88fbf275651ca90_R_240_240.jpg","beginTime":"2012-05-23","lastDays":0,"holpPeople":0},{"title":"I Love Guam——关岛初体验","description":"用户3966529","activityTipe":"","destination":"","destinationId":"","img":"http://dimg01.c-ctrip.com/images/tg/737/637/184/309e879cdc9141bebe5098401cc38e7e_R_240_240.jpg","beginTime":"2012-09-19","lastDays":0,"holpPeople":0}];
  
  setTimeout(function(){
    callback(data);
  },10)
  
}

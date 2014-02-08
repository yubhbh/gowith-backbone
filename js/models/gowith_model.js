(function () {
  "use strict";
  APP.Models.GowithModel = Backbone.Model.extend({
    // 模型字段，尽量与后端交互实现一致
    defaults: {
       title: ""       //标题
	  ,description:''  //描述
	  ,activityTipe:'' //活动类型
	  ,destination:''  //目的地
	  ,destinationId:''//目的地id
	  ,img:''          //目的地图片
	  ,beginTime:null  //开始时间
	  ,lastDays:0      //持续天数
	  ,holpPeople:0    //希望人数
    },

    validate: function (attrs) {
      var errors = {};
      if (attrs.title === '') {
        errors.title = "请填写标题";
      }
	  if (attrs.title !== '' && attrs.title.length > 40) {
        errors.title = "标题不能超过40字";
      }
      if (attrs.description === '') {
        errors.description = "请填写活动说明";
      }
	  if (attrs.description !== '' && attrs.description.length > 1000) {
        errors.description = "活动说明不能超过1000字";
      }
	  if(attrs.beginTime==null || attrs.beginTime =='' ){
	      errors.beginTime = '请选择开始时间';
	  }

      

      if (!_.isEmpty(errors)) {
        return errors;
      }
    }
  });

  APP.Collections.GowithCollection = Backbone.Collection.extend({
    // 影射 GowithModel到 GowithCollection
    model: APP.Models.GowithModel
  });
}());

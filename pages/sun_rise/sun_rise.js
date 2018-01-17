// sun_rise.js

var answerData = require("../answers/answerData.js")
var anim_data = require("./anim_data.js")
var anim_sun_rise = require("./anim_sun_rise.js")
var anim_tutorial = require("./anim_tutorial.js")

var State = {
  toturial: "toturial",
  pressing: "pressing",
  ending: "ending",
  waiting: "waiting"
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    state: "",
    isShowTutorialTxt: true,
    content: "",
    subContent: "",
    exp: "",
    tableAnimation: "",
    contentAnimation: "",
    subContentAnimation: "",
    expAnimation: "",
    tutorial_txt: "",
    /* 动画 */
    _anim_sun_rise: "",
    _anim_tutorial_txt_1: "",
    _anim_tutorial_txt_2: "",
    _anim_tutorial_txt_3: "",
    _anim_cloud_1: "",
    _anim_cloud_2: "",
    _anim_cloud_3: "",
    _anim_cloud_4: "",
  },

  touchStartTime: 0,
  touchEndTime: 0,
  duration: 0,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.answerData = new answerData()
    this.anim_data = new anim_data()
    this.anim_sun_rise = new anim_sun_rise()
    this.anim_tutorial = new anim_tutorial()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 设置content默认内容
    this.initial()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  /**
   * 设置默认文本、初始状态
   */
  initial: function () {
    this.setData({
      content: this.answerData.getDefaultContent(),
      subContent: this.answerData.getDefaultSubContent(),
      tutorial_txt: this.answerData.getTutorialTxt(),
      state: State.toturial,
      _anim_sun_rise: this.anim_sun_rise.initial().export(),
      _anim_tutorial_txt_1: this.anim_tutorial.initialTxt().export(),
      _anim_tutorial_txt_2: this.anim_tutorial.initialTxt().export(),
      _anim_tutorial_txt_3: this.anim_tutorial.initialTxt().export(),
      _anim_cloud_1: this.anim_tutorial.initialCloud(true).export(),
      _anim_cloud_2: this.anim_tutorial.initialCloud(false).export(),
    })

    setTimeout(function () {
      this.setData({
        _anim_tutorial_txt_1: this.anim_tutorial.moveDown(this.anim_data.tutorialTime, 0).export(),
        _anim_tutorial_txt_2: this.anim_tutorial.moveDown(this.anim_data.tutorialTime,this.anim_data.tutorialDelay).export(),
        _anim_tutorial_txt_3: this.anim_tutorial.moveDown(this.anim_data.tutorialTime, this.anim_data.tutorialDelay * 2).export(),
        _anim_cloud_1: this.anim_tutorial.moveIn(this.anim_data.tutorialDuration(), 0).export(),
        _anim_cloud_2: this.anim_tutorial.moveIn(this.anim_data.tutorialDuration(), 0).export(),
      })
    }.bind(this), this.anim_data.tutorialDelay / this.anim_data.tutorialPara)

    setTimeout(function () {
      this.setData({
        state: State.waiting
      })
    }.bind(this), this.anim_data.tutorialDuration())
  },

  longPress: function(e) {
    if (this.data.state == State.waiting)
    {
      console.log("long tap start")
      this.touchStartTime = e.timeStamp

      var time = this.anim_data.pressDuration + this.anim_data.afterPress
      this.setData({
        state: State.pressing,
        isShowTutorialTxt: false,
        _anim_sun_rise: this.anim_sun_rise.moveUp(time).export()
      })
    }
  },

  touchEnd: function (e) {
    if (this.data.state == State.pressing)
    {
      this.touchEndTime = e.timeStamp
      this.duration = this.touchEndTime - this.touchStartTime
      console.log(this.duration)

      if (this.duration < this.anim_data.pressDuration) {
        this.setData({
          state: State.waiting,
          _anim_sun_rise: this.anim_sun_rise.interrupt(this.duration).export()
        })
      }
    }
  },
})
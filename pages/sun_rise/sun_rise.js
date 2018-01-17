// sun_rise.js

var answerData = require("../answers/answerData.js")
var anim_data = require("./anim_data.js")
var anim_sun_rise = require("./anim_sun_rise.js")

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
    content: "",
    subContent: "",
    exp: "",
    tableAnimation: "",
    contentAnimation: "",
    subContentAnimation: "",
    expAnimation: "",
    tutorial_txt: "",
    _anim_sun_rise: ""
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
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 设置content默认内容
    this.setDefaultContent()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

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
  setDefaultContent: function () {
    this.setData({
      content: this.answerData.getDefaultContent(),
      subContent: this.answerData.getDefaultSubContent(),
      tutorial_txt: this.answerData.getTutorialTxt(),
      state: State.toturial,
      _anim_sun_rise: this.anim_sun_rise.initial().export()
    })
  },

  longPress: function(e) {
    if (this.data.state == State.toturial || this.data.state == State.waiting)
    {
      console.log("long tap start")
      this.data.state = State.pressing
      this.touchStartTime = e.timeStamp

      var time = this.anim_data.pressDuration + this.anim_data.afterPress
      this.setData({
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
      // 停止播放音频
      // this.stopPressAudio()

      if (this.duration < this.anim_data.pressDuration) {
        // 清除计时-----content出现
        // clearTimeout(this.timeout_press_over)
        this.setData({
          _anim_sun_rise: this.anim_sun_rise.interrupt(this.duration).export()
        })
        this.data.state = State.waiting
      }
    }
  },
})
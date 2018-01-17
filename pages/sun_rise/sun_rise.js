// sun_rise.js

var answer_data = require("../answers/answer_data.js")
var anim_data = require("./anim_data.js")
var anim_sun_rise = require("./anim_sun_rise.js")
var anim_tutorial = require("./anim_tutorial.js")
var anim_content = require("./anim_content.js")
var anim_sun_cloud = require("./anim_sun_cloud.js")
var anim_exp = require("./anim_exp.js")


var State = {
  toturial: "toturial",
  pressing: "pressing",
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
    _anim_content: "",
    _anim_sub_content: "",
    _anim_exp: "",
  },

  touchStartTime: 0,
  touchEndTime: 0,
  duration: 0,
  lastIndex: -1,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.answer_data = new answer_data()
    this.anim_data = new anim_data()
    this.anim_sun_rise = new anim_sun_rise()
    this.anim_tutorial = new anim_tutorial()
    this.anim_content = new anim_content()
    this.anim_sun_cloud = new anim_sun_cloud()
    this.anim_exp = new anim_exp()
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
   * 设置默认文本、初始状态，教程动画
   */
  initial: function () {
    this.setData({
      content: this.answer_data.getDefaultContent(),
      subContent: this.answer_data.getDefaultSubContent(),
      exp: this.answer_data.getDefaultExp(),
      tutorial_txt: this.answer_data.getTutorialTxt(),
      state: State.toturial,
      _anim_sun_rise: this.anim_sun_rise.initial().export(),
      _anim_tutorial_txt_1: this.anim_tutorial.initialTxt().export(),
      _anim_tutorial_txt_2: this.anim_tutorial.initialTxt().export(),
      _anim_tutorial_txt_3: this.anim_tutorial.initialTxt().export(),
      _anim_cloud_1: this.anim_tutorial.initialCloud(true).export(),
      _anim_cloud_2: this.anim_tutorial.initialCloud(false).export(),
      _anim_cloud_3: this.anim_sun_cloud.initial(true).export(),
      _anim_cloud_4: this.anim_sun_cloud.initial(false).export(),
      _anim_exp: this.anim_exp.initial().export()
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
      this.touchStartTime = e.timeStamp

      var time = this.anim_data.pressDuration + this.anim_data.afterPress
      this.setData({
        content: "",
        subContent: "",
        exp: "",
        state: State.pressing,
        isShowTutorialTxt: false,
        _anim_sun_rise: this.anim_sun_rise.initial().export(),
        _anim_cloud_3: this.anim_sun_cloud.initial(true).export(),
        _anim_cloud_4: this.anim_sun_cloud.initial(false).export(),

        _anim_content: this.anim_content.initialTxt().export(),
        _anim_sub_content: this.anim_content.initialSubTxt().export(),
        _anim_exp: this.anim_exp.initial().export(),
      })

      setTimeout(function () {
        this.setData({
          _anim_sun_rise: this.anim_sun_rise.moveUp(time).export(),
          _anim_cloud_3: this.anim_sun_cloud.move(time).export(),
          _anim_cloud_4: this.anim_sun_cloud.move(time).export(),
        })
      }.bind(this), 20)

      // 设置计时器，按压结束后一系列动作
      this.timeout_press_over = setTimeout(this.pressSuccess.bind(this), time)
    }
  },

  touchStart: function(e) {
  },

  touchEnd: function (e) {
    if (this.data.state == State.pressing)
    {
      this.touchEndTime = e.timeStamp
      this.duration = this.touchEndTime - this.touchStartTime

      if (this.duration < this.anim_data.pressDuration) {
        // 清除计时
        clearTimeout(this.timeout_press_over)

        this.setData({
          state: State.waiting,
          _anim_sun_rise: this.anim_sun_rise.interrupt(this.duration).export(),
          _anim_cloud_3: this.anim_sun_cloud.interrupt(this.duration, true).export(),
          _anim_cloud_4: this.anim_sun_cloud.interrupt(this.duration, false).export(),
          
        })
      }
    }
  },

  /**
   * 按压时间到结束的一系列动作
   */
  pressSuccess: function () {
    var answer = this.getRandomAnswer()
    var time = this.anim_data.contentDuration + this.anim_data.contentInteral + this.anim_data.subContentDuration

    this.setData({
      content: answer.content,
      subContent: answer.subContent,
      exp: answer.exp,
      _anim_content: this.anim_content.contentShow(this.anim_data.contentDuration, 0).export(),
      _anim_sub_content: this.anim_content.subContentShow(this.anim_data.subContentDuration, this.anim_data.contentInteral + this.anim_data.contentDuration).export(),
      _anim_exp: this.anim_exp.expShow(this.anim_data.expDuration, time).export(),
    })

    setTimeout(function () {
      this.setData({
        state: State.waiting
      })
    }.bind(this), time + this.anim_data.expDuration)
  },

  getRandomAnswer: function () {
    var index = -1;
    var length = this.answer_data.getAnswerLength()
    if (this.lastIndex != -1) {
      // 不是第一次，需要判断重复
      do {
        // 防止和上次重复
        index = Math.floor(Math.random() * length)
      } while (this.lastIndex == index)
    } else {
      // 第一次直接随机
      index = Math.floor(Math.random() * length)
    }
    this.lastIndex = index
    var answer = this.answer_data.getAnswerByIndex(index)
    return answer
  }
})
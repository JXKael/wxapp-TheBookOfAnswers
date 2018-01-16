// sun_rise.js

var answerData = require("../answers/answerData.js")

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
    tutorial_txt: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.answerData = new answerData()
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
      state: State.toturial
    })
  },
})
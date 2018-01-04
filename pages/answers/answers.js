// answers.js

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    answer: "Your Answer",
    lastAnswerIndex: -1,
    answers: [
      "学会珍惜",
      "不要刻意压抑",
      "放轻松，这很简单",
      "去问问你的父亲",
      "请多点耐心",
      "别下太多的赌注",
      "let it go"
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 实践处理函数：用户单击寻找答案
   */
  onClickSearchAnswer: function (e) {
    var answerIndex = -1;
    if (this.data.lastAnswerIndex != -1)
    {
      do {
        // 防止和上次重复
        answerIndex = Math.floor(Math.random() * this.data.answers.length)
      } while (this.data.lastAnswerIndex == answerIndex)
    }else{
      answerIndex = Math.floor(Math.random() * this.data.answers.length)
    }
    // 更新数据以更新显示
    this.setData({
      answer: this.data.answers[answerIndex],
      lastAnswerIndex: answerIndex
    })
  }
})
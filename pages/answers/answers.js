// answers.js

//获取应用实例
const app = getApp()

var answerData = require("./answerData.js")

Page({
  /**
   * 页面的初始数据
   */
  data: {
    content: "",
    subContent: "",
    exp: "",
    tableAnimation: "",
    contentAnimation: "",
    subContentAnimation: "",
    expAnimation: "",
    audio_src: "../../assets/audio_001.mp3"
  },

  // 触摸事件
  inShow: false,
  touchStartTime: 0,
  touchEndTime: 0,
  duration: 0,
  // 动画
  pressDuration: 6000,
  defaultStopDuration: 1500,
  deg: 0,
  rotateDeg: 180,
  contentDuration: 1000,
  subContentDelay: 500,
  subContentDuration: 1000,
  
  lastIndex: -1,

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
    // 音频上下文
    this.audioCtx = wx.createAudioContext("myAudio")
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

  touchStart: function (e) {
    if (!this.inShow)
    {
      this.touchStartTime = e.timeStamp
      // console.log("touch start at " + this.touchStartTime)

      // 清除旧的内容
      this.clearOldContent()

      // 设置旋转动画
      this.createTableRotateAnimation()
      // 设置content动画初始位置
      this.createContentStartAnimation()
      // 设置subContent动画初始位置
      this.createSubContentStartAnimation()
      // 设置exp动画初始位置
      this.createExpStartAnimation()
      // 播放音频
      this.playPressAudio()

      // 设置计时器，显示新内容，1.5s归位置
      this.timeout = setTimeout(this.setNewContent.bind(this), this.pressDuration)
      this.timeout_stop = setTimeout(this.createTableStopAnimation.bind(this), this.pressDuration)
      this.timeout_contentShow = setTimeout(this.createContentShowAnimation.bind(this), this.pressDuration)
      this.timeout_subContentShow = setTimeout(this.createSubContentShowAnimation.bind(this), this.pressDuration + this.contentDuration)
      this.timeout_audioPress = setTimeout(this.stopPressAudio.bind(this), this.pressDuration)
    }
  },

  touchEnd: function (e) {
    if (!this.inShow)
    {
      this.touchEndTime = e.timeStamp
      // console.log("touch end at " + this.touchEndTime)
      this.duration = this.touchEndTime - this.touchStartTime
      // 清除计时-----新内容
      clearTimeout(this.timeout)
      // 清除计时-----1.5s延时
      clearTimeout(this.timeout_stop)

      // 停止播放音频
      this.stopPressAudio()

      if (this.duration < this.pressDuration) {
        // 清除计时-----content出现
        clearTimeout(this.timeout_contentShow)
        // 清除计时-----subContent出现
        clearTimeout(this.timeout_subContentShow)
        // 清除计时-----音频停止播放
        clearTimeout(this.timeout_audioPress)
        this.createTableInterruptAnimation()
      }
    }
  },

  /**
   * 设置默认content文本
   */
  setDefaultContent: function () {
    this.setData({
      content: this.answerData.getDefaultContent(),
      subContent: this.answerData.getDefaultSubContent()
    })
  },

  /**
   * 清除旧的content
   */
  clearOldContent: function () {
    this.setData({
      content: "",
      subContent: "",
      exp: ""
    })
  },

  /**
   * 设置新的content
   */
  setNewContent: function () {
    this.inShow = true;
    setTimeout(function(){
      this.inShow = false;
    }.bind(this), this.defaultStopDuration + this.contentDuration + this.subContentDelay)

    var index = -1;
    var length = this.answerData.getAnswerLength()
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
    // 更新数据以更新显示
    var answer = this.answerData.getAnswerByIndex(index)
    this.lastIndex = index
    this.setData({
      content: answer.content,
      subContent: answer.subContent,
      exp: answer.exp,
    })
  },

  /**
   * 播放按压音频
   */
  playPressAudio: function (){
    this.audioCtx.seek(3)
    this.audioCtx.play()
  },

  /**
   * 停止按压音频
   */
  stopPressAudio: function (){
    this.audioCtx.pause()
  },

  /**
   * 设置table旋转动画
   */
  createTableRotateAnimation: function () {
    var rotateAnimation = wx.createAnimation({
      duration: this.pressDuration,
      timingFunction: 'linear',
    })
    rotateAnimation.rotateZ(this.deg + this.rotateDeg).step()
    // 输出动画
    this.setData({
      tableAnimation: rotateAnimation.export()
    })
  },

  /**
   * 设置table中断动画
   */
  createTableInterruptAnimation: function () {
    var interrupAnimation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out',
    })
    var degree = (this.rotateDeg / this.pressDuration) * Math.min(this.duration, this.pressDuration)
    this.deg += Math.round(degree)
    // console.log("中断: " + this.deg)
    interrupAnimation.rotateZ(this.deg).step()
    // 输出动画
    this.setData({
      tableAnimation: interrupAnimation.export()
    })
  },

  /**
   * 设置table停止动画
   */
  createTableStopAnimation: function () {
    this.deg += this.rotateDeg
    // console.log("当前角度: " + this.deg)
    // console.log("除以360: " + this.deg / 360)
    // console.log("取整: " + Math.floor(this.deg / 360))
    // console.log("乘回360: " + Math.floor(this.deg / 360) * 360)
    // 必须加一个temp否则会出错，这TM什么编译器啊！
    var temp = Math.floor(this.deg / 360) * 360
    this.deg = temp + 360
    // console.log("再加360: " + (temp + 360))
    // console.log("停止: " + this.deg)
    var stopAnimation = wx.createAnimation({
      duration: this.defaultStopDuration,
      timingFunction: 'ease',
    })
    stopAnimation.rotateZ(this.deg).step()
    // 输出动画
    this.setData({
      tableAnimation: stopAnimation.export()
    })

    setTimeout(this.createTableResetAnimation.bind(this), this.defaultStopDuration)
  },

  /**
   * 将table旋转坐标瞬间设置为0
   */
  createTableResetAnimation: function () {
    this.deg = 0
    var resetAnimation = wx.createAnimation({
      duration: 1,
      timingFunction: 'step-start',
    })
    // console.log("重置: " + this.deg)
    resetAnimation.rotateZ(this.deg).step()
    // 输出动画
    this.setData({
      tableAnimation: resetAnimation.export()
    })
  },

  /**
   * content内容动画初始设置
   */
  createContentStartAnimation: function() {
    var animation = wx.createAnimation({
      duration: 1,
      timingFunction: 'step-start',
    })
    animation.opacity(0).translateY(40).scale(0.8).step()
    // 输出动画
    this.setData({
      contentAnimation: animation.export()
    })
  },

  /**
   * content内容出现动画
   */
  createContentShowAnimation: function () {
    var animation = wx.createAnimation({
      duration: this.contentDuration,
      timingFunction: 'linear',
    })
    animation.opacity(1).translateY(0).scale(1).step()
    // 输出动画
    this.setData({
      contentAnimation: animation.export()
    })
  },

  /**
   * subContent内容初始设置
   */
  createSubContentStartAnimation: function () {
    var animation = wx.createAnimation({
      duration: 1,
      timingFunction: 'step-start',
    })
    animation.opacity(0).step()
    // 输出动画
    this.setData({
      subContentAnimation: animation.export()
    })
  },

  /**
   * subContent内容出现动画
   */
  createSubContentShowAnimation: function () {
    var animation = wx.createAnimation({
      duration: this.subContentDuration,
      timingFunction: 'linear',
      delay: this.subContentDelay
    })
    animation.opacity(1).step()
    // 输出动画
    this.setData({
      subContentAnimation: animation.export()
    })
  },

  /**
   * exp内容动画初始设置
   */
  createExpStartAnimation: function () {
    var animation = wx.createAnimation({
      duration: 1,
      timingFunction: 'step-start',
    })
    animation.opacity(1).translateY(-40).step()
    // 输出动画
    this.setData({
      expAnimation: animation.export()
    })
  },
})
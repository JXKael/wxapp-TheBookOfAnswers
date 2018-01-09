// answers.js

//获取应用实例
const app = getApp()

var answerData = require("./answerData.js")

const innerAudioContext = wx.createInnerAudioContext()

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
  inRotation: false,
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
  expOpacity: 1,
  expDuration: 500,
  
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
    innerAudioContext.src = this.data.audio_src
    //'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
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

  longPress: function (e) {
    if (!this.inShow && !this.inRotation)
    {
      this.inRotation = true
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

      // 设置计时器，按压结束后一系列动作
      this.timeout_press_over = setTimeout(this.pressOver.bind(this), this.pressDuration)
    }
  },
  
  /**
   * 按压时间到结束的一系列动作
   */
  pressOver: function() {
    // 设置文本新内容
    this.setNewContent()
    // 桌面停止动画
    this.createTableStopAnimation()
    // content显示动画
    this.createContentShowAnimation()
    // subContent显示动画
    this.createSubContentShowAnimation()
    // 停止播放按压音效
    this.stopPressAudio()
    // 播放停止音效
    //
  },

  touchEnd: function (e) {
    if (!this.inShow && this.inRotation)
    {
      this.touchEndTime = e.timeStamp
      // console.log("touch end at " + this.touchEndTime)
      this.duration = this.touchEndTime - this.touchStartTime

      // 停止播放音频
      this.stopPressAudio()

      if (this.duration < this.pressDuration) {
        // 清除计时-----content出现
        clearTimeout(this.timeout_press_over)

        this.createTableInterruptAnimation()
        this.inRotation = false
      }
    }
  },

  bindTap: function(e) {
    if (!this.inShow && !this.inRotation)
    {
      this.createExpShowAnimation()
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
    this.inShow = true
    this.inRotation = false
    setTimeout(function(){
      this.inShow = false
      // console.log("好了")
    }.bind(this), Math.max(this.defaultStopDuration, this.contentDuration) + this.subContentDelay + this.subContentDuration)

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
    // this.audioCtx.seek(5)
    // this.audioCtx.play()
    // console.log("播放")
    // innerAudioContext.play()
  },

  /**
   * 停止按压音频
   */
  stopPressAudio: function (){
    // this.audioCtx.pause()
    // innerAudioContext.stop()
  },

  /**
   * 设置table旋转动画
   */
  createTableRotateAnimation: function () {
    var rotateAnimation = wx.createAnimation({
      duration: this.pressDuration,
      timingFunction: "linear",
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
      timingFunction: "ease-out",
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
    this.deg = this.deg + this.rotateDeg
    // 必须加一个temp否则会出错，这TM什么编译器啊！
    var temp = Math.floor(this.deg / 360) * 360
    this.deg = temp + 360
    // console.log("停止: " + this.deg)

    var stopAnimation = wx.createAnimation({
      duration: this.defaultStopDuration,
      timingFunction: "ease",
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
   * 瞬间设置为透明度0，下移40，缩小0.8
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
      timingFunction: "linear",
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
      timingFunction: "linear",
      delay: this.contentDuration + this.subContentDelay
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
    this.expOpacity = 0
    // console.log("exp透明度: " + this.expOpacity)
    var animation = wx.createAnimation({
      duration: 1,
      timingFunction: "step-start",
    })
    animation.opacity(0).step()
    // 输出动画
    this.setData({
      expAnimation: animation.export()
    })
  },

  /**
   * exp内容出现动画
   */
  createExpShowAnimation: function () {
    var animation = wx.createAnimation({
      duration: this.expDuration,
      timingFunction: "linear",
    })
    this.expOpacity = this.expOpacity + 1
    // console.log((this.expOpacity) % 2)
    animation.opacity((this.expOpacity) % 2).step()
    // 输出动画
    this.setData({
      expAnimation: animation.export()
    })
  }
})
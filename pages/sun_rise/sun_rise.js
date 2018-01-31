// sun_rise.js

var answer_data = require("../answers/answer_data.js")
var anim_data = require("./anim_data.js")
var anim_sun_rise = require("./anim_sun_rise.js")
var anim_tutorial = require("./anim_tutorial.js")
var anim_content = require("./anim_content.js")
var anim_sun_cloud = require("./anim_sun_cloud.js")
// var anim_exp = require("./anim_exp.js")
var anim_cloud_move = require("./anim_cloud_move.js")


var State = {
  toturial: "toturial",
  pressing: "pressing",
  waiting: "waiting",
  saving: "saving"
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
    isThx: true,
    /* 动画 */
    _anim_sun_rise: "",
    _anim_tutorial_txt_1: "",
    _anim_tutorial_txt_2: "",
    _anim_tutorial_txt_3: "",
    _anim_circle: "",
    _anim_circle_line: "",
    _anim_cloud_1: "",
    _anim_cloud_2: "",
    _anim_cloud_3: "",
    _anim_cloud_4: "",
    _anim_content: "",
    _anim_sub_content: "",
    // _anim_exp: "",

    _tran_exp_show: "",
    _tran_save_btn_show: "",
    isScreenshotHidden: true,
  },

  touchStartTime: 0,
  touchEndTime: 0,
  duration: 0,
  lastIndex: -1,
  expShowable: false,
  isExpShow: false,
  tapCount: [false, false],
  isScreenshotDrew: false,
  // ctx_small: "",
  ctx_big: "",

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
    // this.anim_exp = new anim_exp()
    this.anim_cloud_move = new anim_cloud_move()

    // this.ctx_small = wx.createCanvasContext("canvas-small")
    this.ctx_big = wx.createCanvasContext("canvas-big")
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
      _anim_circle: this.anim_tutorial.initialCircle().export(),
      _anim_circle_line: this.anim_tutorial.initialCircleLine().export(),
      _anim_cloud_1: this.anim_tutorial.initialCloud(true).export(),
      _anim_cloud_2: this.anim_tutorial.initialCloud(false).export(),
      _anim_cloud_3: this.anim_sun_cloud.initial(true).export(),
      _anim_cloud_4: this.anim_sun_cloud.initial(false).export(),
      // _anim_exp: this.anim_exp.initial().export()
      _tran_exp_show: ""
    })

    setTimeout(function () {
      this.setData({
        _anim_tutorial_txt_1: this.anim_tutorial.moveDown(this.anim_data.tutorialTime, 0).export(),
        _anim_tutorial_txt_2: this.anim_tutorial.moveDown(this.anim_data.tutorialTime,this.anim_data.tutorialDelay).export(),
        _anim_tutorial_txt_3: this.anim_tutorial.moveDown(this.anim_data.tutorialTime, this.anim_data.tutorialDelay * 2).export(),
        _anim_circle: this.anim_tutorial.circleFadeIn(this.anim_data.circleFadeIn, this.anim_data.tutorialDuration()).export(),
        _anim_cloud_1: this.anim_tutorial.moveIn(this.anim_data.tutorialDuration(), 0).export(),
        _anim_cloud_2: this.anim_tutorial.moveIn(this.anim_data.tutorialDuration(), 0).export(),
      })
    }.bind(this), this.anim_data.tutorialDelay / this.anim_data.tutorialPara)

    // 圆圈的扩大动画，需要撤销
    this.circleInterval = setInterval(function () {
      this.setData({
        _anim_circle_line: this.anim_tutorial.circleLine(this.anim_data.circleLineDuration).export(),
      })
    }.bind(this), this.anim_data.circleLineInterval)

    setTimeout(function () {
      this.setData({
        state: State.waiting,
        _anim_cloud_1: this.anim_cloud_move.move(this.anim_data.cloudFloat, 0).export(),
        _anim_cloud_2: this.anim_cloud_move.move(this.anim_data.cloudFloat, 0).export(),
      })
      
      // 云朵的持续动画
      setInterval(function () {
        this.setData({
          _anim_cloud_1: this.anim_cloud_move.move(this.anim_data.cloudFloat, 0).export(),
        })
      }.bind(this), this.anim_data.cloudFloat * (3.2 + Math.random()))
      setInterval(function () {
        this.setData({
          _anim_cloud_2: this.anim_cloud_move.move(this.anim_data.cloudFloat, 0).export(),
        })
      }.bind(this), this.anim_data.cloudFloat * (3.2 + Math.random()))
    }.bind(this), this.anim_data.tutorialDuration())
  },

  /**
   * ---------------------------  山点击功能，主要功能  ---------------------------
   */

  onMountainLongPress: function(e) {
    if (this.data.state == State.waiting)
    {
      this.touchStartTime = e.timeStamp

      this.isScreenshotDrew = false    // 屏幕截图设置为需要重新画

      var time = this.anim_data.pressDuration + this.anim_data.afterPress

      clearInterval(this.circleInterval)

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
        // _anim_exp: this.anim_exp.initial().export(),
        _tran_exp_show: "",
        _tran_save_btn_show: ""    // 隐藏保存按钮
      })

      this.expShowable = false

      setTimeout(function () {
        this.setData({
          _anim_sun_rise: this.anim_sun_rise.moveUp(time).export(),
          _anim_cloud_3: this.anim_sun_cloud.move(time).export(),
          _anim_cloud_4: this.anim_sun_cloud.move(time).export(),
        })
      }.bind(this), 50)

      // 设置计时器，按压结束后一系列动作
      this.timeout_press_over = setTimeout(this.pressSuccess.bind(this), time)
    }
  },

  onMountainTap: function(e){
    if (this.data.state == State.waiting && this.expShowable)
    {
      this.setData({
        // _anim_exp: this.anim_exp.exp(this.anim_data.expDuration, this.isExpShow ? 0 : 1).export()
        _tran_exp_show: this.isExpShow ? "" : this.anim_data.tran_exp_show
      })
      this.isExpShow = !this.isExpShow
    }else if (this.data.state == State.saving)
    {
      this.hidScreenshot()
    }
  },

  onMountainTouchEnd: function (e) {
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

        this.expShowable = false
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
    })

    setTimeout(function () {
      this.setData({
        state: State.waiting,
        _tran_save_btn_show: this.anim_data.tran_save_btn_show    // 显示保存按钮
      })
      this.expShowable = true
    }.bind(this), time)
  },
  /**
   * 随机答案，核心函数
   */
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
  },

  /**
   * 获得上次的答案
   */
  getLastAnswer: function () {
    return this.answer_data.getAnswerByIndex(this.lastIndex)
  },

  /**
   * ---------------------------  保存截图功能  ---------------------------
   */

  /**
   * 点击保存按钮事件
   */
  onTapSave: function (e) {
    if (this.data.state == State.waiting && this.lastIndex != -1 && this.data._tran_save_btn_show != ""){
      // 显示loading
      wx.showLoading({
        title: "保存中",
        mask: true
      })
      // 直接切换状态，显示canvas
      this.setData({
        state: State.saving,
        isScreenshotHidden: false,  // 不需要二次确认，直接显示canvas
      })
      // 画图
      var imageRes = "../../assets/sun_rise/save_bg.png"
      var imageQRCode = "../../assets/sun_rise/save_QR_code.jpg"
      if (this.isScreenshotDrew)
      {
        // 直接显示即可
        // this.ctx_small.restore()
        this.ctx_big.restore()
        
        // 不需要二次确认，此函数两个条件通用，在上面setData里面直接显示
        // this.showScreenshot()
      }else{
        // 需要重新画图
        var answer = this.getLastAnswer()
        // 画小图
        // this.ctx_small.drawImage(imageRes, 0, 0, 150, 267)
        // this.ctx_small.setTextAlign("center")
        // this.ctx_small.setTextBaseline("middle")
        // this.ctx_small.setFillStyle("white")
        // this.ctx_small.setFontSize(11)
        // this.ctx_small.fillText(answer.content, 75, 60)
        // this.ctx_small.setFontSize(4)
        // this.ctx_small.fillText(answer.subContent, 75, 101)
        // this.ctx_small.draw()
        // this.ctx_small.save()

        // 画大图
        this.ctx_big.drawImage(imageRes, 0, 0, 750, 1334)
        this.ctx_big.drawImage(imageQRCode, 0, 1334, 750, 750)
        this.ctx_big.setTextAlign("center")
        this.ctx_big.setTextBaseline("middle")
        this.ctx_big.setFillStyle("white")
        this.ctx_big.setFontSize(55)
        this.ctx_big.fillText(answer.content, 375, 299)
        this.ctx_big.setFontSize(25)
        this.ctx_big.fillText(answer.subContent, 375, 508)

        this.ctx_big.draw()
        this.ctx_big.save()

        this.isScreenshotDrew = true

        // 延迟显示
        // setTimeout(function () {
        //   this.showScreenshot()
        // }.bind(this), 1000)
      }

      // 直接延迟保存，不要二次确认
      setTimeout(function () {
        this.saveScreenFunction()
      }.bind(this), 200)
    }
  },

  showScreenshot: function (e) {
    this.setData({
      // _tran_save_btn_show: "",    // 隐藏保存按钮
      isScreenshotHidden: false,
    })
  },

  hidScreenshot: function (e) {
    this.setData({
      state: State.waiting,
      _tran_save_btn_show: this.anim_data.tran_save_btn_show,    // 显示保存按钮
      isScreenshotHidden: true,
    })
  },

  onTapSaveConfirm: function (e) {
    if (this.data.state == State.saving){
      // 弹出loading
      wx.showLoading({
        title: "保存中",
        mask: true
      })
      this.saveScreenFunction()
    }
  },

  saveScreenFunction: function () {
    // 保存
    wx.canvasToTempFilePath({    // canvs导出成图片
      x: 0,
      y: 0,
      width: 750,
      height: 2084,
      canvasId: 'canvas-big',
      success: function (res) {    // 导出图片成功
        // 保存到相册
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: function (e) {  // 保存到相册成功
            // 隐藏loading
            wx.hideLoading()
            // 提示成功
            wx.showToast({
              title: "保存成功",
              icon: "success",
              duration: 1000,
              mask: true,
            })
            // 切回waiting状态
            setTimeout(function () {
              this.hidScreenshot()
            }.bind(this), 1000)
          }.bind(this),
          fail: function (e) {   // 保存到相册失败
            // 隐藏loading
            wx.hideLoading()
            // 提示失败
            wx.showToast({
              title: "保存失败",
              icon: "none",
              duration: 1000,
              mask: true,
            })
            // 切回waiting状态
            setTimeout(function () {
              this.hidScreenshot()
            }.bind(this), 1000)
          }.bind(this)
        })
      }.bind(this),
      fail: function (e) {       // 导出图片失败
        // 隐藏loading
        wx.hideLoading()
        // 提示失败
        wx.showToast({
          title: "导出失败",
          icon: "none",
          duration: 1000,
          mask: true,
        })
        // 切回waiting状态
        setTimeout(function () {
          this.hidScreenshot()
        }.bind(this), 1000)
      }.bind(this)
    })
  },

  /**
   * ---------------------------  彩蛋致谢功能  ---------------------------
   */

  onTapCloud_1: function (e) {
    this.tapCount[0] = true
  },

  onTapCloud_2: function (e) {
    if (this.tapCount[0]) {
      this.tapCount[1] = true
    }
    if (this.tapCount[0] && this.tapCount[1]) {
      var temp = this.data.isThx
      this.setData({
        isThx: !temp
      })

      this.tapCount[0] = false
      this.tapCount[1] = false
    }
  },
})
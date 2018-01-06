// answers.js

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: "问心，则无愧",
    subContent: "长按圆桌，开启答案",
    lastIndex: -1,
    answers: [
      { content: "恰似一江春水向东流", subContent: "123" },
      { content: "那是离人泪", subContent: "123" },
      { content: "此情无计可消除", subContent: "123" },
      { content: "生当作人杰", subContent: "123" },
      { content: "为伊消得人憔悴", subContent: "123" },
      { content: "剪不断，理还乱", subContent: "123" },
      { content: "好梦留人睡", subContent: "123" },
      { content: "老夫聊发少年狂", subContent: "123" },
      { content: "寂寞沙洲冷", subContent: "123" },
      { content: "相顾无言，惟有泪千行", subContent: "123" },
      { content: "赢得生前身后名", subContent: "123" },
      { content: "望尽天涯路", subContent: "123" },
      { content: "过尽千帆皆不是", subContent: "123" },
      { content: "如今俱是异乡人", subContent: "123" },
      { content: "为有暗香来", subContent: "123" },
      { content: "空惆怅", subContent: "123" },
      { content: "把新桃换旧符", subContent: "123" },
      { content: "相逢是梦中", subContent: "123" },
      { content: "只缘身在此山中", subContent: "123" },
      { content: "淡妆浓抹总相宜", subContent: "123" },
      { content: "也无风雨也无晴", subContent: "123" },
      { content: "天涯何处无芳草", subContent: "123" },
      { content: "多情笑，早生华发", subContent: "123" },
      { content: "腹有诗书气自华", subContent: "123" },
      { content: "又岂在朝朝暮暮", subContent: "123" },
      { content: "物是人非，事事休", subContent: "123" },
      { content: "只有香如故", subContent: "123" },
      { content: "世味薄似纱", subContent: "123" },
      { content: "柳暗花明又一村", subContent: "123" },
      { content: "此事古难全", subContent: "123" },
      { content: "为有源头活水来", subContent: "123" },
      { content: "莫等闲，白了少年头", subContent: "123" },
      { content: "能饮一杯无", subContent: "123" },
      { content: "润物细无声", subContent: "123" },
      { content: "一岁一枯荣", subContent: "123" },
      { content: "门始为君开", subContent: "123" },
      { content: "海内存知己", subContent: "123" },
      { content: "劝君更尽一杯酒", subContent: "123" },
      { content: "青春作伴好还乡", subContent: "123" },
      { content: "莫待无花空折枝", subContent: "123" },
      { content: "天下谁人不识君", subContent: "123" },
      { content: "天生我材必有用", subContent: "123" },
      { content: "徒劳恨费声", subContent: "123" },
      { content: "葡萄美酒夜光杯", subContent: "123" },
      { content: "幽人应未眠", subContent: "123" },
      { content: "坐观垂钓者", subContent: "123" },
      { content: "何处春江无月明", subContent: "123" }
      ],
    tableAnimation: "",
    contentAnimation: "",
    subContentAnimation: ""
  },

  touchStartTime: 0,
  touchEndTime: 0,
  duration: 0,
  pressDuration: 3000,
  defaultStopDuration: 1500,
  deg: 0,
  contentDuration: 1000,
  subContentDelay: 500,
  subContentDuration: 1000,
  inShow: false,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

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
      // 设置content的位置
      this.createContentStartAnimation()
      // 设置subContent的位置
      this.createSubContentStartAnimation()

      // 设置计时器，显示新内容，1.5s归位置
      this.timeout = setTimeout(this.setNewContent.bind(this), this.pressDuration)
      this.timeout_stop = setTimeout(this.createTableStopAnimation.bind(this), this.pressDuration)
      this.timeout_contentShow = setTimeout(this.createContentShowAnimation.bind(this), this.pressDuration)
      this.timeout_subContentShow = setTimeout(this.createSubContentShowAnimation.bind(this), this.pressDuration + this.contentDuration)
    }
  },

  touchEnd: function (e) {
    if (!this.inShow)
    {
      this.touchEndTime = e.timeStamp
      // console.log("touch end at " + this.touchEndTime)
      this.duration = this.touchEndTime - this.touchStartTime
      // 清除计时-----新内容
      clearTimeout(this.timeout);
      // 清除计时-----1.5s延时
      clearTimeout(this.timeout_stop)

      if (this.duration < this.pressDuration) {
        // 清除计时-----content出现
        clearTimeout(this.timeout_contentShow)
        // 清除计时-----subContent出现
        clearTimeout(this.timeout_subContentShow)
        this.createTableInterruptAnimation()
      }
    }
  },

  /**
   * 清除旧的content
   */
  clearOldContent: function () {
    this.setData({
      content: "",
      subContent: ""
    })
  },

  /**
   * 设置新的content
   */
  setNewContent: function () {
    this.inShow = true;
    setTimeout(function(){
      this.inShow = false;
    }.bind(this), this.defaultStopDuration + this.contentDuration + this.subContentDelay + this.subContentDuration)
    var index = -1;
    if (this.data.lastIndex != -1) {
      // 不是第一次，需要判断重复
      do {
        // 防止和上次重复
        index = Math.floor(Math.random() * this.data.answers.length)
      } while (this.data.lastIndex == index)
    } else {
      // 第一次直接随机
      index = Math.floor(Math.random() * this.data.answers.length)
    }
    // 更新数据以更新显示
    this.setData({
      content: this.data.answers[index].content,
      subContent: this.data.answers[index].subContent,
      lastIndex: index
    })
  },

  /**
   * 设置table旋转动画
   */
  createTableRotateAnimation: function () {
    var rotateAnimation = wx.createAnimation({
      duration: this.pressDuration,
      timingFunction: 'linear',
    })
    rotateAnimation.rotateZ(this.deg + 360).step()
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
    var deg = 0.12 * Math.min(this.duration, this.pressDuration)
    this.deg += Math.round(deg)
    // console.log(this.deg)
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
    if (this.deg%360 > 1)
    {
      this.deg = Math.floor(this.deg / 360) * 360 + 720
      var stopAnimation = wx.createAnimation({
        duration: this.defaultStopDuration,
        timingFunction: 'ease',
      })
      stopAnimation.rotateZ(this.deg).step()
      // 输出动画
      this.setData({
        tableAnimation: stopAnimation.export()
      })
    }
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
    resetAnimation.rotateZ(this.deg).step()
    // 输出动画
    this.setData({
      tableAnimation: resetAnimation.export()
    })
  },

  /**
   * content内容初始设置
   */
  createContentStartAnimation: function() {
    var animation = wx.createAnimation({
      duration: 1,
      timingFunction: 'step-start',
    })
    animation.opacity(0).translateY(20).scale(0.8).step()
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
      timingFunction: 'ease-out',
    })
    animation.opacity(1).translateY(-20).scale(1).step()
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
   * content内容出现动画
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
  }
})
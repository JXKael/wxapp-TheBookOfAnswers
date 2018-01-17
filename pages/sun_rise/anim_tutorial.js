function anim_tutorial() {
  this.initTxtPos = -25
  this.initCloudPos = -60
}

anim_tutorial.prototype = {
  
  /**
   * 文本初始位置
   */
  initialTxt: function () {
    this.animation = wx.createAnimation({
      duration: 1,
      timingFunction: "step-start",
    })
    this.animation.translateY(this.initTxtPos).opacity(0).scale(0.8).step()
    return this.animation
  },

  /**
   * 云朵初始位置
   */
  initialCloud: function (isRight) {
    this.animation = wx.createAnimation({
      duration: 1,
      timingFunction: "step-start",
    })
    this.animation.translateX(isRight ? this.initCloudPos : -this.initCloudPos).opacity(0).scale(0.8).step()
    return this.animation
  },

  /**
   * 圆圈初始
   */
  initialCircle: function () {
    this.animation = wx.createAnimation({
      duration: 1,
      timingFunction: "step-start",
    })
    this.animation.opacity(0).step()
    return this.animation
  },

  /**
   * 圆圈初始
   */
  initialCircleLine: function () {
    this.animation = wx.createAnimation({
      duration: 1,
      timingFunction: "step-start",
    })
    this.animation.opacity(0).step()
    return this.animation
  },

  /**
   * 文本淡入下移
   */
  moveDown: function (time, delay) {
    this.animation = wx.createAnimation({
      duration: time,
      timingFunction: "ease-out",
      delay: delay
    })
    this.animation.translateY(0).opacity(1).scale(1).step()
    return this.animation
  },

  /**
   * 云朵淡入
   */
  moveIn: function (time, delay) {
    this.animation = wx.createAnimation({
      duration: time,
      timingFunction: "ease-out",
      delay: delay
    })
    this.animation.translateX(0).opacity(1).scale(1).step()
    return this.animation
  },

  /**
   * 圆圈淡入
   */
  circleFadeIn: function (time, delay) {
    this.animation = wx.createAnimation({
      duration: time,
      timingFunction: "linear",
      delay: delay
    })
    this.animation.opacity(1).step()
    return this.animation
  },

  /**
   * 圆圈扩张
   */
  circleLine: function (time) {
    this.animation = wx.createAnimation()
    this.animation.opacity(0.7).scale(1.3).step({
      duration: time,
      timingFunction: "linear",
    }).opacity(0).scale(1.6).step({
      duration: time,
      timingFunction: "linear",
    }).opacity(0).scale(1.6).step({
       duration: 1,
       timingFunction: "step-start",
    }).opacity(0).scale(1).step({
       duration: 1,
       timingFunction: "step-start",
    })
    return this.animation
  },
  
}

module.exports = anim_tutorial
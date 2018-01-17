function anim_tutorial() {
  this.initTxtPos = -30
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
    this.animation.translateY(this.initTxtPos).opacity(0).step()
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
    this.animation.translateX(isRight ? this.initCloudPos : -this.initCloudPos).opacity(0).step()
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
    this.animation.translateY(0).opacity(1).step()
    return this.animation
  },

  /**
   * 右侧云朵右移淡入
   */
  moveIn: function (time, delay) {
    this.animation = wx.createAnimation({
      duration: time,
      timingFunction: "ease-out",
      delay: delay
    })
    this.animation.translateX(0).opacity(1).step()
    return this.animation
  },
}

module.exports = anim_tutorial
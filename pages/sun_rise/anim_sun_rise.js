function anim_sun_rise() {
  this.initPos = 70
}

anim_sun_rise.prototype = {

  /**
   * 初始位置
   */
  initial: function () {
    this.animation = wx.createAnimation({
      duration: 1,
      timingFunction: "step-start",
    })
    this.animation.translateY(this.initPos).step()
    return this.animation
  },

  /**
   * 1.5s上移
   */
  moveUp: function (time) {
    this.animation = wx.createAnimation({
      duration: time,
      timingFunction: "linear",
    })
    this.animation.translateY(0).step()
    return this.animation
  },

  /**
   * 打断后回到初始位置
   */
  interrupt: function (time) {
    this.animation = wx.createAnimation({
      duration: time,
      timingFunction: "linear",
    })
    this.animation.translateY(this.initPos).step()
    return this.animation
  }
}

module.exports = anim_sun_rise
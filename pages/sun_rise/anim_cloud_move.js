function anim_cloud_move() {
}

anim_cloud_move.prototype = {

  /**
   * 
   */
  move: function (time, delay) {
    var offset = Math.random() * 3 + 5
    offset = Math.random() > 0.5 ? offset : -offset
    this.animation = wx.createAnimation({
      duration: time,
      timingFunction: "ease",
      delay: delay
    })
    this.animation.translateX(offset).step().translateX(-offset).step().translateX(0).step()
    return this.animation
  },
}

module.exports = anim_cloud_move
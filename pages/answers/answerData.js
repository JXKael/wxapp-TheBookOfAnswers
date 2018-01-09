function answerData() {
  this.defaultContent = "问心，则无愧"
  this.defaultSubContent = "长按圆桌，开启答案"
  this.answers = [
    { content: "效穷途之哭", subContent: "取自《滕王阁序》", exp: "哭一场会好受点" },
    { content: "惜金缕衣和少年时", subContent: "改自《金缕衣》", exp: "浪费时间" },
    { content: "多情应笑我", subContent: "取自《念奴娇·赤壁怀古》", exp: "那都不是事儿" },
    { content: "春风吹又生", subContent: "取自《赋得古原草送别》", exp: "萌芽" },
    { content: "盈盈一水间，脉脉不得语", subContent: "取自《迢迢牵牛星》", exp: "沉默" },
    { content: "柳暗花明又一村", subContent: "取自《游山西村》", exp: "也许会有转机" },
    { content: "涣兮，若冰之将释", subContent: "取自《道德经·第十五章》", exp: "不必耿耿于怀" },
    { content: "猛虎之犹豫，不若蜂之螫", subContent: "改自《史记·淮阴侯列传》", exp: "不要再犹豫了" },
    { content: "之南，奚为北行？", subContent: "改自《战国策·魏策四》", exp: "背道而驰" },
    { content: "使我不得开心颜", subContent: "取自《梦游天咾呤留别》", exp: "也许会痛苦" },
    { content: "东方既白", subContent: "改自《赤壁赋》", exp: "下一个天亮" },
    { content: "木欣欣以向荣", subContent: "取自《归去来兮辞》", exp: "盛开" },
    { content: "毋自辱", subContent: "取自《论语·颜渊》", exp: "不必刻意隐瞒" },
    { content: "定不负相思意", subContent: "取自《卜算子·我住长江头》", exp: "思念" },
    { content: "何陋之有", subContent: "取自《陋室铭》", exp: "在心中" },
    { content: "葡萄美酒夜光杯", subContent: "取自《凉州词》", exp: "值得来一杯" },
    { content: "欲速则不达", subContent: "取自《论语·子路》", exp: "没事，慢慢来" },
    { content: "思无邪", subContent: "取自《论语·为政》", exp: "这是一个肯定" },
    { content: "行有余力", subContent: "取自《论语·学而》", exp: "如果还有空的话" },
    { content: "和为贵", subContent: "取自《论语·学而》", exp: "放开点" },
    { content: "忘是非，心之适", subContent: "取自《庄子·达生》", exp: "不如忘掉这个问题" },
    { content: "子非鱼，安知鱼之乐", subContent: "取自《庄子·秋水》", exp: "开心别问为什么" },
    { content: "智者不惑", subContent: "取自《论语·子罕》", exp: "让自己变得更好" },
    { content: "浮生若梦，为欢几何", subContent: "取自《春夜宴从弟桃花园序》", exp: "一切都会忘记的" },
    { content: "大象无形", subContent: "取自《道德经·第四十一章》", exp: "看见的都不是真的" },
    { content: "李广难封", subContent: "取自《滕王阁序》", exp: "这就是命" },
    { content: "千里之行，始于足下", subContent: "取自《道德经·第六十四章》", exp: "这是起跑线" },
    { content: "弃之", subContent: "取自《论语·子路》", exp: "扔掉它" },
    { content: "常在于险远", subContent: "取自《游褒禅山记》", exp: "会有一些困难" },
    { content: "此情无计可消除", subContent: "取自《一剪梅·红藕香残玉簟秋》", exp: "无解" },
    { content: "过尽千帆皆不是", subContent: "取自《望江南·梳洗罢》", exp: "这都不是答案" },
    { content: "从心所欲", subContent: "取自《论语·为政》", exp: "服从自己的内心" },
    { content: "任重而道远", subContent: "取自《论语·泰伯》", exp: "长路漫漫" },
    { content: "寡悔", subContent: "取自《论语·为政》", exp: "少点后悔" },
    { content: "不孤，必有邻", subContent: "取自《论语·里仁》", exp: "会有人陪伴" },
    { content: "春秋冬夏，四时行", subContent: "取自《庄子·至乐》", exp: "还在路上" },
    { content: "一鼓作气", subContent: "取自《左传·庄公十年》", exp: "出发" },
    { content: "只缘身在此山中", subContent: "取自《题西林壁》", exp: "当局者迷" },
    { content: "望尽天涯路", subContent: "取自《蝶恋花·槛菊愁烟兰泣露》", exp: "一直走下去" },
    { content: "路转溪桥忽见", subContent: "取自《西江月·夜行黄沙道中》", exp: "换一个方向" }
  ]
}

answerData.prototype={

  getAnswerByIndex: function (index) {
    return this.answers[index]
  },

  getAnswerLength: function () {
    return this.answers.length
  },

  getDefaultContent: function () {
    return this.defaultContent
  },

  getDefaultSubContent: function () {
    return this.defaultSubContent
  }
}

module.exports = answerData
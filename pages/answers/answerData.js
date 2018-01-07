function answerData() {
  this.defaultContent = "问心，则无愧"
  this.defaultSubContent = "长按圆桌，开启答案"
  this.answers = [
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
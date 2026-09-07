const featureDefs = {
  sugar: { label: "糖含量", values: ["低", "中", "高"] },
  fat: { label: "脂肪含量", values: ["低", "中", "高"] },
  protein: { label: "蛋白质含量", values: ["低", "中", "高"] },
  fiber: { label: "膳食纤维", values: ["低", "中", "高"] },
  process: { label: "加工程度", values: ["低", "中", "高"] },
  additive: { label: "添加剂数量", values: ["少", "中", "多"] },
  satiety: { label: "饱腹感", values: ["低", "中", "高"] },
  like: { label: "学生喜爱度", values: ["低", "中", "高"] },
  package: { label: "包装吸引力", values: ["普通", "吸引", "网红"] },
  sodium: { label: "钠含量", values: ["低", "中", "高"] },
  energy: { label: "能量密度", values: ["低", "中", "高"] },
  vitamin: { label: "维生素含量", values: ["低", "中", "高"] },
  natural: { label: "食材天然度", values: ["低", "中", "高"] },
  fried: { label: "油炸程度", values: ["低", "中", "高"] },
  portion: { label: "单份分量", values: ["低", "中", "高"] },
};

const featureRules = {
  sugar: { question: "糖含量高吗？", yes: "高糖", no: "低糖或中糖", test: (item) => item.sugar === "高" },
  fat: { question: "脂肪含量高吗？", yes: "高脂肪", no: "低脂肪或中脂肪", test: (item) => item.fat === "高" },
  protein: { question: "蛋白质含量高吗？", yes: "高蛋白", no: "低蛋白或中蛋白", test: (item) => item.protein === "高" },
  fiber: { question: "膳食纤维高吗？", yes: "高纤维", no: "低纤维或中纤维", test: (item) => item.fiber === "高" },
  process: { question: "加工程度高吗？", yes: "高加工", no: "低加工或中加工", test: (item) => item.process === "高" },
  additive: { question: "添加剂数量多吗？", yes: "添加剂多", no: "添加剂少或中等", test: (item) => item.additive === "多" },
  satiety: { question: "饱腹感高吗？", yes: "高饱腹", no: "低饱腹或中饱腹", test: (item) => item.satiety === "高" },
  like: { question: "学生喜爱度高吗？", yes: "喜爱度高", no: "喜爱度低或中", test: (item) => item.like === "高" },
  package: { question: "包装吸引力强吗？", yes: "吸引或网红", no: "普通包装", test: (item) => item.package !== "普通" },
  sodium: { question: "钠含量高吗？", yes: "高钠", no: "低钠或中钠", test: (item) => item.sodium === "高" },
  energy: { question: "能量密度高吗？", yes: "高能量密度", no: "低或中能量密度", test: (item) => item.energy === "高" },
  vitamin: { question: "维生素含量高吗？", yes: "高维生素", no: "低维生素或中维生素", test: (item) => item.vitamin === "高" },
  natural: { question: "食材天然度高吗？", yes: "天然度高", no: "天然度低或中", test: (item) => item.natural === "高" },
  fried: { question: "油炸程度高吗？", yes: "高油炸", no: "低油炸或中油炸", test: (item) => item.fried === "高" },
  portion: { question: "单份分量高吗？", yes: "大分量", no: "小分量或中分量", test: (item) => item.portion === "高" },
};

const lab1FeatureKeys = ["protein", "process", "additive", "sugar", "package"];
const lab1ExampleKey = "protein";
const lab1SheetRowCount = 5;
const colorChoices = [
  { key: "none", label: "无明显主色", tone: "gray" },
  { key: "light-green", label: "健康略多", tone: "green" },
  { key: "deep-green", label: "健康明显多", tone: "green" },
  { key: "light-red", label: "不健康略多", tone: "red" },
  { key: "deep-red", label: "不健康明显多", tone: "red" },
];
const effectChoices = [
  { key: "clear", label: "区分度高", note: "两边主色明显且不同" },
  { key: "middle", label: "区分度一般", note: "只有一边比较明显" },
  { key: "mixed", label: "区分度低", note: "两边都不够明显" },
];
const lab1FeatureChoiceLabels = {
  protein: "蛋白质",
  process: "加工程度",
  additive: "添加剂",
  sugar: "糖含量",
  package: "外包装",
};
const lab1DegreeChoices = [
  { key: "obvious", label: "明显" },
  { key: "middle", label: "一般" },
  { key: "weak", label: "微弱" },
];
const lab1RoleChoices = [
  { key: "key", label: "关键特征" },
  { key: "candidate", label: "候选特征" },
  { key: "noise", label: "干扰特征" },
];
const lab1DifferenceChoices = [
  { key: "different", label: "不一样" },
  { key: "same", label: "无区别" },
];
const lab1ConclusionRoleChoices = [
  { key: "key", label: "关键特征" },
  { key: "candidate", label: "候选特征" },
  { key: "noise", label: "干扰因素" },
];
const lab1ConclusionDegreeChoices = [
  { key: "max", label: "最大" },
  { key: "middle", label: "中等" },
  { key: "min", label: "最小" },
];

const foodIcons = {
  低糖酸奶: "🥛",
  全麦面包: "🍞",
  无糖豆浆: "🫘",
  茶叶蛋: "🥚",
  原味坚果: "🥜",
  水果杯: "🍓",
  牛奶麦片: "🥣",
  低脂奶酪: "🧀",
  即食燕麦: "🥣",
  海苔卷: "🍙",
  烤红薯: "🍠",
  果味饮料: "🧃",
  薯片: "🥔",
  奶茶: "🧋",
  夹心饼干: "🍪",
  糖果: "🍬",
  奶油蛋糕: "🍰",
  炸鸡块: "🍗",
  火腿肠: "🌭",
  巧克力棒: "🍫",
  甜味燕麦棒: "🍫",
  玉米棒: "🌽",
  水煮蛋: "🥚",
  苹果: "🍎",
  香蕉: "🍌",
  黄瓜条: "🥒",
  鸡胸肉卷: "🌯",
  豆腐干: "🧊",
  紫菜饭团: "🍙",
  低糖豆花: "🥣",
  无糖气泡水: "🫧",
  低脂牛奶: "🥛",
  蒸南瓜: "🎃",
  可乐: "🥤",
  辣条: "🌶️",
  方便面: "🍜",
  甜甜圈: "🍩",
  冰淇淋: "🍦",
  烤肠: "🌭",
  蛋挞: "🥧",
  奶盖茶: "🧋",
  膨化玉米条: "🌽",
  曲奇饼干: "🍪",
  蜜饯果干: "🍇",
  肉松面包: "🥯",
  芝士薯球: "🧀",
  乳酸菌饮料: "🧃",
  蔬菜沙拉杯: "🥗",
  鲜切橙子: "🍊",
  高纤饼干: "🍪",
  盐焗坚果: "🥜",
};

const foods = [
  f(1, "低糖酸奶", "低", "低", "高", "中", "中", "少", "中", "高", "普通", true),
  f(2, "全麦面包", "高", "低", "中", "高", "中", "少", "高", "高", "普通", true),
  f(3, "无糖豆浆", "低", "低", "高", "中", "低", "少", "中", "中", "吸引", true),
  f(4, "原味坚果", "低", "高", "中", "高", "低", "多", "高", "中", "普通", true),
  f(5, "牛奶麦片", "高", "中", "高", "中", "高", "多", "高", "高", "吸引", true),
  f(6, "果味饮料", "高", "低", "低", "低", "高", "多", "低", "高", "吸引", false),
  f(7, "薯片", "中", "高", "低", "低", "高", "中", "低", "高", "普通", false),
  f(8, "奶茶", "高", "中", "低", "低", "高", "多", "低", "高", "网红", false),
  f(9, "夹心饼干", "高", "高", "低", "低", "高", "多", "中", "中", "普通", false),
  f(10, "炸鸡块", "低", "高", "高", "低", "高", "中", "中", "高", "普通", false),
];

const extraFoods = [
  f(11, "茶叶蛋", "低", "中", "高", "低", "中", "少", "中", "中", "普通", true),
  f(12, "水果杯", "中", "低", "低", "高", "低", "少", "低", "高", "吸引", true),
  f(13, "低脂奶酪", "低", "低", "高", "低", "中", "少", "中", "中", "普通", true),
  f(14, "即食燕麦", "中", "低", "中", "高", "中", "中", "高", "中", "普通", true),
  f(15, "海苔卷", "低", "低", "中", "高", "低", "少", "中", "中", "普通", true),
  f(16, "烤红薯", "中", "低", "低", "高", "低", "少", "高", "高", "普通", true),
  f(17, "甜味燕麦棒", "高", "中", "中", "中", "高", "多", "高", "高", "吸引", false),
  f(18, "奶油蛋糕", "高", "高", "低", "低", "高", "多", "中", "高", "网红", false),
  f(19, "火腿肠", "低", "高", "中", "低", "高", "多", "中", "高", "普通", false),
  f(20, "巧克力棒", "高", "高", "低", "低", "高", "多", "中", "高", "吸引", false),
  f(21, "玉米棒", "中", "低", "低", "高", "低", "少", "高", "中", "普通", true),
  f(22, "水煮蛋", "低", "中", "高", "低", "低", "少", "中", "中", "普通", true),
  f(23, "苹果", "中", "低", "低", "中", "低", "少", "中", "高", "普通", true),
  f(24, "香蕉", "中", "低", "低", "中", "低", "少", "高", "高", "普通", true),
  f(25, "黄瓜条", "低", "低", "低", "中", "低", "少", "低", "中", "普通", true),
  f(26, "鸡胸肉卷", "低", "低", "高", "中", "中", "少", "高", "中", "吸引", true),
  f(27, "豆腐干", "低", "中", "高", "中", "中", "中", "中", "中", "普通", true),
  f(28, "紫菜饭团", "中", "低", "中", "中", "中", "少", "高", "高", "吸引", true),
  f(29, "低糖豆花", "低", "低", "中", "中", "中", "少", "中", "中", "吸引", true),
  f(30, "无糖气泡水", "低", "低", "低", "低", "中", "少", "低", "高", "吸引", true),
  f(31, "低脂牛奶", "低", "低", "高", "低", "中", "少", "中", "高", "普通", true),
  f(32, "蒸南瓜", "中", "低", "低", "高", "低", "少", "高", "中", "普通", true),
  f(33, "可乐", "高", "低", "低", "低", "高", "多", "低", "高", "吸引", false),
  f(34, "辣条", "高", "高", "低", "低", "高", "多", "中", "高", "网红", false),
  f(35, "方便面", "中", "高", "低", "低", "高", "多", "高", "高", "普通", false),
  f(36, "甜甜圈", "高", "高", "低", "低", "高", "多", "中", "高", "吸引", false),
  f(37, "冰淇淋", "高", "高", "低", "低", "高", "多", "低", "高", "网红", false),
  f(38, "烤肠", "低", "高", "中", "低", "高", "多", "中", "高", "普通", false),
  f(39, "蛋挞", "高", "高", "低", "低", "高", "中", "中", "高", "吸引", false),
  f(40, "奶盖茶", "高", "高", "低", "低", "高", "多", "低", "高", "网红", false),
  f(41, "膨化玉米条", "中", "高", "低", "低", "高", "多", "低", "高", "吸引", false),
  f(42, "曲奇饼干", "高", "高", "低", "低", "高", "多", "中", "高", "普通", false),
  f(43, "蜜饯果干", "高", "低", "低", "中", "高", "多", "中", "高", "吸引", false),
  f(44, "肉松面包", "高", "高", "中", "低", "高", "多", "高", "高", "吸引", false),
  f(45, "芝士薯球", "低", "高", "中", "低", "高", "中", "中", "高", "网红", false),
  f(46, "乳酸菌饮料", "高", "低", "低", "低", "高", "多", "低", "高", "吸引", false),
  f(47, "蔬菜沙拉杯", "低", "低", "中", "高", "低", "少", "中", "中", "吸引", true),
  f(48, "鲜切橙子", "中", "低", "低", "中", "低", "少", "低", "高", "普通", true),
  f(49, "高纤饼干", "中", "中", "中", "高", "中", "中", "中", "中", "普通", true),
  f(50, "盐焗坚果", "低", "高", "中", "高", "中", "中", "高", "高", "吸引", true),
];

const foodPool = [...foods, ...extraFoods];
const depthCandidateFoodIds = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
];
const depthChallengeGroups = [
  {
    id: "group-1",
    title: "第一组",
    hint: "先找到最容易分开的特征，再处理剩下的混杂分支。",
    items: [
      f(101, "低糖酸奶", "低", "低", "高", "中", "中", "少", "中", "高", "普通", true),
      f(102, "全麦面包", "低", "低", "中", "高", "中", "少", "高", "高", "普通", true),
      f(103, "无糖豆浆", "低", "低", "高", "中", "低", "少", "中", "中", "吸引", true),
      f(104, "原味坚果", "低", "高", "中", "高", "低", "少", "高", "中", "普通", true),
      f(105, "茶叶蛋", "低", "中", "高", "低", "中", "少", "中", "中", "普通", true),
      f(106, "糖果", "高", "低", "低", "低", "中", "多", "低", "高", "吸引", false),
      f(107, "奶茶", "高", "中", "低", "低", "高", "多", "低", "高", "网红", false),
      f(108, "薯片", "中", "高", "低", "低", "高", "中", "低", "高", "吸引", false),
      f(109, "果味饮料", "高", "低", "低", "低", "高", "多", "低", "高", "吸引", false),
      f(110, "炸鸡块", "低", "高", "高", "低", "高", "中", "中", "高", "普通", false),
    ],
  },
  {
    id: "group-2",
    title: "第二组",
    hint: "数据中出现了例外，需要继续观察分支中的混杂情况。",
    items: [
      f(201, "低脂牛奶", "低", "低", "高", "低", "中", "少", "中", "高", "普通", true),
      f(202, "高纤饼干", "中", "中", "中", "高", "中", "中", "中", "中", "普通", true),
      f(203, "盐焗坚果", "低", "高", "中", "高", "中", "中", "高", "高", "吸引", true),
      f(204, "牛奶麦片", "高", "中", "高", "中", "高", "多", "高", "高", "吸引", true),
      f(205, "低糖豆花", "低", "低", "中", "中", "中", "少", "中", "中", "吸引", true),
      f(206, "火腿肠", "低", "高", "中", "低", "高", "多", "中", "高", "普通", false),
      f(207, "肉松面包", "高", "高", "中", "低", "高", "多", "高", "高", "吸引", false),
      f(208, "奶茶", "高", "中", "低", "低", "高", "多", "低", "高", "网红", false),
      f(209, "蛋挞", "高", "高", "低", "低", "高", "中", "中", "高", "吸引", false),
      f(210, "甜味燕麦棒", "高", "中", "中", "中", "高", "多", "高", "高", "吸引", false),
    ],
  },
  {
    id: "group-3",
    title: "第三组",
    hint: "混杂分支更多，需要在不同分支选择不同特征。",
    items: [
      f(301, "低脂牛奶", "低", "低", "高", "低", "中", "少", "中", "高", "普通", true),
      f(302, "水果杯", "中", "低", "低", "高", "低", "少", "低", "高", "吸引", true),
      f(303, "高纤饼干", "中", "中", "中", "高", "中", "多", "中", "中", "普通", true),
      f(304, "牛奶麦片", "高", "中", "高", "中", "高", "多", "高", "高", "吸引", true),
      f(305, "原味坚果", "低", "高", "中", "高", "低", "少", "高", "中", "普通", true),
      f(306, "蜜饯果干", "高", "低", "低", "中", "中", "多", "中", "高", "吸引", false),
      f(307, "火腿肠", "低", "高", "中", "低", "高", "多", "中", "高", "普通", false),
      f(308, "奶茶", "高", "中", "低", "低", "高", "多", "低", "高", "网红", false),
      f(309, "蛋挞", "高", "高", "低", "低", "高", "中", "中", "高", "吸引", false),
      f(310, "糖果", "高", "低", "低", "低", "中", "多", "低", "高", "吸引", false),
    ],
  },
];
const depthChallengeItems = depthChallengeGroups.flatMap((group) => group.items);
const computerFeaturePriority = ["process", "protein", "sugar", "additive", "fiber", "fat", "satiety", "sodium", "energy", "vitamin", "natural", "fried", "portion", "package", "like"];
const computerFixedDataSize = 500;
const computerFixedFeatureKeys = ["sugar", "fat", "protein", "fiber", "process", "additive"];
const transferFeatureOrder = ["like", "package", "protein", "satiety", "fiber", "sugar", "fat", "process", "additive", "sodium"];
const transferLatiao = {
  id: "latiao",
  name: "辣条",
  sugar: "高",
  fat: "高",
  protein: "低",
  fiber: "低",
  process: "高",
  additive: "多",
  satiety: "中",
  like: "高",
  package: "网红",
  sodium: "高",
  energy: "高",
  vitamin: "低",
  natural: "低",
  fried: "高",
  portion: "中",
};

const introConcepts = [
  { key: "root", label: "根节点", desc: "第一个判断问题。" },
  { key: "branch-node", label: "分支节点", desc: "继续判断的中间问题。" },
  { key: "leaf", label: "叶子节点", desc: "最后得到的结果。" },
  { key: "branch", label: "分支", desc: "不同答案走向不同方向。" },
  { key: "path", label: "决策路径", desc: "从问题到结果的判断路线。" },
  { key: "criterion", label: "决策依据", desc: "用于判断的条件或特征。" },
];

const examples = [
  {
    id: "snack",
    title: "零食是否健康",
    structure: "平均二叉树",
    nodes: [
      { id: "root", text: "糖含量高吗？", x: 314, y: 74, concepts: ["root", "criterion", "path"] },
      { id: "process", text: "加工程度高吗？", x: 144, y: 230, concepts: ["branch-node", "criterion"] },
      { id: "protein", text: "蛋白质高吗？", x: 484, y: 230, concepts: ["branch-node", "criterion", "path"] },
      { id: "stop", text: "不推荐", x: 44, y: 392, tone: "stop", concepts: ["leaf"] },
      { id: "try", text: "少量尝试", x: 244, y: 392, tone: "warn", concepts: ["leaf"] },
      { id: "choose", text: "优先选择", x: 384, y: 392, tone: "good", concepts: ["leaf", "path"] },
      { id: "compare", text: "继续比较", x: 584, y: 392, tone: "stop", concepts: ["leaf"] },
    ],
    edges: [
      { d: "M380 130 L210 235", concepts: ["branch"] },
      { d: "M380 130 L550 235", concepts: ["branch", "path"] },
      { d: "M210 290 L110 392", concepts: ["branch"] },
      { d: "M210 290 L310 392", concepts: ["branch"] },
      { d: "M550 290 L450 392", concepts: ["branch", "path"] },
      { d: "M550 290 L650 392", concepts: ["branch"] },
    ],
    labels: [
      { text: "是：高", x: 245, y: 169, concepts: ["branch"] },
      { text: "否：低或中", x: 468, y: 169, concepts: ["branch", "path"] },
      { text: "是", x: 146, y: 337, concepts: ["branch"] },
      { text: "否", x: 276, y: 337, concepts: ["branch"] },
      { text: "是", x: 486, y: 337, concepts: ["branch", "path"] },
      { text: "否", x: 616, y: 337, concepts: ["branch"] },
    ],
  },
  {
    id: "weekend",
    title: "周末去哪",
    structure: "不均衡二叉树",
    nodes: [
      { id: "root", text: "作业完成了吗？", x: 314, y: 54, concepts: ["root", "criterion", "path"] },
      { id: "weather", text: "天气好吗？", x: 132, y: 168, concepts: ["branch-node", "criterion", "path"] },
      { id: "outdoor", text: "想户外运动吗？", x: 62, y: 294, concepts: ["branch-node", "criterion", "path"] },
      { id: "homework", text: "先完成作业", x: 524, y: 168, tone: "warn", concepts: ["leaf"] },
      { id: "indoor", text: "室内活动", x: 314, y: 294, tone: "warn", concepts: ["leaf"] },
      { id: "park", text: "去公园", x: 20, y: 410, tone: "good", concepts: ["leaf", "path"] },
      { id: "library", text: "去图书馆", x: 202, y: 410, tone: "good", concepts: ["leaf"] },
    ],
    edges: [
      { d: "M380 110 L198 172", concepts: ["branch", "path"] },
      { d: "M380 110 L590 172", concepts: ["branch"] },
      { d: "M198 224 L128 294", concepts: ["branch", "path"] },
      { d: "M198 224 L380 294", concepts: ["branch"] },
      { d: "M128 348 L86 410", concepts: ["branch", "path"] },
      { d: "M128 348 L268 410", concepts: ["branch"] },
    ],
    labels: [
      { text: "完成", x: 230, y: 126, concepts: ["branch", "path"] },
      { text: "未完成", x: 520, y: 126, concepts: ["branch"] },
      { text: "是", x: 132, y: 244, concepts: ["branch", "path"] },
      { text: "否", x: 300, y: 250, concepts: ["branch"] },
      { text: "是", x: 74, y: 360, concepts: ["branch", "path"] },
      { text: "否", x: 214, y: 360, concepts: ["branch"] },
    ],
  },
  {
    id: "umbrella",
    title: "要不要带伞",
    structure: "多分支决策树",
    nodes: [
      { id: "root", text: "天气情况？", x: 314, y: 54, concepts: ["root", "criterion", "path"] },
      { id: "sunny", text: "紫外线强吗？", x: 56, y: 174, concepts: ["branch-node", "criterion"] },
      { id: "cloudy", text: "下午会下雨吗？", x: 314, y: 174, concepts: ["branch-node", "criterion"] },
      { id: "rainy", text: "雨量大吗？", x: 552, y: 174, concepts: ["branch-node", "criterion", "path"] },
      { id: "hat", text: "戴帽子", x: 6, y: 390, tone: "warn", concepts: ["leaf"] },
      { id: "none", text: "不带伞", x: 136, y: 390, tone: "good", concepts: ["leaf"] },
      { id: "small", text: "带折叠伞", x: 252, y: 390, tone: "warn", concepts: ["leaf"] },
      { id: "backup", text: "备小伞", x: 392, y: 390, tone: "warn", concepts: ["leaf"] },
      { id: "big", text: "带长伞", x: 514, y: 390, tone: "stop", concepts: ["leaf", "path"] },
      { id: "raincoat", text: "带雨衣", x: 632, y: 390, tone: "stop", concepts: ["leaf"] },
    ],
    edges: [
      { d: "M380 110 L122 178", concepts: ["branch"] },
      { d: "M380 110 L380 178", concepts: ["branch"] },
      { d: "M380 110 L618 178", concepts: ["branch", "path"] },
      { d: "M122 226 L72 390", concepts: ["branch"] },
      { d: "M122 226 L202 390", concepts: ["branch"] },
      { d: "M380 226 L318 390", concepts: ["branch"] },
      { d: "M380 226 L458 390", concepts: ["branch"] },
      { d: "M618 226 L580 390", concepts: ["branch", "path"] },
      { d: "M618 226 L696 390", concepts: ["branch"] },
    ],
    labels: [
      { text: "晴天", x: 218, y: 118, concepts: ["branch"] },
      { text: "阴天", x: 362, y: 126, concepts: ["branch"] },
      { text: "雨天", x: 522, y: 118, concepts: ["branch", "path"] },
      { text: "强", x: 70, y: 296, concepts: ["branch"] },
      { text: "弱", x: 178, y: 296, concepts: ["branch"] },
      { text: "是", x: 314, y: 296, concepts: ["branch"] },
      { text: "否", x: 436, y: 296, concepts: ["branch"] },
      { text: "大", x: 568, y: 296, concepts: ["branch", "path"] },
      { text: "小", x: 682, y: 296, concepts: ["branch"] },
    ],
  },
];

const orderPresets = [
  { id: "from-lab1", label: "默认扩展", follow: ["process", "additive", "protein", "fiber"] },
  { id: "strong", label: "后续关键特征靠前", follow: ["process", "additive", "protein", "fiber", "fat"] },
  { id: "middle", label: "后续中等方案", follow: ["protein", "fiber", "fat", "satiety"] },
  { id: "noise", label: "后续干扰特征靠前", follow: ["package", "like", "satiety", "fat"] },
];

const applicationOrder = ["process", "additive", "protein", "fiber"];

const newFoodCases = [
  nf("wrap", "鸡胸肉全麦卷", "低", "低", "高", "高", "中", "中", "高", "中", "普通"),
  nf("puff", "网红奶油泡芙", "高", "高", "中", "低", "高", "多", "中", "高", "网红"),
  nf("bar", "低糖高纤能量棒", "低", "中", "中", "高", "中", "中", "高", "中", "吸引"),
  nf("drink", "果味气泡饮", "高", "低", "低", "低", "高", "多", "低", "高", "吸引"),
];

let activeExample = "snack";
let activeConcept = "root";
let selectedFeature = null;
let experimentSheetRows = createExperimentSheetRows();
let activeSheetFeatureRow = null;
let activeSheetColorCell = null;
let activeSheetEffectRow = null;
let selectedAnalysisFeature = "";
let selectedCandidateFeature = "";
let selectedNoiseFeature = "";
let activeManualPage = "manual-exp1";
let lab1AnalysisReady = false;
let lab1ConclusionReady = false;
let lab1AnalysisAnswers = createLab1AnalysisAnswers();
let lab1ConclusionAnswers = createLab1ConclusionAnswers();
let datasetSelectedIds = foodPool.slice(0, 10).map((item) => item.id);
let datasetSelectedFeature = null;
let datasetFeaturePickerOpen = false;
let datasetRecords = [];
let selectedDatasetConclusion = "";
const depthSelectionLimit = 10;
let activeDepthGroupId = depthChallengeGroups[0].id;
let depthSelectedIds = depthChallengeGroups[0].items.map((item) => item.id);
let depthNodeFeatures = {};
let depthActiveNodePath = "";
let depthBuildRecords = [];
let depthStepOrder = [];
let draggedDepthStepId = "";
let depthSuccessSignatures = [];
let depthLatestSuccessSignature = "";
let depthVerifyMessage = "";
let depthPoolExpanded = true;
let featurePickerOpen = false;
let featurePickerScrollY = null;
let selectedOrder = ["sugar", "process", "additive"];
let selectedOrderPreset = "from-lab1";
let selectedOrderFinding = "";
let selectedOrderEvidence = "";
let orderRecords = [];
let currentOrderResult = null;
let autoBuild = null;
let autoStepCount = 0;
let selectedAutoUnderstanding = "";
let selectedAutoEvidence = "";
let autoRecords = [];
let selectedApplyCase = newFoodCases[0].id;
let selectedApplyUnderstanding = "";
let selectedApplyEvidence = "";
let applyRecords = [];
let currentPrediction = null;
let transferDataSize = 120;
let transferFeatureCount = 3;
let transferPrediction = null;
let computerDataSize = computerFixedDataSize;
let computerFeatureCount = computerFixedFeatureKeys.length;
let computerFeatureKeys = [...computerFixedFeatureKeys];
let computerBuild = null;
let computerStepCount = 0;
let predictionInput = createDefaultPredictionInput();
let computerPrediction = null;

const compactFeatureLabels = {
  sugar: "糖",
  fat: "脂",
  protein: "蛋白",
  fiber: "纤维",
  process: "加工",
  additive: "添加",
};

const computerFoodCards = [
  foodCard("milk", "纯牛奶", "pure-milk.png", ["低", "中", "高", "低", "低", "少"]),
  foodCard("soyMilk", "无糖豆浆", "soy-milk.png", ["低", "低", "高", "中", "低", "少"]),
  foodCard("sweetPotato", "烤红薯", "roasted-sweet-potato.png", ["中", "低", "低", "高", "低", "少"]),
  foodCard("teaEgg", "茶叶蛋", "tea-egg.png", ["低", "中", "高", "低", "中", "少"]),
  foodCard("chickpeaSalad", "鹰嘴豆沙拉", "chickpea-salad.png", ["低", "低", "中", "高", "低", "少"]),
  foodCard("cornCup", "玉米杯", "corn-cup.png", ["中", "低", "低", "高", "中", "少"]),
  foodCard("pearlMilkTea", "珍珠奶茶", "pearl-milk-tea.png", ["高", "中", "低", "低", "高", "多"]),
  foodCard("latiao", "辣条", "latiao.png", ["高", "高", "低", "低", "高", "多"]),
  foodCard("chips", "薯片", "chips.png", ["中", "高", "低", "低", "高", "中"]),
  foodCard("lowFatYogurt", "低脂风味酸奶", "low-fat-yogurt.png", ["高", "低", "中", "低", "高", "多"]),
  foodCard("freshJuice", "鲜榨果汁", "fresh-juice.png", ["高", "低", "低", "低", "中", "少"]),
  foodCard("fruitCereal", "水果麦片", "fruit-cereal.png", ["高", "中", "中", "中", "高", "中"]),
];

function f(id, name, sugar, fat, protein, fiber, process, additive, satiety, like, pkg, healthy) {
  return { id, name, sugar, fat, protein, fiber, process, additive, satiety, like, package: pkg, healthy };
}

function nf(id, name, sugar, fat, protein, fiber, process, additive, satiety, like, pkg) {
  return { id, name, sugar, fat, protein, fiber, process, additive, satiety, like, package: pkg };
}

function foodCard(id, name, image, values) {
  const keys = ["sugar", "fat", "protein", "fiber", "process", "additive"];
  return {
    id,
    name,
    image: `./assets/food-cards/${image}`,
    values: Object.fromEntries(keys.map((key, index) => [key, values[index]])),
  };
}

function createLab1AnalysisAnswers() {
  return {
    strongFeature: "",
    strongDegree: "",
    strongRole: "",
    weakFeature: "",
    weakDegree: "",
    weakRole: "",
    difference: "",
  };
}

function createLab1ConclusionAnswers() {
  return {
    nodeRole: "",
    degree: "",
  };
}

function createDefaultPredictionInput() {
  return Object.fromEntries(
    Object.entries(featureDefs).map(([key, def]) => [key, def.values[1] || def.values[0]]),
  );
}

function healthRiskScore(item) {
  const risk =
    (item.process === "高" ? 2 : item.process === "中" ? 1 : 0) +
    (item.sugar === "高" ? 2 : item.sugar === "中" ? 1 : 0) +
    (item.fat === "高" ? 2 : item.fat === "中" ? 1 : 0) +
    (item.additive === "多" ? 2 : item.additive === "中" ? 1 : 0) +
    (item.sodium === "高" ? 1 : 0) +
    (item.energy === "高" ? 1 : 0) +
    (item.fried === "高" ? 2 : item.fried === "中" ? 1 : 0);
  const protection =
    (item.protein === "高" ? 1 : 0) +
    (item.fiber === "高" ? 1 : 0) +
    (item.vitamin === "高" ? 1 : 0) +
    (item.natural === "高" ? 1 : 0);
  return risk - protection;
}

function classroomHealthLabel(item) {
  const obviouslyUnhealthy =
    (item.process === "高" && (item.sugar === "高" || item.fat === "高" || item.additive === "多" || item.fried === "高")) ||
    (item.sugar === "高" && item.fat === "高") ||
    (item.fried === "高" && item.additive === "多");
  return !obviouslyUnhealthy && healthRiskScore(item) < 3;
}

function createExperimentSheetRows() {
  return Array.from({ length: lab1SheetRowCount }, () => ({
    featureKey: "",
    leftColor: "",
    rightColor: "",
    effect: "",
  }));
}

function $(selector) {
  return document.querySelector(selector);
}

function $all(selector) {
  return [...document.querySelectorAll(selector)];
}

function init() {
  renderDataCountLabels();
  initScenes();
  initIntro();
  initExperiment();
  initDatasetLab();
  initDepthLab();
  initLevels();
  initApply();
}

function renderDataCountLabels() {
  $all(".data-count-label").forEach((item) => {
    item.textContent = item.textContent.replace(/\d+ 条(?:典型)?食品记录/, `${foods.length} 条典型食品记录`);
  });
}

function initScenes() {
  $all("[data-scene]").forEach((button) => {
    button.addEventListener("click", () => switchScene(button.dataset.scene));
  });
  $("#go-experiment")?.addEventListener("click", () => switchScene("experiment"));
  const requestedScene = new URLSearchParams(location.search).get("scene") || location.hash.replace("#", "");
  if (requestedScene && $(`#${requestedScene}`)?.classList.contains("scene")) {
    switchScene(requestedScene, false);
    setTimeout(() => {
      history.replaceState(null, "", `?scene=${requestedScene}`);
      window.scrollTo({ top: 0, left: 0 });
    }, 160);
  }
  window.addEventListener("hashchange", () => {
    const scene = location.hash.replace("#", "");
    const target = $(`#${scene}`);
    if (target?.classList.contains("scene")) {
      switchScene(scene, false);
      window.scrollTo({ top: 0, left: 0 });
    } else if (!target) {
      switchScene("intro", false);
      window.scrollTo({ top: 0, left: 0 });
    }
  });
}

function switchScene(scene, updateHash = true) {
  $all(".scene").forEach((section) => section.classList.toggle("active", section.id === scene));
  $all(".scene-tab").forEach((button) => button.classList.toggle("active", button.dataset.scene === scene));
  if (scene === "experiment") renderManualPages();
  if (scene === "levels") renderComputer();
  if (updateHash) {
    history.replaceState(null, "", `#${scene}`);
  }
}

function initIntro() {
  renderConceptGrid();
  renderExampleSwitch();
  $("#concept-grid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-concept]");
    if (!button) return;
    activeConcept = button.dataset.concept;
    renderConceptGrid();
    renderExampleTree();
  });
  $("#example-switch").addEventListener("click", (event) => {
    const button = event.target.closest("[data-example]");
    if (!button) return;
    activeExample = button.dataset.example;
    renderExampleSwitch();
    renderExampleTree();
  });
  renderExampleTree();
}

function renderConceptGrid() {
  $("#concept-grid").innerHTML = introConcepts
    .map(
      (concept) => `
      <button class="concept-card ${concept.key === activeConcept ? "active" : ""}" data-concept="${concept.key}" type="button">
        <strong>${concept.label}</strong>
        <span>${concept.desc}</span>
      </button>`,
    )
    .join("");
}

function renderExampleSwitch() {
  $("#example-switch").innerHTML = examples
    .map(
      (item) => `
      <button class="ghost-action ${item.id === activeExample ? "active" : ""}" data-example="${item.id}" type="button">
        <strong>${item.title}</strong>
      </button>`,
    )
    .join("");
}

function renderExampleTree() {
  const item = examples.find((example) => example.id === activeExample);
  $("#example-tree").innerHTML = `
    <div class="mini-tree-canvas">
      <svg class="mini-svg" viewBox="0 0 760 500" preserveAspectRatio="none" aria-hidden="true">
        ${item.edges.map((edge) => `<path class="${conceptClass(edge.concepts)}" d="${edge.d}" />`).join("")}
      </svg>
      ${item.labels
        .map((label) => `<div class="mini-label ${conceptClass(label.concepts)}" style="left:${(label.x / 760) * 100}%;top:${(label.y / 500) * 100}%">${label.text}</div>`)
        .join("")}
      ${item.nodes
        .map(
          (node) => `
        <div class="mini-node ${node.tone ? `leaf-${node.tone}` : ""} ${conceptClass(node.concepts)}" style="left:${(node.x / 760) * 100}%;top:${(node.y / 500) * 100}%">
          ${node.text}
        </div>`,
        )
        .join("")}
    </div>
  `;
}

function conceptClass(concepts = []) {
  return concepts.includes(activeConcept) ? "concept-highlight" : "";
}

function initExperiment() {
  initManualPages();
  renderFeatureDock();
  renderDataTable();
  renderFoodBank();
  renderSplit();
  $("#root-node").addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    setFeaturePickerOpen(!featurePickerOpen);
  });
  $("#feature-popover").addEventListener("click", (event) => event.stopPropagation());
  document.addEventListener("click", () => setFeaturePickerOpen(false));
  $("#save-record").addEventListener("click", saveRecord);
  $("#show-lab1-conclusion")?.addEventListener("click", showLab1Conclusion);
  $("#lab1-analysis")?.addEventListener("change", handleLab1AnalysisChange);
  $("#lab1-conclusion")?.addEventListener("change", handleLab1ConclusionChange);
  $("#reset-lab").addEventListener("click", resetLab);
  $("#save-lab-sheet")?.addEventListener("click", saveLabSheetLocal);
  $("#print-lab-sheet").addEventListener("click", printLabSheetPdf);
}

function initManualPages() {
  renderManualPages();
  $all("[data-manual-page]").forEach((button) => {
    button.addEventListener("click", () => {
      activeManualPage = button.dataset.manualPage;
      renderManualPages();
      window.scrollTo({ top: $("#experiment").offsetTop, left: 0, behavior: "smooth" });
    });
  });
}

function renderManualPages() {
  $all(".manual-subsection").forEach((section) => section.classList.toggle("active", section.id === activeManualPage));
  $all(".manual-tab").forEach((button) => button.classList.toggle("active", button.dataset.manualPage === activeManualPage));
}

function setFeaturePickerOpen(open) {
  featurePickerOpen = open;
  if (open) featurePickerScrollY = window.scrollY;
  $("#feature-popover").hidden = !open;
  $("#root-node").setAttribute("aria-expanded", String(open));
  $("#root-node").classList.toggle("picker-open", open);
}

function renderFeatureDock() {
  $("#feature-dock").innerHTML = lab1FeatureKeys
    .map(
      (key) => `<button class="feature-button ${key === selectedFeature ? "active" : ""}" data-feature="${key}" type="button">${featureDefs[key].label}</button>`,
    )
    .join("");
  $("#feature-dock").onclick = (event) => {
    event.preventDefault();
    const button = event.target.closest("[data-feature]");
    if (!button) return;
    const stableScrollY = featurePickerScrollY ?? window.scrollY;
    selectedFeature = button.dataset.feature;
    renderFeatureDock();
    setFeaturePickerOpen(false);
    renderSplit();
    requestAnimationFrame(() => window.scrollTo({ top: stableScrollY, left: window.scrollX, behavior: "instant" }));
  };
}

function renderDataTable() {
  renderDataTableInto("#data-table", lab1FeatureKeys);
}

function renderDataTableInto(selector, featureKeys = Object.keys(featureDefs)) {
  const table = $(selector);
  if (!table) return;
  const headers = ["编号", "食品", ...featureKeys.map((key) => featureDefs[key].label), "是否健康"];
  table.innerHTML = `
    <thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead>
    <tbody>
      ${foods
        .map(
          (item) => `
        <tr>
          <td><span class="food-id-chip compact-id">${item.id}</span></td><td>${item.name}</td>
          ${featureKeys.map((key) => `<td>${item[key]}</td>`).join("")}
          <td>${item.healthy ? "是" : "否"}</td>
        </tr>`,
        )
        .join("")}
    </tbody>
  `;
}

function renderFoodBank() {
  $("#food-bank").innerHTML = foods.map((item) => foodToken(item)).join("");
}

function renderSplit() {
  if (!selectedFeature) {
    $("#root-feature").textContent = "选择特征";
    $("#root-node").classList.add("awaiting-feature");
    $all(".branch-lane").forEach((lane, index) => {
      lane.classList.add("lane-empty");
      lane.innerHTML = `
        <div class="lane-title">
          <strong>${index === 0 ? "左侧接收池" : "右侧接收池"}</strong>
          <span>等待分流</span>
        </div>
        <div class="empty-lane-note">选择根节点特征后，食品才会流入这里。</div>`;
    });
    renderCurrentRecord(null);
    renderOptions(null);
    return;
  }

  const result = analyzeFeature(selectedFeature);
  $("#root-node").classList.remove("awaiting-feature");
  $("#root-feature").textContent = result.question;

  const lanes = $all(".branch-lane");
  result.groups.forEach((group, index) => {
    const lane = lanes[index];
    lane.classList.remove("lane-empty");
    lane.innerHTML = `
      <div class="lane-summary">
        <strong>${conditionLabel(result.key, group)}</strong>
        <div class="lane-stats">
          <span>总${group.items.length}</span>
          <span class="stat-healthy">健康${group.yes}</span>
          <span class="stat-unhealthy">不健康${group.no}</span>
        </div>
      </div>
      <div class="lane-cards">
        ${group.items.map((item, itemIndex) => foodToken(item, itemIndex, index)).join("")}
      </div>`;
    lane.scrollTop = 0;
  });

  renderCurrentRecord(result);
  renderOptions(result);
}

function analyzeFeature(key) {
  const def = featureDefs[key];
  const rule = featureRules[key];
  const groups = [
    { branch: "是", value: rule.yes, items: foods.filter((item) => rule.test(item)) },
    { branch: "否", value: rule.no, items: foods.filter((item) => !rule.test(item)) },
  ].map((group) => {
    const yes = group.items.filter((item) => item.healthy).length;
    const no = group.items.length - yes;
    return { ...group, yes, no };
  });
  const score = groups.reduce((sum, group) => sum + Math.max(group.yes, group.no), 0) / foods.length;
  const gain = binaryInformationGain(key);
  const level = score >= 0.84 ? "强" : score >= 0.68 ? "中" : "弱";
  return { key, label: def.label, question: rule.question, groups, score, gain, level };
}

function conditionLabel(featureKey, group) {
  const labels = {
    sugar: { 是: "糖含量高", 否: "糖含量低或中" },
    fat: { 是: "脂肪含量高", 否: "脂肪含量低或中" },
    protein: { 是: "蛋白质含量高", 否: "蛋白质含量低或中" },
    fiber: { 是: "膳食纤维高", 否: "膳食纤维低或中" },
    process: { 是: "加工程度高", 否: "加工程度低或中" },
    additive: { 是: "添加剂数量多", 否: "添加剂数量少或中" },
    satiety: { 是: "饱腹感高", 否: "饱腹感低或中" },
    like: { 是: "学生喜爱度高", 否: "学生喜爱度低或中" },
    package: { 是: "包装吸引力强", 否: "普通包装" },
    sodium: { 是: "钠含量高", 否: "钠含量低或中" },
    energy: { 是: "能量密度高", 否: "能量密度低或中" },
    vitamin: { 是: "维生素含量高", 否: "维生素含量低或中" },
    natural: { 是: "食材天然度高", 否: "食材天然度低或中" },
    fried: { 是: "油炸程度高", 否: "油炸程度低或中" },
    portion: { 是: "单份分量高", 否: "单份分量低或中" },
  };
  return labels[featureKey]?.[group.branch] || group.value;
}

function entropy(items) {
  if (!items.length) return 0;
  const yes = items.filter((item) => item.healthy).length;
  const no = items.length - yes;
  return [yes, no].reduce((sum, count) => {
    if (!count) return sum;
    const p = count / items.length;
    return sum - p * Math.log2(p);
  }, 0);
}

function informationGain(key) {
  return informationGainFor(foods, key);
}

function binaryInformationGain(key) {
  const base = entropy(foods);
  const rule = featureRules[key];
  const yesGroup = foods.filter((item) => rule.test(item));
  const noGroup = foods.filter((item) => !rule.test(item));
  const remainder = [yesGroup, noGroup].reduce((sum, group) => sum + (group.length / foods.length) * entropy(group), 0);
  return base - remainder;
}

function informationGainFor(items, key) {
  if (!items.length) return 0;
  const base = entropy(items);
  const def = featureDefs[key];
  const remainder = def.values.reduce((sum, value) => {
    const group = items.filter((item) => item[key] === value);
    return sum + (group.length / items.length) * entropy(group);
  }, 0);
  return base - remainder;
}

function renderCurrentRecord(result) {
  const current = $("#record-current");
  if (!current) return;
  if (!result) {
    current.innerHTML = `
      <h3>当前观察</h3>
      <p>探究特征：<strong>待选择</strong></p>
      <p class="observe-note">请先点击左侧根节点，选择一个想测试的食品特征，再用色块记录观察到的主色。</p>`;
    return;
  }

  current.innerHTML = `
    <h3>当前观察</h3>
    <p>探究特征：<strong>${result.label}</strong></p>
    <p class="observe-note">请观察左右两个接收池：哪一种颜色更多？是略多，还是明显多？再选择对应色块。</p>`;
}

function suggestion(result) {
  if (result.level === "强") return "优先比较";
  if (result.level === "中") return "暂列候选";
  return "可能干扰";
}

function groupQuality(group) {
  const total = group.items.length;
  const dominant = Math.max(group.yes, group.no);
  const purity = total ? dominant / total : 0;
  let purityText = "纯度低";
  let mixingText = "混合高";
  if (!total) {
    purityText = "无数据";
    mixingText = "无法判断";
  } else if (purity === 1) {
    purityText = "纯度高";
    mixingText = "混合低";
  } else if (purity >= 0.8) {
    purityText = "纯度较高";
    mixingText = "混合较低";
  } else if (purity >= 0.65) {
    purityText = "纯度中等";
    mixingText = "混合中等";
  }
  return { purity, purityText, mixingText };
}

function renderOptions(result) {
  renderExperimentSheet();
  renderAnalysisOptions();
  updateExperimentSaveState();
  renderLab1AnalysisVisibility();
}

function saveRecord() {
  const nextRow = experimentSheetRows.find((row) => !row.featureKey);
  if (selectedFeature && nextRow) nextRow.featureKey = selectedFeature;
  if (!hasLab1Records()) return;
  lab1AnalysisReady = true;
  lab1ConclusionReady = false;
  activeSheetFeatureRow = null;
  activeSheetColorCell = null;
  activeSheetEffectRow = null;
  renderExperimentSheet();
  renderAnalysisOptions();
  updateExperimentSaveState();
  renderLab1AnalysisVisibility();
}

function renderRecords() {
  renderExperimentSheet();
  renderAnalysisOptions();
  renderLab1AnalysisVisibility();
}

function resetLab() {
  selectedFeature = null;
  experimentSheetRows = createExperimentSheetRows();
  activeSheetFeatureRow = null;
  activeSheetColorCell = null;
  activeSheetEffectRow = null;
  selectedAnalysisFeature = "";
  selectedCandidateFeature = "";
  selectedNoiseFeature = "";
  lab1AnalysisReady = false;
  lab1ConclusionReady = false;
  lab1AnalysisAnswers = createLab1AnalysisAnswers();
  lab1ConclusionAnswers = createLab1ConclusionAnswers();
  datasetSelectedIds = foodPool.slice(0, 10).map((item) => item.id);
  datasetSelectedFeature = null;
  datasetFeaturePickerOpen = false;
  datasetRecords = [];
  selectedDatasetConclusion = "";
  activeDepthGroupId = depthChallengeGroups[0].id;
  depthSelectedIds = depthChallengeGroups[0].items.map((item) => item.id);
  depthPoolExpanded = true;
  resetDepthTreeState();
  resetDepthAchievements();
  setFeaturePickerOpen(false);
  renderFeatureDock();
  renderSplit();
  renderRecords();
  renderDatasetLab();
  renderDepthLab();
}

function hasLab1Records() {
  return experimentSheetRows.some((row) => row.featureKey || row.leftColor || row.rightColor || row.effect);
}

function renderLab1AnalysisVisibility() {
  const analysis = $("#lab1-analysis");
  const conclusion = $("#lab1-conclusion");
  if (analysis) analysis.hidden = !lab1AnalysisReady;
  if (conclusion) conclusion.hidden = !lab1ConclusionReady;
}

function renderExperimentSheet() {
  const wrapper = $("#experiment-sheet-wrap");
  if (!wrapper) return;
  const filledRows = experimentSheetRows.filter((row) => row.featureKey || row.leftColor || row.rightColor || row.effect).length;
  $("#record-count").textContent = `${filledRows}/${lab1SheetRowCount} 行`;

  wrapper.innerHTML = `
    <table class="experiment-sheet-table color-sheet-table">
      <thead>
        <tr>
          <th class="feature-col">特征</th>
          <th>左池主色</th>
          <th>右池主色</th>
          <th>区分度</th>
        </tr>
      </thead>
      <tbody>
        ${experimentSheetRows.map((row, index) => renderSheetInputRow(row, index)).join("")}
      </tbody>
    </table>
  `;

  wrapper.onclick = (event) => {
    const trigger = event.target.closest("[data-sheet-row-trigger]");
    if (trigger) {
      const index = Number(trigger.dataset.sheetRowTrigger);
      activeSheetFeatureRow = activeSheetFeatureRow === index ? null : index;
      activeSheetColorCell = null;
      activeSheetEffectRow = null;
      renderExperimentSheet();
      return;
    }

    const colorTrigger = event.target.closest("[data-color-row]");
    if (colorTrigger) {
      activeSheetFeatureRow = null;
      activeSheetEffectRow = null;
      const nextCell = { row: Number(colorTrigger.dataset.colorRow), side: colorTrigger.dataset.colorSide };
      activeSheetColorCell =
        activeSheetColorCell && activeSheetColorCell.row === nextCell.row && activeSheetColorCell.side === nextCell.side ? null : nextCell;
      renderExperimentSheet();
      return;
    }

    const effectTrigger = event.target.closest("[data-effect-row]");
    if (effectTrigger) {
      activeSheetFeatureRow = null;
      activeSheetColorCell = null;
      const index = Number(effectTrigger.dataset.effectRow);
      activeSheetEffectRow = activeSheetEffectRow === index ? null : index;
      renderExperimentSheet();
      return;
    }

    const featureOption = event.target.closest("[data-sheet-feature]");
    if (featureOption) {
      const index = Number(featureOption.dataset.sheetRow);
      experimentSheetRows[index].featureKey = featureOption.dataset.sheetFeature;
      activeSheetFeatureRow = null;
      renderExperimentSheet();
      renderAnalysisOptions();
      return;
    }

    const colorOption = event.target.closest("[data-sheet-color]");
    if (colorOption) {
      const index = Number(colorOption.dataset.sheetRow);
      const side = colorOption.dataset.sheetSide;
      experimentSheetRows[index][side === "left" ? "leftColor" : "rightColor"] = colorOption.dataset.sheetColor;
      activeSheetColorCell = null;
      renderExperimentSheet();
      return;
    }

    const effectOption = event.target.closest("[data-sheet-effect]");
    if (!effectOption) return;
    const index = Number(effectOption.dataset.sheetRow);
    experimentSheetRows[index].effect = effectOption.dataset.sheetEffect;
    activeSheetEffectRow = null;
    renderExperimentSheet();
  };
}

function updateExperimentSaveState() {
  const saveButton = $("#save-record");
  const ready = Boolean(selectedFeature || hasLab1Records());
  if (saveButton) {
    saveButton.disabled = !ready;
    saveButton.classList.toggle("disabled", !ready);
    saveButton.textContent = lab1AnalysisReady ? "更新数据分析" : "开启数据分析";
  }
}

function renderSheetInputRow(row, index) {
  return `
    <tr>
      <th class="sheet-feature-cell ${activeSheetFeatureRow === index ? "menu-open" : ""}">
        <button class="sheet-feature-trigger" data-sheet-row-trigger="${index}" type="button">
          ${row.featureKey ? featureDefs[row.featureKey].label : "选择特征"}
        </button>
        <div class="sheet-feature-menu" ${activeSheetFeatureRow === index ? "" : "hidden"}>
          ${lab1FeatureKeys
            .map(
              (key) => `
            <button class="${row.featureKey === key ? "active" : ""}" data-sheet-row="${index}" data-sheet-feature="${key}" type="button">${featureDefs[key].label}</button>`,
            )
            .join("")}
        </div>
      </th>
      ${renderColorChoiceCell(row, index, "left")}
      ${renderColorChoiceCell(row, index, "right")}
      ${renderEffectChoiceCell(row, index)}
    </tr>`;
}

function renderColorChoiceCell(row, index, side) {
  const field = side === "left" ? "leftColor" : "rightColor";
  const isOpen = activeSheetColorCell && activeSheetColorCell.row === index && activeSheetColorCell.side === side;
  return `
    <td class="sheet-color-cell ${isOpen ? "menu-open" : ""}">
      <button class="sheet-color-trigger ${row[field] ? `tone-${row[field]}` : ""}" data-color-row="${index}" data-color-side="${side}" type="button">
        ${row[field] ? renderColorBadge(row[field]) : renderEmptyColorBadge()}
      </button>
      <div class="sheet-color-menu" ${isOpen ? "" : "hidden"}>
        ${colorChoices
          .map(
            (choice) => `
          <button class="sheet-swatch-option tone-${choice.key} ${row[field] === choice.key ? "active" : ""}" data-sheet-row="${index}" data-sheet-side="${side}" data-sheet-color="${choice.key}" type="button">
            <span class="swatch-dot"></span>
            <strong>${choice.label}</strong>
          </button>`,
          )
          .join("")}
      </div>
    </td>`;
}

function renderEffectChoiceCell(row, index) {
  const isOpen = activeSheetEffectRow === index;
  return `
    <td class="sheet-effect-cell ${isOpen ? "menu-open" : ""}">
      <button class="sheet-effect-trigger" data-effect-row="${index}" type="button">
        ${row.effect ? effectShortLabel(row.effect) : "选择判断"}
      </button>
      <div class="sheet-effect-menu" ${isOpen ? "" : "hidden"}>
        ${effectChoices
          .map(
            (choice) => `
          <button class="${row.effect === choice.key ? "active" : ""}" data-sheet-row="${index}" data-sheet-effect="${choice.key}" type="button">
            <strong>${choice.label}</strong>
            <small>${choice.note}</small>
          </button>`,
          )
          .join("")}
      </div>
    </td>`;
}

function renderColorBadge(colorKey) {
  const choice = colorChoices.find((item) => item.key === colorKey) || colorChoices[0];
  return `<span class="color-badge tone-${choice.key}" title="${choice.label}" aria-label="${choice.label}"></span>`;
}

function renderEmptyColorBadge() {
  return `<span class="color-badge empty-color-badge" title="选择色块" aria-label="选择色块"></span>`;
}

function colorLabel(colorKey) {
  return colorChoices.find((item) => item.key === colorKey)?.label || "";
}

function effectLabel(effectKey) {
  return effectChoices.find((item) => item.key === effectKey)?.label || "";
}

function effectShortLabel(effectKey) {
  return (
    {
      clear: "高",
      middle: "一般",
      mixed: "低",
    }[effectKey] || ""
  );
}

function renderAnalysisOptions() {
  renderLab1AnalysisForm();
  renderLab1ConclusionForm();
  syncLab1LegacyConclusionState();
}

function renderLab1AnalysisForm() {
  const container = $("#lab1-analysis-form");
  if (!container) return;
  const featureOptions = lab1FeatureKeys.map((key) => ({ key, label: lab1FeatureChoiceLabels[key] || featureDefs[key].label }));
  container.innerHTML = `
    <ol class="cloze-list">
      <li>
        在本次实验食物数据池中，
        ${renderClozeSelect("analysis", "strongFeature", lab1AnalysisAnswers.strongFeature, featureOptions, "选择特征")}
        能够<mark class="analysis-mark mark-good">有效的</mark>将不同类别分开，它对数据的区分度最
        ${renderClozeSelect("analysis", "strongDegree", lab1AnalysisAnswers.strongDegree, lab1DegreeChoices, "选择")}
        ，因此它是
        ${renderClozeSelect("analysis", "strongRole", lab1AnalysisAnswers.strongRole, lab1RoleChoices, "选择")}
        。
      </li>
      <li>
        在本次实验食物数据池中，
        ${renderClozeSelect("analysis", "weakFeature", lab1AnalysisAnswers.weakFeature, featureOptions, "选择特征")}
        <mark class="analysis-mark mark-bad">无法有效的</mark>区分不同类别，它对数据的区分度最
        ${renderClozeSelect("analysis", "weakDegree", lab1AnalysisAnswers.weakDegree, lab1DegreeChoices, "选择")}
        ，因此它是
        ${renderClozeSelect("analysis", "weakRole", lab1AnalysisAnswers.weakRole, lab1RoleChoices, "选择")}
        。
      </li>
      <li>
        选择不同的特征，分类结果的区分度
        ${renderClozeSelect("analysis", "difference", lab1AnalysisAnswers.difference, lab1DifferenceChoices, "选择")}
        。
      </li>
    </ol>`;
}

function renderLab1ConclusionForm() {
  const container = $("#lab1-conclusion-form");
  const summary = $("#analysis-summary");
  if (!container) return;
  container.innerHTML = `
    <p class="cloze-sentence">
      选择
      ${renderClozeSelect("conclusion", "nodeRole", lab1ConclusionAnswers.nodeRole, lab1ConclusionRoleChoices, "选择")}
      作为决策树节点，能更有效地缩小判断范围。在构建决策树时，应优先选择区分度
      ${renderClozeSelect("conclusion", "degree", lab1ConclusionAnswers.degree, lab1ConclusionDegreeChoices, "选择")}
      的特征作为分割节点。
    </p>`;
  if (!summary) return;
  if (lab1ConclusionAnswers.nodeRole && lab1ConclusionAnswers.degree) {
    const roleLabel = labelFromChoices(lab1ConclusionRoleChoices, lab1ConclusionAnswers.nodeRole);
    const degreeLabel = labelFromChoices(lab1ConclusionDegreeChoices, lab1ConclusionAnswers.degree);
    summary.textContent = `我的结论：优先选择${roleLabel}，尤其是区分度${degreeLabel}的特征。`;
  } else {
    summary.textContent = "请根据数据分析，补全本次实验结论。";
  }
}

function saveLabSheetLocal() {
  const payload = {
    savedAt: new Date().toISOString(),
    records: getExperimentSheetRecords(),
    analysis: { ...lab1AnalysisAnswers },
    conclusion: { ...lab1ConclusionAnswers },
  };
  localStorage.setItem("decision-tree-lab-sheet", JSON.stringify(payload));
  const button = $("#save-lab-sheet");
  if (!button) return;
  const oldText = button.textContent;
  button.textContent = "已保存";
  setTimeout(() => {
    button.textContent = oldText;
  }, 1200);
}

function renderClozeSelect(scope, field, value, options, placeholder) {
  return `
    <select class="cloze-select" data-lab1-${scope}-field="${field}">
      <option value="">${placeholder}</option>
      ${options.map((option) => `<option value="${option.key}" ${value === option.key ? "selected" : ""}>${option.label}</option>`).join("")}
    </select>`;
}

function labelFromChoices(choices, value) {
  return choices.find((choice) => choice.key === value)?.label || "";
}

function handleLab1AnalysisChange(event) {
  const select = event.target.closest("[data-lab1-analysis-field]");
  if (!select) return;
  lab1AnalysisAnswers[select.dataset.lab1AnalysisField] = select.value;
  renderAnalysisOptions();
}

function handleLab1ConclusionChange(event) {
  const select = event.target.closest("[data-lab1-conclusion-field]");
  if (!select) return;
  lab1ConclusionAnswers[select.dataset.lab1ConclusionField] = select.value;
  renderAnalysisOptions();
}

function showLab1Conclusion() {
  if (!lab1AnalysisReady) return;
  lab1ConclusionReady = true;
  renderAnalysisOptions();
  renderLab1AnalysisVisibility();
  $("#lab1-conclusion")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function syncLab1LegacyConclusionState() {
  selectedAnalysisFeature = lab1AnalysisAnswers.strongFeature;
  selectedNoiseFeature = lab1AnalysisAnswers.weakFeature;
  selectedCandidateFeature = "";
}

function getExperimentSheetRecords() {
  return experimentSheetRows
    .map((row, index) => ({
      index: index + 1,
      feature: row.featureKey ? featureDefs[row.featureKey].label : "",
      leftColor: colorLabel(row.leftColor),
      rightColor: colorLabel(row.rightColor),
      effect: effectLabel(row.effect),
    }))
    .filter((row) => row.feature || row.leftColor || row.rightColor || row.effect);
}

function uniqueTextOptions(options) {
  return [...new Set(options)];
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function initDatasetLab() {
  renderDatasetLab();
  $("#sample-pool").addEventListener("click", (event) => {
    const button = event.target.closest("[data-pool-food]");
    if (!button) return;
    datasetSelectedIds = toggleSelectedId(datasetSelectedIds, Number(button.dataset.poolFood), 10);
    datasetSelectedFeature = null;
    renderDatasetLab();
  });
  $("#dataset-random").addEventListener("click", () => {
    datasetSelectedIds = shuffle(foodPool.map((item) => item.id)).slice(0, 10);
    datasetSelectedFeature = null;
    renderDatasetLab();
  });
  $("#dataset-clear").addEventListener("click", () => {
    datasetSelectedIds = [];
    datasetSelectedFeature = null;
    renderDatasetLab();
  });
  $("#save-dataset-record").addEventListener("click", saveDatasetRecord);
  $("#undo-dataset-record").addEventListener("click", undoDatasetRecord);
  $("#dataset-record-table-wrap").addEventListener("change", (event) => {
    const field = event.target.closest("[data-dataset-record-field]");
    if (!field) return;
    const index = Number(field.dataset.datasetRecordIndex);
    if (!datasetRecords[index]) return;
    datasetRecords[index][field.dataset.datasetRecordField] = field.value;
    renderDatasetRecords();
  });
  $("#dataset-root-node").addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    datasetFeaturePickerOpen = !datasetFeaturePickerOpen;
    renderDatasetLab();
  });
  $("#dataset-feature-popover").addEventListener("click", (event) => event.stopPropagation());
  $("#dataset-feature-dock").addEventListener("click", (event) => {
    const button = event.target.closest("[data-dataset-feature]");
    if (!button) return;
    datasetSelectedFeature = button.dataset.datasetFeature;
    datasetFeaturePickerOpen = false;
    renderDatasetLab();
  });
  $("#dataset-conclusion-options").addEventListener("click", (event) => {
    const button = event.target.closest("[data-dataset-conclusion]");
    if (!button) return;
    selectedDatasetConclusion = button.dataset.datasetConclusion;
    renderDatasetConclusionOptions();
  });
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function balancedRandomFoodIds(count, sourceItems = foodPool) {
  const half = Math.floor(count / 2);
  const healthy = shuffle(sourceItems.filter((item) => item.healthy)).slice(0, half);
  const unhealthy = shuffle(sourceItems.filter((item) => !item.healthy)).slice(0, count - half);
  return healthy.flatMap((item, index) => [item, unhealthy[index]].filter(Boolean)).map((item) => item.id);
}

function getDepthCandidateItems() {
  return depthChallengeItems;
}

function getDepthChallengeGroup(groupId = activeDepthGroupId) {
  return depthChallengeGroups.find((group) => group.id === groupId) || depthChallengeGroups[0];
}

function getDepthItems() {
  return getDepthChallengeGroup().items;
}

function setDepthChallengeGroup(groupId) {
  const group = getDepthChallengeGroup(groupId);
  activeDepthGroupId = group.id;
  depthSelectedIds = group.items.map((item) => item.id);
  depthPoolExpanded = true;
  resetDepthTreeState();
  renderDepthLab();
}

function getDatasetItems() {
  const selected = new Set(datasetSelectedIds);
  return foodPool.filter((item) => selected.has(item.id));
}

function renderDatasetLab() {
  const selectedItems = getDatasetItems();
  $("#dataset-selected-count").textContent = `已选择 ${selectedItems.length}/10 条`;
  $("#dataset-table-label").textContent = selectedItems.length ? `${selectedItems.length} 条食品记录，5 列候选特征` : "还没有选择数据";
  $("#sample-pool").innerHTML = foodPool.map((item) => renderPoolFoodCard(item)).join("");
  renderDataTableFor("#dataset-table", selectedItems, lab1FeatureKeys);
  $("#dataset-food-bank").innerHTML = selectedItems.map((item) => foodToken(item)).join("");
  $("#dataset-feature-dock").innerHTML = lab1FeatureKeys
    .map(
      (key) =>
        `<button class="feature-button ${key === datasetSelectedFeature ? "active" : ""}" data-dataset-feature="${key}" type="button">${featureDefs[key].label}</button>`,
    )
    .join("");
  $("#dataset-feature-popover").hidden = !datasetFeaturePickerOpen;
  $("#dataset-root-node").classList.toggle("picker-open", datasetFeaturePickerOpen);
  renderDatasetSplit(selectedItems);
  renderDatasetRecords();
}

function toggleSelectedId(ids, id, maxCount) {
  if (ids.includes(id)) return ids.filter((itemId) => itemId !== id);
  if (ids.length >= maxCount) return ids;
  return [...ids, id];
}

function renderPoolFoodCard(item) {
  const selected = datasetSelectedIds.includes(item.id);
  return `
    <button class="pool-food-card ${selected ? "selected" : ""} ${item.healthy ? "" : "unhealthy"}" data-pool-food="${item.id}" type="button">
      <span class="pool-id">${item.id}</span>
      <span class="pool-icon">${foodIcons[item.name] || "🍽"}</span>
      <strong>${item.name}</strong>
    </button>`;
}

function renderDataTableFor(selector, items, featureKeys) {
  const table = $(selector);
  if (!table) return;
  const headers = ["编号", "食品", ...featureKeys.map((key) => featureDefs[key].label), "是否健康"];
  table.innerHTML = `
    <thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead>
    <tbody>
      ${items
        .map(
          (item) => `
        <tr>
          <td><span class="food-id-chip compact-id">${item.id}</span></td><td>${item.name}</td>
          ${featureKeys.map((key) => `<td>${item[key]}</td>`).join("")}
          <td>${item.healthy ? "是" : "否"}</td>
        </tr>`,
        )
        .join("")}
    </tbody>
  `;
}

function analyzeDatasetFeatures(items, featureKeys) {
  const rankings = featureKeys
    .map((key) => scoreFeatureForItems(items, key))
    .sort((a, b) => b.gain - a.gain || b.score - a.score);
  return { items, rankings, best: rankings[0] };
}

function scoreFeatureForItems(items, key) {
  const rule = featureRules[key];
  const groups = [
    { branch: "是", label: rule.yes, items: items.filter((item) => rule.test(item)) },
    { branch: "否", label: rule.no, items: items.filter((item) => !rule.test(item)) },
  ].map((group) => {
    const yes = group.items.filter((item) => item.healthy).length;
    const no = group.items.length - yes;
    return { ...group, yes, no };
  });
  const score = items.length ? groups.reduce((sum, group) => sum + Math.max(group.yes, group.no), 0) / items.length : 0;
  const gain = binaryInformationGainFor(items, key);
  return { key, label: featureDefs[key].label, groups, score, gain };
}

function binaryInformationGainFor(items, key) {
  if (!items.length) return 0;
  const base = entropy(items);
  const rule = featureRules[key];
  const yesGroup = items.filter((item) => rule.test(item));
  const noGroup = items.filter((item) => !rule.test(item));
  const remainder = [yesGroup, noGroup].reduce((sum, group) => sum + (group.length / items.length) * entropy(group), 0);
  return base - remainder;
}

function renderDatasetSplit(items) {
  const lanes = [$("#dataset-lane-yes"), $("#dataset-lane-no")];
  if (items.length !== 10 || !datasetSelectedFeature) {
    $("#dataset-root-feature").textContent = items.length === 10 ? "选择特征" : "先选数据";
    $("#dataset-root-node").classList.add("awaiting-feature");
    lanes.forEach((lane, index) => {
      lane.classList.add("lane-empty");
      lane.innerHTML = `
        <div class="lane-title">
          <strong>${index === 0 ? "左侧接收池" : "右侧接收池"}</strong>
          <span>等待分流</span>
        </div>
        <div class="empty-lane-note">${items.length === 10 ? "选择根节点特征后，食品才会流入这里。" : "请先从左侧选择 10 条食品数据。"}</div>`;
    });
    updateDatasetSaveState(false);
    return;
  }
  $("#dataset-root-node").classList.remove("awaiting-feature");
  const result = analyzeFeatureForDataset(items, datasetSelectedFeature);
  $("#dataset-root-feature").textContent = result.question;
  result.groups.forEach((group, index) => {
    const lane = lanes[index];
    lane.classList.remove("lane-empty");
    lane.innerHTML = `
      <div class="lane-summary">
        <strong>${conditionLabel(result.key, group)}</strong>
        <div class="lane-stats">
          <span>总${group.items.length}</span>
          <span class="stat-healthy">健康${group.yes}</span>
          <span class="stat-unhealthy">不健康${group.no}</span>
        </div>
      </div>
      <div class="lane-cards">${group.items.map((item, itemIndex) => foodToken(item, itemIndex, index)).join("")}</div>`;
  });
  updateDatasetSaveState(true);
}

function analyzeFeatureForDataset(items, key) {
  const scored = scoreFeatureForItems(items, key);
  return { key, question: featureRules[key].question, groups: scored.groups, score: scored.score, gain: scored.gain };
}

function datasetEffectLabel(score) {
  if (score >= 0.84) return "区分度高";
  if (score >= 0.68) return "区分度一般";
  return "区分度低";
}

function updateDatasetSaveState(ready) {
  const button = $("#save-dataset-record");
  if (!button) return;
  button.disabled = !ready;
  button.classList.toggle("disabled", !ready);
}

function saveDatasetRecord() {
  const items = getDatasetItems();
  if (items.length !== 10 || !datasetSelectedFeature) return;
  datasetRecords.push({
    group: datasetRecords.length + 1,
    ids: items.map((item) => item.id),
    feature: "",
    effect: "",
  });
  renderDatasetRecords();
}

function undoDatasetRecord() {
  if (!datasetRecords.length) return;
  datasetRecords.pop();
  renderDatasetRecords();
}

function renderDatasetRecords() {
  const wrap = $("#dataset-record-table-wrap");
  const count = $("#dataset-record-count");
  if (!wrap || !count) return;
  count.textContent = `${datasetRecords.length} 组`;
  const undoButton = $("#undo-dataset-record");
  if (undoButton) {
    undoButton.disabled = !datasetRecords.length;
    undoButton.classList.toggle("disabled", !datasetRecords.length);
  }
  if (!datasetRecords.length) {
    wrap.innerHTML = `<p class="branch-summary">建议至少记录两组：固定同一个特征，改变输入食品编号，比较区分度是否变化。</p>`;
    renderDatasetConclusionOptions();
    return;
  }
  wrap.innerHTML = `
    <table class="records-table dataset-record-table">
      <colgroup>
        <col class="dataset-col-group" />
        <col class="dataset-col-ids" />
        <col class="dataset-col-feature" />
        <col class="dataset-col-effect" />
      </colgroup>
      <thead>
        <tr><th>组别</th><th>食品<br>编号</th><th>测试<br>特征</th><th>区分度</th></tr>
      </thead>
      <tbody>
        ${datasetRecords
          .map(
            (record, index) => `
          <tr>
            <td class="auto-record-cell"><strong>第${record.group}组</strong></td>
            <td class="auto-record-cell">${renderFoodIdChips(record.ids)}</td>
            <td>${renderDatasetRecordFeatureSelect(record, index)}</td>
            <td>${renderDatasetRecordEffectSelect(record, index)}</td>
          </tr>`,
          )
          .join("")}
      </tbody>
    </table>`;
  renderDatasetConclusionOptions();
}

function renderFoodIdChips(ids) {
  return `<div class="food-id-chip-wrap">${ids.map((id) => `<span class="food-id-chip">${id}</span>`).join("")}</div>`;
}

function renderDatasetRecordFeatureSelect(record, index) {
  return `
    <select class="record-select" data-dataset-record-index="${index}" data-dataset-record-field="feature">
      <option value="">选择特征</option>
      ${lab1FeatureKeys
        .map((key) => `<option value="${key}" ${record.feature === key ? "selected" : ""}>${featureDefs[key].label}</option>`)
        .join("")}
    </select>`;
}

function renderDatasetRecordEffectSelect(record, index) {
  return `
    <select class="record-select" data-dataset-record-index="${index}" data-dataset-record-field="effect">
      <option value="">选择区分度</option>
      ${effectChoices.map((choice) => `<option value="${choice.key}" ${record.effect === choice.key ? "selected" : ""}>${choice.label}</option>`).join("")}
    </select>`;
}

function renderDatasetConclusionOptions() {
  const container = $("#dataset-conclusion-options");
  const summary = $("#dataset-conclusion");
  if (!container || !summary) return;
  const options = [
    "同一特征在不同数据组中的区分度可能不同。",
    "关键特征不是固定不变的，会受到数据集影响。",
    "判断关键特征时，需要同时考虑任务目标、数据集和分类效果。",
  ];
  container.innerHTML = options
    .map((option) => `<button class="option-button ${option === selectedDatasetConclusion ? "active" : ""}" data-dataset-conclusion="${option}" type="button">${option}</button>`)
    .join("");
  if (!datasetRecords.length) {
    summary.textContent = "生成至少一组记录后，再完成实验结论。";
  } else if (selectedDatasetConclusion) {
    summary.textContent = `我的结论：${selectedDatasetConclusion}`;
  } else {
    summary.textContent = "请结合不同数据组的记录，选择一条实验结论。";
  }
}

function initDepthLab() {
  renderDepthLab();
  $("#depth-group-buttons")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-depth-group]");
    if (!button) return;
    const groupId = button.dataset.depthGroup;
    if (groupId === activeDepthGroupId) {
      depthPoolExpanded = !depthPoolExpanded;
      renderDepthLab();
    } else {
      setDepthChallengeGroup(groupId);
    }
  });
  $("#depth-validate")?.addEventListener("click", () => {
    validateDepthTree();
  });
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-depth-dialog-action]");
    if (!button) return;
    const action = button.dataset.depthDialogAction;
    if (action === "close") {
      closeDepthValidationDialog();
      return;
    }
    if (action === "next") {
      const currentIndex = depthChallengeGroups.findIndex((group) => group.id === activeDepthGroupId);
      const nextGroup = depthChallengeGroups[currentIndex + 1];
      closeDepthValidationDialog();
      if (nextGroup) setTimeout(() => setDepthChallengeGroup(nextGroup.id), 180);
      return;
    }
    if (action === "process") {
      closeDepthValidationDialog();
      setTimeout(() => $("#depth-order-activity")?.scrollIntoView({ behavior: "smooth", block: "center" }), 220);
    }
  });
  $("#depth-tree-stage").addEventListener("click", (event) => {
    const featureButton = event.target.closest("[data-depth-feature]");
    if (featureButton) {
      event.preventDefault();
      event.stopPropagation();
      chooseDepthFeature(featureButton.dataset.depthFeature);
      return;
    }

    const button = event.target.closest("[data-depth-node]");
    if (!button) return;
    event.preventDefault();
    event.stopPropagation();
    depthActiveNodePath = button.dataset.depthNode;
    renderDepthLab();
  });
  $("#depth-feature-popover").addEventListener("click", (event) => event.stopPropagation());
  $("#depth-feature-dock").addEventListener("click", (event) => {
    const button = event.target.closest("[data-depth-feature]");
    if (!button || !depthActiveNodePath) return;
    chooseDepthFeature(button.dataset.depthFeature);
  });
  $("#depth-order-activity").addEventListener("dragstart", (event) => {
    const card = event.target.closest("[data-drag-step]");
    if (!card) return;
    draggedDepthStepId = card.dataset.dragStep;
    event.dataTransfer?.setData("text/plain", draggedDepthStepId);
    event.dataTransfer?.setDragImage?.(card, 16, 16);
  });
  $("#depth-order-activity").addEventListener("dragover", (event) => {
    const slot = event.target.closest("[data-drop-index]");
    if (!slot) return;
    event.preventDefault();
    slot.classList.add("drag-over");
  });
  $("#depth-order-activity").addEventListener("dragleave", (event) => {
    const slot = event.target.closest("[data-drop-index]");
    if (!slot) return;
    slot.classList.remove("drag-over");
  });
  $("#depth-order-activity").addEventListener("drop", (event) => {
    const slot = event.target.closest("[data-drop-index]");
    if (!slot) return;
    event.preventDefault();
    $all(".drop-slot.drag-over").forEach((item) => item.classList.remove("drag-over"));
    const stepId = event.dataTransfer?.getData("text/plain") || draggedDepthStepId;
    if (!stepId) return;
    const index = Number(slot.dataset.dropIndex);
    placeDepthStepAt(stepId, index);
    draggedDepthStepId = "";
    renderDepthOrderActivity();
  });
  $("#depth-order-activity").addEventListener("dragend", () => {
    $all(".drop-slot.drag-over").forEach((item) => item.classList.remove("drag-over"));
  });
  $("#depth-order-activity").addEventListener("change", (event) => {
    const select = event.target.closest("[data-order-index]");
    if (!select) return;
    selectDepthStepAt(select.value, Number(select.dataset.orderIndex));
    renderDepthOrderActivity();
  });
  $("#depth-order-activity").addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-step]");
    if (removeButton) {
      depthStepOrder = Array.from({ length: depthBuildSteps.length }, (_, index) => (depthStepOrder[index] === removeButton.dataset.removeStep ? "" : depthStepOrder[index] || ""));
      renderDepthOrderActivity();
      return;
    }
    const placeButton = event.target.closest("[data-place-step]");
    if (!placeButton) return;
    placeDepthStepAt(placeButton.dataset.placeStep, Number(placeButton.dataset.placeIndex));
    renderDepthOrderActivity();
  });
  $("#manual-exp3")?.addEventListener("click", (event) => {
    const resetButton = event.target.closest("[data-reset-order]");
    if (!resetButton) return;
    depthStepOrder = [];
    renderDepthOrderActivity();
  });
}

function placeDepthStepAt(stepId, index) {
  if (!stepId || Number.isNaN(index) || index < 0 || index >= depthBuildSteps.length) return;
  const next = Array.from({ length: depthBuildSteps.length }, (_, slotIndex) => depthStepOrder[slotIndex] || "");
  const oldIndex = next.indexOf(stepId);
  const displaced = next[index] || "";
  next[index] = stepId;
  if (oldIndex >= 0 && oldIndex !== index) next[oldIndex] = displaced;
  depthStepOrder = next;
}

function selectDepthStepAt(stepId, index) {
  if (Number.isNaN(index) || index < 0 || index >= depthBuildSteps.length) return;
  const next = Array.from({ length: depthBuildSteps.length }, (_, slotIndex) => depthStepOrder[slotIndex] || "");
  next.forEach((id, slotIndex) => {
    if (id === stepId && slotIndex !== index) next[slotIndex] = "";
  });
  next[index] = stepId || "";
  depthStepOrder = next;
}

function resetDepthTreeState() {
  depthNodeFeatures = {};
  depthActiveNodePath = "";
  depthBuildRecords = [];
  depthStepOrder = [];
  draggedDepthStepId = "";
  depthLatestSuccessSignature = "";
  depthVerifyMessage = "";
}

function resetDepthAchievements() {
  depthSuccessSignatures = [];
  depthLatestSuccessSignature = "";
}

function analyzeFeatureForItems(items, key) {
  const rule = featureRules[key];
  const groups = [
    { branch: "是", value: rule.yes, items: items.filter((item) => rule.test(item)) },
    { branch: "否", value: rule.no, items: items.filter((item) => !rule.test(item)) },
  ].map((group) => {
    const yes = group.items.filter((item) => item.healthy).length;
    const no = group.items.length - yes;
    return { ...group, yes, no };
  });
  return { key, groups };
}

function renderDepthLab() {
  const group = getDepthChallengeGroup();
  const items = getDepthItems();
  $("#depth-selected-count").textContent = `${group.title} · ${items.length} 条`;
  $("#depth-table-label").textContent = `${group.title}：${items.length} 条食品记录，5 列候选特征`;
  renderDepthGroupButtons();
  const samplePool = $("#depth-sample-pool");
  samplePool.classList.toggle("is-collapsed", !depthPoolExpanded);
  samplePool.innerHTML = depthPoolExpanded ? items.map((item) => renderDepthGroupFoodCard(item)).join("") : "";
  renderDataTableFor("#depth-table", items, lab1FeatureKeys);
  $("#depth-food-bank").innerHTML = items.map((item) => foodToken(item)).join("");
  renderDepthFeatureDock();

  if (items.length !== depthSelectionLimit) {
    $("#depth-root-feature").textContent = "先选数据";
    $("#depth-root-node").classList.add("awaiting-feature");
    renderDepthRecursiveEmpty("");
    renderDepthEmptyLanes(`请先从左侧选择 ${depthSelectionLimit} 条食品数据。`);
    depthBuildRecords = [];
    renderDepthValidationState(null);
    renderDepthOrderActivity();
    return;
  }

  const tree = buildInteractiveDepthTree(items);
  depthBuildRecords = collectDepthBuildRecords(tree);
  $("#depth-root-node").classList.toggle("picker-open", depthActiveNodePath === "root");
  if (tree.type === "choice") {
    $("#depth-root-feature").textContent = "选择特征";
    $("#depth-root-node").classList.add("awaiting-feature");
    renderDepthEmptyLanes("选择根节点特征后，食品才会流入这里。");
  } else {
    $("#depth-root-feature").textContent = tree.question;
    $("#depth-root-node").classList.remove("awaiting-feature");
    renderDepthRootLanes(tree);
  }
  renderDepthRecursiveEmpty("");
  renderDepthValidationState(tree);
  renderDepthOrderActivity();
}

function renderDepthGroupButtons() {
  const box = $("#depth-group-buttons");
  if (!box) return;
  box.innerHTML = depthChallengeGroups
    .map(
      (group) => `
        <button class="depth-group-button ${group.id === activeDepthGroupId ? "active" : ""} ${depthSuccessSignatures.includes(group.id) ? "done" : ""}" data-depth-group="${group.id}" type="button">
          <strong>${group.title}</strong>
          <span class="depth-group-tree" aria-hidden="true"></span>
        </button>`,
    )
    .join("");
}

function chooseDepthFeature(featureKey) {
  if (!depthActiveNodePath || !featureKey) return;
  depthNodeFeatures = clearDepthDescendants(depthNodeFeatures, depthActiveNodePath);
  depthNodeFeatures[depthActiveNodePath] = featureKey;
  depthActiveNodePath = "";
  depthVerifyMessage = "";
  renderDepthLab();
}

function renderDepthRecursiveEmpty(message) {
  const canvas = $("#depth-recursive-canvas");
  if (!canvas) return;
  if (!message) {
    canvas.innerHTML = "";
    return;
  }
  if (message.trim().startsWith("<")) {
    canvas.innerHTML = message;
    return;
  }
  canvas.innerHTML = `
    <div class="recursive-empty">
      <strong>数据池</strong>
      <p>${message}</p>
    </div>`;
}

function renderDepthRecursiveCanvas(tree) {
  const canvas = $("#depth-recursive-canvas");
  if (!canvas) return;
  canvas.innerHTML = `
    ${renderDepthCompletionNotice(tree)}
    <div class="recursive-tree">
      ${renderRecursiveDepthNode(tree, "数据池")}
    </div>`;
}

function renderDepthCompletionNotice(tree) {
  const metrics = collectInteractiveDepthMetrics(tree);
  if (!metrics.internal) {
    return `<div class="depth-status-note">从根节点开始，点击“选择特征”构建第一层决策树。</div>`;
  }
  if (metrics.openChoices) {
    return `<div class="depth-status-note">还有 ${metrics.openChoices} 个混杂分支可以继续选择特征，最多构建到第 3 层。</div>`;
  }
  if (!metrics.mixed) {
    return `<div class="depth-status-note success">构建完成：所有分支已生成叶子节点。</div>`;
  }
  return `<div class="depth-status-note warning">已到达第 3 层：仍有混杂叶节点，说明还需要更多数据或特征。</div>`;
}

function renderRecursiveDepthNode(node, poolTitle) {
  const nodeLabel = node.depth === 0 ? "根节点" : "分支节点";
  const levelText = `第 ${Math.min(node.depth + 1, 3)} 层`;
  const poolKind = node.type === "leaf" ? "最终数据池" : poolTitle;
  if (node.type === "leaf") {
    return `
      <article class="recursive-node-block leaf-block ${node.mixed ? "mixed" : node.healthy ? "healthy" : "unhealthy"}">
        ${renderRecursiveDataPool(node.items, poolKind, node)}
        <div class="recursive-leaf">
          <span>叶子节点</span>
          <strong>${node.mixed ? "仍有混杂" : node.label}</strong>
          <small>${leafSignalText(node)}</small>
          ${renderLeafSignal(node)}
        </div>
      </article>`;
  }
  if (node.type === "choice") {
    return `
      <article class="recursive-node-block choice-block">
        ${renderRecursiveDataPool(node.items, poolKind, node)}
        <button class="recursive-decision-node ${node.path === depthActiveNodePath ? "active-path" : ""}" data-depth-node="${node.path}" type="button">
          <span>${nodeLabel} · ${levelText}</span>
          <strong>选择特征</strong>
        </button>
        ${node.path === depthActiveNodePath ? renderInlineDepthFeaturePicker(node.path) : ""}
      </article>`;
  }
  return `
    <article class="recursive-node-block built-block">
      ${renderRecursiveDataPool(node.items, poolKind, node)}
      <button class="recursive-decision-node ${node.path === depthActiveNodePath ? "active-path" : ""}" data-depth-node="${node.path}" type="button">
        <span>${nodeLabel} · ${levelText}</span>
        <strong>${featureDefs[node.key].label}</strong>
        <small>${node.question}</small>
      </button>
      ${node.path === depthActiveNodePath ? renderInlineDepthFeaturePicker(node.path) : ""}
      <div class="recursive-branches">
        ${node.children.map((child) => renderRecursiveBranch(child)).join("")}
      </div>
    </article>`;
}

function leafSignalText(node) {
  if (!node.items.length) return "暂无数据";
  if (node.mixed) return "三层上限，仍有混杂";
  return "已生成叶子节点";
}

function renderLeafSignal(node) {
  if (!node.items.length) return "";
  if (node.mixed) return `<em class="leaf-signal warning">待优化</em>`;
  return `<em class="leaf-signal success">完成</em>`;
}

function renderInlineDepthFeaturePicker(path) {
  const activeFeature = depthNodeFeatures[path];
  const options = availableDepthFeatures(path);
  return `
    <div class="inline-depth-feature-picker">
      <p>为当前节点选择特征</p>
      <div class="feature-dock compact-feature-dock">
        ${
          options.length
            ? options
                .map(
                  (key) =>
                    `<button class="feature-button ${key === activeFeature ? "active" : ""}" data-depth-feature="${key}" type="button">${featureDefs[key].label}</button>`,
                )
                .join("")
            : `<span class="branch-summary">这条路径已经没有新的候选特征。</span>`
        }
      </div>
    </div>`;
}

function renderRecursiveBranch(child) {
  return `
    <section class="recursive-branch">
      <div class="recursive-link-label">${child.branch}：${child.label}</div>
      ${renderRecursiveDepthNode(child.node, "分支数据池")}
    </section>`;
}

function renderRecursiveDataPool(items, title, node) {
  const summary = majorityLabel(items);
  return `
    <div class="recursive-data-pool ${summary.mixed ? "mixed" : summary.healthy ? "healthy" : "unhealthy"}">
      <div class="recursive-pool-head">
        <strong>${title}</strong>
        <span>总${items.length} · 健康${summary.yes} · 不健康${summary.no}</span>
      </div>
      <div class="recursive-food-list">
        ${items.length ? items.map((item) => recursiveFoodToken(item)).join("") : `<span class="recursive-empty-token">无数据</span>`}
      </div>
    </div>`;
}

function recursiveFoodToken(item) {
  return `
    <span class="recursive-food-token ${item.healthy ? "healthy" : "unhealthy"}" title="${escapeHtml(item.name)}">
      <span>${foodIcons[item.name] || "🍽"}</span>
      <strong>${escapeHtml(item.name)}</strong>
    </span>`;
}

function renderDepthEmptyLanes(message) {
  [$("#depth-lane-yes"), $("#depth-lane-no")].forEach((lane, index) => {
    lane.classList.add("lane-empty");
    lane.innerHTML = `
      <div class="lane-title">
        <strong>${index === 0 ? "左侧接收池" : "右侧接收池"}</strong>
        <span>等待分流</span>
      </div>
      <div class="empty-lane-note">${message}</div>`;
  });
}

function renderDepthRootLanes(tree) {
  const lanes = [$("#depth-lane-yes"), $("#depth-lane-no")];
  tree.children.forEach((child, index) => {
    const lane = lanes[index];
    lane.classList.remove("lane-empty");
    lane.innerHTML = renderDepthLaneContent(child, index === 0 ? "左侧接收池" : "右侧接收池");
  });
}

function renderDepthLaneContent(child, laneTitle) {
  return `
    <div class="lane-summary">
      <strong>${laneTitle}：${child.label}</strong>
      ${renderDepthStats(child.node)}
    </div>
    ${renderDepthBranchNode(child.node)}`;
}

function renderDepthStats(node) {
  return `
    <div class="lane-stats">
      <span>总${node.items.length}</span>
      <span class="stat-healthy">健康${node.yes}</span>
      <span class="stat-unhealthy">不健康${node.no}</span>
    </div>`;
}

function renderDepthBranchNode(node) {
  if (!node.items.length) {
    return `<div class="empty-lane-note">这条分支暂时没有数据。</div>`;
  }
  if (node.type === "choice") {
    return `
      <div class="depth-branch-pool">
        <div class="lane-cards">${node.items.map((item) => foodToken(item)).join("")}</div>
        <button class="depth-next-node ${node.path === depthActiveNodePath ? "active-path" : ""}" data-depth-node="${node.path}" type="button">
          <span>${node.depth >= 2 ? "第三层节点" : "分支节点"}</span>
          <strong>选择特征</strong>
        </button>
        ${node.path === depthActiveNodePath ? renderInlineDepthFeaturePicker(node.path) : ""}
      </div>`;
  }
  if (node.type === "leaf") {
    return `
      <div class="depth-branch-pool depth-leaf ${node.mixed ? "mixed" : node.yes >= node.no ? "healthy" : "unhealthy"}">
        <div class="lane-cards">${node.items.map((item) => foodToken(item)).join("")}</div>
        <p>${node.mixed ? "仍有混杂，但已到达三层上限。" : "已形成叶节点。"}</p>
      </div>`;
  }
  return `
    <div class="depth-nested-split">
      <svg class="mini-pipe-layer" viewBox="0 0 420 210" preserveAspectRatio="none" aria-hidden="true">
        <path class="pipe-wall" d="M210 58 C150 88 104 116 58 150" />
        <path class="pipe-wall" d="M210 58 C270 88 316 116 362 150" />
        <path class="pipe-core" d="M210 58 C150 88 104 116 58 150" />
        <path class="pipe-core" d="M210 58 C270 88 316 116 362 150" />
        <path class="pipe-glow" d="M210 58 C150 88 104 116 58 150" />
        <path class="pipe-glow" d="M210 58 C270 88 316 116 362 150" />
      </svg>
      <button class="depth-split-node ${node.path === depthActiveNodePath ? "active-path" : ""}" data-depth-node="${node.path}" type="button">
        <span>分支节点</span>
        <strong>${node.question}</strong>
      </button>
      ${node.path === depthActiveNodePath ? renderInlineDepthFeaturePicker(node.path) : ""}
      <div class="depth-mini-branches">
        ${node.children
          .map(
            (child) => `
          <div class="depth-mini-branch">
            <div class="depth-mini-title">
              <strong>${child.branch}：${child.label}</strong>
              ${renderDepthStats(child.node)}
            </div>
            ${renderDepthBranchNode(child.node)}
          </div>`,
          )
          .join("")}
      </div>
    </div>`;
}

function buildInteractiveDepthTree(items, path = "root", depth = 0, title = "根节点") {
  const summary = majorityLabel(items);
  const featureKey = depthNodeFeatures[path];
  if (!featureKey) {
    return { type: "choice", items, path, depth, title, ...summary };
  }
  const scored = scoreFeatureForItems(items, featureKey);
  return {
    type: "node",
    key: featureKey,
    question: featureRules[featureKey].question,
    items,
    path,
    depth,
    title,
    ...summary,
    groups: scored.groups,
    children: scored.groups.map((group, index) => {
      const childPath = `${path}-${index === 0 ? "yes" : "no"}`;
      const mixed = group.yes > 0 && group.no > 0;
      if (!group.items.length || !mixed || depth >= 2) {
        return {
          branch: group.branch,
          label: group.label,
          node: { type: "leaf", items: group.items, path: childPath, depth: depth + 1, title: group.label, ...majorityLabel(group.items) },
        };
      }
      return { branch: group.branch, label: group.label, node: buildInteractiveDepthTree(group.items, childPath, depth + 1, group.label) };
    }),
  };
}

function renderInteractiveDepthNode(node) {
  if (node.type === "choice") {
    const active = node.path === depthActiveNodePath ? " active-path" : "";
    return `
      <div class="tree-branch">
        <button class="tree-node-card depth-choice-node${active}" data-depth-node="${node.path}" type="button">
          <strong>${node.depth === 0 ? "根节点" : "继续选择特征"}</strong>
          <span>${node.depth === 0 ? "选择特征" : node.title}</span>
          <small>健康 ${node.yes} / 非健康 ${node.no}，点击选择特征</small>
        </button>
      </div>`;
  }
  if (node.type === "leaf") {
    const leafClass = leafClassFor(node);
    return `
      <div class="tree-branch">
        <div class="tree-node-card ${leafClass}">
          <strong>${node.label}</strong>
        <span>健康 ${node.yes} / 非健康 ${node.no}</span>
        <small>${node.mixed ? "仍有混杂，到达层数上限" : "生成叶节点"}</small>
        </div>
      </div>`;
  }
  const active = node.path === depthActiveNodePath ? " active-path" : "";
  return `
    <div class="tree-branch">
      <button class="tree-node-card depth-built-node${active}" data-depth-node="${node.path}" type="button">
        <strong>${featureDefs[node.key].label}</strong>
        <span>${node.question}</span>
        <small>健康 ${node.yes} / 非健康 ${node.no}</small>
      </button>
      <div class="tree-children">
        ${node.children
          .map(
            (child) => `
            <div class="tree-branch">
              <span class="tree-link-label">${child.branch}：${child.label}</span>
              ${renderInteractiveDepthNode(child.node)}
            </div>`,
          )
          .join("")}
      </div>
    </div>`;
}

function renderDepthFeatureDock() {
  const panel = $("#depth-feature-popover");
  const label = $("#depth-active-node-label");
  const dock = $("#depth-feature-dock");
  if (!panel || !label || !dock) return;
  panel.hidden = false;
  panel.classList.toggle("is-open", depthActiveNodePath === "root");
  if (!depthActiveNodePath) {
    label.textContent = depthSelectedIds.length === depthSelectionLimit ? "点击树上的根节点或分支节点后选择特征。" : "先生成或选择 10 条食品数据。";
    dock.innerHTML = `<p class="branch-summary">等待选择节点。</p>`;
    return;
  }
  const activeFeature = depthNodeFeatures[depthActiveNodePath];
  const options = availableDepthFeatures(depthActiveNodePath);
  label.textContent = depthActiveNodePath === "root" ? "当前节点：根节点" : "当前节点：分支节点";
  dock.innerHTML = options.length
    ? options
        .map((key) => `<button class="feature-button ${key === activeFeature ? "active" : ""}" data-depth-feature="${key}" type="button">${featureDefs[key].label}</button>`)
        .join("")
    : `<p class="branch-summary">这条路径已经没有新的候选特征。</p>`;
}

function availableDepthFeatures(path) {
  if (!path) return lab1FeatureKeys;
  const segments = path.split("-");
  const ancestorPaths = [];
  for (let index = 0; index < segments.length; index += 1) {
    ancestorPaths.push(segments.slice(0, index + 1).join("-"));
  }
  const currentFeature = depthNodeFeatures[path];
  const usedOnAncestors = new Set(
    ancestorPaths
      .filter((ancestorPath) => ancestorPath !== path)
      .map((ancestorPath) => depthNodeFeatures[ancestorPath])
      .filter(Boolean),
  );
  return lab1FeatureKeys.filter((key) => key === currentFeature || !usedOnAncestors.has(key));
}

function clearDepthDescendants(features, path) {
  return Object.fromEntries(Object.entries(features).filter(([key]) => key === path || !key.startsWith(`${path}-`)));
}

function collectInteractiveDepthMetrics(node) {
  const metrics = { internal: 0, leaves: 0, mixed: 0, openChoices: 0, maxDepth: 0 };
  walkInteractiveDepthTree(node, (item) => {
    metrics.maxDepth = Math.max(metrics.maxDepth, item.depth + 1);
    if (item.type === "node") metrics.internal += 1;
    if (item.type === "choice") metrics.openChoices += 1;
    if (item.type === "leaf") {
      metrics.leaves += 1;
      if (item.mixed) metrics.mixed += 1;
    }
  });
  return metrics;
}

function walkInteractiveDepthTree(node, visitor) {
  visitor(node);
  if (node.type === "node") node.children.forEach((child) => walkInteractiveDepthTree(child.node, visitor));
}

function renderInteractiveDepthMetrics(metrics) {
  return `
    <div class="compact-metrics">
      <span>当前层数 ${metrics.maxDepth || 1}</span>
      <span>判断节点 ${metrics.internal}</span>
      <span>待继续 ${metrics.openChoices}</span>
      <span>叶节点 ${metrics.leaves}</span>
    </div>`;
}

function collectDepthBuildRecords(tree) {
  const records = [];
  walkInteractiveDepthTree(tree, (node) => {
    if (node.type !== "node") return;
    const resultText = node.children
      .map((child) => `${child.branch}侧：健康${child.node.yes}/非健康${child.node.no}`)
      .join("；");
    const nextText = node.children
      .map((child) => {
        if (child.node.type === "choice") return `${child.branch}侧继续分裂`;
        if (child.node.type === "leaf" && child.node.mixed) return `${child.branch}侧到达层数上限`;
        if (child.node.type === "leaf") return `${child.branch}侧生成叶节点`;
        return `${child.branch}侧已继续分裂`;
      })
      .join("；");
    records.push({
      step: records.length + 1,
      position: node.depth === 0 ? "根节点" : `${node.title}分支`,
      feature: featureDefs[node.key].label,
      result: resultText,
      next: nextText,
    });
  });
  return records;
}

function renderDepthValidationState(tree) {
  const message = $("#depth-verify-message");
  const button = $("#depth-validate");
  if (!message || !button) return;
  const done = depthSuccessSignatures.includes(activeDepthGroupId);
  const metrics = tree ? collectInteractiveDepthMetrics(tree) : null;
  button.disabled = !tree || !metrics?.internal || done;
  $("#depth-tree-stage")?.classList.toggle("verified-success", done);

  if (depthVerifyMessage) {
    message.textContent = depthVerifyMessage;
  } else if (done) {
    message.textContent = `${getDepthChallengeGroup().title}已验证成功。`;
  } else if (!tree || !metrics?.internal) {
    message.textContent = "先点击根节点，选择特征完成第一次分流。";
  } else if (metrics.openChoices) {
    message.textContent = "还有混杂分支没有继续判断。";
  } else if (metrics.mixed) {
    message.textContent = "仍有混杂叶节点，可以调整特征顺序。";
  } else {
    message.textContent = "所有最终数据池已分清，可以验证。";
  }
  renderDepthGroupButtons();
}

function validateDepthTree() {
  const tree = buildInteractiveDepthTree(getDepthItems());
  const metrics = collectInteractiveDepthMetrics(tree);
  const success = metrics.internal > 0 && metrics.openChoices === 0 && metrics.mixed === 0;
  let dialogType = "retry";
  let dialogMessage = "";
  if (success) {
    if (!depthSuccessSignatures.includes(activeDepthGroupId)) depthSuccessSignatures.push(activeDepthGroupId);
    depthLatestSuccessSignature = activeDepthGroupId;
    depthVerifyMessage =
      depthSuccessSignatures.length >= depthChallengeGroups.length
        ? "三组都验证成功！可以到下方梳理构建决策树的步骤。"
        : `${getDepthChallengeGroup().title}验证成功，请继续完成下一组。`;
    dialogType = "success";
    dialogMessage = depthVerifyMessage;
  } else if (!metrics.internal) {
    depthVerifyMessage = "还没有选择根节点特征，暂时不能验证。";
    dialogMessage = "先从根节点开始选择特征，再进行验证。";
  } else if (metrics.openChoices) {
    depthVerifyMessage = "还有分支没有继续判断，请先完成这些分支。";
    dialogMessage = "还有混杂分支没有继续判断，请继续挑战。";
  } else {
    depthVerifyMessage = "仍有混杂叶节点，试着调整节点特征。";
    dialogMessage = "仍有数据混在一起，请重新思考节点顺序。";
  }
  renderDepthLab();
  showDepthValidationDialog(dialogType, dialogMessage);
}

function showDepthValidationDialog(type, fallbackMessage = "") {
  const old = $(".depth-feedback-overlay");
  old?.remove();
  const group = getDepthChallengeGroup();
  const groupIndex = depthChallengeGroups.findIndex((item) => item.id === activeDepthGroupId);
  const success = type === "success";
  const lastGroup = groupIndex >= depthChallengeGroups.length - 1;
  const treeLabels = [
    { title: "第一组验证成功", text: "小树苗已经发芽。继续挑战下一组数据，让决策树继续生长。", label: "小树苗" },
    { title: "第二组验证成功", text: "这棵树已经长高了。再完成最后一组，就能梳理构建决策树的过程。", label: "成长的小树" },
    { title: "祝贺你挑战成功！", text: "三组数据都已经完成分类，请前往下方梳理决策树的构建过程。", label: "参天大树" },
  ];
  const successInfo = treeLabels[Math.max(0, Math.min(groupIndex, treeLabels.length - 1))];
  const title = success ? successInfo.title : "请继续思考";
  const text = success ? successInfo.text : fallbackMessage || "请调整特征选择，再重新验证。";
  const action = success && lastGroup ? "process" : success ? "next" : "close";
  const buttonText = success && lastGroup ? "前往梳理过程" : success ? "继续下一组" : "继续挑战";
  const overlay = document.createElement("div");
  overlay.className = `depth-feedback-overlay ${success ? "is-success" : "is-retry"}`;
  overlay.innerHTML = `
    <div class="depth-feedback-card" role="dialog" aria-modal="true" aria-label="${title}">
      <button class="depth-feedback-close" data-depth-dialog-action="close" type="button" aria-label="关闭">×</button>
      <div class="depth-tree-visual ${success ? `tree-stage-${groupIndex + 1}` : "tree-stage-retry"}" aria-hidden="true">
        <span class="tree-ground"></span>
        <span class="tree-trunk"></span>
        <span class="tree-crown crown-a"></span>
        <span class="tree-crown crown-b"></span>
        <span class="tree-crown crown-c"></span>
      </div>
      <p class="depth-feedback-kicker">${success ? `${group.title} · ${successInfo.label}` : "验证未通过"}</p>
      <h3>${title}</h3>
      <p>${text}</p>
      <button class="primary-action" data-depth-dialog-action="${action}" type="button">${buttonText}</button>
    </div>`;
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add("show"));
}

function closeDepthValidationDialog() {
  const overlay = $(".depth-feedback-overlay");
  if (!overlay) return;
  overlay.classList.remove("show");
  setTimeout(() => overlay.remove(), 180);
}

function renderDepthBuildRecords() {
  const wrap = $("#depth-record-table-wrap");
  const count = $("#depth-record-count");
  if (!wrap || !count) return;
  count.textContent = `${depthBuildRecords.length} 步`;
  if (!depthBuildRecords.length) {
    wrap.innerHTML = `<p class="branch-summary">点击根节点，选择第一个特征后，这里会记录你的构建过程。</p>`;
    return;
  }
  wrap.innerHTML = `
    <table class="records-table depth-record-table">
      <thead><tr><th>步骤</th><th>节点位置</th><th>选择特征</th><th>分支处理</th></tr></thead>
      <tbody>
        ${depthBuildRecords
          .map(
            (record) => `
          <tr>
            <td>${record.step}</td>
            <td>${record.position}</td>
            <td>${record.feature}</td>
            <td><strong>${record.next}</strong><small>${record.result}</small></td>
          </tr>`,
          )
          .join("")}
      </tbody>
    </table>`;
}

function updateDepthAchievements(tree) {
  if (!tree) {
    renderDepthAchievementPanel(null);
    return;
  }
  const metrics = collectInteractiveDepthMetrics(tree);
  const success = metrics.internal >= 2 && metrics.openChoices === 0 && metrics.mixed === 0;
  if (success) {
    const signature = depthTreeSignature();
    depthLatestSuccessSignature = signature;
    if (!depthSuccessSignatures.includes(signature) && depthSuccessSignatures.length < 3) {
      depthSuccessSignatures.push(signature);
    }
  } else {
    depthLatestSuccessSignature = "";
  }
  renderDepthAchievementPanel({ success, metrics });
}

function depthTreeSignature() {
  const ids = [...depthSelectedIds].sort((a, b) => a - b);
  const features = Object.entries(depthNodeFeatures).sort(([a], [b]) => a.localeCompare(b));
  return JSON.stringify({ ids, features });
}

function renderDepthAchievementPanel(result) {
  const panel = $("#depth-achievement-panel");
  const message = $("#depth-achievement-message");
  const badgeRow = $("#depth-badge-row");
  if (!panel || !message || !badgeRow) return;
  panel.classList.toggle("celebrate", Boolean(result?.success));
  if (!result) {
    message.textContent = "成功生成清晰叶子节点后，可以获得构树徽章。";
  } else if (result.success) {
    message.textContent =
      depthSuccessSignatures.length >= 3
        ? "三次挑战完成！你的决策树已经长成一棵大树。"
        : "OK，祝贺你构建成功！获得一枚构树徽章。";
  } else if (!result.metrics.internal) {
    message.textContent = "从根节点开始选择特征，完成第一次分流。";
  } else if (result.metrics.openChoices) {
    message.textContent = "还有混杂分支可以继续选择特征，完成后再争取徽章。";
  } else if (result.metrics.internal < 2 && result.metrics.mixed === 0) {
    message.textContent = "这一层已经分得很清楚。想挑战多层构树，可以换一组数据再试。";
  } else {
    message.textContent = "已经到达三层上限，但仍有混杂叶子节点，可以尝试更换特征顺序。";
  }
  badgeRow.innerHTML = [0, 1, 2]
    .map((index) => {
      const active = index < depthSuccessSignatures.length;
      const fresh = active && depthSuccessSignatures[index] === depthLatestSuccessSignature;
      const treeIcons = ["🌱", "🌿", "🌳"];
      return `
        <div class="depth-badge ${active ? "active" : ""} ${fresh ? "fresh" : ""}">
          <span>${active ? treeIcons[index] : index + 1}</span>
          <strong>${active ? ["小树苗", "长枝叶", "大树成形"][index] : "待挑战"}</strong>
        </div>`;
    })
    .join("");
}

const depthBuildSteps = [
  { id: "score", title: "评估最优", text: "比较每个特征的数据区分度，找到关键特征。" },
  { id: "choose", title: "选优分裂", text: "选择关键特征，将数据分裂成子节点。" },
  { id: "split", title: "递归生长", text: "对每个子节点重复上述过程，继续向下生长。" },
  { id: "grow", title: "生成结论", text: "满足停止条件时停止分裂，确定最终预测结果。" },
];
const depthBuildStepBankOrder = ["split", "score", "grow", "choose"];

function renderDepthOrderActivity() {
  const box = $("#depth-order-activity");
  if (!box) return;
  const summary = $("#depth-summary");
  const resetButton = $(".reset-order");
  const unlocked = depthSuccessSignatures.length >= depthChallengeGroups.length;
  if (resetButton) resetButton.hidden = !unlocked;
  if (!unlocked) {
    box.innerHTML = `
      <div class="process-lock">
        <strong>完成三组构建后开启排序</strong>
        <span>${depthSuccessSignatures.length}/${depthChallengeGroups.length}</span>
      </div>`;
    if (summary) {
      summary.hidden = true;
      summary.textContent = "";
    }
    return;
  }
  const slots = Array.from({ length: depthBuildSteps.length }, (_, index) => depthStepOrder[index] || "");
  const answer = depthBuildSteps.map((step) => step.id).join(",");
  const current = slots.join(",");
  const filledCount = slots.filter(Boolean).length;
  box.innerHTML = `
    <div class="order-select-flow" aria-label="决策树构建步骤排序">
      ${depthBuildSteps
        .map((_, index) => {
          const id = slots[index];
          const step = depthBuildSteps.find((item) => item.id === id);
          return `
            <div class="order-select-card ${step ? "filled" : ""}">
              <span class="order-card-number">${index + 1}</span>
              <label>
                <strong>第 ${index + 1} 步</strong>
                <select data-order-index="${index}">
                  <option value="">选择步骤</option>
                  ${depthBuildStepBankOrder
                    .map((stepId) => {
                      const item = depthBuildSteps.find((candidate) => candidate.id === stepId);
                      const usedElsewhere = slots.some((slotId, slotIndex) => slotIndex !== index && slotId === stepId);
                      return `<option value="${stepId}" ${id === stepId ? "selected" : ""} ${usedElsewhere ? "disabled" : ""}>${item.title}</option>`;
                    })
                    .join("")}
                </select>
              </label>
              ${step ? `<p>${step.text}</p>` : ""}
            </div>`;
        })
        .join("")}
    </div>`;
  if (summary) {
    summary.hidden = filledCount < depthBuildSteps.length;
    summary.textContent =
      filledCount === depthBuildSteps.length
        ? current === answer
          ? "排序正确：构建决策树就是评估最优、选优分裂、递归生长、生成结论。"
          : "顺序还可以再调整：先找到最优特征，再分裂数据，最后递归生成结论。"
        : "";
  }
}

function renderPoolFoodCardFor(item, selectedIds) {
  const selected = selectedIds.includes(item.id);
  return `
    <button class="pool-food-card ${selected ? "selected" : ""} ${item.healthy ? "" : "unhealthy"}" data-pool-food="${item.id}" type="button">
      <span class="pool-id">${item.id}</span>
      <span class="pool-icon">${foodIcons[item.name] || "🍽"}</span>
      <strong>${item.name}</strong>
    </button>`;
}

function renderDepthGroupFoodCard(item) {
  return `
    <div class="pool-food-card fixed ${item.healthy ? "" : "unhealthy"}">
      <span class="pool-icon">${foodIcons[item.name] || "🍽"}</span>
      <strong>${item.name}</strong>
    </div>`;
}

function initLevels() {
  initComputerLab();
}

function initComputerLab() {
  renderComputerControls();
  renderComputer();
  $("#computer-start").addEventListener("click", () => {
    computerDataSize = computerFixedDataSize;
    computerFeatureKeys = [...computerFixedFeatureKeys];
    computerFeatureCount = computerFeatureKeys.length;
    computerBuild = createComputerBuild(getComputerItems(), computerFeatureKeys);
    computerStepCount = 0;
    computerPrediction = null;
    renderComputer();
  });
  $("#computer-next").addEventListener("click", () => {
    if (!computerBuild) computerBuild = createComputerBuild(getComputerItems(), computerFeatureKeys);
    if (computerStepCount < computerBuild.steps.length) computerStepCount += 1;
    computerPrediction = null;
    renderComputer();
  });
  $("#computer-finish").addEventListener("click", () => {
    if (!computerBuild) computerBuild = createComputerBuild(getComputerItems(), computerFeatureKeys);
    computerStepCount = computerBuild.steps.length;
    computerPrediction = null;
    renderComputer();
  });
  $("#reset-computer").addEventListener("click", () => {
    computerDataSize = computerFixedDataSize;
    computerFeatureCount = computerFixedFeatureKeys.length;
    computerFeatureKeys = [...computerFixedFeatureKeys];
    predictionInput = createDefaultPredictionInput();
    resetComputerBuild();
  });
  $("#prediction-form").addEventListener("change", (event) => {
    const select = event.target.closest("[data-predict-feature]");
    if (!select) return;
    predictionInput[select.dataset.predictFeature] = select.value;
    computerPrediction = null;
    renderPredictionForm();
    renderComputerFoodCards();
    renderPredictionResult();
  });
  $("#predict-food").addEventListener("click", () => {
    if (!isComputerModelReady()) {
      computerPrediction = null;
      renderPredictionResult();
      return;
    }
    computerPrediction = predictWithTree(computerBuild.tree, createPredictionItem());
    renderComputer();
  });
}

function resetComputerBuild(render = true) {
  computerBuild = null;
  computerStepCount = 0;
  computerPrediction = null;
  if (render) renderComputer();
}

function isLiquidFoodName(name) {
  return /酸奶|豆浆|饮料|奶茶|牛奶|气泡水|可乐|茶|乳酸菌/.test(name);
}

function fiberLevelFromStandard(grams, liquid = false) {
  const sourceLine = liquid ? 1.5 : 3;
  const highLine = liquid ? 3 : 6;
  if (grams >= highLine) return "高";
  if (grams >= sourceLine) return "中";
  return "低";
}

function fiberValueForLevel(level, seed, liquid = false) {
  const sourceLine = liquid ? 1.5 : 3;
  const highLine = liquid ? 3 : 6;
  const noise = ((seed % 7) * 0.12).toFixed(2);
  if (level === "高") return Number((highLine + 0.2 + Number(noise)).toFixed(1));
  if (level === "中") return Number((sourceLine + 0.2 + Number(noise)).toFixed(1));
  return Number(Math.max(0.1, sourceLine - 1.2 + Number(noise)).toFixed(1));
}

function generateComputerFoods(count) {
  const values = ["低", "中", "高"];
  const additiveValues = ["少", "中", "多"];
  const packageValues = ["普通", "吸引", "网红"];
  return Array.from({ length: count }, (_, index) => {
    const base = foodPool[index % foodPool.length];
    const item = { ...base, id: index + 1, name: `${base.name}${index + 1}` };
    const seed = index + 1;
    const pick = (offset) => values[(seed * (offset + 3) + offset) % 3];
    const liquid = isLiquidFoodName(base.name);
    item.sugar = index % 5 === 0 ? "高" : base.sugar || pick(1);
    item.fat = index % 7 === 0 ? "高" : base.fat || pick(2);
    item.protein = index % 4 === 0 ? "高" : base.protein || pick(3);
    item.fiberValue = fiberValueForLevel(index % 6 === 0 ? "高" : base.fiber || pick(4), seed, liquid);
    item.fiber = fiberLevelFromStandard(item.fiberValue, liquid);
    item.fiberBasis = liquid ? `${item.fiberValue} g/100mL` : `${item.fiberValue} g/100g`;
    item.process = index % 3 === 0 || base.process === "高" ? "高" : pick(5);
    item.additive = index % 4 === 1 ? "多" : base.additive || additiveValues[(seed * 2) % 3];
    item.satiety = pick(7);
    item.like = pick(8);
    item.package = packageValues[(seed + (base.package === "网红" ? 2 : 0)) % 3];
    item.sodium = index % 6 === 1 || item.process === "高" ? "高" : pick(9);
    item.energy = item.sugar === "高" || item.fat === "高" ? "高" : pick(10);
    item.vitamin = item.fiber === "高" || index % 8 === 2 ? "高" : pick(11);
    item.natural = item.process === "高" ? "低" : pick(12);
    item.fried = item.fat === "高" && item.process === "高" ? "高" : pick(13);
    item.portion = pick(14);
    item.healthy = classroomHealthLabel(item);
    return item;
  });
}

function getComputerItems() {
  return generateComputerFoods(computerDataSize);
}

function renderComputerControls() {
  computerDataSize = computerFixedDataSize;
  computerFeatureKeys = [...computerFixedFeatureKeys];
  computerFeatureCount = computerFeatureKeys.length;
  $("#computer-size-value").textContent = `${computerDataSize} 条`;
  $("#computer-feature-value").textContent = `${computerFeatureKeys.length} 个`;
  const featureList = $("#computer-fixed-features");
  if (featureList) {
    featureList.innerHTML = computerFeatureKeys.map((key) => `<span>${featureDefs[key].label}</span>`).join("");
  }
}

function renderComputer() {
  renderComputerControls();
  const items = getComputerItems();
  renderDataTableFor("#computer-data-table", items, computerFeatureKeys);
  $("#computer-table-label").textContent = `${computerDataSize} 条食品记录，启用 ${computerFeatureKeys.length} 个特征`;
  renderComputerLog();
  renderComputerScoreBoard();
  renderComputerTree();
  renderPredictionForm();
  renderComputerFoodCards();
  renderPredictionResult();
}

function createComputerBuild(items, featureKeys) {
  const steps = [];
  const tree = buildAutoTree(items, featureKeys, 0, "全部食品", steps);
  steps.forEach((step, index) => {
    step.index = index + 1;
  });
  return { items, featureKeys, tree, steps };
}

function buildAutoTree(items, featureKeys, depth, path, steps) {
  const summary = majorityLabel(items);
  if (!items.length || !summary.mixed || depth >= 3 || !featureKeys.length) {
    return { type: "leaf", items, depth, path, ...summary };
  }
  const ranking = featureKeys.map((key) => scoreFeatureForItems(items, key)).sort((a, b) => b.gain - a.gain || b.score - a.score);
  const best = ranking[0];
  if (!best || best.gain <= 0.001) {
    return { type: "leaf", items, depth, path, ...summary };
  }
  const step = {
    path,
    depth,
    count: items.length,
    yes: summary.yes,
    no: summary.no,
    ranking,
    bestKey: best.key,
    bestGain: best.gain,
  };
  steps.push(step);
  const remaining = featureKeys.filter((key) => key !== best.key);
  return {
    type: "node",
    key: best.key,
    question: featureRules[best.key].question,
    items,
    depth,
    path,
    yes: summary.yes,
    no: summary.no,
    children: best.groups.map((group) => ({
      branch: group.branch,
      label: group.label,
      node: buildAutoTree(group.items, remaining, depth + 1, `${path} / ${group.branch}:${group.label}`, steps),
    })),
  };
}

function renderComputerLog() {
  const log = $("#computer-log");
  if (!computerBuild) {
    $("#computer-progress").textContent = "等待开始";
    log.innerHTML = `
      <pre class="code-runner"><code><span class="code-comment"># 等待投喂数据</span>
data = load_food_data(n=${computerDataSize})
features = select_features(k=${computerFeatureKeys.length})
tree = DecisionTree()
tree.fit(data, features)</code></pre>
      <div class="runtime-metrics">
        <span>样本 <strong>${computerDataSize}</strong></span>
        <span>特征 <strong>${computerFeatureKeys.length}</strong></span>
        <span>状态 <strong>等待</strong></span>
      </div>`;
    return;
  }
  const completed = computerBuild.steps.slice(0, computerStepCount);
  const next = computerBuild.steps[computerStepCount];
  const active = next || completed[completed.length - 1] || computerBuild.steps[0];
  $("#computer-progress").textContent = `${computerStepCount}/${computerBuild.steps.length} 步`;
  log.innerHTML = `
    <pre class="code-runner"><code><span class="code-comment"># 自动构建决策树</span>
data = load_food_data(n=${computerBuild.items.length})
features = ${JSON.stringify(computerBuild.featureKeys.map((key) => featureDefs[key].label))}
for node in tree.open_nodes:
    scores = {}
    for feature in features:
        scores[feature] = information_gain(node.data, feature)
    best = argmax(scores)  <span class="code-active"># ${active ? featureDefs[active.bestKey].label : "等待"}</span>
    node.split(best)
    if branch.is_mixed():
        tree.open_nodes.append(branch)</code></pre>
    <div class="runtime-metrics">
      <span>当前节点 <strong>${active ? active.path : "无"}</strong></span>
      <span>样本 <strong>${active ? active.count : computerBuild.items.length}</strong></span>
      <span>候选 <strong>${active ? active.ranking.length : computerBuild.featureKeys.length}</strong></span>
      <span>最佳 <strong>${active ? featureDefs[active.bestKey].label : "-"}</strong></span>
      <span>信息增益 <strong>${active ? active.bestGain.toFixed(3) : "0.000"}</strong></span>
    </div>
    <div class="run-history">
      ${completed
        .map((step) => `<p><span>run ${step.index}</span> 选择 ${featureDefs[step.bestKey].label}，gain=${step.bestGain.toFixed(3)}</p>`)
        .join("")}
      ${next ? `<p class="log-active"><span>next</span> 正在比较 ${next.ranking.length} 个候选特征</p>` : `<p class="log-done"><span>done</span> 自动构建完成，可以输入新食品进行预测。</p>`}
    </div>`;
}

function renderComputerScoreBoard() {
  const board = $("#computer-score-board");
  if (!computerBuild) {
    board.innerHTML = `<h3>特征评分</h3><p class="branch-summary">尚未开始计算。</p>`;
    return;
  }
  const step = computerBuild.steps[Math.min(computerStepCount, computerBuild.steps.length - 1)];
  if (!step) {
    board.innerHTML = `<h3>特征评分</h3><p class="branch-summary">当前数据已经不需要继续分裂。</p>`;
    return;
  }
  const maxGain = Math.max(...step.ranking.map((item) => item.gain), 0.001);
  board.innerHTML = `
    <h3>${computerStepCount >= computerBuild.steps.length ? "最后一次评分" : "当前评分表"}</h3>
    <div class="score-list">
      ${step.ranking
        .map(
          (item, index) => `
        <article class="score-row ${index === 0 ? "best" : ""}">
          <strong>${featureDefs[item.key].label}</strong>
          <span>信息增益 ${item.gain.toFixed(3)}，区分度 ${Math.round(item.score * 100)}%</span>
          <div class="score-bar"><i style="width:${Math.max(8, (item.gain / maxGain) * 100)}%"></i></div>
        </article>`,
        )
        .join("")}
    </div>`;
}

function renderComputerTree() {
  const output = $("#computer-tree");
  if (!computerBuild) {
    $("#computer-model-state").textContent = "尚未生成";
    output.innerHTML = `<p class="branch-summary">完成数据准备后，还需要执行训练步骤，模型才会生成。</p>`;
    return;
  }
  if (!isComputerModelReady()) {
    $("#computer-model-state").textContent = computerStepCount ? "训练中" : "待训练";
    output.innerHTML = `
      <div class="model-waiting">
        <strong>${computerStepCount ? "正在训练模型" : "数据已投喂，等待训练"}</strong>
        <p>已完成 ${computerStepCount}/${computerBuild.steps.length} 次自动分裂。完成训练后，这里才会显示生成的决策树模型。</p>
      </div>`;
    return;
  }
  const metrics = collectTreeMetrics(computerBuild.tree, computerBuild.items.length);
  const activePath = computerPrediction ? computerPrediction.paths : [];
  $("#computer-model-state").textContent = "已生成";
  output.innerHTML = `
    ${renderComplexity(metrics)}
    <pre class="model-code-tree"><code>${renderComputerTreeCode(computerBuild.tree, activePath).join("\n")}</code></pre>`;
}

function isComputerModelReady() {
  return Boolean(computerBuild && computerStepCount >= computerBuild.steps.length);
}

function renderComputerTreeCode(node, activePath = [], indent = "") {
  const active = activePath.includes(node.path) ? " active-model-line" : "";
  if (node.type === "leaf") {
    return [
      `<span class="model-line${active}">${indent}└─ 叶节点：${escapeHtml(node.label)}（健康${node.yes} / 非健康${node.no}）</span>`,
    ];
  }
  const lines = [`<span class="model-line${active}">${indent}├─ 判断：${escapeHtml(node.question)}（健康${node.yes} / 非健康${node.no}）</span>`];
  node.children.forEach((child, index) => {
    lines.push(`<span class="model-line">${indent}│  ${child.branch}：${escapeHtml(child.label)}</span>`);
    lines.push(...renderComputerTreeCode(child.node, activePath, `${indent}${index === node.children.length - 1 ? "   " : "│  "}`));
  });
  return lines;
}

function renderPredictionForm() {
  $("#prediction-form").innerHTML = computerFeatureKeys
    .map(
      (key) => `
      <label>
        ${featureDefs[key].label}
        <select data-predict-feature="${key}">
          ${featureDefs[key].values.map((value) => `<option value="${value}" ${(predictionInput[key] || featureDefs[key].values[1]) === value ? "selected" : ""}>${value}</option>`).join("")}
        </select>
      </label>`,
    )
    .join("");
}

function renderComputerFoodCards() {
  const strip = $("#computer-food-card-strip");
  if (!strip) return;
  const keys = computerFixedFeatureKeys;
  strip.innerHTML = computerFoodCards
    .map(
      (card) => `
      <article class="model-food-card">
        <span class="model-card-image">
          <img src="${card.image}" alt="${card.name}">
        </span>
        <strong>${card.name}</strong>
        <span class="model-card-tags">
          ${keys.map((key) => `<span><em>${compactFeatureLabels[key]}</em>${card.values[key]}</span>`).join("")}
        </span>
      </article>`,
    )
    .join("");
}

function renderPredictionResult() {
  const box = $("#prediction-result");
  if (!computerPrediction) {
    box.innerHTML = `<p>${isComputerModelReady() ? "输入一个新食品的特征，点击“开始预测”。" : "请先完成训练模型，生成决策树后再进行预测。"}</p>`;
    return;
  }
  box.innerHTML = `
    <strong>预测结果：${computerPrediction.result}</strong>
    <ol>
      ${computerPrediction.steps.map((step) => `<li>${step}</li>`).join("")}
    </ol>
    <p>到达叶节点：健康 ${computerPrediction.leaf.yes} / 非健康 ${computerPrediction.leaf.no}</p>
    ${computerPrediction.adjusted ? `<p class="prediction-warning">该食品呈现高风险组合，系统按课堂健康判断规则校正为“非健康”。</p>` : ""}`;
}

function createPredictionItem() {
  const item = { ...createDefaultPredictionInput(), ...predictionInput };
  computerFeatureKeys.forEach((key) => {
    if (item[key] === undefined) item[key] = featureDefs[key].values[1] || featureDefs[key].values[0];
  });
  return item;
}

function renderOrderPresets() {
  $("#order-presets").innerHTML = orderPresets
    .map((preset) => `<button class="ghost-action ${preset.id === selectedOrderPreset ? "active" : ""}" data-order-preset="${preset.id}" type="button">${preset.label}</button>`)
    .join("");
  $("#order-presets").onclick = (event) => {
    const button = event.target.closest("[data-order-preset]");
    if (!button) return;
    const preset = orderPresets.find((item) => item.id === button.dataset.orderPreset);
    selectedOrderPreset = preset.id;
    selectedOrder = makeOrderFromPreset(preset.id);
    selectedOrderFinding = "";
    selectedOrderEvidence = "";
    renderOrderPresets();
    renderOrderSelects();
    renderOrderTree();
  };
}

function makeContinuationOrder(firstKey) {
  return makeOrderFromPreset("from-lab1", firstKey);
}

function makeOrderFromPreset(presetId, firstKey = selectedFeature) {
  const preset = orderPresets.find((item) => item.id === presetId) || orderPresets[0];
  const candidates = [firstKey || "sugar", ...preset.follow, "process", "additive", "protein", "fiber", "sugar", "fat"];
  return uniqueOrder(candidates).slice(0, 3);
}

function enforceLab1Root(order) {
  const rootKey = selectedFeature || "sugar";
  const candidates = [rootKey, ...order.filter((key) => key !== rootKey), "process", "additive", "protein", "fiber", "sugar", "fat"];
  return uniqueOrder(candidates).slice(0, 3);
}

function renderOrderSelects() {
  selectedOrder = enforceLab1Root(selectedOrder);
  $("#order-selects").innerHTML = selectedOrder
    .map(
      (key, index) => `
      <label class="${index === 0 ? "locked-select" : ""}">
        ${index === 0 ? "第 1 层（沿用实验一）" : `第 ${index + 1} 层选择`}
        <select data-order-index="${index}" ${index === 0 ? "disabled" : ""}>
          ${Object.entries(featureDefs)
            .map(([featureKey, def]) => `<option value="${featureKey}" ${featureKey === key ? "selected" : ""}>${def.label}</option>`)
            .join("")}
        </select>
      </label>`,
    )
    .join("");
  $("#order-selects").onchange = (event) => {
    const select = event.target.closest("[data-order-index]");
    if (!select) return;
    selectedOrder[Number(select.dataset.orderIndex)] = select.value;
    selectedOrder = enforceLab1Root(selectedOrder);
    selectedOrderPreset = "custom";
    selectedOrderFinding = "";
    selectedOrderEvidence = "";
    renderOrderPresets();
    renderOrderSelects();
    renderOrderTree();
  };
}

function renderOrderTree() {
  selectedOrder = enforceLab1Root(selectedOrder);
  const order = uniqueOrder(selectedOrder);
  const tree = buildTreeByOrder(foods, order);
  const metrics = collectTreeMetrics(tree);
  currentOrderResult = { order, tree, metrics };
  $("#order-tree").innerHTML = `
    ${renderComplexity(metrics)}
    ${renderGrownTree(tree)}
  `;
  renderOrderCurrent();
  renderOrderOptions();
}

function renderOrderCurrent() {
  const { order, metrics } = currentOrderResult;
  $("#order-current").innerHTML = `
    <h3>本次观察</h3>
    <p>实验一节点：<strong>${featureDefs[order[0]].label}</strong></p>
    <p>扩展路径：<strong>${order.map((key) => featureDefs[key].label).join(" → ")}</strong></p>
    <div class="metric-grid">
      <div class="metric"><span>判断层数</span><strong>${metrics.maxDepth}</strong></div>
      <div class="metric"><span>判断节点</span><strong>${metrics.internal}</strong></div>
      <div class="metric"><span>混合叶节点</span><strong>${metrics.mixed}</strong></div>
      <div class="metric"><span>训练数据正确率</span><strong>${Math.round(metrics.accuracy * 100)}%</strong></div>
    </div>
    <p class="branch-summary">当单层不能完全分清时，可以继续在分支节点上选择新的特征，形成多层决策树。</p>
  `;
}

function renderOrderOptions() {
  const { metrics } = currentOrderResult;
  const findingOptions = ["关键特征靠前，决策树更简洁", "干扰特征靠前，决策树更复杂", "增加层数可以继续降低混合程度"];
  if (!selectedOrderFinding) {
    if (selectedOrderPreset === "noise" || metrics.accuracy < 0.9) {
      selectedOrderFinding = findingOptions[1];
    } else if (metrics.mixed > 0) {
      selectedOrderFinding = findingOptions[2];
    } else {
      selectedOrderFinding = findingOptions[0];
    }
  }

  const evidenceOptions = [
    `这棵树用了${metrics.maxDepth}层、${metrics.internal}个判断节点，混合叶节点为${metrics.mixed}个。`,
    `训练数据中有${metrics.correct}/${foods.length}条被多数结果正确覆盖，正确率约为${Math.round(metrics.accuracy * 100)}%。`,
    `如果先选区分度弱的特征，后续往往需要更多分支继续判断。`,
  ];
  if (!selectedOrderEvidence) selectedOrderEvidence = evidenceOptions[0];

  $("#order-finding-options").innerHTML = findingOptions
    .map((option) => `<button class="option-button ${option === selectedOrderFinding ? "active" : ""}" data-order-finding="${option}" type="button">${option}</button>`)
    .join("");
  $("#order-evidence-options").innerHTML = evidenceOptions
    .map((option) => `<button class="option-button ${option === selectedOrderEvidence ? "active" : ""}" data-order-evidence="${option}" type="button">${option}</button>`)
    .join("");

  $("#order-finding-options").onclick = (event) => {
    const button = event.target.closest("[data-order-finding]");
    if (!button) return;
    selectedOrderFinding = button.dataset.orderFinding;
    renderOrderOptions();
  };
  $("#order-evidence-options").onclick = (event) => {
    const button = event.target.closest("[data-order-evidence]");
    if (!button) return;
    selectedOrderEvidence = button.dataset.orderEvidence;
    renderOrderOptions();
  };
}

function resetOrderLab() {
  selectedOrderPreset = "from-lab1";
  selectedOrder = makeOrderFromPreset("from-lab1");
  selectedOrderFinding = "";
  selectedOrderEvidence = "";
  orderRecords = [];
  renderOrderPresets();
  renderOrderSelects();
  renderOrderTree();
  renderOrderRecords();
}

function saveOrderRecord() {
  const { order, metrics } = currentOrderResult;
  orderRecords.push({
    time: orderRecords.length + 1,
    order: order.map((key) => featureDefs[key].label).join(" → "),
    depth: metrics.maxDepth,
    internal: metrics.internal,
    leaves: metrics.leaves,
    mixed: metrics.mixed,
    accuracy: `${Math.round(metrics.accuracy * 100)}%`,
    finding: selectedOrderFinding,
    evidence: selectedOrderEvidence,
  });
  renderOrderRecords();
}

function renderOrderRecords() {
  $("#order-record-count").textContent = `${orderRecords.length} 次`;
  $("#order-records-list").innerHTML = orderRecords.length
    ? orderRecords
        .map(
          (record) => `
        <article class="record-card">
          <strong>${record.time}. ${record.order}</strong>
          <p>层数${record.depth}，判断节点${record.internal}，叶节点${record.leaves}，混合叶节点${record.mixed}，正确率${record.accuracy}</p>
          <p>${record.finding}。${record.evidence}</p>
        </article>`,
        )
        .join("")
    : `<p class="branch-summary">生成一棵树后，点击“记录本次实验”。</p>`;
}

function initAuto() {
  autoBuild = createAutoBuild();
  renderAuto();
  $("#auto-next").addEventListener("click", () => {
    if (autoStepCount < autoBuild.steps.length) autoStepCount += 1;
    selectedAutoUnderstanding = "";
    selectedAutoEvidence = "";
    renderAuto();
  });
  $("#auto-finish").addEventListener("click", () => {
    autoStepCount = autoBuild.steps.length;
    selectedAutoUnderstanding = "";
    selectedAutoEvidence = "";
    renderAuto();
  });
  $("#reset-auto").addEventListener("click", resetAutoLab);
  $("#save-auto-record").addEventListener("click", saveAutoRecord);
  $("#copy-auto-records").addEventListener("click", () => copyText(autoRecordsToText()));
  $("#download-auto-csv").addEventListener("click", downloadAutoCsv);
  $("#download-auto-json").addEventListener("click", () => download("决策树自动构建记录.json", JSON.stringify(autoRecords, null, 2), "application/json;charset=utf-8"));
}

function renderAuto() {
  $("#auto-score-board").innerHTML = renderAutoScoreBoard();
  $("#auto-tree").innerHTML = `
    ${renderComplexity(collectVisibleTreeMetrics(autoBuild.tree, autoStepCount))}
    <div class="tree-diagram">${renderAutoTreeNode(autoBuild.tree, autoStepCount)}</div>
  `;
  renderAutoCurrent();
  renderAutoOptions();
}

function renderAutoScoreBoard() {
  const nextStep = autoBuild.steps[autoStepCount];
  const completed = autoBuild.steps.slice(0, autoStepCount);
  const completedHtml = completed
    .map(
      (step) => `
      <article class="step-card">
        <strong>${step.index}. ${step.path}</strong>
        <span>选择 ${featureDefs[step.bestKey].label}，信息增益 ${step.bestGain.toFixed(3)}</span>
      </article>`,
    )
    .join("");

  if (!nextStep) {
    return `
      <h3>评分过程</h3>
      ${completedHtml}
      <article class="step-card active">
        <strong>自动构建完成</strong>
        <span>所有需要继续判断的节点都已经完成分裂，可以用叶节点辅助预测。</span>
      </article>
    `;
  }

  return `
    <h3>评分过程</h3>
    ${completedHtml}
    <article class="step-card active">
      <strong>下一步：${nextStep.path}</strong>
      <span>${nextStep.count}条数据，健康${nextStep.yes}条，非健康${nextStep.no}条。计算候选特征的信息增益。</span>
      <div class="score-list">
        ${nextStep.ranking
          .slice(0, 5)
          .map(
            (item, index) => `
            <div class="score-row ${index === 0 ? "best" : ""}">
              <strong>${featureDefs[item.key].label}</strong>
              <span>信息增益 ${item.gain.toFixed(3)}，区分度得分 ${item.score.toFixed(2)}</span>
            </div>`,
          )
          .join("")}
      </div>
    </article>
  `;
}

function renderAutoCurrent() {
  const latest = autoBuild.steps[autoStepCount - 1];
  const next = autoBuild.steps[autoStepCount];
  $("#auto-current").innerHTML = `
    <h3>本次观察</h3>
    <p>已完成：<strong>${autoStepCount}/${autoBuild.steps.length}</strong> 次自动分裂</p>
    <p>${latest ? `刚才选择：<strong>${featureDefs[latest.bestKey].label}</strong>，信息增益 ${latest.bestGain.toFixed(3)}。` : "点击“执行下一步”，观察计算机如何先评分再选择特征。"}</p>
    <p>${next ? `下一步将处理：<strong>${next.path}</strong>。` : "当前自动生成的树已经可以用于分类或预测。"}</p>
    <p class="branch-summary">计算机不是凭感觉选节点，而是把“分得清不清”转化成可以比较的指标。</p>
  `;
}

function renderAutoOptions() {
  const understandingOptions = ["计算机用信息增益给候选特征评分", "每到一个新节点，都要在当前数据中重新计算", "生成叶节点后，可以用路径判断新食品类别"];
  if (!selectedAutoUnderstanding) selectedAutoUnderstanding = understandingOptions[Math.min(autoStepCount, 1)];

  const latest = autoBuild.steps[autoStepCount - 1] || autoBuild.steps[0];
  const evidenceOptions = [
    `${featureDefs[latest.bestKey].label}在当前节点的信息增益最高，所以被选为分裂特征。`,
    `自动构建已经完成${autoStepCount}次分裂，剩余混合节点会继续计算。`,
    `这个过程对应“计算指标 → 选择最优分裂 → 递归生长 → 形成叶节点”。`,
  ];
  if (!selectedAutoEvidence) selectedAutoEvidence = evidenceOptions[0];

  $("#auto-understanding-options").innerHTML = understandingOptions
    .map((option) => `<button class="option-button ${option === selectedAutoUnderstanding ? "active" : ""}" data-auto-understanding="${option}" type="button">${option}</button>`)
    .join("");
  $("#auto-evidence-options").innerHTML = evidenceOptions
    .map((option) => `<button class="option-button ${option === selectedAutoEvidence ? "active" : ""}" data-auto-evidence="${option}" type="button">${option}</button>`)
    .join("");

  $("#auto-understanding-options").onclick = (event) => {
    const button = event.target.closest("[data-auto-understanding]");
    if (!button) return;
    selectedAutoUnderstanding = button.dataset.autoUnderstanding;
    renderAutoOptions();
  };
  $("#auto-evidence-options").onclick = (event) => {
    const button = event.target.closest("[data-auto-evidence]");
    if (!button) return;
    selectedAutoEvidence = button.dataset.autoEvidence;
    renderAutoOptions();
  };
}

function resetAutoLab() {
  autoBuild = createAutoBuild();
  autoStepCount = 0;
  selectedAutoUnderstanding = "";
  selectedAutoEvidence = "";
  autoRecords = [];
  renderAuto();
  renderAutoRecords();
}

function saveAutoRecord() {
  const latest = autoBuild.steps[Math.max(0, autoStepCount - 1)] || autoBuild.steps[0];
  autoRecords.push({
    time: autoRecords.length + 1,
    completed: `${autoStepCount}/${autoBuild.steps.length}`,
    latestFeature: featureDefs[latest.bestKey].label,
    gain: latest.bestGain.toFixed(3),
    understanding: selectedAutoUnderstanding,
    evidence: selectedAutoEvidence,
  });
  renderAutoRecords();
}

function renderAutoRecords() {
  $("#auto-record-count").textContent = `${autoRecords.length} 次`;
  $("#auto-records-list").innerHTML = autoRecords.length
    ? autoRecords
        .map(
          (record) => `
        <article class="record-card">
          <strong>${record.time}. 已完成 ${record.completed}</strong>
          <p>最近选择 ${record.latestFeature}，信息增益 ${record.gain}</p>
          <p>${record.understanding}。${record.evidence}</p>
        </article>`,
        )
        .join("")
    : `<p class="branch-summary">执行自动构建步骤后，点击“记录本次实验”。</p>`;
}

function uniqueOrder(order) {
  return [...new Set(order)].filter((key) => featureRules[key]);
}

function countHealthy(items) {
  const yes = items.filter((item) => item.healthy).length;
  return { yes, no: items.length - yes };
}

function majorityLabel(items) {
  const { yes, no } = countHealthy(items);
  if (!items.length) return { healthy: false, label: "暂无数据", yes, no, mixed: false };
  return {
    healthy: yes >= no,
    label: yes >= no ? "健康" : "非健康",
    yes,
    no,
    mixed: yes > 0 && no > 0,
  };
}

function buildTreeByOrder(items, order, depth = 0, path = "全部食品") {
  const summary = majorityLabel(items);
  const pure = !summary.mixed;
  if (!items.length || pure || depth >= order.length) {
    return { type: "leaf", items, depth, path, ...summary };
  }

  const key = order[depth];
  const rule = featureRules[key];
  const yesItems = items.filter((item) => rule.test(item));
  const noItems = items.filter((item) => !rule.test(item));
  return {
    type: "node",
    key,
    question: rule.question,
    items,
    depth,
    path,
    yes: summary.yes,
    no: summary.no,
    children: [
      { branch: "是", label: rule.yes, node: buildTreeByOrder(yesItems, order, depth + 1, `${path} / 是:${rule.yes}`) },
      { branch: "否", label: rule.no, node: buildTreeByOrder(noItems, order, depth + 1, `${path} / 否:${rule.no}`) },
    ],
  };
}

function collectTreeMetrics(tree, totalItems = foods.length) {
  const metrics = { internal: 0, leaves: 0, mixed: 0, correct: 0, maxDepth: 0, accuracy: 0 };
  walkTree(tree, (node) => {
    if (node.type === "node") {
      metrics.internal += 1;
      metrics.maxDepth = Math.max(metrics.maxDepth, node.depth + 1);
      return;
    }
    metrics.leaves += 1;
    if (node.mixed) metrics.mixed += 1;
    metrics.correct += Math.max(node.yes, node.no);
    metrics.maxDepth = Math.max(metrics.maxDepth, node.depth);
  });
  metrics.accuracy = totalItems ? metrics.correct / totalItems : 0;
  return metrics;
}

function walkTree(node, visitor) {
  visitor(node);
  if (node.type === "node") node.children.forEach((child) => walkTree(child.node, visitor));
}

function renderComplexity(metrics) {
  return `
    <div class="complexity-grid">
      <div class="metric"><span>判断层数</span><strong>${metrics.maxDepth}</strong></div>
      <div class="metric"><span>判断节点</span><strong>${metrics.internal}</strong></div>
      <div class="metric"><span>混合叶节点</span><strong>${metrics.mixed}</strong></div>
      <div class="metric"><span>训练数据正确率</span><strong>${Math.round(metrics.accuracy * 100)}%</strong></div>
    </div>
  `;
}

function renderTreeNode(node, activePath = []) {
  if (node.type === "leaf") {
    const leafClass = leafClassFor(node);
    return `
      <div class="tree-branch">
        <div class="tree-node-card ${leafClass}">
          <strong>${node.label}</strong>
          <span>健康 ${node.yes} / 非健康 ${node.no}</span>
          <small>${sampleItemNames(node.items)}</small>
        </div>
      </div>
    `;
  }

  const active = activePath.includes(node.path) ? " active-path" : "";
  return `
    <div class="tree-branch">
      <div class="tree-node-card${active}">
        <strong>${featureDefs[node.key].label}</strong>
        <span>${node.question}</span>
        <small>健康 ${node.yes} / 非健康 ${node.no}</small>
      </div>
      <div class="tree-children">
        ${node.children
          .map(
            (child) => `
            <div class="tree-branch">
              <span class="tree-link-label">${child.branch}：${child.label}</span>
              ${renderTreeNode(child.node, activePath)}
            </div>`,
          )
          .join("")}
      </div>
    </div>
  `;
}

function sampleItemNames(items, limit = 8) {
  if (!items.length) return "无样本";
  const names = items.slice(0, limit).map((item) => item.name).join("、");
  return items.length > limit ? `${names} 等 ${items.length} 条` : names;
}

function leafClassFor(node) {
  if (!node.items.length) return "leaf-empty";
  if (node.mixed) return "leaf-mixed";
  return node.healthy ? "leaf-good" : "leaf-stop";
}

function renderGrownTree(tree) {
  if (tree.type !== "node") {
    return `<div class="grown-tree-stage">${renderGrownLeaf(tree)}</div>`;
  }
  const [yesBranch, noBranch] = tree.children;
  return `
    <div class="grown-tree-stage">
      <svg class="grown-pipe-layer" viewBox="0 0 900 560" preserveAspectRatio="none" aria-hidden="true">
        <path class="pipe-wall" d="M450 92 C330 145 236 190 164 256" />
        <path class="pipe-wall" d="M450 92 C570 145 664 190 736 256" />
        <path class="pipe-core" d="M450 92 C330 145 236 190 164 256" />
        <path class="pipe-core" d="M450 92 C570 145 664 190 736 256" />
        <path class="pipe-glow" d="M450 92 C330 145 236 190 164 256" />
        <path class="pipe-glow" d="M450 92 C570 145 664 190 736 256" />
      </svg>
      <div class="grown-root">
        <span>实验一节点</span>
        <strong>${featureDefs[tree.key].label}</strong>
        <em>${tree.question}</em>
      </div>
      <section class="grown-branch grown-yes">
        <span class="grown-branch-tag">是：${yesBranch.label}</span>
        ${renderGrownSubtree(yesBranch.node)}
      </section>
      <section class="grown-branch grown-no">
        <span class="grown-branch-tag">否：${noBranch.label}</span>
        ${renderGrownSubtree(noBranch.node)}
      </section>
    </div>
  `;
}

function renderGrownSubtree(node) {
  if (node.type === "leaf") return renderGrownLeaf(node);
  return `
    <div class="grown-continue">
      <div class="grown-node-card">
        <span>继续选择节点</span>
        <strong>${featureDefs[node.key].label}</strong>
        <em>${node.question}</em>
        <small>健康 ${node.yes} / 非健康 ${node.no}</small>
      </div>
      <div class="grown-mini-split">
        ${node.children
          .map(
            (child) => `
            <div class="grown-mini-branch">
              <span class="grown-mini-tag">${child.branch}：${child.label}</span>
              ${renderGrownSubtree(child.node)}
            </div>`,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderGrownLeaf(node) {
  return `
    <article class="grown-leaf ${leafClassFor(node)}">
      <strong>${node.label}</strong>
      <span>健康 ${node.yes} / 非健康 ${node.no}</span>
      <div class="mini-foods">
        ${node.items.map((item) => miniFoodToken(item)).join("") || "<small>无样本</small>"}
      </div>
    </article>
  `;
}

function miniFoodToken(item) {
  const icon = foodIcons[item.name] || "🍽";
  return `<span class="mini-food ${item.healthy ? "" : "unhealthy"}" title="${item.name}"><span>${icon}</span><em>${item.name}</em></span>`;
}

function orderRecordsToText() {
  if (!orderRecords.length) return "暂无实验二记录";
  return orderRecords
    .map((record) => `${record.time}. ${record.order}｜层数${record.depth}｜判断节点${record.internal}｜混合叶节点${record.mixed}｜正确率${record.accuracy}｜${record.finding}`)
    .join("\n");
}

function downloadOrderCsv() {
  const header = ["次数", "扩展路径", "层数", "判断节点", "叶节点", "混合叶节点", "正确率", "发现", "证据"];
  const rows = orderRecords.map((record) => [record.time, record.order, record.depth, record.internal, record.leaves, record.mixed, record.accuracy, record.finding, record.evidence]);
  const csv = [header, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");
  download("决策树实验二记录.csv", csv, "text/csv;charset=utf-8");
}

function initApply() {
  if (!$("#sample-grid")) return;
  renderApply();
  $("#reset-apply").addEventListener("click", resetApplyLab);
  $("#save-apply-record").addEventListener("click", saveApplyRecord);
  $("#copy-apply-records").addEventListener("click", () => copyText(applyRecordsToText()));
  $("#download-apply-csv").addEventListener("click", downloadApplyCsv);
  $("#download-apply-json").addEventListener("click", () => download("决策树应用拓展记录.json", JSON.stringify(applyRecords, null, 2), "application/json;charset=utf-8"));
  $("#transfer-size")?.addEventListener("input", (event) => {
    transferDataSize = Number(event.target.value);
    renderTransferLab();
  });
  $("#transfer-feature-count")?.addEventListener("input", (event) => {
    transferFeatureCount = Number(event.target.value);
    renderTransferLab();
  });
  $("#transfer-preset-healthy")?.addEventListener("click", () => {
    transferDataSize = 120;
    transferFeatureCount = 3;
    syncTransferSliders();
    renderTransferLab();
  });
  $("#transfer-preset-unhealthy")?.addEventListener("click", () => {
    transferDataSize = 500;
    transferFeatureCount = 8;
    syncTransferSliders();
    renderTransferLab();
  });
}

function renderApply() {
  const item = newFoodCases.find((food) => food.id === selectedApplyCase) || newFoodCases[0];
  const tree = buildTreeByOrder(foods, applicationOrder);
  currentPrediction = predictWithTree(tree, item);
  renderSampleGrid();
  renderSampleDetail(item);
  $("#apply-tree").innerHTML = `
    <div class="tree-diagram">${renderTreeNode(tree, currentPrediction.paths)}</div>
  `;
  renderApplyCurrent(item);
  renderApplyOptions(item);
  renderTransferLab();
}

function renderSampleGrid() {
  $("#sample-grid").innerHTML = newFoodCases
    .map(
      (item) => `
      <button class="sample-card ${item.id === selectedApplyCase ? "active" : ""}" data-sample="${item.id}" type="button">
        <strong>${item.name}</strong>
        <span>${featureDefs.process.label}:${item.process} / ${featureDefs.additive.label}:${item.additive} / ${featureDefs.protein.label}:${item.protein}</span>
      </button>`,
    )
    .join("");
  $("#sample-grid").onclick = (event) => {
    const button = event.target.closest("[data-sample]");
    if (!button) return;
    selectedApplyCase = button.dataset.sample;
    selectedApplyUnderstanding = "";
    selectedApplyEvidence = "";
    renderApply();
  };
}

function renderSampleDetail(item) {
  $("#sample-detail").innerHTML = `
    <h3>待预测食品：${item.name}</h3>
    <div class="feature-chip-grid">
      ${Object.entries(featureDefs).map(([key, def]) => `<span>${def.label}：${item[key]}</span>`).join("")}
    </div>
  `;
}

function predictWithTree(tree, item, options = {}) {
  const applyClassroomRule = options.applyClassroomRule !== false;
  const steps = [];
  const paths = [];
  let node = tree;
  while (node.type === "node") {
    paths.push(node.path);
    const rule = featureRules[node.key];
    const yes = rule.test(item);
    const child = node.children[yes ? 0 : 1];
    steps.push(`${featureDefs[node.key].label}：${yes ? "是" : "否"}（${child.label}）`);
    node = child.node;
  }
  paths.push(node.path);
  const modelHealthy = node.healthy;
  const ruleHealthy = classroomHealthLabel(item);
  const finalHealthy = applyClassroomRule && ruleHealthy === false ? false : modelHealthy;
  return {
    leaf: node,
    steps,
    paths,
    result: finalHealthy ? "健康" : "非健康",
    modelResult: modelHealthy ? "健康" : "非健康",
    ruleResult: ruleHealthy ? "健康" : "非健康",
    adjusted: finalHealthy !== modelHealthy,
  };
}

function transferFeatureKeys() {
  return transferFeatureOrder.slice(0, transferFeatureCount);
}

function generateTransferFoods(count, featureCount) {
  const items = generateComputerFoods(count).map((item) => ({ ...item }));
  const popularHealthyCount = Math.floor(count * (featureCount <= 4 ? 0.58 : 0.18));
  const riskyPopularCount = Math.floor(count * (featureCount <= 4 ? 0.08 : 0.34));

  for (let index = 0; index < popularHealthyCount; index += 1) {
    const item = items[index];
    Object.assign(item, {
      name: `人气健康零食${index + 1}`,
      like: "高",
      package: index % 2 ? "网红" : "吸引",
      protein: "低",
      satiety: index % 3 ? "中" : "高",
      fiber: index % 2 ? "中" : "高",
      sugar: "低",
      fat: "低",
      process: "低",
      additive: "少",
      sodium: "低",
      energy: "低",
      vitamin: "中",
      natural: "高",
      fried: "低",
      healthy: true,
    });
  }

  for (let index = 0; index < riskyPopularCount; index += 1) {
    const item = items[count - 1 - index];
    Object.assign(item, {
      name: `重口味零食${index + 1}`,
      like: "高",
      package: "网红",
      protein: "低",
      satiety: "中",
      fiber: "低",
      sugar: "高",
      fat: "高",
      process: "高",
      additive: "多",
      sodium: "高",
      energy: "高",
      vitamin: "低",
      natural: "低",
      fried: "高",
      healthy: false,
    });
  }

  return items.map((item) => ({ ...item, healthy: item.healthy ?? classroomHealthLabel(item) }));
}

function renderTransferLab() {
  if (!$("#transfer-result")) return;
  syncTransferSliders();
  const featureKeys = transferFeatureKeys();
  const items = generateTransferFoods(transferDataSize, transferFeatureCount);
  const build = createComputerBuild(items, featureKeys);
  transferPrediction = predictWithTree(build.tree, transferLatiao, { applyClassroomRule: false });
  const metrics = collectTreeMetrics(build.tree, items.length);
  const contrastHint =
    transferPrediction.result === "健康"
      ? "当前模型只看到了较少特征，辣条可能落入“人气高、包装吸引”的健康多数叶。"
      : "当前模型纳入了加工、糖脂等风险特征，辣条被分到非健康叶。";

  $("#transfer-feature-list").innerHTML = featureKeys.map((key) => `<span>${featureDefs[key].label}</span>`).join("");
  $("#transfer-result").innerHTML = `
    <strong>模型预测：${transferPrediction.result}</strong>
    <p>${contrastHint}</p>
    <div class="metric-grid">
      <div class="metric"><span>训练数据</span><strong>${transferDataSize}</strong></div>
      <div class="metric"><span>候选特征</span><strong>${featureKeys.length}</strong></div>
      <div class="metric"><span>叶节点健康</span><strong>${transferPrediction.leaf.yes}</strong></div>
      <div class="metric"><span>叶节点非健康</span><strong>${transferPrediction.leaf.no}</strong></div>
    </div>
    <p class="branch-summary">对比建议：示例 A 用 120 条数据、3 个特征；示例 B 用 500 条数据、8 个特征。</p>`;
  $("#transfer-tree").innerHTML = `
    ${renderComplexity(metrics)}
    <pre class="model-code-tree"><code>${renderComputerTreeCode(build.tree, transferPrediction.paths).join("\n")}</code></pre>`;
}

function syncTransferSliders() {
  const sizeInput = $("#transfer-size");
  const featureInput = $("#transfer-feature-count");
  if (sizeInput) sizeInput.value = String(transferDataSize);
  if (featureInput) featureInput.value = String(transferFeatureCount);
  $("#transfer-size-value").textContent = `${transferDataSize} 条`;
  $("#transfer-feature-value").textContent = `${transferFeatureCount} 个`;
}

function renderApplyCurrent(item) {
  $("#apply-current").innerHTML = `
    <h3>预测结果</h3>
    <p>新食品：<strong>${item.name}</strong></p>
    <p>模型判断：<strong>${currentPrediction.result}</strong></p>
    <ul class="branch-summary">
      ${currentPrediction.steps.map((step) => `<li>${step}</li>`).join("")}
    </ul>
    <div class="metric-grid">
      <div class="metric"><span>叶节点健康</span><strong>${currentPrediction.leaf.yes}</strong></div>
      <div class="metric"><span>叶节点非健康</span><strong>${currentPrediction.leaf.no}</strong></div>
      <div class="metric"><span>路径步数</span><strong>${currentPrediction.steps.length}</strong></div>
      <div class="metric"><span>解释性</span><strong>可追踪</strong></div>
    </div>
  `;
}

function renderApplyOptions(item) {
  const understandingOptions = ["能沿着决策路径解释预测结果", "预测依赖训练数据中的规律", "新食品特征越完整，预测越容易进行"];
  if (!selectedApplyUnderstanding) selectedApplyUnderstanding = understandingOptions[0];

  const evidenceOptions = [
    `${item.name}沿路径“${currentPrediction.steps.join(" → ")}”，最终到达${currentPrediction.result}叶节点。`,
    `该叶节点中健康${currentPrediction.leaf.yes}个、非健康${currentPrediction.leaf.no}个，因此预测为${currentPrediction.result}。`,
    `这个结果是辅助判断，真实健康评价还需要更完整的营养标准。`,
  ];
  if (!selectedApplyEvidence) selectedApplyEvidence = evidenceOptions[0];

  $("#apply-understanding-options").innerHTML = understandingOptions
    .map((option) => `<button class="option-button ${option === selectedApplyUnderstanding ? "active" : ""}" data-apply-understanding="${option}" type="button">${option}</button>`)
    .join("");
  $("#apply-evidence-options").innerHTML = evidenceOptions
    .map((option) => `<button class="option-button ${option === selectedApplyEvidence ? "active" : ""}" data-apply-evidence="${option}" type="button">${option}</button>`)
    .join("");

  $("#apply-understanding-options").onclick = (event) => {
    const button = event.target.closest("[data-apply-understanding]");
    if (!button) return;
    selectedApplyUnderstanding = button.dataset.applyUnderstanding;
    renderApplyOptions(item);
  };
  $("#apply-evidence-options").onclick = (event) => {
    const button = event.target.closest("[data-apply-evidence]");
    if (!button) return;
    selectedApplyEvidence = button.dataset.applyEvidence;
    renderApplyOptions(item);
  };
}

function resetApplyLab() {
  selectedApplyCase = newFoodCases[0].id;
  selectedApplyUnderstanding = "";
  selectedApplyEvidence = "";
  applyRecords = [];
  transferDataSize = 120;
  transferFeatureCount = 3;
  transferPrediction = null;
  renderApply();
  renderApplyRecords();
}

function saveApplyRecord() {
  const item = newFoodCases.find((food) => food.id === selectedApplyCase) || newFoodCases[0];
  applyRecords.push({
    time: applyRecords.length + 1,
    food: item.name,
    result: currentPrediction.result,
    path: currentPrediction.steps.join(" → "),
    leaf: `健康${currentPrediction.leaf.yes}/非健康${currentPrediction.leaf.no}`,
    understanding: selectedApplyUnderstanding,
    evidence: selectedApplyEvidence,
  });
  renderApplyRecords();
}

function renderApplyRecords() {
  $("#apply-record-count").textContent = `${applyRecords.length} 次`;
  $("#apply-records-list").innerHTML = applyRecords.length
    ? applyRecords
        .map(
          (record) => `
        <article class="record-card">
          <strong>${record.time}. ${record.food}：预测为${record.result}</strong>
          <p>${record.path}；叶节点${record.leaf}</p>
          <p>${record.understanding}。${record.evidence}</p>
        </article>`,
        )
        .join("")
    : `<p class="branch-summary">选择一个新食品后，点击“记录应用结果”。</p>`;
}

function applyRecordsToText() {
  if (!applyRecords.length) return "暂无应用拓展记录";
  return applyRecords.map((record) => `${record.time}. ${record.food}｜预测${record.result}｜${record.path}｜${record.evidence}`).join("\n");
}

function downloadApplyCsv() {
  const header = ["次数", "食品", "预测结果", "决策路径", "叶节点", "理解", "证据"];
  const rows = applyRecords.map((record) => [record.time, record.food, record.result, record.path, record.leaf, record.understanding, record.evidence]);
  const csv = [header, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");
  download("决策树应用拓展记录.csv", csv, "text/csv;charset=utf-8");
}

function printLabSheetPdf() {
  const previousScene = $(".scene.active")?.id || "experiment";
  const previousManualPage = activeManualPage;
  const restorePrintState = () => {
    document.body.classList.remove("print-lab-sheet");
    activeManualPage = previousManualPage;
    renderManualPages();
    switchScene(previousScene, false);
    window.removeEventListener("afterprint", restorePrintState);
  };
  switchScene("experiment", false);
  activeManualPage = "manual-exp1";
  renderManualPages();
  document.body.classList.add("print-lab-sheet");
  window.addEventListener("afterprint", restorePrintState);
  window.print();
  setTimeout(restorePrintState, 500);
}

function copyText(text) {
  navigator.clipboard?.writeText(text);
}

function foodToken(item, index = 0, laneIndex = null) {
  const isFlowing = laneIndex === 0 || laneIndex === 1;
  const flowClass = laneIndex === 0 ? "flow-left" : laneIndex === 1 ? "flow-right" : "";
  const fromX = laneIndex === 0 ? "120px" : "-330px";
  const fromY = laneIndex === 0 ? "-250px" : "-255px";
  const midX = laneIndex === 0 ? "28px" : "-80px";
  const midY = "-72px";
  const style = isFlowing ? `style="animation-delay:${Math.min(index * 70, 560)}ms;--from-x:${fromX};--from-y:${fromY};--mid-x:${midX};--mid-y:${midY}"` : "";
  const icon = foodIcons[item.name] || "🍽";
  return `
    <span class="food-token ${flowClass} ${item.healthy ? "" : "unhealthy"}" ${style} title="${item.name}" aria-label="${item.name}">
      <span class="food-icon" aria-hidden="true">${icon}</span>
      <span class="food-name">${item.name}</span>
    </span>`;
}

function copyRecords() {
  const text = recordsToText();
  navigator.clipboard?.writeText(text);
}

function downloadCsv() {
  const header = ["行号", "测试特征", "左侧接收池主色", "右侧接收池主色", "分类效果"];
  const rows = getExperimentSheetRecords().map((record) => [
    record.index,
    record.feature,
    record.leftColor,
    record.rightColor,
    record.effect,
  ]);
  const csv = [header, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");
  download("决策树实验一记录.csv", csv, "text/csv;charset=utf-8");
}

function downloadJson() {
  download(
    "决策树实验一记录.json",
    JSON.stringify(
      {
        rows: getExperimentSheetRecords(),
        conclusion: {
          analysis: {
            strongFeature: lab1AnalysisAnswers.strongFeature ? featureDefs[lab1AnalysisAnswers.strongFeature].label : "",
            strongDegree: labelFromChoices(lab1DegreeChoices, lab1AnalysisAnswers.strongDegree),
            strongRole: labelFromChoices(lab1RoleChoices, lab1AnalysisAnswers.strongRole),
            weakFeature: lab1AnalysisAnswers.weakFeature ? featureDefs[lab1AnalysisAnswers.weakFeature].label : "",
            weakDegree: labelFromChoices(lab1DegreeChoices, lab1AnalysisAnswers.weakDegree),
            weakRole: labelFromChoices(lab1RoleChoices, lab1AnalysisAnswers.weakRole),
            difference: labelFromChoices(lab1DifferenceChoices, lab1AnalysisAnswers.difference),
          },
          conclusion: {
            nodeRole: labelFromChoices(lab1ConclusionRoleChoices, lab1ConclusionAnswers.nodeRole),
            degree: labelFromChoices(lab1ConclusionDegreeChoices, lab1ConclusionAnswers.degree),
          },
        },
      },
      null,
      2,
    ),
    "application/json;charset=utf-8",
  );
}

function recordsToText() {
  const rows = getExperimentSheetRecords();
  if (!rows.length) return "暂无实验记录";
  const lines = rows.map(
    (record) => `${record.index}. ${record.feature || "未选特征"}｜左侧主色：${record.leftColor || "-"}｜右侧主色：${record.rightColor || "-"}｜分类效果：${record.effect || "-"}`,
  );
  if (lab1AnalysisAnswers.strongFeature) {
    lines.push(
      `区分度较明显的特征：${featureDefs[lab1AnalysisAnswers.strongFeature].label}｜${labelFromChoices(lab1DegreeChoices, lab1AnalysisAnswers.strongDegree) || "-"}`,
    );
  }
  if (lab1AnalysisAnswers.weakFeature) {
    lines.push(
      `区分度较弱的特征：${featureDefs[lab1AnalysisAnswers.weakFeature].label}｜${labelFromChoices(lab1DegreeChoices, lab1AnalysisAnswers.weakDegree) || "-"}`,
    );
  }
  if (lab1ConclusionAnswers.nodeRole || lab1ConclusionAnswers.degree) {
    lines.push(
      `实验结论：优先选择${labelFromChoices(lab1ConclusionRoleChoices, lab1ConclusionAnswers.nodeRole) || "-"}，区分度${labelFromChoices(lab1ConclusionDegreeChoices, lab1ConclusionAnswers.degree) || "-"}`,
    );
  }
  return lines.join("\n");
}

function csvCell(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function download(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

renderRecords();
init();

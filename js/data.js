/* 健身与健康饮食 - 数据 */

const IMG = {
  hero: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50e?w=800&q=80',
  food: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
  gym: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
  salad: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
  run: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80',
  yoga: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
  meal: 'https://images.unsplash.com/photo-1546069901-ba9599a1e63c?w=600&q=80',
  chest: 'https://images.unsplash.com/photo-1581009146145-b5ef050c1498?w=500&q=80',
  back: 'https://images.unsplash.com/photo-1603286568383-7ca5a785a698?w=500&q=80',
  abs: 'https://images.unsplash.com/photo-1517836357463-d25dfeacfc0f?w=500&q=80',
  legs: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=500&q=80',
};

const FOOD_CATEGORIES = ['全部', '主食', '蛋白质', '蔬菜', '水果', '饮品', '零食'];

const FOODS = [
  { name: '糙米饭', cat: '主食', cal: 111, unit: '100g', protein: 2.6, carb: 23, fat: 0.9, img: IMG.meal },
  { name: '燕麦片', cat: '主食', cal: 367, unit: '100g', protein: 13, carb: 66, fat: 7, img: IMG.food },
  { name: '全麦面包', cat: '主食', cal: 247, unit: '100g', protein: 13, carb: 41, fat: 3.5, img: IMG.meal },
  { name: '红薯', cat: '主食', cal: 86, unit: '100g', protein: 1.6, carb: 20, fat: 0.1, img: IMG.food },
  { name: '鸡胸肉', cat: '蛋白质', cal: 165, unit: '100g', protein: 31, carb: 0, fat: 3.6, img: IMG.salad },
  { name: '鸡蛋', cat: '蛋白质', cal: 155, unit: '100g', protein: 13, carb: 1.1, fat: 11, img: IMG.meal },
  { name: '三文鱼', cat: '蛋白质', cal: 208, unit: '100g', protein: 20, carb: 0, fat: 13, img: IMG.salad },
  { name: '豆腐', cat: '蛋白质', cal: 76, unit: '100g', protein: 8, carb: 2, fat: 4.8, img: IMG.food },
  { name: '牛肉(瘦)', cat: '蛋白质', cal: 250, unit: '100g', protein: 26, carb: 0, fat: 15, img: IMG.meal },
  { name: '西兰花', cat: '蔬菜', cal: 34, unit: '100g', protein: 2.8, carb: 7, fat: 0.4, img: IMG.salad },
  { name: '菠菜', cat: '蔬菜', cal: 23, unit: '100g', protein: 2.9, carb: 3.6, fat: 0.4, img: IMG.salad },
  { name: '番茄', cat: '蔬菜', cal: 18, unit: '100g', protein: 0.9, carb: 3.9, fat: 0.2, img: IMG.food },
  { name: '黄瓜', cat: '蔬菜', cal: 15, unit: '100g', protein: 0.7, carb: 3.6, fat: 0.1, img: IMG.salad },
  { name: '苹果', cat: '水果', cal: 52, unit: '100g', protein: 0.3, carb: 14, fat: 0.2, img: IMG.food },
  { name: '香蕉', cat: '水果', cal: 89, unit: '100g', protein: 1.1, carb: 23, fat: 0.3, img: IMG.food },
  { name: '蓝莓', cat: '水果', cal: 57, unit: '100g', protein: 0.7, carb: 14, fat: 0.3, img: IMG.food },
  { name: '牛油果', cat: '水果', cal: 160, unit: '100g', protein: 2, carb: 9, fat: 15, img: IMG.salad },
  { name: '牛奶(脱脂)', cat: '饮品', cal: 34, unit: '100ml', protein: 3.4, carb: 5, fat: 0.1, img: IMG.meal },
  { name: '希腊酸奶', cat: '饮品', cal: 59, unit: '100g', protein: 10, carb: 3.6, fat: 0.4, img: IMG.meal },
  { name: '豆浆(无糖)', cat: '饮品', cal: 31, unit: '100ml', protein: 3, carb: 1.8, fat: 1.6, img: IMG.food },
  { name: '杏仁', cat: '零食', cal: 579, unit: '100g', protein: 21, carb: 22, fat: 50, img: IMG.food },
  { name: '黑巧克力70%', cat: '零食', cal: 598, unit: '100g', protein: 7.8, carb: 46, fat: 43, img: IMG.food },
];

/* 各部位健身动作排序（效果指数 1-10，rank 越小越推荐） */
const BODY_PARTS = [
  { id: 'chest', name: '胸部', icon: '💪', img: IMG.chest },
  { id: 'back', name: '背部', icon: '🦾', img: IMG.back },
  { id: 'shoulder', name: '肩部', icon: '🏋️', img: IMG.gym },
  { id: 'arms', name: '手臂', icon: '💪', img: IMG.gym },
  { id: 'abs', name: '腹部', icon: '🔥', img: IMG.abs },
  { id: 'legs', name: '腿部', icon: '🦵', img: IMG.legs },
  { id: 'glutes', name: '臀部', icon: '🍑', img: IMG.legs },
];

const EXERCISES = {
  chest: [
    { rank: 1, name: '杠铃卧推', effect: 10, sets: '4×8-10', tip: '胸肌整体发展黄金动作', img: IMG.chest },
    { rank: 2, name: '哑铃上斜卧推', effect: 9, sets: '4×10-12', tip: '侧重上胸，塑造立体胸型', img: IMG.chest },
    { rank: 3, name: '双杠臂屈伸', effect: 9, sets: '3×8-12', tip: '下胸与肱三头协同', img: IMG.gym },
    { rank: 4, name: '器械夹胸', effect: 8, sets: '3×12-15', tip: '顶峰收缩刺激胸肌中缝', img: IMG.chest },
    { rank: 5, name: '俯卧撑', effect: 7, sets: '3×15-20', tip: '无器械首选，可渐进负荷', img: IMG.gym },
  ],
  back: [
    { rank: 1, name: '引体向上', effect: 10, sets: '4×6-10', tip: '背阔肌宽度最佳动作', img: IMG.back },
    { rank: 2, name: '杠铃划船', effect: 10, sets: '4×8-10', tip: '厚度核心动作', img: IMG.back },
    { rank: 3, name: '高位下拉', effect: 9, sets: '4×10-12', tip: '可控负荷，适合新手', img: IMG.gym },
    { rank: 4, name: '单臂哑铃划船', effect: 8, sets: '3×10-12', tip: '单侧纠正肌力不平衡', img: IMG.back },
    { rank: 5, name: '直臂下压', effect: 7, sets: '3×12-15', tip: '孤立背阔肌下部', img: IMG.gym },
  ],
  shoulder: [
    { rank: 1, name: '哑铃推举', effect: 10, sets: '4×8-10', tip: '三角肌整体发展', img: IMG.gym },
    { rank: 2, name: '杠铃推举', effect: 9, sets: '4×8-10', tip: '力量突破首选', img: IMG.gym },
    { rank: 3, name: '侧平举', effect: 9, sets: '4×12-15', tip: '中束宽度关键', img: IMG.gym },
    { rank: 4, name: '俯身飞鸟', effect: 8, sets: '3×12-15', tip: '后束塑造立体肩', img: IMG.gym },
    { rank: 5, name: '前平举', effect: 7, sets: '3×12', tip: '前束补充刺激', img: IMG.gym },
  ],
  arms: [
    { rank: 1, name: '杠铃弯举', effect: 10, sets: '4×8-10', tip: '肱二头力量与围度', img: IMG.gym },
    { rank: 2, name: '窄距卧推', effect: 9, sets: '4×8-10', tip: '肱三头复合刺激', img: IMG.gym },
    { rank: 3, name: '锤式弯举', effect: 9, sets: '3×10-12', tip: '肱肌与前臂', img: IMG.gym },
    { rank: 4, name: '绳索下压', effect: 8, sets: '3×12-15', tip: '三头孤立塑形', img: IMG.gym },
    { rank: 5, name: '集中弯举', effect: 7, sets: '3×12', tip: '峰值收缩二头', img: IMG.gym },
  ],
  abs: [
    { rank: 1, name: '悬垂举腿', effect: 10, sets: '4×10-15', tip: '下腹核心王牌', img: IMG.abs },
    { rank: 2, name: '卷腹', effect: 9, sets: '4×15-20', tip: '上腹孤立激活', img: IMG.abs },
    { rank: 3, name: '平板支撑', effect: 9, sets: '3×45-60秒', tip: '核心稳定性基础', img: IMG.abs },
    { rank: 4, name: '俄罗斯转体', effect: 8, sets: '3×20', tip: '腹斜肌旋转力量', img: IMG.abs },
    { rank: 5, name: '登山跑', effect: 8, sets: '3×30秒', tip: '燃脂+核心动态', img: IMG.run },
  ],
  legs: [
    { rank: 1, name: '深蹲', effect: 10, sets: '4×8-10', tip: '下肢力量之王', img: IMG.legs },
    { rank: 2, name: '罗马尼亚硬拉', effect: 10, sets: '4×8-10', tip: '腘绳肌与臀部', img: IMG.legs },
    { rank: 3, name: '腿举', effect: 9, sets: '4×10-12', tip: '安全高负荷练腿', img: IMG.legs },
    { rank: 4, name: '弓步蹲', effect: 8, sets: '3×12/腿', tip: '单侧平衡与塑形', img: IMG.legs },
    { rank: 5, name: '腿弯举', effect: 7, sets: '3×12-15', tip: '腘绳肌孤立', img: IMG.legs },
  ],
  glutes: [
    { rank: 1, name: '臀推', effect: 10, sets: '4×10-12', tip: '臀部激活最直接', img: IMG.legs },
    { rank: 2, name: '保加利亚分腿蹲', effect: 9, sets: '3×10/腿', tip: '单侧臀部深度刺激', img: IMG.legs },
    { rank: 3, name: '罗马尼亚硬拉', effect: 9, sets: '4×10', tip: '臀腿后链协同', img: IMG.legs },
    { rank: 4, name: '蚌式开合', effect: 8, sets: '3×15', tip: '臀中肌稳定', img: IMG.yoga },
    { rank: 5, name: '弹力带侧走', effect: 7, sets: '3×20步', tip: '激活臀中肌', img: IMG.legs },
  ],
};

const MEAL_PLANS = [
  { title: '减脂午餐', cal: 450, img: IMG.salad, items: ['鸡胸肉150g', '西兰花200g', '糙米饭80g'], tags: ['低脂', '高蛋白'] },
  { title: '增肌早餐', cal: 520, img: IMG.meal, items: ['燕麦50g', '鸡蛋3个', '牛奶200ml', '蓝莓50g'], tags: ['高蛋白', '复合碳水'] },
  { title: '均衡晚餐', cal: 480, img: IMG.food, items: ['三文鱼120g', '红薯150g', '蔬菜沙拉'], tags: ['Omega-3', '均衡'] },
  { title: '练后加餐', cal: 280, img: IMG.meal, items: ['希腊酸奶150g', '香蕉1根', '杏仁10粒'], tags: ['快速吸收', '恢复'] },
];

const WORKOUT_PLANS = [
  { name: '新手三周入门', days: '每周3天', level: '入门', img: IMG.gym, desc: '全身分化，掌握深蹲、卧推、划船基础动作' },
  { name: '四分化增肌', days: '每周4天', level: '进阶', img: IMG.chest, desc: '胸/背/腿/肩分化，每个部位每周一次重点训练' },
  { name: 'HIIT 燃脂计划', days: '每周5天', level: '减脂', img: IMG.run, desc: '20分钟高强度间歇，配合饮食控制效果更佳' },
];

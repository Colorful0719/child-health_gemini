// --- Google 表單串接設定區 ---
const FORM_ID = "1FAIpQLScXP8f1JzFq-kFYnZiLsGDUXQSQDUcE0OieeOMg4Lr6YvZzgA"; 
const ENTRY_ID_NAME = "entry.111555726"; 
const ENTRY_ID_DATA = "entry.2065308468"; 
// ----------------------------------------------

// 完整 42 題資料
const questions = [
  ["h1", "衛生", "吃完飯後，我會...?", "飯後刷牙", "吃完直接玩玩具", "a", 1, 2],
  ["h2", "衛生", "睡覺前，我會...?", "洗澡", "髒髒的去睡覺", "a", 3, 4],
  ["h3", "衛生", "上廁所後，我會…?", "上廁所後洗手", "直接跑走", "a", 5, 6],
  ["h4", "衛生", "打噴嚏的時候，我會…?", "衛生紙遮口鼻", "直接對著別人", "a", 7, 8],
  ["h5", "衛生", "吃飯的時候，我會用….?", "乾淨餐具組", "髒髒餐具", "a", 9, 10],
  ["h6", "衛生", "我會讓我的指甲保持…?", "剪齊短指甲", "微灰灰指甲", "a", 11, 12],
  ["e1", "運動", "我想讓身體更健康，我會⋯？", "跳繩", "看電視", "a", 13, 14],
  ["e2", "運動", "我想讓身體更有力氣，我會⋯？", "拍球", "看書", "a", 15, 16],
  ["e3", "運動", "我想讓身體更健康，我會⋯？", "游泳", "玩電腦", "a", 17, 18],
  ["e4", "運動", "我想讓身體更強壯，我會⋯？", "跑步", "滑平板", "a", 19, 20],
  ["e5", "運動", "我想讓身體更有力量，我會⋯？", "玩攀爬架", "玩電動", "a", 21, 22],
  ["e6", "運動", "我想讓身體更有力氣，我會⋯？", "騎腳踏車", "玩樂高", "a", 23, 24],
  ["n1", "營養", "哪種食物對身體好呢？", "小番茄或切片芭樂", "糖果", "a", 25, 26],
  ["n2", "營養", "哪種食物對身體好呢？", "吃飯", "洋芋片", "a", 27, 28],
  ["n3", "營養", "哪種點心對身體好呢？", "優格", "焦糖布丁", "a", 29, 30],
  ["n4", "營養", "哪種早餐對身體好呢？", "蔬菜三明治", "巧克力厚片", "a", 31, 32],
  ["n5", "營養", "哪種飲料對身體好呢？", "白開水", "珍珠奶茶", "a", 33, 34],
  ["n6", "營養", "哪種食物對身體好呢？", "柳丁", "小熊軟糖", "a", 35, 36],
  ["n7", "營養", "哪種食物對身體好呢？", "水煮蛋", "炸薯條", "a", 37, 38],
  ["n8", "營養", "哪種飲料對身體好呢？", "鮮奶", "汽水", "a", 39, 40],
  ["n9", "營養", "哪種點心對身體好呢？", "蘋果", "蛋糕", "a", 41, 42],
  ["v1", "視力", "想讓眼睛休息的時候，我可以⋯？", "眼睛看遠方", "揉眼睛", "a", 43, 44],
  ["v2", "視力", "看平板時，我的眼睛要⋯？", "和平板保持距離", "緊貼著平板", "a", 45, 46],
  ["v3", "視力", "眼睛看不清楚，我要⋯？", "去看醫生", "瞇著眼睛看", "a", 47, 48],
  ["v4", "視力", "看電視的時候，我要坐在⋯？", "在沙發上", "在電視機正前面", "a", 49, 50],
  ["v5", "視力", "想照顧眼睛，我會吃⋯？", "彩色蔬菜", "彩色糖果", "a", 51, 52],
  ["v6", "視力", "看手機時，我會在⋯？", "亮亮的地方", "暗暗的地方", "a", 53, 54],
  ["s1", "安全", "盪鞦韆時，我要⋯？", "坐著", "站著", "a", 55, 56],
  ["s2", "安全", "玩球時，我會選擇在⋯？", "在公園玩球", "在馬路邊或巷口玩球", "a", 57, 58],
  ["s3", "安全", "想玩玩具時，我會玩⋯？", "玩插座", "玩扮家家酒", "b", 59, 60],
  ["s4", "安全", "在家裡想找事情做的時候，我會…？", "手指伸進電風扇", "看書", "b", 61, 62],
  ["s5", "安全", "準備要過馬路的時候，我會…？", "牽大人的手", "自己衝過去", "a", 63, 64],
  ["s6", "安全", "當我騎腳踏車的時候，我會…？", "雙手握把手", "放手騎車", "a", 65, 66],
  ["s7", "安全", "過馬路要看交通號誌，我會…？", "綠燈亮時走", "紅燈亮時走", "a", 67, 68],
  ["s8", "安全", "玩水時，我會⋯？", "需要有大人陪", "自己去玩", "a", 69, 70],
  ["s9", "安全", "騎腳踏車運動時，我會選擇在…？", "騎在腳踏車道", "騎在馬路中間", "a", 71, 72],
  ["s10", "安全", "搭機車出門的時候，我會…？", "戴安全帽", "不戴安全帽", "a", 73, 74],
  ["s11", "安全", "如果看到地上有打火機，我會…？", "玩打火機", "把打火機交給大人", "b", 75, 76],
  ["s12", "安全", "在游泳池邊玩水時，我會…？", "慢慢走", "奔跑", "a", 77, 78],
  ["s13", "安全", "如果發現家裡失火冒煙了，我會…？", "摀住口鼻低姿勢逃生", "站著走動", "a", 79, 80],
  ["s14", "安全", "看到顏色漂亮的小藥丸時，我會…？", "給大人", "拿來吃吃看", "a", 81, 82],
  ["s15", "安全", "如果我不小心受傷流血了，我會…", "受傷了找大人幫忙", "自己躲起來哭", "a", 83, 84]
].map(([id, category, prompt, a, b, correctOption, imgA, imgB], idx) => ({
  id,
  category,
  prompt,
  order: idx % 2 === 0 ? ["a", "b"] : ["b", "a"],
  options: {
    // 這裡使用相對路徑並確保檔名格式正確
    a: { key: "a", label: a, image: `assets/image${imgA}.png` },
    b: { key: "b", label: b, image: `assets/image${imgB}.png` }
  }
}));

const state = {
  index: 0,
  answers: [],
  displayName: ""
};

const els = {
  welcomeView: document.getElementById("welcomeView"),
  quizView: document.getElementById("quizView"),
  doneView: document.getElementById("doneView"),
  displayName: document.getElementById("displayName"),
  startButton: document.getElementById("startButton"),
  categoryLabel: document.getElementById("categoryLabel"),
  questionText: document.getElementById("questionPrompt"),
  optionA: document.getElementById("optionA"),
  optionB: document.getElementById("optionB"),
  imageA: document.getElementById("imageA"),
  imageB: document.getElementById("imageB"),
  labelA: document.getElementById("labelA"),
  labelB: document.getElementById("labelB"),
  audioA: document.getElementById("audioA"),
  audioB: document.getElementById("audioB"),
  replayButton: document.getElementById("replayButton"),
  unknownButton: document.getElementById("unknownButton"),
  restartButton: document.getElementById("restartButton")
};

function start() {
  state.displayName = els.displayName.value.trim() || "匿名幼兒";
  state.index = 0;
  state.answers = [];
  els.welcomeView.classList.add("hidden");
  els.quizView.classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const q = questions[state.index];
  els.categoryLabel.textContent = q.category;
  els.questionText.textContent = q.prompt;

  const optA = q.options[q.order[0]];
  const optB = q.options[q.order[1]];

  els.imageA.src = optA.image;
  els.labelA.textContent = optA.label;
  els.imageB.src = optB.image;
  els.labelB.textContent = optB.label;

  els.optionA.onclick = (e) => {
    if (e.target.closest('.audio-btn')) return;
    answer(optA.key, optA.label);
  };
  els.optionB.onclick = (e) => {
    if (e.target.closest('.audio-btn')) return;
    answer(optB.key, optB.label);
  };

  els.audioA.onclick = () => speak(optA.label);
  els.audioB.onclick = () => speak(optB.label);

  setTimeout(() => {
    speak(`${q.prompt}。${optA.label}。${optB.label}。`);
  }, 100);
}

async function answer(key, label) {
  window.speechSynthesis.cancel();
  state.answers.push({ qId: questions[state.index].id, ans: label });

  if (state.index < questions.length - 1) {
    state.index++;
    renderQuestion();
  } else {
    finish();
  }
}

async function finish() {
  els.quizView.classList.add("hidden");
  els.doneView.classList.remove("hidden");
  speak("太棒了！完成囉！");

  const formData = new FormData();
  formData.append(ENTRY_ID_NAME, state.displayName);
  formData.append(ENTRY_ID_DATA, JSON.stringify(state.answers));

  fetch(`https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`, {
    method: "POST",
    mode: "no-cors",
    body: formData
  });
}

function speak(text) {
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "zh-TW";
  u.rate = 0.8;
  window.speechSynthesis.speak(u);
}

els.startButton.onclick = start;
els.restartButton.onclick = () => window.location.reload();
els.replayButton.onclick = () => renderQuestion();
els.unknownButton.onclick = () => answer("unknown", "不知道");

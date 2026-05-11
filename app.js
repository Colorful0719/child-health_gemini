const questions = [
  ["h1", "衛生", "吃完飯後，我會...?探討刷牙習慣", "飯後刷牙", "吃完直接玩玩具", "a", 1, 2, ["b", "a"]],
  ["h2", "衛生", "睡覺前，我會...?探討清潔習慣", "洗澡", "髒髒的去睡覺", "a", 3, 4, ["a", "b"]],
  ["h3", "衛生", "上廁所後，我會…?探討洗手意識", "上廁所後洗手", "直接跑走", "a", 5, 6, ["b", "a"]],
  ["h4", "衛生", "打噴嚏的時候，我會…?探討衛生習慣", "衛生紙遮口鼻", "直接對著別人", "a", 7, 8, ["a", "b"]],
  ["h5", "衛生", "吃飯的時候，我會用….?探討餐具使用", "乾淨餐具組", "髒髒餐具", "a", 9, 10, ["b", "a"]],
  ["h6", "衛生", "我會讓我的指甲保持…?探討修剪習慣", "剪齊短指甲", "微灰灰指甲", "a", 11, 12, ["a", "b"]]
];

const state = {
  index: 0,
  answers: [],
  id: "",
  displayName: "",
  startedAt: null
};

// --- Google 表單設定區 (請替換為你的 ID) ---
const FORM_ID = "YOUR_GOOGLE_FORM_ID"; 
const ENTRY_ID_NAME = "entry.12345678"; 
const ENTRY_ID_DATA = "entry.87654321"; 
// ---------------------------------------

const els = {
  welcomeView: document.getElementById("welcomeView"),
  quizView: document.getElementById("quizView"),
  doneView: document.getElementById("doneView"),
  displayName: document.getElementById("displayName"),
  startButton: document.getElementById("startButton"),
  openAdminButton: document.getElementById("openAdminButton"),
  categoryLabel: document.getElementById("categoryLabel"),
  questionPrompt: document.getElementById("questionPrompt"),
  optionA: document.getElementById("optionA"),
  optionB: document.getElementById("optionB"),
  imageA: document.getElementById("imageA"),
  imageB: document.getElementById("imageB"),
  labelA: document.getElementById("labelA"),
  labelB: document.getElementById("labelB"),
  replayButton: document.getElementById("replayButton"),
  unknownButton: document.getElementById("unknownButton"),
  restartButton: document.getElementById("restartButton")
};

function start() {
  state.id = `KID-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
  state.displayName = els.displayName.value.trim();
  state.startedAt = new Date().toISOString();
  state.index = 0;
  state.answers = [];
  show(els.quizView);
  renderQuestion();
}

function renderQuestion() {
  const q = questions[state.index];
  const [id, cat, prompt, aLabel, bLabel, _, imgA, imgB, [keyA, keyB]] = q;

  els.categoryLabel.textContent = cat;
  els.questionPrompt.textContent = prompt;
  els.imageA.src = `assets/image${imgA}.png`;
  els.imageB.src = `assets/image${imgB}.png`;
  els.labelA.textContent = aLabel;
  els.labelB.textContent = bLabel;

  els.optionA.onclick = () => answer(keyA, keyA === "a" ? aLabel : bLabel);
  els.optionB.onclick = () => answer(keyB, keyB === "a" ? aLabel : bLabel);

  speak(`${cat}題。${prompt}`);
}

async function answer(key, label) {
  state.answers.push({
    questionId: questions[state.index][0],
    selected: key,
    selectedLabel: label || "未知",
    answeredAt: new Date().toISOString()
  });

  if (state.index < questions.length - 1) {
    state.index++;
    renderQuestion();
  } else {
    await finish();
  }
}

async function finish() {
  const result = {
    id: state.id,
    displayName: state.displayName,
    answers: state.answers,
    startedAt: state.startedAt,
    completedAt: new Date().toISOString()
  };

  show(els.doneView);
  
  const formUrl = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;
  const formData = new FormData();
  formData.append(ENTRY_ID_NAME, result.displayName || result.id);
  formData.append(ENTRY_ID_DATA, JSON.stringify(result.answers));

  try {
    await fetch(formUrl, { method: "POST", mode: "no-cors", body: formData });
  } catch (e) {
    console.error("Sync failed", e);
  }
}

function speak(text) {
  window.speechSynthesis.cancel();
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "zh-TW";
  window.speechSynthesis.speak(msg);
}

function show(el) {
  [els.welcomeView, els.quizView, els.doneView].forEach(v => v.classList.add("hidden"));
  el.classList.remove("hidden");
}

els.startButton.addEventListener("click", start);
els.restartButton.addEventListener("click", () => show(els.welcomeView));
els.openAdminButton.addEventListener("click", () => alert("此版本已改用 Google 表單儲存。"));
const FORM_ID = "1FAIpQLScXP8f1JzFq-kFYnZiLsGDUXQSQDUcE0OieeOMg4Lr6YvZzgA";
const ENTRY_NAME = "entry.111555726";
const ENTRY_DATA = "entry.2065308468";

// [ID, 類別, 題目, 選項A文字, 選項B文字, 正確選項, 圖片A, 圖片B]
const questions = [
  ["h1", "衛生", "吃完飯後，我會...?", "飯後刷牙", "吃完直接玩玩具", "a", 1, 2, ["b", "a"]],
  ["h2", "衛生", "睡覺前，我會...?", "洗澡", "髒髒的去睡覺", "a", 3, 4, ["a", "b"]],
  ["h3", "衛生", "上廁所後，我會…?", "上廁所後洗手", "直接跑走", "a", 5, 6, ["b", "a"]],
  ["h4", "衛生", "打噴嚏的時候，我會…?", "衛生紙遮口鼻", "直接對著別人", "a", 7, 8, ["a", "b"]],
  ["h5", "衛生", "吃飯的時候，我會用….?", "乾淨餐具組", "髒髒餐具", "a", 9, 10, ["b", "a"]],
  ["h6", "衛生", "我會讓我的指甲保持…?", "剪齊短指甲", "微灰灰指甲", "a", 11, 12, ["a", "b"]],
  ["e1", "運動", "我想讓身體更健康，我會⋯？", "跳繩", "看電視", "a", 13, 14, ["a", "b"]],
  ["e2", "運動", "我想讓身體更有力氣，我會⋯？", "拍球", "看書", "a", 15, 16, ["b", "a"]],
  ["e3", "運動", "我想讓身體更健康，我會⋯？", "游泳", "玩電腦", "a", 17, 18, ["a", "b"]],
  ["e4", "運動", "我想讓身體更強壯，我會⋯？", "跑步", "滑平板", "a", 19, 20, ["b", "a"]],
  ["e5", "運動", "我想讓身體更有力量，我會⋯？", "玩攀爬架", "玩電動", "a", 21, 22, ["a", "b"]],
  ["e6", "運動", "我想讓身體更有力氣，我會⋯？", "騎腳踏車", "玩樂高", "a", 23, 24, ["b", "a"]],
  ["n1", "營養", "哪種食物對身體好呢？", "小番茄或切片芭樂", "糖果", "a", 25, 26, ["a", "b"]],
  ["n2", "營養", "哪種食物對身體好呢？", "吃飯", "洋芋片", "a", 27, 28, ["b", "a"]],
  ["n3", "營養", "哪種點心對身體好呢？", "優格", "焦糖布丁", "a", 29, 30, ["a", "b"]],
  ["n4", "營養", "哪種早餐對身體好呢？", "蔬菜三明治", "巧克力厚片", "a", 31, 32, ["b", "a"]],
  ["n5", "營養", "哪種飲料對身體好呢？", "白開水", "珍珠奶茶", "a", 33, 34, ["a", "b"]],
  ["n6", "營養", "哪種食物對身體好呢？", "柳丁", "小熊軟糖", "a", 35, 36, ["b", "a"]],
  ["n7", "營養", "哪種食物對身體好呢？", "水煮蛋", "炸薯條", "a", 37, 38, ["a", "b"]],
  ["n8", "營養", "哪種飲料對身體好呢？", "鮮奶", "汽水", "a", 39, 40, ["b", "a"]],
  ["n9", "營養", "哪種點心對身體好呢？", "蘋果", "蛋糕", "a", 41, 42, ["a", "b"]],
  ["v1", "視力", "想讓眼睛休息的時候，我可以⋯？", "眼睛看遠方", "揉眼睛", "a", 43, 44, ["b", "a"]],
  ["v2", "視力", "看平板時，我的眼睛要⋯？", "和平板保持距離", "緊貼著平板", "a", 45, 46, ["a", "b"]],
  ["v3", "視力", "眼睛看不清楚，我要⋯？", "去看醫生", "瞇著眼睛看", "a", 47, 48, ["b", "a"]],
  ["v4", "視力", "看電視的時候，我要坐在⋯？", "在沙發上", "在電視機正前面", "a", 49, 50, ["a", "b"]],
  ["v5", "視力", "想照顧眼睛，我會吃⋯？", "彩色蔬菜", "彩色糖果", "a", 51, 52, ["b", "a"]],
  ["v6", "視力", "看手機時，我會在⋯？", "亮亮的地方", "暗暗的地方", "a", 53, 54, ["a", "b"]],
  ["s1", "安全", "盪鞦韆時，我要⋯？", "坐著", "站著", "a", 55, 56, ["b", "a"]],
  ["s2", "安全", "玩球時，我會選擇在⋯？", "在公園玩球", "在馬路邊或巷口玩球", "a", 57, 58, ["a", "b"]],
  ["s3", "安全", "想玩玩具時，我會玩⋯？", "玩插座", "玩扮家家酒", "b", 59, 60, ["a", "b"]],
  ["s4", "安全", "在家裡想找事情做的時候，我會…？", "手指伸進電風扇", "看書", "b", 61, 62, ["b", "a"]],
  ["s5", "安全", "準備要過馬路的時候，我會…？", "牽大人的手", "自己衝過去", "a", 63, 64, ["a", "b"]],
  ["s6", "安全", "當我騎腳踏車的時候，我會…？", "雙手握把手", "放手騎車", "a", 65, 66, ["b", "a"]],
  ["s7", "安全", "過馬路要看交通號誌，我會…？", "綠燈亮時走", "紅燈亮時走", "a", 67, 68, ["a", "b"]],
  ["s8", "安全", "玩水時，我會⋯？", "需要有大人陪", "自己去玩", "a", 69, 70, ["b", "a"]],
  ["s9", "安全", "騎腳踏車運動時，我會選擇在…？", "騎在腳踏車道", "騎在馬路中間", "a", 71, 72, ["a", "b"]],
  ["s10", "安全", "搭機車出門的時候，我會…？", "戴安全帽", "不戴安全帽", "a", 73, 74, ["b", "a"]],
  ["s11", "安全", "如果看到地上有打火機，我會…？", "玩打火機", "把打火機交給大人", "b", 75, 76, ["a", "b"]],
  ["s12", "安全", "在游泳池邊玩水時，我會…？", "慢慢走", "奔跑", "a", 77, 78, ["b", "a"]],
  ["s13", "安全", "如果發現家裡失火冒煙了，我會…？", "摀住口鼻低姿勢逃生", "站著走動", "a", 79, 80, ["a", "b"]],
  ["s14", "安全", "看到顏色漂亮的小藥丸時，我會…？", "給大人", "拿來吃吃看", "a", 81, 82, ["b", "a"]],
  ["s15", "安全", "如果我不小心受傷流血了，我會…", "受傷了找大人幫忙", "自己躲起來哭", "a", 83, 84, ["a", "b"]]
].map(([id, category, prompt, a, b, correctOption, imageA, imageB], index) => ({
  id,
  number: index + 1,
  category,
  prompt,
  correctOption,
  order: index % 2 === 0 ? ["a", "b"] : ["b", "a"],
  options: {
    a: { key: "a", label: a, image: `/assets/image${imageA}.png` },
    b: { key: "b", label: b, image: `/assets/image${imageB}.png` }
  }
}));

const state = {
  index: 0,
  sessionId: null,
  userNumber: null,
  adminPassword: "",
  preferredVoice: null,
  speechToken: 0
};

const els = {
  welcomeView: document.querySelector("#welcomeView"),
  quizView: document.querySelector("#quizView"),
  doneView: document.querySelector("#doneView"),
  adminView: document.querySelector("#adminView"),
  displayName: document.querySelector("#displayName"),
  classLevel: document.querySelector("#classLevel"),
  startButton: document.querySelector("#startButton"),
  openAdminButton: document.querySelector("#openAdminButton"),
  categoryLabel: document.querySelector("#categoryLabel"),
  questionText: document.querySelector("#questionText"),
  progressText: document.querySelector("#progressText"),
  progressFill: document.querySelector("#progressFill"),
  userBadge: document.querySelector("#userBadge"),
  optionsGrid: document.querySelector("#optionsGrid"),
  unknownButton: document.querySelector("#unknownButton"),
  replayButton: document.querySelector("#replayButton"),
  doneText: document.querySelector("#doneText"),
  restartButton: document.querySelector("#restartButton"),
  backToSurveyButton: document.querySelector("#backToSurveyButton"),
  adminLogin: document.querySelector("#adminLogin"),
  adminContent: document.querySelector("#adminContent"),
  adminPassword: document.querySelector("#adminPassword"),
  adminLoginButton: document.querySelector("#adminLoginButton"),
  adminLoginMessage: document.querySelector("#adminLoginMessage"),
  overviewStats: document.querySelector("#overviewStats"),
  overviewRows: document.querySelector("#overviewRows"),
  respondentRows: document.querySelector("#respondentRows"),
  detailHead: document.querySelector("#detailHead"),
  detailRows: document.querySelector("#detailRows"),
  refreshAdminButton: document.querySelector("#refreshAdminButton"),
  downloadCsvButton: document.querySelector("#downloadCsvButton")
};

function show(view) {
  [els.welcomeView, els.quizView, els.doneView, els.adminView].forEach(element => element.classList.add("hidden"));
  view.classList.remove("hidden");
}

async function postJson(url, body) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  if (!response.ok) throw new Error(await response.text());
  return response.json();
}

function getPreferredVoice() {
  const voices = window.speechSynthesis.getVoices();
  const preferredNames = [
    "Microsoft HsiaoChen",
    "Microsoft Hanhan",
    "Microsoft YunJhe",
    "Google 國語",
    "Google 中文",
    "Mei-Jia",
    "Ting-Ting",
    "Sin-ji"
  ];
  state.preferredVoice =
    voices.find(voice => preferredNames.some(name => voice.name.includes(name))) ||
    voices.find(voice => voice.lang === "zh-TW") ||
    voices.find(voice => voice.lang.startsWith("zh")) ||
    null;
  return state.preferredVoice;
}

function naturalizeSpeech(text) {
  return text
    .replace(/\.\.\./g, "，")
    .replace(/⋯/g, "，")
    .replace(/…/g, "，")
    .replace(/\.{1}/g, "，")
    .replace(/\?/g, "？")
    .replace(/\.。/g, "。")
    .replace(/\s+/g, "")
    .trim();
}

function questionSpeechParts(question) {
  const labels = question.order.map(key => question.options[key].label);
  return [
    {
      text: `第${question.number}題。${naturalizeSpeech(question.prompt)}　${naturalizeSpeech(labels[0])}。　${naturalizeSpeech(labels[1])}。　不知道。`,
      rate: 0.69,
      pitch: 1.04,
      pause: 0
    }
  ];
}

function speakPart(part, token, onDone) {
  if (token !== state.speechToken) return;
  const utterance = new SpeechSynthesisUtterance(part.text);
  utterance.lang = "zh-TW";
  utterance.voice = getPreferredVoice();
  utterance.rate = part.rate;
  utterance.pitch = part.pitch;
  utterance.volume = 1;
  utterance.onend = () => {
    if (token !== state.speechToken) return;
    window.setTimeout(onDone, part.pause);
  };
  utterance.onerror = clearSpeakingState;
  window.speechSynthesis.speak(utterance);
}

function speakSequence(parts, type = "question") {
  window.speechSynthesis.cancel();
  state.speechToken += 1;
  const token = state.speechToken;
  clearSpeakingState();
  document.querySelector(`[data-speech="${type}"]`)?.classList.add("is-speaking");

  let index = 0;
  const next = () => {
    if (token !== state.speechToken) return;
    if (index >= parts.length) {
      clearSpeakingState();
      return;
    }
    speakPart(parts[index], token, () => {
      index += 1;
      next();
    });
  };
  next();
}

function speak(text, type = "question") {
  const cleanText = naturalizeSpeech(text);
  if (type === "option") {
    speakSequence([{ text: `${cleanText}。`, rate: 0.68, pitch: 1.05, pause: 0 }], type);
    return;
  }
  speakSequence([{ text: cleanText, rate: 0.69, pitch: 1.04, pause: 0 }], type);
}

function clearSpeakingState() {
  document.querySelectorAll(".is-speaking").forEach(element => element.classList.remove("is-speaking"));
}

function renderQuestion() {
  const question = questions[state.index];
  els.categoryLabel.textContent = question.category;
  els.questionText.textContent = `第 ${question.number} 題：${question.prompt}`;
  els.progressText.textContent = `${question.number} / ${questions.length}`;
  els.progressFill.style.width = `${(question.number / questions.length) * 100}%`;
  els.optionsGrid.innerHTML = "";

  question.order.forEach(key => {
    const option = question.options[key];
    const card = document.createElement("article");
    card.className = "picture-option";
    card.innerHTML = `
      <button class="image-answer" type="button" data-option="${option.key}" aria-label="${option.label}">
        <span class="image-frame"><img src="${option.image}" alt="${option.label}"></span>
      </button>
      <div class="option-caption">
        <span class="option-label">${option.label}</span>
        <button class="option-audio" type="button" data-speech="option" aria-label="播放 ${option.label}">
          <span aria-hidden="true">▶</span>
        </button>
      </div>
    `;
    card.querySelector(".image-answer").addEventListener("click", () => answer(option.key));
    card.querySelector(".option-audio").addEventListener("click", () => speak(option.label, "option"));
    els.optionsGrid.appendChild(card);
  });

  setTimeout(() => speakSequence(questionSpeechParts(question)), 180);
}

async function answer(selected) {
  const question = questions[state.index];
  window.speechSynthesis.cancel();
  state.speechToken += 1;
  clearSpeakingState();
  const option = question.options[selected];
  await postJson("/api/answer", {
    sessionId: state.sessionId,
    questionId: question.id,
    questionNumber: question.number,
    category: question.category,
    prompt: question.prompt,
    selected,
    selectedLabel: selected === "unknown" ? "不知道" : option.label
  });

  state.index += 1;
  if (state.index >= questions.length) {
    await postJson("/api/complete", { sessionId: state.sessionId });
    els.doneText.textContent = `${state.sessionId} 的資料已記錄。`;
    show(els.doneView);
    return;
  }
  renderQuestion();
}

async function start() {
  els.startButton.disabled = true;
  try {
    const session = await postJson("/api/session", {
      displayName: els.displayName.value.trim(),
      classLevel: els.classLevel.value
    });
    state.sessionId = session.id;
    state.userNumber = session.userNumber;
    state.index = 0;
    els.userBadge.textContent = session.id;
    show(els.quizView);
    renderQuestion();
  } finally {
    els.startButton.disabled = false;
  }
}

function openAdmin() {
  window.speechSynthesis.cancel();
  state.speechToken += 1;
  clearSpeakingState();
  show(els.adminView);
}

async function loginAdmin() {
  const password = els.adminPassword.value.trim();
  els.adminLoginMessage.textContent = "";
  try {
    await fetchAdminStore(password);
    state.adminPassword = password;
    els.adminLogin.classList.add("hidden");
    els.adminContent.classList.remove("hidden");
    els.refreshAdminButton.classList.remove("hidden");
    els.downloadCsvButton.classList.remove("hidden");
    await loadAdmin();
  } catch (error) {
    state.adminPassword = "";
    els.adminLoginMessage.textContent = "密碼錯誤，請再試一次。";
  }
}

async function fetchAdminStore(password = state.adminPassword) {
  const response = await fetch(`/api/results?password=${encodeURIComponent(password)}`);
  if (!response.ok) throw new Error("admin auth failed");
  return response.json();
}

async function loadAdmin() {
  if (!state.adminPassword) return;
  const store = await fetchAdminStore();
  renderOverview(store);
  renderRespondents(store);
  renderDetailMatrix(store);
}

function renderOverview(store) {
  const total = store.sessions.length;
  const completed = store.sessions.filter(session => session.completedAt).length;
  const inProgress = total - completed;
  const totalAnswers = store.sessions.reduce((sum, session) => sum + session.answers.length, 0);

  els.overviewStats.innerHTML = [
    ["填答者", total],
    ["已完成", completed],
    ["未完成", inProgress],
    ["總作答數", totalAnswers],
    ["大班", store.sessions.filter(session => session.classLevel === "大班").length],
    ["中班", store.sessions.filter(session => session.classLevel === "中班").length],
    ["小班", store.sessions.filter(session => session.classLevel === "小班").length]
  ].map(([label, value]) => `
    <div class="stat-card">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");

  els.overviewRows.innerHTML = questions.map(question => {
    const counts = new Map();
    store.sessions.forEach(session => {
      const answer = session.answers.find(item => item.questionId === question.id);
      if (!answer) return;
      counts.set(answer.selectedLabel, (counts.get(answer.selectedLabel) || 0) + 1);
    });
    const summary = counts.size
      ? Array.from(counts.entries()).map(([label, count]) => `${escapeHtml(label)}：${count}`).join("、")
      : "尚無填答";
    return `
      <tr>
        <td>${question.number}</td>
        <td>${escapeHtml(question.category)}</td>
        <td>${escapeHtml(question.prompt)}</td>
        <td>${summary}</td>
      </tr>
    `;
  }).join("");
}

function renderRespondents(store) {
  if (!store.sessions.length) {
    els.respondentRows.innerHTML = `<tr><td colspan="7">尚無資料</td></tr>`;
    return;
  }

  els.respondentRows.innerHTML = store.sessions.slice().reverse().map(session => `
    <tr>
      <td>${session.id}</td>
      <td>${escapeHtml(session.displayName || "未填")}</td>
      <td>${escapeHtml(session.classLevel || "未填")}</td>
      <td>${formatTime(session.startedAt)}</td>
      <td>${session.completedAt ? formatTime(session.completedAt) : "未完成"}</td>
      <td>${session.answers.length}</td>
      <td><button class="danger-action compact" type="button" data-delete-session="${session.id}">刪除</button></td>
    </tr>
  `).join("");

  els.respondentRows.querySelectorAll("[data-delete-session]").forEach(button => {
    button.addEventListener("click", () => deleteSession(button.dataset.deleteSession));
  });
}

function renderDetailMatrix(store) {
  if (!store.sessions.length) {
    els.detailHead.innerHTML = "";
    els.detailRows.innerHTML = `<tr><td>尚無資料</td></tr>`;
    return;
  }

  const sessions = store.sessions.slice().sort((a, b) => a.userNumber - b.userNumber);
  els.detailHead.innerHTML = `
    <tr>
      <th>題號</th>
      <th>主題</th>
      <th>題目</th>
      ${sessions.map(session => `<th>${session.id}<br>${escapeHtml(session.displayName || "未填")}<br>${escapeHtml(session.classLevel || "未填")}</th>`).join("")}
    </tr>
  `;

  els.detailRows.innerHTML = questions.map(question => `
    <tr>
      <td>${question.number}</td>
      <td>${escapeHtml(question.category)}</td>
      <td>${escapeHtml(question.prompt)}</td>
      ${sessions.map(session => {
        const answer = session.answers.find(item => item.questionId === question.id);
        return `<td>${answer ? escapeHtml(answer.selectedLabel) : ""}</td>`;
      }).join("")}
    </tr>
  `).join("");
}

async function deleteSession(sessionId) {
  const confirmed = window.confirm(`確定要刪除 ${sessionId} 的填答紀錄嗎？`);
  if (!confirmed) return;
  const response = await fetch(`/api/session/${encodeURIComponent(sessionId)}?password=${encodeURIComponent(state.adminPassword)}`, {
    method: "DELETE"
  });
  if (!response.ok) {
    alert("刪除失敗，請重新登入後台再試一次。");
    return;
  }
  await loadAdmin();
}

function downloadCsv() {
  if (!state.adminPassword) return;
  window.location.href = `/api/results.csv?password=${encodeURIComponent(state.adminPassword)}`;
}

function formatTime(value) {
  return new Intl.DateTimeFormat("zh-TW", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

els.startButton.addEventListener("click", start);
els.openAdminButton.addEventListener("click", openAdmin);
els.displayName.addEventListener("keydown", event => {
  if (event.key === "Enter") start();
});
els.unknownButton.addEventListener("click", () => answer("unknown"));
els.replayButton.addEventListener("click", () => speakSequence(questionSpeechParts(questions[state.index])));
els.restartButton.addEventListener("click", () => {
  window.speechSynthesis.cancel();
  state.speechToken += 1;
  clearSpeakingState();
  els.displayName.value = "";
  els.classLevel.value = "大班";
  show(els.welcomeView);
});
els.backToSurveyButton.addEventListener("click", () => show(els.welcomeView));
els.adminLoginButton.addEventListener("click", loginAdmin);
els.adminPassword.addEventListener("keydown", event => {
  if (event.key === "Enter") loginAdmin();
});
els.refreshAdminButton.addEventListener("click", loadAdmin);
els.downloadCsvButton.addEventListener("click", downloadCsv);

if ("speechSynthesis" in window) {
  getPreferredVoice();
  window.speechSynthesis.onvoiceschanged = getPreferredVoice;
}

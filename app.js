const FORM_ID = "1FAIpQLScXP8f1JzFq-kFYnZiLsGDUXQSQDUcE0OieeOMg4Lr6YvZzgA";
const ENTRY_NAME = "entry.111555726";
const ENTRY_DATA = "entry.2065308468";

const questions = [
    ["h1", "衛生", "吃完飯後，我會...?", "飯後刷牙", "吃完直接玩玩具", "a", 1, 2],
    ["h2", "衛生", "睡覺前，我會...?", "洗澡", "髒髒的去睡覺", "a", 3, 4],
    ["h3", "衛生", "上廁所後，我會…?", "上廁所後洗手", "直接跑走", "a", 5, 6],
    ["h4", "衛生", "打噴嚏的時候，我會…?", "衛生紙遮口鼻", "直接對著別人", "a", 7, 8],
    ["h5", "衛生", "吃飯的時候，我會用….?", "乾淨餐具組", "髒髒餐具", "a", 9, 10],
    ["h6", "衛生", "我會讓我的指甲保持…?", "剪齊短指甲", "灰灰長指甲", "a", 11, 12],
    ["e1", "運動", "我想讓身體更健康，我會⋯？", "玩跳繩", "看電視", "a", 13, 14],
    ["e2", "運動", "我想讓身體更有力氣，我會⋯？", "拍球", "看書", "a", 15, 16],
    ["e3", "運動", "吃完晚餐後，我會⋯？", "散步", "躺著不動", "a", 17, 18],
    ["e4", "運動", "週末放假時，我會去⋯？", "公園玩耍", "一直玩手機", "a", 19, 20],
    ["e5", "運動", "我會和家人一起去⋯？", "爬山", "在家睡覺", "a", 21, 22],
    ["e6", "運動", "體能課時，我會⋯？", "努力練習", "躲在旁邊休息", "a", 23, 24],
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
];

let state = { index: 0, answers: [], user: "" };

function speak(t) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(t);
    u.lang = "zh-TW"; u.rate = 0.9;
    window.speechSynthesis.speak(u);
}

function render() {
    const q = questions[state.index];
    document.getElementById("currentNum").innerText = state.index + 1;
    document.getElementById("questionPrompt").innerText = q[2];
    document.getElementById("imageA").src = "assets/image" + q[6] + ".png";
    document.getElementById("imageB").src = "assets/image" + q[7] + ".png";
    document.getElementById("labelA").innerText = q[3];
    document.getElementById("labelB").innerText = q[4];
    document.getElementById("prevButton").style.display = (state.index > 0) ? "block" : "none";
    setTimeout(() => speak(q[2] + " " + q[3] + " " + q[4]), 300);
}

function handle(choice) {
    const q = questions[state.index];
    const correct = (q[5] === 'a') ? q[3] : q[4];
    state.answers.push(choice === correct ? 1 : 0);
    if (state.index < questions.length - 1) {
        state.index++; render();
    } else {
        submit();
    }
}

async function submit() {
    document.getElementById("quizView").classList.add("hidden");
    document.getElementById("doneView").classList.remove("hidden");
    
    let scores = { h:0, e:0, n:0, v:0, s:0, total:0 };
    const details = state.answers.map((s, i) => {
        const cat = questions[i][0][0];
        if (s === 1) { scores.total++; scores[cat]++; }
        return s;
    });
    const summary = [...details, scores.h, scores.e, scores.n, scores.v, scores.s, scores.total].join(",");
    const fd = new FormData();
    fd.append(ENTRY_NAME, state.user);
    fd.append(ENTRY_DATA, summary);
    await fetch(`https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`, { method:"POST", mode:"no-cors", body:fd });
}

window.onload = () => {
    document.getElementById("startButton").onclick = () => {
        const val = document.getElementById("userNameInput").value.trim();
        if (!val) return alert("請輸入編碼");
        state.user = val;
        document.getElementById("welcomeView").classList.add("hidden");
        document.getElementById("quizView").classList.remove("hidden");
        render();
    };
    document.getElementById("optionA").onclick = () => handle(document.getElementById("labelA").innerText);
    document.getElementById("optionB").onclick = () => handle(document.getElementById("labelB").innerText);
    document.getElementById("prevButton").onclick = () => { state.index--; state.answers.pop(); render(); };
    document.getElementById("unknownButton").onclick = () => handle("不知道");
};

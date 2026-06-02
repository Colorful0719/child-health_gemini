const FORM_ID = "1FAIpQLScXP8f1JzFq-kFYnZiLsGDUXQSQDUcE0OieeOMg4Lr6YvZzgA";
const ENTRY_NAME = "entry.111555726";
const ENTRY_DATA = "entry.2065308468";

// 練習題資料庫
const practiceQuestions = [
  ["p1", "練習", "練習1. 玩玩具玩到一半，突然好想上廁所的時候，我會...？", "先放下玩具，跑去上廁所", "繼續玩，憋著不去上廁所", "a", "p1a.png", "p1b.png"],
  ["p2", "練習", "練習2. 剛從外面玩回來，口很渴的時候，我會...？", "先洗手，再喝水", "杯子拿起來就直接灌水", "a", "p2a.png", "p2b.png"],
  ["p3", "練習", "練習3. 在幼兒園上課時，如果覺得肚子痛痛的時候，我會...？", "舉手告訴老師", "忍耐不說，繼續坐在位子上", "a", "p3a.png", "p3b.png"]
];

// 正式題目庫（共 42 題）
const questions = [
  ["h1", "衛生", "1. 吃完飯後，我會...?", "玩玩具", "刷牙", "b", 2, 1],
  ["h2", "衛生", "2. 睡覺前，我會...?", "洗澡", "髒髒的去睡覺", "a", 3, 4],
  ["h3", "衛生", "3. 上廁所後，我會…?", "跑去玩", "洗手", "b", 6, 5],
  ["h4", "衛生", "4. 打噴嚏的時候，我會…?", "遮口鼻", "直接打噴嚏", "a", 7, 8],
  ["h5", "衛生", "5. 吃飯的時候，我會用….?", "髒髒餐具組", "乾淨餐具組", "b", 10, 9],
  ["h6", "衛生", "6. 我會讓我的指甲保持…?", "乾淨短指甲", "髒髒長指甲", "a", 11, 12],
  ["e1", "運動", "7. 我想讓身體更健康，我會⋯？", "看電視", "玩跳繩", "b", 14, 13],
  ["e2", "運動", "8. 我想讓身體更有力氣，我會⋯？", "拍球", "看書", "a", 15, 16],
  ["e3", "運動", "9. 我想讓身體更健康，我會⋯？", "游泳", "玩電腦", "a", 17, 18],
  ["e4", "運動", "10. 我想讓身體更強壯，我會⋯？", "跑步", "滑平板", "a", 19, 20],
  ["e5", "運動", "11. 我想讓身體更有力量，我會⋯？", "玩攀爬架", "玩電動", "a", 21, 22],
  ["e6", "運動", "12. 我想讓身體更有力氣，我會⋯？", "騎腳踏車", "玩樂高", "a", 23, 24],
  ["n1", "營養", "13. 哪種食物對身體好呢？", "糖果", "小番茄或切片芭樂", "b", 26, 25],
  ["n2", "營養", "14. 哪種食物對身體好呢？", "吃飯", "洋芋片", "a", 27, 28],
  ["n3", "營養", "15. 哪種點心對身體好呢？", "焦糖布丁", "優格", "b", 30, 29],
  ["n4", "營養", "16. 哪種早餐對身體好呢？", "蔬菜三明治", "巧克力厚片", "a", 31, 32],
  ["n5", "營養", "17. 哪種飲料對身體好呢？", "珍珠奶茶", "白開水", "b", 34, 33],
  ["n6", "營養", "18. 哪種食物對身體好呢？", "柳丁", "小熊軟糖", "a", 35, 36],
  ["n7", "營養", "19. 哪種食物對身體好呢？", "炸薯條", "水煮蛋", "b", 38, 37],
  ["n8", "營養", "20. 哪種飲料對身體好呢？", "鮮奶", "汽水", "a", 39, 40],
  ["n9", "營養", "21. 哪種點心對身體好呢？", "蛋糕", "蘋果", "b", 42, 41],
  ["v1", "視力", "22. 想讓眼睛休息的時候，我可以⋯？", "眼睛看遠方", "揉眼睛", "a", 43, 44],
  ["v2", "視力", "23. 看平板時，我的眼睛要⋯？", "緊貼著平板", "和平板保持距離", "b", 46, 45],
  ["v3", "視力", "24. 眼睛看不清楚，我要⋯？", "去看醫生", "瞇著眼睛看", "a", 47, 48],
  ["v4", "視力", "25. 看電視的時候，我要坐在⋯？", "在電視機正前面", "在沙發上", "b", 50, 49],
  ["v5", "視力", "26. 想照顧眼睛，我會吃⋯？", "彩色蔬菜", "彩色糖果", "a", 51, 52],
  ["v6", "視力", "27. 看手機時，我會在⋯？", "暗暗的地方", "亮亮的地方", "b", 54, 53],
  ["s1", "安全", "28. 盪鞦韆時，漸我要⋯？", "坐著", "站著", "a", 55, 56],
  ["s2", "安全", "29. 玩球時，我會選擇在⋯？", "在馬路邊或巷口玩球", "在公園玩球", "b", 58, 57],
  ["s3", "安全", "30. 想玩玩具時，我會玩⋯？", "玩插座", "玩扮家家酒", "b", 59, 60],
  ["s4", "安全", "31. 在家裡想找事情做的時候，我會…？", "手指伸進電風扇", "看書", "b", 61, 62],
  ["s5", "安全", "32. 準備要過馬路的時候，我會…？", "牽大人的手", "自己衝過去", "a", 63, 64],
  ["s6", "安全", "33. 當我騎腳踏車的時候，我會…？", "放手騎車", "雙手握把手", "b", 66, 65],
  ["s7", "安全", "34. 過馬路要看交通號誌，我會…？", "綠燈亮時走", "紅燈亮時走", "a", 67, 68],
  ["s8", "安全", "35. 玩水時，我會⋯？", "自己去玩", "需要有大人陪", "b", 70, 69],
  ["s9", "安全", "36. 騎腳踏車運動時，我會選擇在…？", "騎在腳踏車道", "騎在馬路中間", "a", 71, 72],
  ["s10", "安全", "37. 搭機車出門的時候，我會…？", "不戴安全帽", "戴安全帽", "b", 74, 73],
  ["s11", "安全", "38. 如果看到地上有打火機，我會…？", "玩打火機", "把打火機交給大人", "b", 75, 76],
  ["s12", "安全", "39. 在游泳池邊玩水時，我會…？", "慢慢走", "奔跑", "a", 77, 78],
  ["s13", "安全", "40. 如果發現家裡失火冒煙了，我會…？", "站著走動", "摀住口鼻低姿勢逃生", "b", 80, 79],
  ["s14", "安全", "41. 看到顏色漂亮的小藥丸時，我會…？", "給大人", "拿來吃吃看", "a", 81, 82],
  ["s15", "安全", "42. 如果我不小心受傷流血了，我會…", "自己躲起來哭", "找大人幫忙", "b", 84, 83]
];

let state = { isPractice: true, pIndex: 0, index: 0, answers: [], user: "", classLevel: "", startTime: "", endTime: "" };

function getCurrentTimeFormatted() {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const secs = String(now.getSeconds()).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

function speakText(text, callback) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "zh-TW";
    u.rate = 0.85; 
    if (callback) u.onend = callback;
    window.speechSynthesis.speak(u);
}

function playGuidance() {
    window.speechSynthesis.cancel();
    const q = state.isPractice ? practiceQuestions[state.pIndex] : questions[state.index];
    const questionTextText = q[2].replace(/^\d+\.\s*/, "").replace(/^練習\d+\.\s*/, "").replace(/[…？?。]/g, "");
    
    speakText(questionTextText, () => {
        setTimeout(() => {
            speakText(q[3], () => {
                setTimeout(() => {
                    speakText(q[4]);
                }, 600);
            });
        }, 600);
    });
}

function render() {
    const q = state.isPractice ? practiceQuestions[state.pIndex] : questions[state.index];
    
    const headerSpan = document.getElementById("currentNum").parentNode;
    if (state.isPractice) {
        headerSpan.innerHTML = `<span id="currentNum">練習 ${state.pIndex + 1} / ${practiceQuestions.length}</span>`;
    } else {
        headerSpan.innerHTML = `<span id="currentNum">第 ${state.index + 1} / ${questions.length} 題</span>`;
    }
    
    document.getElementById("questionPrompt").innerText = q[2];
    
    // 🛠️ 核心修復：精確切分練習題與正式題的圖片網址路徑
    if (state.isPractice) {
        document.getElementById("imageA").src = "assets/" + q[6] + ".png";
        document.getElementById("imageB").src = "assets/" + q[7] + ".png";
    } else {
        document.getElementById("imageA").src = "assets/image" + q[6] + ".png";
        document.getElementById("imageB").src = "assets/image" + q[7] + ".png";
    }
    
    document.getElementById("labelA").innerText = q[3];
    document.getElementById("labelB").innerText = q[4];
    
    if (state.isPractice && state.pIndex === 0) {
        document.getElementById("prevButton").style.display = "none";
    } else {
        document.getElementById("prevButton").style.display = "inline-block";
    }
    
    setTimeout(playGuidance, 500);
}

function handle(choice) {
    window.speechSynthesis.cancel();
    
    if (state.isPractice) {
        if (state.pIndex < practiceQuestions.length - 1) {
            state.pIndex++; 
            render();
        } else {
            state.isPractice = false;
            speakText("練習結束囉！現在我們要開始正式寫題目了喔！", () => {
                render();
            });
        }
    } else {
        const q = questions[state.index];
        let recordValue;
        if (choice === "不知道") {
            recordValue = 3; 
        } else {
            const correctText = (q[5] === 'a') ? q[3] : q[4];
            recordValue = (choice === correctText) ? 1 : 0;
        }
        
        state.answers.push(recordValue);
        
        if (state.index < questions.length - 1) {
            state.index++; 
            render();
        } else {
            state.endTime = getCurrentTimeFormatted();
            submit();
        }
    }
}

async function submit() {
    document.getElementById("quizView").classList.add("hidden");
    document.getElementById("doneView").classList.remove("hidden");
    speakText("完成囉，謝謝你的幫忙");
    
    let scores = { h:0, e:0, n:0, v:0, s:0, total:0 };
    const details = state.answers.map((val, i) => {
        const cat = questions[i][0][0];
        if (val === 1) { scores.total++; scores[cat]++; }
        return val;
    });
    
    const summary = [
        ...details, 
        scores.h, scores.e, scores.n, scores.v, scores.s, scores.total,
        state.startTime, 
        state.endTime
    ].join(",");
    
    let currentClass = state.classLevel || document.getElementById("classLevelSelect").value || "";
    let classCode = "0"; 
    if (currentClass === "小班") classCode = "1";
    else if (currentClass === "中班") classCode = "2";
    else if (currentClass === "大班") classCode = "3";
    
    let finalUser = state.user || document.getElementById("userNameInput").value.trim() || "未知編碼";
    const finalIdentity = `${finalUser}_${classCode}`;
    
    const fd = new FormData();
    fd.append(ENTRY_NAME, finalIdentity);
    fd.append(ENTRY_DATA, summary);
    await fetch(`https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`, { method:"POST", mode:"no-cors", body:fd });
}

window.onload = () => {
    document.getElementById("startButton").onclick = () => {
        const lv = document.getElementById("classLevelSelect").value;
        const val = document.getElementById("userNameInput").value.trim();
        
        if (!lv) return alert("請選擇幼兒的級別（大班/中班/小班）");
        if (!val) return alert("請輸入受試者編碼");
        
        state.classLevel = lv;
        state.user = val;
        state.isPractice = true;
        state.pIndex = 0;
        state.index = 0;
        state.answers = [];
        state.startTime = getCurrentTimeFormatted();
        
        document.getElementById("welcomeView").classList.add("hidden");
        document.getElementById("quizView").classList.remove("hidden");
        render();
    };
    
    document.getElementById("optionA").onclick = (e) => {
        if(e.target.id === "btnAudioA") return;
        handle(document.getElementById("labelA").innerText);
    };
    document.getElementById("optionB").onclick = (e) => {
        if(e.target.id === "btnAudioB") return;
        handle(document.getElementById("labelB").innerText);
    };
    
    document.getElementById("btnAudioA").onclick = (e) => {
        e.stopPropagation();
        window.speechSynthesis.cancel();
        speakText(document.getElementById("labelA").innerText);
    };
    document.getElementById("btnAudioB").onclick = (e) => {
        e.stopPropagation();
        window.speechSynthesis.cancel();
        speakText(document.getElementById("labelB").innerText);
    };
    
    document.getElementById("prevButton").onclick = () => {
        if (state.isPractice) {
            if (state.pIndex > 0) { state.pIndex--; render(); }
        } else {
            if (state.index > 0) {
                state.index--; 
                state.answers.pop(); 
                render(); 
            } else {
                state.isPractice = true;
                state.pIndex = practiceQuestions.length - 1;
                render();
            }
        }
    };

    document.getElementById("nextButton").onclick = () => {
        handle("不知道");
    };

    document.getElementById("replayButton").onclick = () => playGuidance();
    document.getElementById("unknownButton").onclick = () => handle("不知道");
};

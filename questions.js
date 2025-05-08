const allQuestions = [
    // --- カテゴリ: 動詞の語法 (20問) ---
    {
        category: "動詞の語法",
        question: "The price of vegetables has ( ) sharply this month.",
        options: ["raised", "risen", "arisen", "aroused"],
        answer: "risen",
        translation: "野菜の価格が今月、急激に（上がった）。",
        explanation: "'rise' (自動詞: 上がる) の過去分詞形 'risen' を使います。'raise' は他動詞で「～を上げる」。"
    },
    {
        category: "動詞の語法",
        question: "If you have any questions, please ( ) your hand.",
        options: ["rise", "raise", "arise", "arouse"],
        answer: "raise",
        translation: "もし質問があれば、手を（挙げてください）。",
        explanation: "'raise' (他動詞: ～を上げる) を使います。'rise' は自動詞で「上がる」。"
    },
    // ... (他の「動詞の語法」18問に translation と explanation を追加) ...
    {
        category: "動詞の語法",
        question: "They decided to ( ) a new marketing strategy.",
        options: ["adopt", "adapt", "adept", "accept"],
        answer: "adopt",
        translation: "彼らは新しいマーケティング戦略を（採用する）ことに決めた。",
        explanation: "'adopt' は「～を採用する、取り入れる」という意味です。'adapt' は「～を適合させる」。"
    },


    // --- カテゴリ: 時制 (20問) ---
    {
        category: "時制",
        question: "She ( ) a famous pianist when she grows up.",
        options: ["becomes", "will become", "is becoming", "has become"],
        answer: "will become",
        translation: "彼女は大人になったら有名なピアニストに（なるだろう）。",
        explanation: "未来の出来事を表すので 'will become' を使います。"
    },
    {
        category: "時制",
        question: "I ( ) my homework before dinner tonight.",
        options: ["finish", "will finish", "will have finished", "am finishing"],
        answer: "will have finished",
        translation: "私は今夜夕食までに宿題を（終えているだろう）。",
        explanation: "未来のある時点までに動作が完了していることを示す未来完了形 'will have finished' を使います。"
    },
    // ... (他の「時制」18問に translation と explanation を追加) ...
    {
        category: "時制",
        question: "He said he ( ) the book the previous week.",
        options: ["reads", "read", "has read", "had read"],
        answer: "had read",
        translation: "彼は前の週にその本を（読んだ）と言った。",
        explanation: "間接話法で、主節の動詞 'said' (過去形) より前の出来事を表すため、過去完了形 'had read' を使います（時制の一致）。"
    },

    // --- カテゴリ: 助動詞 (20問) ---
    {
        category: "助動詞",
        question: "You ( ) finish this report by 5 PM. It's an order.",
        options: ["can", "may", "must", "might"],
        answer: "must",
        translation: "あなたはこの報告書を午後5時までに（終えなければならない）。これは命令だ。",
        explanation: "'must' は「～しなければならない」という強い義務や命令を表します。"
    },
    {
        category: "助動詞",
        question: "It ( ) rain later today, so take an umbrella just in case.",
        options: ["must", "should", "may", "will"],
        answer: "may",
        translation: "今日は後で雨が（降るかもしれない）ので、念のため傘を持っていきなさい。",
        explanation: "'may' は「～かもしれない」という可能性・推量を表します。"
    },
    // ... (他の「助動詞」18問に translation と explanation を追加) ...
    {
        category: "助動詞",
        question: "( ) we dance?",
        options: ["Will", "Would", "Can", "Shall"],
        answer: "Shall",
        translation: "（一緒に踊りませんか）？",
        explanation: "'Shall we...?' は「（一緒に）～しませんか？」という提案や誘いを表す表現です。"
    }
];
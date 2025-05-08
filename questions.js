const allQuestions = [
    // --- カテゴリ: 動詞の語法 (20問) ---
    {
        category: "動詞の語法",
        question: "The price of vegetables has ( ) sharply this month.",
        options: ["raised", "risen", "arisen", "aroused"],
        answer: "risen",
        translation: "野菜の価格が今月、急激に（上がった）。",
        explanation: "'rise' (自動詞: 上がる、昇る) の過去分詞形 'risen' を使います。'raise' は他動詞で「～を上げる」。'arise' は「（問題などが）生じる」。'arouse' は「（感情などを）引き起こす」。"
    },
    {
        category: "動詞の語法",
        question: "If you have any questions, please ( ) your hand.",
        options: ["rise", "raise", "arise", "arouse"],
        answer: "raise",
        translation: "もし質問があれば、手を（挙げてください）。",
        explanation: "'raise' (他動詞: ～を上げる) を使います。目的語 'your hand' があるため他動詞が必要です。"
    },
    {
        category: "動詞の語法",
        question: "The old cat was ( ) peacefully by the fireplace.",
        options: ["laying", "lying", "lieing", "laiding"],
        answer: "lying",
        translation: "その老猫は暖炉のそばで静かに（横たわって）いた。",
        explanation: "'lie' (自動詞: 横たわる) の現在分詞形 'lying' を使います。'lay' (他動詞: ～を横たえる) の現在分詞は 'laying'。'lie' (嘘をつく) の現在分詞も 'lying' ですが文脈が異なります。"
    },
    {
        category: "動詞の語法",
        question: "She carefully ( ) the baby on the bed.",
        options: ["lay", "lied", "laid", "lain"],
        answer: "laid",
        translation: "彼女は慎重に赤ちゃんをベッドに（寝かせた）。",
        explanation: "'lay' (他動詞: ～を横たえる、置く) の過去形 'laid' を使います。目的語 'the baby' があります。'lie' (自動詞: 横たわる) の過去形は 'lay'、過去分詞は 'lain'。"
    },
    {
        category: "動詞の語法",
        question: "Several important issues ( ) during the meeting.",
        options: ["raised", "rose", "arose", "aroused"],
        answer: "arose",
        translation: "会議中にいくつかの重要な問題が（生じた）。",
        explanation: "'arise' (自動詞: （問題・困難などが）生じる、起こる) の過去形 'arose' を使います。"
    },
    {
        category: "動詞の語法",
        question: "His strange behavior ( ) suspicion among his colleagues.",
        options: ["raised", "rose", "arisen", "aroused"],
        answer: "aroused",
        translation: "彼の奇妙な振る舞いは同僚たちの間で疑念を（引き起こした）。",
        explanation: "'arouse' (他動詞: （感情・興味・疑念などを）引き起こす、刺激する) の過去形 'aroused' を使います。"
    },
    {
        category: "動詞の語法",
        question: "He ( ) to his parents about where he had been.",
        options: ["lay", "lied", "laid", "lain"],
        answer: "lied",
        translation: "彼はどこにいたのかについて両親に（嘘をついた）。",
        explanation: "'lie' (自動詞: 嘘をつく) の過去形 'lied' を使います。'lie to A' で「Aに嘘をつく」。"
    },
    {
        category: "動詞の語法",
        question: "The company's decision will ( ) all its employees.",
        options: ["affect", "effect", "infect", "defect"],
        answer: "affect",
        translation: "その会社の決定は全従業員に（影響を与える）だろう。",
        explanation: "'affect' (動詞: ～に影響を与える) を使います。'effect' は主に名詞で「効果、影響」。動詞としては「（結果）をもたらす」の意味もありますが、文脈に合いません。"
    },
    {
        category: "動詞の語法",
        question: "The new policy had a significant ( ) on the economy.",
        options: ["affect", "effect", "afflict", "reflect"],
        answer: "effect",
        translation: "新しい政策は経済に重大な（影響）を与えた。",
        explanation: "冠詞 'a' と形容詞 'significant' の後なので名詞が必要です。'effect' (名詞: 効果、影響) を使います。'have an effect on A' で「Aに影響を与える」。"
    },
    {
        category: "動詞の語法",
        question: "I ( ) him to join our team, but he declined.",
        options: ["persuaded", "dissuaded", "suggested", "insisted"],
        answer: "persuaded",
        translation: "私は彼に私たちのチームに加わるよう（説得した）が、彼は断った。",
        explanation: "'persuade O to do' (Oを説得して～させる) の形を取ります。'dissuade O from -ing' (Oを説得して～するのをやめさせる)。'suggest' や 'insist' は 'that節' を取ることが多いです。"
    },
    {
        category: "動詞の語法",
        question: "The doctor ( ) me to get more exercise.",
        options: ["advised", "suggested", "hoped", "explained"],
        answer: "advised",
        translation: "医者は私にもっと運動するように（忠告した）。",
        explanation: "'advise O to do' (Oに～するように忠告する) の形を取ります。'suggest O to do' という形は通常取りません ('suggest that S (should) do' または 'suggest -ing')。"
    },
    {
        category: "動詞の語法",
        question: "She ( ) that I take a break.",
        options: ["advised", "suggested", "wanted", "ordered"],
        answer: "suggested",
        translation: "彼女は私が休憩を取ることを（提案した）。",
        explanation: "'suggest that S (should) V原形' (Sが～することを提案する) の形を取ります。that節内の動詞 'take' が原形である点に注目。"
    },
    {
        category: "動詞の語法",
        question: "Can you ( ) me your pen for a moment?",
        options: ["borrow", "lend", "rent", "lease"],
        answer: "lend",
        translation: "少しの間、私にあなたのペンを（貸して）くれませんか？",
        explanation: "'lend O1 O2' (O1にO2を貸す) または 'lend O2 to O1' の形を取ります。'borrow' は「（無料で）借りる」で、'borrow O from A' (AからOを借りる) の形を取ります。"
    },
    {
        category: "動詞の語法",
        question: "I need to ( ) a book from the library.",
        options: ["borrow", "lend", "provide", "offer"],
        answer: "borrow",
        translation: "私は図書館から本を（借りる）必要がある。",
        explanation: "'borrow O from A' (AからOを（無料で）借りる) の形を取ります。"
    },
    {
        category: "動詞の語法",
        question: "The movie ( ) me of my childhood.",
        options: ["remembered", "recalled", "reminded", "recognized"],
        answer: "reminded",
        translation: "その映画は私に子供時代を（思い出させた）。",
        explanation: "'remind O of A' (OにAを思い出させる) の形を取ります。'remember' や 'recall' は「～を思い出す」という意味の自動詞または他動詞です。"
    },
    {
        category: "動詞の語法",
        question: "He ( ) his success to hard work and luck.",
        options: ["attributed", "contributed", "distributed", "subscribed"],
        answer: "attributed",
        translation: "彼は自分の成功を勤勉と幸運の（おかげだとした）。",
        explanation: "'attribute A to B' (AをBのせいにする、AをBのおかげと考える) の形を取ります。"
    },
    {
        category: "動詞の語法",
        question: "It is difficult to ( ) between the two twins.",
        options: ["distinguish", "extinguish", "relinquish", "vanquish"],
        answer: "distinguish",
        translation: "その双子の間を（見分ける）のは難しい。",
        explanation: "'distinguish between A and B' または 'distinguish A from B' で「AとBを区別する、見分ける」という意味です。"
    },
    {
        category: "動詞の語法",
        question: "The police are ( ) the cause of the accident.",
        options: ["searching", "seeking", "investigating", "exploring"],
        answer: "investigating",
        translation: "警察は事故の原因を（調査している）。",
        explanation: "'investigate' (他動詞: ～を調査する) を使います。'search for A' (Aを探す)、'seek A' (Aを求める、探す)。"
    },
    {
        category: "動詞の語法",
        question: "We must ( ) ourselves to the new situation.",
        options: ["adopt", "adapt", "adept", "admit"],
        answer: "adapt",
        translation: "私たちは新しい状況に自分たちを（適応させ）なければならない。",
        explanation: "'adapt A to B' (AをBに適応させる) や 'adapt oneself to B' (Bに順応する) の形を取ります。'adopt' は「～を採用する」。'adept' は形容詞で「熟練した」。"
    },
    {
        category: "動詞の語法",
        question: "They decided to ( ) a new marketing strategy.",
        options: ["adopt", "adapt", "adept", "accept"],
        answer: "adopt",
        translation: "彼らは新しいマーケティング戦略を（採用する）ことに決めた。",
        explanation: "'adopt' (他動詞: ～を採用する、取り入れる) を使います。"
    },

    // --- カテゴリ: 時制 (20問) ---
    {
        category: "時制",
        question: "She ( ) a famous pianist when she grows up.",
        options: ["becomes", "will become", "is becoming", "has become"],
        answer: "will become",
        translation: "彼女は大人になったら有名なピアニストに（なるだろう）。",
        explanation: "未来の出来事を表すので未来形 'will become' を使います。「when she grows up」は時を表す副詞節なので、節内は未来のことでも現在形 'grows' になりますが、主節は未来形です。"
    },
    {
        category: "時制",
        question: "I ( ) my homework before dinner tonight.",
        options: ["finish", "will finish", "will have finished", "am finishing"],
        answer: "will have finished",
        translation: "私は今夜夕食までに宿題を（終えているだろう）。",
        explanation: "'before dinner tonight' (今夜の夕食までに) という未来のある時点までに動作が完了していることを示すため、未来完了形 'will have finished' を使います。"
    },
    {
        category: "時制",
        question: "By the time he arrived, the movie ( ) already.",
        options: ["started", "had started", "has started", "starts"],
        answer: "had started",
        translation: "彼が到着した時には、映画はすでに（始まっていた）。",
        explanation: "'By the time he arrived' (彼が到着した時までに) という過去のある時点より前に動作が完了していたことを示すため、過去完了形 'had started' を使います。"
    },
    {
        category: "時制",
        question: "Listen! Someone ( ) the piano.",
        options: ["plays", "is playing", "played", "has played"],
        answer: "is playing",
        translation: "聞いて！誰かがピアノを（弾いている）。",
        explanation: "'Listen!' という言葉から、今まさに進行中の動作を表す現在進行形 'is playing' が適切です。"
    },
    {
        category: "時制",
        question: "He ( ) in London for ten years before he moved to Paris.",
        options: ["lived", "has lived", "had lived", "was living"],
        answer: "had lived",
        translation: "彼はパリに引っ越す前に10年間ロンドンに（住んでいた）。",
        explanation: "パリに引っ越した (moved: 過去) よりも前の10年間住んでいたことを示すため、過去完了形 'had lived' を使います。"
    },
    {
        category: "時制",
        question: "Water ( ) at 100 degrees Celsius.",
        options: ["boils", "is boiling", "boiled", "will boil"],
        answer: "boils",
        translation: "水は摂氏100度で（沸騰する）。",
        explanation: "科学的な事実や普遍的な真理を表す場合は現在形 'boils' を使います。"
    },
    {
        category: "時制",
        question: "I ( ) to visit my grandparents next weekend.",
        options: ["go", "am going", "will have gone", "went"],
        answer: "am going",
        translation: "私は来週末、祖父母を訪ねに（行く予定だ）。",
        explanation: "近い未来の確定した予定を表す場合、現在進行形 'am going' を使うことができます。'will go' も可能ですが、より計画性が高いニュアンスです。"
    },
    {
        category: "時制",
        question: "When I called her, she ( ) a bath.",
        options: ["takes", "took", "was taking", "had taken"],
        answer: "was taking",
        translation: "私が彼女に電話した時、彼女は入浴（していた）。",
        explanation: "過去のある時点 (私が電話した時) で進行中だった動作を表すため、過去進行形 'was taking' を使います。"
    },
    {
        category: "時制",
        question: "This is the first time I ( ) sushi.",
        options: ["eat", "ate", "have eaten", "had eaten"],
        answer: "have eaten",
        translation: "私が寿司を（食べる）のはこれが初めてだ。",
        explanation: "'This is the first time S + 現在完了形' で「Sが～するのはこれが初めてだ」という経験を表す表現です。"
    },
    {
        category: "時制",
        question: "The train ( ) at 7:00 AM tomorrow.",
        options: ["leave", "leaves", "will leave", "is leaving"],
        answer: "leaves",
        translation: "その電車は明日午前7時に（出発する）。",
        explanation: "時刻表など、確定した未来の予定を表す場合、現在形 'leaves' を使うことがあります。未来形 'will leave' や現在進行形 'is leaving' も文脈によっては可能です。"
    },
    {
        category: "時制",
        question: "I wish I ( ) more time to study for the exam yesterday.",
        options: ["have", "had", "had had", "would have"],
        answer: "had had",
        translation: "昨日、試験勉強のためにもっと時間が（あったら）なあ。",
        explanation: "'I wish S + 過去完了形' で、過去の事実に反する願望（～だったらよかったのに）を表します。'yesterday' があるので過去のことに関する願望です。"
    },
    {
        category: "時制",
        question: "She told me that she ( ) to the party the next day.",
        options: ["will come", "would come", "comes", "came"],
        answer: "would come",
        translation: "彼女は次の日パーティーに（行くと）私に言った。",
        explanation: "間接話法で、主節の動詞 'told' (過去形) に合わせて、that節内の助動詞 'will' が過去形 'would' になります（時制の一致）。"
    },
    {
        category: "時制",
        question: "It ( ) raining for three hours now.",
        options: ["is", "was", "has been", "had been"],
        answer: "has been",
        translation: "今、3時間雨が（降り続いている）。",
        explanation: "'for three hours' (3時間) という期間と 'now' (今) から、過去から現在まで継続している動作を表す現在完了進行形 'has been raining' が適切です。"
    },
    {
        category: "時制",
        question: "If it ( ) tomorrow, we will postpone the picnic.",
        options: ["rain", "rains", "will rain", "rained"],
        answer: "rains",
        translation: "もし明日雨が（降れば）、私たちはピクニックを延期するだろう。",
        explanation: "時や条件を表す副詞節 (この場合は 'If'節) の中では、未来のことでも現在形 'rains' を使います。主節は未来形 'will postpone' です。"
    },
    {
        category: "時制",
        question: "He ( ) for that company since he graduated from college.",
        options: ["works", "worked", "has been working", "had worked"],
        answer: "has been working",
        translation: "彼は大学を卒業して以来、ずっとその会社で（働いている）。",
        explanation: "'since he graduated' (卒業して以来) という過去のある時点から現在まで継続している動作を表すため、現在完了進行形 'has been working' が適切です。"
    },
    {
        category: "時制",
        question: "The earth ( ) around the sun.",
        options: ["go", "goes", "is going", "went"],
        answer: "goes",
        translation: "地球は太陽の周りを（回る）。",
        explanation: "不変の真理や一般的な事実を表す場合は現在形 'goes' を使います。"
    },
    {
        category: "時制",
        question: "I ( ) him only once before he passed away.",
        options: ["met", "have met", "had met", "was meeting"],
        answer: "had met",
        translation: "彼が亡くなる前に、私は一度だけ彼に（会ったことがあった）。",
        explanation: "彼が亡くなった (passed away: 過去) よりも前に会った経験を表すため、過去完了形 'had met' を使います。"
    },
    {
        category: "時制",
        question: "This time tomorrow, I ( ) on a beach in Hawaii.",
        options: ["lie", "will lie", "will be lying", "will have lain"],
        answer: "will be lying",
        translation: "明日の今頃、私はハワイのビーチで（横になっている）だろう。",
        explanation: "'This time tomorrow' (明日の今頃) という未来のある時点で進行中の動作を表すため、未来進行形 'will be lying' を使います。"
    },
    {
        category: "時制",
        question: "She looked as if she ( ) a ghost.",
        options: ["see", "saw", "has seen", "had seen"],
        answer: "had seen",
        translation: "彼女はまるで幽霊を（見た）かのような顔つきだった。",
        explanation: "'as if S + 過去完了形' で、主節の時制 (looked: 過去) よりも前のことについて「まるでSが～したかのように」という意味の仮定を表します。"
    },
    {
        category: "時制",
        question: "He said he ( ) the book the previous week.",
        options: ["reads", "read", "has read", "had read"],
        answer: "had read",
        translation: "彼は前の週にその本を（読んだ）と言った。",
        explanation: "間接話法で、主節の動詞 'said' (過去形) より前の出来事 (前の週に読んだ) を表すため、過去完了形 'had read' を使います（時制の一致）。"
    },

    // --- カテゴリ: 助動詞 (20問) ---
    {
        category: "助動詞",
        question: "You ( ) finish this report by 5 PM. It's an order.",
        options: ["can", "may", "must", "might"],
        answer: "must",
        translation: "あなたはこの報告書を午後5時までに（終えなければならない）。これは命令だ。",
        explanation: "'must' は「～しなければならない」という強い義務や命令を表します。'It's an order.' がヒントです。"
    },
    {
        category: "助動詞",
        question: "It ( ) rain later today, so take an umbrella just in case.",
        options: ["must", "should", "may", "will"],
        answer: "may",
        translation: "今日は後で雨が（降るかもしれない）ので、念のため傘を持っていきなさい。",
        explanation: "'may' は「～かもしれない」という可能性・推量を表します。'might' も同様の推量を表しますが、'may' より可能性が低いニュアンスです。ここでは 'may' が選択肢にあります。"
    },
    {
        category: "助動詞",
        question: "( ) I borrow your dictionary for a moment?",
        options: ["Must", "Should", "Can", "Would"],
        answer: "Can",
        translation: "少しの間、あなたの辞書を（お借りしてもいいですか）？",
        explanation: "'Can I...?' は許可を求める一般的な表現です。'May I...?' の方がより丁寧ですが、'Can I...?' も広く使われます。"
    },
    {
        category: "助動詞",
        question: "He ( ) have forgotten about our appointment; he's usually punctual.",
        options: ["must", "should", "cannot", "may not"],
        answer: "cannot",
        translation: "彼が私たちの約束を忘れた（はずがない）。彼は普段時間厳守だから。",
        explanation: "'cannot have 過去分詞' で「～したはずがない」という過去の事柄に対する強い否定の推量を表します。'he's usually punctual' がヒントです。"
    },
    {
        category: "助動詞",
        question: "You ( ) be more careful when crossing this busy street.",
        options: ["must", "should", "can", "may"],
        answer: "should",
        translation: "この交通量の多い通りを渡る時はもっと注意（すべきだ）。",
        explanation: "'should' は「～すべきだ」という忠告やアドバイス、軽い義務を表します。'must' ほど強制的ではありません。"
    },
    {
        category: "助動詞",
        question: "When I was a child, I ( ) often visit my grandparents in the countryside.",
        options: ["will", "would", "can", "shall"],
        answer: "would",
        translation: "子供の頃、私はよく田舎の祖父母を（訪ねたものだった）。",
        explanation: "'would (often) + 動詞の原形' で、過去の不規則な習慣「（よく）～したものだった」を表します。'used to' も同様の意味で使えます。"
    },
    {
        category: "助動詞",
        question: "She ( ) have studied harder; she failed the exam.",
        options: ["must", "should", "could", "might"],
        answer: "should",
        translation: "彼女はもっと一生懸命勉強（すべきだったのに）。試験に落ちてしまった。",
        explanation: "'should have 過去分詞' で「（実際はしなかったが）～すべきだったのに」という過去の行為に対する後悔や非難を表します。"
    },
    {
        category: "助動詞",
        question: "He ( ) be at home now. I saw his car parked outside.",
        options: ["can", "may", "must", "will"],
        answer: "must",
        translation: "彼は今、家に（いるに違いない）。彼の車が外に駐車してあるのを見たから。",
        explanation: "'must be' は「～に違いない」という現在の事柄に対する確信の高い推量を表します。'I saw his car' が根拠です。"
    },
    {
        category: "助動詞",
        question: "You ( ) not have bought so much food; we have plenty.",
        options: ["must", "should", "need", "could"],
        answer: "need",
        translation: "そんなにたくさんの食べ物を買う（必要はなかったのに）。たくさんあるから。",
        explanation: "'need not have 過去分詞' で「（実際はしたが）～する必要はなかったのに」という意味を表します。"
    },
    {
        category: "助動詞",
        question: "( ) you mind if I opened the window?",
        options: ["Can", "May", "Would", "Must"],
        answer: "Would",
        translation: "窓を開けても（よろしいでしょうか）？",
        explanation: "'Would you mind if S + 過去形...?' は丁寧な許可を求める表現で、「もし私が～したら気にしますか？」が直訳です。'Do you mind if S + 現在形...?' もあります。"
    },
    {
        category: "助動詞",
        question: "Drivers ( ) obey the speed limit.",
        options: ["can", "may", "must", "might"],
        answer: "must",
        translation: "運転手は制限速度を（守らなければならない）。",
        explanation: "'must' は規則や法律による義務「～しなければならない」を表します。"
    },
    {
        category: "助動詞",
        question: "It's very cold. You ( ) better wear a warm coat.",
        options: ["had", "would", "should", "could"],
        answer: "had",
        translation: "とても寒い。暖かいコートを着る（方がいい）。",
        explanation: "'had better + 動詞の原形' で「～する方がよい、～すべきだ」という強い忠告を表します。否定形は 'had better not'。"
    },
    {
        category: "助動詞",
        question: "She ( ) play the violin when she was only five.",
        options: ["can", "could", "may", "might"],
        answer: "could",
        translation: "彼女はわずか5歳の時にバイオリンを（弾くことができた）。",
        explanation: "'could' は過去の能力「～できた」を表します。具体的な一度きりの行為ではなく、一般的な能力を指します。"
    },
    {
        category: "助動詞",
        question: "He ( ) rather stay home than go out tonight.",
        options: ["had", "would", "should", "could"],
        answer: "would",
        translation: "彼は今夜外出するよりもむしろ家に（いたい）。",
        explanation: "'would rather A (than B)' で「（Bするよりも）むしろAしたい」という願望や選択を表します。"
    },
    {
        category: "助動詞",
        question: "You ( ) to apologize for your rude behavior.",
        options: ["can", "may", "must", "ought"],
        answer: "ought",
        translation: "あなたは失礼な振る舞いを謝罪（すべきだ）。",
        explanation: "'ought to + 動詞の原形' は「～すべきだ」という道徳的な義務や当然のことを表し、'should' とほぼ同じ意味で使われます。"
    },
    {
        category: "助動詞",
        question: "This medicine ( ) be taken three times a day after meals.",
        options: ["can", "should", "will", "might"],
        answer: "should",
        translation: "この薬は食後に1日3回服用（されるべきです）。",
        explanation: "'should' は指示や推奨を表すことがあります。受動態 'be taken' になっている点にも注意。"
    },
    {
        category: "助動詞",
        question: "The light is on, so someone ( ) be in the room.",
        options: ["can't", "may not", "must", "shouldn't"],
        answer: "must",
        translation: "電気がついているので、誰かが部屋に（いるに違いない）。",
        explanation: "'must be' は「～に違いない」という現在の事柄に対する確信の高い推量を表します。'The light is on' が根拠です。"
    },
    {
        category: "助動詞",
        question: "You ( ) worry so much. Everything will be fine.",
        options: ["must not", "cannot", "need not", "may not"],
        answer: "need not",
        translation: "そんなに心配する（必要はない）よ。全てうまくいくから。",
        explanation: "'need not + 動詞の原形' (または 'don't need to') で「～する必要はない」という意味を表します。"
    },
    {
        category: "助動詞",
        question: "He ( ) have arrived by now; his train was due an hour ago.",
        options: ["must", "should", "can", "may"],
        answer: "should",
        translation: "彼はもう（到着しているはずだ）。彼の電車は1時間前に着く予定だったから。",
        explanation: "'should have 過去分詞' は、ここでは「（当然）～したはずだ」という過去の事柄に対する期待や当然の推量を表します。文脈によっては後悔の意味にもなります。"
    },
    {
        category: "助動詞",
        question: "( ) we dance?",
        options: ["Will", "Would", "Can", "Shall"],
        answer: "Shall",
        translation: "（一緒に踊りませんか）？",
        explanation: "'Shall we...?' は「（一緒に）～しませんか？」という提案や誘いを表す表現です。"
    }
];

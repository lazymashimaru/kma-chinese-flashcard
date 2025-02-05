import Flashcard from "../components/Flashcard";

const flashcardsData = [
  { word: "故", pinyin: "gù", translation: "Old" },
  { word: "睛", pinyin: "jīng", translation: "Eyes" },
  { word: "笔", pinyin: "bǐ", translation: "Pencil" },
  { word: "鸭", pinyin: "yā", translation: "Duck" },
  { word: "明", pinyin: "míng", translation: "Tomorrow" },
  { word: "猩", pinyin: "xīng", translation: "Monkey/Gorilla" },
  { word: "闻", pinyin: "wén", translation: "Smell" },
  { word: "公", pinyin: "gōng", translation: "Male or Public" },
  { word: "笑", pinyin: "xiào", translation: "Smile/Laugh/Giggle" },
  { word: "看", pinyin: "kàn", translation: "Read / Look" },
  { word: "改", pinyin: "gǎi", translation: "Change" },
  { word: "鹅", pinyin: "é", translation: "Goose" },
  { word: "晴", pinyin: "qíng", translation: "Clear / Nice Weather" },
  { word: "狮", pinyin: "shī", translation: "Lion" },
  { word: "间", pinyin: "jiān", translation: "Between" },
  { word: "眼", pinyin: "yǎn", translation: "Eye" },
  { word: "放", pinyin: "fàng", translation: "Put" },
  { word: "鸡", pinyin: "jǐ", translation: "Chicken" },
  { word: "昨", pinyin: "zuó", translation: "Yesterday" },
  { word: "问", pinyin: "wèn", translation: "Ask" },
  { word: "分", pinyin: "fēn", translation: "Minute" },
  { word: "猴", pinyin: "hoù", translation: "Monkey" },
  { word: "眼睛", pinyin: "yǎn jīng", translation: "Eyes" }


  // Add more flashcards as needed
];

export default function Home() {
    return (
      <div className="grid grid-rows-[auto_1fr] justify-center items-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-8">Chinese Flashcards</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {flashcardsData.map((card, index) => (
            <Flashcard
              key={index}
              word={card.word}
              pinyin={card.pinyin}
              translation={card.translation}
            />
          ))}
        </div>
      </div>
    );
  }


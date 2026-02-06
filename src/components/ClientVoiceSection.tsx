/**
 * セクション14：クライアントの声
 * 背景：白 / テキスト：ダークネイビー
 * カード形式、引用符装飾
 * ※データがない場合はダミーデータを表示（後から管理画面で追加できる仕様）
 */

// お客様の声データ定義
interface VoiceItem {
  quote: string;
  location: string;
  business: string;
  demographics: string;
}

const VOICES: VoiceItem[] = [
  {
    quote: "事務作業が半分になりました",
    location: "長崎市",
    business: "整体院オーナー",
    demographics: "40代男性",
  },
  {
    quote: "SNS更新の時間がゼロになりました",
    location: "佐世保市",
    business: "美容室オーナー",
    demographics: "30代女性",
  },
  {
    quote: "人を雇うより圧倒的にコスパがいい",
    location: "長崎市",
    business: "飲食店オーナー",
    demographics: "50代男性",
  },
];

export default function ClientVoiceSection() {
  return (
    <section id="client-voice" className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* 見出し */}
        <div className="fade-in-up text-center mb-16">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Client Voice
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            お客様の声
          </h2>
          <div className="decorative-line" />
        </div>

        {/* お客様の声カード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VOICES.map((voice, index) => (
            <div
              key={index}
              className="fade-in-stagger bg-gray-50 rounded-2xl p-8 border border-gray-100 relative"
              data-delay={index * 200}
            >
              {/* 引用符装飾 */}
              <span className="text-6xl text-accent/20 font-serif absolute top-4 left-6 leading-none">
                &ldquo;
              </span>

              {/* 引用テキスト */}
              <p className="text-navy text-lg font-medium mb-6 pt-8 leading-relaxed">
                「{voice.quote}」
              </p>

              {/* プロフィール */}
              <div className="flex items-center gap-3">
                {/* ダミーアバター */}
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-navy font-medium">
                    {voice.location} / {voice.business}
                  </p>
                  <p className="text-xs text-gray-400 font-light">
                    {voice.demographics}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

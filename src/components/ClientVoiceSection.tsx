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
    <section id="client-voice" className="section section-bluegray section-glow-border corner-glow-bl">
      <div className="section-container relative z-10">
        <div className="fade-in-up mb-12 text-center">
          <p className="label-en mb-4">Client Voice</p>
          <h2 className="section-title mb-5 text-dark">お客様の声</h2>
          <div className="decorative-line" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {VOICES.map((voice, index) => (
            <article
              key={voice.quote}
              className="lp-card fade-in-stagger relative p-8"
              data-delay={index * 160}
            >
              <span className="absolute left-6 top-4 font-display text-6xl font-[900] leading-none text-accent/20">
                &ldquo;
              </span>

              <p className="mb-7 pt-8 text-xl font-[900] leading-relaxed text-dark">
                「{voice.quote}」
              </p>

              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-accent text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-[900] text-dark">
                    {voice.location} / {voice.business}
                  </p>
                  <p className="text-xs font-bold text-slate-500">{voice.demographics}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

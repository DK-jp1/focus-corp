# otasukeai.jp デザイン分析と focus-corp 実装指示書

作成日: 2026-04-29

対象:
- 参考: `site_audit/otasukeai/01-hero.png` から `18-footer.png` までの18枚
- 現行: `site_audit/focus-corp-current-fullpage.png`
- 生成済みイラスト: `public/images/illustrations/`

## 1. 結論

otasukeai.jpは、強い青、濃紺、黄色、オレンジを明確に使い分けた「営業LP型」のデザインである。見出しは大きく太く、CTAは高頻度で表示され、セクションごとに背景色を大きく切り替えることで縦長ページでも単調にならない。イラスト、チャットモックアップ、ステップ表示、FAQ、固定下部CTAがすべて「サービスをすぐ理解して問い合わせる」方向に働いている。

現行focus-corpは、情報構成と素材は整っているが、全体が繊細でコーポレートサイト寄りに見える。otasukeaiと同等の訴求力に近づけるには、以下を優先する。

1. ヒーローを大きく強くする: 見出し、CTA、イラスト、青い背景面を強化する。
2. 前半に「悩み」「解決」「サービス体験」を置く: 哲学や価値観は短縮または後方へ移動する。
3. CTAを3から5箇所に増やす: ヒーロー、悩み後、NewStandard後、Services後、FAQ前またはContact前。
4. FAQ、FLOW、カードの密度をotasukeai基準へ上げる: 大きい行、大きい番号、太い見出し、明確な余白。
5. 生成済みイラストを各セクションへ配置する: すべて800x600 PNGで保存済み。

## 2. 参考スクショ一覧と観察ポイント

### 01-hero.png

- 上部に濃紺の細いトップバー、その下に白いナビゲーション。
- ヒーロー背景は鮮やかなブルー。見出しは白、キーワードの「AI」は黄色。
- 右側に人物とロボットのイラスト。情報量が多く、サービス内容を直感的に示す。
- ヒーロー直下に黄色の大きなCTAカードが2つ並ぶ。
- 下部固定CTAはオレンジと濃紺の2分割。

### 02-03 testimonials

- 薄青背景に白い角丸カード。
- カード上部に小さめの人物イラスト、中央に業種名、下に本文。
- 余白が大きく、本文の行間も広い。

### 04-06 problems / solution

- 濃色背景に白カードを載せるパターンと、鮮やかな青背景の大型見出しパターンを使い分けている。
- 課題リストは青いチェックアイコンと太字テキスト。
- 「そのお悩み、」のような短いコピーを濃色帯で挟み、次セクションへ視線誘導する。

### 07-10 service experience

- サービス提供者のイラスト、仕組みステップ、チャット会話例で「頼むと何が起きるか」を可視化している。
- チャットモックアップは左右の吹き出し、アバター、時刻、添付ファイル風カードを使う。
- 説明文だけではなく、サービス体験そのものを画面で見せている点が強い。

### 11-16 mid / usecase / pricing / flow

- 見出しの一部に青い下線マーカーを敷く。
- カードは白背景、薄い影、角丸、青いバッジで整理。
- FLOWは大きな英字見出しと日本語サブ見出し。番号やステップラベルを強く出す。
- 料金やメリットは青と濃紺でコントラストを作る。

### 17 FAQ

- FAQ行は大きな薄青カード。
- 左に濃紺の丸い `Q` アイコン、右端に大きな `+`。
- テキストは太字で、カード高さは約96px。かなり押し出しが強い。

### 18 footer

- フッター背景は濃いグレー寄りの濃紺。
- 左にサービス説明、中央にリンク、右に問い合わせ導線。
- 電話番号のような重要情報は明るい青で大きく表示。
- 最下部はさらに暗い帯でコピーライト。

## 3. カラーパレット分析

otasukeaiの主要色は以下。

```css
:root {
  --oa-navy: #003366;          /* トップバー、固定CTA右側 */
  --oa-dark: #2f363d;          /* 濃色セクション、フッター */
  --oa-text: #2f363d;          /* 通常テキスト */
  --oa-blue: #0066cc;          /* メインブルー */
  --oa-blue-vivid: #0a84e8;    /* CTA、アイコン、強調 */
  --oa-blue-light: #4eaeff;    /* ヒーロー、青帯 */
  --oa-blue-pale: #f0f5fa;     /* 交互背景、FAQ背景 */
  --oa-blue-card: #eaf4ff;     /* チャット吹き出し、カード内薄青 */
  --oa-yellow: #ffd700;        /* 最重要CTA、AI強調 */
  --oa-orange: #ff6b3a;        /* 問い合わせCTA、固定下部CTA左側 */
  --oa-white: #ffffff;
  --oa-border: #d9e8f5;
}
```

focus-corpの現行CSSは `#3B82F6`、`#2563EB`、`#06B6D4`、`#f8fafc` を中心にしている。悪くはないが、全体が淡く、CTAの記憶に残る色が弱い。以下へ寄せる。

```css
@theme inline {
  --color-navy: #003366;
  --color-navy-light: #064273;
  --color-dark: #2f363d;
  --color-accent: #0066cc;
  --color-accent-hover: #0057ad;
  --color-accent-cyan: #4eaeff;
  --color-accent-light: #eaf4ff;
  --color-section-alt: #f0f5fa;
  --color-border: #d9e8f5;
  --color-warning: #ffd700;
  --color-contact: #ff6b3a;
  --color-foreground: #2f363d;
}
```

実装方針:

- 青グラデーションは `linear-gradient(135deg, #4eaeff 0%, #0066cc 100%)` を維持しつつ、使う場所をCTA帯とヒーローに限定する。
- 淡いセクション背景は `#f0f5fa` に統一する。現行の `#f8fafc` は白と差が弱い。
- 通常テキストは `#2f363d`。本文の薄いグレーは最小限にする。
- CTAは青だけに頼らない。重要CTAに黄色、問い合わせCTAにオレンジを導入する。

## 4. フォントとタイポグラフィ

otasukeaiは日本語を太く大きく扱う。focus-corpの現行は本文のウェイトが軽く、見出しも上品すぎるため、営業LPとしての強度が不足している。

推奨:

```css
body {
  font-family: var(--font-noto-sans-jp, "Noto Sans JP"), sans-serif;
  font-weight: 400;
  line-height: 1.8;
  color: #2f363d;
}

.label-en {
  font-family: var(--font-outfit, "Outfit"), sans-serif;
  letter-spacing: 0.12em;
  font-size: 12px;
  font-weight: 700;
  color: #0066cc;
}

.hero-title {
  font-size: clamp(40px, 6vw, 72px);
  line-height: 1.12;
  font-weight: 900;
  letter-spacing: 0;
}

.section-title {
  font-size: clamp(32px, 4vw, 48px);
  line-height: 1.35;
  font-weight: 900;
  letter-spacing: 0;
}

.section-lead {
  font-size: clamp(16px, 2vw, 20px);
  line-height: 1.9;
  font-weight: 700;
}

.body-copy {
  font-size: 16px;
  line-height: 1.9;
  font-weight: 400;
}
```

文字設計の変更:

- `body` の `font-weight: 300` はやめる。本文は `400`、重要文は `700`。
- セクション見出しは現行より一段階大きくする。
- 英語ラベルは小さくてもよいが、字間 `0.2em` は広すぎる箇所がある。`0.12em` から `0.16em` に抑える。
- 見出し下の装飾線は `width: 70px; height: 4px; background: #0066cc; border-radius: 999px;` にする。

## 5. セクション構成

otasukeaiの強みは、前半で課題、解決策、体験、CTAを高速に回すこと。focus-corp現行は、Philosophy、Mission、Valueが前半に長く、サービス理解より会社思想が先に来る。

推奨順序:

1. Hero: もう、1人で決めなくていい。
2. Problems: こんなお悩み、ありませんか？
3. Solution: それらのお悩み、focusが解決します。
4. NewStandard: 人を雇うから、AIを導入するへ。
5. AI Advisors: 3つのAI参謀
6. Experience: copilot roomの相談体験チャット
7. Services: 3つのサービス
8. Works: 自社運営事業
9. Flow: 導入の流れ
10. ClientVoice: お客様の声
11. FAQ: よくある質問
12. Company: 会社概要
13. Contact: お問い合わせ
14. Footer

Philosophy、Mission、Valueは、トップページでは短縮する。会社の思想は残すが、ファーストビュー直後に長く置かない。

セクション背景の交互パターン:

```txt
Hero              blue/white mix
Problems          #f0f5fa
Solution          #0066cc or #4eaeff blue band
NewStandard       #2f363d dark
AI Advisors       #2f363d dark or white cards on dark
Experience        #ffffff with pale blue mockup
Services          #ffffff
CTA               blue gradient
Results           #f0f5fa
Works             #ffffff
Why/Flow          #f0f5fa / #ffffff
Voice             #f0f5fa
FAQ               #ffffff
Company           #f0f5fa
Contact           #ffffff
Footer            #2f363d
```

共通余白:

```css
.section {
  padding: 112px 0;
}

.section-compact {
  padding: 88px 0;
}

.container {
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
}

@media (max-width: 768px) {
  .section { padding: 72px 0; }
  .section-compact { padding: 64px 0; }
  .container { width: min(100% - 28px, 1120px); }
}
```

## 6. イラスト設計

otasukeaiのイラストは以下の特徴。

- Storyset風のフラットイラスト。
- 白背景または青背景に載せる。
- 主線は濃紺、塗りは青系パステル。
- 人物は親しみがあり、ビジネス用途でも軽すぎない。
- セクションの意味を説明する役割が明確。
- 小さいアイコンではなく、セクション全体の視覚フックとして使う。

focus-corp用に生成済み:

```txt
public/images/illustrations/hero-illustration.png
public/images/illustrations/problems.png
public/images/illustrations/promoter.png
public/images/illustrations/director.png
public/images/illustrations/advisor.png
public/images/illustrations/copilot-room.png
```

配置指示:

- Hero: `hero-illustration.png` を右側に配置。desktopで幅 `min(48vw, 560px)`、mobileは見出し下で幅 `100%`。
- Problems: `problems.png` を左、課題チェックリストを右。desktopは2カラム、mobileは画像上、リスト下。
- AI Advisors: 3カードに `promoter.png`、`director.png`、`advisor.png` をそれぞれ使う。カード内画像は `aspect-ratio: 4 / 3; object-fit: contain; background: #fff;`。
- ExperienceまたはSolution: `copilot-room.png` をチャットモックアップ横に配置する。
- 画像は角丸カードに閉じ込めすぎない。白背景のイラストなので、セクション背景に直接置くか、薄い青のパネルに載せる。

CSS:

```css
.section-illustration {
  width: 100%;
  max-width: 560px;
  aspect-ratio: 4 / 3;
  object-fit: contain;
  display: block;
}

.advisor-card__image {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: contain;
  border-radius: 8px;
  background: #ffffff;
}
```

## 7. CTAデザイン

otasukeaiはCTAが多く、色の役割が明確。

- 黄色: 最重要の申し込み、資料確認。
- オレンジ: 問い合わせ。
- 青: ログイン、資料請求、通常アクション。
- 下部固定CTA: オレンジと濃紺の2分割。

focus-corp推奨:

```css
.cta-primary {
  min-height: 56px;
  padding: 0 28px;
  border-radius: 8px;
  background: #ffd700;
  color: #003366;
  font-size: 16px;
  font-weight: 900;
  box-shadow: 0 8px 20px rgba(0, 51, 102, 0.18);
}

.cta-contact {
  min-height: 56px;
  padding: 0 28px;
  border-radius: 8px;
  background: #ff6b3a;
  color: #ffffff;
  font-size: 16px;
  font-weight: 900;
  box-shadow: 0 8px 20px rgba(255, 107, 58, 0.25);
}

.cta-blue {
  min-height: 56px;
  padding: 0 28px;
  border-radius: 999px;
  background: #0066cc;
  color: #ffffff;
  font-weight: 800;
}
```

CTA配置:

- Hero内: `無料相談はこちら` と `サービス資料を見る` の2ボタン。
- Problems直後: 青グラデーション帯で `まずは話を聞いてみませんか？`。
- NewStandard直後: 黄色CTAを含む濃色帯。
- Services直後: 既存CTABannerを残しつつ、背景を `linear-gradient(135deg, #4eaeff, #0066cc)` にする。
- FAQ前またはContact前: 最終CTA。
- mobileでは下部固定CTAを追加する。

下部固定CTA:

```css
.bottom-fixed-cta {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 56px;
}

.bottom-fixed-cta a:first-child { background: #ff6b3a; }
.bottom-fixed-cta a:last-child { background: #003366; }
.bottom-fixed-cta a {
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 15px;
}
```

## 8. カード、ボタン、バッジ

otasukeaiのカードは装飾を盛りすぎず、白背景、薄い影、太い見出し、青バッジで構成される。

推奨カード:

```css
.lp-card {
  background: #ffffff;
  border: 1px solid #d9e8f5;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 51, 102, 0.08);
  padding: 32px;
}

.lp-card:hover {
  border-color: rgba(0, 102, 204, 0.35);
  box-shadow: 0 14px 36px rgba(0, 102, 204, 0.12);
  transform: translateY(-3px);
}

.badge-blue {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 34px;
  padding: 0 16px;
  border-radius: 6px;
  background: #0066cc;
  color: #ffffff;
  font-size: 14px;
  font-weight: 900;
}

.tag-pill {
  display: inline-flex;
  align-items: center;
  height: 34px;
  padding: 0 14px;
  border-radius: 999px;
  background: #eaf4ff;
  border: 1px solid #b9dcff;
  color: #0066cc;
  font-size: 13px;
  font-weight: 700;
}
```

変更方針:

- 現行のカード角丸 `16px` 以上は、LP全体では少し柔らかすぎる。基本は `8px`、大きいパネルでも `12px` まで。
- 影は薄くてもよいが、カード境界は `#d9e8f5` で明確にする。
- カード内の見出しは `20px/1.5/800` 以上。
- 小さい淡色カードが連続する箇所は、見出し、番号、画像のいずれかを大きくして強弱をつける。

## 9. サービス体験要素

otasukeaiが強い理由の1つは、チャットモックアップで「依頼後の流れ」を見せている点。focus-corpにも `copilot room` の体験を作る。

追加推奨セクション: `CopilotExperienceSection`

内容:

- 見出し: `AI参謀に相談すると、こう進みます。`
- 左: チャットモックアップ
- 右: `copilot-room.png` または3つのAI参謀の短い説明

チャット例:

```txt
経営者: SNS投稿と問い合わせ対応に追われています。採用せずに改善できますか？
AI参謀: 現状業務を整理し、SNS運用、問い合わせ一次対応、週次レポートの自動化案を作成します。
経営者: 月いくらくらいで始められますか？
AI参謀: 人を1人雇うより小さく始められます。優先順位と導入ステップを提案します。
```

CSS:

```css
.chat-mock {
  max-width: 760px;
  margin: 0 auto;
  padding: 40px;
  background: #ffffff;
  border: 1px solid #d9e8f5;
  border-radius: 12px;
  box-shadow: 0 16px 40px rgba(0, 51, 102, 0.08);
}

.chat-row {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 16px;
  margin-bottom: 28px;
}

.chat-row.is-user {
  grid-template-columns: 1fr 56px;
}

.chat-bubble {
  padding: 20px 24px;
  border-radius: 8px;
  background: #d9ecff;
  color: #2f363d;
  font-weight: 700;
  line-height: 1.8;
}

.chat-row.is-user .chat-bubble {
  background: #91c7f8;
}

.chat-time {
  margin-top: 8px;
  font-family: var(--font-outfit, "Outfit"), sans-serif;
  font-size: 13px;
  font-weight: 700;
  color: #64748b;
}
```

## 10. ステップ表示

otasukeaiのステップは、単なるカード列ではなく、アイコン、濃色ピル、矢印で流れを作る。

focus-corp現行のFlowは整っているが、薄いカードが並ぶだけで視線の推進力が弱い。

推奨:

```css
.flow-list {
  display: grid;
  gap: 32px;
  max-width: 820px;
  margin: 0 auto;
}

.flow-step {
  position: relative;
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 28px;
  align-items: center;
  padding: 32px;
  background: #ffffff;
  border: 1px solid #d9e8f5;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 51, 102, 0.06);
}

.flow-step__badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  min-width: 130px;
  padding: 0 20px;
  border-radius: 999px;
  background: #2f363d;
  color: #ffffff;
  font-family: var(--font-outfit, "Outfit"), sans-serif;
  font-size: 20px;
  font-weight: 900;
}

.flow-step__title {
  font-size: 24px;
  line-height: 1.5;
  font-weight: 900;
}

.flow-step__text {
  margin-top: 8px;
  font-size: 16px;
  line-height: 1.8;
}
```

Flow文言:

1. お問い合わせ
2. ヒアリング
3. 提案
4. 構築・導入
5. 運用サポート

## 11. FAQアコーディオン

現行FAQは悪くないが、otasukeaiより小さく薄い。行全体を大きくし、クリック領域を明確にする。

```css
.faq-list {
  max-width: 980px;
  margin: 0 auto;
  display: grid;
  gap: 20px;
}

.faq-item {
  background: #f0f5fa;
  border: 1px solid #e1edf8;
  border-radius: 8px;
  overflow: hidden;
}

.faq-question {
  min-height: 92px;
  width: 100%;
  display: grid;
  grid-template-columns: 48px 1fr 40px;
  gap: 20px;
  align-items: center;
  padding: 24px 32px;
  text-align: left;
}

.faq-q-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #2f363d;
  color: #ffffff;
  font-family: var(--font-outfit, "Outfit"), sans-serif;
  font-weight: 900;
  font-size: 20px;
}

.faq-question-text {
  font-size: 20px;
  line-height: 1.6;
  font-weight: 900;
  color: #2f363d;
}

.faq-plus {
  font-size: 36px;
  line-height: 1;
  color: #2f363d;
}

.faq-answer {
  padding: 0 32px 28px 100px;
  font-size: 16px;
  line-height: 1.9;
}
```

## 12. フッター

otasukeaiのフッターは単なる法務リンク置き場ではなく、最後の問い合わせ導線として機能している。focus-corpも同様にする。

推奨構成:

- 左: 合同会社focus / copilot roomの短い説明
- 中央: サービス、実績、よくある質問、会社概要、問い合わせ
- 右: Instagram DMまたは問い合わせCTA
- 最下部: legal links + copyright

```css
.site-footer {
  background: #2f363d;
  color: #ffffff;
  padding: 72px 0 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.2fr;
  gap: 64px;
}

.footer-title {
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 20px;
}

.footer-link {
  display: block;
  color: rgba(255,255,255,0.78);
  font-size: 15px;
  line-height: 2.2;
}

.footer-contact-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  padding: 0 28px;
  border-radius: 999px;
  background: #0066cc;
  color: #ffffff;
  font-weight: 900;
}

.footer-bottom {
  margin-top: 64px;
  padding: 24px 0;
  background: #101923;
  color: rgba(255,255,255,0.6);
  font-size: 13px;
}
```

## 13. focus-corpとの差分

足りないもの:

- 固定または明確な上部ナビゲーション。現行トップページではファーストビューにナビの存在感がない。
- ファーストビューの青い面積と強いCTA。現行は白背景で上品だが、印象が弱い。
- 相談体験の可視化。チャットモックアップ、ダッシュボード、AI参謀チームの動きが必要。
- CTAの色分け。現行は青ボタン中心で、重要度が伝わりにくい。
- FAQの大型UI。現行は整っているが、LPとしての押し出しが弱い。
- フッター内の問い合わせ導線。現行は締めのCTAとして弱い。
- 前半の課題訴求。PhilosophyとValueが長く、サービスLPとしては導入が遅い。

過剰なもの:

- 前半の思想セクション量。会社らしさは出ているが、問い合わせ前の説得にはやや遠い。
- 小さなカードの連続。サービス、実績、理由、導入、声が似たテンションで続き、山場が不足する。
- 淡いブルーと薄い罫線への依存。全体がきれいだが記憶に残る色面が少ない。
- 英語ラベルの装飾。`PHILOSOPHY`、`MISSION` などはよいが、主訴の日本語コピーより先に目立つと弱い。

同等クオリティにする変更:

- ヒーローを2カラムにし、右に `hero-illustration.png`、左に大見出しと2CTA。
- Problemsを `problems.png` + チェックリストに再構成。
- NewStandardは濃色背景で「人を雇う -> AIを導入する」「月20万円 -> 月2万円」「コスト10分の1」を大きく表示。
- 3つのAI参謀は濃色セクションに白/半透明カードで配置し、生成済み3イラストを使用。
- `CopilotExperienceSection` を新設し、チャット例を入れる。
- FAQを大型アコーディオンへ変更。
- Footerを濃色3カラムにし、問い合わせ導線を追加。
- モバイル下部固定CTAを追加。

## 14. コンポーネント別実装指示

### `src/app/globals.css`

- カラートークンを本書の `--oa-*` 相当へ寄せる。
- `body` を `font-weight: 400` に変更。
- `.decorative-line` を `70px x 4px` に変更。
- `.glass-card` 系の角丸を基本 `8px` に統一。
- `.cta-primary`、`.cta-contact`、`.bottom-fixed-cta`、`.chat-mock`、`.faq-*` を追加。

### `HeroSection.tsx`

- 見出しを `clamp(40px, 6vw, 72px)` 相当に拡大。
- `AI参謀チームと経営者` の視覚として `hero-illustration.png` を配置。
- CTAを2つにする。
  - 黄色: `無料相談はこちら`
  - 青または白: `サービスを見る`
- ヒーロー背景は白ベースだけでなく、右または全体に青い面を作る。推奨は上部に淡青グリッド、CTA帯に青グラデーション。

### `ProblemsSection.tsx`

- `problems.png` を配置。
- 課題リストは白カード内に6行程度。
- 各行は青チェックアイコン、太字テキスト、薄青カード背景。
- 見出し下に `それらのお悩み、focusが解決します。` の強い青テキストを置く。

### `NewStandardSection.tsx`

- 背景を `#2f363d` にする。
- `人を雇う` と `AIを導入する` を左右比較にする。
- 数字はOutfitで大きくする。

```css
.cost-number {
  font-family: var(--font-outfit, "Outfit"), sans-serif;
  font-size: clamp(48px, 8vw, 96px);
  line-height: 1;
  font-weight: 900;
  color: #4eaeff;
}
```

### 3つのAI参謀セクション

既存が `NewStandardSection` 内にある場合は分離してもよい。

- Promoter: `promoter.png`
- Director: `director.png`
- Advisor: `advisor.png`
- 3カード横並び。desktopは3カラム、tabletは2カラム、mobileは1カラム。
- 各カードに「何をするか」「成果物」「向いている悩み」を入れる。

### `ServicesSection.tsx`

- 3サービスカードは現行を活かす。
- ただしカード内の番号、アイコン、見出しを大きくする。
- `copilot room` は最重要なので、カードサイズまたは背景を強める。

### `WorksSection.tsx`

- 現行の実績カードは維持。
- カード上部の画像比率を統一する。`aspect-ratio: 16 / 9` か `4 / 3`。
- タグは `tag-pill` に変更。

### `FlowSection.tsx`

- グリッドカードから縦型または大きな横長カードへ変更。
- `STEP 01` の濃色ピルを使う。
- ステップ間に青い矢印または接続線を追加。

### `ClientVoiceSection.tsx`

- 現行の小カードを、白カード + 上部小イラスト/アイコン + 太字引用へ変更。
- カードの余白は `32px`。
- 背景は `#f0f5fa`。

### `FAQSection.tsx`

- 本書の大型FAQスタイルへ変更。
- `Q` 丸アイコンと `+` を大きくする。
- 行高は最低 `92px`。

### `ContactSection.tsx`

- 入力フォームは現行を維持してよい。
- フォーム前に白カードの `Instagram DMで相談` は残し、CTA色をオレンジ/青のどちらかに統一。
- フォームカードは `max-width: 760px; border-radius: 8px; border: 1px solid #d9e8f5;`。

### `Footer.tsx`

- 3カラム構成へ変更。
- 問い合わせCTAをフッター内に追加。
- 背景は `#2f363d`、最下部は `#101923`。

## 15. 生成済みイラストの実装メモ

生成方式:
- Built-in `image_gen` toolを使用。
- otasukeai.jpの参考スクショを読み込んだうえで、Storyset風フラット、青系メインカラー、白背景、ビジネスプロフェッショナルの条件で生成。
- 出力後、白背景キャンバス上で800x600 PNGに整形。

保存先:

```txt
C:\Users\doy90\Downloads\focus-corp\public\images\illustrations\hero-illustration.png
C:\Users\doy90\Downloads\focus-corp\public\images\illustrations\problems.png
C:\Users\doy90\Downloads\focus-corp\public\images\illustrations\promoter.png
C:\Users\doy90\Downloads\focus-corp\public\images\illustrations\director.png
C:\Users\doy90\Downloads\focus-corp\public\images\illustrations\advisor.png
C:\Users\doy90\Downloads\focus-corp\public\images\illustrations\copilot-room.png
```

Next.jsでの参照例:

```tsx
import Image from "next/image";

<Image
  src="/images/illustrations/hero-illustration.png"
  alt="経営者とAI参謀が協力して経営判断を進めるイラスト"
  width={800}
  height={600}
  priority
  className="section-illustration"
/>
```

## 16. 実装優先順位

最優先:

1. `globals.css` の色、フォント、カード、CTA、FAQ基盤を更新。
2. `HeroSection` に生成イラストと2CTAを入れる。
3. `ProblemsSection` と `NewStandardSection` を強いLP構成に変更。
4. 3つのAI参謀カードに生成イラストを適用。
5. FAQを大型アコーディオンに変更。

次点:

1. `CopilotExperienceSection` を新規追加。
2. モバイル下部固定CTAを追加。
3. Footerを3カラム化。
4. Philosophy/Mission/Valueの表示量を減らし、下部または別ページに寄せる。

## 17. 品質チェック項目

- ファーストビューで、サービス名、ベネフィット、CTA、イラストが1画面内に入る。
- mobileでCTAが折り返しても高さが破綻しない。
- セクション見出しはすべて `32px` 以上、desktopでは `40px` 以上。
- カードの角丸は基本 `8px`。
- `#f8fafc` と白が連続しすぎない。交互背景は `#f0f5fa` を使う。
- FAQ行のクリック領域は最低 `92px`。
- 生成イラストはぼやけず、表示サイズの最大幅を `560px` 程度に抑える。
- 固定下部CTAを入れる場合、フォーム送信ボタンやフッターを隠さないよう `body` または最下部に `padding-bottom: 56px` を入れる。

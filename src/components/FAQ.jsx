import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "タイムトラベル機能が勝手に一時停止になります。",
      a: "アプリには、PC全体のメモリ使用量が90%を超えた場合は、安全のため自動で一時停止するモードがONになっています（80%以下になると自動で記録を再開します・設定でOFFにすることもできます）。"
    },
    {
      q: "アンインストールやルールの「リンク解除」をすると、撮影したスクショも消えますか？",
      a: "消えません。BranchShotが作成するフォルダや保存した画像は、Windows標準の「ピクチャ」フォルダ内に保存されるため、アプリを削除してもファイルが巻き込まれて消えることはありません。"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />
      
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-6 flex items-center justify-center gap-4 tracking-tight">
          <HelpCircle className="w-10 h-10 text-brand-cyan" />
          よくありそうな質問
        </h2>
        <p className="text-zinc-400 text-lg font-medium">
          FAQ & トラブルシューティング
        </p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <details 
            key={index} 
            className="group glass-panel [&_summary::-webkit-details-marker]:hidden bg-zinc-800/20 hover:bg-zinc-800/40 transition-colors"
          >
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
              <h3 className="text-lg font-semibold text-zinc-100 pr-6">
                <span className="text-brand-cyan mr-4">Q.</span>
                {faq.q}
              </h3>
              <ChevronDown className="w-6 h-6 text-zinc-400 group-open:rotate-180 transition-transform duration-300 shrink-0" />
            </summary>
            <div className="px-6 pb-6 pt-2 border-t border-zinc-700/50 mt-2">
              <p className="text-zinc-300 text-base leading-relaxed flex items-start pt-4">
                <span className="text-brand-yellow font-bold text-lg mr-4">A.</span>
                <span className="mt-0.5">{faq.a}</span>
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

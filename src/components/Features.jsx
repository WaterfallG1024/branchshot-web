import React from 'react';
import { History, Zap, Monitor } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: "タイムトラベルスクショ",
      subtitle: "バックグラウンド記録",
      description: "「あ、今の画面残したかった！」と思った瞬間、時を遡って過去の画面（3秒〜60秒前）をパラパラ漫画のように切り出して保存。過去が取れる革新的機能。",
      icon: <History className="w-10 h-10 text-brand-yellow" />,
      delay: "0"
    },
    {
      title: "瞬時自動振り分け",
      subtitle: "仕分け作業はゼロへ",
      description: "キャプチャした直後、あらかじめ設定した半角英数字や記号（0-9, a-z, @, [, ] 等）のキーを1つ叩くだけで、事前に設定したフォルダへ瞬時に格納。",
      icon: <Zap className="w-10 h-10 text-mode-free" />,
      delay: "100"
    },
    {
      title: "カプセルステータスUI",
      subtitle: "作業を邪魔しない極小設計",
      description: "極小のステータスウィンドウ。動作状態を一目で把握でき、作業の邪魔をしません。",
      icon: <Monitor className="w-10 h-10 text-mode-full" />,
      delay: "200"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-4 tracking-tight">
          BranchShotならではの機能
        </h2>
        <p className="text-zinc-400 text-lg font-medium">
          シンプルさと強力さを両立した、これまでにないキャプチャ体験
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="glass-panel p-8 flex flex-col items-start hover:bg-zinc-800/40 transition-colors duration-300 group cursor-default"
          >
            <div className="mb-6 p-4 bg-zinc-800/50 rounded-2xl border border-zinc-700/50 group-hover:-translate-y-1 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-zinc-100 mb-2">
              {feature.title}
            </h3>
            <h4 className="text-sm font-medium text-brand-cyan tracking-wide mb-4">
              {feature.subtitle}
            </h4>
            <p className="text-zinc-400 text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

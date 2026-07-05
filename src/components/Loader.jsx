import React, { useEffect, useState } from 'react';

export default function Loader({ onComplete }) {
  const text = "BranchShot";
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // 2.0秒後にローディング画面全体のフェードアウトを開始
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2000);

    // 2.7秒後にローディング完了（Appへ遷移）
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#111111] transition-opacity duration-700 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* スクリーンショット撮影のフラッシュエフェクト */}
      <div className="absolute inset-0 bg-white opacity-0 animate-camera-flash pointer-events-none z-10" />

      {/* タイピング風に1文字ずつ出現するテキスト */}
      <h1 className="text-6xl md:text-8xl font-black text-white tracking-widest text-glow flex relative z-0">
        {text.split('').map((char, index) => (
          <span 
            key={index} 
            className="opacity-0 animate-typewriter inline-block"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}

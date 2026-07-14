import React from 'react';
import { Camera, History, Cpu, Database, Monitor, Box, Sparkles } from 'lucide-react';

export default function Requirements() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-4 tracking-tight">
          動作環境
        </h2>
        <p className="text-zinc-400 text-lg font-medium">
          多くのWindowsPCで動作します
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* 通常スクショ */}
        <div className="glass-panel p-8 md:p-10 flex flex-col hover:bg-zinc-800/40 transition-colors duration-300 border border-zinc-800">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-zinc-800/80 rounded-2xl border border-zinc-700/50">
              <Camera className="w-8 h-8 text-brand-cyan" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-100">通常キャプチャ</h3>
              
            </div>
          </div>
          
          <div className="space-y-8 flex-grow">
            <div>
              <h4 className="text-brand-cyan text-sm font-semibold tracking-wider uppercase mb-4 flex items-center gap-2">
                最低動作環境
              </h4>
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-start gap-3"><Monitor className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" /><span><strong className="text-zinc-100">OS:</strong> Windows 10 (バージョン 2004 以降)</span></li>
                <li className="flex items-start gap-3"><Cpu className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" /><span><strong className="text-zinc-100">CPU:</strong> x64 互換プロセッサ</span></li>
                <li className="flex items-start gap-3"><Database className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" /><span><strong className="text-zinc-100">メモリ:</strong> 4GB 以上</span></li>
                <li className="flex items-start gap-3"><Box className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" /><span><strong className="text-zinc-100">グラフィックス:</strong> DirectX 9 互換 GPU</span></li>
              </ul>
            </div>
            
            <div className="pt-6 border-t border-zinc-800/50">
              <h4 className="text-brand-yellow text-sm font-semibold tracking-wider uppercase mb-4 flex items-center gap-2">
                推奨動作環境
              </h4>
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-start gap-3"><Monitor className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" /><span><strong className="text-zinc-100">OS:</strong> Windows 10 / Windows 11</span></li>
                <li className="flex items-start gap-3"><Cpu className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" /><span><strong className="text-zinc-100">CPU:</strong> Intel Core i3 / AMD Ryzen 3 以上</span></li>
                <li className="flex items-start gap-3"><Database className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" /><span><strong className="text-zinc-100">メモリ:</strong> 8GB 以上</span></li>
                <li className="flex items-start gap-3"><Box className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" /><span><strong className="text-zinc-100">グラフィックス:</strong> DirectX 11 互換 GPU</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* タイムトラベルスクショ */}
        <div className="glass-panel p-8 md:p-10 flex flex-col relative overflow-hidden group border border-zinc-800">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="p-4 bg-zinc-800/80 rounded-2xl border border-zinc-700/50">
              <History className="w-8 h-8 text-brand-yellow" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-100">タイムトラベルスクショ</h3>
              
            </div>
          </div>

          <div className="space-y-8 flex-grow relative z-10">
            <div>
              <h4 className="text-brand-cyan text-sm font-semibold tracking-wider uppercase mb-4 flex items-center gap-2">
                最低動作環境
              </h4>
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-start gap-3"><Monitor className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" /><span><strong className="text-zinc-100">OS:</strong> Windows 10 (バージョン 2004 以降)</span></li>
                <li className="flex items-start gap-3"><Cpu className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" /><span><strong className="text-zinc-100">CPU:</strong> Intel Core i3 / AMD Ryzen 3 クラス</span></li>
                <li className="flex items-start gap-3"><Database className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" /><span><strong className="text-zinc-100">メモリ:</strong> <span className="text-brand-yellow font-bold">8GB 必須</span><br/><span className="text-xs text-zinc-400 mt-1 block">※8GB未満のメモリ搭載のPCでは利用できません</span></span></li>
                <li className="flex items-start gap-3"><Box className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" /><span><strong className="text-zinc-100">グラフィックス:</strong> DirectX 11 互換 GPU (内蔵GPU可)</span></li>
              </ul>
            </div>
            
            <div className="pt-6 border-t border-zinc-800/50">
              <h4 className="text-brand-yellow text-sm font-semibold tracking-wider uppercase mb-4 flex items-center gap-2">
                推奨動作環境
              </h4>
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-start gap-3"><Monitor className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" /><span><strong className="text-zinc-100">OS:</strong> Windows 10 / Windows 11</span></li>
                <li className="flex items-start gap-3"><Cpu className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" /><span><strong className="text-zinc-100">CPU:</strong> Core Ultra 5 / Core i5 (第12世代+) / Ryzen 5 (6000+) クラス</span></li>
                <li className="flex items-start gap-3"><Database className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" /><span><strong className="text-zinc-100">メモリ:</strong> <span className="text-brand-yellow font-bold">32GB 以上</span></span></li>
                <li className="flex items-start gap-3"><Box className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" /><span><strong className="text-zinc-100">グラフィックス:</strong> Intel Arc Graphics 等の最新内蔵GPU、または専用GPU</span></li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-12 flex items-center justify-center gap-2 text-sm text-zinc-400 bg-zinc-800/30 py-3 px-6 rounded-full w-fit mx-auto border border-zinc-700/50">
        <Sparkles className="w-4 h-4 text-brand-cyan" />
        <span>動作環境は <strong>Gemini 3.1 Pro</strong> を利用して算出しました</span>
      </div>
    </section>
  );
}

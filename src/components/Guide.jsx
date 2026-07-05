import React from 'react';
import { Settings, FolderPlus, Keyboard, History } from 'lucide-react';

import printscreenkey from '../assets/printscreenkey.png';
import folderRule from '../assets/folder_rule.png';
import shortcutkey from '../assets/shortcutkey.png';
import timetravel from '../assets/timetravel.png';

export default function Guide() {
  const shortcuts = [
    { key: "PrintScreen", action: "タイムトラベルまたはモード選択" },
    { key: "Ctrl + Shift + C", action: "自由選択キャプチャー" },
    { key: "Ctrl + Shift + W", action: "ウィンドウキャプチャー" },
    { key: "Ctrl + Shift + F", action: "全画面キャプチャー" },
    { key: "Ctrl + Shift + A", action: "全モード呼び出し" }
  ];

  return (
    <section id="guide" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-4 tracking-tight">
          使い方ガイド
        </h2>
        <p className="text-zinc-400 text-lg font-medium">
          インストール後の4ステップ
        </p>
      </div>

      <div className="space-y-20">
        
        {/* Step 1 */}
        <div className="glass-panel p-8 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-8">
              <div className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50 shrink-0">
                <Settings className="w-8 h-8 text-brand-yellow" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 flex flex-col">
                <span className="text-brand-yellow text-sm font-semibold tracking-wider uppercase mb-1">Step 1</span>
                初期設定<br className="hidden md:block" />（キー乗っ取り）
              </h3>
            </div>
            <p className="text-zinc-400 leading-relaxed text-base">
              設定画面で「PrintScreenキーを乗っ取る」をONにするだけで、Windows標準のSnipping ToolからBranchShotに切り替わり、キャプチャ操作を快適に行うことができます。
            </p>
          </div>
          <div className="w-full lg:w-[55%] xl:w-[60%] shrink-0 group">
            <img 
              src={printscreenkey} 
              alt="設定画面" 
              className="w-full h-auto rounded-xl border border-zinc-700/50 shadow-xl shadow-black/40 group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-300" 
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className="glass-panel p-8 flex flex-col lg:flex-row-reverse gap-12 items-center">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-8">
              <div className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50 shrink-0">
                <FolderPlus className="w-8 h-8 text-mode-win" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 flex flex-col">
                <span className="text-mode-win text-sm font-semibold tracking-wider uppercase mb-1">Step 2</span>
                保存ルールの追加
              </h3>
            </div>
            <p className="text-zinc-400 leading-relaxed text-base">
              フォルダ管理画面から「新しいフォルダ名」と「任意の1文字キー」を入力して追加するだけのシンプルな手順。これで自動振り分けの準備は完了です。
            </p>
          </div>
          <div className="w-full lg:w-[55%] xl:w-[60%] shrink-0 group">
            <img 
              src={folderRule} 
              alt="フォルダ管理画面" 
              className="w-full h-auto rounded-xl border border-zinc-700/50 shadow-xl shadow-black/40 group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-300" 
            />
          </div>
        </div>

        {/* Step 3 */}
        <div className="glass-panel p-8 flex flex-col xl:flex-row gap-12 items-start">
          <div className="flex-1 w-full">
            <div className="flex items-center gap-6 mb-8">
              <div className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50 shrink-0">
                <Keyboard className="w-8 h-8 text-mode-full" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 flex flex-col">
                <span className="text-mode-full text-sm font-semibold tracking-wider uppercase mb-1">Step 3</span>
                各モードと<br className="hidden md:block" />ショートカット
              </h3>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-8 text-base">
              BranchShotを極めるための強力なキーボードショートカット。各モードを瞬時に呼び出し、キャプチャを高速化します。
            </p>
            
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-700/50">
                    <th className="py-4 px-4 text-brand-cyan font-semibold text-sm whitespace-nowrap">キー</th>
                    <th className="py-4 px-4 text-brand-cyan font-semibold text-sm">アクション</th>
                  </tr>
                </thead>
                <tbody>
                  {shortcuts.map((s, i) => (
                    <tr key={i} className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
                      <td className="py-4 px-4 whitespace-nowrap">
                        <kbd className="bg-zinc-800 border border-zinc-700 rounded-md px-3 py-1.5 text-sm font-medium font-mono text-zinc-200 shadow-sm inline-block">
                          {s.key}
                        </kbd>
                      </td>
                      <td className="py-4 px-4 text-zinc-300 text-sm">
                        {s.action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full xl:w-[55%] shrink-0 group">
            <img 
              src={shortcutkey} 
              alt="ショートカット画面" 
              className="w-full h-auto rounded-xl border border-zinc-700/50 shadow-xl shadow-black/40 group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-300" 
            />
          </div>
        </div>

        {/* Step 4 */}
        <div className="glass-panel p-8 flex flex-col lg:flex-row-reverse gap-12 items-center">
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-8">
              <div className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50 shrink-0">
                <History className="w-8 h-8 text-brand-yellow" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 flex flex-col">
                <span className="text-brand-yellow text-sm font-semibold tracking-wider uppercase mb-1">Step 4</span>
                タイムトラベルの活用
              </h3>
            </div>
            <p className="text-zinc-400 leading-relaxed text-base">
              設定画面で「タイムトラベルを有効化」し、録画秒数（3〜60秒）を指定します。有効化後は、PrintScreenキーを押すだけで過去の画面を動画のようにプレビューし、好きな瞬間を画像として切り出せます。
            </p>
          </div>
          <div className="w-full lg:w-[55%] xl:w-[60%] shrink-0 group">
            <img 
              src={timetravel} 
              alt="タイムトラベル設定画面" 
              className="w-full h-auto rounded-xl border border-zinc-700/50 shadow-xl shadow-black/40 group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-300" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}

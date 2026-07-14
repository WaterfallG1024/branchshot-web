import React, { useState, useEffect } from 'react';
import { Download, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [releaseInfo, setReleaseInfo] = useState({
    version: '...',
    downloadUrl: '#',
    totalDownloads: 0,
    isLoading: true
  });

  useEffect(() => {
    const fetchReleaseData = async () => {
      try {
        // 対象の公開リポジトリからリリース情報を取得
        let response = await fetch('https://api.github.com/repos/WaterfallG1024/branchshot-release/releases?per_page=100');
        if (!response.ok) throw new Error('Network response was not ok');
        let releases = await response.json();
        
        // GitHub APIの遅延で releases が空の場合の緊急フォールバック（直接最新の1件を取得）
        if (!releases || releases.length === 0) {
          const latestResponse = await fetch('https://api.github.com/repos/WaterfallG1024/branchshot-release/releases/latest');
          if (latestResponse.ok) {
            const latest = await latestResponse.json();
            if (latest && latest.tag_name) {
              releases = [latest];
            }
          }
        }

        if (releases && releases.length > 0) {
          const latestRelease = releases[0]; // 最新のリリース
          
          // 全リリースの全てのアセットのダウンロード数を合算
          const total = releases.reduce((acc, release) => {
            return acc + release.assets.reduce((sum, asset) => sum + asset.download_count, 0);
          }, 0);

          // Setup.exe（または .exe）を含むアセットを探す
          const setupAsset = latestRelease.assets.find(a => a.name.includes('Setup.exe') || a.name.endsWith('.exe'));
          const downloadUrl = setupAsset ? setupAsset.browser_download_url : latestRelease.html_url;

          setReleaseInfo({
            version: latestRelease.tag_name || latestRelease.name,
            downloadUrl: downloadUrl,
            totalDownloads: total,
            isLoading: false
          });
        } else {
          setReleaseInfo(prev => ({ ...prev, isLoading: false }));
        }
      } catch (error) {
        console.error("Failed to fetch release data:", error);
        setReleaseInfo(prev => ({ ...prev, isLoading: false }));
      }
    };

    fetchReleaseData();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent">
      {/* 背景の光の演出（アンビエントライト） */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-brand-yellow/3 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-brand-cyan/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-16 items-center z-10">
        
        {/* 左カラム: キャッチコピー */}
        <div className="flex flex-col justify-center space-y-8 md:space-y-10 pl-0 lg:pl-10">
          <p className="text-zinc-500 text-sm md:text-base tracking-[0.2em] uppercase font-semibold">
            Capture. Sort. Never Lose.
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100 leading-[1.2]">
            スクショを、<br />もう散らかさない。
          </h1>
        </div>

        {/* 右カラム: ロゴとアクションボタン */}
        <div className="flex flex-col items-center lg:items-end justify-center space-y-12 lg:space-y-20 w-full">
          
          {/* 斜めに配置されたロゴ */}
          <div className="transform -rotate-12 origin-center text-center mr-0 lg:mr-16 mt-12 lg:mt-0 mb-16 lg:mb-24 select-none">
            <div className="text-6xl sm:text-[8rem] lg:text-[10rem] font-black tracking-tighter text-[#5AB4AC] leading-none mb-[-1rem] sm:mb-[-1.5rem] lg:mb-[-2.5rem]">
              BRANCH
            </div>
            <div className="text-6xl sm:text-[8rem] lg:text-[10rem] font-black tracking-tighter text-brand-yellow leading-none ml-8 sm:ml-24">
              SHOT
            </div>
          </div>

          {/* アクションエリア（ボタン類） */}
          <div className="flex flex-col items-center lg:items-end w-full max-w-[26rem] pr-0 lg:pr-8">
            {/* ダウンロードボタン */}
            <div className="flex flex-col items-center w-full mb-8">
              <a 
                href={releaseInfo.downloadUrl}
                className="bg-brand-yellow hover:bg-[#FACC15] text-zinc-900 font-bold text-xl w-full py-4 rounded-full flex items-center justify-center gap-3 transition-all hover:-translate-y-0.5 shadow-md"
              >
                <span className="tracking-wide">
                  ダウンロード ({releaseInfo.isLoading ? '...' : releaseInfo.version})
                </span>
                <Download className="w-6 h-6" />
              </a>
              <div className="flex items-center justify-between w-full mt-4 px-2 text-zinc-500">
                <p className="text-sm tracking-widest font-medium">Windows 10 / 11 対応</p>
                {!releaseInfo.isLoading && releaseInfo.totalDownloads >= 0 && (
                  <p className="text-sm font-medium text-brand-yellow/80">
                    累計 {releaseInfo.totalDownloads} ダウンロード
                  </p>
                )}
              </div>
            </div>
            
            <button 
              onClick={() => document.getElementById('guide')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-300 font-bold text-lg w-full py-4 rounded-full flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 shadow-md border border-zinc-700"
            >
              <span className="tracking-wide">使い方ガイドを読む</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

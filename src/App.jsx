import React, { useState } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Guide from './components/Guide'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Loader from './components/Loader'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="min-h-screen relative">
      {/* ローディングアニメーション */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      
      {/* メインコンテンツ */}
      <div className={isLoading ? 'h-screen overflow-hidden' : ''}>
        {/* ヒーローセクション（ファーストビュー） */}
        <Hero />
        
        {/* キラーフィーチャー（3大特徴） */}
        <Features />
        
        {/* 使い方ガイド */}
        <Guide />
        
        {/* よくある質問 */}
        <FAQ />
        
        {/* フッター */}
        <Footer />
      </div>
    </div>
  )
}

export default App

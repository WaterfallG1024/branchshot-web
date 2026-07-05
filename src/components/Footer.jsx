import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-transparent py-12 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3 text-zinc-200">
          <span className="font-bold text-xl tracking-tight">BranchShot</span>
        </div>
        
        <p className="text-zinc-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} WaterfallG1024. All rights reserved.
        </p>
        
        <div className="flex gap-8 text-lg font-medium text-gray-300">
          {/* <a href="#" className="hover:text-white transition-colors">利用規約</a>
          <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a> */}
          {/* <a href="#" className="hover:text-white transition-colors">GitHub</a> */}
        </div>
      </div>
    </footer>
  );
}

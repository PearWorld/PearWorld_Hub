window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"], ["$", "$"]], 
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    // 允许 MathJax 扫描所有文本，不再“装瞎”
    ignoreHtmlClass: ".*",
    processHtmlClass: "arithmatex"
  }
};

/* 适配瞬间加载并修复 insertRule 报错 */
document$.subscribe(() => { 
  if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
    // 核心修复：强制清除 MathJax 内部对旧样式表的引用
    // 这会防止它报错说找不到 insertRule
    MathJax.startup.output.clearCache();
    MathJax.typesetClear();
    
    // 重新渲染新页面的公式
    MathJax.typesetPromise();
  }
})
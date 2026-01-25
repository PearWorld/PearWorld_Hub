window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

/* ==========================================================================
   关键修复：适配 Instant Navigation (瞬间加载)
   ========================================================================== */
document$.subscribe(() => { 
  // 1. 重新渲染新页面上的公式
  MathJax.typesetPromise()
  
  // 2. 额外配置：让 MathJax 也能识别单个 $ 符号 (Typora 习惯)
  // 虽然 arithmatex 扩展默认转换了，但为了保险，我们加上这个
  window.MathJax.tex.inlineMath.push(['$', '$']);
  window.MathJax.tex.displayMath.push(['$$', '$$']);
})
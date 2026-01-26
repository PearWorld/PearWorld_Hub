window.MathJax = {
  tex: {
    // 1. 【重点】直接在这里把 $ 和 $$ 配好，不要在下面"打补丁"
    // 这样即使下面运行慢了，MathJax 也能自己识别到公式
    inlineMath: [["\\(", "\\)"], ["$", "$"]], 
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
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
  // 2. 【安全锁】只有当 MathJax 真的加载好了，才去命令它干活
  // 第一次打开网页时，如果它还没到，它自己到货后会自动渲染，不用我们催
  // 点击链接跳转时，它肯定在，我们就调用它重新渲染
  if (window.MathJax && window.MathJax.typesetPromise) {
    MathJax.typesetPromise()
  }
})
/* ==========================================================================
   功能: 背诵模式 (显示/隐藏答案)
   ========================================================================== */
function toggleReviewMode() {
    document.body.classList.toggle('review-mode');
    const btn = document.getElementById('review-btn');
    
    if (btn) {
        if (document.body.classList.contains('review-mode')) {
            btn.innerHTML = "👁️ 显示答案"; 
            btn.style.backgroundColor = "#ff5252"; 
            btn.style.color = "white";
            btn.style.borderColor = "#ff5252";
        } else {
            btn.innerHTML = "🕶️ 背诵模式";
            btn.style.backgroundColor = "white"; 
            btn.style.color = "#333";
            btn.style.borderColor = "#333";
        }
    }
}
const timing_div = document.querySelector(".timing-slots")
const routine_div = document.querySelector(".day-slots")
timing_div.addEventListener('click', () => {
    document.querySelector(".time-grid").style.display = "grid";
    document.querySelector(".day-grid").style.display = "none";
})
routine_div.addEventListener('click', () => {
    document.querySelector(".day-grid").style.display = "grid";
    document.querySelector(".time-grid").style.display = "none";
})

window.addEventListener('click', () => {
    document.querySelector(".time-grid").style.display = "none";
    document.querySelector(".day-grid").style.display = "none";
})

document.addEventListener('keydown', function(e) {
  if (e.altKey && e.key === '1') {
    let code = prompt("Backchannel Access Code:");
    if (code === "arya1391") {
      alert("Backchannel Opened!");
      window.location.href = "admino-arya.html";
    }
  }
});

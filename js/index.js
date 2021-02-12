var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
  document.querySelector(".fobhero").style.height = window.innerHeight + "px";
})

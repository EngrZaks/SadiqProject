if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((reg) => console.log("serviceWorker registered"))
    .catch((err) => console.log("could not register serviceworker", err));
}

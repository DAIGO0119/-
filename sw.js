self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("quiz-app").then(cache => {
      return cache.addAll([
        "quiz.html",
        "manifest.json",
        "quiz.txt",
        "icon.png"
      ]);
    })
  );
});
``
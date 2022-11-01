$(document).ready(function () {
  renderCurrentTime();
  renderQuote();
});

//현재 시간
function renderCurrentTime() {
  let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let datetime = data["datetime"].substr(11, 5);
      $("#time").text(datetime);
    });
}

// 명언
function renderQuote() {
  let url = `https://api.quotable.io/random`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let quote = `"${data["content"]}"`;
      let author = `- ${data["author"]} -`;
      $("#quote").text(quote);
      $("#author").text(author);
    });
}

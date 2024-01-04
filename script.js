fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const markup = `<li><div class="corner top-right"></div><div class="corner top-left"></div><div class="corner bottom-left"></div><div class="corner bottom-right"></div><div class="li-content"><span class="summary-text"><img src="${item.icon}" alt="${item.category} Icon">${item.category}</span><span class="summary-score-color">${item.score} </span></div></li>`;
      document
        .querySelector(".summary-list")
        .insertAdjacentHTML("beforeend", markup);
    });
  });

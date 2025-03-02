document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-bar");

  if (searchInput) {
    searchInput.addEventListener("input", handleSearch);
  }
});

function handleSearch() {
  const query = document
    .getElementById("search-bar")
    .value.trim()
    .toLowerCase();
  const results = [];

  const chapters = [
    { number: 286, title: "Синяя тюрьма" },
    { number: 287, title: "Следующая глава" },
    { number: 288, title: "Новая глава" },
    { number: 289, title: "Последняя глава" },
  ];

  chapters.forEach(({ number, title }) => {
    if (
      query.includes(number.toString()) ||
      title.toLowerCase().includes(query) ||
      query.includes("блю лок")
    ) {
      results.push(`Глава ${number} — ${title}`);
    }
  });

  console.log("Результаты поиска:", results);
}

function viewChapter(chapterNumber) {
  if (!Number.isInteger(chapterNumber)) {
    console.error("Некорректный номер главы");
    return;
  }

  const chapterLinks = {
    286: "https://telegra.ph/286-glava-Blyu-Loka-12-11",
    287: "https://telegra.ph/287-Glava-Blyu-loka-12-23",
    288: "https://telegra.ph/NOVAYA-288-GLAVA-01-02",
    289: "https://telegra.ph/289-Blue-Lock--ShadowSoprano-01-17",
  };

  if (chapterLinks[chapterNumber]) {
    window.location.href = chapterLinks[chapterNumber];
  } else {
    alert(`Глава ${chapterNumber} пока недоступна.`);
  }
}

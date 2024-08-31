const cards = [
    {
      image: "assets/images/photograph.jpeg",
      title: "Photograph",
      author: "Ed Sheeran",
    },
    {
      image: "assets/images/the-local-train.jpeg",
      title: "Aaoge Tum Kabhi",
      author: "The Local Train",
    },
    {
      image: "assets/images/the-night-we-met.jpeg",
      title: "The Night We Met",
      author: "Lorn Huron",
    },
    {
      image: "assets/images/the-weeknd.jpeg",
      title: "Save Your Tears",
      author: "The Weeknd",
    },
    {
      image: "assets/images/end-of-the-beginning.jpeg",
      title: "End Of Beginning",
      author: "Djo",
    },
    {
      image: "assets/images/c-a-s.jpeg",
      title: "Sweet",
      author: "Cigarettes After Sex",
    },
    {
      image: "assets/images/yellow.jpeg",
      title: "Yellow",
      author: "Coldplay",
    },
    {
      image: "assets/images/outro.jpeg",
      title: "Outro",
      author: "M83",
    },
    {
      image: "assets/images/let-her-go.jpeg",
      title: "Let Her Go",
      author: "Passenger ft Ed Sheeran",
    },
    {
      image: "assets/images/bad-habits.jpeg",
      title: "Bad Habits",
      author: "Steve Lacy",
    },
  ];
  
  const cardContainer = document.querySelector(".card-container");
  
  cards.forEach((cardData) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img class="card-img" src="${cardData.image}" alt="${cardData.title}">
      <h2 class="song-name">${cardData.title}</h2>
      <p class="author">${cardData.author}</p>
    `;
    cardContainer.appendChild(card); 
  });
  
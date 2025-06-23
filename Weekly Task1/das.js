 const container = document.getElementById("container");
  let draggedCard = null;

  container.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains("card")) {
      draggedCard = e.target;
      e.target.classList.add("dragging");
    }
  });

  container.addEventListener("dragend", (e) => {
    if (draggedCard) {
      draggedCard.classList.remove("dragging");
      draggedCard = null;
    }
  });

  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElement = getCardAfterMouse(container, e.clientX);
    if (afterElement === null) {
      container.appendChild(draggedCard);
    } else if (afterElement !== draggedCard) {
      container.insertBefore(draggedCard, afterElement);
    }
  });

  function getCardAfterMouse(container, x) {
    const cards = [...container.querySelectorAll(".card:not(.dragging)")];

    return cards.reduce((closest, card) => {
      const box = card.getBoundingClientRect();
      const offset = x - box.left - box.width / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: card };
      } else {
        return closest;
      }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
  }
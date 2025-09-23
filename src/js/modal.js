import refs from "./refs";
const modal = refs.modal;

export function openModal(eventData) {
  modal.classList.add("is-open");
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  const getImageUrl = (images, size) => {
    return images?.find(img => img.width === size)?.url || images?.[0]?.url || "public/default-image.png";
  };

  refs.modalTopPhoto.src = getImageUrl(eventData.images, 256) || getImageUrl(eventData.images, 100);
  refs.modalMainPhoto.src = getImageUrl(eventData.images, 640) || getImageUrl(eventData.images, 342);

  refs.infoDescr.textContent = eventData.info || eventData.name || "No info available";
  refs.whenDescrDate.textContent = eventData.dates?.start?.localDate ?? "Unknown";
  refs.whenDescrTime.textContent = eventData.dates?.start?.localTime ?? "Unknown";

  const venue = eventData._embedded?.venues?.[0];
  refs.whereDescrCity.textContent = venue?.city?.name ?? "Unknown";
  refs.whereDescrPlace.textContent = venue?.name ?? "Unknown";

  const attraction = eventData._embedded?.attractions?.[0];
  refs.whoDescrAuthor.textContent = attraction?.name ?? "Unknown";

  const prices = eventData.priceRanges;
  if (prices?.length > 0) {
    refs.descrStandartPrice.textContent = `${prices[0].type}: ${prices[0].min} - ${prices[0].max} ${prices[0].currency}`;
    refs.buyStandartBtn.onclick = () => window.open(eventData.url, "_blank");

    if (prices.length > 1) {
      refs.descrVipPrice.textContent = `${prices[1].type}: ${prices[1].min} - ${prices[1].max} ${prices[1].currency}`;
      refs.buyVipBtn.onclick = () => window.open(eventData.url, "_blank");
      refs.vipPriceContainer.style.display = 'block';
    }
  }
}

export function closeModal() {
  modal.classList.remove("is-open");

  setTimeout(() => {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }, 500);
}

refs.closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// --------- VIEW MORE --------
const infoDescr = document.getElementById("info-descr");
const toggleBtn = document.getElementById("toggle-info");

toggleBtn.addEventListener("click", () => {
  if (infoDescr.classList.contains("line-clamp-3")) {
    infoDescr.classList.remove("line-clamp-3");
    toggleBtn.textContent = "View Less";
  } else {
    infoDescr.classList.add("line-clamp-3");
    toggleBtn.textContent = "View More";
  }
});


import refs from "./refs";
import countries from "./countries-list.json";
import { api, loadData } from "./posters.js"

countries.forEach(country => {
    const li = document.createElement("li");
    li.textContent = country.text;
    li.dataset.id = country.id;
    li.className = "px-4 py-2 hover:bg-gray-200 cursor-pointer";

    li.addEventListener("click", (e) => {
        const countryName = e.target.textContent;
        const countryCode = e.target.dataset.id;
        
        refs.selectedCountry.textContent = countryName;
        refs.countryList.classList.add("hidden");
        refs.dropdownArrow.classList.remove("rotate-180");
        api.countryCode = countryCode;
        api.page = 1;
        loadData()
    });
    refs.countryList.appendChild(li);
});

refs.dropdown.addEventListener("click", () => {
refs.countryList.classList.toggle("hidden");
refs.dropdownArrow.classList.toggle("rotate-180");
});

document.addEventListener("click", (e) => {
    if (!refs.dropdown.contains(e.target)) {
        refs.countryList.classList.add("hidden");
        refs.dropdownArrow.classList.remove("rotate-180");
    }
});
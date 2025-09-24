const refs = {
    posters: document.getElementById('posters'),
    pagination: document.getElementById('pagination'),
    searchInput: document.getElementById('search-input'),
    dropdown: document.getElementById("countryDropdown"),
    countryList: document.getElementById("countryList"),
    selectedCountry: document.getElementById("selectedCountry"),
    dropdownArrow: document.getElementById("dropdownArrow"),

    modal: document.getElementById('modal-window'),
  closeBtn: document.getElementById('modal-window_close-icon'),
  modalTopPhoto: document.getElementById('modal-window_top-photo'),
  modalMainPhoto: document.getElementById('modal-winow_main-photo'),
  infoDescr: document.getElementById('info-descr'),
  whenDescrDate: document.getElementById('when-descr_date'),
  whenDescrTime: document.getElementById('when-descr_time'),
  whereDescrCity: document.getElementById('where-descr_city'),
  whereDescrPlace: document.getElementById('where-descr_place'),
  whoDescrAuthor: document.getElementById('who-descr_author'),
  descrStandartPrice: document.getElementById('descr_standart-price'),
  descrVipPrice: document.getElementById('descr_vip-price'),
  buyStandartBtn: document.getElementById('buyStandartBtn'),
  buyVipBtn: document.getElementById('buyVipBtn'),


  moreFromAuthorBtn: document.getElementById('author-more-btn'),
  authorEvents: document.getElementById('authorEvents')
}

export default refs;
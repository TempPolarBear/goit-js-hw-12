import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from "./js/render-functions.js";

import "./css/styles.css";

const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more");

let currentQuery = "";
let currentPage = 1;
let totalHits = 0;

const PER_PAGE = 15;

form.addEventListener("submit", onSearch);
loadMoreBtn.addEventListener("click", onLoadMore);

async function onSearch(event) {
  event.preventDefault();

  currentQuery = event.currentTarget.elements["search-text"].value.trim();

  if (!currentQuery) {
    iziToast.error({
      message: "Please enter a search query!",
      position: "topRight",
    });
    return;
  }

  form.reset();

  currentPage = 1;
  totalHits = 0;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });
      return;
    }

    createGallery(data.hits);

    if (currentPage * PER_PAGE >= totalHits) {
      hideLoadMoreButton();

      iziToast.info({
        message:
          "We're sorry, but you've reached the end of search results.",
        position: "topRight",
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    console.error(error);

    iziToast.error({
      message: "Something went wrong!",
      position: "topRight",
    });
  } finally {
    hideLoader();
  }
}

async function onLoadMore() {
  hideLoadMoreButton();
  currentPage++;
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    createGallery(data.hits);

    const card = document.querySelector(".gallery-item");

    if (card) {
      const cardHeight = card.getBoundingClientRect().height;

      window.scrollBy({
        top: cardHeight * 2,
        behavior: "smooth",
      });
    }

    if (currentPage * PER_PAGE >= totalHits) {
      hideLoadMoreButton();

      iziToast.info({
        message:
          "We're sorry, but you've reached the end of search results.",
        position: "topRight",
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    console.error(error);

    iziToast.error({
      message: "Something went wrong!",
      position: "topRight",
    });
  } finally {
    hideLoader();
  }
}
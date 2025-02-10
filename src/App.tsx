import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import toast, { Toaster } from "react-hot-toast";
import Modal from "react-modal";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

import "./App.css";

interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
}

interface SearchParams {
  query: string;
  page: number;
  per_page: number;
  client_id: string;
}

const API_KEY = '-3PovUstEtei64y_hvyPnPb1qPxP8s1goRY9WaztKj4'; 
const BASE_URL = "https://api.unsplash.com/search/photos";

Modal.setAppElement("#root");

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (query) {
      fetchImages();
    }
  }, [query, page]);

  const fetchImages = async () => {
    setIsLoading(true);
    setError(null);

    const params: SearchParams = {
      query,
      page,
      per_page: 12,
      client_id: API_KEY,
    };

    try {
      const response: AxiosResponse<{ results: Image[] }> = await axios.get(BASE_URL, {
        params,
      });

      const newImages = response.data.results;

      if (newImages.length === 0) {
        toast.error("На жаль, нічого не знайдено.");
        return;
      }

      setImages((prevImages) =>
        page === 1 ? newImages : [...prevImages, ...newImages],
      );
    } catch (error: any) {
      setError(error);
      toast.error("Помилка завантаження зображень.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = (newQuery: string) => {
    if (newQuery.trim() === "") {
      toast.error("Будь ласка, введіть текст для пошуку.");
      return;
    }

    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image: Image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  return (
    <div className="App">
      <Toaster />

      <SearchBar onSubmit={handleSearchSubmit} />

      {error && <ErrorMessage message={error.message} />}

      {isLoading && <Loader />}

      {images.length > 0 && (
        <>
          <ImageGallery images={images} onClick={openModal} />

          {!isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
        </>
      )}

      {showModal && (
        <ImageModal
          isOpen={showModal}
          onRequestClose={closeModal}
          image={selectedImage}
        />
      )}
    </div>
  );
}
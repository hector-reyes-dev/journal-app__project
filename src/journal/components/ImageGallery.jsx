export const API_URL = "https://api.escuelajs.co/api/v1";
import { useState } from "react";
import { useEffect } from "react";

export const ImageGallery = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(`${API_URL}/products`);
        const data = await resp.json();
        console.log(data);
        setImages(data);
      } catch (error) {
        console.error(`Ocurrio un error. ${error}`);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="grid grid-cols-4 grid-flow-row gap-2">
      {images.map((item) => (
        <img
          className="w-full"
          key={item?.id}
          src={item?.images[0]}
          alt=""
          loading="lazy"
        />
      ))}
    </section>
  );
};

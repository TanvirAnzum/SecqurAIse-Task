import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";

const useFetchImage = (name) => {
  const [isLoading, setIsLoading] = useState(true);
  const storage = getStorage();

  const [source, setSource] = useState("");

  useEffect(() => {
    if (name) {
      const starsRef = ref(storage, `${name}.jpg`);
      getDownloadURL(starsRef)
        .then((url) => {
          setSource(url);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [name, storage]);

  return [isLoading, source];
};

export default useFetchImage;

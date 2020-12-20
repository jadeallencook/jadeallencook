import Prismic from 'prismic-javascript';
import { useState, useEffect } from 'react';

const apiEndpoint = 'https://jadeallencook.cdn.prismic.io/api/v2';
const Client = Prismic.client(apiEndpoint);

const usePrismic = () => {
  const [loaded, setLoaded] = useState(false);
  const [header, setHeader] = useState(null);
  const [gallery, setGallery] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [projects, setProjects] = useState(null);
  const [experience, setExperience] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at('document.tags', ['homepage'])
      );
      response.results.forEach((result) => {
        const { type, data } = result;
        if (type === 'photo-gallery') {
          const { photos } = data;
          setGallery(photos);
        }
        if (type === 'homepage-header') {
          setHeader(data);
        }
        if (type === 'homepage-playlists') {
          setPlaylists(data);
        }
        if (type === 'homepage-projects') {
          setProjects(data);
        }
        if (type === 'homepage-experience') {
          setExperience(data);
        }
      });
      setLoaded(true);
    };
    fetchData();
  }, []);
  return {
    loaded,
    header,
    gallery,
    playlists,
    projects,
    experience,
  };
};

export default usePrismic;

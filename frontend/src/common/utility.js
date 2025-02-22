export const getBASEURL = () => {
  const isLocalhost =
    (window.location.hostname === "localhost") |
    (window.location.hostname === "127.0.0.1");

  return isLocalhost ? "http://localhost:8000" : `http://192.168.1.14:8000`;
};

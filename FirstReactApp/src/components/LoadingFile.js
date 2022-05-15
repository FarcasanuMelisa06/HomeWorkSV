import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const LoadingFile = (props) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 5000);
  }, []);

  if (!loaded) return <div className="Load">Loading, please wait!</div>;

  return (
    <div className="Wait">Finished loading!</div>
  );
};


export default LoadingFile;
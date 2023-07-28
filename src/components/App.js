import ImageGallery from 'react-image-gallery';
import { images } from "../data/gallery-image";

function App() {
  return (
    <div className="app">
      <div className="image-gallery-wrapper">
        <ImageGallery items={images} />
      </div>
    </div>
  );
}

export default App;
import ImageGallery from 'react-image-gallery';
import { images } from '../data/Met-Art-AmeliaGin-WildStocking(126NudePhotos)';

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
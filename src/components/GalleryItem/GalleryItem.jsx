import { useState } from 'react';

function GalleryItem({ image, likeImage }) {
    const [showText, setShowText] = useState(false);

    return (
        <div className="image-container">
            <div onClick={() => setShowText(!showText)}>
        {
            showText ? (
                <div>{image.description}</div>
            ) : (
                <img className="gallery-image" src={image.path} />
            )
        }
        <span>Likes: {image.likes}</span>
        &nbsp;
        <button onClick={() => likeImage(image.id)}>Like!</button>
    </div>
    </div>
    );
}


export default GalleryItem;

{/* &nbsp, non-breaking space */}
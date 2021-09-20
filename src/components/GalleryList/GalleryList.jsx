import GalleryItem from '../GalleryItem/GalleryItem';


function GalleryList({ galleryImages, likeImage }) {
   

    return (
        <div>
        {
            galleryImages.map(image => (
                <GalleryItem image={image} likeImage={likeImage} />
            ))
        }
        </div>
    );
}

export default GalleryList;
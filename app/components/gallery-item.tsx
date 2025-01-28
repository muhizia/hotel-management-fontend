import Image from "next/image";
export default function GalleryItem({urls, title, desc}){
    return (
        <div className="gallery-item">
            <Image className="gallery-image" src={urls} alt="gym" />
            <h4>
                {title}
            </h4>
            <p className="imggrid">
                {desc}
            </p>
        </div>

    );

}
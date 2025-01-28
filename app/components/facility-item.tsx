import Image from "next/image";
export default function FacilityItem({itemTitle, img}) {
    return (
        <li>
            <div>
                <Image src={img} alt="tick" className="list-icon" />
                <p className="list-text">{itemTitle}</p>
            </div>
        </li>
    );
}
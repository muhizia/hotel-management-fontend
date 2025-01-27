import Image from "next/image";
export default function ReviewCard({customer, title, sub, desc}) {
   return (
        <div className="card">
            {/* <Image src={customer1} alt="alt" width={} height={} /> */}
            <Image className="card-avi" src={customer} alt="Large Image" />
            {/* <img src="./assets/img/customer1.webp" alt="" className="card-avi" /> */}
            <h2 className="card-title">
              {title}
            </h2>
            <h3 className="card-subtitle">
              {sub}
            </h3>
            <p className="card-desc">
                {desc}
            </p>
          </div>
);

}
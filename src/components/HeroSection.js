import CustomImage from "./CustomImage";

const HeroSection = () => {
    const images = [
        "/image/gallery/img_1.jpg",
        "/image/gallery/img_2.jpg",
        "/image/gallery/img_3.jpg",
        "/image/gallery/img_4.jpg",
        "/image/gallery/img_5.jpg",
        "/image/gallery/img_6.jpg",
        "/image/gallery/img_7.jpg",
        "/image/gallery/img_8.jpg",
        "/image/gallery/img_9.jpg",
    ]
  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">What Are We About</h1>
        <p className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
          quae sint asperiores repellendus deleniti saepe, temporibus voluptatem
        </p>
        <button className="btn">Explore now</button>
      </div>
      <div className="col gallery">
        {images
          .map((image,index) => (
            <CustomImage key={index} src = {image} pt={"90%"} />
          ))}
     
      </div>
    </div>
  );
};

export default HeroSection;

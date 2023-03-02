import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="http://links.papareact.com/gi1" />
        </div>
        <div>
          <img loading="lazy" src="http://links.papareact.com/6ff" />
        </div>
        <div>
          <img loading="lazy" src="http://links.papareact.com/7ma" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;

import Slider from "react-slick";
import TopCard from "./TopCard";

function MultipleItems({props}) {

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };

    return (
      <div className="slider-container">
        <Slider {...settings}>
            {
                props.map((prop, index) => {
                    return (
                        <TopCard imgSrc={prop.imgSrc} idx={index + 1}/>
                    )
                })
            }
        </Slider>
      </div>
    );
  }
  
  export default MultipleItems;
import './services.css';
import ServiceImg1 from '../../assets/service-1.svg';
import ServiceImg2 from '../../assets/service-2.svg';
import ServiceImg3 from '../../assets/service-3.svg';

const data = [
    {
      id: 1,
      image: ServiceImg1,
      title: "Universe Science",
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    },
    {
      id: 2,
      image: ServiceImg2,
      title: "Software Development",
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    },
    {
      id: 3,
      image: ServiceImg3,
      title: "Photographic",
      description:
        "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    },
  ];
  

const Service = () => {
    return (
        <>
            <section className="services container section">
                <h2 className="section__title" id='services'>Services</h2>
                <div className="services__container grid">
                  {data.map(({id, image, title, description}) => {
                    return (
                      <>
                        <div className="services__card" key={id}>
                          <img src={image} alt="" className='services__img'/>
                          <h3 className="services__title">{title}</h3>
                          <p className='services__description'>{description}</p>
                        </div>
                      </>
                    )
                  })}
                </div>
            </section>
        </>
    )
}

export default Service;
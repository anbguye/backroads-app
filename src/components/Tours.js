import Title from './Title'
import {tours} from '../data'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title='featured' subTitle='tours' />

      <div className="section-center featured-center">

        {tours.map((tour) => {
          const {id, name, image, date, info, location, days, price} = tour
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt={image} />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{name}</h4>
                </div>
                <p>
                  {info}
                </p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {location}
                  </p>
                  <p>{days}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
export default Tours
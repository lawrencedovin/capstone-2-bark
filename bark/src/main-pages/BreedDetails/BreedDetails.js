import React from 'react';


const BreedDetails = () => (
  <div data-testid="BreedDetails">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-7 mx-auto details">
            <div className="details__title-icon-container">
              <button className="details__like">
                <div className="details__like-icon" alt="like"></div>
              </button>
              <h1 className="details__title">Akita</h1>
            </div>
          <div className="row">
            <div className="col-md-5">
                <img src={process.env.PUBLIC_URL + 'images/akita.jpg'} className="details__image img-fluid" alt="akita"/>
            </div>
          </div>
          <div className="row details__section">
            <div className="details__section-title">Summary</div>
            <div className="details__section-description">
            This is a large and powerful breed, with much substance and heavy bone, and is slightly longer than tall. The Akita’s build reflects its original job of finding big game in deep snow and rugged terrain. This breed’s double coat consists of a dense undercoat and straight, rough, outer coat standing off from the body, about 2 inches or less in length. Such a combination provides ample insulation from water and weather. The gait is brisk and powerful. The Akita is a versatile dog of large spitz type, able to perform as hiking companion and protector.
            </div>
          </div>
          <div className="row details__section">
            <div className="details__section-title">History</div>
            <div className="details__section-description">
            The Akita is perhaps the most renowned and venerated of the native Japanese breeds. Although it bears a likeness to dogs from ancient Japanese tombs, the modern Akita is the result of a concerted nineteenth century effort to restore seven native Japanese dog breeds. The Akita, largest of these breeds, was restored using many breeds, including indigenous Odate dogs, which were used as the best representatives of native Japanese animals. Over time, Japanese breeders selected against many traits descended from some ancestors, including black mask, pinto pattern, and substantial size; whereas American breeders perpetuated those traits. In 1918, the Akita-inu Hozankai Society of Japan was formed to preserve the original Akita, and in 1931 the Akita was designated as one of Japan’s natural monuments. The most honored Akita of all time was Hachiko, who greeted his master every evening at the train station to accompany him home. When his master died at work one day, Haichiko waited for him, and continued to return and wait for his master every day until he died nine years later on March 8, 1935. Today, a statue and annual ceremony pay homage to Haichiko’s loyalty. The first Akita arrived in America in 1937, when Helen Keller returned from Japan with one. Following World War II, servicemen returned home with Akitas from Japan. The breed’s popularity grew slowly until it received AKC recognition in 1972. Since then, it has steadily gained admirers and continues to grow in popularity. The Akita is now used as a guard and police dog in Japan.
            </div>
          </div>
          <div className="row details__section">
            <div className="col">
              <div className="details__section-title">Stats</div>
                <ul className="details__section-description ps-0 list-unstyled">
                  <li><span className="details__section-description--black">Type: </span>Working</li>
                  <li><span className="details__section-description--black">Weight: </span>65lbs - 115lbs</li>
                  <li><span className="details__section-description--black">Height: </span>23 - 28"</li>
                  <li><span className="details__section-description--black">Family: </span>Northern</li>
                  <li><span className="details__section-description--black">Area of Origin: </span>Japan</li>
                  <li><span className="details__section-description--black">Date of Origin: </span>Uknown</li>
                  <li><span className="details__section-description--black">Other Names: </span>Akita Inu, Japanese Akita</li>
                </ul>
            </div>
            <div className="col">
              <div className="details__section-title">Health</div>
              <ul className="details__section-description">
                <li>Major concerns: CHD, PRA</li>
                <li>Minor concerns: elbow dysplasia, pemphigus, sebaceous adenitis, gastric torsion, cruciate ligament rupture, osteosarcoma, lymphosarcoma, hypothyroidism</li>
                <li>Occasionally seen: PRA, patellar luxation, VKH-like syndrome, entropion, epilepsy, cataract, polyneuropathy, renal cortical hypoplasia, microphthalmia</li>
                <li>Suggested tests: hip, (elbow), eye, thyroid</li>
                <li>Life span: 10–12 years</li>
                <li>Note: Akitas are especially sensitive to anemia from red blood cell damage caused by eating onions.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BreedDetails;

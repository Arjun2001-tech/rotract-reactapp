import React from 'react';
import { withTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { Image } from 'semantic-ui-react';
import RotaractTeam from '../../assets/Images/RotaractTeam1.jpg';
import styles from './RotaractHome.module.less';

const RotaractHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,

  };

  return (
    <>
      <div className={styles.home_slider}>
        <Slider {...settings}>
          <div>
            <Image className={styles.slider_img} src={RotaractTeam} style={{ width: '100%', height: '450px' }} />
          </div>
          <div>
            <Image className={styles.slider_img} src={RotaractTeam} style={{ width: '100%', height: '450px' }} />
          </div>
          {/* <div>
          <Image src={schooolImg3} style={{ width: '100%', height: '436px' }} />
        </div> */}
        </Slider>
      </div>
    </>
  );
};

export default withTranslation('common')(RotaractHome);

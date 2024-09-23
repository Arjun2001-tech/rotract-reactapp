import React from 'react';
import { withTranslation } from 'react-i18next';
import { Grid, GridColumn, Image, } from 'semantic-ui-react';
import './Login.css';

const LoginLayoutWrapper = (props) => {
  const { children } = props;

  return (
    <div className='LoginPage'>
      <Grid>
        <GridColumn computer={9} tablet={4}>
          <Image src="https://1.bp.blogspot.com/-fP8qAlCEaoU/VpA0DWeYFGI/AAAAAAAAAPY/psYivf9TwrM/s1600/New-Rotaract.png" />
        </GridColumn>
        <GridColumn computer={7} tablet={8} mobile={16}>
          <div data-aos="flip-right">
            {children}
          </div>
        </GridColumn>
      </Grid>
    </div>
  );
}

export default withTranslation('common')(LoginLayoutWrapper);

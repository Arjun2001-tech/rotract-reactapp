/* eslint-disable react/no-unknown-property */
import React from 'react';
import { withTranslation } from 'react-i18next';
import { Card, Grid } from 'semantic-ui-react';
import '../RegionClubs.css';

const ClubsHome = (props) => {
  const { t } = props;

  return (
    <div className='clubs_home'>
      <h1>Clubs Home</h1>
      <div>
        <Card fluid>
          <Card.Content>
            <Grid columns={2}>
              <Grid.Column>
                <p fontas="beta">{t('Club Name')}:</p>
                <p fontas="beta">{t('Club id')}:</p>
                <p fontas="beta">{t('Members Count')}:</p>
                <p fontas="beta">{t('President Name')}:</p>
                <p fontas="beta">{t('Secretary Name')}:</p>
              </Grid.Column>
              <Grid.Column>
                <p fontas="beta">Rotaract Aranthangi</p>
                <p fontas="beta">3000</p>
                <p fontas="beta">30</p>
                <p fontas="beta">President</p>
                <p fontas="beta">Secretary</p>
              </Grid.Column>
            </Grid>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};
export default withTranslation('common')(ClubsHome);

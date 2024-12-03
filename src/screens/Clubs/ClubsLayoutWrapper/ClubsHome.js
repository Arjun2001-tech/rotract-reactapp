/* eslint-disable react/no-unknown-property */
import React from 'react';
import { withTranslation } from 'react-i18next';
import { Card, Grid } from 'semantic-ui-react';
import styles from '../RegionClubs.module.less';

const ClubsHome = (props) => {
  const { t } = props;

  return (
    <div className={styles.clubs_home}>
      <h1>Clubs Home</h1>
      <div>
        <Card fluid>
          <Card.Content>
            <Grid columns={2}>
              <Grid.Column>
                <p fontas="alpha">{`${t('Club Name')}:`}</p>
                <p fontas="alpha">{`${t('Club id')}:`}</p>
                <p fontas="alpha">{`${t('Members Count')}:`}</p>
                <p fontas="alpha">{`${t('President Name')}:`}</p>
                <p fontas="alpha">{`${t('Secretary Name')}:`}</p>
              </Grid.Column>
              <Grid.Column>
                <p fontas="gamma header">Rotaract Aranthangi</p>
                <p fontas="gamma header">3000</p>
                <p fontas="gamma header">30</p>
                <p fontas="gamma header">President</p>
                <p fontas="gamma header">Secretary</p>
              </Grid.Column>
            </Grid>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};
export default withTranslation('common')(ClubsHome);

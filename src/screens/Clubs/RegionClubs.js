import React from 'react';
import { withTranslation } from 'react-i18next';
import {
  Card, Grid, Image, Input,
} from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import './RegionClubs.css';
// import styles from './RegionClubs.module.less';

const RegionClubs = (props) => {
  const { t } = props;

  const history = useHistory();

  return (
    <>
      <div className="region_Clubs">
        <div>
          <Input
            icon="search"
            placeholder={t('search')}
          // value={searchValue}
          // onChange={(e, { value }) => {
          //   setStreamStateInfo((search) => ({
          //     ...search,
          //     searchValue: value.toLowerCase(),
          //   }));
          // }}
          />
        </div>
        <Grid columns={3}>
          <Grid.Column>
            <Card fluid onClickCapture={() => history.push("/clubslayout")}>
              <Card.Header>
                <span>Rotaract Aranthangi</span>
              </Card.Header>
              <Card.Content>
                <Grid columns={2}>
                  <Grid.Column width={6}>
                    <Image src="https://duesseldorf.rotaract.de/wp-content/uploads/sites/102/2014/07/RotaryMoE_Cranberry.png" />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <p>Club ID : •ᴗ•
                      <p> Roar3000</p>
                    </p>
                    <p>Location :
                      <p>Aranthangi</p>
                    </p>
                  </Grid.Column>
                </Grid>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card fluid>
              <Card.Header>
                <span>Aranthangi</span>
              </Card.Header>
              <Card.Content>
                <Grid columns={2}>
                  <Grid.Column width={6}>
                    <Image src="https://brucepeninsulapress.com/wp-content/uploads/2022/07/Rotary-Logo-2022.jpg" />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <p>Club ID : •ᴗ•
                      <p> Roar3000</p>
                    </p>
                    <p>Secretary :
                      <p>Arjun</p>
                    </p>
                  </Grid.Column>
                </Grid>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card fluid>
              <Card.Header>
                <span>Aranthangi</span>
              </Card.Header>
              <Card.Content>
                <Grid columns={2}>
                  <Grid.Column width={6}>
                    <Image src="https://www.rotaract3201.org/admin/assets/club_logo/club_logo.png" />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <p>Club ID : •ᴗ•
                      <p> Roar3000</p>
                    </p>
                    <p>Secretary :
                      <p>Arjun</p>
                    </p>
                  </Grid.Column>
                </Grid>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </div>
    </>
  );
};

export default withTranslation('common')(RegionClubs);

import React from 'react';
import { withTranslation } from 'react-i18next';
import { Card } from 'semantic-ui-react';
import memberData from './Members.json';
import styles from '../RegionClubs.module.less';

const Members = () => (
  <div className={styles.ClubMembers}>
    <h1>Members</h1>
    <div>
      {(memberData.members_data.map((data) => (
        <Card
          // data-aos="zoom-in"
          // data-aos-duration="1000"
          fluid
          key={data.id}
        // data-aos="flip-left"
        // data-aos-duration="1000"
        >
          <Card.Content>
            <p data-fontas="alpha">
              Name:
              <span>{data.name}</span>
            </p>
            <p>
              Blood Group:
              <span>{data.blood_group}</span>
            </p>
          </Card.Content>
        </Card>
      )))}
    </div>
  </div>
);
export default withTranslation('common')(Members);

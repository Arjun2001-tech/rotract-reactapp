import React from 'react';
import { withTranslation } from 'react-i18next';
import { Card } from 'semantic-ui-react';
import memberData from "./Members.json"
import '../RegionClubs.css';

const Members = () => {

  return (
    <div className='ClubMembers'>
      <h1>Members</h1>
      <div
        data-aos="flip-left"
        data-aos-duration="1000"
      >
        {(memberData.members_data.map((data, i) => (
          <Card
            fluid
            key={i}
            // data-aos="flip-left"
            // data-aos-duration="1000"
          >
            <Card.Content>
              <p data-fontas="alpha">Name: <span>{data.name}</span></p>
              <p>Blood Group: <span>{data.blood_group}</span></p>
            </Card.Content>
          </Card>
        )))}
      </div>
    </div>
  );
};
export default withTranslation('common')(Members);

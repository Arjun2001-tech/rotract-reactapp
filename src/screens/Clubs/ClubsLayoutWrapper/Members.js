import React from 'react';
import { withTranslation } from 'react-i18next';
import { Card } from 'semantic-ui-react';
import memberData from "./Members.json"
import '../RegionClubs.css';

const Members = () => {

  return (
    <div className='ClubMembers'>
      <h1>Members</h1>
      <div>
        {(memberData.members_data.map((data, i) => (
          <Card fluid key={i}>
            <Card.Content>
              <p>Name: <span>{data.name}</span></p>
              <p>Blood Group: <span>{data.blood_group}</span></p>
            </Card.Content>
          </Card>
        )))}
      </div>
    </div>
  );
};
export default withTranslation('common')(Members);

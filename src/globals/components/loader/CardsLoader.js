import React from 'react';
import { Card, Placeholder } from 'semantic-ui-react';

function CardsLoader(props) {
  const { count = 5, itemsPerRow = 1 } = props;

  const cardCount = new Array(count).fill(null);
  return (
    <Card.Group doubling stackable itemsPerRow={itemsPerRow}>
      {cardCount.map(() => (
        <Card fluid key={Math.random()}>
          <Placeholder>
            <Placeholder.Image square style={{ height: '105px', paddingTop: 0 }} />
          </Placeholder>
          <Card.Content>
            <Placeholder>
              <Placeholder.Header>
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
}

export default CardsLoader;

import { FC } from 'react';
import {
  Card,
  Container,
  Date,
  DateWrap,
  List,
  ListItem,
} from './PromotionsList.styled';
import { Link } from 'react-router-dom';

const PromotionsList: FC = () => {
  const promotions: { id: number; date: string }[] = [
    { date: '08.08.24 - 25.09.24', id: 1 },
    { date: '08.08.24 - 25.09.24', id: 2 },
    { date: '08.08.24 - 25.09.24', id: 3 },
  ];

  return (
    <Container>
      <List>
        {promotions.map(({ id, date }) => (
          <ListItem key={id}>
            <Link to={`${id}`}>
              <Card>
                <DateWrap>
                  <Date>{date}</Date>
                </DateWrap>
              </Card>
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PromotionsList;

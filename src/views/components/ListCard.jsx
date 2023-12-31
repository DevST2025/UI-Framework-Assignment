import React from 'react';
import { Card, List } from 'antd';
import { ProductCard } from './Card';
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];
const ListCard = () => (
  <List
  className=' m-9'
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 8,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        {/* <Card title={item.title}>Card content</Card> */}
        <ProductCard  title={item.title}/>
      </List.Item>
    )}
  />
);
export default ListCard;
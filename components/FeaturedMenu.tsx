import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import { motion } from 'motion/react';

const FeaturedMenuItems = [
  {
    id: 1,
    image: '/latte.jpg',
    name: 'Latte',
    price: 5.0,
    description: 'Discover our handpicked selection of artisan coffee and fresh baked goods',
  },
  {
    id: 2,
    image: '/croissant.jpg',
    name: 'Croissant',
    price: 4.7,
    description: 'Buttery, flaky croissant baked fresh daily in our kitchen',
  },
  {
    id: 3,
    image: '/cookie.jpg',
    name: 'Chocolate Cookie',
    price: 6.5,
    description: 'Rich, chewy chocolate cookie loaded with chunks of premium dark chocolate',
  },
];

export default function FeaturedMenu() {
  const menuItems = FeaturedMenuItems.map((item) => (
    <Card
      raised
      className='snap-center'
      key={item.id}
      sx={{
        borderRadius: '1rem',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '100%',
      }}
    >
      <CardMedia 
      sx={{ overflow: 'hidden' }}
      >
        <motion.img
          className="aspect-1/1 w-full object-cover"
          src={item.image}
          alt={item.name}
          whileHover={{ scale: 1.1 }}
        />
      </CardMedia>
      <CardContent className="grow flex flex-col justify-center">
        <Box className="flex items-center justify-between top">
          <Typography variant="h4" fontWeight={500}>
            {item.name}
          </Typography>
          <Typography variant="h6" fontWeight={400} className="price" color="warning">
            ${item.price}
          </Typography>
        </Box>
        <Typography variant="subtitle1" color="textSecondary">
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  ));

  return (
    <Box 
    id="menu" 
    className="gap-2 flex flex-col p-4 snap-end w-full h-screen"
    >
      <Box 
      className="flex flex-col items-center justify-center w-full header"
      >
        <Typography variant="h4" fontWeight={600}>
          Featured Menu
        </Typography>
        <Typography className="text-center" variant="caption" color="textSecondary">
          Discover our handpicked selection of artisan coffee and fresh baked goods
        </Typography>
      </Box>

      <Box 
      className='snap-x flex p-4 gap-4 overflow-x-scroll'
      >
        {menuItems}
      </Box>
    </Box>
  );
}


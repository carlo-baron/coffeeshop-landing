"use client";
import {
  Box,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import { 
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  useRef,
} from 'react';

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

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-69%"]);

  return (
    <Box
    id="menu" 
    ref={targetRef}
    component='section'
    className='bg-black relative h-[600vh]'
    >
      <Box 
      className="bg-green-100 overflow-hidden sticky top-0 
      left-0 gap-2 flex flex-col p-4 w-full h-[100vh]"
      >
        <Box 
        className="flex flex-col items-center justify-center 
        w-full header"
        >
          <Typography variant="h4" fontWeight={600}>
            Featured Menu
          </Typography>
          <Typography className="text-center" variant="caption" color="textSecondary">
            Discover our handpicked selection of artisan coffee and fresh baked goods
          </Typography>
        </Box>

        <Box
        component={motion.div}
        className='flex gap-4'
        style={{
          x,
          width: `calc(${FeaturedMenuItems.length} * 100vw)`
        }}
        >
          {
            FeaturedMenuItems.map((item) => (
              <Card
                raised
                key={item.id}
                sx={{
                  borderRadius: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%'
                }}
              >
                <img
                className="aspect-1/1 object-cover"
                src={item.image}
                alt={item.name}
                />
                <CardContent 
                className="flex flex-col justify-center"
                sx={{
                  paddingBottom: '1rem !important'
                }}
                >
                  <Box 
                  className="flex items-center justify-between top"
                  >
                    <Typography variant="h4" fontWeight={500}>
                      {item.name}
                    </Typography>
                    <Typography variant="h6" fontWeight={400} className="price" color="warning">
                      ${item.price.toFixed(2)}
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1" color="textSecondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            ))
          }
        </Box>
      </Box>
    </Box>
  );
}


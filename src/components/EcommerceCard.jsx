import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { LazyLoadImage } from 'react-lazy-load-image-component';
  import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from "react-router-dom";
  export function EcommerceCard({product}) {
    const {id,title,price,description,thumbnail}=product;

    return (
        
      <Card className="w-96 pb-4">
        <CardHeader shadow={false} floated={false} className="h-96">
          <LazyLoadImage
            className="h-full w-full object-cover"
            src={thumbnail}
            alt={title}
            effect='blur'
            wrapperProps={{
                style: {transitionDelay: "1s",},
            }}
          />
        </CardHeader>
        <CardBody>
            <Link to={`/product/${id}`}>
          <div className="mb-5 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {title}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              ${price}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-thin opacity-75"
          >
            {description}
          </Typography>
          </Link>
        </CardBody>
        <CardFooter className="pt-0 py-4">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    );
  }
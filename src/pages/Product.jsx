import React from "react";
import { useProduct } from "../context/ProductContext";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  spinner,
} from "@material-tailwind/react";
// import { CardPlacehoderSkeleton } from '../components/CardPlacehoderSkeleton'
import { Spinner } from "@material-tailwind/react";
import { EcommerceCard } from "../components/EcommerceCard";
import Sidebar from "../components/Sidebar";

const Product = () => {
  const { products, isLoading, isError } = useProduct();
  return (
    <div className="w-full px-3 py-4 flex gap-1 flex-wrap ">
      <Sidebar />

      {isLoading && <Spinner className="absolute top-1/2 left-1/2 h-40 w-40" />}
      {isError && <h1>Error occured</h1>}
      {products.map((el) => (
        <div key={el.id}  className="h-[85%] mb-2 pb-5 flex flex-wrap justify-end items-start">
          <EcommerceCard product={el} />
        </div>
      ))}
    </div>
  );
};

export default Product;

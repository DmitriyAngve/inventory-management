import { Star } from "lucide-react";
import React from "react";

type RatingProps = {
  rating: number;
};

const Rating = ({ rating }: RatingProps) => {
  return [1, 2, 3, 4, 5].map((index) => (
    <Star key={index} color={index <= rating ? "#FFC107" : "#E$E%E("} />
  ));
};

export default Rating;
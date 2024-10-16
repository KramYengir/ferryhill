import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ReviewCardProps {
  text: string;
  author: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ text, author }) => {
  return (
    <Card
      role="article"
      className="flex flex-col justify-evenly p-6 leading-6 bg-fh-blue-950 bg-opacity-45 text-white border-none"
    >
      <CardContent>
        <p className="italic max-w-sm pt-6">{text}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <p className="font-extralight">- {author}</p>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;

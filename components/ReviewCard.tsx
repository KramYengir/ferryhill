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
      className="flex flex-col justify-center p-6 leading-6 bg-fh-blue-950 bg-opacity-45 text-white border-none"
    >
      <CardContent>
        <p className="italic max-w-sm">{text}</p>
      </CardContent>
      <CardFooter>
        <p className="font-extralight">- {author}</p>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;

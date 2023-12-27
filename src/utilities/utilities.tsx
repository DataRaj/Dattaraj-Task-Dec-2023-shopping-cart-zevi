import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export const ratingBox = (rating: number) => {
  return (
    <div>
      {rating >= 1 ? (
        <AiFillStar color="rgba(255, 192, 48, 1)" />
      ) : (
        <AiOutlineStar color="rgb(212, 206, 206)" />
      )}
      {rating >= 2 ? (
        <AiFillStar color="rgba(255, 192, 48, 1)" />
      ) : (
        <AiOutlineStar color="rgb(212, 206, 206)" />
      )}
      {rating >= 3 ? (
        <AiFillStar color="rgba(255, 192, 48, 1)" />
      ) : (
        <AiOutlineStar color="rgb(212, 206, 206)" />
      )}
      {rating >= 4 ? (
        <AiFillStar color="rgba(255, 192, 48, 1)" />
      ) : (
        <AiOutlineStar color="rgb(212, 206, 206)" />
      )}
      {rating >= 5 ? (
        <AiFillStar color="rgba(255, 192, 48, 1)" />
      ) : (
        <AiOutlineStar color="rgb(212, 206, 206)" />
      )}
    </div>
  );
};

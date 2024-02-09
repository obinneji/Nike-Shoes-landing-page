import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

export default function CustomerReviews() {
  return (
    <section className="max-container py-10 px-8">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red "> Customers </span> Says?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our sattisfied customers about their
        exceptional experience with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
}

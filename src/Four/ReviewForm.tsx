import { Input } from "./Input";
import { Review } from "./Review";

export const ReviewForm = () => {
  return (
    <div className="w-[42rem] space-y-8 rounded-3xl bg-white p-16">
      <h1 className="font-meri text-2xl font-black">Overall Rating</h1>
      <div>
        <Review />
        <p className="text-sm font-normal">Click to rate</p>
      </div>

      <Input
        title="Review title"
        placeholder="Example: Easy to use"
        type="text"
      />

      <p>Would you recommend this product to your friends?</p>
      <div className="flex gap-8">
        <div>
          <input
            className="mr-2 scale-150 accent-[#121633]"
            type="radio"
            id="yes"
            name="product"
            value="yes"
          />
          <label htmlFor="yes" className="cursor-pointer">
            Yes
          </label>
        </div>
        <div>
          <input
            className="mr-2 scale-150 accent-[#121633]"
            type="radio"
            id="no"
            name="product"
            value="no"
          />
          <label htmlFor="no" className="cursor-pointer">
            No
          </label>
        </div>
      </div>

      <Input
        title="Product review"
        placeholder="Example: Since I bought this a month ago, it has been used a lot. What I like best/what is worst about this product is.."
        type="textarea"
      />
      <div className="flex gap-x-2">
        <div className="grow">
          <Input title="Nickname" placeholder="Example: bob27" type="text" />
        </div>

        <div className="grow">
          <Input
            title="Email address (will not be published)"
            placeholder="Example: youremail@gmail.com"
            type="text"
          />
        </div>
      </div>

      <div>
        <input
          className="mr-2 scale-150 accent-[#121633]"
          type="radio"
          id="accept"
          name="accept"
          value="accept"
        />
        <label htmlFor="accept" className="cursor-pointer">
          I accept the terms and conditions
        </label>
      </div>
      <p className="text-sm font-medium">
        You will be able to receive email in connections with this review (eg if
        other comments on your review). All email contains the option to
        unsubscribe. We can use this text and star rating from your review in
        other marketing.{" "}
      </p>
      <button className="rounded-md bg-[#121633] p-4 text-white">
        Submit product review
      </button>
    </div>
  );
};

import { Button } from "@/components/ui/button";
import {
  Tv,
  SquareDashedBottomCode,
  Book,
  Download,
  Trello,
  Infinity,
  Medal,
} from "lucide-react";

const CourseComponent = () => {
  return (
    <div className="w-1/4 flex flex-col gap-4 bg-white p-4 top-24 fixed right-28 text-black">
      <div className="h-52 bg-red-600">saf</div>
      <span className="flex gap-4 items-center">
        <h2 className="text-xl font-bold">₹ 599</h2>
        <p className="line-through">₹ 1,999</p>
      </span>
      <Button variant="outline" className="text-white">
        Add to cart
      </Button>
      <Button className="bg-purple-500 hover:bg-purple-600 text-white">
        Buy Now
      </Button>
      <h3 className="text-xs text-center">30-Day Money-Back Guarantee</h3>

      <div className="w-full flex flex-col pl-4">
        <h2 className="text-xl font-bold mb-4">This course includes:</h2>
        <div className="flex gap-2 items-center space-y-2">
          <Tv size={24} />
          <p>61 hours on-demand video</p>
        </div>
        <div className="flex gap-2 items-center space-y-2">
          <SquareDashedBottomCode size={24} />
          <p>7 coding exercises</p>
        </div>
        <div className="flex gap-2 items-center space-y-2">
          <Book size={24} />
          <p>65 articles</p>
        </div>
        <div className="flex gap-2 items-center space-y-2">
          <Download size={24} />
          <p>194 downloadable resources</p>
        </div>
        <div className="flex gap-2 items-center space-y-2">
          <Trello size={24} />
          <p>Access on mobile and TV</p>
        </div>
        <div className="flex gap-2 items-center space-y-2">
          <Infinity size={24} />
          <p>Full lifetime access</p>
        </div>
        <div className="flex gap-2 items-center space-y-2">
          <Medal size={24} />
          <p>Certificate of completion</p>
        </div>
        <div className="flex justify-between my-4 capitalize underline">
          <p className="cursor-pointer">link</p>
          <p className="cursor-pointer">Share this course</p>
          <p className="cursor-pointer">Apply Coupon</p>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg flex items-center">
          <input
            type="text"
            className="bg-transparent border-none focus:outline-none flex-grow px-4 py-2"
            placeholder="Enter Coupon"
          />
          <button className="bg-gray-500 text-white px-4 py-2 rounded focus:outline-none">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseComponent;

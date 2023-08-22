import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import VideoLength from "./videoLength";
import VideoTopic from "./videoTopic";

const FilterAccordian = () => {
  return (
    <Accordion type="single" collapsible className="w-full min-h-1/2">
      <AccordionItem value="item-1">
        <AccordionTrigger>Rating</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <div className="flex gap-4">
                  ⭐⭐⭐⭐⭐
                  <span className="flex font-normal gap-4">
                    4.5 & up <span className="opacity-50">(855,554)</span>
                  </span>
                </div>
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <div className="flex gap-4">
                  ⭐⭐⭐⭐⭐
                  <span className="flex font-normal gap-4">
                    4.5 & up <span className="opacity-50">(855,554)</span>
                  </span>
                </div>
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <div className="flex gap-4">
                  ⭐⭐⭐⭐⭐
                  <span className="flex font-normal gap-4">
                    4.5 & up <span className="opacity-50">(855,554)</span>
                  </span>
                </div>
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <div className="flex gap-4">
                  ⭐⭐⭐⭐⭐
                  <span className="flex font-normal gap-4">
                    4.5 & up <span className="opacity-50">(855,554)</span>
                  </span>
                </div>
              </label>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Video Duration</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2">
            <VideoLength length="0-1" rating="5,254" />
            <VideoLength length="1-3" rating="6,874" />
            <VideoLength length="3-6" rating="2,845" />
            <VideoLength length="6-17" rating="9,845" />
            <VideoLength length="17+" rating="2,745" />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Topics</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2">
            <VideoTopic topic="sales skill" rating="5254" />
            <VideoTopic topic="sales skill" rating="5254" />
            <VideoTopic topic="sales skill" rating="5254" />
            <VideoTopic topic="sales skill" rating="5254" />
            <VideoTopic topic="sales skill" rating="5254" />
            <VideoTopic topic="sales skill" rating="5254" />
            <VideoTopic topic="sales skill" rating="5254" />
            <VideoTopic topic="sales skill" rating="5254" />
            <VideoTopic topic="sales skill" rating="5254" />

          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>Subcategory</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2">
            <VideoTopic topic="Entrepreneurship" rating="5,245" />
            <VideoTopic topic="Entrepreneurship" rating="5,245" />
            <VideoTopic topic="Entrepreneurship" rating="5,245" />
            <VideoTopic topic="Entrepreneurship" rating="5,245" />
            <VideoTopic topic="Entrepreneurship" rating="5,245" />
            <VideoTopic topic="Entrepreneurship" rating="5,245" />
            <VideoTopic topic="Entrepreneurship" rating="5,245" />
            <VideoTopic topic="Entrepreneurship" rating="5,245" />
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>Level</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2">
            <VideoTopic topic="All levels" rating="10,245" />
            <VideoTopic topic="Beginner" rating="5,245" />
            <VideoTopic topic="Intermediate" rating="5,245" />
            <VideoTopic topic="Expert" rating="5,245" />
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger>Language</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2">
            <VideoTopic topic="English" rating="10,245" />
            <VideoTopic topic="Hindi" rating="5,245" />
            <VideoTopic topic="Italiano" rating="5,245" />
            <VideoTopic topic="Bangla" rating="5,245" />
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-7">
        <AccordionTrigger>Language</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2">
            <VideoTopic topic="Paid" rating="10,245" />
            <VideoTopic topic="Free" rating="5,245" />
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-8">
        <AccordionTrigger>Features</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2">
            <VideoTopic topic="Subtitles" rating="10,245" />
            <VideoTopic topic="Quizzes" rating="5,245" />
            <VideoTopic topic="Coding Exercises" rating="5,245" />
            <VideoTopic topic="Practice Tests" rating="5,245" />
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-9">
        <AccordionTrigger>Subtitles</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-2">
            <VideoTopic topic="English" rating="10,245" />
            <VideoTopic topic="Hindi" rating="5,245" />
            <VideoTopic topic="Italiano" rating="5,245" />
            <VideoTopic topic="Bangla" rating="5,245" />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FilterAccordian;

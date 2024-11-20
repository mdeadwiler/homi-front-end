import { FivePicture } from "./FivePicture";
import { MiniListingForm } from "./MiniListingForm";
import { Calendar } from "./Calendar";

export const SingleLeft = () => {

  return (
    <div className="flex flex-col p-6 space-y-8 w-full w-1/2 bg-whiteColor p-6 rounded-lg min-h-screen">
      
      <FivePicture />

      {/* This shows the calendar and listing form side by side */}
      <div className="flex flex-row space-x-6  p-4 rounded-lg items-stretch">
        <Calendar />
        <MiniListingForm />
      </div>

    </div>
  );

};

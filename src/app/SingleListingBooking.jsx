import React from "react";
import { SingleLeft } from "../components/SingleLeft";
import { SingleRight } from "../components/SingleRight";

export const SingleListingBooking = () => {
  return (
    <main className="w-full flex flex-row gap-x-6">
      <SingleLeft />
      <SingleRight />
    </main>
  );
};

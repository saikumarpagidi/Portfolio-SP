import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        {/* Since 2022 */}
        2024 - 2025
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="06" text="Months" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="02" text="Websites" />
      </div>
      <p className="text-center">
        With 06 Months of experience building dynamic and user-friendly web
        applications.
      </p>
      {/* <ExperienceInfo number="$100k" text="Max Budget" /> */}
    </div>
  );
};

export default ExperienceTopLeft;

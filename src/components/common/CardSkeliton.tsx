import { Skeleton } from "@mui/material";

const CardSkeliton = () => {
  return (
    <div className="bg-gray-800 rounded-[20px] shadow-lg overflow-hidden border border-[#757474] h-[360px]">
      <Skeleton
        variant="rectangular"
        width="100%"
        height="100%"
        sx={{ borderRadius: "20px" }}
      />
    </div>
  );
};

export default CardSkeliton;

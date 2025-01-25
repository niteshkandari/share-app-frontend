import { LoaderCircle } from "lucide-react";

const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <LoaderCircle size="25" className="text-green-500 animate-spin" />
  </div>
);

export default Loader;

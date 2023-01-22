import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
const StudioNavbar = (props) => {
  return (
    <div>
      <div className="felx items-center justify-between p-4 bg-primary-black">
        <Link href="/" className="text-main-500 flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-main-500 mr-2" />
          Go to website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;

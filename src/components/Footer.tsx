import Image from "next/image";

const Footer = () => {
  return (
    <div className="py-8 h-96 bg-[#f9fbf9] dark:bg-gray-900  border-t border-gray-200 flex justify-end">
      <div className="container mx-auto flex flex-col justify-end gap-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
          <div className="flex justify-center md:justify-start">
            <Image
              src="https://cdn.prod.website-files.com/66dab781497d9a528975cd7a/66daf9668236041a506e46d7_Logo.svg"
              alt="Logo"
              width={240} 
              height={80} 
              priority // Optimize the logo for immediate loading
              className="h-auto"
            />
          </div>
          <div className="col-span-2 flex justify-center md:justify-end space-x-6">
            <a href="/term-conditions" className="text-gray-700 dark:text-white hover:text-green-600 transition-colors">
              Terms & Conditions
            </a>
            <a href="/privacy-policy" className="text-gray-700 dark:text-white hover:text-green-600 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="w-full border border-gray-200 dark:border-white"/>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-sm dark:text-white text-gray-500">
          © 2024. Unlisted Shares India. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;

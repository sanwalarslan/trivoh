// "use client";
// import React, { useState } from "react";
//  import Searchbar from "../Searchbar";
// import Adminbar from "../Adminbar";
// import LanguageSelector from "../LanguageSelector";

// const SearchSidebar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSearch = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeSearch = () => {
//     setIsOpen(false);
//   };

//   return (
//     <>
//       <div onClick={toggleSearch} className="cursor-pointer">
//         <button
//           title="Toggle Sidebar"
//           type="button"
//           className="p-2 ml-9"
//           onClick={toggleSearch}
//         >
//           <svg
//             className="w-6 h-6 text-gray-700"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>{" "}
//       </div>

//       {/* Overlay */}
//       <div
//         className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
//           isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//         onClick={closeSearch}
//       ></div>

//       {/* Search Navbar */}
//       <div
//         className={`fixed top-0 left-0 right-0 bg-white h-[500px] p-4 shadow-md transition-transform duration-300 transform ${
//           isOpen ? "translate-y-0" : "-translate-y-full"
//         } z-50`}
//       >
//         <div className="">
//           <div className="flex justify-between items-center">
//             <div className="">
//               <Searchbar />
//             </div>
//             <div className="flex justify-between">
//               <div className="">
//                 <div className="">
//                   <svg
//                     className="transform mt-2 fill-current text-[black] cursor-pointer"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="32"
//                     height="32"
//                     viewBox="0 0 512 512"
//                     onClick={closeSearch}
//                   >
//                     <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-between py-11">
//             <div className="p-7">
//               <LanguageSelector />
//             </div>
//             <div>
//               <Adminbar />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SearchSidebar;

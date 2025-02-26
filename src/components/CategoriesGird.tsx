// import React from "react";

// interface Category {
//   title: string;
//   image: string;
// }

// const categories: Category[] = [
//   {
//     title: "Living Room",
//     image:
//       "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Bedroom",
//     image:
//       "https://plus.unsplash.com/premium_photo-1675537843200-78c1a0ea1736?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Kitchen",
//     image:
//       "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

// const CategoriesGird = (props: Category) => {
//   const { title, image } = props;
//   return (
//     <div>
//       <div className="bg-gray-100 p-6 rounded-lg flex flex-col justify-between">
//         <div>
//           <h2 className="text-2xl font-bold">{title}</h2>
//           <a
//             href="#"
//             className="mt-2 inline-flex items-center text-black font-medium"
//           >
//             Shop Now <span className="ml-1">→</span>
//           </a>
//         </div>
//         <div className="mt-4 flex justify-end">
//           <img
//             src={image}
//             alt={title}
//             className="max-w-full h-auto object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoriesGird;

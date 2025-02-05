// import { useGetBackgroundsQuery } from "../../../entities/background/model/backgroundApiSlice";

// export const BackgroundSkinsPage = () => {
//   const { data: backgrounds = [], isLoading } = useGetBackgroundsQuery();

//   if (isLoading) return <p>Загрузка...</p>;

//   return (
//     <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", padding: "20px" }}>
//       {backgrounds.map((bg, index) => (
//         <div key={index} style={{ width: "300px", height: "600px", borderRadius: "10px", overflow: "hidden", position: "relative" }}>
//           {bg.backgroundImage ? (
//             <img src={`/img/${bg.backgroundImage}`} alt="Saved Background" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//           ) : (
//             <div style={{ width: "100%", height: "100%", backgroundColor: bg.backgroundColor }} />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

import React from 'react'

export default function BackgroundSkinsPage() {
  return (
    <div>BackgroundSkinsPage</div>
  )
}

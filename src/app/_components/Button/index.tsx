// import { LucideIcon } from "lucide-react";
// import { ReactNode } from "react";
// import { Apple, Play } from "lucide-react";

// interface ButtonProps {
//   title?: ReactNode;
//   background?: string;
//   border?: string;
//   color?: string | "text-text";
//   icon?: LucideIcon; // Optional icon prop of type LucideIcon
//   className?: string;
// }
// export function AppDownloadButtons() {
//   return (
//     <div className="flex gap-4 ">
//       <AppStoreButton />
//       <GooglePlayButton />
//     </div>
//   );
// }

// function AppStoreButton() {
//   return (
//     <Button
//       title={
//         <div className="text-left">
//           <p className="m-o text-xs font-light">Download on the</p>
//           <p className="m-0 text-md font-bold">App Store</p>
//         </div>
//       }
//       icon={Apple}
//       background="bg-button"
//       color="text-white"
//       border="rounded-none"
//     />
//   );
// }

// function GooglePlayButton() {
//   return (
//     <Button
//       title={
//         <div className="text-left ">
//           <p className="m-o text-xs font-light">GET IT ON</p>
//           <p className="m-0 text-md font-bold">Google Play</p>
//         </div>
//       }
//       icon={Play}
//       background="bg-button"
//       color="text-white"
//       border="rounded-none"
//     />
//   );
// }

// export function Button({
//   title,
//   background,
//   border,
//   color,
//   icon: Icon,
// }: ButtonProps) {
//   return (
//     <button
//       className={`py-2 px-3 text-sm rounded-full flex
//         items-center justify-center gap-2 text-center font-bold ${background} ${color} ${border}
//         hover:${background}/10
//         `}
//     >
//       {Icon && <Icon className="w-4 h-4" />} {/* Render icon if provided */}
//       {title && <span>{title}</span>}
//     </button>
//   );
// }
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  background?: string;
  py?: string;
  px?: string;
  title?: string;
  width?: string;
  height?: string;
  to?: string;
  color?: string | "text-text";
  icon?: LucideIcon; // Optional icon prop of type LucideIcon
  children?: React.ReactNode; // Accepts any React children
  border?: string;
}

export function Button({
  title,
  background,
  py,
  px,
  to,
  width,
  height,
  color,
  icon: Icon,
  children,
  border,
}: ButtonProps) {
  return (
    <Link
      href={`${to}`}
      className={`
          flex justify-center items-center 
          ${py ? py : "py-2"} ${px ? px : "px-3"} 
          ${width ? width : ""} ${height ? height : ""} 
          text-xs rounded-full gap-2 font-bold 
          ${background} ${color} ${border} hover:${background}/10
        `}
    >
      {Icon && <Icon className="w-4 h-4" />} {/* Render icon if provided */}
      {title && <span>{title}</span>}
      {children} {/* Render children if provided */}
    </Link>
  );
}

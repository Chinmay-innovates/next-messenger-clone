"use client";

import clsx from "clsx";
import Link from "next/link";

interface DesktopItemProps {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  icon: Icon,
  href,
  onClick,
  active,
}) => {
  const handleClick = () => {
    if (onClick) return onClick();
  };
  return (
    <li onClick={handleClick}>
      <Link
        href={href}
        className={clsx(
          `
     group 
     flex
     flex-3  
     gap-x-3 
     rounded-md 
     p-2 
     text-sm 
     leading-6 
     font-semibold 
     text-gray-500 
     hover:text-black 
     hover:bg-gray-100
  `,
          active && "bg-gray-100 text-black"
        )}
      >
        <Icon className="h-7 w-7 shrink-0" aria-hidden="true" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;

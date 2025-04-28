"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  collapsed: boolean;
}

export default function Navigation({ collapsed }: NavigationProps) {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  return (
    <nav
      className={
        "h-full p-4 bg-slate-100 transition-all " +
        (isCollapsed ? "w-16" : "w-64")
      }
    >
      <div className={"flex justify-end items-center"}>
        <ArrowLeft
          size={24}
          className={
            "text-neutral-500 cursor-pointer " +
            (isCollapsed ? "rotate-180" : "rotate-0")
          }
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
      </div>
      <ul className="block">
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}

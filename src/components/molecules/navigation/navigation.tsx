"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import "./navigation.css";

interface NavigationProps {
  collapsed: boolean;
}

export default function Navigation({ collapsed }: NavigationProps) {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  return (
    <nav className={isCollapsed ? "collapsed" : ""}>
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

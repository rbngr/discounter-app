"use client";

import Link from "next/link";
import { ArrowLeft, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import "./navigation.css";

interface NavigationProps {
  collapsed: boolean;
}

export default function Navigation({ collapsed }: NavigationProps) {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  return (
    <nav className={isCollapsed ? "collapsed" : ""}>
      <div>
        <ArrowLeft
          size={24}
          className={isCollapsed ? "collapsed" : ""}
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
      </div>
      <ul>
        <li>
          <Link href="#">
            <LayoutDashboard />
            {!isCollapsed && (
              <span className={isCollapsed ? "collapsed" : ""}>Discounts</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

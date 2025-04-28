"use client";

import Link from "next/link";
import { ArrowLeft, Mail, Plus, ScanBarcode } from "lucide-react";
import { useState } from "react";
import "./navigation.css";
import { Button } from "@/components/ui/button";

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
      <ul className="block">
        <Button className="p-0 m-0 h-16 w-16">
          <Mail size={100} />
        </Button>
        <li>
          <Link href="#">
            <ScanBarcode />
            <span>Discounts</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

import Link from "next/link";

interface NavigationProps {
  collapsed: boolean;
}

export default function Navigation({ collapsed }: NavigationProps) {
  return (
    <nav className={"h-full p-4 bg-slate-100 " + (collapsed ? "w-16" : "w-64")}>
      <div></div>
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

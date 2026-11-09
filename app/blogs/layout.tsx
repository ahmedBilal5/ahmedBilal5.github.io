import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <div className="md:max-w-[80%] w-full mx-auto">{children}</div>;
}

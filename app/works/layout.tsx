import { ReactNode } from "react";

export default function WorksLayout({ children }: { children: ReactNode }) {
  return <div className="md:max-w-[80%] w-full mx-auto flex flex-col">{children}</div>;
}

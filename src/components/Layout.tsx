import type { ReactNode } from "react";
import { Helmet } from "react-helmet";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export const PageMeta = ({
  children,
  title = "My App",
  description = "",
}: LayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </>
  );
};

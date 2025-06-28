import NextLink, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...props
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  const isActive = shouldMatchExactHref
    ? asPath === props.href || asPath === props.as
    : asPath.startsWith(String(props.href));

  return (
    <NextLink {...props}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50",
      })}
    </NextLink>
  );
}

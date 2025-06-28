import { Icon, Link, Text } from "@chakra-ui/react";
import NextLink, { LinkProps } from "next/link";
import { ElementType } from "react";

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children, href, ...props }: NavLinkProps) {
  return (
    <NextLink href={href} passHref {...props}>
      <Link display="flex" alignItems="center">
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </Link>
    </NextLink>
  );
}

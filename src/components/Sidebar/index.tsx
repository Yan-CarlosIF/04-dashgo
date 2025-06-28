import { Box, Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export default function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine} href="#">
            Dashboard
          </NavLink>
          <NavLink icon={RiContactsLine} href="#">
            Usuários
          </NavLink>
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine} href="#">
            Formulários
          </NavLink>
          <NavLink icon={RiGitMergeLine} href="#">
            Automação
          </NavLink>
        </NavSection>
      </Stack>
    </Box>
  );
}

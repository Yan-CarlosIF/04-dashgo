import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Yan Carlos</Text>
          <Text color="gray.300" fontSize="small">
            yan.carlos@example.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Yan Carlos"
        src="https://github.com/yan-carlosif.png"
      />
    </Flex>
  );
}

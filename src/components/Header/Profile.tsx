import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Yan Carlos</Text>
        <Text color="gray.300" fontSize="small">
          yan.carlos@example.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Yan Carlos"
        src="https://github.com/yan-carlosif.png"
      />
    </Flex>
  );
}

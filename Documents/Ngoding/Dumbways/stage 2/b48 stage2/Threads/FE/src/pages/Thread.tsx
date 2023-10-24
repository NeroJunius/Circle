import { Box, FormControl, Input } from "@chakra-ui/react";

export function ThreadForm() {
  return (
    <>
      <form>
        <Box>
          <FormControl>
            <Input placeholder="What is happening?!" />
          </FormControl>
        </Box>
      </form>
    </>
  );
}

import FormLogin from "../features/thread/components/FormLogin";
import { Grid, GridItem } from "@chakra-ui/react";

export function Login() {
  return (
    <>
      <Grid templateColumns={"repeat(3, 3fr)"} style={{ height: "100%" }} gap={6}>
        <GridItem></GridItem>
        <GridItem>
          <FormLogin />
        </GridItem>
        <GridItem></GridItem>
      </Grid>
    </>
  );
}

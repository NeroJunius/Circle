import { Grid, GridItem } from "@chakra-ui/react";
import FormRegister from "../features/thread/auth/FormRegister";

export default function Register() {
  return (
    <>
      <Grid templateColumns={"repeat(3, 3fr)"} style={{ height: "100%" }} gap={6}>
        <GridItem></GridItem>
        <GridItem>
          <FormRegister />
        </GridItem>
        <GridItem></GridItem>
      </Grid>
    </>
  );
}

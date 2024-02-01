import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem bg=" blue" area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem bg=" green" area="aside" paddingX={5}>
          aside
        </GridItem>
      </Show>
      <GridItem bg="gold" area="main">
        main
      </GridItem>
    </Grid>
  );
}

export default App;

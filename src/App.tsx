import { Grid, GridItem, Show } from "@chakra-ui/react";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      
    >
      <GridItem bg = " red"area="nav">
        nav
      </GridItem>
      <Show above="lg">
        <GridItem bg = " green"area="aside" paddingX={5}>
          aside
        </GridItem>
      </Show>
      <GridItem bg = " yellow" area="main">
        main
      </GridItem>
    </Grid>
  );
}

export default App;

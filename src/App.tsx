import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
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
          asideeeee
        </GridItem>
      </Show>
      <GridItem bg = 'gold' area="main">
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;

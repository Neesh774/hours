import { Grid, View } from "@adobe/react-spectrum";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <Grid
      areas={["header header", "content sidebar", "footer footer"]}
      columns={["3fr", "1fr"]}
      rows={["size-1000", "auto", "size-1000"]}
      height="100vh"
      gap="size-100"
    >
      <NavBar />
      <View backgroundColor="gray-100" gridArea="content"></View>
      <View
        borderStartColor="gray-300"
        borderStartWidth="thick"
        backgroundColor="gray-100"
        gridArea="sidebar"
      ></View>
      <View
        backgroundColor="gray-200"
        gridArea="footer"
        borderTopColor="gray-300"
        borderTopWidth="thick"
      ></View>
    </Grid>
  );
}

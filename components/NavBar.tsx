import { ActionButton, Flex, Heading, View } from "@adobe/react-spectrum";
import Light from "@spectrum-icons/workflow/Light";
import Moon from "@spectrum-icons/workflow/Moon";
import { ThemeContext } from "../utils/theme-context";
export default function NavBar() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <View
          backgroundColor="gray-200"
          gridArea="header"
          borderBottomColor="gray-300"
          borderBottomWidth="thick"
        >
          <Flex
            height="full"
            justifyContent="space-between"
            alignItems="center"
            marginStart="size-300"
            marginEnd="size-300"
          >
            <Heading level={1}>Tutor Scheduler</Heading>
            <ActionButton
              onPress={toggleTheme}
              height="size-600"
              width="size-600"
            >
              {theme == "light" ? <Moon /> : <Light />}
            </ActionButton>
          </Flex>
        </View>
      )}
    </ThemeContext.Consumer>
  );
}

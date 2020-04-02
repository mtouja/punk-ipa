import { Theme } from "@material-ui/core/styles";

const styles = (theme: Theme) => ({
  treeview: {
    "& .title": {
      padding: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: "red",
      "& p": {
        marginLeft: 12,
        color: theme.palette.primary.main,
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      // Selected element
      "&.selectedContent": {
        "& p": {
          color: "white"
        }
      }
    }
  }
});

export default styles;

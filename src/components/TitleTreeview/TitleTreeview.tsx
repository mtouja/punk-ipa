import { withStyles } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { TreeView as MaterialTreeview } from "@material-ui/lab";
import TreeItem from "@material-ui/lab/TreeItem";
import React from "react";
import { Beer } from "../../models/Beer";
import styles from "./styles";

interface Props {
  classes?: any;
  beers: Beer[] | undefined;
}

const TitleTreeview = (props: Props) => {
  const { classes, beers } = props;

  return (
    <div>
      {beers &&
        beers.map((beer: Beer, index: number) => (
          <>
          <MaterialTreeview
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            classes={{
              root: classes.treeview
            }}
          >
            <TreeItem nodeId="5" label={beer.name}>
              <TreeItem
                nodeId="10"
                label="OSS"
                classes={{
                  root: classes.selected
                }}
              />
              <TreeItem nodeId="6" label="Material-UI"></TreeItem>
            </TreeItem>
          </MaterialTreeview>
          </>
        ))}
    </div>
  );
};

export default withStyles(styles)(TitleTreeview);

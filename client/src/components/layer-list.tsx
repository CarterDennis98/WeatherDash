import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TreeItem, { TreeItemProps } from '@mui/lab/TreeItem';
import TreeView from '@mui/lab/TreeView';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type StyledTreeItemProps = TreeItemProps & {
    layer: any,
    labelText: string
}

function StyledTreeItem(props: StyledTreeItemProps) {
    const {
        layer,
        labelText,
        ...other
    } = props;

    if (layer.type === "group" || (layer.sublayers && layer.sublayers.length > 0)) {
        return (
            <TreeItem
                label={
                    <Box>
                        <Typography sx={{ color: "white" }}>
                            <b style={{ fontSize: "14px" }}>{labelText}</b>
                        </Typography>
                    </Box>
                }
                {...other}
            />
        );
    } else {
        return (
            <TreeItem
                label={
                    <Box>
                        <Typography sx={{ color: "white" }}>
                            <p style={{ fontSize: "12px" }}>{labelText}</p>
                        </Typography>
                    </Box>
                }
                {...other}
            />
        )
    }
}

type Props = {
    layer: any
}

export default function LayerList(props: Props) {
    const {
        layer
    } = props;

    function createEntry(layer: any) {
        if (layer.type === "group") {
            return (
                <StyledTreeItem
                    nodeId={layer.title}
                    labelText={layer.title}
                    layer={layer}
                >
                    {
                        layer.layers.map((layer: any) => {
                            return (
                                createEntry(layer)
                            );
                        })
                    }
                </StyledTreeItem>
            );
        } else if (layer.sublayers) {
            return (
                <StyledTreeItem
                    nodeId={layer.title}
                    labelText={layer.title}
                    layer={layer}
                >
                    {
                        layer.sublayers.items.map((layer: any) => {
                            return (
                                createEntry(layer)
                            );
                        })
                    }
                </StyledTreeItem>
            )
        } else {
            return (
                <StyledTreeItem
                    nodeId={layer.id}
                    labelText={layer.title}
                    layer={layer}
                />
            );
        }
    }

    return (
        <div style={{ width: "100%" }}>
            <TreeView
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                disableSelection
                sx={{ width: "100%", color: "white" }}
            >
                {
                    createEntry(layer)
                }
            </TreeView>
        </div>
    );
}
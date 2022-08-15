import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import TreeItem, { TreeItemProps } from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Typography from "@mui/material/Typography";
import * as React from "react";

type StyledTreeItemProps = TreeItemProps & {
    layer: any,
    labelText: string
}

// Slider UI styling and label formatting
const StyledSlider = styled(Slider)(({ theme }) => ({
    "& .MuiSlider-valueLabel": {
        backgroundColor: "#04283d"
    }
}));
function valueLabelFormat(value: number) {
    return ("Opacity: " + (Math.trunc((value * 100))) + "%");
}

function StyledTreeItem(props: StyledTreeItemProps) {
    const {
        layer,
        labelText,
        ...other
    } = props;

    const [visible, setVisible] = React.useState<boolean>(layer.visible);
    const [value, setValue] = React.useState<number | number[]>(layer.opacity);

    const toggleVisibility = (event?: any) => {
        event.stopPropagation();
        setVisible(!layer.visible);
        layer.visible = !layer.visible;
    }

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        layer.opacity = newValue;
        setValue(newValue);
    }

    if (layer.type === "group" || (layer.sublayers && layer.sublayers.length > 0)) {
        return (
            <TreeItem
                label={
                    <Box style={{ height: "40px" }}>
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
                    <React.Fragment>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginRight: "10px" }}>
                            <Box>
                                <Typography>
                                    {labelText}
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "flex-end" }}>
                                <Tooltip title="Toggle Visibility" enterDelay={2000} placement="left">
                                    <IconButton onClick={(event) => toggleVisibility(event)} sx={{ color: "white" }}>
                                        {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </IconButton>
                                </Tooltip>
                                <div style={{ width: "100px", display: "flex", flexDirection: "column", paddingRight: "20px" }}>
                                    <StyledSlider
                                        size="small"
                                        step={0.01}
                                        min={0}
                                        max={1}
                                        defaultValue={layer.opacity}
                                        value={value}
                                        onChange={handleSliderChange}
                                        valueLabelDisplay="auto"
                                        valueLabelFormat={valueLabelFormat}
                                    />
                                </div>
                            </Box>
                        </div>
                    </React.Fragment>
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
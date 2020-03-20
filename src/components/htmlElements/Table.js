import React, { forwardRef } from "react";
import ReactDOM from "react-dom";
import { FixedSizeGrid as Grid } from "react-window";

import "./styles.css";

const GUTTER_SIZE = 5;
const COLUMN_WIDTH = 100;
const ROW_HEIGHT = 35;

const Cell = ({ columnIndex, rowIndex, style }) => (
    <div
        className={"GridItem"}
        style={{
            ...style,
            left: style.left + GUTTER_SIZE,
            top: style.top + GUTTER_SIZE,
            width: style.width - GUTTER_SIZE,
            height: style.height - GUTTER_SIZE
        }}
    >
        r{rowIndex}, c{columnIndex}
    </div>
);

const Example = () => (
    <Grid
        className="Grid"
        columnCount={50}
        columnWidth={COLUMN_WIDTH + GUTTER_SIZE}
        height={150}
        innerElementType={innerElementType}
        rowCount={100}
        rowHeight={ROW_HEIGHT + GUTTER_SIZE}
        width={300}
    >
        {Cell}
    </Grid>
);

const innerElementType = forwardRef(({ style, ...rest }, ref) => (
    <div
        ref={ref}
        style={{
            ...style,
            paddingLeft: GUTTER_SIZE,
            paddingTop: GUTTER_SIZE
        }}
        {...rest}
    />
));

ReactDOM.render(<Example />, document.getElementById("root"));

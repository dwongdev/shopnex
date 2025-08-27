import React from "react";

import { ComponentConfig } from "@measured/puck";
import { spacingOptions } from "../../options";

import styles from "./styles.module.css";
import getClassNameFactory from "../../utils/get-class-name-factory";

const getClassName = getClassNameFactory("Space", styles);

export type SpaceProps = {
    direction?: "" | "vertical" | "horizontal";
    size: string;
};

export const Space: ComponentConfig<SpaceProps> = {
    label: "Space",
    fields: {
        size: {
            type: "select",
            options: spacingOptions,
        },
        direction: {
            type: "radio",
            options: [
                { value: "vertical", label: "Vertical" },
                { value: "horizontal", label: "Horizontal" },
                { value: "", label: "Both" },
            ],
        },
    },
    defaultProps: {
        direction: "",
        size: "24px",
    },
    inline: true,
    render: ({ direction, size, puck }) => {
        return (
            <div
                ref={puck.dragRef}
                className={getClassName(
                    direction ? { [direction]: direction } : {}
                )}
                style={{ "--size": size } as any}
            />
        );
    },
};

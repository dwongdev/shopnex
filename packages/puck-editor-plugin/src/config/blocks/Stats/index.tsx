/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ComponentConfig } from "@measured/puck";
import styles from "./styles.module.css";
import { Section } from "../../components/Section";
import getClassNameFactory from "../../utils/get-class-name-factory";

const getClassName = getClassNameFactory("Stats", styles);

export type StatsProps = {
    items: {
        title: string;
        description: string;
    }[];
};

export const Stats: ComponentConfig<StatsProps> = {
    fields: {
        items: {
            type: "array",
            getItemSummary: (item, i) => item.title || `Feature #${i}`,
            defaultItemProps: {
                title: "Stat",
                description: "1,000",
            },
            arrayFields: {
                title: {
                    type: "text",
                    contentEditable: true,
                },
                description: {
                    type: "text",
                    contentEditable: true,
                },
            },
        },
    },
    defaultProps: {
        items: [
            {
                title: "Stat",
                description: "1,000",
            },
        ],
    },
    render: ({ items }) => {
        return (
            <Section className={getClassName()} maxWidth={"916px"}>
                <div className={getClassName("items")}>
                    {items.map((item, i) => (
                        <div key={i} className={getClassName("item")}>
                            <div className={getClassName("label")}>
                                {item.title}
                            </div>
                            <div className={getClassName("value")}>
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        );
    },
};

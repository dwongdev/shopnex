import { admins } from "@/access/roles";
import { CollectionConfig } from "payload";
import { groups } from "../groups";
import { checkoutSessionHook } from "./hooks/checkout-session-hook";
import { beforeCreateHook } from "./hooks/before-create-hook";
import {
    createSessionAccess,
    readSessionAccess,
    updateSessionAccess,
} from "./access/session-access";

export const CheckoutSessions: CollectionConfig = {
    slug: "checkout-sessions",
    access: {
        create: createSessionAccess,
        delete: admins,
        read: readSessionAccess,
        update: updateSessionAccess,
    },
    admin: {
        useAsTitle: "sessionId",
        group: groups.orders,
    },
    hooks: {
        beforeChange: [beforeCreateHook, checkoutSessionHook],
    },
    fields: [
        {
            name: "sessionId",
            type: "text",
            admin: {
                position: "sidebar",
                readOnly: true,
            },
        },
        {
            name: "customer",
            type: "relationship",
            relationTo: "users",
        },
        {
            name: "cart",
            type: "relationship",
            relationTo: "carts",
            required: true,
        },
        {
            name: "shipping",
            type: "relationship",
            relationTo: "shipping",
        },
        {
            name: "payment",
            type: "relationship",
            relationTo: "payments",
        },
        {
            name: "shippingAddress",
            type: "json",
            admin: {
                position: "sidebar",
            },
        },
        {
            name: "billingAddress",
            type: "json",
            admin: {
                position: "sidebar",
            },
        },
    ],
};

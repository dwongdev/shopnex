import { getProduct } from "@/services/products";

import { BuilderPage } from "../../components/BuilderPage";
import { getColorOptions } from "../../lib/color";

type ProductPageProps = {
    params: Promise<{ productHandle: string }>;
};

const ProductPage = async ({ params }: ProductPageProps) => {
    const { productHandle } = await params;
    const product = await getProduct(productHandle);
    const top4VariantImages = product.variants.slice(0, 4).map((variant) => {
        return `${process.env.NEXT_PUBLIC_SERVER_URL}${variant.imageUrl}`;
    });

    const colorOptions = getColorOptions(product.variants);
    const variants = product.variants.map((variant) => ({
        ...variant,
        imageUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}${variant.imageUrl}`,
    }));
    return (
        <BuilderPage
            data={{
                cartOpen: false,
                cartTotal: 0,
                coloredOptions: true,
                colorOptions,
                productDetails: product,
                selectedAmount: 1,
                selectedVariant: { ...variants[0] },
                selectedVariantId: variants[0].id,
                top4VariantImages,
                variants,
            }}
            page={["products"]}
        />
    );
};

export default ProductPage;

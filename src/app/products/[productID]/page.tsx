export default function blog( { params }: {
    params: { productID: string};
}
) {
    return <h1>Product {params.productID}</h1>;
}

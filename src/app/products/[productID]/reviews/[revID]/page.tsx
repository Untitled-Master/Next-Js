import { notFound } from "next/navigation";

export default function review( {params}: {
    params: {
        revID: string,
        productID: string
    };
}) {
    if(parseInt(params.revID)>100){
        notFound();
    }
    else{
        return <h1>Product number {params.productID} Review number {params.revID}</h1>;
    }
    
}
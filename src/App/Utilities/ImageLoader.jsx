import { Suspense } from "react";
import { MoonLoader } from "react-spinners";

export default function ImageLoader({src,className})
{
    return(
        <Suspense fallback={<MoonLoader color="#000000" size={25} />}>
            <img src={src} rel="preload" className={className} />
        </Suspense>
    )
}
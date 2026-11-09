import { postRoute } from "../../_lib/postPage";

const route = postRoute("blogs", "/blog");

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;

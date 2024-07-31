import productPage from "../products/page";
export default function Category(params) {
  console.log("main Details");
  return <productPage catId={params} />;
}

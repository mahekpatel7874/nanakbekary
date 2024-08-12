import Products from "../../../products/page";
export default function CategoryById({ params }) {
  return <Products categoryId={params.categoryId} />;
}

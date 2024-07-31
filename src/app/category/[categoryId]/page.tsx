import productPage from "../../products/page";
export default function CategoryById({ params }) {
  console.log("Details");
  // return <productPage catId={params} />;
  return (
    <div>
      <h1>Hello Category</h1>
      <productPage catId={params} />
    </div>
  );
}

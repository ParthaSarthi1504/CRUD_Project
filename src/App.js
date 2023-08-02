import { useState } from "react";
import ProductTable from "./component/ProductTable";
import EditForm from "./component/EditForm";
import AddForm from "./component/AddForm";
import "./styles.css";

let ProductList = [
  {
    id: 1,
    name: "pizza",
    price: 1000,
    oldPrice: 800,
    category: "food",
    isActive: "Yes",
    description: "The quality of the product is good"
  }
];

let prevId = 1;

if (localStorage.getItem("productList") !== undefined) {
  ProductList = JSON.parse(localStorage.getItem("productList"));
}

export default function App() {
  const [productDetails, setProduct] = useState(ProductList);
  localStorage.setItem("productList", JSON.stringify(productDetails));
  const [edit, setEdit] = useState(false);

  const [curUser, setCurrentUser] = useState(null);

  const addUser = (newUser) => {
    const addedUser = {
      id: prevId + 1,
      ...newUser
    };
    prevId += 1;
    setProduct([...productDetails, addedUser]);
  };

  const deleteProduct = (productId) => {
    const filteredProductDetails = productDetails.filter(
      (each) => each.id !== productId
    );
    setProduct(filteredProductDetails);
  };

  const editData = (uniqueUser) => {
    setEdit(true);
    setCurrentUser(uniqueUser);
  };

  const updateUser = (edittedProduct) => {
    const updatedProductList = productDetails.map((each) =>
      each.id === edittedProduct.id ? edittedProduct : each
    );
    setProduct(updatedProductList);
    setEdit(false);
  };

  const cancelUpdate = () => {
    setEdit(false);
  };

  return (
    <div className="App">
      {edit ? (
        <EditForm
          curUser={curUser}
          updateUser={updateUser}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddForm addUser={addUser} />
      )}
      <div className="table-container">
        <table className="table-div">
          <thead>
            <tr className="table">
              <th>Product Name</th>
              <th>Price</th>
              <th>Old Price</th>
              <th>Category type</th>
              <th>is active</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {productDetails.length > 0 ? (
              productDetails.map((product) => (
                <ProductTable
                  key={product.id}
                  productInfo={product}
                  deleteProduct={deleteProduct}
                  editData={editData}
                />
              ))
            ) : (
              <tr colSpan={6}>No products found</tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

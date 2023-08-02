import { useReducer } from "react";
import "./index.css";

const productList = {
  name: "",
  price: "",
  oldPrice: "",
  category: "vegetables",
  isActive: "No",
  description: ""
};

const reducer = (product, action) => {
  switch (action.type) {
    case "changeName":
      return { ...product, name: action.payload };
    case "changePrice":
      return { ...product, price: action.payload };
    case "changeOldPrice":
      return { ...product, oldPrice: action.payload };
    case "changeCategory":
      return { ...product, category: action.payload };
    case "changeInActive":
      return { ...product, isActive: action.payload };
    case "changeDescription":
      return { ...product, description: action.payload };
    case "submit":
      return productList;
    default:
      return product;
  }
};

const AddForm = (props) => {
  const { addUser } = props;
  const [product, dispatch] = useReducer(reducer, productList);
  const submitData = (event) => {
    event.preventDefault();
    if (
      product.name !== "" &&
      product.price !== "" &&
      product.oldPrice !== "" &&
      product.description !== ""
    ) {
      addUser(product);
      dispatch({ type: "submit" });
    }
  };

  return (
    <div>
      <h1 className="add-form-title">Add Form</h1>
      <form onSubmit={submitData} className="add-form">
        <div className="input">
          <label className="lable-style">Product Name</label>
          <input
            type="text"
            value={product.name}
            className="input-box"
            onChange={(e) =>
              dispatch({ type: "changeName", payload: e.target.value })
            }
          />
        </div>
        <div className="input">
          <label className="lable-style">Price</label>
          <input
            type="text"
            value={product.price}
            className="input-box"
            onChange={(e) =>
              dispatch({ type: "changePrice", payload: e.target.value })
            }
          />
        </div>
        <div className="input">
          <label className="lable-style">Old Price</label>
          <input
            type="text"
            value={product.oldPrice}
            className="input-box"
            onChange={(e) =>
              dispatch({ type: "changeOldPrice", payload: e.target.value })
            }
          />
        </div>
        <div className="input">
          <label className="lable-style">Category</label>
          <select
            onChange={(e) =>
              dispatch({ type: "changeCategory", payload: e.target.value })
            }
            className="input-box"
          >
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits & Nuts">Fruits & Nuts</option>
            <option value="Dairy & creams">Dairy & creams</option>
            <option value="Packages Food">Packages Food</option>
            <option value="Staples">Staples</option>
          </select>
        </div>
        <div className="input1">
          <input
            type="checkbox"
            name="activecheckbox"
            checked={product.isActive === "Yes" ? true : false}
            onChange={(e) =>
              dispatch({
                type: "changeInActive",
                payload: e.target.checked ? "Yes" : "No"
              })
            }
          />
          <label className="lable-style1">isActive</label>
        </div>
        <div className="input">
          <label className="lable-style">Description</label>
          <textarea
            col="150"
            row="100"
            value={product.description}
            className="text-area"
            onChange={(e) =>
              dispatch({ type: "changeDescription", payload: e.target.value })
            }
          ></textarea>
        </div>
        <button type="submit" className="sub-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm;

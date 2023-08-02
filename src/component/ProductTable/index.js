import "./index.css";

const ProductTable = (props) => {
  const { productInfo, deleteProduct, editData } = props;

  return (
    <tr className="content">
      <td>{productInfo.name}</td>
      <td>{productInfo.price}</td>
      <td>{productInfo.oldPrice}</td>
      <td>{productInfo.category}</td>
      <td>{productInfo.isActive}</td>
      <td>{productInfo.description}</td>
      <td>
        <button
          type="button"
          className="btn edit-btn"
          onClick={() => editData(productInfo)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn delete-btn"
          onClick={() => deleteProduct(productInfo.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductTable;

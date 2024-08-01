
import React from 'react';
import './ProductTable.css';
import { FaFilter } from 'react-icons/fa'; 

function ProductTable() {
  const products = Array.from({ length: 10 }, (_, index) => ({
    name: 'Product Name',
    category: 'Category',
    noOfProducts: 15,
    taxId: 'ID223890',
    dateAdded: '12 November 2023',
  }));

  return (
    <div className="product-table">
    <div className="table-header">
      <div className="left-group">
        <input type="text" placeholder="Search Here..." />
        <button className="filter-button">
        <FaFilter className="filter-icon" />  Filter</button>
      </div>
      <div className="right-group">
        <button className="add-product-button">Add Product</button>
      </div>
    </div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>No. of Products</th>
            <th>Tax Id</th>
            <th>Date Added</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.noOfProducts}</td>
              <td>{product.taxId}</td>
              <td>{product.dateAdded}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
       <div className="left-group">
       <span>Number of rows</span>
    <select className="custom-select">
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
        </div>
        <div className="page-nav">
        <div className="right-group">
          <button>Previous</button>
          <button className='active'>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>...</button>
          <button>12</button>
          <button>Next</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTable;

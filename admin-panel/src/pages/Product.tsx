import { useState } from "react";
import { FiEdit2, FiTrash2, FiPlus, FiX } from "react-icons/fi";
import { useProducts } from "../contexts/ProductContext";
import type { Product } from "../types/product";
import "./Product.css";

const Products: React.FC = () => {
  const { products, loading, error, deleteProduct, addProduct, updateProduct } = useProducts();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    images: [""],
  });

  const handleDelete = async (id: number) => {
    if(window.confirm("Are you sure?")) await deleteProduct(id);
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      images: product.images,
    });
    setShowForm(true);
  };

  const handleAdd = () => {
    setEditingProduct(null);
    setFormData({ title: "", price: 0, description: "", category: "", images: [""] });
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    editingProduct ? await updateProduct(editingProduct.id, formData) : await addProduct(formData);
    setShowForm(false);
  };

  if (loading) return <div className="status-center"><div className="spinner"></div></div>;
  if (error) return <div className="error-msg">{error}</div>;

  return (
    <div className="products-container">
      <header className="products-header">
        <div>
          <h1>Product Inventory</h1>
          <p>Manage your store's items and pricing</p>
        </div>
        <button className="add-main-btn" onClick={handleAdd}>
          <FiPlus /> New Product
        </button>
      </header>

      <div className="products-grid">
        {products.map((product: Product) => (
          <div key={product.id} className="pro-card">
            <div className="pro-img-wrapper">
              <img src={product.images[0]} alt={product.title} />
              <span className="pro-category">{product.category}</span>
            </div>
            <div className="pro-info">
              <h3 title={product.title}>{product.title}</h3>
              <p className="pro-desc">{product.description}</p>
              <div className="pro-footer">
                <span className="pro-price">${product.price}</span>
                <div className="pro-actions">
                  <button className="btn-icon edit" onClick={() => handleEdit(product)}><FiEdit2 />Edit</button>
                  <button className="btn-icon delete" onClick={() => handleDelete(product.id)}><FiTrash2 />Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-header">
              <h3>{editingProduct ? "Update Product" : "Create Product"}</h3>
              <button className="close-x" onClick={() => setShowForm(false)}><FiX /></button>
            </div>
            <form onSubmit={handleSubmit} className="modern-form">
              <div className="form-group">
                <label>Product Title</label>
                <input type="text" name="title" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Price ($)</label>
                  <input type="number" name="price" value={formData.price} onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})} required />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <input type="text" name="category" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} required />
                </div>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea name="description" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Image URL</label>
                <input type="text" value={formData.images[0]} onChange={(e) => setFormData({ ...formData, images: [e.target.value] })} required />
              </div>
              <button type="submit" className="submit-btn">{editingProduct ? "Save Changes" : "Add Product"}</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
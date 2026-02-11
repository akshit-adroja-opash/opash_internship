import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Product } from '../types/product';

interface ProductContextType {
  products: Product[];
  loading: boolean;
  error: string | null;
  deleteProduct: (id: number) => Promise<void>;
  addProduct: (product: Omit<Product, 'id'>) => Promise<void>;
  updateProduct: (id: number, product: Omit<Product, 'id'>) => Promise<void>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Mock fetch products
    const fetchProducts = async () => {
      setLoading(true);
      setTimeout(() => {
        const stored = localStorage.getItem('products');
        if (stored) {
          setProducts(JSON.parse(stored));
        } else {
          const sample = [
            {
              id: 1,
              title: 'Sample Product',
              price: 10,
              description: 'Description',
              category: 'Category',
              images: ['https://m.media-amazon.com/images/I/51MZ55vbGaL._SX569_.jpg'],
            },
          ];
          setProducts(sample);
          localStorage.setItem('products', JSON.stringify(sample));
        }
        setLoading(false);
      }, 1000);
    };
    fetchProducts();
  }, []);

  const deleteProduct = async (id: number) => {
    const updatedProducts = products.filter(p => p.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const addProduct = async (product: Omit<Product, 'id'>) => {
    const newProduct = { ...product, id: Date.now() };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const updateProduct = async (id: number, updatedProduct: Omit<Product, 'id'>) => {
    const updatedProducts = products.map(p => p.id === id ? { ...updatedProduct, id } : p);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return (
    <ProductContext.Provider value={{ products, loading, error: null, deleteProduct, addProduct, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within ProductProvider');
  }
  return context;
};


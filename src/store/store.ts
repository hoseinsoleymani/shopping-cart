import create from "zustand";
interface AuthStore {
  user: any;
  isLogin: boolean;
  logout: () => void;
  login: (user: User) => void;
}

interface CartStore {
  products: ProductType[] | undefined;
  filterProducts: ProductType[] | undefined;
  cartProducts: ProductType[];
  filterProductsByPrice: ProductType[] | undefined;
  productsCounter: number;
  productAmount: number;
  priceRange: number;
  handleProductsCounter: () => void;
  addToCart: (product: ProductType) => void;
  removeFromCart: (product: ProductType) => void;
  removeCurrentProduct: (product: ProductType) => void;
  handleFilterProduct: (category: string) => void;
  setProducts: (data: ProductType[]) => void;
  handleFilterPriceProducts: (e: any) => void;
}

const useAuthStore = create<AuthStore>(
  (set): AuthStore => ({
    user: undefined,
    isLogin: false,
    logout: () => set(() => ({ user: undefined, isLogin: false })),
    login: (user: User) => set(() => ({ user, isLogin: true })),
  })
);

const useCartStore = create<CartStore>(
  (set): CartStore => ({
    products: [],
    cartProducts: [],
    filterProducts: [],
    filterProductsByPrice: [],
    productsCounter: 0,
    productAmount: 0,
    priceRange: 0,
    handleProductsCounter: () =>
      set((state) => {
        {
          const cartLength = state.cartProducts.reduce((ack, currentItem) => {
            return ack + currentItem.amount;
          }, 0);

          return { productsCounter: cartLength };
        }
      }),
    addToCart: (product: ProductType) => {
      set((state) => {
        const isExistProduct = state.cartProducts.find(
          (item) => item.id === product.id
        );

        if (isExistProduct) {
          const currentCart = state.cartProducts.map((item) =>
            item.id === product.id ? { ...item, amount: item.amount + 1 } : item
          );

          return {
            cartProducts: currentCart,
            productAmount: isExistProduct.amount + 1,
          };
        }

        return {
          cartProducts: [...state.cartProducts, { ...product, amount: 1 }],
          productAmount: 1,
        };
      });
    },

    removeFromCart: (product: ProductType) => {
      set((state) => {
        let productAmount = 0;
        const currentCart = state.cartProducts
          .map((item) => {
            if (item.id === product.id) {
              productAmount = item.amount - 1;
              return { ...item, amount: item.amount - 1 };
            } else return item;
          })
          .filter((item) => item.amount > 0);

        return {
          cartProducts: [...currentCart],
          productAmount,
        };
      });
    },

    removeCurrentProduct: (product: ProductType) => {
      set((state) => {
        const currentCart = state.cartProducts.filter(
          (item) => item.id !== product.id
        );

        return { cartProducts: [...currentCart] };
      });
    },

    setProducts: (data: ProductType[]) => {
      set(() => {
        return {
          products: data,
          filterProducts: data,
          filterProductsByPrice: data,
        };
      });
    },

    handleFilterProduct: (category: string) => {
      set((state) => {
        if (category.toLowerCase() === "all") {
          return { filterProducts: state.products };
        }

        const currentProducts = state.products?.filter(
          (item) => item.categories.toLowerCase() === category.toLowerCase()
        );

        return {
          filterProducts: currentProducts,
        };
      });
    },
    handleFilterPriceProducts: (e: any) => {
      set((state) => {
        const selectedPrice = e.target.value;

        const currentProducts = state.products?.filter((product) => {
          const { offProduct, price } = product;
          const addOffToPrice = price * offProduct;
          const currentPrice = price - Math.floor(addOffToPrice / 100);
          console.log("called");
          return currentPrice > +selectedPrice;
        });

        return {
          filterProductsByPrice: currentProducts,
          priceRange: selectedPrice,
        };
      });
    },
  })
);

export { useAuthStore, useCartStore };

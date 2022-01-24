interface User {
    username: string
}


interface ProductType {
    id: number;
    title: string;
    content: string;
    price: number;
    offProduct: number;
    image: {
      url: string;
    };
    categories: string;
    amount: number;
    anotherImage: [
      {
        url: string;
      }
    ];
  }
  
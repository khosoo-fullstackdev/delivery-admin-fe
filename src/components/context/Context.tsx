import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useContext,
} from "react";

interface FoodType {
  category: string;
  id: number;
  foodName: string;
  price: number;
  imagePath: string;
  ingredients: string[];
  stock: number;
  sale: number;
}

interface BagItemType {
  category: string;
  id: number;
  foodName: string;
  price: number;
  imagePath: string;
  ingredients: string[];
  stock: number;
  sale: number;
  count: number;
}

interface CustomPropsContextType {
  bagItem: BagItemType[];
  setBagItem: Dispatch<SetStateAction<BagItemType[]>>;
  allFood: FoodType[];
  setAllFood: Dispatch<SetStateAction<FoodType[]>>;
}

const CustomContext = createContext<CustomPropsContextType>({
  bagItem: [],
  setBagItem: () => {},
  allFood: [],
  setAllFood: () => {},
});

const useFood = () => {
  return useContext(CustomContext);
};

const CustomContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [allFood, setAllFood] = useState<FoodType[]>([]);
  const [bagItem, setBagItem] = useState<BagItemType[]>([]);
  const [categories, setCategories] = useState<FoodType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./dummyData.json");
        const data = await response.json();
        setAllFood(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <CustomContext.Provider
      value={{ allFood, setAllFood, bagItem, setBagItem }}
    >
      {children}
    </CustomContext.Provider>
  );
};

export { CustomContextProvider, CustomContext, useFood };

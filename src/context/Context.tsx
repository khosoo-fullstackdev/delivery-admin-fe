import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
} from "react";

interface Food {
  id: number;
  category: string;
  foodName: string;
  price: number;
  imagePath: string;
  ingredients: string[];
  sale: number;
  count: number;
}

const shopFoodFirst: Food[] = [];
const allFoodFirst: Food[] = [];

interface FoodPropsContext {
  shopFood: Food[];
  setShopFood: Dispatch<SetStateAction<Food[]>>;
  allFood: Food[];
  setAllFood: Dispatch<SetStateAction<Food[]>>;
}

const foodContext = createContext<FoodPropsContext>({
  shopFood: shopFoodFirst,
  setShopFood: () => {},
  allFood: allFoodFirst,
  setAllFood: () => {},
});

const useFood = () => {
  return useContext(foodContext);
};

const FoodContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [shopFood, setShopFood] = useState<Food[]>([]);
  const [allFood, setAllFood] = useState<Food[]>([]);
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
    <foodContext.Provider
      value={{ shopFood, setShopFood, allFood, setAllFood }}
    >
      {children}
    </foodContext.Provider>
  );
};
export { FoodContextProvider, foodContext, useFood };

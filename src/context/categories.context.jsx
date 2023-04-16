import { createContext, useEffect, useState } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';
//

// import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils.js';

export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };

  //   useEffect(() => {
  //     addCollectionAndDocuments('categories', SHOP_DATA);
  //   }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const getCategory = await getCategoriesAndDocuments();
      setCategoriesMap(getCategory);
    };

    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

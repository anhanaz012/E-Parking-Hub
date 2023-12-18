import SimpleToast from 'react-native-simple-toast';

export const Toast = (text, delay) => {
    if (delay) {
      setTimeout(() => {
        SimpleToast.show(text, 100);
      }, 500);
    } else {
      SimpleToast.show(text, 100);
    }
  };
  
  // export const getRoutes = (vendorData) => {
  //   const numRows = parseInt(vendorData.numRows);
  //   const numCols = 4; // Adjust based on the actual layout
  //   const routes = [];
  
  //   // Add horizontal routes
  //   for (let i = 1; i <= numRows; i++) {
  //     routes.push({ direction: 'horizontal', row: i });
  //   }
  
  //   // Add vertical routes
  //   for (let i = 1; i <= numCols; i++) {
  //     routes.push({ direction: 'vertical', col: i });
  //   }
  
  //   return routes;
  // };

  
  export const getRoutes = (vendorData) => {
    const numRows = parseInt(vendorData.numRows);
    const numCols = 4; // Adjust based on the actual layout
    const routes = [];
  
    // Add horizontal routes
    for (let i = 1; i <= numRows; i++) {
      routes.push({ direction: 'horizontal', row: i });
    }
  
    // Add vertical routes
    for (let i = 1; i <= numCols; i++) {
      routes.push({ direction: 'vertical', col: i });
    }
  
    return routes;
  };
  
  export const getEntryExitPoints = (vendorData) => {
    const entryPoint = vendorData.entryPoint.toLowerCase();
    const exitPoint = vendorData.exitPoint.toLowerCase();
  
    if (entryPoint === 'top' && exitPoint === 'bottom') {
      return ['entry', 'exit'];
    } else {
      return ['entry', 'exit'];
    }
  };
  
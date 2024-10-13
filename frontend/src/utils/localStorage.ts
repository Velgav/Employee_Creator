

export const saveState = (state: any) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('employeeState', serializedState);
    } catch (e) {
      console.error("Could not save state", e);
    }
  };
  
  export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('employeeState');
      if (serializedState === null) {
        return undefined; // No state in localStorage, return undefined to use default initial state
      }
      return JSON.parse(serializedState);
    } catch (e) {
      console.error("Could not load state", e);
      return undefined; // Fallback to undefined if there's an error
    }
  };
  
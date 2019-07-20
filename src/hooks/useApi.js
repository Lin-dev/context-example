// mocked api example
export default function useApi() {
  return {
    get() {
      return new Promise((resolve) => {
        window.setTimeout(() => {
          resolve({
            id: 1,
            name: 'dr. evil',
            avatar: 'https://i.imgur.com/U0F0vK4.jpg',
            isAuthenticated: true,
          });
        }, 1000);
      });
    },
  };
}

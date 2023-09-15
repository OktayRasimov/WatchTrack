import GlobalStyle from "./Styles/GlobalStyles";
import NavBar from "./features/SearchNavbar/NavBar";
import { store } from "./store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Box from "./ui/Box";
import AppLayout from "./ui/AppLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      // staleTime: 1000,
    },
  },
});

function App() {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyle />
          <AppLayout />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;

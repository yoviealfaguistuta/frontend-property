import { BrowserRouter } from "react-router-dom";

type Props = {
    children: React.ReactNode;
};

const AppProvider = ({ children }: Props) => {
    return (
        <>
            <BrowserRouter basename="/">
                {children}
            </BrowserRouter>
        </>
    )
};
export default AppProvider;
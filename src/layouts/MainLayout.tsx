import React from "react";

interface Props {
    children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
    return (
        <div className="bg-[#2E3148] h-screen w-screen overflow-hidden flex justify-center align-center text-white">
            {children}
        </div>
    );
};

export default MainLayout;

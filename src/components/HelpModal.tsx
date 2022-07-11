import { useEffect } from "react";
import { Card } from "./Card";
import { Divider } from "./Divider";
import { Title } from "./Text";

interface Props {
    open: boolean;
    onClose: () => any;
}

export const HelpModal = ({ open, onClose }: Props) => {
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "scroll";
    }, [open]);

    if (!open) return <></>;
    return (
        <div
            onClick={onClose}
            className="absolute bg-black bg-opacity-50 inset-0 cursor-pointer"
        >
            <div className="max-w-2xl h-screen m-auto flex justify-center px-4">
                <Card className="m-auto flex flex-col gap-4">
                    <Title>Khi nào thì dùng</Title>
                    <p>Khi mệt</p>
                    <p>
                        Khi CPU ngu{" "}
                        <span className="font-semibold">splitnow.app</span>
                    </p>
                    <Divider />
                    <Title>Dùng như nào</Title>
                    <ol className="list-decimal list-inside">
                        <li>Tự</li>
                        <li>Test</li>
                        <li>Éo biết :v</li>
                    </ol>
                </Card>
            </div>
        </div>
    );
};

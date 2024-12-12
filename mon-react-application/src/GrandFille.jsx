import { useContext } from "react";
import { MessageContext } from "./App";

export default function GrandFille() {
    const objet = useContext(MessageContext);
    objet.fonction();
    return (
        <div>
            <h1>GrandFille</h1>
            <p>{objet.message}</p>
        </div>
    );
}
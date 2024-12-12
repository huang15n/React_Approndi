import { useContext } from "react";
import { MessageContext } from "./App"; 

export default function GrandFils() {
    const objet = useContext(MessageContext);

    objet.fonction();
    return (
        <div>
            <h1>GrandFils</h1>
            <p>{objet.message}</p>
        </div>
    );
}
import { Connection } from "@solana/web3.js";
// import { RPC_URL } from "config";

export function getConnection(networkSelected: string) {
    let connection: Connection;

    if (networkSelected == "devnet") {
        connection = new Connection("https://api.devnet.solana.com", {
            commitment: "confirmed",
        });
    } else {
        connection = new Connection(
            process.env.NEXT_PUBLIC_HELIUS_RPC,
            { commitment: "confirmed" }
        );
    }

    return connection;
}
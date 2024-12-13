import { PublicKey } from "@solana/web3.js";
import { config } from "dotenv";

// config({
//     path: ".env",
// });


export const HELIUS_API_KEY = process.env.NEXT_PUBLIC_HELIUS_RPC;

// export const RPC_URL = `https://mainnet.helius-rpc.com/?api-key=${HELIUS_API_KEY}`;
console.log("RPC_URL================", process.env.NEXT_PUBLIC_HELIUS_RPC);

export const AUTHORITY = new PublicKey(
    "authP96E1taxSvMmrVkNGRvN1NF6ohW95g9P7wZ3iY2"
);

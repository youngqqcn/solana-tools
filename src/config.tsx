import { PublicKey } from "@solana/web3.js";
import { config } from "dotenv";

config({
    path: ".env",
});

export const HELIUS_API_KEY = 'f95cc4fe-fe7c-4de8-abed-eaefe0771ba7'

export const RPC_URL = `https://mainnet.helius-rpc.com/?api-key=${HELIUS_API_KEY}`;
console.log("RPC_URL", RPC_URL);

export const AUTHORITY = new PublicKey(
    "authP96E1taxSvMmrVkNGRvN1NF6ohW95g9P7wZ3iY2"
);

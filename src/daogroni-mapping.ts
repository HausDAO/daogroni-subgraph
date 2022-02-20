import { log } from "@graphprotocol/graph-ts";
import { Transfer } from "../generated/daogroni/daogroni";
import { Token } from "../generated/schema";

export function handleTransfer(event: Transfer): void {
  let tokenId = event.params.tokenId.toString();
  let token = Token.load(tokenId);

  log.info("transfer tokenid: {}", [tokenId]);

  if (token == null) {
    token = new Token(tokenId);
    token.createdAt = event.block.timestamp.toString();
    token.tokenId = event.params.tokenId;
  }

  token.lastTransferTime = event.block.timestamp.toString();
  token.account = event.params.to;

  token.save();
}

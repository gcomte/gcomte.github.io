### Lightning 

A Lightning integration comes wth two distinct problems for us. On one hand, we need to be able to _send_ over Lightning, on the other hand the users needs to be able to _receive_ over Lightning.   

#### Sending over Lightning

The problem here, is that Bity does not support Lightning, but sends the BTC only on-chain.

There are three ways to circumvent this issue:
* Buy Bitcoin from an exchange that supports Lightning, like [Bitfinex](https://ln.bitfinex.com/)
* Pressure Bity SA to implement Lightning
* Have some party (Relai itself or a 3rd party) that provides a swap service (receive on-chain, forward over LN)

The following reasoning will only elaborate on the third point (swap service), as it comes with quite some obstacles.

##### Money pooling / batching

Whatever solution we choose, we could save a lot in on-chain fees, if we'd only make 1 or 2 purchases per day, such that we'd only have 1 or 2 on-chain fees per day.

In this scheme, Bity would always send the BTC on-chain directly to the swap service, which would then make multiple Lightning payments, such that every customer would receive their BTC.

This might not be possible due to regulatory issues. (unclear)

##### prevent astronomically high fees

If we are sending to a Lightning node, that is poorly connected, and we are sending a high amount of Bitcoin, transactions can become extremely expensive.

The easiest way to prevent this, is to only allow LN payments for smaller amounts.

Technically it would also be possible to only make the payment if it goes through below a given fee treshhold, and if it fails sending the BTC on-chain (if we control the swap service, or the service allows to pass such an argument).

##### Relai or Puzzle ITC provides swap service

This would be the most flexible and most fee-saving option, yet it is expensive to build and maintain. I'd recommend this option only after reaching a high amount of LN purchases over Relai.

##### LNURL-withdraw

At best, we would keep the money for our users, allowing them to withdraw the money to their app over LNURL.

The only problems here, once again, are of regulatory nature. (Maybe possible for small amounts and/or small periods of time?)

#### LOOP

LOOP would be an interesting option as it allows for Submarine Swaps (trustless), but this only works for LND wallets, which must have the LOOP tool installed alongside LND.

As such, this is not suitable for our purposes, only potentially as a part of running our own service.

#### Other swap services

There are many other swap services available and left for investigation.

Most interestingly they would allow to receive one on-chain transaction but send to multiple Lightning receivers.
This would however come with it's own challenges of synchronization, as all receiving wallets would have to accept the payment simoultaneously.

#### Sending over on-chain to LN wallet

There are some custodial wallets, like [Wallet of Satoshi](https://www.walletofsatoshi.com/), or [Phoenix](https://phoenix.acinq.co/) (semi-custodial) that have a swapping service integrated. So we could just send on-chain, and they transform it to Lightning, charging a fee for the service.

This would be the easiest way, and a good start imo. The problem besides the additional fee is, that we could only support a couple of elected Lightning Wallets.   

We'd probably have to cooperate with these wallet providers, to get some kind of a functionality, that let's us create a proof, that the receiver of the BTC is also the sender of the Fiat.

There could be a problem, that Lightning wallets only provide Bech32 addresses, and no legacy or nested SegWit addresses. This is problematic because Bity does still not support sending to Bech32 addresses. Shame on you, Bity!

Furthermore, it would be nice if these wallets provided an XPUB, so that we could refrain from address reuse.  

#### Sending on-chain but opening a channel

Another option would be to send BTC on-chain, but use the on-chain transaction to open a channel. Doesn't make a lot of sense with recurring payments.

#### Receiving over Lightning

##### No fully fledged LN wallet

We should refrain from implementing an entire Lightning Wallet, as this is too complex to build and furthermore has critical issues with operating the wallet (for the end user).

Instead we should rely on already existing wallets (custodial or non-custodial), preferably ones who have an API.

#### Sending money to private wallets

If we want to send money to wallets that only have private channels (which will be very often the case), we cannot just key-send it. We'd always need an invoice. 

[LNURL](https://github.com/btcontract/lnurl-rfc) could help here. [Wallets that support LNURL](https://github.com/fiatjaf/awesome-lnurl#wallets)

###### LNURL-pay

LNURL-pay would be exactly what we need, because it allows for static contact addresses, which can be requested for invoices.

The problem here is, that most wallets neither have a publicly available address (IP), nor that they are listening 24/7 (so this would probably only be possible for custodial wallets that support LNURL-pay). 

###### LNURL-withdraw

If there is anyway that the money could be held somewhere, ready for the user to pick it up, we could use LN Url.

This would be a very neat solution, but once again, probably not permitted by the regulators.

##### inbound capacity

If you want to send over Lightning, there can be a problem that the receiver cannot receive the money because he does not have enough inbound capacity.

In such a case, it would be good to have a fallback, such that we could send the money on-chain. 

##### Proof of wallet 

Independent of what Lightning wallet solution we are going to choose, there will probably be some work to be done, for implementing the wallet verification (sender of Fiat is same person as receiver of BTC).
This might involve collaborative work with the developers of the given wallet(s).
# AlphaHomora PoolTogether

[日本語](docs/ja/README_JA.md)  
[Overview](docs/en/overview.md)  
[YouTube](https://www.youtube.com/watch?v=viwcBIKxW-s)

Alpha Finance and PoolTogether Integration.

PoolTogether is Prize Savings Protocol Ethereum smart contracts.  
For an overview of the concepts and API please see the [documentation](https://docs.pooltogether.com/)

## Concept

The poolTogether protocol has several pre-built yield source integrations sush as Compound. Now, PoolTogether offers a no-loss lottery where DAI, USDC and UNI are deposited into the Compound. But, perhaps because of the low lending rate of ETH, we do not see any no-loss lotteries where ETH is deposited. We can see Compound market overivew [here](https://compound.finance/markets).

Alpha Homora is the first leveraged yield farming and leveraged liquidity providing product in DeFi.

By integrating Alpha Homora V1 as a yield source, a higher ETH lending rate is obtained.We can see APY [here](https://homora.alphafinance.io/earn)

[Learn more in the Earn on ETH section.](https://alphafinancelab.gitbook.io/alpha-homora/#earn-on-eth)

[Alpha Homora V1 GitHub](https://github.com/AlphaFinanceLab/alphahomora)

## Setup

To install dependencies,run  
`yarn`

You will needs to enviroment variables to run the tests.
Create a `.env` file in the root directory of your project.

```
ETHERSCAN_API_KEY=
ALCHEMY_API_KEY=
```

You will get the first one from [Etherscan](https://etherscan.io/).
You will get the second one from [Alchemy](https://dashboard.alchemyapi.io/).

## Compile

To compile, run  
`yarn hardhat compile`

## Test

`yarn test`

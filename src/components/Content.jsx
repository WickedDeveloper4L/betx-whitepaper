import { Text } from "@chakra-ui/react";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "./ui/timeline";
import { LuCheck, LuShip } from "react-icons/lu";

const Content = () => {
  return (
    <TimelineRoot maxW="900px">
      <TimelineItem>
        <TimelineConnector>
          <LuShip />
        </TimelineConnector>
        <TimelineContent>
          <TimelineTitle fontWeight="bolder" textStyle="lg">
            Abstract
          </TimelineTitle>
          <Text textStyle="md">
            BETT TOKEN (BTX) is a deflationary cryptocurrency built on the TON
            blockchain, designed specifically for the sports betting industry.
            With a total supply of 70 billion tokens, BetCoin aims to facilitate
            seamless transfers between sports betting platforms, allowing
            bettors to maximize bonuses and access better odds wherever they
            are, regardless of region. This paper outlines the vision, utility,
            tokenomics, and roadmap for BetCoin.
          </Text>
          <Text textStyle="sm">
            <Text fontWeight="bold">Market Size:</Text>As of 2023, the global
            sports betting market was estimated to be worth around $203 billion
            and is projected to grow at a compound annual growth rate (CAGR) of
            approximately 10-15% over the next several years.
          </Text>
          <Text textStyle="sm">
            <Text fontWeight="bold">U.S Market:</Text> In the U.S., the sports
            betting market exploded after the repeal of PASPA in 2018. By 2022,
            it was estimated to be worth over $7 billion, with projections
            suggesting it could exceed $20 billion by 2025.
          </Text>
          <Text textStyle="sm">
            <Text fontWeight="bold">Mobile Betting:</Text>The increase in mobile
            betting is particularly noteworthy, with mobile channels accounting
            for a substantial portion of total bets—often exceeding 80% in some
            markets.
          </Text>
          <Text textStyle="sm">
            <Text fontWeight="bold">Market Segmentation:</Text>Online sports
            betting has been a major growth driver, with regions like Europe,
            North America, and Asia-Pacific, Africa leading in user engagement
            and revenue.
          </Text>
          <Text textStyle="sm">
            <Text fontWeight="bold">Regulatory Changes:</Text>The expansion of
            legal sports betting in various U.S. states has opened up new
            markets, leading to increased revenue for operators and higher tax
            revenues for states.
          </Text>
          <Text textStyle="sm">
            In emerging markets like Nigeria, sports betting has exceeded all
            expectations. There are over 60 million Nigerians who have been
            actively involved in sports betting
          </Text>
          <Text textStyle="sm">
            About $2 million is spent on sports betting daily in Nigeria. 53% of
            Nigerians engage betting at least once a day, only 3 licensed
            casinos exist in Nigeria. Despite that, casinos' estimated revenue
            is estimated at around $70 million yearly.
          </Text>
          <Text textStyle="sm">
            14 million bet stakes and payments are made over the internet every
            day Bet9ja is the second most visited website in Nigeria and #1 most
            visited online betting platform.
          </Text>
          <Text textStyle="sm">
            Bet9ja rakes in an average monthly turnover of $10m while the number
            2 player behind Bet9ja, NairaBet makes an average turnover of
            $3m-$5m, a 20-30% margin on profit About 70% of sports betting trade
            has been estimated to come from trading on football.
          </Text>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineConnector>
          <LuCheck />
        </TimelineConnector>
        <TimelineContent>
          <TimelineTitle textStyle="lg" fontWeight="bold">
            Introduction
          </TimelineTitle>
          <Text textStyle="sm">
            <Text fontWeight="bold">Background</Text>
            BETT Token offers a revolutionary opportunity and way to think of
            the sports betting industry. The sports betting industry has seen
            tremendous growth, outdoing most industries and becoming the fastest
            growing industry even in unexpected markets, yet it hasn't taken
            advantage of the opportunities blockchain technology offers.The
            industry faces challenges such as fragmentation of platforms, and
            unattractive risk-reward ratios. Bett Token addresses these issues
            by providing a unified solution for bettors.
          </Text>
          <Text textStyle="sm">
            <Text fontWeight="bold">Vision</Text>
            Our vision is to create a decentralized, efficient, and
            user-friendly ecosystem for sports betting transactions, enhancing
            the betting experience while offering significant advantages over
            traditional fiat currency transactions. At the same time giving
            bettors autonomy of value,where they're no longer just bettors and
            punters but stakeholders in the sportsbetting ecosystem, and their
            transactions provide liquidity to a currency that is 100% owned by
            the community. BETT token is going to be a bettor and community
            first token, with a growth roadmap planned around the ecosystem and
            the bettors.
          </Text>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineConnector>
          <LuCheck />
        </TimelineConnector>
        <TimelineContent>
          <TimelineTitle textStyle="lg">Problem Statement</TimelineTitle>
          <Text textStyle="sm">
            <Text fontWeight="bold">Industry Challenges</Text>
            High Fees: Traditional payment methods often impose high transaction
            fees.
            <br />
            Limited Flexibility: Bettors struggle to move funds between
            platforms to take advantage of bonuses. <br />
            Lack of Transparency: Current systems lack transparency, leading to
            trust issues among users.
          </Text>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineConnector>
          <LuCheck />
        </TimelineConnector>
        <TimelineContent>
          <TimelineTitle textStyle="lg">Solution: BetCoin</TimelineTitle>
          <Text textStyle="sm">
            <Text fontWeight="bold">Utility</Text>
            BetCoin will serve as the primary medium for transactions across
            various sports betting platforms, enabling: <br />
            Instant Transfers: Quick and low-cost transfers between platforms.{" "}
            <br />
            Bonus Access: Easy movement of funds to capitalize on
            platform-specific bonuses.
            <br />
            Increased Security: Transactions recorded on the blockchain for
            transparency and security. <br />
            Investment: BETT coin is bettor first and built around rewarding
            sports bettors.
          </Text>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineConnector>
          <LuCheck />
        </TimelineConnector>
        <TimelineContent>
          <TimelineTitle textStyle="lg">Deflationary Model</TimelineTitle>
          <Text textStyle="sm">
            A small transaction fee will be charged for each transfer, that fee
            will go directly into the liquidity pool, gradually increasing the
            value and stabilising the value of BetToken (BTX) over time.The
            total supply of 70 billion tokens will reduce over time as 500M
            tokens will be kept in reserve and burnt for every $1M added in
            market cap up to the $7M market cap milestone.
          </Text>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineConnector>
          <LuCheck />
        </TimelineConnector>
        <TimelineContent>
          <TimelineTitle textStyle="lg">Tokenomics</TimelineTitle>
          <Text textStyle="sm">
            <Text fontWeight="bold">Token Distribution</Text>
            <Text textStyle="md">Total Supply: 70 billion BTX</Text>
            <Text fontWeight="bold">Allocation:</Text>
            15% to Marketing and Partnerships: Our partnerships with the bet
            platforms and promotion drive. <br />
            <br />
            15% to Development Team <br />
            <br />
            60% to Community Incentives. <br />
            <br />
            5% for Reserve Fund <br />
            <br />
            5% Liquidity
          </Text>
          <Text fontWeight="bold">Fee Structure</Text>
          <Text textStyle="sm">
            A nominal fee (1%) for each transaction will be added to the
            liquidity pool, multiplied by millions of transactions per day.
          </Text>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineConnector>
          <LuCheck />
        </TimelineConnector>
        <TimelineContent>
          <TimelineTitle textStyle="lg" fontWeight="bold">
            Roadmap
          </TimelineTitle>
          <Text textStyle="sm">
            <Text fontWeight="bold">Phase 1</Text>
            Research and Development (0-3 Months) <br />
            -Market analysis and token design. <br />
            -Smart contract creation and deployment.
            <Text fontWeight="bold">Phase 2: Launch (4-6 Months)</Text>
            -Launch BetCoin on the TON blockchain. <br />
            -Create initial liquidity pool.
          </Text>
          <Text textStyle="sm">
            <Text fontWeight="bold">
              Phase 3: Marketing and Partnerships (6 months - 1 Yr)
            </Text>
            -Community engagement through social media and forums.
            <br /> -Partnerships with sports betting platforms.
            <Text fontWeight="bold">Phase 4: Expansion (2+ Years)</Text>
            Continuously improve the platform based on user feedback.
            <br /> Explore additional utilities, such as staking or rewards for
            users.
          </Text>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineConnector>
          <LuCheck />
        </TimelineConnector>
        <TimelineContent>
          <TimelineTitle textStyle="md">Conclusion</TimelineTitle>
          <Text textStyle="sm">
            BetCoin offers a revolutionary solution for the sports betting
            industry, addressing existing challenges while providing a
            transparent and user-friendly experience. We invite you to join us
            on this journey to reshape the future of sports betting
          </Text>
        </TimelineContent>
      </TimelineItem>
    </TimelineRoot>
  );
};
export default Content;

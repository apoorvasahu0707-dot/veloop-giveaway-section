// All giveaway data is centralized here (mock/dummy data) so the UI can later
// be wired to a real backend without changing component code.

export const CURRENT_USER = {
  isLoggedIn: true,
  name: "Apoorva S.",
  balances: {
    VEs: 350,
    SVEs: 420,
    Tokens: 1800,
  },
  joinedGiveawayIds: ["gw-apple-watch"],
};

export const GIVEAWAY_STATS = {
  totalGiveaways: "24",
  totalGiveawaysLabel: "Active",
  totalParticipants: "8.5K+",
  totalParticipantsLabel: "Users",
  prizesWon: "1.2K+",
  prizesWonLabel: "Rewards",
};

// Giveaway end time (used to drive ACTIVE -> ENDED demo state)
const now = Date.now();
export const CURRENT_GIVEAWAY_END = now + 1000 * 60 * 60 * 24 * 12; // 12 days from load
export const NEXT_GIVEAWAY_START = now + 1000 * 60 * 60 * 24 * 3; // 3 days from load

export const GIVEAWAYS = [
  {
    id: "gw-iphone",
    position: "1st Prize",
    name: "iPhone 15 Pro",
    description: "The latest iPhone 15 Pro — 128GB, Titanium finish.",
    image: "iphone",
    participants: "2.3K+",
    endsAt: CURRENT_GIVEAWAY_END,
    entryFee: { amount: 250, currency: "VEs" },
    winnerCount: 1,
    status: "active",
  },
  {
    id: "gw-apple-watch",
    position: "2nd Prize",
    name: "Apple Watch",
    description: "Apple Watch Series 9, GPS, 41mm.",
    image: "watch",
    participants: "1.6K+",
    endsAt: CURRENT_GIVEAWAY_END,
    entryFee: { amount: 200, currency: "VEs" },
    winnerCount: 3,
    status: "active",
  },
  {
    id: "gw-airpods",
    position: "3rd Prize",
    name: "AirPods Pro",
    description: "AirPods Pro (2nd generation) with MagSafe case.",
    image: "airpods",
    participants: "3.1K+",
    endsAt: CURRENT_GIVEAWAY_END,
    entryFee: { amount: 500, currency: "SVEs" },
    winnerCount: 5,
    status: "active",
  },
  {
    id: "gw-amazon-2000",
    position: "Lucky Draw",
    name: "₹2,000 Amazon Voucher",
    description: "Redeemable on any purchase at Amazon.in.",
    image: "giftcard",
    participants: "4.5K+",
    endsAt: CURRENT_GIVEAWAY_END,
    entryFee: { amount: 500, currency: "VEs" },
    winnerCount: 10,
    status: "active",
  },
  {
    id: "gw-amazon-500",
    position: "Lucky Draw",
    name: "₹500 Amazon Voucher",
    description: "Redeemable on any purchase at Amazon.in.",
    image: "giftcard",
    participants: "5.2K+",
    endsAt: CURRENT_GIVEAWAY_END,
    entryFee: { amount: 300, currency: "VEs" },
    winnerCount: 20,
    status: "active",
  },
  {
    id: "gw-amazon-20",
    position: "Lucky Draw",
    name: "₹20 Amazon Voucher",
    description: "A small instant-win reward, open to everyone.",
    image: "giftcard",
    participants: "6.8K+",
    endsAt: CURRENT_GIVEAWAY_END,
    entryFee: { amount: 2000, currency: "Tokens" },
    winnerCount: 50,
    status: "active",
  },
  {
    id: "gw-next-month",
    position: "Next Up",
    name: "PlayStation 5",
    description: "Details will be revealed when the giveaway goes live.",
    image: "trophy",
    participants: "—",
    startsAt: NEXT_GIVEAWAY_START,
    entryFee: { amount: 400, currency: "VEs" },
    winnerCount: 1,
    status: "upcoming",
  },
];

export const WINNER_TICKER = [
  { id: 1, text: "User VE****72 won an iPhone 15 Pro", prize: "iphone" },
  { id: 2, text: "User VE****19 won an Apple Watch", prize: "watch" },
  { id: 3, text: "User VE****45 won AirPods Pro", prize: "airpods" },
  { id: 4, text: "User VE****88 won a ₹2,000 Amazon Voucher", prize: "giftcard" },
  { id: 5, text: "User VE****03 won AirPods Pro", prize: "airpods" },
  { id: 6, text: "User VE****56 won a ₹500 Amazon Voucher", prize: "giftcard" },
];

export const PREVIOUS_WINNERS = [
  {
    id: "prev-1",
    giveawayName: "August Reward Rush",
    winnerId: "VE****82",
    prize: "iPhone 15 Pro",
    date: "05 Aug 2026",
  },
  {
    id: "prev-2",
    giveawayName: "August Reward Rush",
    winnerId: "VE****14",
    prize: "Apple Watch",
    date: "05 Aug 2026",
  },
  {
    id: "prev-3",
    giveawayName: "July Loyalty Draw",
    winnerId: "VE****61",
    prize: "AirPods Pro",
    date: "02 Jul 2026",
  },
  {
    id: "prev-4",
    giveawayName: "July Loyalty Draw",
    winnerId: "VE****27",
    prize: "₹2,000 Amazon Voucher",
    date: "02 Jul 2026",
  },
];

export const HOW_TO_PARTICIPATE = [
  { step: "01", title: "Sign Up / Login", desc: "Create your free VELoop account in seconds." },
  { step: "02", title: "Complete Tasks", desc: "Finish eligible activities on the platform." },
  { step: "03", title: "Earn Entries", desc: "Collect VEs, SVEs or Tokens as you go." },
  { step: "04", title: "Win Rewards", desc: "Join a giveaway and get a chance to win." },
];

export const GIVEAWAY_RULES = [
  "One entry fee is deducted per giveaway join — entries are non-refundable once a giveaway starts.",
  "Winners are selected only after the countdown reaches zero and the giveaway officially ends.",
  "Each giveaway has a fixed number of winners; the 1st Prize (iPhone) always has exactly one winner.",
  "Users must have a verified account to claim a prize.",
  "VELoop reserves the right to disqualify entries that violate platform fair-use policy.",
  "Prize claim forms must be submitted within the claim deadline shown on the winner notification.",
];

export const FAQ_ITEMS = [
  { q: "What are VEs, SVEs and Tokens?", a: "They are VELoop's in-platform reward currencies, earned by completing eligible activities. Different giveaways may require different currencies." },
  { q: "Is there a real-money entry fee?", a: "No. Giveaway entry fees are paid only using in-platform currency that you earn — never real money." },
  { q: "How is a winner chosen?", a: "Winners are selected automatically once a giveaway's countdown ends, from the pool of verified entries." },
  { q: "Can I join more than one giveaway?", a: "Yes, you can join any number of active giveaways as long as you have sufficient balance for each entry fee." },
  { q: "What happens if I don't win?", a: "Your entry fee is not returned, but you keep participating in future giveaways as you earn more currency." },
];

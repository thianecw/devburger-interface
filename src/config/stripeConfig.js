import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
	'pk_test_51QycdWJNNr2748lUN9ik6NUHukQfupMAiOZ3YHundnUk8zuh9kuwJNJ2yMdWmufpeNJxSqYlW6jlPA1FB1U3nzpA007uYa3Hcg',
);

export default stripePromise;

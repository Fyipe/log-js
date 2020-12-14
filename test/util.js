export const user = {
    name: 'John Smith',
    password: '1234567890',
    confirmPassword: '1234567890',
    companyName: 'Hackerbay',
    jobRole: 'Engineer',
    companySize: 10,
    card: {
        stripeToken: 'tok_visa',
    },
    subscription: {
        stripePlanId: 0,
    },
    cardName: 'Mastercard',
    cardNumber: '5555555555554444',
    cvv: '123',
    expiry: '01/2020',
    city: 'New York',
    state: 'New York',
    zipCode: '111000111',
    country: 'Iceland',
    planId: 'plan_GoWIYiX2L8hwzx',
    companyRole: 'Snr. Developer',
    companyPhoneNumber: '+919910568840',
    reference: 'Github',
};
export function generateRandomBusinessEmail() {
    return `${Math.random()
        .toString(36)
        .substring(7)}@${Math.random()
        .toString(36)
        .substring(5)}.com`;
}
export function generateSecondRandomBusinessEmail() {
    return `${Math.random()
        .toString(26)
        .substring(7)}@${Math.random()
        .toString(36)
        .substring(5)}.com`;
}

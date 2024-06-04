import axios from 'axios';

async function calculateAveragePrice(itemId) {
    try {
        const response = await axios.get(`https://api.example.com/items/${itemId}`);
        const prices = response.data.prices;
        const sum = prices.reduce((total, price) => total + price, 0);
        const averagePrice = sum / prices.length;
        return averagePrice;
    } catch (error) {
        console.error('Error fetching item prices:', error);
        throw error;
    }
}

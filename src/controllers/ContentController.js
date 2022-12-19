module.exports = {
    async index (req, res) {
        const content = [
            {'id': 1, 'name': 'Progresivna webova aplikacia 1', 'price': 150, 'length': '138m'},
            {'id': 2, 'name': 'Progresivna webova aplikacia 2', 'price': 199, 'length': '182m'},
            {'id': 3, 'name': 'Progresivna webova aplikacia 3', 'price': 99, 'length': '91m'},
        ]
        res.status(200).json({
            content: content
        });
    }
}